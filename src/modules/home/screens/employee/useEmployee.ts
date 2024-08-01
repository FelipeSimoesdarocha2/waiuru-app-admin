// React
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { CreateEmployeeProps, DocumentTypeProps, EmployeeProps, EmployeeRoleProps } from 'models';

// Api
import { useCreateEmployee } from 'api/employee';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Hooks
import { useCursorEffect, useRotationEffect } from 'hooks';

// Yup
import * as yup from 'yup';

// Constants
import { links, fieldItens, working_day, employee_activity } from './Employee.constants';

export const useEmployee = () => {
  const [itens, setItens] = useState(fieldItens);
  const [disabled, setDisabled] = useState(false);
  const [updateProgressBar, setUpdateProgressBar] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<number[]>([1]);

  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync, isLoading } = useCreateEmployee();

  const initialValues: EmployeeProps = {
    name: '',
    email: '',
    phone: '',
    driving_license: '',
    work_card: '',
    voter_id: '',
    cpf: '',
    date_of_birth: '',
    admission_date: '',
    zipcode: '',
    address: '',
    city: '',
    employee_activity: '',
    working_day: '',
    emergency_contact: '',
  };

  const onSubmit = async () => {
    const dataRequest: CreateEmployeeProps = {
      name: formik.values.name,
      email: formik.values.email,
      condominium_id: session?.user.condominium_id,
      password: formik.values.email,
      role: EmployeeRoleProps.employee,
      document_number: formik.values.cpf,
      phone_number: formik.values.phone,
      status: 1,
      documents: [
        {
          local: formik.values.work_card,
          type: DocumentTypeProps.PROFILE_PICTURE,
          path: formik.values.work_card,
          url: formik.values.work_card,
        },
      ],
      rg_number: formik.values.driving_license,
      ctps: formik.values.work_card,
      voter_registration: formik.values.voter_id,
      born_date: formik.values.date_of_birth,
      admission_date: formik.values.admission_date,
      zip_code: formik.values.zipcode,
      street: formik.values.address,
      city: formik.values.address,
      occupation_area: formik.values.employee_activity,
      working_day: formik.values.working_day,
      emergency_phone_number: formik.values.emergency_contact,
    };
    try {
      const response = await mutateAsync(dataRequest);
      if (!response.ok) {
        const data = await response.json();
        console.error(data);
        toast.error(`${t('error-creating-employee')}`);
        return;
      }
      toast.success(`${t('employee-created-successfully')}`);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const reset = () => {
    formik.resetForm();
    setCurrentScreen([1]);
    setUpdateProgressBar(0);
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

  const handleReturnScreen = () => {
    setCurrentScreen(prevScreen => {
      if (prevScreen.length > 1) {
        return prevScreen.slice(0, -1);
      } else {
        return [1];
      }
    });
  };

  const handleProceedScreen = () => {
    console.log(currentScreen.length);
    if (currentScreen.length === 5) {
      return onSubmit();
    }
    setCurrentScreen(prevScreen => {
      const lastScreen = prevScreen[prevScreen.length - 1];
      if (lastScreen < 7) {
        return [...prevScreen, lastScreen + 1];
      }
      return prevScreen;
    });
  };

  useCursorEffect('useCursor');
  useRotationEffect('useRotation');

  const updateItemStatus = () => {
    const updatedItems = itens.map(item => {
      if (
        (item.id === 1 && formik.values.name && formik.values.email && formik.values.phone) ||
        (item.id === 2 && formik.values.work_card && formik.values.driving_license && formik.values.voter_id) ||
        (item.id === 3 && formik.values.cpf && formik.values.date_of_birth && formik.values.admission_date) ||
        (item.id === 4 && formik.values.zipcode && formik.values.address && formik.values.city) ||
        (item.id === 5 &&
          formik.values.employee_activity &&
          formik.values.working_day &&
          formik.values.emergency_contact)
      ) {
        return { ...item, status: true };
      } else {
        return { ...item, status: false };
      }
    });

    setItens(updatedItems);
  };

  const calculateCompletionPercentage = () => {
    const fieldsToCheck = [
      formik.values.name,
      formik.values.email,
      formik.values.phone,
      formik.values.driving_license,
      formik.values.work_card,
      formik.values.voter_id,
      formik.values.cpf,
      formik.values.date_of_birth,
      formik.values.admission_date,
      formik.values.zipcode,
      formik.values.address,
      formik.values.city,
      formik.values.employee_activity,
      formik.values.working_day,
      formik.values.emergency_contact,
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
      if (!formik.values.name || !formik.values.email || !formik.values.phone) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(2)) {
      if (!formik.values.work_card || !formik.values.driving_license || !formik.values.voter_id) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(3)) {
      if (!formik.values.cpf || !formik.values.date_of_birth || !formik.values.admission_date) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(4)) {
      if (!formik.values.zipcode || !formik.values.address || !formik.values.city) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (currentScreen.includes(5)) {
      if (!formik.values.employee_activity || !formik.values.working_day || !formik.values.emergency_contact) {
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
    isLoading,
    working_day,
    currentScreen,
    employee_activity,
    updateProgressBar,
    onSubmit,
    handleReturnScreen,
    handleProceedScreen,
  };
};
