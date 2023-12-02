import { GlobalLocale } from '@/locales/types';
import { createContext } from 'react';

export const DEFAULT_LOCALE: GlobalLocale = {
  nav: [],
  siteMap: [],
  // social: [],
  photoCredits: [],
  copyright: '',
}

/**
 * Contains all the global locale text from `locales/global/<locale>.json`.
 * This context is provided to all other components by `<MyApp>` in `pages/_app.js`.
 */
export const LocaleContext = createContext<GlobalLocale>(DEFAULT_LOCALE);
