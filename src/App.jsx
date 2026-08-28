import ChatBotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { useState, useRef, useEffect } from "react";
const App = () => {
  const chatBodyRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [theme, setTheme] = useState("light");
  const generatebotResponse = async (history) => {
    const formattedHistory = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: formattedHistory }),
    };
    try {
      const response = await fetch(
        "/api/chat",
        requestOptions,
      );

      if (!response.ok) {
        const errorText = await response.text();
        let errMsg = "Failed to generate response";
        try {
          const errJson = JSON.parse(errorText);
          errMsg = errJson.error || errMsg;
        } catch (_) {}
        throw new Error(errMsg);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = "";
      let initialized = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        botResponse += chunk;

        if (!initialized) {
          setChatHistory((history) => [
            ...history.filter((msg) => msg.text !== "Thinking..."),
            { role: "model", text: botResponse },
          ]);
          initialized = true;
        } else {
          setChatHistory((history) => {
            const updatedHistory = [...history];
            for (let i = updatedHistory.length - 1; i >= 0; i--) {
              if (updatedHistory[i].role === "model") {
                updatedHistory[i] = { ...updatedHistory[i], text: botResponse };
                break;
              }
            }
            return updatedHistory;
          });
        }
      }
    } catch (error) {
      console.error(error);
      setChatHistory((history) => [
        ...history.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: "Sorry, I couldn't process that right now." },
      ]);
    }
  };
  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);
  return (
    <div className="container" data-theme={theme}>
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <div className="header-actions">
            <a
              href="https://github.com/rehandilawar"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              title="Creator: @rehandilawar"
            >
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="Creator GitHub"
                className="github-icon"
              />
            </a>
            <a
              href="https://github.com/RehanDilawar/chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              title="Source Code"
            >
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="Source Code"
                className="github-icon"
              />
              <span className="github-label">Source</span>
            </a>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="theme-selector"
            >
              <option value="light">Light (Default)</option>
              <option value="dark">Dark Theme</option>
              <option value="vscode">VS Code</option>
              <option value="antigravity">Antigravity</option>
            </select>
          </div>
        </div>
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">
              Hello 🖐!
              <br />
              How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generatebotResponse={generatebotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
