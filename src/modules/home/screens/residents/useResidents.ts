// React
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { CreateResidentsProps, ResidentsProps } from 'models';

// Api
import { useCreateResident } from 'api/resident';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Hooks
import { useCursorEffect, useRotationEffect } from 'hooks';

// Yup
import * as yup from 'yup';

// Constants
import { links, fieldItens } from './Residents.constants';

export const useResidents = () => {
  const [itens, setItens] = useState(fieldItens);
  const [disabled, setDisabled] = useState(false);
  const [updateProgressBar, setUpdateProgressBar] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);

  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync, isLoading } = useCreateResident();

  const initialValues: ResidentsProps = {
    name: '',
    email: '',
    document_number: '',
    resident_linked: '',
    condominium_id: session.user.condominium_id,
    password: '',
    role: 'resident',
  };

  const onSubmit = async () => {
    const dataRequest: CreateResidentsProps = {
      condominium_id: session.user.condominium_id,
      name: formik.values.name,
      email: formik.values.email,
      password: formik.values.email,
      document_number: formik.values.document_number,
      role: 'resident',
    };

    try {
      const response = await mutateAsync(dataRequest);
      if (!response.ok) {
        const data = await response.json();
        toast.error(data.message);
        console.error(data);
        return;
      }

      reset();
      toast.success(`${t('success-create-resident')}`);
    } catch (error) {
      console.error(error);
      toast.error(`${t('error-create-resident')}`);
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
      if (lastScreen < 3) {
        return [...prevScreen, lastScreen + 1];
      }
      return prevScreen;
    });
  };

  useCursorEffect('useCursor');
  useRotationEffect('useRotation');

  const updateItemStatus = () => {
    const updatedItens = itens.map(item => {
      if (
        (item.id === 1 && formik.values.name) ||
        (item.id === 2 && formik.values.document_number) ||
        (item.id === 3 && formik.values.email) ||
        (item.id === 4 && formik.values.resident_linked)
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
      formik.values.name,
      formik.values.document_number,
      formik.values.email,
      formik.values.resident_linked,
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
      if (!formik.values.name || !formik.values.document_number || !formik.values.email) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [currentScreen, formik.values]);

  const reset = () => {
    formik.resetForm();
    setCurrentScreen([1]);
    setUpdateProgressBar(0);
  };

  return {
    itens,
    links,
    formik,
    disabled,
    currentScreen,
    updateProgressBar,
    t,
    isLoading,
    onSubmit,
    setCurrentScreen,
    handleProceedScreen,
  };
};
