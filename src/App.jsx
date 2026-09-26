import ChatBotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import Sidebar from "./components/Sidebar";
import WelcomePage from "./components/WelcomePage";
import pmaLogo from "./assets/PMA_Kakul_logo.png";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useRef, useEffect } from "react";

const INITIAL_BOT_MESSAGE = `I am **GC Bot** (Gentleman Cadet Bot). My primary function is to serve as an intelligent assistant based on the Joint Military Training documentation provided for Pakistan Military Academy (PMA) Kakul, as well as educational inquiries.

You can ask me about any of the subjects covered in the curriculum, including:

- Introduction to Computers and Computer Organization
- Number Systems and Logic Gates
- Operating Systems and Mobile OS comparisons
- Programming Languages (Machine, Assembly, Algorithmic, C, C++, Java, etc.)
- Computer Networks and Internet Terminologies
- Databases and Structured Query Language (SQL)
- Web Publishing, HTML, Cloud Computing, AI, and Big Data
- Microsoft Office Suite (Word, PowerPoint, and Excel tutorials and keyboard shortcuts)
- CI (Counter Intelligence) Awareness, Hostile Espionage Efforts, and Cyber Security guidelines

I can also assist with general educational, scientific, and technical questions outside the syllabus within my knowledge base. How can I assist you with your studies or documentation queries today?`;

const App = () => {
  const chatBodyRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [theme, setTheme] = useState("default");
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
        } catch {
          // ignore JSON parse error and use raw text
        }
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
          setChatHistory((hist) => [
            ...hist.filter((msg) => msg.text !== "Thinking..."),
            { role: "model", text: botResponse },
          ]);
          initialized = true;
        } else {
          setChatHistory((hist) => {
            const updatedHistory = [...hist];
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
      setChatHistory((hist) => [
        ...hist.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: "Sorry, I couldn't process that transmission right now. Please verify network connectivity." },
      ]);
    }
  };

  const handleDiveIn = (initialPrompt) => {
    setShowWelcome(false);
    if (initialPrompt && typeof initialPrompt === "string") {
      setChatHistory((prev) => [...prev, { role: "user", text: initialPrompt }]);
      setTimeout(() => {
        setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);
        generatebotResponse([...chatHistory, { role: "user", text: initialPrompt }]);
      }, 600);
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
          onDiveIn={handleDiveIn}
          theme={theme}
          setTheme={setTheme}
        />
      ) : (
        <>
          {/* Animated Sidebar */}
          <Sidebar
            theme={theme}
            setTheme={setTheme}
          />

          <div className="chatbot-popup chatbot-popup--enter tactical-chat-popup">
            {/* Sombre Tactical Grid Background in Chat */}
            <div className="chat-grid-overlay" aria-hidden="true" />

            <div className="chat-header tactical-chat-header">
              <div className="header-left-zone">
                <button
                  className="tactical-back-btn"
                  onClick={() => setShowWelcome(true)}
                  title="Return to Welcome Page"
                  aria-label="Return to Welcome Page"
                >
                  <i className="bi bi-chevron-left" />
                  <span>Briefing</span>
                </button>

                <img src={pmaLogo} alt="PMA Kakul Logo" className="header-logo" />

                <div className="header-info">
                  <h2 className="logo-text">GC Chatbot</h2>
                </div>
              </div>
            </div>

            <div ref={chatBodyRef} className="chat-body tactical-chat-body">
              {/* Opening greeting message of bot - no tag or username */}
              <div className="message bot-message tactical-msg-wrapper">
                <div className="bot-avatar-wrap">
                  <ChatBotIcon size={34} />
                </div>
                <div className="message-container">
                  <div className="message-text">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {INITIAL_BOT_MESSAGE}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>

            <div className="chat-footer tactical-chat-footer">
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
