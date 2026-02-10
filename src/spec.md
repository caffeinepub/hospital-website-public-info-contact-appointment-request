# Specification

## Summary
**Goal:** Add a save-and-retrieve “domain draft” feature with backend persistence and a frontend UI gated by Internet Identity login.

**Planned changes:**
- Add stable backend storage for a single domain draft text value plus a last-updated timestamp, with methods to update and to query the current draft (returning null/none when unset).
- Add a new frontend route (e.g., `/domain-draft`) with a Domain Draft page that lets the user enter a domain and save it as a draft, and shows the currently saved draft and a human-readable last-updated time.
- Require Internet Identity login to save: when anonymous, disable saving and display an English message indicating login is required; when logged in, enable saving and call the backend update method.
- Follow existing `useActor` and React Query patterns for loading/success/error states without modifying files under `frontend/immutablePaths`.

**User-visible outcome:** Users can visit a new Domain Draft page to view the currently saved draft domain and last updated time, and (when logged in) save a new draft domain value.
