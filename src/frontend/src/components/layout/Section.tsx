import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'muted';
  className?: string;
}

export default function Section({ children, variant = 'default', className }: SectionProps) {
  const variantClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
  };

  return (
    <section className={cn(variantClasses[variant], 'py-16 md:py-24', className)}>
      <div className="container">{children}</div>
    </section>
  );
}
