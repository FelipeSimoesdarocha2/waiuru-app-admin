// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { OrderScreen } from 'modules/home/screens/order';

// Components
import { Layout } from 'components/layout';

const Order = () => {
  return (
    <Layout selectedKey="5">
      <OrderScreen />
    </Layout>
  );
};

Order.allowedModule = ModulesEnum.ORDER;

export default Order;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
