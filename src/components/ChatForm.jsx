import { useRef, useState } from "react";
import { TankIcon, RocketIcon } from "./MilitaryIcons";

const QUICK_INQUIRIES = [
  { label: "Tank Ballistics", icon: <TankIcon size={14} />, query: "Explain MBT ballistic computers and fire control targeting systems." },
  { label: "Rocket Guidance", icon: <RocketIcon size={14} />, query: "Explain the staging and trajectory calculation of defense rockets." },
  { label: "CI Directives", icon: <i className="bi bi-shield-lock-fill" />, query: "What are the core Counter-Intelligence guidelines for Gentleman Cadets?" },
  { label: "Tactical Networks", icon: <i className="bi bi-broadcast" />, query: "Describe tactical military network topologies and packet routing protocols." },
  { label: "JMT Syllabus", icon: <i className="bi bi-mortarboard-fill" />, query: "What are the core topics covered in the PMA JMT computer curriculum?" },
];

const ChatForm = ({ chatHistory, setChatHistory, generatebotResponse }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const submitQuery = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (inputRef.current) inputRef.current.value = "";
    setInputValue("");

    // Add user message to chat history
    setChatHistory((history) => [...history, { role: "user", text: trimmed }]);

    // Add thinking message to chat history
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
      generatebotResponse([...chatHistory, { role: "user", text: trimmed }]);
    }, 700);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitQuery(inputValue);
  };

  const handleChipClick = (query) => {
    submitQuery(query);
  };

  return (
    <div className="chat-form-wrapper">
      {/* Quick Tactical Inquiries Ribbon */}
      <div className="chat-quick-ribbon" aria-label="Tactical Prompt Shortcuts">
        <span className="ribbon-title">
          <i className="bi bi-crosshair" /> TACTICAL PRESETS:
        </span>
        <div className="ribbon-chips">
          {QUICK_INQUIRIES.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className="ribbon-chip"
              onClick={() => handleChipClick(item.query)}
              title={`Ask: "${item.query}"`}
            >
              <span className="ribbon-chip__icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Input Form */}
      <form action="#" className="chat-form tactical-chat-form" onSubmit={handleFormSubmit}>
        <div className="input-field-wrapper">
          <span className="input-prefix-icon" aria-hidden="true">
            <i className="bi bi-terminal-fill" />
          </span>
          <input
            type="text"
            placeholder="Transmit query, syllabus question, or tactical directive..."
            className="message-input tactical-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
            required
          />
        </div>

        <button
          type="submit"
          className="tactical-send-btn"
          title="Transmit directive"
          aria-label="Transmit directive"
        >
          <span className="send-btn-icon">
            <RocketIcon size={20} />
          </span>
          <span className="send-btn-label">TRANSMIT</span>
          <i className="bi bi-arrow-right-short send-btn-arrow" />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;