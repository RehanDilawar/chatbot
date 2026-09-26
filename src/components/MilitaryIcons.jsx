
/**
 * High-precision, sombre, soft military vector icons and blueprints
 * Crafted for PMA Kakul Cadet Command Terminal
 */

// 1. Main Battle Tank (MBT) Icon - soft, decent, tactical
export const TankIcon = ({ className = "", size = 24, style = {} }) => (
  <svg
    viewBox="0 0 48 32"
    width={size}
    height={size * (32 / 48)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    {/* Gun Barrel with muzzle brake & bore evacuator */}
    <path
      d="M31 11H46V13H31"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="38" y="10" width="3" height="4" rx="0.5" fill="currentColor" opacity="0.8" />
    <path d="M45 9.5V14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* Turret */}
    <path
      d="M16 16L19 9H29L32 16H16Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />
    {/* Commander Cupola / Sensor */}
    <rect x="21" y="6.5" width="4" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.3" />
    <path d="M23 4V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    {/* Turret Hatch / Antenna */}
    <path d="M27 9V3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.75" />

    {/* Upper Hull & Glacis */}
    <path
      d="M6 19L11 15H36L39 19H6Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.18"
    />

    {/* Side Skirt / Armor Plates */}
    <rect
      x="7"
      y="18.5"
      width="31"
      height="3.5"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="currentColor"
      fillOpacity="0.25"
    />
    {/* Armor Plate Segments */}
    <line x1="14" y1="19" x2="14" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="21" y1="19" x2="21" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="28" y1="19" x2="28" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />

    {/* Lower Hull Track Outline */}
    <rect
      x="4"
      y="22"
      width="37"
      height="7.5"
      rx="3.75"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Road Wheels (6 wheels for heavy tank) */}
    <circle cx="8" cy="25.75" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.4" />
    <circle cx="14" cy="25.75" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.4" />
    <circle cx="20" cy="25.75" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.4" />
    <circle cx="26" cy="25.75" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.4" />
    <circle cx="32" cy="25.75" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.4" />
    <circle cx="38" cy="25.75" r="1.8" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.4" />
  </svg>
);

// 2. Ballistic Rocket & Strategic Missile Icon - soft, decent, sombre
export const RocketIcon = ({ className = "", size = 24, style = {} }) => (
  <svg
    viewBox="0 0 32 48"
    width={size * (32 / 48)}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    {/* Aerodynamic Nosecone */}
    <path
      d="M16 2C16 2 20 8 20 14H12C12 8 16 2 16 2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <line x1="16" y1="2" x2="16" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.5" />

    {/* Stage 2 Avionics & Guidance Body */}
    <path
      d="M12 14H20V24H12V14Z"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="currentColor"
      fillOpacity="0.15"
    />
    {/* Body interstage line & sensor marker */}
    <line x1="12" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    <circle cx="16" cy="21" r="1.2" fill="currentColor" opacity="0.8" />

    {/* Stage 1 Propulsion Booster */}
    <path
      d="M12 24H20V35H12V24Z"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="currentColor"
      fillOpacity="0.18"
    />
    <line x1="14" y1="26" x2="14" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="18" y1="26" x2="18" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.4" />

    {/* Aerodynamic Stabilization Fins */}
    {/* Left fin */}
    <path
      d="M12 28L6 37H12V28Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.3"
    />
    {/* Right fin */}
    <path
      d="M20 28L26 37H20V28Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.3"
    />
    {/* Center ventral strake */}
    <line x1="16" y1="31" x2="16" y2="37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

    {/* Engine Rocket Nozzle */}
    <path
      d="M13.5 35L12 39H20L18.5 35"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.4"
    />

    {/* Soft Sombre Thrust Plume / Vector (dashed/subtle) */}
    <path
      d="M14 41L16 46L18 41"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    <line x1="16" y1="39" x2="16" y2="44" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 2" opacity="0.6" />
  </svg>
);

// 3. Tactical Radar Scope Icon
export const RadarIcon = ({ className = "", size = 24, style = {} }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.5" />
    <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    {/* Radar sweep beam */}
    <path d="M12 12L19 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Target blip */}
    <circle cx="16" cy="8" r="1.5" fill="currentColor" />
  </svg>
);

// 4. Military Crosshairs / Reticle
export const CrosshairsIcon = ({ className = "", size = 24, style = {} }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    {/* Cross lines with stadia breaks */}
    <line x1="12" y1="1" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="1" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Center dot */}
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

// 5. Military Cadet Insignia / Chevrons
export const CadetInsigniaIcon = ({ className = "", size = 24, style = {} }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    {/* Academy Star at top */}
    <path
      d="M12 2L13.2 5.5H16.8L13.9 7.6L15 11L12 8.9L9 11L10.1 7.6L7.2 5.5H10.8L12 2Z"
      fill="currentColor"
    />
    {/* Chevron 1 */}
    <path
      d="M4 12L12 16L20 12"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Chevron 2 */}
    <path
      d="M4 16L12 20L20 16"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. Cyber & CI Shield Armor
