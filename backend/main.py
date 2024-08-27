from fastapi import FastAPI

from routers import patients, prescribers, prescriptions, rx_items


app = FastAPI()

app.include_router(prescribers.router)
app.include_router(patients.router)
app.include_router(prescriptions.router)
app.include_router(rx_items.router)
