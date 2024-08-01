// Api
import fetcher from 'api/fetch';

export const getUserRequest = async () => {
  return fetcher(`/v1/user`);
};
