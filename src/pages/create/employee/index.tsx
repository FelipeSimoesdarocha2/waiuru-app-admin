// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { EmployeeScreen } from 'modules/home/screens/employee';

// Components
import { Layout } from 'components/layout';

const Employee = () => {
  return (
    <Layout selectedKey="10">
      <EmployeeScreen />
    </Layout>
  );
};

Employee.allowedModule = ModulesEnum.EMPLOYEE;

export default Employee;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
