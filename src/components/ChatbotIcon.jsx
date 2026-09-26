const ChatBotIcon = ({ size = 36, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Tactical Octagonal Shield */}
      <path
        d="M20 2L34 7V19C34 27.5 28 34.5 20 38C12 34.5 6 27.5 6 19V7L20 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.2"
      />

      {/* Inner Shield Contour */}
      <path
        d="M20 6L30 10V18.5C30 25 25.5 30.5 20 33.5C14.5 30.5 10 25 10 18.5V10L20 6Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />

      {/* Military Cadet Honor Star */}
      <path
        d="M20 11L21.8 15.2H26.2L22.6 17.8L24 22L20 19.4L16 22L17.4 17.8L13.8 15.2H18.2L20 11Z"
        fill="currentColor"
      />

      {/* Cadet Rank Chevrons */}
      <path
        d="M14 25L20 28.5L26 25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 28.5L20 31.5L25 28.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatBotIcon;
