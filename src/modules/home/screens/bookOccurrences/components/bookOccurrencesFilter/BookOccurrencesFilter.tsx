// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './BookOccurrencesFilter.styles';

// Components
import { BookOccurrencesFilterProps } from './models';
import { CardServiceTypeOccurrence } from 'models';

import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';

const BookOccurrencesFilter = ({
  onClose,
  onSelect,
  type: typeProp,
  dateStart: dateStartProp,
  dateFinish: dateFinishProp,
}: BookOccurrencesFilterProps & { onSelect: (type: string, dateStart: string, dateFinish: string) => void }) => {
  const [disabled, setDisabled] = useState(false);
  const [type, setType] = useState(typeProp ?? '');
  const [dateStart, setDateStart] = useState(dateStartProp ?? '');
  const [dateFinish, setDateFinish] = useState(dateFinishProp ?? '');

  const status = [
    {
      label: 'Sugestão',
      value: CardServiceTypeOccurrence.SUGGESTION,
    },
    {
      label: 'Reclamação',
      value: CardServiceTypeOccurrence.COMPLAINT,
    },
    {
      label: 'Observação',
      value: CardServiceTypeOccurrence.OBSERVATION,
    },
  ];

  const handleTypeChange = (value: string) => {
    setType(value);
  };

  const handleDateStartChange = (value: string) => {
    setDateStart(value);
  };

  const handleDateFinishChange = (value: string) => {
    setDateFinish(value);
  };

  useEffect(() => {
    if (!type && !dateStart && !dateFinish) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [dateFinish, dateStart, type]);

  const handleFilterClick = () => {
    onSelect(type, dateStart, dateFinish);
    onClose?.();
  };

  return (
    <S.Component>
      <S.Container>
        <S.Header>
          <S.Title>Filtrar por:</S.Title>
        </S.Header>
        <S.Content>
          <S.Select>
            <Select.Action
              id="type"
              label={'Status'}
              placeholder="Selecione uma opção"
              onChange={handleTypeChange}
              value={type}
              options={status}
            />
          </S.Select>
          {/* <Input.Text
                        title="Assunto"
                        id="subject"
                        type="text"
                        onChange={handleSubjectChange}
                        value={subject}
                    /> */}
          <S.Date>
            <Input.Text title="De:" id="date_start" type="date" onChange={handleDateStartChange} value={dateStart} />
            <Input.Text
              title="Até:"
              id="date_finish"
              type="date"
              onChange={handleDateFinishChange}
              value={dateFinish}
            />
          </S.Date>
        </S.Content>
        <S.Actions>
          <Button.Link label={'Cancelar'} onClick={onClose} type="secondary" className="close" />
          <Button.Action label={'Filtrar'} onClick={handleFilterClick} disabled={disabled} type="primary" />
        </S.Actions>
      </S.Container>
    </S.Component>
  );
};

export default BookOccurrencesFilter;
