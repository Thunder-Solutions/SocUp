'use client';

import { SplashContext, SplashImage } from '@/components/splash/splashContext';
import signUpLocale from '@/locales/sign-up';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Markdown, Page, SiteTitle, Splash } from '@/components';

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
        <Splash>
          <SiteTitle />
          <InfoPanel>
            <Heading>{locale.title}</Heading>
          </InfoPanel>
        </Splash>
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
