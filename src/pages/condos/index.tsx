// Next
import { GetStaticPropsContext } from 'next';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { RolesEnum } from 'models';

// Modules
import { HomeScreen } from 'modules/home/screens/home';

// Components
import { Layout } from 'components/layout';

const Condons = () => {
  const session = useAppSelector(selectUser);

  return <Layout>{session.user?.role === RolesEnum.ADMIN && <HomeScreen />}</Layout>;
};

Condons.allowedRoles = [RolesEnum.ADMIN];

export default Condons;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
