// React
import { useEffect, useState } from 'react';

// Models
import { AccessControlProps, DataItemTableAccessControl } from 'models';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

// Constants
import { links, screen, columns, accessControlData } from './AccessControl.constants';

export const useAccessControl = () => {
    const [openPreview, setOpenPreview] = useState<{
        isOpen: boolean;
        index: number | null;
        itemId: DataItemTableAccessControl | null;
    }>({
        isOpen: false,
        index: null,
        itemId: null,
    });
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);


    const t = useTranslation();
    const [searchValue, setSearchValue] = useState('');
    const [selectedScreen, setSelectedScreen] = useState('1');
    const [data] = useState<DataItemTableAccessControl[]>(accessControlData);

    const [hour, setHour] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [finishDate, setFinishDate] = useState('');

    let filteredData: DataItemTableAccessControl[] = [];

    if (data && data.length > 0) {
        filteredData = data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    const initialValues: AccessControlProps = {
        name: '',
        email: '',
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
        onSubmit: () => { },
    });

    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data]);

    return {
        t,
        data,
        links,
        screen,
        formik,
        columns,
        isLoading,
        openFilter,
        searchValue,
        filteredData,
        selectedScreen,
        setOpenForm,
        setOpenFilter,
        setOpenPreview,
        setSelectedScreen,
        handleSearchChange,
        // Filter
        setHour,
        setVehicle,
        setCategory,
        setStartDate,
        setFinishDate,
    };
};
