import pmaLogo from "../assets/PMA_Kakul_logo.png";
import {
  TankIcon,
  RocketIcon,
  RadarIcon,
  CadetInsigniaIcon,
  ArmorShieldIcon,
  TankBlueprintWatermark,
  RocketBlueprintWatermark,
} from "./MilitaryIcons";

const capabilities = [
  {
    id: "tank-systems",
    icon: <TankIcon size={34} />,
    biIcon: "bi-shield-shaded",
    code: "MBT-125 // ARMOR",
    title: "Armored Warfare & Combat Computing",
    desc: "Main battle tank ballistics, fire control systems, vehicle electronics, thermal targeting, and armored fighting vehicle telemetry.",
    badge: "Armored Corps",
    query: "Explain how modern tank fire control computers calculate ballistic lead and trajectory for smoothbore cannons.",
  },
  {
    id: "rocket-systems",
    icon: <RocketIcon size={34} />,
    biIcon: "bi-rocket-takeoff",
    code: "STRAT-VEC // 450KM",
    title: "Rocketry & Ballistics Computing",
    desc: "Strategic multi-stage rocketry, aerodynamic guidance vectors, solid propellant physics, artillery computing, and defense trajectory modeling.",
    badge: "Artillery & Strategic",
    query: "Explain the ballistic trajectory calculations and staging separation dynamics for solid propellant defense rockets.",
  },
  {
    id: "cyber-ci",
    icon: <ArmorShieldIcon size={32} />,
    biIcon: "bi-shield-lock-fill",
    code: "CI-SEC // DEFCON-A",
    title: "Cyber Defense & CI Protocols",
    desc: "Counter-Intelligence awareness, hostile foreign espionage countermeasures, operational secrecy, network intrusion detection, and data encryption.",
    badge: "Counter-Intelligence",
    query: "What are the core Counter-Intelligence guidelines and cyber hygiene protocols taught for cadet operational security?",
  },
  {
    id: "jmt-core",
    icon: <CadetInsigniaIcon size={32} />,
    biIcon: "bi-mortarboard-fill",
    code: "JMT-SYL // CADET",
    title: "Joint Military Training Syllabus",
    desc: "Core academic curriculum: Computer Architecture, Logic Gates, Operating Systems, Tactical Networks, Databases, HTML, and MS Office Suite.",
    badge: "Academic Division",
    query: "Provide a comprehensive overview of the Joint Military Training (JMT) computer syllabus and topics covered at PMA Kakul.",
  },
];

const tacticalDirectives = [
  {
    label: "Tank Ballistics Computing",
    icon: <TankIcon size={18} />,
    prompt: "How does an MBT ballistic computer calculate atmospheric correction and target velocity?",
  },
  {
    label: "Rocketry & Staging Vectors",
    icon: <RocketIcon size={18} />,
    prompt: "Describe the propulsion and trajectory calculations involved in multi-stage strategic rockets.",
  },
  {
    label: "CI & Anti-Espionage Rules",
    icon: <ArmorShieldIcon size={16} />,
    prompt: "What are hostile intelligence collection techniques and how must Gentleman Cadets protect sensitive information?",
  },
  {
    label: "Military Mesh Networks",
    icon: <RadarIcon size={18} />,
    prompt: "Explain tactical computer networks, packet switching, and secure topologies in military operations.",
  },
];

