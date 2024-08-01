// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { InternalRegulationsScreen } from 'modules/home/screens/internalRegulations';

// Components
import { Layout } from 'components/layout';

const InternalRegulations = () => {
  return (
    <Layout selectedKey="17">
      <InternalRegulationsScreen />
    </Layout>
  );
};

InternalRegulations.allowedModule = ModulesEnum.INTERNALREGULATIONS;

export default InternalRegulations;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
