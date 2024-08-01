// Assets
import avatar from 'assets/constants/Avatar1.png';

// Styles
import * as S from './AdvertisementsTable.styles';

// Models
import { AdvertisementsTableProps } from './models';

// @waiuru-Components
import { Avatar } from '@waiuru/waiuru-ui';

const AdvertisementsTable = ({ data, columns }: AdvertisementsTableProps) => {
    return (
        <S.Component>
            <table>
                <thead>
                    <tr>
                        {columns.map(item => (
                            <th key={item.title}>
                                <p>{item.title}</p>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <Avatar src={avatar} alt={`User ${item.name}`} width={40} height={40} />
                                <p>{item.name}</p>
                            </td>
                            <td>
                                <p>{item.description}</p>
                            </td>
                            <td>
                                <p>{item.roles}</p>
                            </td>
                            <td>
                                <p>{item.price}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </S.Component>
    );
};

export default AdvertisementsTable;
