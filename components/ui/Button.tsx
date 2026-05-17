import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseClasses = "rounded-full text-label-sm uppercase tracking-wide px-6 py-3 transition-all font-semibold flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary text-on-primary shadow-hard-pop-primary hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none border-2 border-transparent",
    secondary: "bg-transparent text-secondary border-2 border-secondary shadow-hard-pop-secondary hover:bg-secondary hover:text-on-secondary hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_color-mix(in_srgb,var(--color-secondary)_40%,transparent)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
