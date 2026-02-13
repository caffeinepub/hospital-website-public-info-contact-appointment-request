import { type ReactNode } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import SeoManager from '../seo/SeoManager';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SeoManager />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
