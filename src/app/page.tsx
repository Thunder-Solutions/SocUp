'use client';

import SplashContext, { SplashImage } from '@/components/splash/splashContext';
import homeLocale from '../locales/home';
import { withGlobalProviders } from '@/utilities';
import { Container, Group, Head, Markdown, Page, PageHeading, Splash } from '@/components';

const Home = withGlobalProviders(() => {
  const locale = homeLocale['en-US'];
  const splash: SplashImage = {
    src: '/images/storm.jpg',
    characteristic: 'dark',
  };
  return (
    <SplashContext.Provider value={splash}>
      <Page id="Home">
        <Head/>
        <Splash>
          <PageHeading
            title={locale.title}
            subtitle={locale.subtitle}
          />
        </Splash>
        <Container>
          <Group>
            <Markdown>{locale.main}</Markdown>
          </Group>
        </Container>
      </Page>
    </SplashContext.Provider>
  );
});

export default Home;
