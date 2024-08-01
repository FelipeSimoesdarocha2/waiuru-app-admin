// Styles
import * as S from './ActivitiesForm.styles';

// Models
import { OrdersFilterProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';

// Hook
import { useActivitiesForm } from './useActivitiesForm';

const ActivitiesForm = ({ onClose }: OrdersFilterProps) => {
  const { t, formik, onSubmit } = useActivitiesForm(onClose);

  return (
    <S.Component>
      <S.Container>
        <S.Header>
          <S.Title>Cadastrar nova atividade</S.Title>
        </S.Header>
        <S.Content>
          <S.Wrapper>
            <Input.Text
              title="Nome da atividade"
              key="task"
              id="task"
              type="text"
              placeholder=""
              data-testid="task"
              onChange={formik.handleChange('task')}
              onBlur={formik.handleBlur('task')}
              value={formik.values.task}
              autocomplete="task"
            />
            <Input.Text
              title="Descrição"
              key="description"
              id="description"
              type="text"
              placeholder=""
              data-testid="description"
              onChange={formik.handleChange('description')}
              onBlur={formik.handleBlur('description')}
              value={formik.values.description}
              autocomplete="description"
            />
            <S.Date>
              <Input.Text
                title="De:"
                id="startDate"
                type="date"
                onChange={formik.handleChange('startDate')}
                value={formik.values.startDate}
              />
              <Input.Text
                title="Até:"
                id="endedDate"
                type="date"
                onChange={formik.handleChange('endedDate')}
                value={formik.values.endedDate}
              />
            </S.Date>
          </S.Wrapper>
          <S.Title> Atribuir tarefa a funcionário</S.Title>
        </S.Content>
        <S.Actions>
          <Button.Link label={'Cancelar'} onClick={onClose} type="secondary" className="close" />
          <Button.Action label={'Cadastrar atividade'} onClick={onSubmit} type="primary" />
        </S.Actions>
      </S.Container>
    </S.Component>
  );
};

export default ActivitiesForm;
