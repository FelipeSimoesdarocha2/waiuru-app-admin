// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { AnimalsScreen } from 'modules/home/screens/animals';

// Components
import { Layout } from 'components/layout';

const Animals = () => {
  return (
    <Layout selectedKey="8">
      <AnimalsScreen />
    </Layout>
  );
};

Animals.allowedModule = ModulesEnum.ANIMALS;

export default Animals;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
