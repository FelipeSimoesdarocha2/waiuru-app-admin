// Styles
import * as S from './Publications.styles';

// Models
import { PublicationsProps } from './models';

const Publications = ({ data }: PublicationsProps) => {
    return (
        <S.Component>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                </tr>
            ))}
        </S.Component>
    );
};

export default Publications;
