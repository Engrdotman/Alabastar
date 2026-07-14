# Alabastar

Alabastar is a full-stack ecommerce scaffold with a React/Vite frontend and a Django backend.

## Repository structure

- `frontend/` — React + Vite app
- `backend/` — Django backend project
- `backend/config/` — Django settings and URL routing
- `backend/apps/` — Django app modules for accounts, products, cart, orders, payments, reviews, and more
- `frontend/src/` — React components, pages, layouts, services, and styles

## Prerequisites

- Node.js 18+ and npm
- Python 3.11+ (or compatible)

## Setup

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Run locally

### Start backend

```bash
cd backend
.venv\Scripts\activate
python manage.py runserver
```

### Start frontend

```bash
cd frontend
npm run dev
```

## GitHub Actions CI

The repository includes a workflow at `.github/workflows/ci.yml` that:
- installs backend dependencies and runs `python manage.py check`
- installs frontend dependencies and runs `npm run build`

This validates both sides of the project on every push and pull request.
