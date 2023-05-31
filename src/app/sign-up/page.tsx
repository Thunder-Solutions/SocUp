'use client';

import { DEFAULT_SPLASH, SplashImage, SplashProvider } from '@/components/splash/splashContext';
import signUpLocale from '@/locales/sign-up';
import { emailRegex, htmlEmailRegex, withGlobalProviders } from '@/utilities';
import { Button, Container, Form, Head, Heading, InfoPanel, Input, Page, PageHeading, SplashBanner } from '@/components';
import { useState } from 'react';

const TheGame = withGlobalProviders(() => {
  const locale = signUpLocale['en-US'];
  const splash: SplashImage = {
    ...DEFAULT_SPLASH,
    src: '/images/future-tech.jpg',
  };

  const [showForm, setShowForm] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email');
    if (typeof email !== 'string') throw new Error(locale.emailError);
    const valid = emailRegex.test(email);
    if (!valid) throw new Error(locale.emailError);
    setShowForm(false);
    alert('Nothing happened yet, but after we finish this part, it will send an email.');
    return locale.emailSubmitted;
  }

  const submitAnother = () => {
    setRefresh(!refresh);
    setShowForm(true);
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
            <Heading>{locale.reserveTitle}</Heading>
            <p>{locale.reserveDesc}</p>
            <Form onSubmit={handleSubmit} key={refresh}>
              {showForm
                ? <>
                    <Input label={locale.emailLabel} name="email" required pattern={htmlEmailRegex} />
                    <Button>{locale.submitLabel}</Button>
                  </>
                : <Button type="button" importance={1} onClick={submitAnother}>{locale.submitAnother}</Button>
              }
            </Form>
          </InfoPanel>
        </Container>
      </Page>
    </SplashProvider>
  );
});

export default TheGame;
