// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { AccessControlScreen } from 'modules/home/screens/accessControl';

// Components
import { Layout } from 'components/layout';

const AccessControl = () => {
  return (
    <Layout selectedKey="3">
      <AccessControlScreen />
    </Layout>
  );
};

AccessControl.allowedModule = ModulesEnum.ACESSCONTROL;

export default AccessControl;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
