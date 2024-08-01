// Styles
import * as S from './SettingsTable.styles';

// Models
import { SettingsTableProps } from './models';

// @waiuru-Components
import { Avatar } from '@waiuru/waiuru-ui';

const SettingsTable = ({ data }: SettingsTableProps) => {
    return (
        <S.Component>
            <div>
                <p>Funcionários do setor selecionado</p>
            </div>
            <table>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Avatar src={item.perfilImage} alt={`User ${item.name}`} width={40} height={40} />
                                <p>{item.name}</p>
                            </td>
                            <td>
                                <button>
                                    <p>Remover</p>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <button>
                                <p>ADICIONAR NOVO FUNCIONÁRIO</p>
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </S.Component>
    );
};

export default SettingsTable;
