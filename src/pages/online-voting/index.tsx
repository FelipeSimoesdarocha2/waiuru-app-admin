// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { OnlineVotingsScreen } from 'modules/home/screens/onlineVotings';

// Components
import { Layout } from 'components/layout';

const OnlineVotings = () => {
  return (
    <Layout selectedKey="21">
      <OnlineVotingsScreen />
    </Layout>
  );
};

OnlineVotings.allowedModule = ModulesEnum.ONLINEVOTINGS;

export default OnlineVotings;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
