// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { ResidentInviteScreen } from 'modules/home/screens/residentInvite';

// Components
import { Layout } from 'components/layout';

const ResidentInvite = () => {
  return (
    <Layout selectedKey="11">
      <ResidentInviteScreen />
    </Layout>
  );
};

ResidentInvite.allowedModule = ModulesEnum.RESIDENTINVITE;

export default ResidentInvite;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
