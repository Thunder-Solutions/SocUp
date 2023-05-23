'use client';

import { SplashContext, SplashImage } from '@/components/splash/splashContext';
import visionLocale from '@/locales/vision';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Markdown, Page, SiteTitle, Splash } from '@/components';

const TheGame = withGlobalProviders(() => {
  const locale = visionLocale['en-US'];
  const splash: SplashImage = {
    src: '/images/galaxy.jpg',
    characteristic: 'dark',
  };
  return (
    <SplashContext.Provider value={splash}>
      <Page id="Home">
        <Head/>
        <Splash>
          <SiteTitle />
          <InfoPanel>
            <Heading>{locale.title}</Heading>
          </InfoPanel>
        </Splash>
        <Container>
          <InfoPanel>
            <Heading>{locale.collaborationTitle}</Heading>
            <p>{locale.collaborationDesc}</p>
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
    </SplashContext.Provider>
  );
});

export default TheGame;
