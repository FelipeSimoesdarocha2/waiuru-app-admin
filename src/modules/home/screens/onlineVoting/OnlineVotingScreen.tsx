// Next
import Image from 'next/image';

// Assets
import super_check from 'assets/icons/super_check.svg';
import imgOnlineVoting from 'assets/images/imgOnlineVoting.png';

// Styles
import * as S from './OnlineVoting.styles';

// Formik
import { FormikProvider } from 'formik';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Cursor } from 'components/cursor';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { ProgressBar } from 'components/progressBar';
import { ProgressCard } from 'components/progressCard';

// Hook
import { useOnlineVoting } from './useOnlineVoting';

const OnlineVotingScreen = () => {
  const {
    t,
    itens,
    links,
    formik,
    disabled,
    currentScreen,
    selectedOption,
    updateProgressBar,
    onSubmit,
    setSelectedOption,
    handleReturnScreen,
    handleProceedScreen,
  } = useOnlineVoting();

  return (
    <S.Container>
      <S.Header>
        <Title name={`${t('registration')}`} size="18px" />
        <div className="sub_title">
          <p>{`${t('registration-subtitle')}`}</p>
        </div>
      </S.Header>
      <S.Content>
        <div className="content_hero" style={{ gap: currentScreen.length === 2 ? '17px' : '36px' }}>
          <div className="content_header">
            <div>
              <p>{`${t('registration-form')}`}</p>
              <p>Preencha abaixo com as informações da votação.</p>
            </div>
            <div>
              <Links data={links} label={links[5].name} type="link" />
              <ProgressBar value={updateProgressBar} />
              {currentScreen.length === 2 || currentScreen.length === 3 ? (
                <Button.Link onClick={handleReturnScreen} label={`${t('back')}`} type="primary" />
              ) : null}
            </div>
          </div>
          <div className="form">
            <FormikProvider value={formik}>
              {currentScreen.length === 1 && (
                <div className="steep_one">
                  <Input.Text
                    title="Defina o tema da votação"
                    key="theme"
                    id="theme"
                    type="text"
                    placeholder="Ex: Consulta Pública."
                    data-testid="name"
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.name}
                    autocomplete="name"
                  />
                  <Input.Text
                    title="Descreva o assunto a ser votado "
                    key="description"
                    id="description"
                    type="text"
                    placeholder=""
                    data-testid="description"
                    onChange={formik.handleChange('description')}
                    onBlur={formik.handleBlur('description')}
                    value={formik.values.description}
                    autocomplete="description"
                  />
                </div>
              )}
              {currentScreen.length === 2 && (
                <div className="steep_two">
                  <div>
                    <p>Defina a pergunta que vai ser votada com as opções abaixo.</p>
                    <Input.Subject
                      key="status"
                      id="status"
                      type="subject"
                      placeholder="Digite aqui."
                      data-testid="status"
                      onChange={formik.handleChange('status')}
                      onBlur={formik.handleBlur('status')}
                      value={formik.values.status}
                      autocomplete="status"
                    />
                  </div>
                  <div>
                    <p>Opções:</p>
                    <div>
                      <Input.Radio
                        title={t('Sim')}
                        id="checkbox-id"
                        onChange={() => setSelectedOption('Sim')}
                        checked={selectedOption === 'Sim'}
                      />

                      <Input.Radio
                        title={t('Não')}
                        id="checkbox-id"
                        onChange={() => setSelectedOption('Não')}
                        checked={selectedOption === 'Não'}
                      />
                    </div>
                  </div>
                </div>
              )}
              {currentScreen.length === 3 && (
                <div className="steep_three">
                  <p>Defina um prazo para a votação:</p>
                  <div>
                    <Input.Text
                      title="Data inicial"
                      key="start_date"
                      id="start_date"
                      type="date"
                      placeholder=""
                      data-testid="start_date"
                      onChange={formik.handleChange('start_date')}
                      onBlur={formik.handleBlur('start_date')}
                      value={formik.values.start_date}
                      autocomplete="start_date"
                    />
                    <Input.Text
                      title="Data final"
                      key="end_date"
                      id="end_date"
                      type="date"
                      placeholder=""
                      data-testid="end_date"
                      onChange={formik.handleChange('end_date')}
                      onBlur={formik.handleBlur('end_date')}
                      value={formik.values.end_date}
                      autocomplete="end_date"
                    />
                  </div>
                </div>
              )}
              {currentScreen.length === 4 && (
                <div className="steep_four">
                  <div>
                    <h4>Visitante adicionado com sucesso!</h4>
                  </div>
                  <Image src={super_check} alt="super_check" />
                  <div>
                    <Button.Action label={'Ver meus visitantes cadastrados'} type="ghost" />
                    <Button.Action label={'Gerar código de acesso'} type="secondary" onClick={onSubmit} />
                  </div>
                </div>
              )}
              {currentScreen.length === 1 || currentScreen.length === 2 || currentScreen.length === 3 ? (
                <Button.Action
                  label={'Prosseguir'}
                  onClick={currentScreen.length === 3 ? onSubmit : handleProceedScreen}
                  disabled={disabled}
                  type="primary"
                />
              ) : null}
            </FormikProvider>
          </div>
        </div>
        <Cursor />
        <ProgressCard
          label={'Cadastro de Votação Online'}
          item={itens}
          src={imgOnlineVoting}
          className={`${'useRotation'} ${'useCursor'}`}
        />
      </S.Content>
    </S.Container>
  );
};

export default OnlineVotingScreen;
