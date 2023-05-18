import { RequestWithAbort, getJSON } from '@/utilities';

/**
 * A shared getter for all locale translations
 */
const getLocaleData = <T>(path: string, locale: string = 'en-US'): RequestWithAbort<T | string>  => {
  const global = String(path === 'global');
  const [group, id] = path.split('/');
  return getJSON<T>('getLocaleData', { group, id, locale, global });
};

export default getLocaleData;
