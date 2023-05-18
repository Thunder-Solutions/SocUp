import React from 'react';
import { NextPageContext } from 'next';
import { ParallaxProvider } from 'react-scroll-parallax';
import { getLocaleData } from '@/api-client';
import { DEFAULT_LOCALE, GlobalLocaleType, LocaleContext } from '@/context';
import { GenericObj } from './types';

const cache = {
  global: {
    locale: DEFAULT_LOCALE,
  },
  init: false,
};

export type GlobalProvidersProps = React.PropsWithChildren<{
  global: {
    locale: GlobalLocaleType,
  },
}>;

export const withGlobalPageContext = (getInitialProps?: Function) => async (context: NextPageContext) => {
  if (!cache.init) {
    const localeData = await getLocaleData<GlobalLocaleType>('global').request;
    if (typeof localeData === 'string') {
      console.error('Could not get locale data:', localeData);
    } else {
      cache.global = {
        locale: localeData,
      };
    }
  }
  cache.init = true;
  const _context: NextPageContext & GlobalProvidersProps = {
    ...context,
    global: cache.global,
  };
  if (typeof getInitialProps !== 'function') return _context;
  return await getInitialProps(_context);
}

export const withGlobalProviders = <P extends object = GlobalProvidersProps>(Component: React.ComponentType<P>) => ({
  global,
  ...props
}: GlobalProvidersProps & P) => {
  return (
    <LocaleContext.Provider value={global.locale}>
      <ParallaxProvider>
        <Component global={global} {...props as P} />
      </ParallaxProvider>
    </LocaleContext.Provider>
  );
};
