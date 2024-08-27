from fastapi import HTTPException, status


class PrescriberNotFound(HTTPException):
    def __init__(self, id: int):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Doctor ID: {id} not found."
        )


class PatientNotFound(HTTPException):
    def __init__(self, id: int):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Patient ID: {id} not found."
        )


class PrescriptionNotFound(HTTPException):
    def __init__(self, rx_num: int):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Prescription number: {rx_num} not found."
        )


class RxItemNotFound(HTTPException):
    def __init__(self, id: int):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Rx item ID: {id} not found."
        )
