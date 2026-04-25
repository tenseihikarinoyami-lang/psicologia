import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function classes(...tokens: Array<string | undefined>) {
  return tokens.filter(Boolean).join(" ");
}

export function ArrowUpRightIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="m5 12 4.2 4.2L19 6.5" />
    </svg>
  );
}

export function GlobeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 2.8 4.1 5.8 4.1 9s-1.4 6.2-4.1 9c-2.7-2.8-4.1-5.8-4.1-9s1.4-6.2 4.1-9Z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MessageIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 18.5V7.8A2.8 2.8 0 0 1 7.8 5h8.4A2.8 2.8 0 0 1 19 7.8v5.4a2.8 2.8 0 0 1-2.8 2.8H9.8L5 18.5Z" />
      <path d="M8.5 9.3h7" />
      <path d="M8.5 12.4h4.5" />
    </svg>
  );
}

export function PhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M6.9 4.8h2.4c.4 0 .8.3.9.7l.8 3.2a1 1 0 0 1-.3.9l-1.5 1.4a14.5 14.5 0 0 0 3.8 3.8l1.4-1.5a1 1 0 0 1 .9-.3l3.2.8c.4.1.7.5.7.9v2.4c0 .5-.4 1-.9 1C10.1 18.1 5.9 13.9 5.9 8.7c0-.5.5-.9 1-.9Z" />
    </svg>
  );
}

export function ShieldIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3.8 18.2 6v5.3c0 4.2-2.5 7.2-6.2 8.9-3.7-1.7-6.2-4.7-6.2-8.9V6L12 3.8Z" />
      <path d="m9.4 12.1 1.7 1.8 3.5-3.9" />
    </svg>
  );
}

export function SparklesIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3.5 13.4 8l4.6 1.4-4.6 1.4L12 15.3l-1.4-4.5L6 9.4 10.6 8 12 3.5Z" />
      <path d="M18.5 15.5 19.3 18l2.5.8-2.5.8-.8 2.5-.8-2.5-2.5-.8 2.5-.8.8-2.5Z" />
      <path d="M5.2 14.8 5.8 17l2.2.6-2.2.6-.6 2.2-.6-2.2-2.2-.6 2.2-.6.6-2.2Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={classes("size-5", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M20 11.9a7.9 7.9 0 0 1-11.6 7l-4.4 1.1 1.2-4.2A7.9 7.9 0 1 1 20 11.9Zm-7.9-6.5a6.5 6.5 0 0 0-5.7 9.8l.2.4-.7 2.3 2.4-.6.4.2a6.5 6.5 0 1 0 3.4-12.1Zm3.8 8.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1l-.4.5c-.2.2-.4.2-.6.1a5.4 5.4 0 0 1-2.6-2.3c-.2-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.4.1-.6.4-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.4.1.1 1.6 2.5 4 3.4 2.4.9 2.4.6 2.8.6.4-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
