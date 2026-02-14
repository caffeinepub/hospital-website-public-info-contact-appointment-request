import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button size="lg" onClick={() => navigate({ to: '/' })} className="mt-4">
          <Home className="mr-2 h-5 w-5" aria-hidden="true" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
