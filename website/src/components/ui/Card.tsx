import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hover ? 'transition-transform duration-200 hover:shadow-xl hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

