// Next
import Image from 'next/image';

// Assets
import avatar from 'assets/constants/Avatar1.png';

// Styles
import * as S from './BookOccurrencesPreview.styles';

// Models
import { BookOccurrencesPreviewProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Loading } from 'components/loading';
import { UploadFileModal } from 'components/uploadFileModal';

// Hook
import { useBookOccurrencesPreview } from './useBookOccurrencesPreview';

// Components-Module
import { statusColorMap } from '../../BookOccurrences.constants';
import { ListResidentTable } from './ListResidentTable';
import { WithoutData } from './withoutData';

// Moment
import moment from 'moment';

const BookOccurrencesPreview = ({ data, onClose }: BookOccurrencesPreviewProps) => {
  const {
    isLoading,
    searchValue,
    dataResident,
    filteredData,
    selectedUser,
    selectedScreen,
    handleSearchChange,
    handleLinkClick,
    setSelectedScreen,
  } = useBookOccurrencesPreview(data);

  return (
    <S.Component onClick={onClose}>
      {selectedScreen === '1' && (
        <S.Container
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <S.Header>
            <S.Row>
              <S.Title>
                <p>Detalhes da ocorrência</p>
                <S.Status>
                  <span style={{ backgroundColor: statusColorMap[data?.status ?? ''] }}>
                    <p>{data?.status}</p>
                  </span>
                </S.Status>
              </S.Title>
              <Button.Action label={'Fechar ocorrência'} onClick={() => { }} type="primary" />
            </S.Row>
            <S.Actions>
              {!selectedUser.resident_name ? (
                <Button.Link label={'+ atribuir como tarefa'} onClick={() => setSelectedScreen('2')} type="primary" />
              ) : (
                <S.Selected>
                  <S.Typography>
                    <p>Essa tarefa foi atribuída a</p>
                    <span>{selectedUser.resident_name}</span>
                  </S.Typography>
                  <Button.Link label={'acompanhar tarefa'} onClick={() => { }} type="primary" />
                </S.Selected>
              )}
            </S.Actions>
          </S.Header>
          <S.Content>
            <S.Person>
              <Image src={avatar} alt="" width={40} />
              <p>{data?.incident}</p>
            </S.Person>
            <S.Form>
              <Input.Text
                title="Assunto"
                key="Assunto"
                id="Destinatário"
                type="text"
                placeholder=""
                data-testid="subject"
                onChange={() => { }}
                onBlur={() => { }}
                value={''}
                autocomplete="subject"
              />
              <Input.Text
                title="Local"
                key="Local"
                id="Destinatário"
                type="text"
                placeholder=""
                data-testid="subject"
                onChange={() => { }}
                onBlur={() => { }}
                value={''}
                autocomplete="subject"
              />
              <Input.Text
                title="Data da ocorrência"
                key="Data da ocorrência"
                id="Destinatário"
                type="text"
                placeholder=""
                data-testid="subject"
                onChange={() => { }}
                onBlur={() => { }}
                value={moment(data?.date).format('DD/MM/YYYY')}
                autocomplete="subject"
              />
              <textarea
                rows={10}
                cols={50}
                placeholder="Resumo do que aconteceu"
                data-testid="subject"
                value={data?.summary}
                onChange={() => { }}
              />
              <UploadFileModal onSelect={() => { }} />
            </S.Form>
          </S.Content>
        </S.Container>
      )}

      {selectedScreen === '2' && (
        <S.ContainerResident
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <S.ContentResident>
            <S.HeaderResident>
              <S.Inner>
                <S.Title>Atribuir tarefa a funcionário</S.Title>
              </S.Inner>
              <Input.Search
                key="name"
                id="name"
                type="text"
                data-testid="name"
                placeholder="Pesquisar por funcionário"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </S.HeaderResident>
            <S.Wrapper style={{ overflow: `${isLoading && data ? 'hidden' : 'auto'}` }}>
              {dataResident ? (
                <>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      {filteredData.length > 0 ? (
                        <ListResidentTable
                          data={filteredData}
                          onSelect={(residentId, resident_name) => {
                            handleLinkClick(residentId, resident_name);
                          }}
                        />
                      ) : (
                        <h1>Este nome não existe</h1>
                      )}
                    </>
                  )}
                </>
              ) : (
                <WithoutData />
              )}
            </S.Wrapper>
          </S.ContentResident>
        </S.ContainerResident>
      )}
    </S.Component>
  );
};

export default BookOccurrencesPreview;
