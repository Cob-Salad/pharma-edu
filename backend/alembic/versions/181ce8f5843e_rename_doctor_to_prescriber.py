"""Rename doctor to prescriber

Revision ID: 181ce8f5843e
Revises: 843ccec608b6
Create Date: 2024-08-17 20:41:48.993116

"""

from typing import Sequence

from alembic import op
import sqlalchemy as sa
import sqlmodel
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = "181ce8f5843e"
down_revision: str | None = "843ccec608b6"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "prescriber",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("first_name", sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column("last_name", sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column(
            "prescriber_type",
            sa.Enum(
                "MD",
                "DO",
                "DPM",
                "DDS",
                "DMD",
                "OD",
                "PharmD",
                "DC",
                "ND",
                "NMD",
                "DVM",
                "PhD",
                "NP",
                name="prescribertype",
            ),
            nullable=False,
        ),
        sa.Column("office_address_id", sa.Integer(), nullable=False),
        sa.Column("contact_number", sqlmodel.sql.sqltypes.AutoString(), nullable=True),
        sa.Column("contact_email", sqlmodel.sql.sqltypes.AutoString(), nullable=True),
        sa.Column("dea_number", sqlmodel.sql.sqltypes.AutoString(), nullable=True),
        sa.ForeignKeyConstraint(
            ["office_address_id"],
            ["address.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_table(
        "patientprescriberlink",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("patient_id", sa.Integer(), nullable=False),
        sa.Column("prescriber_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(
            ["patient_id"],
            ["patient.id"],
        ),
        sa.ForeignKeyConstraint(
            ["prescriber_id"],
            ["prescriber.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    op.drop_table("patientdoctorlink")
    op.drop_table("doctor")
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "doctor",
        sa.Column(
            "id",
            sa.INTEGER(),
            server_default=sa.text("nextval('doctors_id_seq'::regclass)"),
            autoincrement=True,
            nullable=False,
        ),
        sa.Column("first_name", sa.VARCHAR(), autoincrement=False, nullable=False),
        sa.Column("last_name", sa.VARCHAR(), autoincrement=False, nullable=False),
        sa.Column(
            "doctor_type",
            postgresql.ENUM(
                "MD",
                "DO",
                "DPM",
                "DDS",
                "DMD",
                "OD",
                "PharmD",
                "DC",
                "ND",
                "NMD",
                "DVM",
                "PhD",
                "NP",
                name="doctortype",
            ),
            autoincrement=False,
            nullable=False,
        ),
        sa.Column(
            "office_address_id", sa.INTEGER(), autoincrement=False, nullable=False
        ),
        sa.Column("contact_number", sa.VARCHAR(), autoincrement=False, nullable=True),
        sa.Column("contact_email", sa.VARCHAR(), autoincrement=False, nullable=True),
        sa.Column("dea_number", sa.VARCHAR(), autoincrement=False, nullable=True),
        sa.ForeignKeyConstraint(
            ["office_address_id"], ["address.id"], name="doctors_office_address_id_fkey"
        ),
        sa.PrimaryKeyConstraint("id", name="doctors_pkey"),
        postgresql_ignore_search_path=False,
    )
    op.create_table(
        "patientdoctorlink",
        sa.Column("id", sa.INTEGER(), autoincrement=True, nullable=False),
        sa.Column("patient_id", sa.INTEGER(), autoincrement=False, nullable=False),
        sa.Column("doctor_id", sa.INTEGER(), autoincrement=False, nullable=False),
        sa.ForeignKeyConstraint(
            ["doctor_id"], ["doctor.id"], name="patientdoctorlink_doctor_id_fkey"
        ),
        sa.ForeignKeyConstraint(
            ["patient_id"], ["patient.id"], name="patientdoctorlink_patient_id_fkey"
        ),
        sa.PrimaryKeyConstraint("id", name="patientdoctorlink_pkey"),
    )
    op.drop_table("patientprescriberlink")
    op.drop_table("prescriber")
    # ### end Alembic commands ###
