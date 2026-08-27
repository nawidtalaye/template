export default function SignatureDecoration({ className = "mx-auto my-3" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        className="h-4 w-40 max-w-full overflow-visible"
        viewBox="0 0 160 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11.5C24 4.5 56 2.5 82 8.5C108 14.5 136 12 157 5"
          stroke="url(#sig-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 13.5C72 9 105 7.5 132 11"
          stroke="url(#sig-grad-2)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="157" cy="5" r="2.5" fill="#f59e0b" />
        <defs>
          <linearGradient id="sig-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#275fc0" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="sig-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#275fc0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
