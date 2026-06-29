# DevDesk

A secure full-stack GitHub analytics dashboard that provides developers with repository insights, language analytics, activity tracking, and authenticated access using GitHub OAuth.

![React](https://img.shields.io/badge/React-19-61DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## Overview

DevDesk enables developers to securely sign in with GitHub and visualize repository statistics, language distribution, and account activity through an intuitive dashboard.

The application uses GitHub OAuth authentication and JWT-based authorization to ensure each user can access only their own GitHub data.

---

## Features

- GitHub OAuth Authentication
- JWT-based Authorization
- Multi-user Authentication
- Repository Analytics
- Language Distribution
- Repository Search
- Repository Sorting
- Recent GitHub Activity
- Responsive User Interface
- Secure Backend APIs

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Recharts

### Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- GitHub OAuth
- JWT Authentication
- HTTPX

---

## Architecture

```
React
      │
      ▼
FastAPI Backend
      │
 JWT Authentication
      │
      ▼
 GitHub REST API
      │
      ▼
 Dashboard Analytics
```

---

## Security

- GitHub OAuth 2.0 Authentication
- JWT Access Tokens
- Protected API Routes
- User-specific GitHub Access Tokens
- Server-side Authorization
- No Hardcoded User Data

---

## Project Structure

```
DevDesk
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
└── backend
    ├── api
    ├── core
    ├── db
    ├── models
    └── main.py
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/aaryaa135/devdesk.git
cd devdesk
```

### Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Live Demo

**Frontend**

https://devdesk-coral.vercel.app

**Backend API**

https://devdesk-oefw.onrender.com/docs

---

## Roadmap

### v1.0

- GitHub Dashboard
- Repository Analytics

### v1.1

- GitHub OAuth Authentication
- JWT Authorization
- Multi-user Support
- Secure APIs
- Responsive Interface

### v2.0 (Planned)

- Opportunity Hub
- AI Resume Review
- Internship Tracker
- Developer Insights
- Career Analytics

---

## Author

**Aarya Gupta**

GitHub: https://github.com/aaryaa135

LinkedIn: https://linkedin.com/in/aaryaa--gupta

---

Built using React, FastAPI, and GitHub APIs.
