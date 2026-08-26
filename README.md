# 🤖 React AI Chatbot

[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://chatbot-rehandilawar.vercel.app/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A modern, responsive, and deeply customizable AI Chatbot interface built with **React** and **Vite**. This application connects seamlessly to generative AI models to provide an intelligent conversational experience. It features real-time chat history management, rich markdown rendering for text responses, and a fully dynamic theming engine offering exclusive aesthetics like "VS Code" and "Antigravity".

> **Live Demo:** [Experience the Chatbot on Vercel!](https://chatbot-rehandilawar.vercel.app/)

---

## ✨ Features

- 🧠 **Smart AI Integration**: Built-in architecture to communicate with advanced LLMs via REST API, maintaining full conversation context and history.
- 🎨 **Dynamic Theming Engine**: Switch instantly between four carefully crafted UI themes:
  - ☀️ **Light** (Clean & bright default UI)
  - 🌙 **Dark** (Modern styling that's easy on the eyes)
  - � **VS Code** (Developer-focused dark aesthetic)
  - 🚀 **Antigravity** (Premium, vibrant interface design)
- � **Advanced Markdown Support**: Utilizes `react-markdown` and `remark-gfm` to brilliantly render code snippets, tables, lists, and formatted text directly within chat bubbles.
- 📱 **Fully Responsive UI**: A mobile-first, floating chat widget design built with modern CSS, ensuring pixel-perfect functionality across desktops, tablets, and smartphones.
- ⚙️ **Custom Injectable Context**: Pre-injects base system prompts via hidden `companyInfo` context payloads, allowing the chatbot to act as a deeply tailored assistant for any specific business.

---

## 🛠️ Tech Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,react,vite,html,css,vercel" alt="Tech Stack" />
  </a>
</p>

- **Frontend Core**: React 19, Vite 8
- **Styling**: Modern Vanilla CSS, CSS Variables (`data-theme`)
- **Text Rendering**: `react-markdown`, `remark-gfm`
- **Hosting & Deployment**: Vercel

---

## 📋 Prerequisites

- **[Node.js](https://nodejs.org/)** (`v18.0.0` or higher)
- **npm** (bundled with Node.js)
- Supported local environment to load API credentials.

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/rehandilawar/chatbot.git
cd chatbot
```

### 2. Environment Setup

Create a `.env` file in the root directory and add your AI endpoint configuration:

```env
VITE_API_URL="your_ai_api_endpoint_here"
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

The Vite dev server will spin up on `http://localhost:5173`. Open it in your default browser and start chatting!

---

## 🌐 Deployment

The application is optimized for seamless deployment on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rehandilawar/chatbot)

**🔗 Live Application:** [https://chatbot-rehandilawar.vercel.app/](https://chatbot-rehandilawar.vercel.app/)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/rehandilawar">Rehan Dilawar</a>
</p>
