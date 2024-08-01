// Next
import Image from 'next/image';

// Styles
import * as S from './CardRecreationArea.styles';

// Models
import { CardRecreationAreaProps } from './models';

// Button
import { Button } from 'components/button';

const CardRecreationArea = ({ props }: { props: CardRecreationAreaProps }) => {
  const {
    id,
    name,
    type,
    price,
    description,
    specifications,
    roles,
    condominium_id,
    need_to_schedule,
    opening_hours,
    status,
    images,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  } = props;

  return (
    <S.Component>
      <Image src={images} alt="" />
      <S.Content>
        <S.Header>
          <S.User>
            <p>{name}</p>
          </S.User>
          <S.Reserved>
            <p>Reservado {'04/02/2023'}</p>
          </S.Reserved>
        </S.Header>
        <S.Inner>
          <S.Typography>
            <h2>{name}</h2>
            <p>{specifications}</p>
          </S.Typography>
          <p>{`R$${price}`}</p>
        </S.Inner>
        <Button.Action type="primary" label={'Cancelar reserva'} />
      </S.Content>
    </S.Component>
  );
};

export default CardRecreationArea;
