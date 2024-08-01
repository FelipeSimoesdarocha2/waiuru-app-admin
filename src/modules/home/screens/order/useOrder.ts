import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { OrderProps, CreateOrderProps, OrdersStatus } from 'models';

import { useCreateOrder } from 'api/order';
import { useUploadImage } from 'api/uploadImage';

import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Hooks
import { useCursorEffect, useRotationEffect } from 'hooks';

// Yup
import * as yup from 'yup';

// Constants
import { links, fieldItens, responsible_company } from './Order.constants';

export const useOrder = () => {
  const [itens, setItens] = useState(fieldItens);
  const [disabled, setDisabled] = useState(false);
  const [updateProgressBar, setUpdateProgressBar] = useState(0);
  const [isOpenPhotoModal, setIsOpenPhotoModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);
  const { mutateAsync: uploadImage, isLoading: photoLoading } = useUploadImage();
  const [file, setFile] = useState(null);

  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync, isLoading: orderLoading } = useCreateOrder();

  const initialValues: OrderProps = {
    receiver_name: '',
    provider_name: '',
    condominium_name: '',
    condominium_id: '',
    signed: '',
    package_info: '',
    package_code: '',
    delivery_date: '',
    delivery_hour: '',
    images: [],
  };

  const reset = () => {
    formik.resetForm();
    setCurrentScreen([1]);
    setUpdateProgressBar(0);
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
      if (!response.ok) {
        const data = await response.json();
        console.error(data);
        return;
      }
      toast.success(t('order-created-successfully'));
      reset();
    } catch (error) {
      console.error(error);
      toast.error(t('error-creating-order'));
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

  const handleReturnScreen = () => {
    setCurrentScreen(prevScreen => {
      if (prevScreen.length > 1) {
        return prevScreen.slice(0, -1);
      } else {
        return [1];
      }
    });
  };

  useCursorEffect('useCursor');
  useRotationEffect('useRotation');

  const updateItemStatus = () => {
    const updatedItens = itens.map(item => {
      if (
        (item.id === 1 && formik.values.receiver_name) ||
        (item.id === 2 && formik.values.provider_name) ||
        (item.id === 3 && formik.values.delivery_date) ||
        (item.id === 4 && formik.values.delivery_hour) ||
        // (item.id === 5 && formik.values.condominium_id) ||
        (item.id === 6 && formik.values.package_info) ||
        (item.id === 7 && formik.values.package_code)
      ) {
        return { ...item, status: true };
      } else {
        return { ...item, status: false };
      }
    });

    setItens(updatedItens);
  };

  const calculateCompletionPercentage = () => {
    const fieldsToCheck = [
      formik.values.receiver_name,
      formik.values.provider_name,
      formik.values.delivery_date,
      formik.values.delivery_hour,
      // formik.values.condominium_id,
      formik.values.package_info,
      formik.values.package_code,
    ];

    const filledFieldsCount = fieldsToCheck.filter(field => !!field).length;
    const completionPercentage = (filledFieldsCount / fieldsToCheck.length) * 100;
    return completionPercentage;
  };

  useEffect(() => {
    updateItemStatus();
  }, [formik.values]);

  useEffect(() => {
    const roundedPercentage = Math.round(calculateCompletionPercentage());
    setUpdateProgressBar(roundedPercentage);
  }, [formik.values]);

  useEffect(() => {
    if (currentScreen.includes(1)) {
      if (!formik.values.receiver_name || !formik.values.provider_name || !formik.values.delivery_date) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(2)) {
      if (!formik.values.signed) {
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
    itens,
    links,
    formik,
    disabled,
    currentScreen,
    isOpenPhotoModal,
    updateProgressBar,
    responsible_company,
    photoLoading,
    orderLoading,
    onSubmit,
    setFile,
    setCurrentScreen,
    handleReturnScreen,
    handleProceedScreen,
    setIsOpenPhotoModal,
  };
};
