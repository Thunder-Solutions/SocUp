
/**
 * Converts any value to a boolean, but non-empty strings must read "true" or "false"
 */
export const bool = (val: unknown): boolean | TypeError => {
  const isString = typeof val === 'string';
  const _val = isString ? val.toLowerCase().trim() : val;
  const strValues = ['', 'true', 'false'];
  if (typeof _val === 'string' && !strValues.includes(_val)) {
    return new TypeError('Could not convert string to boolean because the string was not empty and neither "true" nor "false"');
  }
  return isString ? _val === 'true' : Boolean(_val);
};

/**
 * Apply classes dynamically based on boolean expressions
 */
export const getClassName = (classMap: { [className: string]: boolean }, ...classes: string[]): string => {
  const classArr = [
    ...Object.entries(classMap).reduce((classes, [_class, applyClass]) => {
      if (applyClass) classes.push(_class);
      return classes;
    }, [] as string[]),
    ...classes,
  ];
  return classArr.join(' ');
};

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
