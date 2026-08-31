import { useState } from "react";

const Sidebar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger toggle button */}
      <button
        id="sidebar-toggle"
        className={`sidebar-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle sidebar"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        {/* Sidebar header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" />
              <text x="50" y="67" textAnchor="middle" fontSize="50" fill="currentColor">🤖</text>
            </svg>
            <span>Menu</span>
          </div>
        </div>

        {/* Divider */}
        <div className="sidebar-divider" />

        {/* Nav links */}
        <nav className="sidebar-nav">
          {/* Source Code */}
          <a
            id="sidebar-source-code"
            href="https://github.com/RehanDilawar/chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="sidebar-link__icon">
              {/* GitHub icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
                  -1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
                  3.492.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93
                  0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3
                  1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
                  3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22
                  0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
                  0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295
                  24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </span>
            <span className="sidebar-link__text">Source Code</span>
            <span className="sidebar-link__badge">GitHub</span>
          </a>

          {/* Creator */}
          <a
            id="sidebar-creator"
            href="https://github.com/rehandilawar"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="sidebar-link__icon">
              {/* Person icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2
                  9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </span>
            <span className="sidebar-link__text">Creator</span>
            <span className="sidebar-link__badge">@rehandilawar</span>
          </a>
        </nav>

        {/* Divider */}
        <div className="sidebar-divider" />

        {/* Theme selector */}
        <div className="sidebar-section">
          <p className="sidebar-section__label">Theme</p>
          <div className="sidebar-themes">
            {[
              { value: "light", label: "☀️ Light" },
              { value: "dark", label: "🌙 Dark" },
              { value: "vscode", label: "💻 VS Code" },
              { value: "antigravity", label: "🚀 Antigravity" },
            ].map((t) => (
              <button
                key={t.value}
                id={`theme-btn-${t.value}`}
                className={`sidebar-theme-btn ${theme === t.value ? "active" : ""}`}
                onClick={() => setTheme(t.value)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <p>Built with ❤️ by Rehan</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
