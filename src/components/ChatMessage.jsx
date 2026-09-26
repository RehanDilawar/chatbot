import { useState } from "react";
import ChatBotIcon from "./ChatbotIcon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatMessage = ({ chat }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!chat.text) return;
    navigator.clipboard.writeText(chat.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (chat.hideInChat) return null;

  const isBot = chat.role === "model";

  return (
    <div className={`message ${isBot ? "bot" : "user"}-message tactical-msg-wrapper`}>
      {isBot && (
        <div className="bot-avatar-wrap">
          <ChatBotIcon size={34} />
        </div>
      )}

      <div className="message-container">
        <div className="message-text">
          {chat.text === "Thinking..." ? (
            <div className="tactical-thinking">
              <span className="radar-sweep-dot" />
              <span>Computing response...</span>
            </div>
          ) : (
            <>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{chat.text}</ReactMarkdown>
              {isBot && (
                <button
                  className="copy-msg-btn copy-msg-btn--inline"
                  onClick={handleCopy}
                  title="Copy text"
                  aria-label="Copy text"
                >
                  <i className={`bi ${copied ? "bi-check-lg" : "bi-clipboard"}`} />
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
