// Next
import { GetStaticPropsContext } from 'next';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { RolesEnum } from 'models';

// Modules
import { FirstAccessScreen } from 'modules/home/screens/firstAccess';

const FirstAccess = () => {
  const session = useAppSelector(selectUser);

  return (
    <>
      {session.user && [RolesEnum.ADMIN].includes(session.user.role) && (
        <FirstAccessScreen
          session={{
            name: session.user.name,
            photo: session?.user?.documents?.filter(e => e.type === 'PROFILE_PICTURE')[0]?.url ?? '',
          }}
        />
      )}
    </>
  );
};

FirstAccess.allowedRoles = [RolesEnum.ADMIN];

export default FirstAccess;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
