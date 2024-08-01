// Next
import { useRouter } from 'next/router';

// React
import { Fragment } from 'react';

// Assets
import more from 'assets/icons/more.svg';
import documents_rafiki from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './Employees.styles';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { Loading } from 'components/loading';
import { Tab } from 'components/tab';
import { WithoutData } from 'components/withoutData';

// Components-Module
import { ActivitiesForm, ActivitiesTable, EmployeesTable } from './components';

// Hook
import { useEmployees } from './useEmployees';

const EmployeesScreen = () => {
  const router = useRouter();

  const {
    links,
    screen,
    setTask,
    openForm,
    taskLoadings,
    setEmployees,
    selectedScreen,
    searchEmployee,
    searchActivitie,
    filteredEmployee,
    employeeLoadings,
    filteredActivitie,
    setOpenForm,
    setSelectedScreen,
    handleSearchEmployee,
    handleSearchActivitie,
  } = useEmployees();

  return (
    <S.Container>
      <S.Header>
        <Title name="Funcionários" size="18px" />
        <S.Actions>
          <S.Tabs>
            {screen.map(item => (
              <Tab
                key={item.id}
                name={item.name}
                src={item.icon}
                tabItemKey={item.id}
                defaultSelectedKeys={selectedScreen}
                onClick={() => setSelectedScreen(item.id)}
              />
            ))}
          </S.Tabs>
          {(selectedScreen === '1' || selectedScreen === '2') && (
            <S.Filter>
              {selectedScreen === '1' && <Links data={links} label={links[0].name} type="link" />}
              <Input.Search
                key="name"
                id="name"
                type="text"
                data-testid="name"
                placeholder="Pesquisar"
                value={selectedScreen === '1' ? searchEmployee : searchActivitie}
                onChange={selectedScreen === '1' ? handleSearchEmployee : handleSearchActivitie}
                className="input"
              />
              <S.Buttons>
                <Button.Action
                  label={selectedScreen === '1' ? 'Cadastrar novo funcionário' : 'Cadastrar nova atividade'}
                  src={more}
                  onClick={selectedScreen === '1' ? () => router.push('create/employee') : () => setOpenForm(true)}
                  type="primary"
                  className="button"
                />
              </S.Buttons>
            </S.Filter>
          )}
        </S.Actions>
      </S.Header>
      <S.Content>
        {selectedScreen === '1' && (
          <Fragment>
            {employeeLoadings ? (
              <Loading />
            ) : (
              <Fragment>
                {setEmployees ? (
                  <Fragment>
                    {filteredEmployee.length > 0 ? (
                      <EmployeesTable data={filteredEmployee} />
                    ) : (
                      <h1>Este nome não existe</h1>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <WithoutData
                      title="Ainda não há nenhum funcionário."
                      image={{ src: documents_rafiki, alt: '' }}
                      action={{
                        label: 'Adicionar novo funcionário',
                        onChange: () => router.push('create/employee'),
                      }}
                    />
                  </Fragment>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
        {selectedScreen === '2' && (
          <Fragment>
            {taskLoadings ? (
              <Loading />
            ) : (
              <Fragment>
                {setTask ? (
                  <Fragment>
                    {filteredActivitie.length > 0 ? (
                      <ActivitiesTable data={filteredActivitie} columns={[]} />
                    ) : (
                      <h1>Este nome não existe</h1>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <WithoutData
                      title="Ainda não há nenhuma atividade."
                      image={{ src: documents_rafiki, alt: '' }}
                      action={{
                        label: 'Adicionar nova atividade',
                        onChange: () => { },
                      }}
                    />
                  </Fragment>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
      </S.Content>
      {openForm && <ActivitiesForm onClose={() => setOpenForm(false)} />}
    </S.Container>
  );
};

export default EmployeesScreen;
