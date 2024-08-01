// Next
import router from 'next/router';

// Providers
import EmployeeProvider from 'provider/EmployeeProvider';

// Modules
import { EmployeeVizualizeScreen } from 'modules/home/screens/vizualize/employee';

// Components
import { Layout } from 'components/layout';

const EmployeesVizualize = () => {
  const { id } = router.query;

  return (
    <Layout selectedKey="12">
      <EmployeeProvider id={id as string}>
        <EmployeeVizualizeScreen />
      </EmployeeProvider>
    </Layout>
  );
};

export default EmployeesVizualize;

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
