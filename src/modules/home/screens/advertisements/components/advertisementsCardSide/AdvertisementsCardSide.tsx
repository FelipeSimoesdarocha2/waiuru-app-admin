// Next
import Image from 'next/image';

// Assets
import avatar from 'assets/constants/Avatar1.png';

// Styles
import * as S from './AdvertisementsCardSide.styles';

// Modal
import { AdvertisementsCardSideProps } from './models';

// Components
import { Button } from 'components/button';

const AdvertisementsCardSide = ({ data }: AdvertisementsCardSideProps) => {
    return (
        <S.Component>
            <S.Container>
                <S.Header>
                    <Image src={avatar} alt="" width={30} />
                    <S.Name>{data.name}</S.Name>
                </S.Header>

                <S.Content>
                    <S.Outer>
                        <S.Subject>
                            <p>Check out</p>
                        </S.Subject>
                        <S.Value>Sep 23</S.Value>
                        <S.Value>11:00</S.Value>
                    </S.Outer>

                    <S.Outer>
                        <S.Subject>
                            <p>Arrival</p>
                        </S.Subject>
                        <S.Value>Sep 23</S.Value>
                        <S.Value>11:00</S.Value>
                    </S.Outer>
                    <S.Outer>
                        <S.Subject>
                            <p>Arrival</p>
                        </S.Subject>
                        <S.Value>Yes</S.Value>
                        <S.Price>
                            <p>R$200,00</p>
                        </S.Price>
                    </S.Outer>
                </S.Content>
                <S.Actions>
                    <Button.Link type="primary" label="recusar" onClick={() => { }} className="btn" />
                    <button onClick={() => { }} className="accept">
                        <p>Aceitar</p>
                    </button>
                </S.Actions>
            </S.Container>
        </S.Component>
    );
};

export default AdvertisementsCardSide;
