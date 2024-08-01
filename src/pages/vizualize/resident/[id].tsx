// Next
import router from 'next/router';

// Providers
import ResidentProvider from 'provider/ResidentProvider';

// Modules
import { ResidentVizualizeScreen } from 'modules/home/screens/vizualize/resident';

// Components
import { Layout } from 'components/layout';

const ResidentsVizualize = () => {
  const { id } = router.query;

  return (
    <Layout selectedKey="22">
      <ResidentProvider id={id as string}>
        <ResidentVizualizeScreen />
      </ResidentProvider>
    </Layout>
  );
};

export default ResidentsVizualize;

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
