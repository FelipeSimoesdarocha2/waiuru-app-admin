// Next
import Image, { ImageProps, StaticImageData } from 'next/image';
import router from 'next/router';

// React
import { useState } from 'react';

// Assets
import avatar from 'assets/constants/Avatar5.png';

// Styles
import * as S from './EmployeesTable.styles';

// Models
import { ListEmployeeProps } from './models';

const EmployeesTable = ({ data }: ListEmployeeProps) => {
    return (
        <S.Component>
            <S.Content>
                <S.Header>
                    <span />
                    <h2>Quadro de Funcionários</h2>
                    <button></button>
                </S.Header>
                <S.Table>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <S.Person>
                                    <ImageWithFallback
                                        fallbackSrc={avatar}
                                        width={40}
                                        height={40}
                                        alt={`User ${item.name}`}
                                        src={item.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url ?? avatar}
                                    />
                                    <p>{item.name}</p>
                                </S.Person>
                                <S.Action>
                                    <button onClick={() => router.push(`/vizualize/employees/${item.id}`)}>
                                        <p>ver perfil</p>
                                    </button>
                                </S.Action>
                            </tr>
                        ))}
                    </tbody>
                </S.Table>
            </S.Content>
        </S.Component>
    );
};

// ImageWithFallback Component
interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
    fallbackSrc: string | StaticImageData;
    src: string | StaticImageData;
}

const ImageWithFallback = ({ src, fallbackSrc, ...rest }: ImageWithFallbackProps) => {
    const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

    return <Image {...rest} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} />;
};

export default EmployeesTable;
