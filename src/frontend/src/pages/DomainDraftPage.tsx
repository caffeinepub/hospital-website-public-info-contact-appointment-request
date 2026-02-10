import { useState, useEffect } from 'react';
import { useGetDomainDraft, useSaveDomainDraft } from '@/hooks/useDomainDraft';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { getPageTitle } from '@/config/branding';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, CheckCircle2, Save } from 'lucide-react';

export default function DomainDraftPage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const { data: draft, isLoading, error } = useGetDomainDraft();
  const saveMutation = useSaveDomainDraft();
  const [domainValue, setDomainValue] = useState('');

  useEffect(() => {
    document.title = getPageTitle('Domain Draft');
  }, []);

  useEffect(() => {
    if (draft?.content) {
      setDomainValue(draft.content);
    }
  }, [draft]);

  const handleSave = async () => {
    if (!isAuthenticated || !domainValue.trim()) return;
    
    try {
      await saveMutation.mutateAsync(domainValue.trim());
    } catch (err) {
      console.error('Failed to save domain draft:', err);
    }
  };

  const formatLastSaved = (timestamp: bigint | undefined) => {
    if (!timestamp) return 'Never';
    
    const date = new Date(Number(timestamp) / 1_000_000);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Domain Draft</h1>
          <p className="text-muted-foreground">
            Manage your domain configuration draft
          </p>
        </div>

        {!isAuthenticated && (
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              You must be logged in to save domain drafts.{' '}
              <Button
                variant="link"
                className="h-auto p-0 text-primary underline"
                onClick={login}
                disabled={loginStatus === 'logging-in'}
              >
                {loginStatus === 'logging-in' ? 'Logging in...' : 'Log in now'}
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error instanceof Error ? error.message : 'Failed to load domain draft. Please try again.'}
            </AlertDescription>
          </Alert>
        )}

        {saveMutation.isSuccess && (
          <Alert className="mb-6 border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>
              Domain draft saved successfully!
            </AlertDescription>
          </Alert>
        )}

        {saveMutation.isError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {saveMutation.error instanceof Error 
                ? saveMutation.error.message 
                : 'Failed to save domain draft. Please try again.'}
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Domain Configuration</CardTitle>
            <CardDescription>
              {isLoading ? (
                <Skeleton className="h-4 w-48" />
              ) : (
                <>Last saved: {formatLastSaved(draft?.lastSaved)}</>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="domain">Domain</Label>
              {isLoading ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Input
                  id="domain"
                  type="text"
                  placeholder="example.com"
                  value={domainValue}
                  onChange={(e) => setDomainValue(e.target.value)}
                  disabled={!isAuthenticated || saveMutation.isPending}
                />
              )}
            </div>

            <Button
              onClick={handleSave}
              disabled={!isAuthenticated || !domainValue.trim() || saveMutation.isPending || isLoading}
              className="w-full"
            >
              {saveMutation.isPending ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save draft
                </>
              )}
            </Button>

            {!isAuthenticated && (
              <p className="text-sm text-muted-foreground text-center">
                Login is required to save changes
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
