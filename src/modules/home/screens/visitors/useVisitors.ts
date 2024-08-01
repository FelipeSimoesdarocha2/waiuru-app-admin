// React
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { VisitorsProps, CreateVisitorsProps, DataItemTableResidents, VisitorsStatus, VisitorsType } from 'models';

// Api
import { useCreateVisitor } from 'api/visitor';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Hooks
import { useCursorEffect, useRotationEffect } from 'hooks';

// Yup
import * as yup from 'yup';

// Constants
import { links, fieldItens, type_visitors } from './Visitors.constants';

export const useVisitors = () => {
  const [itens, setItens] = useState(fieldItens);
  const [disabled, setDisabled] = useState(false);
  const [timeScreen, setTimeScreen] = useState(false);
  const [updateProgressBar, setUpdateProgressBar] = useState(0);
  const [openResidentModal, setOpenResidentModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);
  const [apiResponseQrCode, setApiResponseQrCode] = useState(null);
  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync } = useCreateVisitor();

  const initialValues: VisitorsProps = {
    name: '',
    email: '',
    date_start: '',
    date_finish: '',
    time_start: '',
    time_finish: '',
    type: '',
    resident_id: '',
    resident_name: '',
    status: '',
  };

  const onSubmit = async () => {
    const formattedDateStart =
      formik.values.date_start && formik.values.time_start
        ? formik.values.date_start + 'T' + formik.values.time_start + ':00Z'
        : '';

    const formattedDateFinish =
      formik.values.date_finish && formik.values.time_finish
        ? formik.values.date_finish + 'T' + formik.values.time_finish + ':00Z'
        : '';

    const dataRequest: CreateVisitorsProps = {
      name: formik.values.name,
      email: formik.values.email,
      date_start: formattedDateStart,
      date_finish: formattedDateFinish,
      password: formik.values.email,
      condominium_id: session.user.condominium_id,
      status: VisitorsStatus.ACTIVATED,
      resident_id: formik.values.resident_id,
      resident_name: formik.values.resident_name,
      type: formik.values.type,
    };

    const response = await mutateAsync(dataRequest);

    if (response.status === 200) {
      const responseData = await response.json();
      setApiResponseQrCode(responseData.id);
      handleProceedScreen();
    } else {
      const data = await response.json();
      console.error(data);
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
      if (lastScreen < 6) {
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
      if (
        (item.id === 1 && formik.values.name) ||
        (item.id === 2 && formik.values.email) ||
        (item.id === 3 && formik.values.type) ||
        (item.id === 4 && formik.values.date_start && item.id === 4 && formik.values.date_finish) ||
        (item.id === 6 && formik.values.resident_id)
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
      formik.values.email,
      formik.values.date_start,
      formik.values.date_finish,
      formik.values.type,
      formik.values.resident_id,
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
    setTimeScreen(false);

    const timeout = setTimeout(() => {
      setTimeScreen(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (currentScreen.includes(1)) {
      if (!formik.values.name || !formik.values.email || !formik.values.type) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(4)) {
      if (!formik.values.resident_id) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [currentScreen, formik.values]);

  const onSelectedResident = (user: DataItemTableResidents) => {
    formik.setFieldValue('resident_id', user.id);
    formik.setFieldValue('resident_name', user.name);
    setOpenResidentModal(false);
  };

  return {
    t,
    itens,
    links,
    formik,
    disabled,
    timeScreen,
    currentScreen,
    type_visitors,
    openResidentModal,
    updateProgressBar,
    apiResponseQrCode,
    onSubmit,
    copyToClipboard,
    handleReturnScreen,
    handleProceedScreen,
    setOpenResidentModal,
    onSelectedResident,
  };
};
