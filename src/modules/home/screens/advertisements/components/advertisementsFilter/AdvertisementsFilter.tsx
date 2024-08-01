// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './AdvertisementsFilter.styles';

// Models
import { AdvertisementsFilterProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';

const AdvertisementsFilter = ({
    onClose,
    onSelect,
}: AdvertisementsFilterProps & { onSelect: (type: string, dateStart: string, dateFinish: string) => void }) => {
    const [type, setType] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateFinish, setDateFinish] = useState('');
    const [disabled, setDisabled] = useState(false);

    const published = [
        {
            label: 'Condôminos',
            value: '1',
        },
    ];

    const subject = [
        {
            label: 'Achados e Perdidos',
            value: '1',
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
                            label={'Publicado por'}
                            onChange={handleTypeChange}
                            value={type}
                            options={published}
                        />
                        <Select.Action
                            id="type"
                            label={'Assunto'}
                            onChange={handleTypeChange}
                            value={type}
                            options={subject}
                        />
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

export default AdvertisementsFilter;
