from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from exceptions import PrescriberNotFound
from database import get_db
from models import Prescriber
from schemas import PrescriberCreateRequest, PrescriberCreateResponse, PrescriberUpdateRequest

router = APIRouter()

# TODO: Update return status codes


@router.get("/prescribers", tags=["Prescribers"])
async def get_prescribers(session: Session = Depends(get_db)):
    return session.exec(select(Prescriber)).all()


@router.get("/prescribers/{prescriber_id}", tags=["Prescribers"])
async def get_prescriber(prescriber_id: int, session: Session = Depends(get_db)) -> Prescriber:
    prescriber: Prescriber | None = session.get(Prescriber, prescriber_id)
    if prescriber is None:
        raise PrescriberNotFound(id=prescriber_id)

    return prescriber


@router.post("/prescribers", tags=["Prescribers"])
async def create_prescriber(prescriber_create_request: PrescriberCreateRequest, session: Session = Depends(get_db)) -> PrescriberCreateResponse:
    prescriber: Prescriber = Prescriber.from_orm(prescriber_create_request)
    session.add(prescriber)
    session.commit()
    session.refresh(prescriber)
    return PrescriberCreateResponse(prescriber_id=prescriber.id)


@router.patch("/prescribers/{prescriber_id}", tags=["Prescribers"])
async def update_prescriber(prescriber_id: int, prescriber_update: PrescriberUpdateRequest, session: Session = Depends(get_db)):
    """ Update specific fields of a prescriber, but the prescriber needs to exist. All fields are optional. """
    prescriber: Prescriber | None = session.get(Prescriber, prescriber_id)
    if prescriber is None:
        raise PrescriberNotFound(id=prescriber_id)

    for attr, value in prescriber_update.model_dump(exclude_unset=True).items():
        setattr(prescriber, attr, value)

    session.add(prescriber)
    session.commit()
    session.refresh(prescriber)
    # TODO: Return a 204 or whatever


@router.delete("/prescribers/{prescriber_id}", tags=["Prescribers"])
async def delete_prescriber(prescriber_id: int, session: Session = Depends(get_db)):
    prescriber: Prescriber | None = session.get(Prescriber, prescriber_id)
    if prescriber is None:
        raise PrescriberNotFound(id=prescriber_id)
    session.delete(prescriber)
    session.commit()