import { GlobalProvidersProps, withGlobalPageContext, withGlobalProviders } from '@/utilities';
import { NextPage } from 'next';

const Home: NextPage<GlobalProvidersProps> = withGlobalProviders(({ global }) => {
  console.log(global.locale);
  return (
    <h1>SocUp</h1>
  );
});

Home.getInitialProps = withGlobalPageContext();

export default Home;
