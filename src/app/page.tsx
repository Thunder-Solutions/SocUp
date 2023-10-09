'use client';

import { DEFAULT_SPLASH, SplashContext, SplashImage } from '@/components/splash/splashContext';
import homeLocale from '@/locales/home';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Markdown, Page, SiteTitle, Splash } from '@/components';

const Home = withGlobalProviders(() => {
  const locale = homeLocale['en-US'];
  const splash: SplashImage = {
    ...DEFAULT_SPLASH,
    src: '/images/future-tech.jpg',
  };
  return (
    <SplashContext.Provider value={splash}>
      <Head/>
      <Page id="Home">
        <Splash>
          <SiteTitle />
          <InfoPanel>
            <Heading>{locale.title}</Heading>
          </InfoPanel>
        </Splash>
        <Container>
          {/* <InfoPanel>
            <Heading>{locale.problemTitle}</Heading>
            <p>{locale.problemDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.solutionTitle}</Heading>
            <p>{locale.solutionDesc}</p>
          </InfoPanel> */}
          <InfoPanel>
            <Heading>{locale.aboutTitle}</Heading>
            <p>{locale.aboutDesc}</p>
          </InfoPanel>
          <InfoPanel>
            <Heading>{locale.rulesTitle}</Heading>
            <Markdown>{locale.rulesDesc}</Markdown>
          </InfoPanel>
        </Container>
      </Page>
    </SplashContext.Provider>
  );
});

export default Home;
