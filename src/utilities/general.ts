import { GenericObj } from './types';

/**
 * Includes null and all nonprimitive types
 */
export const getType = (val: unknown): typeof val => {
  if (val === null) return 'null';
  if (typeof val === 'object') return val.constructor.name.toLowerCase();
  return typeof val;
};

/**
 * A safe alternative to `typeof`, including null and all nonprimitive types
 */
export const checkType = (val: unknown, type: string | string[]): boolean | TypeError => {
  const validString = getType(type) === 'string';
  const validArray = Array.isArray(type) && type.every(t => getType(t) === 'string');
  if (!validString && !validArray) return new TypeError('`checkType()` expects either a string or array of strings in the second argument');
  if (validString) return getType(val) === type;
  if (validArray) return type.some(t => getType(val) === t);
  return false;
};

/**
 * Parses a single string's variables provided the locale and variable mappings
 */
const parseVariablesInString = (str: string, locale: string, variables: GenericObj<GenericObj<string>>): string => {
  const varKV = Object.entries(variables[locale]);
  return varKV.reduce((outputStr, [key, value]) => {
    outputStr = outputStr.replace(key, value)
      .replace(/(?<!\\)({|})/g, '')
      .replace(/\\/g, '');
    return outputStr;
  }, str);
};

type DeepStringObject = {
  [key: PropertyKey]: string | DeepStringObject,
} | DeepStringObject[];

/**
 * Parses all of the variables in the provided object's values
 */
export const parseVariables = (localeData: DeepStringObject, locale: string, variables: GenericObj<GenericObj<string>>): DeepStringObject => {
  const init: DeepStringObject = checkType(localeData, 'array') ? [] : {};
  return Object.entries(localeData).reduce((parsedLocaleData, [key, value]) => {
    if (typeof value === 'string') parsedLocaleData[+key] = parseVariablesInString(value, locale, variables);
    else parsedLocaleData[+key] = parseVariables(value, locale, variables);
    return parsedLocaleData;
  }, init);
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
