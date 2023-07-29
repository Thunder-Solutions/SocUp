'use client';

import { DEFAULT_SPLASH, SplashImage, SplashProvider } from '@/components/splash/splashContext';
import businessLocale from '@/locales/for-business';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Page, PageHeading, SplashBanner } from '@/components';

const ForBusiness = withGlobalProviders(() => {
  const locale = businessLocale['en-US'];
  const splash: SplashImage = {
    ...DEFAULT_SPLASH,
    src: '/images/handshake.jpg',
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
            <Heading>{locale.featuresTitle}</Heading>
            <p>{locale.featuresDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.questsTitle}</Heading>
            <p>{locale.questsDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.levelUpTitle}</Heading>
            <p>{locale.levelUpDesc}</p>
          </InfoPanel>
        </Container>
      </Page>
    </SplashProvider>
  );
});

export default ForBusiness;
