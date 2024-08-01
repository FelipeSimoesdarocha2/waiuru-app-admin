// Next
import Image from 'next/image';

// Assets
import avatar from 'assets/constants/Avatar5.png';
import filter from 'assets/icons/filter.svg';

// Styles
import * as S from './ActivitiesTable.styles';

// Models
import { ListActivitiesProps } from './models';

const ActivitiesTable = ({ data, columns }: ListActivitiesProps) => {
    return (
        <S.Component>
            <S.Content>
                <S.Header>
                    <p>Atividade</p>
                    <p>Status</p>
                    <button>
                        <Image src={filter} alt="filter" />
                    </button>
                </S.Header>
                <S.Table>
                    <table>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="person">
                                        <Image width={40} height={40} alt={`User`} src={avatar} />
                                        <p>{item.description}</p>
                                    </td>
                                    <td className='status'>
                                        <div className='wrapper'>
                                            <div className='base'>
                                                <span>1</span>
                                                <p>Atribuído</p>
                                            </div >
                                            <span className='divider' />
                                            <div className='base'>
                                                <span>2</span>
                                                <p>Em execução</p>
                                            </div>
                                            <span className='divider' />
                                            <div className='base'>
                                                <span>3</span>
                                                <p>Concluído</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="action">
                                        <p>ver atividade</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </S.Table>
            </S.Content>
        </S.Component>
    );
};

export default ActivitiesTable;
