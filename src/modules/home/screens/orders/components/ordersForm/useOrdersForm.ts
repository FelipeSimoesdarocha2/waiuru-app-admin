// React
import { useState, useEffect } from 'react';

import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

import { OrderProps, CreateOrderProps, OrdersStatus } from 'models';

// Formik
import { useCreateOrder } from 'api/order';
import { useUploadImage } from 'api/uploadImage';

import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

// Constants
import { responsible_company } from './Order.constants';

export const useOrderForm = (onClose: () => void) => {
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState(null);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);
  const { mutateAsync: uploadImage } = useUploadImage();

  const t = useTranslation();

  const session = useAppSelector(selectUser);

  const { mutateAsync } = useCreateOrder();

  const initialValues: OrderProps = {
    receiver_name: '',
    provider_name: '',
    condominium_name: '',
    condominium_id: '',
    package_info: '',
    package_code: '',
    delivery_date: '',
    delivery_hour: '',
    images: {},
    signed: '',
  };

  const onSubmit = async () => {
    const formattedDateStart = formik.values.delivery_date + 'T' + formik.values.delivery_hour + ':00Z';

    const uploadImageArray = async (): Promise<string[]> => {
      const responseUploadImage = await uploadImage({
        file: file,
        type: 'ORDERS',
      });
      const image = await responseUploadImage.json();
      return [image.url];
    };

    const dataRequest: CreateOrderProps = {
      receiver_name: formik.values.receiver_name,
      provider_name: formik.values.provider_name,
      picked_up_by_name: '',
      status: OrdersStatus.CONCIERGE,
      condominium_name: session.user.condominium.name,
      condominium_id: session.user.condominium.id,
      package_info: formik.values.package_info,
      package_code: formik.values.package_code,
      user_id: session.user.id,
      delivery_date: formattedDateStart,
      images: file ? await uploadImageArray() : [''],
    };

    try {
      const response = await mutateAsync(dataRequest);
      if (response.status === 201 || response.status === 200) {
        formik.resetForm();
        setCurrentScreen([1]);
        setFile(null);
        onClose();
      }
      if (!response.ok) {
        const data = await response.json();
        console.error(data);
        return;
      }
    } catch (error) {
      console.error(error);
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

  // console.log('formik', JSON.stringify(formik, null, 2));

  const handleProceedScreen = () => {
    setCurrentScreen(prevScreen => {
      const lastScreen = prevScreen[prevScreen.length - 1];
      if (lastScreen < 5) {
        return [...prevScreen, lastScreen + 1];
      }
      return prevScreen;
    });
  };

  useEffect(() => {
    if (currentScreen.includes(1)) {
      if (!formik.values.receiver_name || !formik.values.provider_name || !formik.values.delivery_date) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(2)) {
      if (!formik.values.condominium_id) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(3)) {
      if (!formik.values.package_code) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [currentScreen, formik.values]);

  return {
    t,
    formik,
    disabled,
    currentScreen,
    responsible_company,
    onSubmit,
    setCurrentScreen,
    setFile,
    handleProceedScreen,
  };
};
