// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { AdvertisementsScreen } from 'modules/home/screens/advertisements';

// Components
import { Layout } from 'components/layout';

const Advertisements = () => {
  return (
    <Layout selectedKey="19">
      <AdvertisementsScreen />
    </Layout>
  );
};

Advertisements.allowedModule = ModulesEnum.ADVERTISEMENTS;

export default Advertisements;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
