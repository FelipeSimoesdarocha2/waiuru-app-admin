// Next
import Image from 'next/image';

// Styles
import * as S from './WithoutData.styles';

// Models
import { WithoutDataProps } from './models';

const WithoutData = ({ title, action, image }: WithoutDataProps) => {
    return (
        <S.Component>
            <S.Container>
                <Image src={image.src} alt={image.alt} />
                <S.Inner>
                    <S.Title>{title}</S.Title>
                    {action && (
                        <S.Button onClick={action.onChange}>
                            <p>{action.label}</p>
                        </S.Button>
                    )}
                </S.Inner>
            </S.Container>
        </S.Component>
    );
};

export default WithoutData;
