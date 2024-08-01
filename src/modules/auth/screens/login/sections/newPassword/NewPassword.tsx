// React
import { Fragment } from 'react';

// Models
import { NewPasswordProps } from 'models';

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

const NewPassword = ({ oobCode }: NewPasswordProps) => {
  const { formik, isLoading, newDisabled, responseDescription, t, handleSubmitNewPassword } = useLogin(
    undefined,
    oobCode
  );

  return (
    <div className="form-container_new_pass">
      <div className="form-label">
        <h1>{t('title-login-new-password')}</h1>
        <p>
          {t('subtitle-login-new-password')
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
            {responseDescription ? <ToastCard type={responseDescription.type} title={responseDescription.title} /> : null}
            <div className="form-input">
              <ErrorMessage className="err" name="password" component="div" />
              <Input.Password
                key="password"
                id="password"
                title={t('new-password')}
                type="password"
                onChange={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                value={formik.values.password}
              />
            </div>
            <div className="form-input">
              <ErrorMessage className="err" name="newPassword" component="div" />
              <Input.Password
                key="newPassword"
                id="password"
                title={t('confirm-password')}
                type="password"
                onChange={formik.handleChange('newPassword')}
                onBlur={formik.handleBlur('newPassword')}
                value={formik.values.newPassword}
              />
            </div>
            <Button.Action
              label={t('update-new-password')}
              disabled={newDisabled}
              loading={isLoading}
              type="secondary"
              onClick={handleSubmitNewPassword}
            />
          </div>
        </div>

        <div className="actions">
          <Divider />
          <Internationalization />
        </div>
      </FormikProvider>
    </div>
  );
};

export default NewPassword;
