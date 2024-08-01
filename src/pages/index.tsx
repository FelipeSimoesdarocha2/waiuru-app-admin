// Next
import { NextPage } from 'next';
import { GetStaticPropsContext } from 'next';

// Modules
import { LoginScreen } from 'modules/auth/screens/login';

const Home: NextPage = () => {
  return <LoginScreen />;
};

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../i18n/locales/${locale}.json`)).default,
    },
  };
}
