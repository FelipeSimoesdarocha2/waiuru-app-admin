// Models
import { ArchiveRequestDto } from 'models';

// Api
import fetcher from './fetch';

export const uploadImageRequest = (data: ArchiveRequestDto) => {
  const formdata = new FormData();
  formdata.append('file', data.file);
  formdata.append('type', 'PROFILE_PICTURE');

  const requestOptions = {
    method: 'POST',
    body: formdata,
  };

  return fetcher('/v1/upload', requestOptions);
};

export const signDocumentUrl = (url: string) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({ url }),
  };

  return fetcher(`/v1/upload/sign-document`, requestOptions);
};
