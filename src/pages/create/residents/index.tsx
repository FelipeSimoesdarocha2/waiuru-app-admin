// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { ResidentsScreen } from 'modules/home/screens/residents';

// Components
import { Layout } from 'components/layout';

const Residents = () => {
  return (
    <Layout selectedKey="7">
      <ResidentsScreen />
    </Layout>
  );
};

Residents.allowedModule = ModulesEnum.RESIDENTS;

export default Residents;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
