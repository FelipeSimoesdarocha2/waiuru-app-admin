// Next
import { GetStaticPropsContext } from 'next';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { RolesEnum } from 'models';

// Modules
import { HomeScreen } from 'modules/home/screens/home';

const Home = () => {
  const session = useAppSelector(selectUser);

  return (
    <>{(session.user?.role === RolesEnum.ADMIN || session.user?.role === RolesEnum.CONDOMINIUM) && <HomeScreen />}</>
    // <>{session.user?.role === RolesEnum.ADMIN && <HomeScreen />}</>
  );
};

Home.allowedRoles = [RolesEnum.ADMIN];

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
