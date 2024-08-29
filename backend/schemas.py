from datetime import date

from pydantic import BaseModel

from models import PrescriberType, PrescriptionStatus, State


class PatientBasicInfo(BaseModel):
    id: int
    first_name: str
    last_name: str
    date_of_birth: date


class PatientCreateRequest(BaseModel):
    first_name: str
    last_name: str
    date_of_birth: date
    phone_number: str
    street: str
    city: str
    state: State
    zipcode: str
    allergies: str = ""
    insurance_name: str | None = None
    insurance_member_id: str | None = None
    insurance_group_number: str | None = None
    insurance_rx_bin: str | None = None
    insurance_rx_pcn: str | None = None
    insurance_person_code: str


class PatientCreateResponse(BaseModel):
    patient_id: int


class PatientUpdateRequest(BaseModel):
    first_name: str | None = None
    last_name: str | None = None
    date_of_birth: date | None = None
    phone_number: str | None = None
    street: str | None = None
    city: str | None = None
    state: State | None = None
    zipcode: str | None = None
    allergies: str | None = None
    insurance_name: str | None = None
    insurance_member_id: str | None = None
    group_number: str | None = None
    insurance_rx_bin: str | None = None
    insurance_rx_pcn: str | None = None
    insurance_person_code: str | None = None


class PrescriberCreateRequest(BaseModel):
    first_name: str
    last_name: str
    prescriber_type: PrescriberType = PrescriberType.MD
    street: str
    city: str
    state: State
    zipcode: str
    contact_number: str | None = None
    dea: str | None = None
    npi: str | None = None


class PrescriberCreateResponse(BaseModel):
    prescriber_id: int


class PrescriberUpdateRequest(BaseModel):
    first_name: str | None = None
    last_name: str | None = None
    prescriber_type: PrescriberType | None = None
    street: str | None = None
    city: str | None = None
    state: State | None = None
    zipcode: str | None = None
    contact_number: str | None = None
    dea: str | None = None
    npi: str | None = None


class PrescriptionBasicInfo(BaseModel):
    rx_number: int
    first_name: str
    last_name: str
    date_of_birth: date


class PrescriptionCreateRequest(BaseModel):
    patient_id: int
    prescriber_id: int
    prescribed_date: date
    rx_item_id: int
    directions: str
    quantity: int
    quantity_dispensed: int
    refills: int
    tech_initials: str


class PrescriptionCreateResponse(BaseModel):
    rx_number: int


class PrescriptionUpdateRequest(BaseModel):
    patient_id: int | None = None
    prescriber_id: int | None = None
    prescribed_date: date = None
    rx_item_id: int | None = None
    directions: str | None = None
    quantity: int | None = None
    quantity_dispensed: int | None = None
    refills: int | None = None
    status: PrescriptionStatus | None = None
    tech_initials: str | None = None


class RxItemCreateRequest(BaseModel):
    name: str
    strength: str
    ndc: str
    expiration: date
    lot_number: str
    dosage_form: str
    dea_schedule: str | None = None


class RxItemCreateResponse(BaseModel):
    rx_item_id: int


class RxItemUpdateRequest(BaseModel):
    name: str | None = None
    strength: str | None = None
    ndc: str | None = None
    expiration: date | None = None
    lot_number: str | None = None
    dosage_form: str | None = None
    dea_schedule: str | None = None