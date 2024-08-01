// React
import { useState, useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { EmployeeDto } from 'models/employees';
import { CreateTaskDto } from 'models/task';

// Api
import { useGetEmployees } from 'api/employee';
import { useCreateTask } from 'api/task';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

export const useActivitiesForm = (onClose: () => void) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<EmployeeDto[]>([]);

  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync } = useCreateTask();

  const { data, isLoading } = useGetEmployees(session.user?.condominium_id, !!session.user?.condominium_id);

  const initialValues: CreateTaskDto = {
    type: '',
    task: '',
    description: '',
    condominium_id: '',
    endedDate: '',
    startDate: '',
    employee_id: '',
    check_list: [
      {
        item: '',
        is_completed: 0,
      },
    ],
  };

  const onSubmit = async () => {
    const dataRequest: CreateTaskDto = {
      type: '',
      task: formik.values.task,
      description: formik.values.description,
      condominium_id: session.user?.condominium_id,
      endedDate: formik.values?.endedDate,
      startDate: formik.values?.condominium_id,
      employee_id: formik.values.employee_id,
      check_list: [
        {
          item: '',
          is_completed: 0,
        },
      ],
    };

    try {
      const response = await mutateAsync(dataRequest);
      if (response.status === 201 || response.status === 200) {
        formik.resetForm();
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

  const validationSchema = yup.object().shape({});

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    const filtered = data?.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered || []);
  };

  return {
    t,
    data,
    formik,
    isLoading,
    searchValue,
    filteredData,
    onSubmit,
    handleSearchChange,
  };
};