export const ArmorShieldIcon = ({ className = "", size = 24, style = {} }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path
      d="M12 2L3 6V12C3 17.5 7 21.6 12 23C17 21.6 21 17.5 21 12V6L12 2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <path
      d="M12 6L6 9.5V13C6 16.5 8.5 19.3 12 20.4C15.5 19.3 18 16.5 18 13V9.5L12 6Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      opacity="0.6"
    />
    {/* Central tactical star */}
    <circle cx="12" cy="13" r="2.2" fill="currentColor" />
  </svg>
);

// 7. Large Sombre Tactical Blueprint: Main Battle Tank (Schematic Watermark)
export const TankBlueprintWatermark = ({ className = "" }) => (
  <div className={`tactical-blueprint-wrap tactical-blueprint--tank ${className}`} aria-hidden="true">
    <svg
      viewBox="0 0 460 260"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="tactical-blueprint-svg"
    >
      <defs>
        <pattern id="tankGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tankGrid)" />

      {/* Technical Schematic Frame & Coordinates */}
      <rect x="10" y="10" width="440" height="240" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" rx="4" />
      <path d="M10 25H25M10 10V25" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M450 25H435M450 10V25" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M10 235H25M10 250V235" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M450 235H435M450 250V235" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />

      {/* Telemetry Labels */}
      <text x="24" y="32" fill="currentColor" fillOpacity="0.4" fontSize="9" fontFamily="Share Tech Mono, monospace" letterSpacing="1.5">
        PMA-TK-SPEC // AL-KHALID MBT MK-1 // 125MM MAIN BORE
      </text>
      <text x="24" y="238" fill="currentColor" fillOpacity="0.35" fontSize="8" fontFamily="Share Tech Mono, monospace">
        ARMOR: COMPOSITE + ERA // ELEVATION: -6° TO +14° // CREW: 3
      </text>
      <text x="350" y="32" fill="currentColor" fillOpacity="0.4" fontSize="9" fontFamily="Share Tech Mono, monospace">
        SYS.GRID [34.18N]
      </text>

      {/* Main Gun Cannon */}
      <line x1="280" y1="110" x2="425" y2="110" stroke="currentColor" strokeWidth="3" strokeOpacity="0.7" />
      <line x1="280" y1="115" x2="425" y2="115" stroke="currentColor" strokeWidth="3" strokeOpacity="0.7" />
      {/* Bore evacuator cylinder */}
      <rect x="350" y="105" width="28" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" fill="currentColor" fillOpacity="0.1" />
      {/* Muzzle brake */}
      <path d="M420 103V122M426 103V122" stroke="currentColor" strokeWidth="2" strokeOpacity="0.7" />

      {/* Sloped Turret Structure */}
      <path
        d="M160 145 L190 95 L285 95 L310 145 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeOpacity="0.75"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Commander sight & ERA blocks */}
      <rect x="210" y="78" width="22" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" fill="currentColor" fillOpacity="0.12" />
      <line x1="221" y1="62" x2="221" y2="78" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Gunner Thermal Periscope */}
      <rect x="250" y="82" width="16" height="13" rx="1" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="270" y1="60" x2="270" y2="95" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

      {/* Smoke dischargers (bank of 6 tubes) */}
      <line x1="175" y1="115" x2="165" y2="105" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
      <line x1="181" y1="118" x2="171" y2="108" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
      <line x1="187" y1="121" x2="177" y2="111" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />

      {/* Hull - Glacis Plate & Engine Deck */}
      <path
        d="M60 170 L110 135 L335 135 L365 170 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.7"
        fill="currentColor"
        fillOpacity="0.06"
      />
      {/* Engine Louvers */}
      <line x1="80" y1="148" x2="105" y2="148" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="80" y1="154" x2="105" y2="154" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="80" y1="160" x2="105" y2="160" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Skirt Side Armor Panels */}
      <rect x="68" y="166" width="288" height="24" rx="2" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.65" fill="currentColor" fillOpacity="0.12" />
      {/* Panel vertical division seams */}
      {[105, 145, 185, 225, 265, 305].map((x) => (
        <line key={x} x1={x} y1="166" x2={x} y2="190" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      ))}

      {/* Caterpillar Track Profile */}
      <rect x="50" y="190" width="320" height="38" rx="19" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.8" />
      {/* Road Wheels (6 main load-bearing wheels) */}
      {[85, 130, 175, 220, 265, 310].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="209" r="14" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.65" />
          <circle cx={cx} cy="209" r="6" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" fill="currentColor" fillOpacity="0.15" />
          <circle cx={cx} cy="209" r="1.5" fill="currentColor" fillOpacity="0.7" />
        </g>
      ))}
      {/* Drive Sprocket & Idler */}
      <circle cx="56" cy="209" r="7" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.5" />
      <circle cx="364" cy="209" r="7" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.5" />

      {/* Dimension & Calibration Lines */}
      <line x1="50" y1="235" x2="370" y2="235" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.3" />
      <path d="M50 231V239M370 231V239" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <text x="210" y="244" fill="currentColor" fillOpacity="0.3" fontSize="8" fontFamily="Share Tech Mono, monospace" textAnchor="middle">
        CHASSIS LENGTH: 6.95 M
      </text>
    </svg>
  </div>
);

