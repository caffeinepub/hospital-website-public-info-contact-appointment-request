# Specification

## Summary
**Goal:** Set the uploaded image `download.webp` as the Home page hero section background while keeping existing hero content readable.

**Planned changes:**
- Add `download.webp` to a frontend public/static assets location so it can be referenced by a stable URL at runtime (no backend calls).
- Update the `/` Home page hero (first section) to use `download.webp` as its background image.
- Add minimal overlay/gradient styling to preserve readability of existing hero text and CTA buttons, and ensure responsive cropping/scaling without stretching.
- Ensure no changes affect other routes/pages.

**User-visible outcome:** Visiting `/` shows the Home page hero with the new background image, and the existing heading/text/buttons remain clear and readable on both mobile and desktop.
