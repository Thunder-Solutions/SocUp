import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import locale from '../locales/global';
import { LocaleContext } from '@/context';
import { LocaleStr, variables, VariablesObject } from '@/locales/_variables';

type DeepStringObject = {
  [key: string]: string | DeepStringObject,
} | string[] | DeepStringObject[]

/**
 * Parses a single string's variables provided the locale and variable mappings
 */
const parseVariablesInString = (str: string, locale: LocaleStr, variables: VariablesObject): string => {
  const varKV = Object.entries(variables[locale] ?? {});
  return varKV.reduce((outputStr, [key, value]) => {
    outputStr = outputStr.replace(key, value)
      .replace(/(?<!\\)({|})/g, '')
      .replace(/\\/g, '');
    return outputStr;
  }, str);
};

/**
 * Parses all of the variables in the provided object's values
 */
export const parseVariables = <T extends DeepStringObject>(localeData: T, locale: LocaleStr, variables: VariablesObject): T => {
  const init = (Array.isArray(localeData) ? [] : {}) as T;
  return Object.entries(localeData).reduce((parsedLocaleData, [key, value]) => {
    if (!Array.isArray(parsedLocaleData)) {
      if (typeof value === 'string') parsedLocaleData[key] = parseVariablesInString(value, locale, variables);
      else parsedLocaleData[key] = parseVariables(value, locale, variables);
    }
    return parsedLocaleData;
  }, init);
};

export const withGlobalProviders = <P extends object>(Component: React.ComponentType<P>) => {
  const WithGlobalProviders = (props: P) => {
    const localeName = 'en-US'
    const localeText = parseVariables(locale[localeName], localeName, variables);
    return (
      <LocaleContext.Provider value={localeText}>
        <ParallaxProvider>
          <Component global={global} {...props as P} />
        </ParallaxProvider>
      </LocaleContext.Provider>
    );
  };
  return WithGlobalProviders;
};
