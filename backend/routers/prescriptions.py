from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from exceptions import PrescriptionNotFound
from database import get_db
from models import Prescription
from schemas import PrescriptionBasicInfo, PrescriptionCreateResponse, PrescriptionUpdateRequest


router = APIRouter()


@router.get("/prescriptions")
async def get_prescriptions(session: Session = Depends(get_db)) -> list[PrescriptionBasicInfo]:
    prescriptions: list[Prescription] = session.exec(select(Prescription)).all()
    return map(lambda prescription: PrescriptionBasicInfo(
                                        rx_number=prescription.rx_number,
                                        first_name=prescription.patient.first_name,
                                        last_name=prescription.patient.last_name,
                                        date_of_birth=prescription.patient.date_of_birth),
                                    prescriptions)


@router.get("/prescriptions/{prescription_id}")
async def get_prescription(prescription_id: int, session: Session = Depends(get_db)) -> Prescription:
    prescription: Prescription | None = session.get(Prescription, prescription_id)
    if prescription is None:
        raise PrescriptionNotFound(id=prescription_id)

    return prescription


@router.post("/prescriptions")
async def create_prescription(prescription: Prescription, session: Session = Depends(get_db)) -> PrescriptionCreateResponse:
    session.add(prescription)
    session.commit()
    session.refresh(prescription)
    return PrescriptionCreateResponse(rx_number=prescription.rx_number)


@router.patch("/prescriptions/{prescription_id}")
async def update_prescription(prescription_id: int, prescription_update: PrescriptionUpdateRequest, session: Session = Depends(get_db)):
    """ Update specific fields of a prescription, but the prescription needs to exist. All fields are optional. """
    prescription: Prescription | None = session.get(Prescription, prescription_id)
    if prescription is None:
        raise PrescriptionNotFound(id=prescription_id)

    for attr, value in prescription_update.model_dump(exclude_unset=True).items():
        setattr(prescription, attr, value)

    session.add(prescription)
    session.commit()
    session.refresh(prescription)
    # TODO: Return a 204 or whatever


@router.delete("/prescriptions/{prescription_id}")
async def delete_prescription(prescription_id: int, session: Session = Depends(get_db)):
    prescription: Prescription | None = session.get(Prescription, prescription_id)
    if prescription is None:
        raise PrescriptionNotFound(id=prescription_id)
    session.delete(prescription)
    session.commit()