'use client';

import { SplashContext, SplashImage } from '@/components/splash/splashContext';
import homeLocale from '../locales/home';
import { withGlobalProviders } from '@/utilities';
import { Container, Group, Head, Heading, InfoPanel, Markdown, Page, SiteTitle, Splash } from '@/components';

const Home = withGlobalProviders(() => {
  const locale = homeLocale['en-US'];
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

export default Home;
