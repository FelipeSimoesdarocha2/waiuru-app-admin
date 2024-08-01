// Next
import Image from 'next/image';

// React
import { Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';
import more from 'assets/icons/more.svg';
import documents_rafiki from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './AccessControl.styles';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Loading } from 'components/loading';
import { Select } from 'components/select';
import { Tab } from 'components/tab';
import { WithoutData } from 'components/withoutData';

// Components-Module
import { AccessControlFilter, AccessControlTable } from './components';

// Hook
import { useAccessControl } from './useAccessControl';

const AccessControlScreen = () => {
  const {
    t,
    data,
    links,
    screen,
    formik,
    columns,
    isLoading,
    openFilter,
    searchValue,
    filteredData,
    selectedScreen,
    setOpenForm,
    setOpenFilter,
    setOpenPreview,
    setSelectedScreen,
    handleSearchChange,
    // Filter
    setHour,
    setVehicle,
    setCategory,
    setStartDate,
    setFinishDate,
  } = useAccessControl();

  return (
    <S.Container>
      <S.Header>
        <Title name={`${t('access-control')}`} size="18px" />
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
          {selectedScreen === '1' && (
            <div className="filters_action">
              <Select.Link data={links} label={'Cadastro rápido'} type="secondary" />
              <Input.Search
                key="name"
                id="name"
                type="text"
                data-testid="name"
                placeholder="Pesquisar"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <div>
                <button onClick={() => setOpenFilter(true)}>
                  <Image src={filter} alt="filter" />
                </button>
                <Button.Action
                  label="Cadastrar novo acesso"
                  src={more}
                  onClick={() => setOpenForm(true)}
                  type="primary"
                />
              </div>
            </div>
          )}
        </S.Actions>
      </S.Header>
      <S.Content>
        {selectedScreen === '1' && (
          <Fragment>
            {isLoading ? (
              <Loading />
            ) : (
              <Fragment>
                {data ? (
                  <Fragment>
                    {filteredData.length > 0 ? (
                      <AccessControlTable data={filteredData} columns={columns} />
                    ) : (
                      <h1>Este nome não existe</h1>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <WithoutData
                      title="Nenhum acesso cadastrado"
                      image={{ src: documents_rafiki, alt: '' }}
                      action={{
                        label: 'Cadastrar novo acesso',
                        onChange: () => setOpenForm(true),
                      }}
                    />
                  </Fragment>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
        {selectedScreen === '2' ? <> </> : ''}
      </S.Content>
      {openFilter && (
        <AccessControlFilter
          onClose={() => setOpenFilter(false)}
          onSelect={(type, dateStart, dateFinish) => {
            setCategory(type);
            setVehicle(dateStart);
            setHour(dateFinish);
            setStartDate(dateFinish);
            setFinishDate(dateFinish);
          }}
        />
      )}
    </S.Container>
  );
};

export default AccessControlScreen;
