

# Web LLM: Automating Student Engagement & Communication

An AI-powered web application for:

- **Smart attendance tracking** (role-based: students post, teachers view)
- **Automated email communication**
- **Academic engagement analysis** using LLMs (Mistral, Llama 2)
- **Model selection and tone control** for LLM chat
- **Chat history management** (delete/reset)


## Stack

- **Frontend:** HTML, CSS, JS (Vanilla, no framework)
- **Backend:** Node.js, Express (dummy endpoints)
- **LLM Integration:** Open-source models (UI only, demo)
- **Mailer:** Nodemailer (dummy/demo)


## Features

- Modern, unified UI for students and teachers
- Dummy login/signup/session (localStorage, no real auth)
- Role-based dashboards and navigation
- Attendance: students submit, teachers view all records
- Email: send demo emails (UI only)
- LLM chat: select model (Mistral/Llama 2), set tone, delete chat history
- Password reset (UI only)


## Getting Started

### 1. Clone & Install Dependencies

```bash
git clone <repo-url>
cd Web-LLM-Compozent
npm install
```

This will install:
	- express
	- cors
	- dotenv
	- nodemailer
	- node-fetch
	- body-parser
	- nodemon (dev only)

### 2. Start the Node Server

For development (auto-restart on changes):
```bash
npm run dev
```
Or for production:
```bash
npm start
```

Or to run the backend directly (local use):
```bash
node ./server/app.js
```

The backend will run on `http://localhost:5000` by default.


### 3. Open the Frontend

- **With a frontend server:** Open `http://localhost:3000` in your browser.
- **For local static use:** Open `client/login.html` (or any HTML file in `client/`) directly in your browser. (No backend required for static demo.)

### 4. Demo Usage

- Use the dummy login/signup (no real backend)
- Explore as student or teacher (role selection at login)


### 5. LLM Usage (Optional)

- Install [Ollama](https://ollama.com/) and download the Llama 2 and Mistral models.
- Run them in a separate terminal:
	```bash
	ollama run mistral
	ollama run llama2
	```
- Allow network access to Ollama in its settings and ensure models are downloaded.



## Notes

- All user/session logic is dummy (localStorage only)
- No real email or LLM API calls; UI is for demo purposes
- To reset demo data, clear browser localStorage



## 🎥 Demo Video

[Click here to watch the demo video](https://github.com/user-attachments/assets/abf01dc9-df1c-4c0d-8b22-49af62d22356)
