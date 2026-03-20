import React from "react";

interface SectionProps {
  children: React.ReactNode;
  variant?: "navy" | "white" | "sky" | "amber" | "midnight";
  className?: string;
  id?: string;
}

export function Section({
  children,
  variant = "white",
  className = "",
  id,
}: SectionProps) {
  const variants = {
    navy: "bg-navy text-white",
    white: "bg-white text-charcoal",
    sky: "bg-sky text-charcoal",
    amber: "bg-amber text-white",
    midnight: "bg-navy-midnight text-white",
  };

  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
}
