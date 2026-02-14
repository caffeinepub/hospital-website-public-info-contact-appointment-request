# Specification

## Summary
**Goal:** Add a complete, polished “Doctor Suites” page and make it accessible via site navigation, with proper SEO/sitemap updates.

**Planned changes:**
- Implement the “Doctor Suites” page content and layout in `frontend/src/pages/DoctorsPage.tsx` using existing site components/patterns, with all user-facing text in English and a clear CTA (e.g., to /appointments or /contact).
- Add a new route for “Doctor Suites” in `frontend/src/App.tsx` and add a “Doctor Suites” link to the main header navigation in `frontend/src/components/layout/SiteHeader.tsx`, including consistent active-link styling on desktop and mobile.
- Add SEO metadata for the Doctor Suites route in `frontend/src/config/seo.ts` and include the route in `frontend/public/sitemap.xml` under the existing domain.

**User-visible outcome:** Users can navigate to a new “Doctor Suites” page from the header, read structured information about suites/services, and use a CTA to book an appointment or contact the clinic; the page has correct title/description metadata and is included in the sitemap.
