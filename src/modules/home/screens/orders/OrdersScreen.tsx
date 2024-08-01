// Next
import Image from 'next/image';

// React
import { useState, Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';
import more from 'assets/icons/more.svg';
import documents_rafiki from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './Orders.styles';

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
import { OrdersFilter, OrdersForm, OrdersPreview, OrdersTable } from './components';

// Hook
import { useOrders } from './useOrders';

const OrdersScreen = () => {
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
    openDelete,
    openFilter,
    searchValue,
    openPreview,
    dataReceived,
    dataReturned,
    filteredData,
    selectedItems,
    selectedScreen,
    labelsReturned,
    labelsReceived,
    refetch,
    setOpenForm,
    setOpenFilter,
    setOpenPreview,
    setSelectedItems,
    setSelectedScreen,
    handleSearchChange,
    handleDeleteSelected,
    handleCheckboxChange,
  } = useOrders(type, dateStart, dateFinish);

  return (
    <S.Container>
      <S.Header>
        <Title name="Encomendas" size="18px" />
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
                  label="Adicionar nova encomenda"
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
                      <OrdersTable
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
                      title="Ainda não há nenhuma encomenda."
                      image={{ src: documents_rafiki, alt: '' }}
                      action={{
                        label: 'Adicionar nova encomenda',
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
          <S.Charts>
            <S.Cards>
              {cardsData.map((card, index) => (
                <Cards key={index} name={card.name} value={card.value} income={card.income} info={card.info} />
              ))}
            </S.Cards>
            <S.ContentCharts>
              <Charts.ChartRadioBasic
                data={dataReceived}
                labels={labelsReceived}
                value={290}
                title={'Encomendas recebidas'}
              />
              <Charts.ChartBar data={dataReturned} labels={labelsReturned} value={19} title={'Encomendas devolvidas'} />
            </S.ContentCharts>
          </S.Charts>
        )}
      </S.Content>
      {openForm && <OrdersForm onClose={() => setOpenForm(false)} />}
      {openPreview.isOpen && (
        <OrdersPreview
          data={openPreview.itemId}
          refetch={() => refetch()}
          onCloseModal={() => setOpenPreview({ isOpen: false, index: null, itemId: null })}
        />
      )}
      {openFilter && (
        <OrdersFilter
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

export default OrdersScreen;
