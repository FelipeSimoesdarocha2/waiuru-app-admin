// React
import { useEffect, useState } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { OnlineVotingProps } from 'models';

// Api
import { useCreateOnlineVoting } from 'api/onlineVoting';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Hooks
import { useCursorEffect, useRotationEffect } from 'hooks';

// Yup
import * as yup from 'yup';

// Constants
import { links, fieldItens } from './OnlineVoting.constants';

export const useOnlineVoting = () => {
  const [itens, setItens] = useState(fieldItens);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [updateProgressBar, setUpdateProgressBar] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);

  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync } = useCreateOnlineVoting();

  const initialValues: OnlineVotingProps = {
    name: '',
    description: '',
    condominium_id: '',
    start_date: '',
    end_date: '',
    status: '',
    create_by: 'resident 1',
  };

  const onSubmit = async () => {
    const formattedStartDate = formik.values.start_date ? formik.values.start_date + 'T' + '00:00' + ':00Z' : '';
    const formattedEndDate = formik.values.end_date ? formik.values.end_date + 'T' + '00:00' + ':00Z' : '';

    const dataRequest: OnlineVotingProps = {
      name: formik.values.name,
      description: formik.values.description,
      condominium_id: session.user.condominium_id,
      status: 'PENDING',
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      create_by: formik.values.create_by,
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
      if (lastScreen < 4) {
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
        (item.id === 1 && formik.values.name) ||
        (item.id === 2 && formik.values.description) ||
        (item.id === 3 && formik.values.status) ||
        (item.id === 4 && formik.values.start_date && formik.values.end_date)
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
      formik.values.description,
      formik.values.start_date,
      formik.values.end_date,
      formik.values.status,
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
      if (!formik.values.name || !formik.values.description) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(2)) {
      if (!formik.values.status) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(3)) {
      if (!formik.values.start_date || !formik.values.end_date) {
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
    selectedOption,
    updateProgressBar,
    onSubmit,
    setSelectedOption,
    handleReturnScreen,
    handleProceedScreen,
  };
};
