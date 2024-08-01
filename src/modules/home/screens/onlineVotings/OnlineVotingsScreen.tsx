// Next
import Image from 'next/image';

// React
import { useState, Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';
import more from 'assets/icons/more.svg';
import upload_cuate from 'assets/images/upload_cuate.png';

// Styles
import * as S from './OnlineVotings.styles';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Loading } from 'components/loading';
import { Tab } from 'components/tab';
import { WithoutData } from 'components/withoutData';

// Components-Module
import { OnlineVotingsTable, OnlineVotingsSide, OnlineVotingsFilter, OnlineVotingsPreview } from './components';

// Hook
import { useOnlineVotings } from './useOnlineVotings';

const OnlineVotingsScreen = () => {
  const [type, setType] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateFinish, setDateFinish] = useState('');

  const {
    data,
    screen,
    openForm,
    isLoading,
    openFilter,
    openDelete,
    searchValue,
    openPreview,
    filteredData,
    selectedItems,
    selectedScreen,
    openPreviewSise,
    setOpenForm,
    setOpenFilter,
    setOpenPreview,
    setOpenPreviewSide,
    setSelectedItems,
    setSelectedScreen,
    handleSearchChange,
    handleDeleteSelected,
    handleCheckboxChange,
  } = useOnlineVotings();

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Title name="Votação Online" size="18px" />
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
              <S.Filter>
                <Input.Search
                  key="name"
                  id="name"
                  type="text"
                  data-testid="name"
                  placeholder="Pesquisar"
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="input"
                />
                <S.Buttons>
                  <button onClick={() => setOpenFilter(true)}>
                    <Image src={filter} alt="filter" />
                  </button>
                  <Button.Action
                    label="Criar nova votação"
                    src={more}
                    onClick={() => setOpenForm(true)}
                    type="primary"
                    className="button"
                  />
                </S.Buttons>
              </S.Filter>
            )}
          </S.Actions>
        </S.Header>
        <S.Wrapper>
          {selectedScreen === '1' && (
            <Fragment>
              {isLoading ? (
                <Loading />
              ) : (
                <Fragment>
                  {data ? (
                    <Fragment>
                      {filteredData.length > 0 ? (
                        <OnlineVotingsTable
                          data={filteredData}
                          selectedItems={selectedItems}
                          setSelectedItems={setSelectedItems}
                          handleCheckboxChange={handleCheckboxChange}
                        />
                      ) : (
                        <h1>Este nome não existe</h1>
                      )}
                    </Fragment>
                  ) : (
                    <Fragment>
                      <WithoutData
                        title="Ainda não há nenhuma votação."
                        image={{ src: upload_cuate, alt: '' }}
                        action={{
                          label: 'Criar votação online',
                          onChange: () => setOpenForm(true),
                        }}
                      />
                    </Fragment>
                  )}
                </Fragment>
              )}
            </Fragment>
          )}

          {selectedScreen === '2' && <></>}
        </S.Wrapper>
      </S.Content>
      <OnlineVotingsSide
        data={data}
        OpenModal={({ isOpen, index, data }) => {
          setOpenPreviewSide({ isOpen, index, data });
        }}
        onClose={() => setOpenPreviewSide({ isOpen: false, index: null, data: null })}
      />
      {openForm}
      {openPreviewSise.isOpen && (
        <OnlineVotingsPreview
          data={openPreview.itemId}
          onClose={() => setOpenPreview({ isOpen: false, index: null, itemId: null })}
        />
      )}
      {openFilter && (
        <OnlineVotingsFilter
          onClose={() => setOpenFilter(false)}
          onSelect={(type, dateStart, dateFinish) => {
            setType(type);
            setDateStart(dateStart);
            setDateFinish(dateFinish);
          }}
        />
      )}
      {openDelete && (
        <S.ModalFooter>
          <Button.Action label={'Deletar'} type="secondary" onClick={handleDeleteSelected} />
        </S.ModalFooter>
      )}
    </S.Container>
  );
};

export default OnlineVotingsScreen;
