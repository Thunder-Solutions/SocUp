'use client';

import { SplashContext, SplashImage } from '@/components/splash/splashContext';
import gameLocale from '@/locales/the-game';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Page, SiteTitle, Splash } from '@/components';

const TheGame = withGlobalProviders(() => {
  const locale = gameLocale['en-US'];
  const splash: SplashImage = {
    src: '/images/people-having-fun.jpg',
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
            <Heading>{locale.howToPlayTitle}</Heading>
            <p>{locale.howToPlayDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.dataTitle}</Heading>
            <p>{locale.dataDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.upTeamsTitle}</Heading>
            <p>{locale.upTeamsDesc}</p>
          </InfoPanel>
        </Container>
      </Page>
    </SplashContext.Provider>
  );
});

export default TheGame;
