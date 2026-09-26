import { useState } from "react";
import ChatBotIcon from "./ChatbotIcon";

const Sidebar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger toggle button */}
      <button
        id="sidebar-toggle"
        className={`sidebar-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar panel */}
      <aside className={`sidebar tactical-sidebar ${isOpen ? "sidebar--open" : ""}`}>
        {/* Sidebar header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <ChatBotIcon size={34} />
            <div className="sidebar-logo-meta">
              <span className="sidebar-title">COMMAND CONSOLE</span>
              <span className="sidebar-sub">PMA KAKUL · CADET AI</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="sidebar-divider" />

        {/* Nav links - ONLY Source Code */}
        <nav className="sidebar-nav">
          <a
            id="sidebar-source-code"
            href="https://github.com/RehanDilawar/chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="sidebar-link__icon">
              <i className="bi bi-github" />
            </span>
            <span className="sidebar-link__text">Source Code</span>
            <span className="sidebar-link__badge">GitHub</span>
          </a>
        </nav>

        {/* Divider */}
        <div className="sidebar-divider" />

        {/* Theme selector */}
        <div className="sidebar-section">
          <p className="sidebar-section__label">
            <i className="bi bi-palette-fill" /> Color Scheme
          </p>
          <div className="sidebar-themes">
            {[
              { value: "default", label: "Sombre Military Drab" },
              { value: "vscode", label: "Tactical Slate Gray" },
              { value: "light", label: "Field Khaki Parchment" },
            ].map((t) => (
              <button
                key={t.value}
                id={`theme-btn-${t.value}`}
                className={`sidebar-theme-btn ${theme === t.value ? "active" : ""}`}
                onClick={() => setTheme(t.value)}
              >
                <i className={`bi ${theme === t.value ? "bi-check-circle-fill" : "bi-circle"}`} />
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <p className="sidebar-footer__pma">PAKISTAN MILITARY ACADEMY</p>
          <p className="sidebar-footer__motto">&ldquo;HAIDER KI TALWAR&rdquo;</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
