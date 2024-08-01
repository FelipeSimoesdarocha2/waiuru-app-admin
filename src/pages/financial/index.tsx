// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { FinancialScreen } from 'modules/home/screens/financial';

// Components
import { Layout } from 'components/layout';

const Financial = () => {
  return (
    <Layout selectedKey="14">
      <FinancialScreen />
    </Layout>
  );
};

Financial.allowedModule = ModulesEnum.FINANCIAL;

export default Financial;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
