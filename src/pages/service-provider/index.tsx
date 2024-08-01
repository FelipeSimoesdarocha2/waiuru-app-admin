// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { ServiceProviderScreen } from 'modules/home/screens/serviceProvider';

// Components
import { Layout } from 'components/layout';

const ServiceProvider = () => {
  return (
    <Layout selectedKey="20">
      <ServiceProviderScreen />
    </Layout>
  );
};

ServiceProvider.allowedModule = ModulesEnum.SERVICEPROVIDER;

export default ServiceProvider;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
