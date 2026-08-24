import ChatBotIcon from "./components/ChatBotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { useState, useRef, useEffect } from "react";
const App = () => {
  const chatBodyRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]);
  const generatebotResponse = async (history) => {
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents: history }),
    };
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions,
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message || "Failed to generate response");
      }
      const botResponse = data.candidates[0].content.parts[0].text;
      setChatHistory((history) => [
        ...history.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: botResponse },
      ]);
      console.log(data);
    } catch (error) {
      console.log(error);
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
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">Chatbot</h2>
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
