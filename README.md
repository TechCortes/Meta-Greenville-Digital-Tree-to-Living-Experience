# Meta Greenville

A Digital Art Marketplace — discover, buy, and sell unique digital artwork.

## Stack

- **Frontend**: React (Vite)
- **Backend**: Python (FastAPI)

## Project Structure

```
meta-greenville/
├── frontend/          # React landing page
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── backend/           # Python API
    ├── main.py
    └── requirements.txt
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## License

MIT
