// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { LostAndFoundScreen } from 'modules/home/screens/lostAndFound';

// Components
import { Layout } from 'components/layout';

const LostAndFound = () => {
  return (
    <Layout selectedKey="16">
      <LostAndFoundScreen />
    </Layout>
  );
};

LostAndFound.allowedModule = ModulesEnum.LOSTANDFOUND;

export default LostAndFound;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
