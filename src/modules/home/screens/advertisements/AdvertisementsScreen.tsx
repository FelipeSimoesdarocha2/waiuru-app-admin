// Next
import Image from 'next/image';

// React
import { useState, Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';
import more from 'assets/icons/more.svg';
import view_list from 'assets/icons/view_list.svg';
import withoutSvg from 'assets/images/advertisements/withoutSvg.svg';

// Styles
import * as S from './Advertisements.styles';

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
import {
  AdvertisementsCard,
  AdvertisementsCardSide,
  AdvertisementsFilter,
  AdvertisementsForm,
  AdvertisementsPreview,
  AdvertisementsSide,
  AdvertisementsTable,
} from './components';

// Hook
import { useAdvertisements } from './useAdvertisements';

const AdvertisementsScreen = () => {
  const [type, setType] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateFinish, setDateFinish] = useState('');

  const {
    data,
    links,
    screen,
    columns,
    isLoading,
    openFilter,
    searchValue,
    openPreview,
    filteredData,
    selectedScreen,
    setIsOpen,
    setOpenFilter,
    setOpenPreview,
    setSelectedScreen,
    handleSearchChange,
  } = useAdvertisements();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <Title name="Mudanças" size="18px" />
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
              <S.Col>
                <S.Row>
                  <S.Search>
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
                    <button onClick={() => setOpenFilter(true)}>
                      <Image src={filter} alt="filter" />
                    </button>
                  </S.Search>
                  <S.Buttons>
                    <Button.Action
                      label="Agendar mudança"
                      src={more}
                      onClick={() => setIsOpen(true)}
                      type="primary"
                      className="button"
                    />
                  </S.Buttons>
                </S.Row>
                <S.Row>
                  <S.Filter>
                    <Links data={links} label={links[1].name} type="link" />
                    <button>
                      <Image src={view_list} alt="view_list" />
                    </button>
                  </S.Filter>
                  <S.Status>
                    <S.Lenght>
                      <span>{filteredData.length}</span>
                      <p> mudanças</p>
                    </S.Lenght>
                    <Button.Link type="primary" label="ver todas as mudanças" onClick={() => { }} className="btn" />
                  </S.Status>
                </S.Row>
              </S.Col>
            )}
            {selectedScreen === '2' && (
              <S.Col>
                <S.Row>
                  <S.Search>
                    <Input.Search
                      key="name"
                      id="name"
                      type="text"
                      data-testid="name"
                      placeholder="Pesquisar"
                      value={searchValue}
                      onChange={handleSearchChange}
                      className={'input_padding'}
                    />
                    <button onClick={() => setOpenFilter(true)}>
                      <Image src={filter} alt="filter" />
                    </button>
                  </S.Search>
                  <S.Filter>
                    <Links data={links} label={links[1].name} type="link" />
                    <button>
                      <Image src={view_list} alt="view_list" />
                    </button>
                  </S.Filter>
                </S.Row>
              </S.Col>
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
                        <S.Cards>
                          {filteredData.map((item, index) => (
                            <AdvertisementsCard data={item} key={index} />
                          ))}
                        </S.Cards>
                      ) : (
                        <h1>Este nome não existe</h1>
                      )}
                    </Fragment>
                  ) : (
                    <Fragment>
                      <WithoutData
                        title="Ainda não há nenhuma votação."
                        image={{ src: withoutSvg, alt: '' }}
                        action={{
                          label: 'Agendar mudança',
                          onChange: () => setIsOpen(true),
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
              {isLoading ? (
                <Loading />
              ) : (
                <Fragment>
                  {data ? (
                    <Fragment>
                      {filteredData.length > 0 ? (
                        <AdvertisementsTable columns={columns} data={filteredData} />
                      ) : (
                        <h1>Este nome não existe</h1>
                      )}
                    </Fragment>
                  ) : (
                    <Fragment>
                      <WithoutData
                        title="Ainda não há nenhuma votação."
                        image={{ src: withoutSvg, alt: '' }}
                        action={{
                          label: 'Agendar mudança',
                          onChange: () => setIsOpen(true),
                        }}
                      />
                    </Fragment>
                  )}
                </Fragment>
              )}
            </Fragment>
          )}
        </S.Content>
      </S.Wrapper>
      {selectedScreen === '1' && <AdvertisementsSide data={data} />}
      {openFilter && (
        <AdvertisementsFilter
          onClose={() => setOpenFilter(false)}
          onSelect={(type, dateStart, dateFinish) => {
            setType(type);
            setDateStart(dateStart);
            setDateFinish(dateFinish);
          }}
        />
      )}
    </S.Container>
  );
};

export default AdvertisementsScreen;
