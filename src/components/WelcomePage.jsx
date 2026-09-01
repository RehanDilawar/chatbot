import pmaLogo from "../assets/PMA_Kakul_logo.png";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" />
      </svg>
    ),
    title: "JMT Curriculum",
    desc: "Covers the full Joint Military Training syllabus — computers, networks, OS, programming, and more.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z" />
      </svg>
    ),
    title: "Cyber & CI Aware",
    desc: "Includes Counter-Intelligence awareness, hostile espionage, and cyber security guidelines.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z" />
      </svg>
    ),
    title: "Gemini-Powered",
    desc: "Backed by Google Gemini with real-time streaming answers straight from PMA documentation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3zm1 13h-2v-6h2zm0-8h-2V6h2z" />
      </svg>
    ),
    title: "Doc-Grounded",
    desc: "Answers only from official PMA Kakul documentation — no hallucinations, no guesswork.",
  },
];

const WelcomePage = ({ onDiveIn, theme, setTheme }) => {
  return (
    <div className="welcome-page">
      <div className="welcome-orb welcome-orb--1" aria-hidden="true" />
      <div className="welcome-orb welcome-orb--2" aria-hidden="true" />
      <div className="welcome-orb welcome-orb--3" aria-hidden="true" />

      {/* PMA logo — top left */}
      <img src={pmaLogo} alt="PMA Kakul Logo" className="welcome-corner-logo" />

      <main className="welcome-hero">
        <div className="welcome-icon-wrap" aria-hidden="true">
          <div className="welcome-icon-ring" />
          <div className="welcome-icon-ring welcome-icon-ring--2" />
          <svg
            className="welcome-bot-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            fill="currentColor"
          >
            <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
          </svg>
        </div>

        <p className="welcome-badge">Pakistan Military Academy · Kakul</p>
        <h1 className="welcome-title">
          GC Bot
          <br />
          <span className="welcome-title__accent">Gentleman Cadet Bot</span>
        </h1>
        <p className="welcome-subtitle">
          Your intelligent assistant for the Joint Military Training curriculum
          at PMA Kakul. Ask about computers, networks, programming, cyber
          security, MS Office, and more — all grounded in official PMA
          documentation.
        </p>

        <button id="dive-in-btn" className="welcome-cta" onClick={onDiveIn}>
          <span>Dive In</span>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </main>

      <section className="welcome-features" aria-label="Features">
        {features.map((f) => (
          <div key={f.title} className="welcome-card">
            <div className="welcome-card__icon">{f.icon}</div>
            <h3 className="welcome-card__title">{f.title}</h3>
            <p className="welcome-card__desc">{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="welcome-footer">
        Built with ❤️ by{" "}
        <a
          href="https://github.com/rehandilawar"
          target="_blank"
          rel="noopener noreferrer"
          className="welcome-footer__link"
        >
          GC Hammad
        </a>
        {" · "}
        <span>Pakistan Military Academy Kakul</span>
      </footer>
    </div>
  );
};

export default WelcomePage;
