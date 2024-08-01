// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { FeedScreen } from 'modules/home/screens/feed';

// Components
import { Layout } from 'components/layout';

const Feed = () => {
  return (
    <Layout selectedKey="17">
      <FeedScreen />
    </Layout>
  );
};

Feed.allowedModule = ModulesEnum.FEED;

export default Feed;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
