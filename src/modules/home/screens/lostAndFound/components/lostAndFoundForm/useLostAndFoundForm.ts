// React
import { useState } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { CreateLostAndFoundDto } from 'models';

// Formik
import { useCreateLostAndFound } from 'api/lostAndFound';
import { useUploadImage } from 'api/uploadImage';

import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

// Constants
import { status } from './LostAndFoundForm.constants';

export const useLostAndFoundForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);
  const { mutateAsync: uploadImage } = useUploadImage();
  const [file, setFile] = useState(null);

  const t = useTranslation();

  const session = useAppSelector(selectUser);

  const { mutateAsync } = useCreateLostAndFound();

  const initialValues = {
    name: '',
    description: '',
    user_id_lost: '',
    location_lost: '',
    date_lost: '',
    user_id_found: '',
    location_found: '',
    date_found: '',
    type: '',
    qrCode: '',
    condominium_id: '',
  };

  const onSubmit = async () => {
    const uploadImageArray = async (): Promise<string[]> => {
      const responseUploadImage = await uploadImage({
        file: file,
        type: 'LOST_AND_FOUND',
      });
      const image = await responseUploadImage.json();
      return [image.url];
    };

    const dataRequest: CreateLostAndFoundDto = {
      ...formik.values,
      images: file ? await uploadImageArray() : [''],
    };

    const response = await mutateAsync(dataRequest);

    if (!response.ok) {
      const data = await response.json();
      console.error(data);
      return;
    }
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(`${t('email-invalid')}`)
      .required(`${t('email-required')}`),
  });

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  const handleProceedScreen = () => {
    setCurrentScreen(prevScreen => {
      const lastScreen = prevScreen[prevScreen.length - 1];
      if (lastScreen < 5) {
        return [...prevScreen, lastScreen + 1];
      }
      return prevScreen;
    });
  };

  // useEffect(() => {
  //     if (currentScreen.includes(1)) {
  //         if (!formik.values.receiver_name || !formik.values.provider_name || !formik.values.delivery_date) {
  //             setDisabled(true);
  //         } else {
  //             setDisabled(false);
  //         }
  //     }

  //     if (currentScreen.includes(3)) {
  //         if (!formik.values.package_code) {
  //             setDisabled(true);
  //         } else {
  //             setDisabled(false);
  //         }
  //     }
  // }, [currentScreen, formik.values]);

  const isFound = () => {
    return formik.values.type === 'found';
  };

  return {
    t,
    formik,
    status,
    disabled,
    currentScreen,
    file,
    setFile,
    isFound,
    onSubmit,
    setCurrentScreen,
    handleProceedScreen,
  };
};
