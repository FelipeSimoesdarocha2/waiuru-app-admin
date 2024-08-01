// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { VehiclesScreen } from 'modules/home/screens/vehicles';

// Components
import { Layout } from 'components/layout';

const Vehicles = () => {
  return (
    <Layout selectedKey="6">
      <VehiclesScreen />
    </Layout>
  );
};

Vehicles.allowedModule = ModulesEnum.VEHICLES;

export default Vehicles;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
