// React
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { CreateCondoProps, FirstAccessProps } from 'models';

// Api
import { useCreateCondoRequest } from 'api/condo';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

// Constants
import { screen, menu, type_country } from './FirstAccess.constants';

export const useFirstAccess = () => {
  const [itens, setItens] = useState(screen);
  const [currentScreen, setCurrentScreen] = useState<number[]>([0]);
  const [file, setFile] = useState(null);
  const { mutateAsync, isLoading } = useCreateCondoRequest();
  const t = useTranslation();

  const session = useAppSelector(selectUser);

  const profilePicure = session?.user?.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url;

  const initialValues: FirstAccessProps = {
    condominium_name: '',
    number_of_blocks: 1,
    photo: '',
    address: '',
    uf: '',
    city: '',
    zip_code: '',
    description: '',
    email: '',
    password: '',
    phone: '',
    country: 'BR',
  };

  const validationSchema = yup.object().shape({});

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: () => {},
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

  const updateItemStatus = () => {
    const updatedItens = itens.map(item => {
      if (currentScreen.includes(item.id)) {
        return { ...item, status: currentScreen.includes(item.id) };
      } else {
        return { ...item, status: false };
      }
    });

    setItens(updatedItens);
  };

  useEffect(() => {
    updateItemStatus();
  }, [currentScreen]);

  const handleItemClick = (itemId: number) => {};

  const onSubmit = async () => {
    // const uploadImageArray = async (): Promise<string[]> => {
    //   const responseUploadImage = await uploadImage({
    //     file: file,
    //     type: 'ORDERS',
    //   });
    //   const image = await responseUploadImage.json();
    //   return [image.url];
    // };

    const dataRequest: CreateCondoProps = {
      email: formik.values.email,
      name: formik.values.condominium_name,
      password: formik.values.password,
      address: formik.values.address,
      admin_id: session?.user?.id ?? '',
      phone_number: formik.values.phone,
      country: formik.values.country,
    };
    try {
      const response = await mutateAsync(dataRequest);
      const data = await response.json();
      if (!response) {
        toast.error(data.message);
        return;
      }
      toast.success(t('condo-created-successfully'));
      window.open(data.payment_account_signup_link, '_blank', 'noopener,noreferrer');
      handleProceedScreen();
    } catch (error) {
      console.error(error);
      toast.error(t('error-creating-condo'));
    }
  };

  return {
    menu,
    itens,
    formik,
    isLoading,
    profilePicure,
    currentScreen,
    type_country,
    setFile,
    onSubmit,
    handleItemClick,
    handleProceedScreen,
  };
};