const WelcomePage = ({ onDiveIn }) => {
  return (
    <div className="welcome-page tactical-military-theme">
      {/* Sombre Tactical Grid Background Elements */}
      <div className="tactical-grid-overlay" aria-hidden="true" />
      <div className="tactical-vignette" aria-hidden="true" />

      {/* Sombre Blueprint Watermarks: Tank (Left) & Rocket (Right) */}
      <TankBlueprintWatermark />
      <RocketBlueprintWatermark />

      {/* Academy Crest / Header Logo */}
      <div className="welcome-top-brand">
        <img
          src={pmaLogo}
          alt="Pakistan Military Academy Kakul Logo"
          className="welcome-academy-crest"
        />
        <div className="welcome-brand-text">
          <span className="brand-sup">PAKISTAN MILITARY ACADEMY · KAKUL</span>
          <span className="brand-motto">&ldquo;HAIDER KI TALWAR&rdquo; · EST. 1947</span>
        </div>
      </div>

      {/* Hero Section */}
      <main className="welcome-hero tactical-hero">
        {/* Tactical Crosshair Reticle & Badge */}
        <div className="tactical-emblem-wrap">
          <div className="tactical-reticle-ring" />
          <div className="tactical-reticle-ring tactical-reticle-ring--outer" />
          <div className="tactical-corner-mark mark-tl" />
          <div className="tactical-corner-mark mark-tr" />
          <div className="tactical-corner-mark mark-bl" />
          <div className="tactical-corner-mark mark-br" />

          {/* Central Crest Icon with Tank & Rocket subtle accents */}
          <div className="tactical-bot-crest">
            <div className="crest-inner-orbit">
              <TankIcon size={26} className="orbit-icon orbit-tank" />
              <RocketIcon size={26} className="orbit-icon orbit-rocket" />
            </div>
            <CadetInsigniaIcon size={44} className="crest-insignia" />
          </div>
        </div>

        {/* Dignified Cadet Badge */}
        <div className="tactical-badge">
          <i className="bi bi-award-fill badge-gold-icon" />
          <span>GENTLEMAN CADET INTEL TERMINAL</span>
          <span className="badge-sep">/</span>
          <span className="badge-status">JMT ACTIVE</span>
        </div>

        {/* Main Title */}
        <h1 className="welcome-title tactical-title">
          GC BOT
          <span className="welcome-title__sub">
            Gentleman Cadet Knowledge Terminal
          </span>
        </h1>

        {/* Subtitle */}
        <p className="welcome-subtitle tactical-subtitle">
          An intelligent, disciplined tactical assistant tailored for Gentleman Cadets at
          the <strong>Pakistan Military Academy Kakul</strong>. Authoritative guidance
          across armored vehicle systems, strategic rocketry & ballistics, cyber defense,
          counter-intelligence protocols, and the Joint Military Training curriculum.
        </p>

        {/* Action Directives */}
        <div className="welcome-cta-group">
          <button
            id="dive-in-btn"
            className="welcome-cta tactical-cta-primary"
            onClick={() => onDiveIn && onDiveIn()}
          >
            <span className="cta-icon-left">
              <i className="bi bi-terminal-fill" />
            </span>
            <span>INITIALIZE TERMINAL</span>
            <span className="cta-icon-right">
              <i className="bi bi-chevron-double-right" />
            </span>
          </button>
        </div>

        {/* Quick Tactical Mission Directives */}
        <div className="tactical-quick-prompts">
          <div className="quick-prompts-header">
            <i className="bi bi-crosshair" />
            <span>DIRECT MISSION INQUIRIES &middot; SELECT TO ENGAGE:</span>
          </div>
          <div className="quick-prompts-grid">
            {tacticalDirectives.map((d, idx) => (
              <button
                key={idx}
                className="tactical-prompt-chip"
                onClick={() => onDiveIn && onDiveIn(d.prompt)}
                title={`Ask: "${d.prompt}"`}
              >
                <span className="chip-icon">{d.icon}</span>
                <span className="chip-label">{d.label}</span>
                <i className="bi bi-arrow-up-right chip-arrow" />
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Military Capability Modules (Cards) */}
      <section className="welcome-features tactical-features-section" aria-label="Curriculum & Tactical Modules">
        <div className="features-section-header">
          <div className="section-title-wrap">
            <span className="section-subtitle">TACTICAL DOMAINS &amp; SYLLABUS DIRECTORY</span>
            <h2 className="section-title">Academy Knowledge Disciplines</h2>
          </div>
          <div className="section-spec-pill">
            <i className="bi bi-shield-check" /> ACCREDITED PMA CURRICULUM
          </div>
        </div>

        <div className="tactical-cards-grid">
          {capabilities.map((c) => (
            <div
              key={c.id}
              className="welcome-card tactical-card"
              onClick={() => onDiveIn && onDiveIn(c.query)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onDiveIn && onDiveIn(c.query)}
            >
              <div className="tactical-card__corner-accent" />
              <div className="tactical-card__top">
                <span className="tactical-card__code">{c.code}</span>
                <span className="tactical-card__badge">
                  <i className={`bi ${c.biIcon}`} /> {c.badge}
                </span>
              </div>

              <div className="tactical-card__icon-row">
                <div className="tactical-card__main-icon">{c.icon}</div>
                <div className="tactical-card__sub-icon">
                  <i className={`bi ${c.biIcon}`} />
                </div>
              </div>

              <h3 className="welcome-card__title tactical-card__title">{c.title}</h3>
              <p className="welcome-card__desc tactical-card__desc">{c.desc}</p>

              <div className="tactical-card__footer">
                <span className="action-hint">
                  <i className="bi bi-chat-square-dots" /> Engage Advisor
                </span>
                <i className="bi bi-arrow-right-short card-arrow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sombre Military Academy Footer */}
      <footer className="welcome-footer tactical-footer">
        <div className="tactical-footer-content">
          <div className="footer-insignia-row">
            <TankIcon size={20} className="footer-veh-icon" />
            <span className="footer-dot">&bull;</span>
            <RocketIcon size={20} className="footer-veh-icon" />
            <span className="footer-dot">&bull;</span>
            <CadetInsigniaIcon size={20} className="footer-veh-icon" />
          </div>
          <p className="footer-pma-text">
            PAKISTAN MILITARY ACADEMY KAKUL &middot; DEPARTMENT OF COMPUTER SCIENCES &amp; IT
          </p>
          <p className="footer-sub-text">
            DISCIPLINE &middot; VALOR &middot; INTEGRITY &middot; JOINT MILITARY TRAINING PROGRAM
          </p>
          <div className="footer-meta">
            <span>GRID: KAKUL-HQ // CLASSIFICATION: ACADEMIC EDUCATION</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
