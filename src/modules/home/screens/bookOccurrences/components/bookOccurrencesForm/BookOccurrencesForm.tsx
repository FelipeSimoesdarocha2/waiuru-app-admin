// Styles
import * as S from './BookOccurrencesForm.styles';

// Models
import { BookOccurrencesFormFilterProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';
import { UploadFileModal } from 'components/uploadFileModal';

// Hook
import { useBookOccurrencesForm } from './useBookOccurrencesForm';

const BookOccurrencesForm = ({ onClose }: BookOccurrencesFormFilterProps) => {
  const { t, formik, disabled, suggestion, currentScreen, onSubmit, setFile, handleProceedScreen } =
    useBookOccurrencesForm(onClose);

  return (
    <S.Component>
      <S.Container>
        <S.Header>
          <S.Title>Adicionar nova ocorrência</S.Title>
        </S.Header>
        <S.Content>
          {currentScreen.length === 1 && (
            <S.Wrapper>
              <Select.Action
                label={t('Sugestão')}
                key="suggestion"
                id="suggestion"
                placeholder=""
                data-testid="suggestion"
                onChange={formik.handleChange('suggestion')}
                value={formik.values.suggestion}
                options={suggestion}
              />
              <Input.Text
                title="Assunto"
                key="subject"
                id="subject"
                type="text"
                placeholder=""
                data-testid="subject"
                onChange={formik.handleChange('subject')}
                onBlur={formik.handleBlur('subject')}
                value={formik.values.subject}
                autocomplete="subject"
              />
              <Input.Text
                title="Local"
                key="local"
                id="local"
                type="text"
                placeholder=""
                data-testid="local"
                onChange={formik.handleChange('local')}
                onBlur={formik.handleBlur('local')}
                value={formik.values.local}
                autocomplete="local"
              />
              <Input.Text
                title="Resumo do que aconteceu"
                key="summary"
                id="summary"
                type="text"
                placeholder=""
                data-testid="summary"
                onChange={formik.handleChange('summary')}
                onBlur={formik.handleBlur('summary')}
                value={formik.values.summary}
                autocomplete="summary"
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
          {currentScreen.length === 3 && (
            <UploadFileModal
              onSelect={images => {
                formik.setFieldValue('images', images);
              }}
            />
          )}
        </S.Content>
        <S.Actions>
          <Button.Link label={'Cancelar'} onClick={onClose} type="secondary" className="close" />
          <Button.Action
            label={currentScreen.length === 2 ? 'Adicionar' : 'Próximo'}
            onClick={currentScreen.length === 2 ? onSubmit : handleProceedScreen}
            disabled={disabled}
            type="primary"
          />
        </S.Actions>
      </S.Container>
    </S.Component>
  );
};

export default BookOccurrencesForm;
