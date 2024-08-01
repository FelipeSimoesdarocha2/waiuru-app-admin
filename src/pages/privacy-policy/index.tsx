// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { PrivacyPolicyScreen } from 'modules/home/screens/privacyPolicy';

// Components
import { Layout } from 'components/layout';

const PrivacyPolicy = () => {
  return (
    <Layout selectedKey="19">
      <PrivacyPolicyScreen />
    </Layout>
  );
};

PrivacyPolicy.allowedModule = ModulesEnum.PRIVACYPOLICY;

export default PrivacyPolicy;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
