// Next
import { useRouter } from 'next/router';

// React
import { useState, useEffect } from 'react';

// Store
import { saveUser } from 'store/features/user';
import { useAppDispatch } from 'store/hooks';

// Models
import { IUserLoginAndPassword, LoginResponseDto, RolesEnum, ToastTypeEnum } from 'models';

// Api
import { getCondoByAdminIdRequest, getCondoById } from 'api/condo/requests';
import { useGetUserRequest } from 'api/login';

// Services
import { useFirebase } from 'services/firebase';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

export const useLogin = (onClickForgotPassword?: () => void, oobCode?: string | undefined) => {
  const t = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutateAsync } = useGetUserRequest();

  const [disabled, setDisabled] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [newDisabled, setNewDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkedRememberMe, setCheckedRememberMe] = useState(false);
  const [resetPassword, setResetPassword] = useState<string | null>(null);
  const initialValues: IUserLoginAndPassword = {
    email: '',
    password: '',
    newPassword: '',
  };

  const [responseDescription, setResponseDescription] = useState<{
    title: string;
    type: ToastTypeEnum;
  }>();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(`${t('email-invalid')}`)
      .required(`${t('email-required')}`),
    password: yup
      .string()
      .min(6, `${t('password-min')}`)
      .required(`${t('password-required')}`),
    newPassword: yup
      .string()
      .oneOf([yup.ref('password')], `${t('password-match')}`)
      .required(`${t('new-password-required')}`),
  });

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const { handleSingIn, handleRecover, handleConfirmPasswordReset, checkAction } = useFirebase({
    email: formik.values.email,
    password: formik.values.password,
  });

  // Returns errors
  const handleSingInError = (error: { code: string }) => {
    if (error.code === LoginResponseDto.USER_NOT_FOUND) {
      setResponseDescription({
        title: t('email-not-found'),
        type: ToastTypeEnum.ERROR,
      });
    }

    if (error.code === LoginResponseDto.WRONG_PASSWORD) {
      setResponseDescription({
        title: t('password-wrong'),
        type: ToastTypeEnum.ERROR,
      });
    }
  };

  // Login
  const onSignIn = async () => {
    try {
      setIsLoading(true);
      await handleSingIn();
      const response = await mutateAsync();
      let useResponse = '';
      let responseData;
      let condo;

      if (response.status === 200) {
        responseData = await response.json();
        useResponse = responseData.role;
        if (responseData.role === RolesEnum.CONDOMINIUM) {
          condo = await getCondoById(responseData.id);
          responseData.condominium = { ...condo };
          responseData.condominium_id = condo.id;
        }
        dispatch(saveUser({ user: responseData }));
      } else {
        const data = await response.json();
        console.error(data);
      }

      if (useResponse === RolesEnum.RESIDENT) {
        setResponseDescription({
          title: t('Plataforma apenas para admins'),
          type: ToastTypeEnum.ERROR,
        });

        return;
      }

      setResponseDescription({
        title: t('sucess'),
        type: ToastTypeEnum.SUCCESS,
      });

      const condoresponse = await getCondoByAdminIdRequest(responseData.id);

      if (useResponse === RolesEnum.ADMIN) {
        if (condoresponse?.length > 0) {
          router.push('/home');
        } else {
          router.push('/first-access');
        }
      } else {
        router.push('/dashboard');
      }
    } catch (error: any) {
      if (error.code) {
        handleSingInError(error);
        return;
      }
      setResponseDescription({
        title: t('api-error-login'),
        type: ToastTypeEnum.ERROR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Send password recovery email
  const handleForgotPassword = async () => {
    setIsLoading(true);
    try {
      await handleRecover();
      setResponseDescription({
        title: t('email_send'),
        type: ToastTypeEnum.SUCCESS,
      });
    } catch (error: any) {
      if (error.code) {
        handleSingInError(error);
        return;
      }
      setResponseDescription({
        title: t('api-error-login'),
        type: ToastTypeEnum.ERROR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Send new password
  const handleSubmitNewPassword = async () => {
    setIsLoading(true);
    try {
      const newPassword = formik.values.newPassword;

      if (oobCode) {
        await checkAction(oobCode); // Check if the code is valid
        await handleConfirmPasswordReset(oobCode, newPassword);
      }

      setResponseDescription({
        title: t('success'),
        type: ToastTypeEnum.SUCCESS,
      });
      router.push('/login');
    } catch (error: any) {
      setResponseDescription({
        title: t('api-error-login'),
        type: ToastTypeEnum.ERROR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Remember login
  const onChangeRememberMe = (checked: boolean) => {
    setCheckedRememberMe(checked);
  };

  // Control screen state
  const clickGoBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onClickForgotPassword?.();
  };

  const handleSetScreen = (forgotPassword: boolean): void => {
    setShowScreen(forgotPassword);
  };

  // Disable-Login
  useEffect(() => {
    if (!formik.values.email || !formik.values.password || formik.values.password.length < 6) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [formik.values.email, formik.values.password, setIsDisabled]);

  // Disable-NewPassword
  useEffect(() => {
    if (!formik.values.password || formik.values.newPassword.length < 6) {
      setNewDisabled(true);
    } else {
      setNewDisabled(false);
    }
  }, [formik.values.password, formik.values.newPassword, setNewDisabled]);

  // Disable-ForgotPassword
  useEffect(() => {
    if (!formik.values.email) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formik.values.email, formik.values.password, setDisabled]);

  // oobCode-token
  useEffect(() => {
    const params = new URLSearchParams(router.asPath.split('?')[1]);
    if (params.get('mode') === 'resetPassword' && params.get('oobCode')) {
      setResetPassword(params.get('oobCode'));
    }

    if (router.asPath === '/login' && resetPassword) {
      setResetPassword(null);
    }
  }, [resetPassword, router.asPath]);

  return {
    t,
    router,
    formik,
    disabled,
    isLoading,
    showScreen,
    isDisabled,
    newDisabled,
    resetPassword,
    checkedRememberMe,
    responseDescription,
    onSignIn,
    clickGoBack,
    handleSetScreen,
    onChangeRememberMe,
    handleForgotPassword,
    handleSubmitNewPassword,
  };
};
