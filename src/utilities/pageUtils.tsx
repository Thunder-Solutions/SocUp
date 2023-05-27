import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import locale from '../locales/global';
import { LocaleContext } from '@/context';
import { GenericObj } from './types';
import variables from '@/locales/_variables';

type DeepStringObject = {
  [key: string]: string | DeepStringObject,
} | string[] | DeepStringObject[]

type VariablesObject = GenericObj<GenericObj<string>>

type ParseVariablesInString = (str: string, locale: string, variables: VariablesObject) => string

type ParseVariables = <T extends DeepStringObject>(localeData: T, locale: string, variables: VariablesObject) => T

/**
 * Parses a single string's variables provided the locale and variable mappings
 */
const parseVariablesInString: ParseVariablesInString = (str, locale, variables) => {
  const varKV = Object.entries(variables[locale]);
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
export const parseVariables: ParseVariables = (localeData, locale, variables) => {
  const init = (Array.isArray(localeData) ? [] : {}) as DeepStringObject;
  return Object.entries(localeData).reduce((parsedLocaleData, [key, value]) => {
    if (typeof value === 'string') parsedLocaleData[key] = parseVariablesInString(value, locale, variables);
    else parsedLocaleData[key] = parseVariables(value, locale, variables);
    return parsedLocaleData;
  }, init);
};

export const withGlobalProviders = <P extends object>(Component: React.ComponentType<P>) => {
  const WithGlobalProviders = (props: P) => {
    const localeName = 'en-US'
    const _locale = parseVariables(locale[localeName], localeName, variables);
    return (
      <LocaleContext.Provider value={_locale}>
        <ParallaxProvider>
          <Component global={global} {...props as P} />
        </ParallaxProvider>
      </LocaleContext.Provider>
    );
  };
  return WithGlobalProviders;
};
