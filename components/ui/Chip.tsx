import React from "react";

interface ChipProps {
  label: string;
  className?: string;
}

export function Chip({ label, className = "" }: ChipProps) {
  return (
    <span className={`inline-flex items-center rounded-full bg-tertiary text-on-tertiary px-3 py-1 text-label-sm font-semibold uppercase ${className}`}>
      {label}
    </span>
  );
}
