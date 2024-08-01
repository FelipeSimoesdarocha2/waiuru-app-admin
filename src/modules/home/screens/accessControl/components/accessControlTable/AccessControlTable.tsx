// Styles
import * as S from './AccessControlTable.styles';

// Models
import { ListAccessControlProps } from './models';

// @Waiuru-Components
import { Avatar } from '@waiuru/waiuru-ui';

const AccessControlTable = ({ columns, data }: ListAccessControlProps) => {
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
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Avatar src={item.perfilImage} alt={`User ${item.name}`} width={40} height={40} />
                                <p>{item.name}</p>
                            </td>
                            <td>
                                <p>{item.vehicle}</p>
                            </td>
                            <td>
                                <p>{item.local}</p>
                            </td>
                            <td>
                                <p>{item.access_time}</p>
                            </td>
                            <td>
                                <span>
                                    <p>{item.category}</p>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </S.Component>
    );
};

export default AccessControlTable;
