"use client";

import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative pt-4 ${className}`}>
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
          focused || props.value
            ? "-top-1 text-primary text-label-sm"
            : "top-7 text-on-surface-variant text-body-md"
        }`}
      >
        {label}
      </label>
      <input
        className="w-full bg-surface-container rounded-md border-2 border-surface-variant px-3 py-3 mt-1 text-on-surface text-body-md focus:outline-none focus:border-primary transition-colors"
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        {...props}
      />
    </div>
  );
}
