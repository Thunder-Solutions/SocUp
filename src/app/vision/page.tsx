'use client';

import { DEFAULT_SPLASH, SplashImage, SplashProvider } from '@/components/splash/splashContext';
import visionLocale from '@/locales/vision';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Page, PageHeading, SplashBanner } from '@/components';

const TheGame = withGlobalProviders(() => {
  const locale = visionLocale['en-US'];
  const splash: SplashImage = {
    ...DEFAULT_SPLASH,
    src: '/images/galaxy.jpg',
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
            <Heading>{locale.collaborationTitle}</Heading>
            <p>{locale.collaborationDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.industriesTitle}</Heading>
            <p>{locale.industriesDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.prosperityTitle}</Heading>
            <p>{locale.prosperityDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.spaceTitle}</Heading>
            <p>{locale.spaceDesc}</p>
          </InfoPanel>
        </Container>
      </Page>
    </SplashProvider>
  );
});

export default TheGame;
