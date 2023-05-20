import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import locale from '../locales/global';
import { LocaleContext } from '@/context';

export const withGlobalProviders = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    const _locale = locale['en-US'];
    return (
      <LocaleContext.Provider value={_locale}>
        <ParallaxProvider>
          <Component global={global} {...props as P} />
        </ParallaxProvider>
      </LocaleContext.Provider>
    );
  };
};
