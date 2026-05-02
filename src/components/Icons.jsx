export function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        d="M4 7.5 10.94 12a2 2 0 0 0 2.12 0L20 7.5M6.75 19.25h10.5A2.75 2.75 0 0 0 20 16.5v-9A2.75 2.75 0 0 0 17.25 4.75H6.75A2.75 2.75 0 0 0 4 7.5v9a2.75 2.75 0 0 0 2.75 2.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect
        x="3.75"
        y="3.75"
        width="16.5"
        height="16.5"
        rx="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.75" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ingredientIcons = {
  flour: (
    <path
      d="M8.5 5.5c2.5 2.8 3.65 6.08 3.47 9.84-.09 1.82-.71 3.54-1.84 5.16M15.5 5.5c-2.5 2.8-3.65 6.08-3.47 9.84.09 1.82.71 3.54 1.84 5.16M6 9.75c1.76-.86 3.77-1.29 6-1.29s4.24.43 6 1.29"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  water: (
    <path
      d="M12 3.75c3.1 3.77 4.65 6.72 4.65 8.84 0 2.9-2.09 5.16-4.65 5.16s-4.65-2.26-4.65-5.16c0-2.12 1.55-5.07 4.65-8.84Zm-4.93 12c.72 2.64 2.7 4.5 4.93 4.5s4.21-1.86 4.93-4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  starter: (
    <path
      d="M8 5.25h8m-6.25 0v2.5m4.5-2.5v2.5M7.5 9.25h9l-.65 7.07A2.5 2.5 0 0 1 13.36 18.5h-2.72a2.5 2.5 0 0 1-2.49-2.18L7.5 9.25Zm2.25 3c.6.4 1.35.63 2.25.63s1.65-.23 2.25-.63"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  honey: (
    <path
      d="M9 4.75h6m-4.5 0V7m3 0V4.75M8 8.25h8v7.5a2.75 2.75 0 0 1-2.75 2.75h-2.5A2.75 2.75 0 0 1 8 15.75v-7.5Zm2.5 3.25c.4.64 1.06 1 1.5 1s1.1-.36 1.5-1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  oil: (
    <path
      d="M12 4.25c2.45 2.92 3.68 5.25 3.68 6.99A3.68 3.68 0 1 1 8.32 11.24c0-1.74 1.23-4.07 3.68-6.99Zm-4.75 10.5c1.57 1.85 3.16 2.78 4.75 2.78s3.18-.93 4.75-2.78"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  salt: (
    <path
      d="M8.25 7.25h7.5l-1.1 9.34a2.25 2.25 0 0 1-2.24 1.91h-.82a2.25 2.25 0 0 1-2.24-1.91L8.25 7.25Zm1.25 0V5.5a2.5 2.5 0 0 1 5 0v1.75M9.5 11.25h5m-4 3h3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export function IngredientIcon({ icon, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {ingredientIcons[icon]}
    </svg>
  );
}
