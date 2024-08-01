// Styles
import * as S from './LostAndFoundForm.styles';

// Models
import { lostAndFoundFormProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';
import { UploadFileModal } from 'components/uploadFileModal';

// Hook
import { useLostAndFoundForm } from './useLostAndFoundForm';

const LostAndFoundForm = ({ onClose }: lostAndFoundFormProps) => {
  const { t, formik, disabled, currentScreen, status, onSubmit, setFile, handleProceedScreen } = useLostAndFoundForm();

  return (
    <S.Component>
      <S.Container>
        <S.Header>
          <S.Title>Adicionar novo item</S.Title>
        </S.Header>
        <S.Content>
          {currentScreen.length === 1 && (
            <S.Wrapper>
              <Select.Action
                label={t('Status do item')}
                key="status"
                id="status"
                placeholder="Selecione uma opção"
                data-testid="status"
                onChange={formik.handleChange('package_code')}
                value={formik.values.type}
                options={status}
              />
              <Input.Text
                title="Nome do morador que reportou"
                key="provider_name"
                id="provider_name"
                type="email"
                placeholder=""
                data-testid="provider_name"
                onChange={formik.handleChange('provider_name')}
                onBlur={formik.handleBlur('provider_name')}
                value={formik.values.user_id_found}
                autocomplete="provider_name"
              />
              <Input.Text
                title="Nº do documento"
                key="delivery_date"
                id="delivery_date"
                placeholder=""
                data-testid="delivery_date"
                onChange={formik.handleChange('delivery_date')}
                onBlur={formik.handleBlur('delivery_date')}
                value={formik.values.location_found}
                autocomplete="delivery_date"
              />
              <Input.Text
                title="Descrição"
                key="delivery_hour"
                id="delivery_hour"
                placeholder=""
                data-testid="delivery_hour"
                onChange={formik.handleChange('delivery_hour')}
                onBlur={formik.handleBlur('delivery_hour')}
                value={formik.values.description}
                autocomplete="delivery_hour"
              />
            </S.Wrapper>
          )}
          {currentScreen.length === 2 && (
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

export default LostAndFoundForm;
