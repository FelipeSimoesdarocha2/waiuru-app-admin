// Next
import Image from 'next/image';

// React
import { useState, Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';
import more from 'assets/icons/more.svg';
import documents_rafiki from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './LostAndFound.styles';

// @Waiuru-Components
import { Charts, Title } from '@waiuru/waiuru-ui';

// @Waiuru-Temporary
import { Button } from 'components/button';
import { Cards } from 'components/cards';
import { Input } from 'components/input';
import { Loading } from 'components/loading';
import { Tab } from 'components/tab';
import { WithoutData } from 'components/withoutData';

// Components-Module
import { LostAndFoundFilter, LostAndFoundForm, LostAndFoundPreview, LostAndFoundTable } from './components';

// Hook
import { useLostAndFound } from './useLostAndFound';

const LostAndFoundScreen = () => {
  const [type, setType] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateFinish, setDateFinish] = useState('');

  const {
    data,
    screen,
    columns,
    openForm,
    isLoading,
    cardsData,
    openFilter,
    openDelete,
    openPreview,
    searchValue,
    filteredData,
    dataReceived,
    dataReturned,
    selectedItems,
    labelsReceived,
    labelsReturned,
    selectedScreen,
    setOpenForm,
    setOpenFilter,
    setOpenPreview,
    setSelectedItems,
    setSelectedScreen,
    handleSearchChange,
    handleCheckboxChange,
    handleDeleteSelected,
  } = useLostAndFound();

  return (
    <S.Container>
      <S.Header>
        <Title name="Achados e perdidos" size="18px" />
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
                      <LostAndFoundTable
                        data={filteredData}
                        columns={columns}
                        handleCheckboxChange={handleCheckboxChange}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
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
                      title="Ainda não há nenhum item."
                      image={{ src: documents_rafiki, alt: '' }}
                      action={{
                        label: 'Cadastrar item',
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
              <Charts.ChartRadioBasic
                title={'Total de itens cadastrados'}
                data={dataReceived}
                labels={labelsReceived}
                value={320}
              />
              <Charts.ChartBar
                title={'Total de itens resgatados pelo proprietário'}
                data={dataReturned}
                labels={labelsReturned}
                value={212}
              />
            </S.ContentCharts>
          </>
        )}
      </S.Content>
      {openForm && <LostAndFoundForm onClose={() => setOpenForm(false)} />}
      {openPreview.isOpen && (
        <LostAndFoundPreview
          data={openPreview.itemId}
          onClose={() => setOpenPreview({ isOpen: false, index: null, itemId: null })}
        />
      )}
      {openFilter && (
        <LostAndFoundFilter
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
          <Button.Action label={'Deletar'} type="secondary" onClick={handleDeleteSelected} />
        </S.ModalFooter>
      )}
    </S.Container>
  );
};

export default LostAndFoundScreen;
