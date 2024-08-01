// Next
import Image from 'next/image';
import router from 'next/router';

// React
import QRCode from 'react-qr-code';

// Assets
import copy from 'assets/icons/copy.svg';
import super_check from 'assets/icons/super_check.svg';
import super_loading from 'assets/icons/super_loading.svg';
import bannerVisitors from 'assets/images/bannerVisitors.png';
import imgVisitors from 'assets/images/imgVisitors.png';

// Styles
import * as S from './Visitors.styles';

// Formik
import { FormikProvider } from 'formik';

// @waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Cursor } from 'components/cursor';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { ListResidentModal } from 'components/listResidentModal';
import { ProgressBar } from 'components/progressBar';
import { ProgressCard } from 'components/progressCard';
import { Select } from 'components/select';

// Hook
import { useVisitors } from './useVisitors';

const VisitorsScreen = () => {
  const {
    t,
    itens,
    links,
    formik,
    disabled,
    timeScreen,
    currentScreen,
    type_visitors,
    openResidentModal,
    updateProgressBar,
    apiResponseQrCode,
    onSubmit,
    copyToClipboard,
    handleReturnScreen,
    handleProceedScreen,
    setOpenResidentModal,
    onSelectedResident,
  } = useVisitors();

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
          {!currentScreen.includes(6) && (
            <div className="content_header">
              <div>
                <p>{`${t('registration-form')}`}</p>
                <p>Preencha abaixo com as informações do seu visitante.</p>
              </div>
              <div>
                <Links data={links} label={links[0].name} type="link" />
                <ProgressBar value={updateProgressBar} />
                {currentScreen.length === 2 && (
                  <Button.Link onClick={handleReturnScreen} label={`${t('back')}`} type="primary" />
                )}
                {currentScreen.length === 2 && <p>Se o visitante for temporário, defina data e hora limite.</p>}
              </div>
            </div>
          )}
          <div className="form">
            <FormikProvider value={formik}>
              {currentScreen.length === 1 && (
                <div className="steep_one">
                  <Input.Text
                    title="Nome completo do visitante"
                    key="name"
                    id="name"
                    type="text"
                    placeholder=""
                    required={true}
                    data-testid="name"
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.name}
                    autocomplete="name"
                  />
                  <Input.Text
                    title="Email"
                    key="user"
                    id="email"
                    type="email"
                    placeholder=""
                    required={true}
                    data-testid="email"
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                    autocomplete="email"
                  />
                  <Select.Action
                    id="type"
                    key="type"
                    label={'Tipo do visitante'}
                    placeholder=""
                    data-testid="type"
                    onChange={formik.handleChange('type')}
                    value={formik.values.type}
                    options={type_visitors}
                  />
                </div>
              )}
              {currentScreen.length === 2 && (
                <div className="steep_two">
                  <Input.Text
                    title="Dia de chegada"
                    key="date_start"
                    id="date_start"
                    type="date"
                    placeholder=""
                    data-testid="date_start"
                    onChange={formik.handleChange('date_start')}
                    onBlur={formik.handleBlur('date_start')}
                    value={formik.values.date_start}
                    autocomplete="date_start"
                  />
                  <Input.Text
                    title="Dia de saída"
                    key="date_finish"
                    id="date_finish"
                    type="date"
                    placeholder=""
                    data-testid="date_finish"
                    onChange={formik.handleChange('date_finish')}
                    onBlur={formik.handleBlur('date_finish')}
                    value={formik.values.date_finish}
                    autocomplete="date_finish"
                  />
                  <Input.Text
                    title="Hora de chegada"
                    key="time_start"
                    id="time_start"
                    type="time"
                    placeholder=""
                    data-testid="time_start"
                    onChange={formik.handleChange('time_start')}
                    onBlur={formik.handleBlur('time_start')}
                    value={formik.values.time_start}
                    autocomplete="time_start"
                  />
                  <Input.Text
                    title="Hora de saída"
                    key="time_finish"
                    id="time_finish"
                    type="time"
                    placeholder=""
                    data-testid="time_finish"
                    onChange={formik.handleChange('time_finish')}
                    onBlur={formik.handleBlur('time_finish')}
                    value={formik.values.time_finish}
                    autocomplete="time_finish"
                  />
                </div>
              )}
              {currentScreen.length === 3 && (
                <div className="steep_three">
                  <div>
                    <p>Seu visitante possui algum veículo?</p>
                    <Image src={bannerVisitors} alt="bannerVisitors" />
                  </div>
                  <div>
                    <Button.Action
                      label={'Sim, cadastrar veículo'}
                      type="ghost"
                      onClick={() => router.push('/create/vehicles')}
                    />
                    <Button.Action label={'Não, finalizar cadastro'} type="secondary" onClick={handleProceedScreen} />
                  </div>
                </div>
              )}
              {currentScreen.length === 4 && (
                <div className="steep_four">
                  <Input.Text
                    title="Morador vinculado ao visitante"
                    key="resident_name"
                    id="resident_name"
                    type="text"
                    placeholder=""
                    data-testid="resident_name"
                    onChange={formik.handleChange('resident_name')}
                    onBlur={formik.handleBlur('resident_name')}
                    value={formik.values.resident_name}
                    autocomplete="resident_name"
                  />
                  <Button.Link
                    type="primary"
                    label="ver lista de moradores"
                    onClick={() => setOpenResidentModal(true)}
                  />
                  {openResidentModal && (
                    <ListResidentModal
                      title="Lista de Moradores"
                      onClose={() => setOpenResidentModal(false)}
                      onSelect={user => {
                        onSelectedResident(user);
                      }}
                    />
                  )}
                </div>
              )}
              {currentScreen.length === 5 && (
                <div className="steep_five">
                  <div>
                    <h4>Visitante adicionado com sucesso!</h4>
                    <p>Gere um código de acesso ao condomínio e envie para o seu visitante.</p>
                  </div>
                  <Image src={super_check} alt="super_check" />
                  <div>
                    <Button.Action label={'Ver meus visitantes cadastrados'} type="ghost" />
                    <Button.Action label={'Gerar código de acesso'} type="secondary" onClick={handleProceedScreen} />
                  </div>
                </div>
              )}
              {currentScreen.length === 6 && (
                <>
                  {timeScreen ? (
                    <div className="steep_six">
                      <div>
                        <div>
                          <h4>Código de acesso gerado com sucesso!</h4>
                          <p>Envie este código para o seu visitante.</p>
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
                          handleProceedScreen();
                        }}
                      />
                    </div>
                  ) : (
                    <div className="generate_code">
                      <div>
                        <p>Gerando código...</p>
                        <Image src={super_loading} alt="super_loading" />
                      </div>
                    </div>
                  )}
                </>
              )}
              <div className="gap_btn">
                {currentScreen.length === 4 && <Button.Action label={'Adicionar morador vinculado'} type="ghost" />}
                {currentScreen.length === 1 || currentScreen.length === 2 || currentScreen.length === 4 ? (
                  <Button.Action
                    label={'Prosseguir'}
                    onClick={currentScreen.length === 4 ? onSubmit : handleProceedScreen}
                    disabled={disabled}
                    type="primary"
                  />
                ) : null}
              </div>
            </FormikProvider>
          </div>
        </div>
        <Cursor />
        <ProgressCard
          label={'Acesso Visitante'}
          item={itens}
          src={imgVisitors}
          className={`${'useRotation'} ${'useCursor'}`}
        />
      </S.Content>
    </S.Container>
  );
};

export default VisitorsScreen;
