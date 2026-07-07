"""
KidoQuest — Flask Backend  (fixed TTS + Hindi support)
Install:  pip install flask gtts werkzeug
Run:      python app.py
Open:     http://localhost:5000
"""
from flask import Flask, render_template, request, jsonify, send_file, session, make_response
from werkzeug.security import generate_password_hash, check_password_hash
from gtts import gTTS
from io import BytesIO
import sqlite3, os, re

app = Flask(__name__)
app.secret_key = "kidoquest-2024-secret"
DB = os.path.join(os.path.dirname(__file__), "kidoquest.db")

# ── helpers ──────────────────────────────────────────────
def get_db():
    c = sqlite3.connect(DB)
    c.row_factory = sqlite3.Row
    return c

def init_db():
    with get_db() as db:
        db.executescript("""
        CREATE TABLE IF NOT EXISTS users(
            id   INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE COLLATE NOCASE,
            age  INTEGER NOT NULL,
            lang TEXT NOT NULL DEFAULT 'en',
            pw   TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS scores(
            id      INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            game    TEXT,
            score   INTEGER,
            total   INTEGER,
            ts      TEXT DEFAULT (datetime('now'))
        );
        """)
        db.commit()

def ok(data=None, msg="ok", code=200):
    return jsonify({"status":"ok","msg":msg,
                    **({"data":data} if data is not None else {})}), code

def err(msg, code=400):
    return jsonify({"status":"error","msg":msg}), code


# ── TTS ──────────────────────────────────────────────────
# Strip emoji / symbols that confuse gTTS
def clean_for_tts(text, lang):
    # Remove emoji unicode blocks
    text = re.sub(r'[\U00010000-\U0010ffff]', '', text, flags=re.UNICODE)
    text = re.sub(r'[^\w\s\u0900-\u097F\u00C0-\u024F.,!?-]', '', text)
    text = text.strip()
    # For Hindi, gTTS needs clean Devanagari — remove any leftover ASCII
    if lang == 'hi':
        # keep only Devanagari + spaces + punctuation
        text = re.sub(r'[A-Za-z0-9]', '', text)
        text = text.strip()
    return text or "..."

LANG_MAP = {"en": "en", "hi": "hi", "es": "es"}

@app.route("/speak", methods=["POST"])
def speak():
    d    = request.get_json(silent=True) or {}
    text = str(d.get("text", "")).strip()
    lang = d.get("lang", "en")
    slow = bool(d.get("slow", False))

    if not text:
        return err("no text", 400)

    gtts_lang = LANG_MAP.get(lang, "en")
    clean     = clean_for_tts(text, lang)

    if not clean:
        return err("empty after clean", 400)

    try:
        tts = gTTS(text=clean, lang=gtts_lang, slow=slow)
        buf = BytesIO()
        tts.write_to_fp(buf)
        buf.seek(0)

        resp = make_response(buf.read())
        resp.headers["Content-Type"]  = "audio/mpeg"
        resp.headers["Cache-Control"] = "no-cache"
        resp.headers["Accept-Ranges"] = "bytes"
        return resp

    except Exception as e:
        # Log and return 500 so JS can fall back to Web Speech
        print(f"[TTS ERROR] lang={gtts_lang} text={clean!r}  →  {e}")
        return err(str(e), 500)


# ── AUTH ─────────────────────────────────────────────────
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():
    d    = request.get_json(silent=True) or {}
    name = d.get("name","").strip()
    age  = d.get("age", 0)
    lang = d.get("lang","en")
    pw   = d.get("pw","")
    if not name or not pw or int(age) not in (3,4,5):
        return err("bad input")
    try:
        with get_db() as db:
            db.execute("INSERT INTO users(name,age,lang,pw) VALUES(?,?,?,?)",
                       (name, int(age), lang, generate_password_hash(pw)))
            db.commit()
            u = db.execute("SELECT * FROM users WHERE name=?", (name,)).fetchone()
        session["uid"] = u["id"]
        return ok({"name":u["name"],"lang":u["lang"]}, f"Welcome, {name}!", 201)
    except sqlite3.IntegrityError:
        return err("Name taken", 409)

@app.route("/login", methods=["POST"])
def login():
    d  = request.get_json(silent=True) or {}
    name = d.get("name","").strip()
    pw   = d.get("pw","")
    with get_db() as db:
        u = db.execute("SELECT * FROM users WHERE name=? COLLATE NOCASE", (name,)).fetchone()
    if not u or not check_password_hash(u["pw"], pw):
        return err("Wrong name or password", 401)
    session["uid"] = u["id"]
    return ok({"name":u["name"],"lang":u["lang"]}, f"Welcome back, {u['name']}!")

@app.route("/logout", methods=["POST"])
def logout():
    session.clear()
    return ok(msg="bye!")


# ── CHATBOT ──────────────────────────────────────────────
RULES = {
    "en": {
        "what is a":"A is for Apple","what is b":"B is for Ball",
        "what is c":"C is for Cat","what is d":"D is for Dog",
        "what is 1":"1 is One","what is 2":"2 is Two",
        "what is cat":"Cat says Meow","what is dog":"Dog says Woof",
        "what is lion":"Lion says Roar",
        "hello":"Hi! I am KidoBot! Ask me about letters or numbers!",
        "hi":"Hello! Try asking What is A or What is 3",
        "bye":"Bye bye! See you soon!",
        "_":"Try asking What is A or What is 5"
    },
    "hi": {
        "a kya hai":"अ से अनार",
        "b kya hai":"ब से बकरी",
        "1 kya hai":"एक",
        "2 kya hai":"दो",
        "billi":"बिल्ली म्याऊँ बोलती है",
        "kutta":"कुत्ता भौंकता है",
        "hello":"नमस्ते! मैं KidoBot हूँ!",
        "namaste":"नमस्ते! कैसे हो?",
        "_":"पूछो: A kya hai, या 1 kya hai"
    },
    "es": {
        "que es a":"A es de Avion",
        "que es 1":"1 es Uno",
        "hola":"Hola! Soy KidoBot!",
        "que es gato":"El gato dice Miau",
        "_":"Pregunta: Que es A, o Hola"
    }
}

@app.route("/chatbot", methods=["POST"])
def chatbot():
    d    = request.get_json(silent=True) or {}
    msg  = d.get("text","").strip().lower()
    lang = d.get("lang","en")
    rules = RULES.get(lang, RULES["en"])
    for k,v in rules.items():
        if k != "_" and k in msg:
            return ok({"reply":v})
    for k,v in RULES["en"].items():
        if k != "_" and k in msg:
            return ok({"reply":v})
    return ok({"reply": rules.get("_", RULES["en"]["_"])})


# ── SCORES ───────────────────────────────────────────────
@app.route("/save_score", methods=["POST"])
def save_score():
    d   = request.get_json(silent=True) or {}
    uid = session.get("uid")
    if uid:
        with get_db() as db:
            db.execute("INSERT INTO scores(user_id,game,score,total) VALUES(?,?,?,?)",
                       (uid, d.get("game","?"), d.get("score",0), d.get("total",0)))
            db.commit()
    return ok()


if __name__ == "__main__":
    init_db()
    print("\n  KidoQuest  →  http://localhost:5000\n")
    app.run(debug=True, port=5000)
