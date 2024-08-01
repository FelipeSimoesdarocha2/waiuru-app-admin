// Services
import { app } from 'services/firebase/firebase.config';

// Firebase
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';

export const optionsInterceptor = async (options: any) => {
  const opt = { ...options };
  const auth = getAuth(app);

  const getToken = (): Promise<string | null> => {
    return new Promise(resolve => {
      const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
        if (user) {
          const token = await auth.currentUser?.getIdToken(true);
          resolve(token ?? null);
        } else {
          resolve(null);
        }
        unsubscribe();
      });
    });
  };

  const userToken = await getToken();

  opt.headers = {
    Authorization: `Bearer ${userToken}`,
    ...options.headers,
  };

  return opt;
};

export const fetcher = async (path: string, options?: any): Promise<any> => {
  const requestOptions = await optionsInterceptor(options);

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, requestOptions);
};

export default fetcher;
