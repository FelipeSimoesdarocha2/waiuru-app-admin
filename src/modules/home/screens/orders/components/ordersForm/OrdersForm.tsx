// Styles
import * as S from './OrdersForm.styles';

// Models
import { OrdersFilterProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';
import { UploadFileModal } from 'components/uploadFileModal';

// Hook
import { useOrderForm } from './useOrdersForm';

const OrdersForm = ({ onClose }: OrdersFilterProps) => {
  const { t, formik, disabled, currentScreen, responsible_company, onSubmit, setFile, handleProceedScreen } =
    useOrderForm(onClose);

  return (
    <S.Component>
      <S.Container>
        <S.Header>
          <S.Title>Adicionar nova encomenda</S.Title>
        </S.Header>
        <S.Content>
          {currentScreen.length === 1 && (
            <S.Wrapper>
              <Input.Text
                title="Nome completo do recebedor"
                key="receiver_name"
                id="name"
                type="text"
                placeholder=""
                data-testid="receiver_name"
                onChange={formik.handleChange('receiver_name')}
                onBlur={formik.handleBlur('receiver_name')}
                value={formik.values.receiver_name}
                autocomplete="receiver_name"
              />
              <Input.Text
                title="Nome completo do destinatário"
                key="provider_name"
                id="provider_name"
                type="email"
                placeholder=""
                data-testid="provider_name"
                onChange={formik.handleChange('provider_name')}
                onBlur={formik.handleBlur('provider_name')}
                value={formik.values.provider_name}
                autocomplete="provider_name"
              />
              <Input.Text
                title="Data de recebimento"
                key="delivery_date"
                id="delivery_date"
                type="date"
                placeholder=""
                data-testid="delivery_date"
                onChange={formik.handleChange('delivery_date')}
                onBlur={formik.handleBlur('delivery_date')}
                value={formik.values.delivery_date}
                autocomplete="delivery_date"
              />
              <Input.Text
                title="Hora do recebimento (opcional)"
                key="delivery_hour"
                id="delivery_hour"
                type="time"
                placeholder=""
                data-testid="delivery_hour"
                onChange={formik.handleChange('delivery_hour')}
                onBlur={formik.handleBlur('delivery_hour')}
                value={formik.values.delivery_hour}
                autocomplete="delivery_hour"
              />
            </S.Wrapper>
          )}
          {currentScreen.length === 2 && (
            <S.Wrapper>
              <Input.Text
                title="Responsável pela assinatura"
                key="condominium_id"
                id="condominium_id"
                type="text"
                placeholder=""
                data-testid="condominium_id"
                onChange={formik.handleChange('condominium_id')}
                onBlur={formik.handleBlur('condominium_id')}
                value={formik.values.condominium_id}
                autocomplete="condominium_id"
              />
              <Select.Action
                label={t('Empresa responsável pela entrega')}
                key="package_code"
                id="package_code"
                placeholder="Selecione uma opção"
                data-testid="package_code"
                onChange={formik.handleChange('package_code')}
                value={formik.values.package_code}
                options={responsible_company}
              />
              <textarea
                id="package_info"
                key="package_info"
                value={formik.values.package_info}
                data-testid="package_info"
                onChange={formik.handleChange('package_info')}
                placeholder="Observações (opcional)"
                onBlur={formik.handleBlur('package_info')}
              />
            </S.Wrapper>
          )}
          {currentScreen.length === 3 && (
            <UploadFileModal
              onSelect={file => {
                setFile(file);
              }}
            />
          )}
        </S.Content>
        <S.Actions>
          <Button.Link label={'Cancelar'} onClick={onClose} type="secondary" className="close" />
          <Button.Action
            label={currentScreen.length === 3 ? 'Adicionar' : 'Próximo'}
            onClick={currentScreen.length === 3 ? onSubmit : handleProceedScreen}
            disabled={disabled}
            type="primary"
          />
        </S.Actions>
      </S.Container>
    </S.Component>
  );
};

export default OrdersForm;
