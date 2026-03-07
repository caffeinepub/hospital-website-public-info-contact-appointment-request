import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  badge?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn('section-spacing-sm bg-gradient-to-br from-primary/5 via-background to-secondary/5', className)}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {badge && <div className="flex justify-center">{badge}</div>}
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
