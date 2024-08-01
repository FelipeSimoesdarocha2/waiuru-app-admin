// React
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { CreateResidentInviteDto } from 'models';

// Api
import { useCreateEmployeeInvite } from 'api/resident';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Hooks
import { useCursorEffect, useRotationEffect } from 'hooks';

// Yup
import * as yup from 'yup';

// Constants
import { links, fieldItens } from './ResidentInvite.constants';

export const useResidentInvite = () => {
  const [itens, setItens] = useState(fieldItens);
  const [disabled, setDisabled] = useState(false);
  const [updateProgressBar, setUpdateProgressBar] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);
  const [apiResponseQrCode, setApiResponseQrCode] = useState(null);

  const t = useTranslation();
  const session = useAppSelector(selectUser);

  const { mutateAsync } = useCreateEmployeeInvite();

  const initialValues: CreateResidentInviteDto = {
    condominium_name: session.user.condominium.name,
    condominium_user_id: '',
    type_resident: '',
    role: '',
    condominium_unit_id: '',
  };

  const onSubmit = async () => {
    const dataRequest: CreateResidentInviteDto = {
      condominium_user_id: session.user.condominium.id,
      condominium_name: session.user.condominium.name,
      type_resident: 'RESIDENT',
      role: 'resident',
      condominium_unit_id: session.user.condominium.id,
    };

    const response = await mutateAsync(dataRequest);

    if (response.status === 200) {
      const responseData = await response.json();
      setApiResponseQrCode(responseData.code);
      handleProceedScreen();
    } else {
      const data = await response.json();
      console.error(data);
    }
  };

  const validationSchema = yup.object().shape({});

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

  const copyToClipboard = () => {
    const qrCodeValue = document.getElementById('qrCodeValue');

    if (qrCodeValue) {
      const textToCopy = qrCodeValue.textContent;

      if (textToCopy !== null) {
        try {
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          toast.success(t('copied-to-clipboard'));
        } catch (err) {
          console.error('Falha ao copiar o texto: ', err);
          toast.error(t('error-clipboard'));
        }
      }
    }
  };

  const updateItemStatus = () => {
    const updatedItens = itens.map(item => {
      if (item.id === 1 && formik.values.condominium_name) {
        return { ...item, status: true };
      } else {
        return { ...item, status: false };
      }
    });

    setItens(updatedItens);
  };

  const calculateCompletionPercentage = () => {
    const fieldsToCheck = [formik.values.condominium_name];

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
    if (!formik.values.condominium_name) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [currentScreen, formik.values]);

  return {
    t,
    itens,
    links,
    formik,
    disabled,
    currentScreen,
    updateProgressBar,
    apiResponseQrCode,
    onSubmit,
    copyToClipboard,
    handleProceedScreen,
  };
};
