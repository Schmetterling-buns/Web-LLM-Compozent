
# Web LLM: Automating Student Engagement & Communication

An AI-powered web application for:

- Smart attendance tracking (role-based: students post, teachers view)
- Automated email communication
- Academic engagement analysis using LLMs (Mistral, Llama 2)
- Model selection and tone control for LLM chat
- Chat history management (delete/reset)

## Stack

- **Frontend**: HTML, CSS, JS (Vanilla, no framework)
- **Backend**: Node.js, Express (dummy endpoints)
- **LLM Integration**: Open-source models (UI only, demo)
- **Mailer**: Nodemailer (dummy/demo)

## Features

- Modern, unified UI for students and teachers
- Dummy login/signup/session (localStorage, no real auth)
- Role-based dashboards and navigation
- Attendance: students submit, teachers view all records
- Email: send demo emails (UI only)
- LLM chat: select model (Mistral/Llama 2), set tone, delete chat history
- Password reset (UI only)

## Usage

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

The backend will run on `http://localhost:5000` by default.

### 3. Open the Frontend

Open `http://localhost:3000` in your browser (if using a separate frontend server), or open the `client/index.html` directly if running as static files.

### 4. Demo Usage

- Use the dummy login/signup (no real backend)
- Explore as student or teacher (role selection at login)

## Notes

- All user/session logic is dummy (localStorage only)
- No real email or LLM API calls; UI is for demo purposes
- To reset demo data, clear browser localStorage

## 🎥 Demo Video

[Click here to watch the demo video](https://github.com/user-attachments/assets/abf01dc9-df1c-4c0d-8b22-49af62d22356)
