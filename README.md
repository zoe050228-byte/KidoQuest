# KidoQuest 🦁 — Complete Setup Guide

## Folder Structure
```
kidoquest/
├── app.py                ← Flask backend (run this)
├── requirements.txt      ← Python dependencies
├── kidoquest.db          ← SQLite database (auto-created)
    └── index.html        ← Full dark animated frontend
```

## Install & Run

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Start the server
python app.py

# 3. Open in browser
http://localhost:5000
```

## What's Connected

| Feature | How it works |
|---|---|
| TTS / Speech | Flask `/speak` → gTTS → real MP3 audio streamed to browser |
| Slow reading | `/speak` with `slow=true` → gTTS slow mode |
| Learning content | `/get-learning-content?lang=hi&module=alphabets` — language-aware |
| Register / Login | `/register` + `/login` → SQLite users table + localStorage fallback |
| Progress saving | `/progress` → SQLite progress table |
| Game scores | `/score` → SQLite game_scores table |
| Chatbot | `/chatbot` → rule-based, multilingual |

## Languages Supported
- 🇬🇧 **English** — full A–Z alphabets, 1–10 numbers, 12 animals, 9 birds
- 🇮🇳 **Hindi** — Hindi alphabets (अ–ज), Hindi numbers (१–१०), animals+birds in Hindi
- 🇪🇸 **Spanish** — Spanish alphabets (A–Z with Spanish words), numbers (Uno–Diez)

## API Endpoints

```
GET  /                          → Serves index.html
POST /speak                     → TTS audio (gTTS)
POST /register                  → Create account
POST /login                     → Login
POST /logout                    → Logout
GET  /get-learning-content      → ?lang=en&module=alphabets
POST /progress                  → Save learning progress
POST /score                     → Save game score
POST /chatbot                   → Chatbot reply
```

## Offline Fallback
The app works offline too — auth and learning data fall back to localStorage
if the Flask server isn't running. TTS requires the server.
