// Next
import Image from 'next/image';

// React
import { useState, Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';
import more from 'assets/icons/more.svg';
import upload_cuate from 'assets/images/upload_cuate.png';

// Styles
import * as S from './Feed.styles';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// @Components-Temporary
import { Button } from 'components/button';
import { Loading } from 'components/loading';
import { Tab } from 'components/tab';
import { WithoutData } from 'components/withoutData';

// Components-Module
import { FeedFilter, FeedForm, FeedPreview, FeedSide, FeedTable } from './components';

// Hook
import { useFeed } from './useFeed';

const FeedScreen = () => {
  const [type, setType] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateFinish, setDateFinish] = useState('');

  const {
    t,
    data,
    screen,
    openForm,
    isLoading,
    openFilter,
    sideScreen,
    openDelete,
    openPreview,
    searchValue,
    filteredData,
    selectedItems,
    selectedScreen,
    selectedSideScreen,
    setOpenForm,
    setOpenFilter,
    setOpenPreview,
    setSelectedItems,
    setSelectedScreen,
    handleSearchChange,
    handleDeleteSelected,
    handleCheckboxChange,
    setSelectedSideScreen,
  } = useFeed();

  return (
    <S.Container>
      {!openForm ? (
        <S.Content>
          <S.Header>
            <Title name="Feed" size="18px" />
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
                <S.Buttons>
                  <button onClick={() => setOpenFilter(true)}>
                    <Image src={filter} alt="filter" />
                  </button>
                  <Button.Action
                    label="Adicionar nova postagem"
                    src={more}
                    onClick={() => setOpenForm(true)}
                    type="primary"
                    className="button"
                  />
                </S.Buttons>
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
                          <FeedTable
                            data={filteredData}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                          />
                        ) : (
                          <h1>Este nome não existe</h1>
                        )}
                      </Fragment>
                    ) : (
                      <Fragment>
                        <WithoutData
                          title="Ainda não há nenhuma postagem."
                          image={{ src: upload_cuate, alt: '' }}
                          action={{
                            label: 'Adicionar postagem',
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
          </S.Wrapper>
        </S.Content>
      ) : (
        <FeedForm onClose={() => setOpenForm(false)} />
      )}

      {!openForm && (
        <FeedSide
          data={data}
          sideScreen={sideScreen}
          selectedSideScreen={selectedSideScreen}
          setSelectedSideScreen={setSelectedSideScreen}
          OpenModal={({ isOpen, index, itemId }) => {
            setOpenPreview({ isOpen, index, itemId });
          }}
        />
      )}
      {openPreview.isOpen && (
        <FeedPreview
          data={openPreview.itemId}
          onClose={() => setOpenPreview({ isOpen: false, index: null, itemId: null })}
        />
      )}
      {openFilter && (
        <FeedFilter
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

export default FeedScreen;
