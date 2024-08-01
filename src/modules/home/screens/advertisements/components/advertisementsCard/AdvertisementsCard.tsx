// Next
import Image from 'next/image';

// Assets
import avatar from 'assets/constants/Avatar1.png';

// Styles
import * as S from './AdvertisementsCard.styles';

// Models
import { AdvertisementsCardProps } from './models';

// Components
import { Button } from 'components/button';

const AdvertisementsCard = ({ data }: AdvertisementsCardProps) => {
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
                            <span />
                            <p>Check out</p>
                        </S.Subject>
                        <S.Inner>
                            <S.Space>
                                <S.Wrapper>
                                    <S.Label>Dia</S.Label>
                                    <S.Value>23 de Setembro</S.Value>
                                </S.Wrapper>
                            </S.Space>
                            <S.Wrapper>
                                <S.Label>Horário</S.Label>
                                <S.Value>11:00</S.Value>
                            </S.Wrapper>
                        </S.Inner>
                    </S.Outer>
                    <S.Outer>
                        <S.Subject>
                            <span />
                            <p>Arrival</p>
                        </S.Subject>
                        <S.Inner>
                            <S.Space>
                                <S.Wrapper>
                                    <S.Label>Dia</S.Label>
                                    <S.Value>26 de Setembro</S.Value>
                                </S.Wrapper>
                            </S.Space>
                            <S.Wrapper>
                                <S.Label>Horário</S.Label>
                                <S.Value>11:00</S.Value>
                            </S.Wrapper>
                        </S.Inner>
                    </S.Outer>
                    <S.Outer>
                        <S.Status>
                            <S.Wrapper>
                                <S.Label>Elevator</S.Label>
                                <S.Value>Yes</S.Value>
                            </S.Wrapper>
                            <S.Price>
                                <p>R$200,00</p>
                            </S.Price>
                        </S.Status>
                    </S.Outer>
                </S.Content>
                <S.Actions>
                    <Button.Link type="primary" label="cancelar mudança" onClick={() => { }} className="btn" />
                </S.Actions>
            </S.Container>
        </S.Component>
    );
};

export default AdvertisementsCard;
