// Next
import Image from 'next/image';

// React
import { Fragment } from 'react';

// Assets
import logo from 'assets/icons/logo_login.svg';
import banner from 'assets/images/bannerImg.png';

// Styles
import * as S from './Login.styles';

// Components-Temporary
// import { Button } from 'components/button';

// Hook
import { useLogin } from './useLogin';

// Sections
import { ForgotPassword } from './sections/forgotPassword';
import { LoginForm } from './sections/loginForm';
import { NewPassword } from './sections/newPassword';

const LoginScreen = () => {
  const { router, showScreen, resetPassword, t, handleSetScreen } = useLogin();

  return (
    <S.Container>
      <S.LoginContainer>
        {resetPassword ? (
          <NewPassword oobCode={resetPassword} />
        ) : !showScreen ? (
          <LoginForm onClickGoBack={() => handleSetScreen(true)} />
        ) : (
          <ForgotPassword onClickGoBack={() => handleSetScreen(false)} />
        )}
      </S.LoginContainer>
      <S.Content>
        <S.Logo>
          <figure>
            <Image src={logo} alt="img" className="logo" />
            <p>Waiuru</p>
          </figure>
        </S.Logo>
        <div>
          <Image src={banner} alt="banner" className="banner" />
          <div>
            <div>
              <h2>{t('waiuru-ideal-platform')}</h2>
              <strong>{t('manage-condo')}</strong>
            </div>
            <h2>
              {t('demo-request-text')
                .split('\n')
                .map((line, index, arr) => (
                  <Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </Fragment>
                ))}
              <strong>{t('control-of-everything')}</strong>
            </h2>
          </div>
        </div>
        {/* <Button.Action label={t('demonstrationBtn')} onClick={() => router.push('/')} type="secondary" /> */}
      </S.Content>
    </S.Container>
  );
};

export default LoginScreen;
