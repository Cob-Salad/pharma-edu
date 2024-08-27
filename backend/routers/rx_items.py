from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from exceptions import RxItemNotFound
from database import get_db
from models import RxItem
from schemas import RxItemCreateRequest, RxItemCreateResponse, RxItemUpdateRequest


router = APIRouter()


@router.get("/rx-items")
async def get_rx_items(session: Session = Depends(get_db)) -> list[RxItem]:
    return session.exec(select(RxItem)).all()


@router.post("/rx-items")
async def create_rx_item(rx_item_create_request: RxItemCreateRequest, session: Session = Depends(get_db)) -> RxItemCreateResponse:
    rx_item: RxItem = RxItem.from_orm(rx_item_create_request)
    session.add(rx_item)
    session.commit()
    session.refresh(rx_item)
    return RxItemCreateResponse(rx_item_id=rx_item.id)


@router.patch("/rx-items/{id}")
async def update_rx_item(id: int, rx_item_update: RxItemUpdateRequest, session: Session = Depends(get_db)):
    rx_item: RxItem | None = session.get(RxItem, id)
    if rx_item is None:
        raise RxItemNotFound(id=id)

    for attr, value in rx_item_update.model_dump(exclude_unset=True).items():
        setattr(rx_item, attr, value)

    session.add(rx_item)
    session.commit()
    session.refresh(rx_item)
    # TODO: Return a 204 or whatever