// 8. Large Sombre Tactical Blueprint: Strategic Ballistic Rocket & Trajectory Watermark
export const RocketBlueprintWatermark = ({ className = "" }) => (
  <div className={`tactical-blueprint-wrap tactical-blueprint--rocket ${className}`} aria-hidden="true">
    <svg
      viewBox="0 0 280 440"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="tactical-blueprint-svg"
    >
      <defs>
        <pattern id="rocketGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rocketGrid)" />

      {/* Frame & Coordinates */}
      <rect x="10" y="10" width="260" height="420" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" rx="4" />
      <path d="M10 25H25M10 10V25" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M270 25H255M270 10V25" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M10 415H25M10 430V415" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M270 415H255M270 430V415" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />

      {/* Telemetry Labels */}
      <text x="20" y="30" fill="currentColor" fillOpacity="0.4" fontSize="8.5" fontFamily="Share Tech Mono, monospace" letterSpacing="1.2">
        STRATEGIC VECTOR // BALLISTIC COMPUTING
      </text>
      <text x="20" y="420" fill="currentColor" fillOpacity="0.35" fontSize="8" fontFamily="Share Tech Mono, monospace">
        TRAJECTORY: APOGEE 180KM // SOLID STAGE
      </text>

      {/* Trajectory Guide Arcs */}
      <path
        d="M60 410 C 60 260, 100 120, 230 45"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        strokeOpacity="0.28"
      />
      <circle cx="230" cy="45" r="3.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
      <text x="180" y="42" fill="currentColor" fillOpacity="0.3" fontSize="8" fontFamily="Share Tech Mono, monospace">
        TARGET LOCK
      </text>

      {/* Central Rocket Vector Assembly */}
      <g transform="translate(140, 205) rotate(-15) translate(-140, -205)">
        {/* Aerodynamic Re-entry Nose Cone */}
        <path
          d="M140 40 C140 40, 162 85, 162 125 H118 C118 85, 140 40, 140 40 Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeOpacity="0.75"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <line x1="140" y1="40" x2="140" y2="125" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />

        {/* Guidance & Inertial Avionics Section (Stage 3) */}
        <rect x="118" y="125" width="44" height="45" stroke="currentColor" strokeWidth="2" strokeOpacity="0.65" fill="currentColor" fillOpacity="0.08" />
        <circle cx="140" cy="147" r="7" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
        <text x="140" y="150" fill="currentColor" fillOpacity="0.45" fontSize="6.5" fontFamily="Share Tech Mono, monospace" textAnchor="middle">
          INS
        </text>

        {/* Interstage Lattice Grid */}
        <line x1="118" y1="170" x2="162" y2="170" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.6" />
        <line x1="118" y1="178" x2="162" y2="178" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.6" />
        {[123, 131, 140, 149, 157].map((x) => (
          <line key={x} x1={x} y1="170" x2={x} y2="178" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        ))}

        {/* Stage 2 Sustainer Motor Body */}
        <rect x="117" y="178" width="46" height="70" stroke="currentColor" strokeWidth="2" strokeOpacity="0.7" fill="currentColor" fillOpacity="0.07" />
        <line x1="125" y1="188" x2="125" y2="238" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="155" y1="188" x2="155" y2="238" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <text x="140" y="215" fill="currentColor" fillOpacity="0.3" fontSize="7" fontFamily="Share Tech Mono, monospace" textAnchor="middle" letterSpacing="1">
          STAGE II
        </text>

        {/* Stage 1 Booster Body */}
        <rect x="116" y="248" width="48" height="90" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.8" fill="currentColor" fillOpacity="0.09" />
        <line x1="116" y1="288" x2="164" y2="288" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.4" />
        <text x="140" y="295" fill="currentColor" fillOpacity="0.35" fontSize="7" fontFamily="Share Tech Mono, monospace" textAnchor="middle" letterSpacing="1">
          BOOSTER I
        </text>

        {/* Aerodynamic Delta Fins */}
        {/* Left Delta Fin */}
        <path
          d="M116 280 L76 342 H116 V280 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.7"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.12"
        />
        {/* Right Delta Fin */}
        <path
          d="M164 280 L204 342 H164 V280 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.7"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.12"
        />
        {/* Center Stabilization Fin */}
        <line x1="140" y1="305" x2="140" y2="344" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />

        {/* Dual Rocket Nozzle Bells */}
        <path d="M123 338 L119 354 H134 L131 338" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.7" fill="currentColor" fillOpacity="0.2" />
        <path d="M149 338 L146 354 H161 L157 338" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.7" fill="currentColor" fillOpacity="0.2" />

        {/* Soft Exhaust Telemetry Lines */}
        <line x1="126" y1="358" x2="124" y2="380" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" strokeOpacity="0.45" />
        <line x1="154" y1="358" x2="156" y2="380" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" strokeOpacity="0.45" />
      </g>
    </svg>
  </div>
);
