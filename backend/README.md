# Pharma EDU - Backend

## Setup

Create virtual environment:

```bash
python -m venv .venv
```

Activate environment:

```bash
source .venv/bin/activate
```

Install requirements:

```bash
pip install -r requirements.txt
```

Rename the `.env.example` to `.env` and fill in the database URL.

```bash
DATABASE_URL=postgresql://postgres:postgres@0.0.0.0:5432/pharma-db
```

Create database:

```bash
createdb pharma-db
```

Migrate database with alembic:

```bash
alembic upgrade head
```

Start app:

```
uvicorn main:app --reload
```
