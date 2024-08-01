// React
import { useState, useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { BookOccurrencesProps, CreateBookOccurrencesProps } from 'models';

// Formik
import { useCreateBookOccurrences } from 'api/bookOccurrences';
import { useUploadImage } from 'api/uploadImage';

import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

// Constants
import { suggestion } from './BookOccurrencesForm.constants';

export const useBookOccurrencesForm = (onClose: () => void) => {
  const [disabled, setDisabled] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);
  const { mutateAsync: uploadImage } = useUploadImage();
  const [file, setFile] = useState(null);

  const t = useTranslation();

  const session = useAppSelector(selectUser);

  const { mutateAsync } = useCreateBookOccurrences();

  const initialValues: BookOccurrencesProps = {
    suggestion: '',
    subject: '',
    local: '',
    summary: '',
    image: '',
  };

  const onSubmit = async () => {
    const uploadImageArray = async (): Promise<string[]> => {
      const responseUploadImage = await uploadImage({
        file: file,
        type: 'VEHICLE',
      });
      const image = await responseUploadImage.json();
      return [image.url];
    };

    const dataRequest: CreateBookOccurrencesProps = {
      location: formik.values.local,
      incident: formik.values.subject,
      type: formik.values.suggestion,
      date: new Date().toISOString(),
      summary: formik.values.summary,
      condominium_id: session.user.condominium_id,
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

  const handleProceedScreen = () => {
    setCurrentScreen(prevScreen => {
      const lastScreen = prevScreen[prevScreen.length - 1];
      if (lastScreen < 2) {
        return [...prevScreen, lastScreen + 1];
      }
      return prevScreen;
    });
  };

  useEffect(() => {
    if (currentScreen.includes(1)) {
      if (!formik.values.suggestion || !formik.values.subject || !formik.values.local || !formik.values.summary) {
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
    suggestion,
    currentScreen,
    onSubmit,
    setFile,
    setCurrentScreen,
    handleProceedScreen,
  };
};
