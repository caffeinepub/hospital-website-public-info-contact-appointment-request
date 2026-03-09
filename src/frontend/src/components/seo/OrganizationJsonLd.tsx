import { HOSPITAL_NAME } from "@/config/branding";
import { SITE_URL } from "@/config/seo";
import { useEffect } from "react";

/**
 * OrganizationJsonLd Component
 * Injects JSON-LD structured data for the medical organization via a DOM script tag.
 * Helps search engines understand the business entity.
 */
export default function OrganizationJsonLd() {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      name: HOSPITAL_NAME,
      url: SITE_URL,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    script.id = "org-jsonld";

    const existing = document.getElementById("org-jsonld");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      document.getElementById("org-jsonld")?.remove();
    };
  }, []);

  return null;
}
