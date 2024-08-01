// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './LostAndFoundFilter.styles';

// Models
import { LostAndFoundFilterProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';

const LostAndFoundFilter = ({
  onClose,
  onSelect,
  type: typeProp,
  dateStart: dateStartProp,
  dateFinish: dateFinishProp,
}: LostAndFoundFilterProps & { onSelect: (type: string, dateStart: string, dateFinish: string) => void }) => {
  const [disabled, setDisabled] = useState(false);
  const [type, setType] = useState(typeProp ?? '');
  const [dateStart, setDateStart] = useState(dateStartProp ?? '');
  const [dateFinish, setDateFinish] = useState(dateFinishProp ?? '');

  const status = [
    {
      label: 'Achado',
      value: 'Lost',
    },
    {
      label: 'Perdido',
      value: 'Found',
    },
    {
      label: 'Resgatado',
      value: 'Redeemed',
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
            <Select.Action id="type" label={'Status'} onChange={handleTypeChange} value={type} options={status} />
          </S.Select>
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

export default LostAndFoundFilter;
