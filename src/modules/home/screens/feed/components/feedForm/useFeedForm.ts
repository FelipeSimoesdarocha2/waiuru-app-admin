// React
import { useState } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { CreateFeedProps } from 'models';

// Api
import { useCreateEmployee } from 'api/employee';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

export const useFeedForm = () => {
    const [disabled, setDisabled] = useState(false);

    const t = useTranslation();
    const session = useAppSelector(selectUser);

    const { mutateAsync, isLoading } = useCreateEmployee();

    const initialValues: CreateFeedProps = {
        title: '',
        description: '',
        condominium_id: '',
        user_id: '',
    };

    const onSubmit = async () => {
        const dataRequest: CreateFeedProps = {
            title: formik.values.title,
            description: formik.values.description,
            condominium_id: session.user.condominium_id,
            user_id: formik.values.user_id,
        };
        try {
            console.log('ok');
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

    return {
        t,
        formik,
        disabled,
        isLoading,
        onSubmit,
    };
};
