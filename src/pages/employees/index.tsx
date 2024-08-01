// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { EmployeesScreen } from 'modules/home/screens/employees';

// Components
import { Layout } from 'components/layout';

const Employees = () => {
  return (
    <Layout selectedKey="12">
      <EmployeesScreen />
    </Layout>
  );
};

Employees.allowedModule = ModulesEnum.EMPLOYEES;

export default Employees;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
