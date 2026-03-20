import React from "react";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-sky/50 overflow-hidden hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="text-charcoal-muted text-sm leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </Card>
  );
}

interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({
  name,
  company,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="p-6 flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-amber" : "text-gray-light"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-charcoal leading-relaxed mb-4 flex-1">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-charcoal-muted">{company}</p>
      </div>
    </Card>
  );
}
