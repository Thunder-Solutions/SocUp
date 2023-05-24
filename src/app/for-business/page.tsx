'use client';

import { SplashContext, SplashImage } from '@/components/splash/splashContext';
import businessLocale from '@/locales/for-business';
import { withGlobalProviders } from '@/utilities';
import { Container, Head, Heading, InfoPanel, Page, PageHeading, SplashBanner } from '@/components';

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
        <SplashBanner>
          <PageHeading title={locale.title} />
        </SplashBanner>
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
