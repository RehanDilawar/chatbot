import ChatBotIcon from "./ChatbotIcon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatMessage = ({ chat }) => {
  return (
    !chat.hideInChat && (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message`}
    >
      {chat.role === "model" && <ChatBotIcon />}
      <div className="message-text">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{chat.text}</ReactMarkdown>
      </div>
    </div>
  )
)
};

export default ChatMessage;
