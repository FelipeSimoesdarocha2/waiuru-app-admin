// Assets
import imgEmployee from 'assets/images/imgEmployee.png';

// Styles
import * as S from './Employee.styles';

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
import { Select } from 'components/select';

// Hook
import { useEmployee } from './useEmployee';

const EmployeeScreen = () => {
  const {
    t,
    itens,
    links,
    formik,
    disabled,
    isLoading,
    working_day,
    currentScreen,
    employee_activity,
    updateProgressBar,
    onSubmit,
    handleReturnScreen,
    handleProceedScreen,
  } = useEmployee();

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
              <p>{`${t('fill_in_the_employee_information')}.`}</p>
            </div>

            <div>
              <Links data={links} label={links[5].name} type="link" />
              <ProgressBar value={updateProgressBar} />
              {currentScreen.length > 1 && (
                <Button.Link onClick={handleReturnScreen} label={`${t('back')}`} type="primary" />
              )}
            </div>
          </div>

          <div className="form">
            <FormikProvider value={formik}>
              {currentScreen.length === 1 && (
                <div className="steep_one">
                  <Input.Text
                    title="Nome completo do funcionário"
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
                    title="Email"
                    key="email"
                    id="email"
                    type="email"
                    placeholder=""
                    data-testid="email"
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                    autocomplete="email"
                  />
                  <Input.Phone
                    title="Nº de telefone"
                    key="phone"
                    id="phone"
                    type="phone"
                    placeholder=""
                    data-testid="phone"
                    onChange={formik.handleChange('phone')}
                    onBlur={formik.handleBlur('phone')}
                    value={formik.values.phone}
                    autocomplete="tel"
                  />
                </div>
              )}

              {currentScreen.length === 2 && (
                <div className="steep_two">
                  <Input.Text
                    title="Nº do RG ou Carteira de Habilitação"
                    key="driving_license"
                    id="driving_license"
                    type="text"
                    placeholder=""
                    data-testid="driving_license"
                    onChange={formik.handleChange('driving_license')}
                    onBlur={formik.handleBlur('driving_license')}
                    value={formik.values.driving_license}
                    autocomplete="driving_license"
                  />
                  <Input.Text
                    title="Nº da CTPS (Carteira de Trabalho)"
                    key="work_card"
                    id="work_card"
                    type="text"
                    placeholder=""
                    data-testid="work_card"
                    onChange={formik.handleChange('work_card')}
                    onBlur={formik.handleBlur('work_card')}
                    value={formik.values.work_card}
                    autocomplete="work_card"
                  />
                  <Input.Text
                    title="Nº do Título de Eleitor"
                    key="voter_id"
                    id="=voter_id"
                    type="text"
                    placeholder=""
                    data-testid="voter_id"
                    onChange={formik.handleChange('voter_id')}
                    onBlur={formik.handleBlur('voter_id')}
                    value={formik.values.voter_id}
                    autocomplete="voter_id"
                  />
                </div>
              )}

              {currentScreen.length === 3 && (
                <div className="steep_three">
                  <Input.Text
                    title="Nº do CPF"
                    key="cpf"
                    id="cpf"
                    type="cpf"
                    placeholder=""
                    data-testid="cpf"
                    onChange={formik.handleChange('cpf')}
                    onBlur={formik.handleBlur('cpf')}
                    value={formik.values.cpf}
                    autocomplete="cpf-cnpj"
                  />
                  <Input.Text
                    title="Data de Nascimento"
                    key="date_of_birth"
                    id="date_of_birth"
                    type="date"
                    placeholder=""
                    data-testid="date_of_birth"
                    onChange={formik.handleChange('date_of_birth')}
                    onBlur={formik.handleBlur('date_of_birth')}
                    value={formik.values.date_of_birth}
                    autocomplete="date_of_birth"
                  />
                  <Input.Text
                    title="Data de Admissão"
                    key="admission_date"
                    id="admission_date"
                    type="date"
                    placeholder=""
                    data-testid="admission_date"
                    onChange={formik.handleChange('admission_date')}
                    onBlur={formik.handleBlur('admission_date')}
                    value={formik.values.admission_date}
                    autocomplete="admission_date"
                  />
                </div>
              )}

              {currentScreen.length === 4 && (
                <div className="steep_four">
                  <Input.Text
                    title="CEP de Residência"
                    key="zipcode"
                    id="zipcode"
                    type="text"
                    placeholder=""
                    data-testid="zipcode"
                    onChange={formik.handleChange('zipcode')}
                    onBlur={formik.handleBlur('zipcode')}
                    value={formik.values.zipcode}
                    autocomplete="zipcode"
                  />
                  <Input.Text
                    title="Rua"
                    key="address"
                    id="address"
                    type="text"
                    placeholder=""
                    data-testid="address"
                    onChange={formik.handleChange('address')}
                    onBlur={formik.handleBlur('address')}
                    value={formik.values.address}
                    autocomplete="address"
                  />
                  <Input.Text
                    title="Cidade"
                    key="city"
                    id="city"
                    type="text"
                    placeholder=""
                    data-testid="city"
                    onChange={formik.handleChange('city')}
                    onBlur={formik.handleBlur('city')}
                    value={formik.values.city}
                    autocomplete="city"
                  />
                </div>
              )}

              {currentScreen.length === 5 && (
                <div className="steep_five">
                  <Select.Action
                    label="Área de atuação do funcionário"
                    key="employee_activity"
                    id="employee_activity"
                    placeholder=""
                    data-testid="employee_activity"
                    onChange={formik.handleChange('employee_activity')}
                    value={formik.values.employee_activity}
                    options={employee_activity}
                  />
                  <Select.Action
                    id="working_day"
                    key="working_day"
                    data-testid="working_day"
                    placeholder=""
                    label="Jornada de trabalho"
                    onChange={formik.handleChange('working_day')}
                    value={formik.values.working_day}
                    options={working_day}
                  />
                  <Input.Text
                    title="Nº de contato de emergência"
                    key="emergency_contact"
                    id="emergency_contact"
                    type="text"
                    placeholder=""
                    data-testid="emergency_contact"
                    onChange={formik.handleChange('emergency_contact')}
                    onBlur={formik.handleBlur('emergency_contact')}
                    value={formik.values.emergency_contact}
                    autocomplete="emergency_contact"
                  />
                </div>
              )}

              {currentScreen.length === 6 && (
                <div className="steep_six">
                  <p>Formulário de cadastro</p>
                  <p>Preencha abaixo com as informações da encomenda.</p>
                  {/*
                  <S.UpDocument >
                    <div className="fields_item">
                      <div className="inner">
                        <p>RG ou Carteira de Habilitação</p>
                        <p>Arraste um arquivo</p>
                        <Image src={download} alt="download" width={30} />
                      </div>

                      <div className="outer">
                        <p>ou</p>
                        <p>importar cópia do documento</p>
                      </div>
                    </div>

                    <div className="content">
                      <div className="inner">
                        <p>RG ou Carteira de Habilitação</p>
                        <p>Arraste um arquivo</p>
                        <Image src={download} alt="download" width={21.75} height={27.272} />
                      </div>

                      <div className="outer">
                        <p>ou</p>
                        <p>importar cópia do documento</p>
                      </div>
                    </div>

                    <div className="content">
                      <div className="inner">
                        <p>RG ou Carteira de Habilitação</p>
                        <p>Arraste um arquivo</p>
                        <Image src={download} alt="download" width={21.75} height={27.272} />
                      </div>

                      <div className="outer">
                        <p>ou</p>
                        <p>importar cópia do documento</p>
                      </div>
                    </div>

                    <div className="content">
                      <div className="inner">
                        <p>RG ou Carteira de Habilitação</p>
                        <p>Arraste um arquivo</p>
                        <Image src={download} alt="download" width={21.75} height={27.272} />
                      </div>

                      <div className="outer">
                        <p>ou</p>
                        <p>importar cópia do documento</p>
                      </div>
                    </div>
                  </S.UpDocument> */}
                </div>
              )}
              <Button.Action
                label={'Prosseguir'}
                loading={isLoading}
                onClick={handleProceedScreen}
                disabled={disabled}
                type="primary"
              />
            </FormikProvider>
          </div>
        </div>

        <>
          <Cursor />
          <ProgressCard
            label={'Cadastro de Funcionário'}
            item={itens}
            src={imgEmployee}
            className={`${'useRotation'} ${'useCursor'}`}
          />
        </>
      </S.Content>
    </S.Container>
  );
};

export default EmployeeScreen;
