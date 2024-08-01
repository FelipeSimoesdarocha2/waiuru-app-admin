// Next
import { GetStaticPropsContext } from 'next';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { RolesEnum } from 'models';

// Modules
import DashboardProvider from 'provider/DashboardProvider';

// Provider
import { DashboardScreen } from 'modules/home/screens/dashboard';

// Components
import { Layout } from 'components/layout';

const Dashboard = () => {
  const session = useAppSelector(selectUser);

  return (
    <Layout selectedKey="1">
      {session.user && [RolesEnum.ADMIN, RolesEnum.CONDOMINIUM].includes(session.user.role) && (
        <DashboardProvider>
          <DashboardScreen />
        </DashboardProvider>
      )}
    </Layout>
  );
};

Dashboard.allowedRoles = [RolesEnum.ADMIN, RolesEnum.CONDOMINIUM];

export default Dashboard;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
