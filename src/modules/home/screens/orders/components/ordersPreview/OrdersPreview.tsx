// Styles
import * as S from './OrdersPreview.styles';

// Models
import { OrdersPreviewProps } from './models';
import { CardServiceStatusOrder } from 'models';

//Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { ListResidentModal } from 'components/listResidentModal';
import { Select } from 'components/select';
import { UploadFileModal } from 'components/uploadFileModal';

// Hook
import { useOrdersPreview } from './useOrdersPreview';

// Moment
import moment from 'moment';

const OrdersPreview = ({ data, onCloseModal, refetch }: OrdersPreviewProps) => {
  const { selectedScreen, submit, setSelectedUser, setSelectedScreen } = useOrdersPreview(data, refetch);

  return (
    <>
      {selectedScreen === '1' && (
        <S.Component onClick={onCloseModal}>
          <S.Container
            onClick={event => {
              event.stopPropagation();
            }}
          >
            <S.Header>
              <S.Row>
                <S.Title>{data?.provider_name}</S.Title>
                {data?.status === CardServiceStatusOrder.CONCIERGE && (
                  <Button.Action label={'Confirmar entrega'} onClick={() => setSelectedScreen('2')} type="primary" />
                )}
                {data?.status === CardServiceStatusOrder.DELIVERED && (
                  <S.Status>
                    <p>{data.status}</p>
                  </S.Status>
                )}
              </S.Row>
              {data?.status === CardServiceStatusOrder.DELIVERED && (
                <S.Withdrawn>
                  <p>Retirado por: {data.picked_up_by_name} </p>
                  <p>Documento: {data?.package_code}</p>
                </S.Withdrawn>
              )}
              {/* <S.Actions>
              <Button.Link label={'solicitar devolução'} onClick={() => setSelectedScreen('3')} type="primary" />
            </S.Actions> */}
            </S.Header>
            <S.Content>
              <S.Form>
                <Input.Text
                  title="Destinatário"
                  key="provider_name"
                  id="provider_name"
                  type="text"
                  placeholder=""
                  data-testid="subject"
                  onChange={() => {}}
                  onBlur={() => {}}
                  value={data?.provider_name}
                  autocomplete="subject"
                  disable
                />
                {data?.status === CardServiceStatusOrder.DELIVERED && (
                  <Input.Text
                    title="Recebedor"
                    key="picked_up_by_name"
                    id="picked_up_by_name"
                    type="text"
                    placeholder=""
                    data-testid="picked_up_by_name"
                    onChange={() => {}}
                    value={data?.picked_up_by_name}
                    autocomplete="picked_up_by_name"
                    disable
                  />
                )}
                <Input.Text
                  title="Responsável pela assinatura"
                  key="receiver_name"
                  id="receiver_name"
                  type="text"
                  placeholder=""
                  data-testid="subject"
                  onChange={() => {}}
                  onBlur={() => {}}
                  value={data?.receiver_name}
                  autocomplete="subject"
                  disable
                />
                <Input.Text
                  title="Empresa responsável pela entrega"
                  key="package_code"
                  id="package_code"
                  type="text"
                  placeholder=""
                  data-testid="package_code"
                  onChange={() => {}}
                  onBlur={() => {}}
                  value={data?.package_code}
                  autocomplete="package_code"
                  disable
                />
                <Input.Text
                  title="Data do recebimento"
                  key="delivery_date"
                  id="delivery_date"
                  type="text"
                  placeholder=""
                  data-testid="subject"
                  onChange={() => {}}
                  onBlur={() => {}}
                  value={moment(data?.delivery_date).format('DD/MM/YYYY')}
                  autocomplete="delivery_date"
                  disable
                />
                <Input.Text
                  title="Data de retirada"
                  key="pickup_date"
                  id="pickup_date"
                  type="text"
                  placeholder=""
                  data-testid="pickup_date"
                  onChange={() => {}}
                  onBlur={() => {}}
                  value={moment(data?.pickup_date).format('DD/MM/YYYY')}
                  autocomplete="pickup_date"
                  disable
                />
                <Input.Text
                  title="Observações"
                  key="package_info"
                  id="package_info"
                  type="text"
                  placeholder=""
                  data-testid="subject"
                  onChange={() => {}}
                  onBlur={() => {}}
                  value={data?.package_info}
                  autocomplete="package_info"
                />
                <UploadFileModal onSelect={() => {}} />
              </S.Form>
            </S.Content>
          </S.Container>
        </S.Component>
      )}
      {selectedScreen === '2' && (
        <ListResidentModal
          title="Quem retirou o item?"
          onClose={() => setSelectedScreen('1')}
          onSelect={user => {
            setSelectedUser({ resident_name: user.name });
          }}
          actions={() => {
            submit();
          }}
        />
      )}
      {selectedScreen === '3' && (
        <S.Recused
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <h2>Solicitar devolução</h2>
          <S.Options>
            <Select.Action
              id="type"
              label={'Motivo'}
              placeholder="Selecione uma opção"
              onChange={() => {}}
              // value={type}
              options={[]}
            />
            <textarea
              rows={10}
              cols={50}
              placeholder="Conte mais sobre o motivo pelo qual a encomenda está sendo devolvida."
              value={''}
              onChange={() => {}}
            />
          </S.Options>
          <S.Action>
            <button onClick={() => setSelectedScreen('1')}>
              <p>Cancelar</p>
            </button>
            <button onClick={() => {}} className="accept">
              <p>Solicitar</p>
            </button>
          </S.Action>
        </S.Recused>
      )}
    </>
  );
};

export default OrdersPreview;
