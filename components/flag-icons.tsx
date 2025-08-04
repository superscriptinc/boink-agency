import React from "react";

interface FlagIconProps {
  locale: string;
  className?: string;
}

export function FlagIcon({ locale, className = "w-4 h-4" }: FlagIconProps) {
  const getFlagEmoji = (locale: string) => {
    switch (locale) {
      case "en":
        return "🇺🇸";
      case "es":
        return "🇪🇸";
      case "pt":
        return "🇧🇷";
      default:
        return "🌐";
    }
  };

  return (
    <span
      className={`inline-block ${className}`}
      role="img"
      aria-label={`${locale} flag`}
    >
      {getFlagEmoji(locale)}
    </span>
  );
}
