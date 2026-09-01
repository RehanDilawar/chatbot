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
        <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar panel */}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        {/* Sidebar header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
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
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
                  -1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
                  3.492.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93
                  0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3
                  1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
                  3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22
                  0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
                  0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295
                  24 12c0-6.63-5.37-12-12-12z"
                />
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
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2
                  9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                />
              </svg>
            </span>
            <span className="sidebar-link__text">Creator</span>
            <span className="sidebar-link__badge">@hammad.gc</span>
          </a>
        </nav>

        {/* Divider */}
        <div className="sidebar-divider" />

        {/* Theme selector */}
        <div className="sidebar-section">
          <p className="sidebar-section__label">Theme</p>
          <div className="sidebar-themes">
            {[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
              { value: "vscode", label: "Sea" },
              { value: "antigravity", label: "Neon Punk" },
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
          <p>Built with ❤️ by GC Hammad</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
