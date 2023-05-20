type GetURLOptions = {
  relativeTo?: 'current' | 'origin' | 'custom',
  basePath?: string,
};

/**
 * This function quickly creates a URL object from any href string
 */
export const getURL = (href: string, { relativeTo = 'current', basePath: _basePathOverride = '' }: GetURLOptions = {}): URL | null => {
  if (!href) return null;
  const absRegex = /^([^/]+?)\/\//;
  const isAbsolute = absRegex.test(href);
  if (isAbsolute) return new URL(href);
  const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN;
  const basePathOverride = String(_basePathOverride);
  const isBasePathAbsolute = absRegex.test(basePathOverride);
  const basePathMap = {
    current: typeof window === 'undefined' ? ORIGIN : location.href.replace(/\/$/, ''),
    origin: ORIGIN,
    custom: isBasePathAbsolute ? basePathOverride : `${ORIGIN}${basePathOverride.replace(/\/$/, '')}`,
  };
  const basePath = basePathMap[relativeTo];
  const relativeHref = href.replace(/^\//, '');
  const fullHref = basePath + '/' + relativeHref;
  return new URL(fullHref);
};
