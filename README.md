# 🤖 React AI Chatbot

[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://chatbot-rehandilawar.vercel.app/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A modern, responsive, and deeply customizable AI Chatbot interface built with **React** and **Vite** powered by **Vercel Serverless Functions**. This application connects securely to the Gemini API (`gemini-3.5-flash-lite`) to answer user questions using custom local documentation loaded from a Word document (`.docx`).

> **Live Demo:** [Experience the Chatbot on Vercel!](https://chatbot-rehandilawar.vercel.app/)

---

## ✨ Features

- 🧠 **Secure AI Proxy**: Routes all requests through a server-side Vercel Serverless Function to keep Gemini API credentials 100% hidden and secure.
- ⚡ **Real-Time Streaming**: Stream responses chunk-by-chunk in real-time to the React client for a fast, conversational feel.
- 📁 **Automated Document Knowledge Base**: Converts and cleans a massive `data.docx` Word file into structural HTML (discarding binary images to save tokens) automatically at build/dev time.
- 📊 **Context Quota Protection**: Implements a sliding window of the **last 8 messages** (4 user turns + 4 assistant responses) to control token accumulation and stay within Gemini free tier limits.
- 🎨 **Dynamic Theming Engine**: Switch instantly between four carefully crafted UI themes:
  - ☀️ **Light** (Clean & bright default UI)
  - 🌙 **Dark** (Modern styling that's easy on the eyes)
  - 💻 **VS Code** (Developer-focused dark aesthetic)
  - 🚀 **Antigravity** (Premium, vibrant interface design)
- 📝 **Advanced Markdown Support**: Utilizes `react-markdown` and `remark-gfm` to render code snippets, tables, lists, and formatted text directly within chat bubbles.
- 📱 **Fully Responsive UI**: A mobile-first, floating chat widget design built with modern CSS, ensuring pixel-perfect functionality across desktops, tablets, and smartphones.

---

## 🛠️ Tech Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,react,vite,html,css,vercel" alt="Tech Stack" />
  </a>
</p>

- **Frontend Core**: React 19, Vite 8
- **Backend API**: Node.js, Vercel Serverless Functions
- **GenAI SDK**: `@google/genai` (Gemini API Integration)
- **Document Parsing**: `mammoth` (Word document HTML extractor)
- **Styling**: Modern Vanilla CSS, CSS Variables (`data-theme`)
- **Text Rendering**: `react-markdown`, `remark-gfm`

---

## 📋 Prerequisites

- **[Node.js](https://nodejs.org/)** (`v18.0.0` or higher)
- **npm** (bundled with Node.js)
- **[Vercel CLI](https://vercel.com/cli)** (required to run and test serverless function API endpoints locally)
  ```bash
  npm install -g vercel
  ```

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/rehandilawar/chatbot.git
cd chatbot
```

### 2. Configure Your Documentation
Place your Word documentation file inside the `api` folder:
- Path: `api/data.docx` *(This file will be automatically parsed to `api/data.html` before running or building).*

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=YOUR_API_KEY_HERE"
```
*(The backend is built to dynamically extract the API key from `VITE_API_URL` during local development, or look for `GEMINI_API_KEY` when deployed).*

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Local Development Server
To run both the Vite frontend dev server and the backend API serverless functions together, start the local Vercel dev environment:

```bash
vercel dev
```

The server will launch on `http://localhost:3000`. Open it in your default browser and start chatting!

---

## 🌐 Deployment

The application is fully optimized for seamless deployment on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rehandilawar/chatbot)

*Remember to add your **`GEMINI_API_KEY`** environment variable inside your project settings on the Vercel Dashboard.*

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/rehandilawar">Rehan Dilawar</a>
</p>
