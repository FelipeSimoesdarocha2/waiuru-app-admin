// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { ListResidentsScreen } from 'modules/home/screens/listResidents';

// Components
import { Layout } from 'components/layout';

const ListResidents = () => {
  return (
    <Layout selectedKey="22">
      <ListResidentsScreen />
    </Layout>
  );
};

ListResidents.allowedModule = ModulesEnum.LISTRESIDENTS;

export default ListResidents;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
