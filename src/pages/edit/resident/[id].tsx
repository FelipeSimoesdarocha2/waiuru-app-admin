// Next
import router from 'next/router';

// Providers
import ResidentProvider from 'provider/ResidentProvider';

// Modules
import { ResidentEditScreen } from 'modules/home/screens/edit/resident';

// Components
import { Layout } from 'components/layout';

const ResidentsEdit = () => {
  const { id } = router.query;

  return (
    <Layout selectedKey="22">
      <ResidentProvider id={id as string}>
        <ResidentEditScreen />
      </ResidentProvider>
    </Layout>
  );
};

export default ResidentsEdit;

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
