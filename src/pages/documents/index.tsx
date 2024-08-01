// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { DocumentsScreen } from 'modules/home/screens/documents';

// Components
import { Layout } from 'components/layout';

const Documents = () => {
  return (
    <Layout selectedKey="18">
      <DocumentsScreen />
    </Layout>
  );
};

Documents.allowedModule = ModulesEnum.DASHBOARD;

export default Documents;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
