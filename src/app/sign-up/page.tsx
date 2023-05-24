'use client';

import { DEFAULT_SPLASH, SplashImage, SplashProvider } from '@/components/splash/splashContext';
import signUpLocale from '@/locales/sign-up';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Page, PageHeading, SplashBanner } from '@/components';

const TheGame = withGlobalProviders(() => {
  const locale = signUpLocale['en-US'];
  const splash: SplashImage = {
    ...DEFAULT_SPLASH,
    src: '/images/future-tech.jpg',
  };
  return (
    <SplashProvider value={splash}>
      <Head/>
      <Page id="Home">
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
    </SplashProvider>
  );
});

export default TheGame;
