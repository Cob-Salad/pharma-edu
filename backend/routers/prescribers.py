from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from exceptions import PrescriberNotFound
from database import get_db
from models import Prescriber
from schemas import PrescriberCreateResponse, PrescriberUpdateRequest

router = APIRouter()

# TODO: Update return status codes


@router.get("/prescribers")
async def get_prescribers(session: Session = Depends(get_db)):
    return session.exec(select(Prescriber)).all()


@router.post("/prescribers")
async def create_prescriber(prescriber: Prescriber, session: Session = Depends(get_db)) -> PrescriberCreateResponse:
    session.add(prescriber)
    session.commit()
    session.refresh(prescriber)
    return PrescriberCreateResponse(prescriber_id=prescriber.id)


@router.patch("/prescribers/{prescriber_id}")
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


@router.delete("/prescribers/{prescriber_id}")
async def delete_prescriber(prescriber_id: int, session: Session = Depends(get_db)):
    prescriber: Prescriber | None = session.get(Prescriber, prescriber_id)
    if prescriber is None:
        raise PrescriberNotFound(id=prescriber_id)
    session.delete(prescriber)
    session.commit()