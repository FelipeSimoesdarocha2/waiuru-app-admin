// Next
import router from 'next/router';

// React
import { useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Components
import { CustomAppProps } from 'pages/_app';

const ComponentWrapper = ({ Component, pageProps }: CustomAppProps) => {
  const session = useAppSelector(selectUser);

  // TODO refactor permission

  useEffect(() => {
    if (!session.user?.id) {
      router.push('/');
    }
  }, [session.user?.id]);

  return <Component {...pageProps} />;
};

export default ComponentWrapper;
