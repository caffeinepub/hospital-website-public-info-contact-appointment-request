// Single source of truth for hospital branding
export const HOSPITAL_NAME = 'Mahalakshmi Multispecility Hospital';

// Helper function to compose page titles
export const getPageTitle = (pageTitle?: string): string => {
  if (pageTitle) {
    return `${pageTitle} — ${HOSPITAL_NAME}`;
  }
  return HOSPITAL_NAME;
};
