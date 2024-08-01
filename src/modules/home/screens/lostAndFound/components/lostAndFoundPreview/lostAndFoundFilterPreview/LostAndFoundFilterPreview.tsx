// React
import { useState, useEffect } from 'react';

// Models
import { lostAndFoundFilterPreviewProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';

// Styles
import * as S from './Styles';

const LostAndFoundFilterPreview = ({
    onPush,
    onClose,
    onSelect,
}: lostAndFoundFilterPreviewProps & { onSelect: (type: string, dateFinish: string) => void }) => {
    const [tower, setTower] = useState('');
    const [apartment, setApartment] = useState('');
    const [disabled, setDisabled] = useState(false);

    const pushTower = (value: string) => {
        setTower(value);
    };

    const pushApartment = (value: string) => {
        setApartment(value);
    };

    const submit = () => {
        onPush?.();
    };

    useEffect(() => {
        onSelect(tower, apartment);
    }, [onSelect, apartment, tower]);

    useEffect(() => {
        if (!tower || !apartment) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [apartment, tower]);

    return (
        <S.Container
            onClick={event => {
                event.stopPropagation();
            }}
        >
            <S.Header>
                <S.Title>Confirmação de item achado</S.Title>
            </S.Header>
            <S.Content>
                <Input.Text title="Torre do morador" id="tower" type="text" onChange={pushTower} value={tower} />
                <Input.Text
                    title="Apartamento (unidade)"
                    id="apartment"
                    type="text"
                    onChange={pushApartment}
                    value={apartment}
                />
            </S.Content>
            <S.Actions>
                <Button.Link label={'Cancelar'} onClick={onClose} type="secondary" className="close" />
                <Button.Action label={'Buscar'} onClick={submit} disabled={disabled} type="primary" />
            </S.Actions>
        </S.Container>
    );
};

export default LostAndFoundFilterPreview;
