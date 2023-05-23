'use client';

import { SplashContext, SplashImage } from '@/components/splash/splashContext';
import businessLocale from '@/locales/for-business';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Markdown, Page, SiteTitle, Splash } from '@/components';

const TheGame = withGlobalProviders(() => {
  const locale = businessLocale['en-US'];
  const splash: SplashImage = {
    src: '/images/handshake.jpg',
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
            <Heading>{locale.jobBoardTitle}</Heading>
            <p>{locale.jobBoardDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.rewardsTitle}</Heading>
            <p>{locale.rewardsDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.bargainingTitle}</Heading>
            <p>{locale.bargainingDesc}</p>
          </InfoPanel>
        </Container>
      </Page>
    </SplashContext.Provider>
  );
});

export default TheGame;
