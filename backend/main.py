from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Meta Greenville API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/api/artworks")
def list_artworks():
    """Return a sample list of artworks. Replace with DB queries."""
    return [
        {"id": 1, "title": "Neon Genesis #04", "artist": "voidpixel", "price": 0.85},
        {"id": 2, "title": "Cyber Bloom", "artist": "luminarix", "price": 1.20},
        {"id": 3, "title": "Abstract Void III", "artist": "neonwitch", "price": 0.42},
        {"id": 4, "title": "Digital Forest", "artist": "greendata", "price": 0.67},
    ]
