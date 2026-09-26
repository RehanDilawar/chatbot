# 🎖️ GC Bot — Pakistan Military Academy Kakul

[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://chatbot-rehandilawar.vercel.app/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

An intelligent, disciplined tactical AI assistant tailored for Gentleman Cadets at the **Pakistan Military Academy (PMA) Kakul**. Built with **React 19**, **Vite 8**, and powered by **Google Gemini** through **Vercel Serverless Functions**, GC Bot delivers grounded, real-time streamed responses straight from official Joint Military Training (JMT) curriculum documentation.

> **Live Demo:** [Experience GC Bot on Vercel!](https://chatbot-rehandilawar.vercel.app/)

---

## ✨ Features

- 🎖️ **PMA Kakul Gentleman Cadet Interface**: Purpose-built for Gentleman Cadets to query curriculum subjects, computer science, cyber defense, counter-intelligence guidelines, and educational inquiries.
- 🛡️ **Sombre Tactical Military Aesthetic**: Soft, decent, dignified command terminal design with ambient vector blueprints of Main Battle Tanks (Al-Khalid MBT) and Strategic Ballistic Rockets.
- 🎯 **Tactical Presets & Direct Mission Inquiries**: Instant-launch prompt shortcuts covering tank fire control computing, rocket guidance & staging, counter-intelligence protocols, military networks, and academic subjects.
- 🧠 **Secure Serverless AI Proxy**: Routes all queries through server-side Vercel Serverless Functions to keep Gemini API credentials completely hidden and secure.
- ⚡ **Real-Time Streaming**: Delivers chunk-by-chunk streaming responses for an interactive, responsive terminal experience.
- 📁 **Automated Curriculum Knowledge Base**: Pre-compiles and sanitizes the official `data.docx` syllabus into lightweight HTML at build/dev time for grounded, transparent answers.
- 📊 **Context Quota Optimization**: Utilizes a sliding window of the last 8 messages (4 user turns + 4 assistant responses) to control token accumulation.
- 🎨 **Tactical Color Schemes**:
  - 🌲 **Sombre Military Drab** (Deep olive gunmetal & cadet brass — default)
  - ⚓ **Tactical Slate Gray** (Stealth operations palette)
  - 🏜️ **Field Khaki Parchment** (Desert sand field notebook)
- 📝 **Markdown & Code Rendering**: Uses `react-markdown` and `remark-gfm` for tables, lists, and formatted technical code blocks.
- 📋 **One-Click Transmission Copy**: Easily copy bot explanations directly to your clipboard.

---

## 🛠️ Tech Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,react,vite,html,css,vercel" alt="Tech Stack" />
  </a>
</p>

- **Frontend**: React 19, Vite 8
- **Icons & Visuals**: Bootstrap Icons (`bootstrap-icons`), Custom Tactical SVG Blueprints (Tanks & Rockets)
- **Typography**: Google Fonts (*Rajdhani*, *Share Tech Mono*, *Inter*)
- **Backend API**: Node.js, Vercel Serverless Functions
- **GenAI SDK**: `@google/genai` (Google Gemini API)
- **Document Ingestion**: `mammoth` (Word document to HTML converter)
- **Styling**: Vanilla CSS with CSS Variables (`data-theme`)
- **Markdown**: `react-markdown`, `remark-gfm`

---

## 📋 Prerequisites

- **[Node.js](https://nodejs.org/)** (`v18.0.0` or higher)
- **npm** (bundled with Node.js)
- **[Vercel CLI](https://vercel.com/cli)** (for local serverless testing):
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

### 2. Configure Documentation
Ensure the curriculum Word document is placed in the `api` directory:
- Path: `api/data.docx` *(This file is automatically converted to `api/data.html` during `predev` and `prebuild` scripts).*

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=YOUR_API_KEY_HERE"
```

*(The backend extracts the key dynamically during local development, or reads `GEMINI_API_KEY` in production on Vercel).*

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Development Server

To run the Vite frontend together with the serverless backend, start the Vercel local development environment:

```bash
vercel dev
```

Alternatively, to run only the Vite client:

```bash
npm run dev
```

---

## 🌐 Deployment

The project is configured for seamless one-click deployment on **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rehandilawar/chatbot)

*Configure the **`GEMINI_API_KEY`** environment variable inside your Vercel Project Settings.*

---

<p align="center">
  Pakistan Military Academy Kakul &middot; <i>&ldquo;Haider Ki Talwar&rdquo;</i>
</p>
