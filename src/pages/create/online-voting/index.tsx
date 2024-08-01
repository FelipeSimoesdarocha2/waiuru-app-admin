// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { OnlineVotingScreen } from 'modules/home/screens/onlineVoting';

// Components
import { Layout } from 'components/layout';

const OnlineVoting = () => {
  return (
    <Layout selectedKey="9">
      <OnlineVotingScreen />
    </Layout>
  );
};

OnlineVoting.allowedModule = ModulesEnum.ONLINEVOTING;

export default OnlineVoting;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
