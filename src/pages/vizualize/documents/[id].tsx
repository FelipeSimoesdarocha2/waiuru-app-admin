// Next
import router from 'next/router';

// Models
import { ModulesEnum } from 'models';

// Components
import { Layout } from 'components/layout';

const DocumentsVizualize = () => {
  const { id } = router.query;

  return <Layout selectedKey="17"></Layout>;
};

DocumentsVizualize.allowedModule = ModulesEnum.DASHBOARD;

export default DocumentsVizualize;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(props: any) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${props.locale}.json`)).default,
    },
  };
}
