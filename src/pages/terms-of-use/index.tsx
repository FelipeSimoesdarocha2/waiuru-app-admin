// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { UseTermsScreen } from 'modules/home/screens/useTerms';

// Components
import { Layout } from 'components/layout';

const UseTerms = () => {
  return (
    <Layout selectedKey="20">
      <UseTermsScreen />
    </Layout>
  );
};

UseTerms.allowedModule = ModulesEnum.USETERMS;

export default UseTerms;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
