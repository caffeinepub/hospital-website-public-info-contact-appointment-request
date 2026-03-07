import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { withCacheBust, isGeneratedAsset } from '@/utils/generatedAssets';

interface PageHeroImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'eager' | 'lazy';
  className?: string;
  position?: 'center' | 'top' | 'bottom';
}

export default function PageHeroImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className,
  position = 'center',
}: PageHeroImageProps) {
  const [hasError, setHasError] = useState(false);
  
  const positionClasses = {
    center: 'object-center',
    top: 'object-top',
    bottom: 'object-bottom',
  };

  // Apply cache-busting to generated assets
  const finalSrc = withCacheBust(src);
  const isGenerated = isGeneratedAsset(src);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError && isGenerated) {
    return (
      <div className={cn('relative rounded-2xl overflow-hidden shadow-strong bg-muted/30 border border-border', className)}>
        <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-4" style={{ minHeight: '300px' }}>
          <AlertCircle className="h-12 w-12 text-muted-foreground/50" aria-hidden="true" />
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Image not available</p>
            <p className="text-xs text-muted-foreground/70 max-w-md">
              Try refreshing the page (Ctrl+F5 / Cmd+Shift+R) or open in a private/incognito window to see the latest images.
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
          >
            <RefreshCw className="h-3 w-3" aria-hidden="true" />
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative rounded-2xl overflow-hidden shadow-strong', className)}>
      <img
        src={finalSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onError={handleError}
        className={cn('w-full h-auto object-cover', positionClasses[position])}
      />
    </div>
  );
}
