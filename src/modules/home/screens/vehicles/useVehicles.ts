// React
import { useState, useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { VehiclesProps, CreateVehiclesProps, DataItemTableResidents, typeVehicle } from 'models';

// Api
import { useUploadImage } from 'api/uploadImage';
import { useCreateVehicle } from 'api/vehicle';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Hooks
import { useCursorEffect, useRotationEffect } from 'hooks';

// Yup
import * as yup from 'yup';

// Constants
import { links, fieldItens, type_vehicles } from './Vehicles.constants';

export const useVehicles = () => {
  const [itens, setItens] = useState(fieldItens);
  const [disabled, setDisabled] = useState(false);
  const [updateProgressBar, setUpdateProgressBar] = useState(0);
  const [isOpenPhotoModal, setIsOpenPhotoModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);
  const [openResidentModal, setOpenResidentModal] = useState(false);
  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync, isLoading: vehicleLoading } = useCreateVehicle();
  const { mutateAsync: uploadImage, isLoading: photoLoading } = useUploadImage();
  const [file, setFile] = useState(null);

  const initialValues: VehiclesProps = {
    name_property: '',
    type: '',
    model: '',
    plate: '',
    color: '',
    resident_id: '',
    resident_name: '',
    maker: '',
  };

  const onSubmit = async () => {
    const uploadImageArray = async (): Promise<string[]> => {
      const responseUploadImage = await uploadImage({
        file: file,
        type: 'ORDERS',
      });
      const image = await responseUploadImage.json();
      return [image.url];
    };

    const dataRequest: CreateVehiclesProps = {
      name_property: formik.values.name_property,
      type: formik.values.type as typeVehicle,
      model: formik.values.model,
      plate: formik.values.plate,
      color: formik.values.color,
      resident_name: formik.values.resident_name,
      maker: formik.values.model,
      status: 1,
      user_id: formik.values.resident_id,
      condominium_id: session.user.condominium_id,
      images: file ? await uploadImageArray() : [''],
    };

    const response = await mutateAsync(dataRequest);

    if (!response.ok) {
      const data = await response.json();
      console.error(data);
      return;
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
        (item.id === 1 && formik.values.name_property) ||
        (item.id === 2 && formik.values.type) ||
        (item.id === 3 && formik.values.model) ||
        (item.id === 4 && formik.values.plate) ||
        (item.id === 5 && formik.values.color) ||
        (item.id === 6 && file)
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
      formik.values.name_property,
      formik.values.type,
      formik.values.model,
      formik.values.plate,
      formik.values.resident_name,
      file,
    ];

    const filledFieldsCount = fieldsToCheck.filter(field => !!field).length;
    const completionPercentage = (filledFieldsCount / fieldsToCheck.length) * 100;
    return completionPercentage;
  };

  useEffect(() => {
    updateItemStatus();
  }, [formik.values, file]);

  useEffect(() => {
    const roundedPercentage = Math.round(calculateCompletionPercentage());
    setUpdateProgressBar(roundedPercentage);
  }, [formik.values, file]);

  useEffect(() => {
    if (currentScreen.includes(1)) {
      if (!formik.values.name_property || !formik.values.type || !formik.values.model) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(2)) {
      if (!formik.values.color || !formik.values.plate || !formik.values.resident_name) {
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
    type_vehicles,
    currentScreen,
    openResidentModal,
    updateProgressBar,
    isOpenPhotoModal,
    vehicleLoading,
    photoLoading,
    onSubmit,
    setFile,
    setCurrentScreen,
    onSelectedResident,
    handleReturnScreen,
    setIsOpenPhotoModal,
    handleProceedScreen,
    setOpenResidentModal,
  };
};
