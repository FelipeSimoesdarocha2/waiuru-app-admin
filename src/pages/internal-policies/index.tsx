// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { InternalPoliciesScreen } from 'modules/home/screens/internalPolicies';

// Components
import { Layout } from 'components/layout';

const InternalPolicies = () => {
  return (
    <Layout selectedKey="18">
      <InternalPoliciesScreen />
    </Layout>
  );
};

InternalPolicies.allowedModule = ModulesEnum.INTERNALPOLICIES;

export default InternalPolicies;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
