import ChatBotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import Sidebar from "./components/Sidebar";
import WelcomePage from "./components/WelcomePage";
import pmaLogo from "./assets/PMA_Kakul_logo.png";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const chatBodyRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [theme, setTheme] = useState("light");
  const [showWelcome, setShowWelcome] = useState(true);

  const generatebotResponse = async (history) => {
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: formattedHistory }),
    };
    try {
      const response = await fetch("/api/chat", requestOptions);

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
    if (!showWelcome && chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory, showWelcome]);

  return (
    <div className="container" data-theme={theme}>
      {showWelcome ? (
        <WelcomePage
          onDiveIn={() => setShowWelcome(false)}
          theme={theme}
          setTheme={setTheme}
        />
      ) : (
        <>
          {/* Animated Sidebar */}
          <Sidebar theme={theme} setTheme={setTheme} />

          <div className="chatbot-popup chatbot-popup--enter">
            <div className="chat-header">
              <img src={pmaLogo} alt="PMA Kakul Logo" className="header-logo" />
              <div className="header-info">
                <ChatBotIcon />
                <h2 className="logo-text">GC Chatbot</h2>
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
        </>
      )}
    </div>
  );
};

export default App;
