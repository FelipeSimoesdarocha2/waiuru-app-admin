// React
import { useState } from 'react';

// Assets
import withoutSvg from 'assets/images/advertisements/withoutSvg.svg';

// Styles
import * as S from './AdvertisementsSide.styles';

// Models
import { AdvertisementsSideProps } from './models';

// Components
import { Input } from 'components/input';
import { WithoutData } from 'components/withoutData';

// Components-Module
import { AdvertisementsCardSide } from '..';

const AdvertisementsSide = ({ data }: AdvertisementsSideProps) => {
    const [selectedItems, setSelectedItems] = useState(false);

    return (
        <S.Component>
            <S.Container>
                <S.Header>
                    <h2>Mudanças pendentes</h2>
                    <S.Options>
                        <Input.Checkbox id={1} onChange={() => setSelectedItems(!selectedItems)} checked={selectedItems} />
                        <p>Aprovar mudanças automaticamente</p>
                    </S.Options>
                </S.Header>
                <S.Content>
                    {data ? (
                        <S.Cards>
                            {data.map((item, index) => (
                                <AdvertisementsCardSide key={index} data={item} />
                            ))}
                        </S.Cards>
                    ) : (
                        <WithoutData title="Não há mudanças pendentes" image={{ src: withoutSvg, alt: '' }} />
                    )}
                </S.Content>
            </S.Container>
        </S.Component>
    );
};

export default AdvertisementsSide;
