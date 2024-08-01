// Next
import Image from 'next/image';

// React
import { Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';
import more from 'assets/icons/more.svg';
import documents_rafiki from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './BookOccurrences.styles';

// @Waiuru-Components
import { Charts, Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Cards } from 'components/cards';
import { Input } from 'components/input';
import { Loading } from 'components/loading';
import { Tab } from 'components/tab';
import { WithoutData } from 'components/withoutData';

// Components-Module
import { BookOccurrencesFilter, BookOccurrencesForm, BookOccurrencesPreview, BookOccurrencesTable } from './components';

// Hook
import { useBookOccurrences } from './useBookOccurrences';

const BookOccurrencesScreen = () => {
  const {
    t,
    data,
    screen,
    columns,
    openForm,
    isLoading,
    cardsData,
    openDelete,
    openFilter,
    searchValue,
    openPreview,
    dataReturned,
    filteredData,
    selectedItems,
    deleteLoading,
    selectedScreen,
    labelsReturned,
    type,
    dateStart,
    dateFinish,
    setType,
    setDateStart,
    setDateFinish,
    setOpenForm,
    setOpenFilter,
    setOpenPreview,
    setSelectedItems,
    setSelectedScreen,
    handleSearchChange,
    handleDeleteSelected,
    handleCheckboxChange,
  } = useBookOccurrences();

  return (
    <S.Container>
      <S.Header>
        <Title name={`${t('book-of-occurrences')}`} size="18px" />
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
                  label="Adicionar novo item"
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
                      <BookOccurrencesTable
                        columns={columns}
                        data={filteredData}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                        handleCheckboxChange={handleCheckboxChange}
                        openModal={({ isOpen, index, itemId }) => {
                          setOpenPreview({ isOpen, index, itemId });
                        }}
                      />
                    ) : (
                      <h1>Este nome não existe</h1>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <WithoutData
                      title="Ainda não há nenhuma ocorrência."
                      image={{ src: documents_rafiki, alt: '' }}
                      action={{
                        label: 'Adicionar novo item',
                        onChange: () => setOpenForm(true),
                      }}
                    />
                  </Fragment>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
        {selectedScreen === '2' && (
          <>
            <S.Cards>
              {cardsData.map((card, index) => (
                <Cards key={index} name={card.name} value={card.value} income={card.income} info={card.info} />
              ))}
            </S.Cards>

            <S.ContentCharts>
              <Charts.ChartBar
                data={dataReturned}
                labels={labelsReturned}
                value={43}
                title={'Total de ocorrências por assunto'}
              />
            </S.ContentCharts>
          </>
        )}
      </S.Content>
      {openForm && <BookOccurrencesForm onClose={() => setOpenForm(false)} />}
      {openPreview.isOpen && (
        <BookOccurrencesPreview
          data={openPreview.itemId}
          onClose={() => setOpenPreview({ isOpen: false, index: null, itemId: null })}
        />
      )}
      {openFilter && (
        <BookOccurrencesFilter
          onClose={() => setOpenFilter(false)}
          onSelect={(type, dateStart, dateFinish) => {
            setType(type);
            setDateStart(dateStart);
            setDateFinish(dateFinish);
          }}
          type={type}
          dateStart={dateStart}
          dateFinish={dateFinish}
        />
      )}
      {openDelete && (
        <S.ModalFooter>
          <Button.Action label={'Deletar'} type="secondary" onClick={handleDeleteSelected} loading={deleteLoading} />
        </S.ModalFooter>
      )}
    </S.Container>
  );
};

export default BookOccurrencesScreen;
