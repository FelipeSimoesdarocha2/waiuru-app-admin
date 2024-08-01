// Models
import { LoginFormProps } from 'models';

// Formik
import { ErrorMessage, FormikProvider } from 'formik';

// @Waiuru-Temporary
import { ToastCard, Checkbox } from '@waiuru/waiuru-ui';

// @Waiuru-Components
import { Button } from 'components/button';
import { Divider } from 'components/divider';
import { Input } from 'components/input';
import { Internationalization } from 'components/internationalization';

// Hook
import { useLogin } from '../../useLogin';

const LoginForm = ({ onClickGoBack }: LoginFormProps) => {
  const {
    router,
    formik,
    isLoading,
    isDisabled,
    checkedRememberMe,
    responseDescription,
    t,
    onSignIn,
    clickGoBack,
    onChangeRememberMe,
  } = useLogin(onClickGoBack);

  return (
    <div className="form-container">
      <div className="form-label">
        <h1>{t('title-login')}</h1>
        <p>{t('subtitle-login')}</p>
      </div>

      <FormikProvider value={formik}>
        <div className="form">
          <div className="inputs">
            {responseDescription ? (
              <ToastCard type={responseDescription.type} title={responseDescription.title} />
            ) : null}
            <div className="form-input">
              <ErrorMessage className="err" name="email" component="div" />
              <Input.Text
                key="user"
                id="e-mail"
                title={t('email')}
                type="e-mail"
                placeholder=""
                data-testid="e-mail"
                onChange={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
                autocomplete="email"
              />
            </div>

            <div className="form-input">
              <ErrorMessage className="err" name="password" component="div" />
              <Input.Password
                key="password"
                id="password"
                title={t('password')}
                type="password"
                placeholder=""
                data-testid="password"
                onChange={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                value={formik.values.password}
                autocomplete="password"
              />
            </div>
          </div>

          <div className="RememberAndPassword">
            <Checkbox
              title={t('password-remember')}
              id="checkbox-id"
              onChange={onChangeRememberMe}
              checked={checkedRememberMe}
              disabled={isDisabled}
            />
            <button type="button" onClick={event => clickGoBack(event)}>
              {t('password-forgot')}
            </button>
          </div>

          <div className="actions">
            <Button.Action
              label={t('login')}
              disabled={isDisabled}
              loading={isLoading}
              type="secondary"
              onClick={onSignIn}
            />
            {/* <Button.Action label={t('no-partne')} type="ghost" onClick={() => router.push('/')} /> */}
            <Divider />
            <Internationalization />
          </div>
        </div>
      </FormikProvider>
    </div>
  );
};

export default LoginForm;
