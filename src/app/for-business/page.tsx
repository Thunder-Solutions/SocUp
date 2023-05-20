'use client';

import { SplashContext, SplashImage } from '@/components/splash/splashContext';
import gameLocale from '@/locales/the-game';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Markdown, Page, SiteTitle, Splash } from '@/components';

const TheGame = withGlobalProviders(() => {
  const locale = gameLocale['en-US'];
  const splash: SplashImage = {
    src: '/images/future-tech.jpg',
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
            <Heading>{locale.problemTitle}</Heading>
            <p>{locale.problemDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.solutionTitle}</Heading>
            <p>{locale.solutionDesc}</p>
          </InfoPanel>
        </Container>
      </Page>
    </SplashContext.Provider>
  );
});

export default TheGame;
