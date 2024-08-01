// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './OnlineVotingsFilter.styles';

// Models
import { OnlineVotingsFilterProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';

const OnlineVotingsFilter = ({
    onClose,
    onSelect,
}: OnlineVotingsFilterProps & { onSelect: (type: string, dateStart: string, dateFinish: string) => void }) => {
    const [disabled, setDisabled] = useState(false);
    const [owner, setOwner] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateFinish, setDateFinish] = useState('');

    const owners = [
        {
            label: 'De condôminos',
            value: '1',
        },
    ];

    const handleTypeChange = (value: string) => {
        setOwner(value);
    };

    const handleDateStartChange = (value: string) => {
        setDateStart(value);
    };

    const handleDateFinishChange = (value: string) => {
        setDateFinish(value);
    };

    useEffect(() => {
        if (!owner && !dateStart && !dateFinish) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [dateFinish, dateStart, owner]);

    const handleFilterClick = () => {
        onSelect(owner, dateStart, dateFinish);
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
                            label={'Proprietário'}
                            onChange={handleTypeChange}
                            value={owner}
                            options={owners}
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

export default OnlineVotingsFilter;
