// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import super_check from 'assets/icons/super_check.svg';
import imgResidents from 'assets/images/imgResidents.png';

// Styles
import * as S from './Residents.styles';

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
import { useResidents } from './useResidents';

const VisitorsScreen = () => {
  const router = useRouter();
  const {
    t,
    itens,
    links,
    formik,
    disabled,
    currentScreen,
    updateProgressBar,
    isLoading,
    onSubmit,
    setCurrentScreen,
    handleProceedScreen,
  } = useResidents();

  const home = () => {
    router.push('/dashboard');
  };

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
          <div className="content_header">
            <div>
              <p>{`${t('registration-form')}`}</p>
              <p>Preencha abaixo com as informações do morador.</p>
            </div>
            <div>
              <Links data={links} label={links[3].name} type="link" />
              <ProgressBar value={updateProgressBar} />
            </div>
          </div>

          <div className="form">
            <FormikProvider value={formik}>
              {currentScreen.length === 1 && (
                <div className="steep_one">
                  <Input.Text
                    title="Nome completo do morador"
                    key="name"
                    id="name"
                    type="text"
                    placeholder=""
                    data-testid="name"
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.name}
                    autocomplete="name"
                  />
                  <Input.Text
                    title="Nº do documento "
                    key="document_number"
                    id="document_number"
                    type="text"
                    placeholder="Ex: RG, CPF ou Carteira de Habilitação."
                    data-testid="document_number"
                    onChange={formik.handleChange('document_number')}
                    onBlur={formik.handleBlur('document_number')}
                    value={formik.values.document_number}
                    autocomplete="document_number"
                  />
                  <Input.Text
                    title="Email "
                    key="email"
                    id="email"
                    type="text"
                    placeholder=""
                    data-testid="cpf"
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                    autocomplete="email"
                  />
                </div>
              )}

              {currentScreen.length === 2 && (
                <div className="steep_two">
                  <Input.Text
                    title="Morador vinculado"
                    key="resident_linked"
                    id="resident_linked"
                    type="text"
                    placeholder="Ex: filhos, pais e cônjuges."
                    data-testid="resident_linked"
                    onChange={formik.handleChange('resident_linked')}
                    onBlur={formik.handleBlur('resident_linked')}
                    value={formik.values.resident_linked}
                    autocomplete="resident_linked"
                  />
                </div>
              )}

              {currentScreen.length === 3 && (
                <div className="steep_three">
                  <div>
                    <h4>Morador adicionado com sucesso!</h4>
                    <p>O cadastro será finalizado pelo morador dentro do aplicativo de moradores.</p>
                  </div>
                  <Image src={super_check} alt="super_check" />
                  <div>
                    <Button.Action
                      label={'Adicionar outro morador'}
                      type="ghost"
                      onClick={() => {
                        setCurrentScreen([1]);
                      }}
                    />
                    <Button.Action label={'Ir para a página inicial'} type="secondary" onClick={home} />
                  </div>
                </div>
              )}

              <div className="gap_btn">
                {currentScreen.length === 2 && (
                  <Button.Action label={'Adicionar morador vinculado'} type="ghost" disabled={isLoading} />
                )}
                {currentScreen.length === 1 || currentScreen.length === 2 ? (
                  <Button.Action
                    label={'Prosseguir'}
                    onClick={currentScreen.length === 1 ? handleProceedScreen : onSubmit}
                    disabled={disabled}
                    type="primary"
                    loading={isLoading}
                  />
                ) : null}
              </div>
            </FormikProvider>
          </div>
        </div>
        <Cursor />
        <ProgressCard
          label={'Acesso Morador'}
          item={itens}
          src={imgResidents}
          className={`${'useRotation'} ${'useCursor'}`}
        />
      </S.Content>
    </S.Container>
  );
};

export default VisitorsScreen;
