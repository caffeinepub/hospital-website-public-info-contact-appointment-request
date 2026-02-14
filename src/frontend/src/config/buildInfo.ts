// Build information for cache-busting and version display
// VITE_BUILD_ID is injected at build time via environment variable
const BUILD_ID = import.meta.env.VITE_BUILD_ID || `dev-${Date.now()}`;

export function getBuildId(): string {
  return BUILD_ID;
}

export function getBuildVersion(): string {
  // Format for user display: show first 8 chars if it looks like a hash, otherwise show as-is
  if (BUILD_ID.length > 12 && !BUILD_ID.startsWith('dev-')) {
    return BUILD_ID.substring(0, 8);
  }
  return BUILD_ID;
}
