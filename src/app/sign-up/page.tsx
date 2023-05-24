'use client';

import { SplashContext, SplashImage } from '@/components/splash/splashContext';
import signUpLocale from '@/locales/sign-up';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Page, PageHeading, SplashBanner } from '@/components';

const TheGame = withGlobalProviders(() => {
  const locale = signUpLocale['en-US'];
  const splash: SplashImage = {
    src: '/images/future-tech.jpg',
    characteristic: 'dark',
  };
  return (
    <SplashContext.Provider value={splash}>
      <Page id="Home">
        <Head/>
        <SplashBanner>
          <PageHeading title={locale.title} />
        </SplashBanner>
        <Container>
          <InfoPanel>
            <Heading>{locale.reserveTitle}</Heading>
            <p>{locale.reserveDesc}</p>
          </InfoPanel>
        </Container>
      </Page>
    </SplashContext.Provider>
  );
});

export default TheGame;
