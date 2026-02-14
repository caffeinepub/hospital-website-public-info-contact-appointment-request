import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { withCacheBust } from '@/utils/generatedAssets';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  children?: ReactNode;
  variant?: 'default' | 'gradient' | 'pattern';
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  children,
  variant = 'default',
  className,
}: PageHeroProps) {
  const variantClasses = {
    default: 'bg-gradient-to-br from-primary/5 via-background to-muted/30',
    gradient: 'bg-gradient-to-br from-primary/10 via-secondary/5 to-background',
    pattern: 'bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden',
  };

  // Apply cache-busting to pattern background
  const patternUrl = withCacheBust('/assets/generated/medical-pattern.dim_1800x1200.png');

  return (
    <section className={cn(variantClasses[variant], 'py-16 md:py-24', className)}>
      {variant === 'pattern' && (
        <div
          className="absolute inset-0 opacity-[0.03] bg-repeat"
          style={{
            backgroundImage: `url(${patternUrl})`,
            backgroundSize: '600px 400px',
          }}
          aria-hidden="true"
        />
      )}
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {badge && <div className="flex justify-center">{badge}</div>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
