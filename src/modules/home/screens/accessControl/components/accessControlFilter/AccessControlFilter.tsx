// React
import { useState } from 'react';

// Styles
import * as S from './AccessControlFilter.styles';

// Models
import { AccessControlFilterProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';

const AccessControlFilter = ({
    onClose,
    onSelect,
}: AccessControlFilterProps & { onSelect: (type: string, dateStart: string, dateFinish: string) => void }) => {
    const [category, setCategory] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [hour, setHour] = useState('');
    const [startDate, setStartDate] = useState('');
    const [finishDate, setFinishDate] = useState('');

    const category_data = [
        {
            label: 'Todos',
            value: '1',
        },
        {
            label: 'Morador',
            value: '1',
        },
        {
            label: 'Prestador de Serviços',
            value: '1',
        },
        {
            label: 'Visitante',
            value: '1',
        },
        {
            label: 'Visitante Temporário',
            value: '1',
        },
        {
            label: 'Funcionário',
            value: '1',
        },
    ];

    const vehicle_data = [
        {
            label: 'Carro',
            value: '1',
        },
        {
            label: 'Moto',
            value: '1',
        },
    ];

    const handleFilterClick = () => {
        onSelect(category, vehicle, hour);
        onClose?.();
    };

    return (
        <S.Component>
            <S.Container>
                <S.Header>
                    <S.Title>Filtrar por:</S.Title>
                </S.Header>
                <S.Content>
                    <S.Col>
                        <Select.Action
                            id="type"
                            label={'Categoria'}
                            onChange={setCategory}
                            value={category}
                            options={category_data}
                        />
                        <Select.Action id="type" label={'Veículo'} onChange={setVehicle} value={vehicle} options={vehicle_data} />
                        <Input.Text title="Hora" id="time" type="time" onChange={setHour} value={hour} />
                    </S.Col>

                    <S.Date>
                        <Input.Text title="De:" id="startDate" type="date" onChange={setStartDate} value={startDate} />
                        <Input.Text title="Até:" id="finishDate" type="date" onChange={setFinishDate} value={finishDate} />
                    </S.Date>
                </S.Content>
                <S.Actions>
                    <Button.Link label={'Cancelar'} onClick={onClose} type="secondary" className="close" />
                    <Button.Action label={'Filtrar'} onClick={handleFilterClick} type="primary" />
                </S.Actions>
            </S.Container>
        </S.Component>
    );
};

export default AccessControlFilter;
