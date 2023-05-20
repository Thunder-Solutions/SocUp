'use client';

import locale from '../locales/home';
import { withGlobalProviders } from '@/utilities';

const Home = withGlobalProviders(() => {
  console.log(locale);
  return (
    <h1>SocUp</h1>
  );
});

export default Home;
