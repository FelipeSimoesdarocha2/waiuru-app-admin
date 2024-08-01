// React
import { useState } from 'react';

// Styles
import * as S from './LostAndFoundPreview.styles';

// Models
import { LostAndFoundPreviewProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Loading } from 'components/loading';
import { UploadFileModal } from 'components/uploadFileModal';

// Hook
import { useLostAndFoundPreview } from './useLostAndFoundPreview';

// Components
import { statusColorMap } from '../../LostAndFound.constants';
import { ListResidentTable } from './ListResidentTable';
import { LostAndFoundFilterPreview } from './lostAndFoundFilterPreview';
import { WithoutData } from './withoutData';

const LostAndFoundPreview = ({ data, onClose }: LostAndFoundPreviewProps) => {
  const [selectedScreen, setSelectedScreen] = useState('1');
  const [tower, setTower] = useState('');
  const [apartment, setApartment] = useState('');
  const [selectedUser, setSelectedUser] = useState<{
    resident_id: string;
    resident_name: string;
  }>({
    resident_id: '',
    resident_name: '',
  });

  const { isLoading, searchValue, filteredData, dataResident, handleSearchChange } = useLostAndFoundPreview();

  const handleLinkClick = (resident_id: string, resident_name: string) => {
    setSelectedUser({ resident_id, resident_name });
    setSelectedScreen('1');
  };

  // onClose?.();
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
                <p>{data?.name}</p>
                <S.Status>
                  <span style={{ backgroundColor: statusColorMap[data?.type ?? ''] }}>
                    <p>{data?.type}</p>
                  </span>
                </S.Status>
              </S.Title>
              <Button.Action
                label={data?.type === 'FOUND' ? 'Item resgatado pelo dono' : 'Item achado'}
                onClick={() => setSelectedScreen('2')}
                type="primary"
              />
            </S.Row>
          </S.Header>
          <S.Content>
            <S.Form>
              <Input.Text
                title="Descrição"
                key="Assunto"
                id="Destinatário"
                type="text"
                placeholder=""
                data-testid="subject"
                onChange={() => { }}
                onBlur={() => { }}
                value={data?.description}
                autocomplete="subject"
              />
              <Input.Text
                title="Responsável pela ocorrência"
                key="Local"
                id="Destinatário"
                type="text"
                placeholder=""
                data-testid="subject"
                onChange={() => { }}
                onBlur={() => { }}
                value={data?.name}
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
                value={data?.date_found}
                autocomplete="subject"
              />
              <UploadFileModal onSelect={() => { }} />
            </S.Form>
          </S.Content>
        </S.Container>
      )}
      {selectedScreen === '2' && (
        <LostAndFoundFilterPreview
          onClose={() => setSelectedScreen('1')}
          onPush={() => setSelectedScreen('3')}
          onSelect={(typeValue, apartment) => {
            setTower(typeValue);
            setApartment(apartment);
          }}
        />
      )}

      {selectedScreen === '3' && (
        <S.ContainerResident
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <S.ContentResident>
            <S.HeaderResident>
              <S.Inner>
                <S.Title>Confirmação de item achado</S.Title>
              </S.Inner>
              <Input.Search
                key="name"
                id="name"
                type="text"
                data-testid="name"
                placeholder="Pesquisar por morador"
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
            <S.Action>
              <button onClick={onClose}>
                <p>Cancelar</p>
              </button>
              <button onClick={() => { }} className="accept">
                <p>Salvar</p>
              </button>
            </S.Action>
          </S.ContentResident>
        </S.ContainerResident>
      )}
    </S.Component>
  );
};

export default LostAndFoundPreview;
