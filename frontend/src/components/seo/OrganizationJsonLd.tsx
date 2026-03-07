import { SITE_URL } from '@/config/seo';
import { HOSPITAL_NAME } from '@/config/branding';

/**
 * OrganizationJsonLd Component
 * Renders JSON-LD structured data for the medical organization
 * Helps search engines understand the business entity
 */
export default function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: HOSPITAL_NAME,
    url: SITE_URL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
