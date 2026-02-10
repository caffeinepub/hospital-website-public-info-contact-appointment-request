# Specification

## Summary
**Goal:** Add the user-uploaded images as static assets and use one as a responsive profile-background element on doctor profile cards in the Doctors page.

**Planned changes:**
- Add `Screenshot_2026-02-04-17-14-58-73_1c337646f29875672b5a61192b9010f9-1.jpg` and `unnamed.webp` to the frontend public static assets directory with original filenames and stable URL paths.
- Update the Doctors page UI to display one uploaded image as a visible background (e.g., a top banner or background area) for each doctor profile card.
- Ensure readability of doctor-card text over the background on mobile and desktop (e.g., overlay/tint/blur or layout separation) without modifying `frontend/src/components/ui`.

**User-visible outcome:** On the Doctors page, each doctor profile card shows a clear background image area using the uploaded image, and all text remains easy to read across screen sizes.
