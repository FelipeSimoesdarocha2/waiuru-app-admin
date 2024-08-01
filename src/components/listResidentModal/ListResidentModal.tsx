// Next
import Image from 'next/image';
import router from 'next/router';

// React
import { Fragment } from 'react';

// Assets
import exit from 'assets/icons/exit.svg';
import documents_rafiki from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './ListResidentModal.styles';

// Models
import { modalProps } from './models';
import { DataItemTableResidents } from 'models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Loading } from 'components/loading';
import { WithoutData } from 'components/withoutData';

// Hook
import { useListResidentModal } from './useListResidentModal';

// Components-Module
import { ListResidentTable } from './ListResidentTable';

const ListResidentModal = ({
  title,
  actions,
  onClose,
  onSelect,
}: modalProps & { onSelect: (user: DataItemTableResidents) => void }) => {
  const { data, isLoading, searchValue, filteredData, handleSearchChange } = useListResidentModal();

  return (
    <S.Component>
      <S.Container>
        <S.Content>
          <S.Header>
            <S.Inner>
              {title && <S.Title>{title}</S.Title>}
              {onClose && (
                <>
                  {!title && <span />}
                  <S.Close onClick={onClose}>
                    <Image src={exit} alt="exit" />
                  </S.Close>
                </>
              )}
            </S.Inner>
            <Input.Search
              key="name"
              id="name"
              type="text"
              data-testid="name"
              placeholder="Pesquisar..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </S.Header>
          <S.Wrapper style={{ overflow: `${isLoading && data ? 'hidden' : 'auto'}` }}>
            {isLoading ? (
              <Loading />
            ) : (
              <Fragment>
                {data ? (
                  <Fragment>
                    {filteredData.length > 0 ? (
                      <ListResidentTable data={filteredData} onSelect={onSelect} />
                    ) : (
                      <h1>Lista de moradores vazia</h1>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <WithoutData
                      title="Ainda não há nenhum morador."
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
          </S.Wrapper>
          {actions && (
            <S.Actions>
              <Button.Link label={'Cancelar'} onClick={onClose} type="primary" className="close" />
              <Button.Action label={'Salvar'} onClick={actions} type="primary" />
            </S.Actions>
          )}
        </S.Content>
      </S.Container>
    </S.Component>
  );
};

export default ListResidentModal;
