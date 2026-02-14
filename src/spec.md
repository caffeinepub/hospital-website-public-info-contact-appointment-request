# Specification

## Summary
**Goal:** Increase photo presence site-wide by adding at least one additional image to every routed page, using existing hero-image styling and cache-busting behavior.

**Planned changes:**
- Add one additional image section (e.g., secondary banner, supporting image block, or small grid) to each route in `frontend/src/App.tsx`: `/`, `/about`, `/services`, `/contact`, `/appointments`, `/emergency`, `/doctor-suites`, `/domain-draft`, `/decommissioned`, and the `*` not-found route.
- Ensure all newly added images are loaded from `/assets/generated/...` and use the existing cache-busting approach (via `PageHeroImage` or `withCacheBust` for non-hero images).
- Update `/domain-draft` so the unauthenticated (login-required) view also displays a generated image with meaningful English alt text.
- Add the newly generated image files as static assets under `frontend/public/assets/generated` and reference each at least once across the pages.

**User-visible outcome:** Every page across the site displays more photos/illustrations (including the domain draft login-required view), with responsive styling consistent with the existing hero imagery.
