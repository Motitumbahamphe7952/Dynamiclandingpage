const Quote = ({ className = "" }) => {
  return (
    <svg
      width="38"
      height="40"
      viewBox="0 0 38 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <g clip-path="url(#clip0_390_463)">
        <path
          d="M38 18.7685H28.964C29.1185 25.8392 30.9863 26.6418 33.3322 26.8709L34.2369 26.9913V34.7663L33.1941 34.7063C30.1307 34.5212 26.7439 33.9283 24.4844 30.9334C22.5037 28.3079 21.6304 24.0186 21.6304 17.4342V5.23315H38V18.7685Z"
          fill="#FF5805"
        />
        <path
          d="M17.1147 5.23315V18.7685H8.19935C8.35382 25.8392 10.1612 26.6418 12.5072 26.8709L13.3516 26.9913V34.7663L12.3691 34.7063C9.3057 34.5212 5.8886 33.9283 3.62903 30.9334C1.6485 28.3079 0.745167 24.0186 0.745167 17.4342V5.23315H17.1147Z"
          fill="#FF5805"
        />
      </g>
      <defs>
        <clipPath id="clip0_390_463">
          <rect
            width="37.2549"
            height="40"
            fill="white"
            transform="matrix(-1 0 0 1 38 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Quote;
