import { getBuildId } from '@/config/buildInfo';

/**
 * Check if a URL points to a generated asset
 */
export function isGeneratedAsset(url: string): boolean {
  return url.includes('/assets/generated/');
}

/**
 * Add cache-busting version parameter to generated asset URLs
 * Preserves existing query parameters and hash fragments
 */
export function withCacheBust(url: string): string {
  if (!isGeneratedAsset(url)) {
    return url;
  }

  const buildId = getBuildId();
  
  try {
    const urlObj = new URL(url, window.location.origin);
    urlObj.searchParams.set('v', buildId);
    return urlObj.pathname + urlObj.search + urlObj.hash;
  } catch {
    // Fallback for relative URLs or parsing errors
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}v=${buildId}`;
  }
}
