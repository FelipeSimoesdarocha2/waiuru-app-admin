// Next
import Image from 'next/image';

// React
import QRCode from 'react-qr-code';

// Assets
import copy from 'assets/icons/copy.svg';
import super_check from 'assets/icons/super_check.svg';
import imgVisitors from 'assets/images/imgVisitors.png';

// Styles
import * as S from './ResidentInvite.styles';

// Formik
import { FormikProvider } from 'formik';

// @waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Cursor } from 'components/cursor';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { ProgressBar } from 'components/progressBar';
import { ProgressCard } from 'components/progressCard';

// Hook
import { useResidentInvite } from './useResidentInvite';

const ResidentInviteScreen = () => {
  const {
    t,
    itens,
    links,
    formik,
    disabled,
    currentScreen,
    updateProgressBar,
    apiResponseQrCode,
    onSubmit,
    copyToClipboard,
    handleProceedScreen,
  } = useResidentInvite();

  return (
    <S.Container>
      <S.Header>
        <Title name={`${t('registration')}`} size="18px" />
        <div className="sub_title">
          <p>{`${t('registration-subtitle')}`}</p>
        </div>
      </S.Header>
      <S.Content>
        <div className="content_hero">
          {!currentScreen.includes(3) && (
            <div className="content_header">
              <div>
                <p>{`${t('registration-form')}`}</p>
                <p> </p>
              </div>
              <div>
                <Links data={links} label={links[7].name} type="link" />
                <ProgressBar value={updateProgressBar} />
              </div>
            </div>
          )}

          <div className="form">
            <FormikProvider value={formik}>
              {currentScreen.length === 1 && (
                <div className="steep_one">
                  <Input.Text
                    title="Nome"
                    key="name"
                    id="name"
                    type="text"
                    placeholder=""
                    required={true}
                    data-testid="name"
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.condominium_name}
                    autocomplete="name"
                    disable={true}
                  />
                </div>
              )}

              {currentScreen.length === 2 && (
                <div className="steep_five">
                  <div>
                    <h4>Convite criado com sucesso!</h4>
                    <p>Gere um código.</p>
                  </div>
                  <Image src={super_check} alt="super_check" />
                  <div>
                    <Button.Action label={'Gerar código de acesso'} type="secondary" onClick={handleProceedScreen} />
                  </div>
                </div>
              )}

              {currentScreen.length === 3 && (
                <div className="steep_six">
                  <div>
                    <div>
                      <h4>Código de acesso gerado com sucesso!</h4>
                      <p>Envie este código.</p>
                    </div>
                    <div>
                      <div className="qrCode">
                        <QRCode size={256} value={`${apiResponseQrCode}`} viewBox={`0 0 256 256`} />
                        <p id="qrCodeValue">{apiResponseQrCode}</p>
                      </div>
                      <div className="copy" onClick={copyToClipboard}>
                        <Image src={copy} alt="copy" />
                        <p>Copiar código</p>
                      </div>
                    </div>
                  </div>
                  <Button.Action
                    label={'Compartilhar código'}
                    type="secondary"
                    onClick={() => {
                      copyToClipboard();
                    }}
                  />
                </div>
              )}

              {currentScreen.length === 1 && (
                <div className="gap_btn">
                  <Button.Action
                    label={'Prosseguir'}
                    onClick={currentScreen.length === 1 ? onSubmit : handleProceedScreen}
                    disabled={disabled}
                    type="primary"
                  />
                </div>
              )}
            </FormikProvider>
          </div>
        </div>
        <Cursor />
        <ProgressCard
          label={'Criar convite'}
          item={itens}
          src={imgVisitors}
          className={`${'useRotation'} ${'useCursor'}`}
        />
      </S.Content>
    </S.Container>
  );
};

export default ResidentInviteScreen;
