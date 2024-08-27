from sqlmodel import SQLModel, Field, Relationship
from datetime import date
from enum import Enum

# TODO: Maybe add an enum for drug class.


class State(str, Enum):
    AL = "AL"
    AK = "AK"
    AZ = "AZ"
    AR = "AR"
    CA = "CA"
    CO = "CO"
    CT = "CT"
    DE = "DE"
    FL = "FL"
    GA = "GA"
    HI = "HI"
    ID = "ID"
    IL = "IL"
    IN = "IN"
    IA = "IA"
    KS = "KS"
    KY = "KY"
    LA = "LA"
    ME = "ME"
    MD = "MD"
    MA = "MA"
    MI = "MI"
    MN = "MN"
    MS = "MS"
    MO = "MO"
    MT = "MT"
    NE = "NE"
    NV = "NV"
    NH = "NH"
    NJ = "NJ"
    NM = "NM"
    NY = "NY"
    NC = "NC"
    ND = "ND"
    OH = "OH"
    OK = "OK"
    OR = "OR"
    PA = "PA"
    RI = "RI"
    SC = "SC"
    SD = "SD"
    TN = "TN"
    TX = "TX"
    UT = "UT"
    VT = "VT"
    VA = "VA"
    WA = "WA"
    WV = "WV"
    WI = "WI"
    WY = "WY"


class PrescriberType(str, Enum):
    MD = "MD"
    DO = "DO"
    DPM = "DPM"
    DDS = "DDS"
    DMD = "DMD"
    OD = "OD"
    PharmD = "PharmD"
    DC = "DC"
    ND = "ND"
    NMD = "NMD"
    DVM = "DVM"
    PhD = "PhD"

    def description(self):
        match self:
            case PrescriberType.MD:
                return "Doctor of Medicine"
            case PrescriberType.DO:
                return "Doctor of Osteopathic Medicine"
            case PrescriberType.DPM:
                return "Doctor of Podiatric Medicine"
            case PrescriberType.DDS:
                return "Doctor of Dental Surgery"
            case PrescriberType.DMD:
                return "Doctor of Medicine in Dentistry or Doctor of Dental Medicine"
            case PrescriberType.OD:
                return "Doctor of Optometry"
            case PrescriberType.PharmD:
                return "Doctor of Pharmacy"
            case PrescriberType.DC:
                return "Doctor of Chiropractic"
            case PrescriberType.ND:
                return "Doctor of Naturopathic Medicine"
            case PrescriberType.NMD:
                return "Doctor of Naturopathic Medicine"
            case PrescriberType.DVM:
                return "Doctor of Veterinary Medicine"
            case PrescriberType.PhD:
                return "Doctor of Philosophy in Medical Field"
            case _:
                return "Unknown Prescriber Type"


class PrescriptionStatus(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    SOLD = "sold"


class Patient(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    date_of_birth: date
    street: str
    city: str
    state: State
    zipcode: str
    allergies: str = ""
    prescriptions: list["Prescription"] = Relationship(back_populates="patient")
    insurance_name: str | None = None
    insurance_member_id: str | None = None
    insurance_group_number: str | None = None
    insurance_rx_bin: str | None = None
    insurance_rx_pcn: str | None = None


class Prescriber(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
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


class Prescription(SQLModel, table=True):
    rx_number: int | None = Field(default=None, primary_key=True)
    patient_id: int = Field(foreign_key="patient.id")
    patient: Patient = Relationship(back_populates="prescriptions")
    prescriber_id: int = Field(foreign_key="prescriber.id")
    prescriber: Prescriber = Relationship()
    prescribed_date: date
    rx_item_id: int = Field(foreign_key="rxitem.id")
    rx_item: "RxItem" = Relationship()
    directions: str
    quantity: int
    quantity_dispensed: int
    refills: int
    status: PrescriptionStatus = PrescriptionStatus.PENDING
    tech_initials: str


class RxItem(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    strength: str
    ndc: str
    expiration: date | None = None
    lot_number: str
    dea_schedule: str | None = None
    drug_class: str | None = None
