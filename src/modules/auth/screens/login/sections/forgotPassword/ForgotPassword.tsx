// React
import { Fragment } from 'react';

// Models
import { ForgotPasswordProps } from 'models';

// Formik
import { ErrorMessage, FormikProvider } from 'formik';

// @Waiuru-Components
import { ToastCard } from '@waiuru/waiuru-ui';

// @Waiuru-Temporary
import { Button } from 'components/button';
import { Divider } from 'components/divider';
import { Input } from 'components/input';
import { Internationalization } from 'components/internationalization';

// Hook
import { useLogin } from '../../useLogin';

const ForgotPassword = ({ onClickGoBack }: ForgotPasswordProps) => {
  const { formik, isLoading, disabled, responseDescription, t, clickGoBack, handleForgotPassword } =
    useLogin(onClickGoBack);

  return (
    <div className="form-container_pass">
      <div className="form-label">
        <h1>{t('title-login-forgot-password')}</h1>
        <p>
          {t('subtitle-login-forgot-password')
            .split('\n')
            .map((line, index, arr) => (
              <Fragment key={index}>
                {line}
                {index < arr.length - 1 && <br />}
              </Fragment>
            ))}
        </p>
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
                id="email"
                title={t('email')}
                type="email"
                placeholder=""
                data-testid="email"
                onChange={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
                autocomplete="email"
              />
            </div>
            <Button.Action
              label={t('send-reset-link')}
              disabled={disabled}
              loading={isLoading}
              type="primary"
              onClick={handleForgotPassword}
            />
          </div>
        </div>

        <div className="actions">
          <button type="button" onClick={event => clickGoBack(event)} className="remember">
            <p>
              {t('remembered-your-password')
                .split('\n')
                .map((line, index, arr) => (
                  <Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </Fragment>
                ))}
              <strong>{t('log-in')}</strong>
            </p>
          </button>
          <Divider />
          <Internationalization />
        </div>
      </FormikProvider>
    </div>
  );
};

export default ForgotPassword;
