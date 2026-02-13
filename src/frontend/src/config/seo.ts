/**
 * SEO Configuration
 * Single source of truth for site metadata, canonical URLs, and Search Console verification
 */

// Base site URL - Update this to match your production domain
// For Internet Computer deployments, use your canister's .icp.page or custom domain
export const SITE_URL = 'https://mahalaxmi-health-care.icp.page';

// Google Search Console Verification Token
// To verify your site with Google Search Console:
// 1. Go to https://search.google.com/search-console
// 2. Add your property (website URL)
// 3. Choose "HTML tag" verification method
// 4. Copy the content value from the meta tag (the long string after content="")
// 5. Paste it below, replacing the empty string
// Example: 'abc123xyz456' (without quotes in the actual token)
export const GOOGLE_SITE_VERIFICATION = '';

// Default SEO metadata
export const DEFAULT_SEO = {
  title: 'Mahalaxmi Health Care',
  description: 'Mahalaxmi Health Care provides comprehensive medical services with 24/7 emergency care, specialized treatments, and compassionate healthcare in Arakkonam, Ranipet District. Book your appointment today.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
} as const;

// Per-route SEO metadata
export const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Home',
    description: 'Mahalaxmi Health Care - Your trusted healthcare partner offering 24/7 emergency services, specialized medical care, and comprehensive health solutions in Arakkonam.',
  },
  '/about': {
    title: 'About',
    description: 'Learn about Mahalaxmi Health Care\'s mission, vision, and commitment to providing quality healthcare with compassion, integrity, and excellence.',
  },
  '/services': {
    title: 'Services',
    description: 'Explore our comprehensive medical services including emergency care, general medicine, cardiology, orthopedics, CT scan, laboratory facilities, X-ray, and more.',
  },
  '/emergency': {
    title: 'Emergency',
    description: '24/7 Emergency medical services at Mahalaxmi Health Care. Rapid response team available round-the-clock for all medical emergencies. Call now for immediate assistance.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Get in touch with Mahalaxmi Health Care. Find our contact information, location in Arakkonam, and reach out for appointments or inquiries.',
  },
  '/appointments': {
    title: 'Appointments',
    description: 'Book an appointment at Mahalaxmi Health Care. Schedule your visit with our experienced medical professionals for quality healthcare services.',
  },
};

/**
 * Get the full page title for a given route
 */
export function getFullPageTitle(pathname: string): string {
  const routeData = ROUTE_SEO[pathname];
  if (routeData) {
    return `${routeData.title} — ${DEFAULT_SEO.title}`;
  }
  return DEFAULT_SEO.title;
}

/**
 * Get the meta description for a given route
 */
export function getMetaDescription(pathname: string): string {
  const routeData = ROUTE_SEO[pathname];
  return routeData?.description || DEFAULT_SEO.description;
}

/**
 * Get the canonical URL for a given route
 */
export function getCanonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}

/**
 * Get Open Graph title for a given route
 */
export function getOgTitle(pathname: string): string {
  const routeData = ROUTE_SEO[pathname];
  return routeData ? `${routeData.title} — ${DEFAULT_SEO.title}` : DEFAULT_SEO.title;
}
