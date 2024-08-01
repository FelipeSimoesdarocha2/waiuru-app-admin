// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { OrdersScreen } from 'modules/home/screens/orders';

// Components
import { Layout } from 'components/layout';

const Orders = () => {
  return (
    <Layout selectedKey="13">
      <OrdersScreen />
    </Layout>
  );
};

Orders.allowedModule = ModulesEnum.ORDERS;

export default Orders;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
