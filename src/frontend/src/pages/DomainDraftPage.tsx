import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useGetDomainDraft, useSaveDomainDraft } from '@/hooks/useDomainDraft';
import { Loader2, Save, CheckCircle, AlertCircle, Lock } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';

export default function DomainDraftPage() {
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const { data: draft, isLoading: draftLoading, isFetched } = useGetDomainDraft();
  const saveMutation = useSaveDomainDraft();

  const [content, setContent] = useState('');

  const handleSave = async () => {
    if (!content.trim()) return;
    await saveMutation.mutateAsync(content);
  };

  const formatTimestamp = (timestamp: bigint | undefined) => {
    if (!timestamp) return 'Never';
    const date = new Date(Number(timestamp) / 1_000_000);
    return date.toLocaleString();
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col">
        <PageHero
          title="Domain Draft"
          subtitle="Manage your domain configuration"
          variant="pattern"
        >
          <PageHeroImage
            src="/assets/generated/domain-admin-desk.dim_1600x900.png"
            alt="Administrative office workspace"
            width={1600}
            height={900}
            loading="eager"
            className="mt-8 max-w-4xl mx-auto"
          />
        </PageHero>
        <Section>
          <Alert className="max-w-2xl mx-auto">
            <Lock className="h-5 w-5" aria-hidden="true" />
            <AlertDescription className="text-base">
              Please log in to access the domain draft management page.
            </AlertDescription>
          </Alert>
        </Section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Domain Draft"
        subtitle="Manage and save your domain configuration"
        variant="pattern"
      >
        <PageHeroImage
          src="/assets/generated/hospital-lobby.dim_1600x900.png"
          alt="Hospital administrative area"
          width={1600}
          height={900}
          loading="eager"
          className="mt-8 max-w-4xl mx-auto"
        />
      </PageHero>

      {/* Admin Desk Photo */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Administrative Management</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure workspace for managing domain configurations
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/domain-admin-desk.dim_1600x900.png"
          alt="Administrative office desk with laptop and documents"
          width={1600}
          height={900}
          loading="lazy"
          className="max-w-5xl mx-auto"
        />
      </Section>

      {/* Draft Management */}
      <Section variant="muted">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Current Draft Display */}
          {draftLoading && (
            <Card>
              <CardContent className="p-6 text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" aria-hidden="true" />
                <p className="text-sm text-muted-foreground mt-2">Loading draft...</p>
              </CardContent>
            </Card>
          )}

          {isFetched && draft && (
            <Card>
              <CardHeader>
                <CardTitle>Current Draft</CardTitle>
                <CardDescription>Last saved: {formatTimestamp(draft.lastSaved)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-md">
                  <p className="text-sm font-mono break-all">{draft.content}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {isFetched && !draft && (
            <Alert>
              <AlertDescription>No draft saved yet. Create your first draft below.</AlertDescription>
            </Alert>
          )}

          {/* Save New Draft */}
          <Card>
            <CardHeader>
              <CardTitle>Save New Draft</CardTitle>
              <CardDescription>Enter your domain configuration to save</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="content">Domain Content</Label>
                <Input
                  id="content"
                  type="text"
                  placeholder="Enter domain configuration..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  disabled={saveMutation.isPending}
                />
              </div>
              <Button
                onClick={handleSave}
                disabled={!content.trim() || saveMutation.isPending}
                className="w-full"
              >
                {saveMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" aria-hidden="true" />
                    Save Draft
                  </>
                )}
              </Button>

              {saveMutation.isSuccess && (
                <Alert className="border-green-500/50 bg-green-500/5">
                  <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                  <AlertDescription>Draft saved successfully!</AlertDescription>
                </Alert>
              )}

              {saveMutation.isError && (
                <Alert className="border-destructive/50 bg-destructive/5">
                  <AlertCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
                  <AlertDescription>
                    Failed to save draft: {saveMutation.error instanceof Error ? saveMutation.error.message : 'Unknown error'}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
