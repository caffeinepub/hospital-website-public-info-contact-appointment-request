import { HOSPITAL_NAME } from "./branding";

export const SITE_URL = "https://mahalaxmihealthcare.com";
export const GOOGLE_SITE_VERIFICATION = "your-google-verification-token";

export const DEFAULT_SEO = {
  title: `${HOSPITAL_NAME} - Excellence in Healthcare`,
  description:
    "Comprehensive healthcare services with 24/7 emergency care, specialized medical departments, and experienced physicians. Your health is our priority.",
  keywords:
    "hospital, healthcare, medical services, emergency care, doctors, health checkup, Mahalaxmi Health Care",
  ogType: "website",
  twitterCard: "summary_large_image",
};

export const ROUTE_SEO: Record<string, { title: string; description: string }> =
  {
    "/": {
      title: `${HOSPITAL_NAME} - Excellence in Healthcare`,
      description:
        "Comprehensive healthcare services with 24/7 emergency care, specialized medical departments, and experienced physicians. Your health is our priority.",
    },
    "/about": {
      title: `About Us - ${HOSPITAL_NAME}`,
      description:
        "Learn about our mission, values, and commitment to providing exceptional healthcare services to our community.",
    },
    "/services": {
      title: `Medical Services - ${HOSPITAL_NAME}`,
      description:
        "Explore our comprehensive range of medical services including emergency care, specialized treatments, diagnostics, and preventive healthcare.",
    },
    "/contact": {
      title: `Contact Us - ${HOSPITAL_NAME}`,
      description:
        "Get in touch with us for appointments, inquiries, or emergency services. We are here to help you 24/7.",
    },
    "/appointments": {
      title: `Book Appointment - ${HOSPITAL_NAME}`,
      description:
        "Schedule your appointment with our specialists. Easy online booking for consultations and medical services.",
    },
  };

export function getPageTitle(path: string): string {
  return ROUTE_SEO[path]?.title || DEFAULT_SEO.title;
}

export function getFullPageTitle(path: string): string {
  return getPageTitle(path);
}

export function getPageDescription(path: string): string {
  return ROUTE_SEO[path]?.description || DEFAULT_SEO.description;
}

export function getMetaDescription(path: string): string {
  return getPageDescription(path);
}

export function getOgTitle(path: string): string {
  return getPageTitle(path);
}

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
