// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { LoginScreen } from 'modules/auth/screens/login';

const LoginPage = () => {
  return <LoginScreen />;
};

export default LoginPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
