import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { getPageTitle } from '@/config/branding';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = getPageTitle('404 Not Found');
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-16">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-bold tracking-tight">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
