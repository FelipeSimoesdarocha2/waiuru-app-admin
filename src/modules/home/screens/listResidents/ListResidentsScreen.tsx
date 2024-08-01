// Next
import Image from 'next/image';
import router from 'next/router';

// React
import { Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';
import more from 'assets/icons/more.svg';
import amico from 'assets/images/amico.png';
import documents_rafiki from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './ListResidents.styles';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Cards } from 'components/cards';
import { Input } from 'components/input';
import { Loading } from 'components/loading';
import { WithoutData } from 'components/withoutData';

// Components-Module
import { ListResidentsTable } from './components';

// Hooks
import { useListResidents } from './useListResidents';

const ListResidentsScreen = () => {
  const { data, columns, isLoading, searchValue, filteredData, handleSearchChange } = useListResidents();

  return (
    <S.Container>
      <S.Header>
        <Title name={'Lista de Moradores'} size={'18px'} />
        <S.Inner>
          <S.Panel>
            <Cards
              name={'Total de Moradores'}
              value={data?.length}
              income={70}
              info={'cadastrados até o momento.'}
              classname="card"
              loading={false}
            />
            <S.Info>
              <Image src={amico} alt="img" />
              <p>Mantenha os dados dos moradores sempre atualizados.</p>
            </S.Info>
          </S.Panel>
          <S.Actions>
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
              <Image src={filter} alt="filter" />
              <Button.Action
                label="Adicionar novo morador"
                type="primary"
                src={more}
                onClick={() => router.push('/create/residents')}
                className="button"
              />
            </S.Buttons>
          </S.Actions>
        </S.Inner>
      </S.Header>
      <S.Content>
        {isLoading ? (
          <Loading />
        ) : (
          <Fragment>
            {data ? (
              <Fragment>
                {filteredData.length > 0 ? (
                  <ListResidentsTable data={filteredData} columns={columns} />
                ) : (
                  <h1>Este nome não existe</h1>
                )}
              </Fragment>
            ) : (
              <Fragment>
                <WithoutData
                  title="Não há moradores cadastrados"
                  image={{ src: documents_rafiki, alt: '' }}
                  action={{
                    label: 'Adicionar novo morador',
                    onChange: () => router.push('/create/residents'),
                  }}
                />
              </Fragment>
            )}
          </Fragment>
        )}
      </S.Content>
    </S.Container>
  );
};

export default ListResidentsScreen;
