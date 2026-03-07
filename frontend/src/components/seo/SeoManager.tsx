import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';
import {
  getFullPageTitle,
  getMetaDescription,
  getCanonicalUrl,
  getOgTitle,
  DEFAULT_SEO,
  GOOGLE_SITE_VERIFICATION,
  SITE_URL,
} from '@/config/seo';

/**
 * SeoManager Component
 * Dynamically updates document head tags for SEO based on current route
 * Handles: title, meta description, canonical URL, Open Graph tags, Twitter tags, and Google verification
 */
export default function SeoManager() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Update document title
    document.title = getFullPageTitle(pathname);

    // Update or create meta description
    updateMetaTag('name', 'description', getMetaDescription(pathname));

    // Update canonical URL
    updateLinkTag('canonical', getCanonicalUrl(pathname));

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', getOgTitle(pathname));
    updateMetaTag('property', 'og:description', getMetaDescription(pathname));
    updateMetaTag('property', 'og:type', DEFAULT_SEO.ogType);
    updateMetaTag('property', 'og:url', getCanonicalUrl(pathname));
    updateMetaTag('property', 'og:site_name', DEFAULT_SEO.title);

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:card', DEFAULT_SEO.twitterCard);
    updateMetaTag('name', 'twitter:title', getOgTitle(pathname));
    updateMetaTag('name', 'twitter:description', getMetaDescription(pathname));

    // Update Google Site Verification (only if token is provided)
    if (GOOGLE_SITE_VERIFICATION) {
      updateMetaTag('name', 'google-site-verification', GOOGLE_SITE_VERIFICATION);
    }
  }, [pathname]);

  return null;
}

/**
 * Helper function to update or create a meta tag
 */
function updateMetaTag(attribute: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

/**
 * Helper function to update or create a link tag
 */
function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}
