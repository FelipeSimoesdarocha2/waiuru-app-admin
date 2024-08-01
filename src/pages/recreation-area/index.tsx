// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { RecreationAreaScreen } from 'modules/home/screens/recreationArea';

// Components
import { Layout } from 'components/layout';

const RecreationArea = () => {
  return (
    <Layout selectedKey="23">
      <RecreationAreaScreen />
    </Layout>
  );
};

RecreationArea.allowedModule = ModulesEnum.RECREACTIONAREA;

export default RecreationArea;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
