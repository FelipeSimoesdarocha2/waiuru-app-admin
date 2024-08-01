// React
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { AnimalsProps, CreateAnimalsProps, DataItemTableResidents, TypeAnimal } from 'models';

// Api
import { useCreateAnimal } from 'api/animal';
import { useUploadImage } from 'api/uploadImage';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Hooks
import { useCursorEffect, useRotationEffect } from 'hooks';

// Yup
import * as yup from 'yup';

// Constants
import { links, fieldItens, animal_species } from './Animals.constants';

export const useAnimals = () => {
  const [itens, setItens] = useState(fieldItens);
  const [disabled, setDisabled] = useState(false);
  const [updateProgressBar, setUpdateProgressBar] = useState(0);
  const [openModalUpload, setOpenModalUpload] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);
  const [isOpenPhotoModal, setIsOpenPhotoModal] = useState(false);

  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync, isLoading } = useCreateAnimal();
  const { mutateAsync: uploadImage, isLoading: photoLoading } = useUploadImage();
  const [file, setFile] = useState(null);
  const [openResidentModal, setOpenResidentModal] = useState(false);

  const initialValues: AnimalsProps = {
    type: '',
    breed: '',
    name: '',
    status: 0,
    images: [],
    born: '',
    sex: '',
    color: '',
    resident_linked_pet: '',
    resident_id: '',
    resident_name: '',
  };

  const onSubmit = async () => {
    const uploadImageArray = async (): Promise<string[]> => {
      const responseUploadImage = await uploadImage({
        file: file,
        type: 'PETS',
      });
      const image = await responseUploadImage.json();
      return [image.url];
    };

    const dataRequest: CreateAnimalsProps = {
      name: formik.values.name,
      type: formik.values.type as TypeAnimal,
      breed: formik.values.breed,
      status: 1,
      images: file ? await uploadImageArray() : [''],
      born: formik.values.born,
      color: formik.values.color,
      user_id: formik.values.resident_id,
      responsibleName: formik.values.resident_name,
      condominium_id: session.user.condominium_id ?? '',
    };

    try {
      const response = await mutateAsync(dataRequest);

      if (!response.ok) {
        const data = await response.json();
        console.error(data);
        toast.error(data.message);
        return;
      }
    } catch (err) {
      console.log(err);
      toast.error(t('error-creating-animal'));
    }

    handleProceedScreen();
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
        (item.id === 2 && formik.values.type) ||
        (item.id === 3 && formik.values.breed) ||
        (item.id === 4 && formik.values.resident_linked_pet)
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
      formik.values.type,
      formik.values.breed,
      formik.values.resident_linked_pet,
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
      if (!formik.values.name || !formik.values.type) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(2)) {
      if (!formik.values.resident_linked_pet) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [currentScreen, formik.values]);

  const onChangeModalUpload = () => {
    setOpenModalUpload(!openModalUpload);
  };

  const onSelectDocument = (document: any) => {
    console.log('document', document);
  };

  const onSelectedResident = (user: DataItemTableResidents) => {
    formik.setFieldValue('resident_id', user.id);
    formik.setFieldValue('resident_name', user.name);
    formik.setFieldValue('resident_linked_pet', user.name);
    setOpenResidentModal(false);
  };

  const reset = () => {
    formik.resetForm();
    setCurrentScreen([1]);
    setUpdateProgressBar(0);
  };

  const onAddNew = () => {
    reset();
  };

  return {
    links,
    itens,
    formik,
    disabled,
    currentScreen,
    animal_species,
    updateProgressBar,
    t,
    isLoading,
    photoLoading,
    openResidentModal,
    isOpenPhotoModal,
    onSubmit,
    onSelectDocument,
    setOpenResidentModal,
    setIsOpenPhotoModal,
    setFile,
    setCurrentScreen,
    onSelectedResident,
    handleReturnScreen,
    handleProceedScreen,
    onChangeModalUpload,
    onAddNew,
  };
};
