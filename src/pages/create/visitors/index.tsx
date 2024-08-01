// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { VisitorsScreen } from 'modules/home/screens/visitors';

// Components
import { Layout } from 'components/layout';

const Visitors = () => {
  return (
    <Layout selectedKey="4">
      <VisitorsScreen />
    </Layout>
  );
};

Visitors.allowedModule = ModulesEnum.VISITORS;

export default Visitors;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
