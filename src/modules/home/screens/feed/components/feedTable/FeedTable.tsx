// Styles
import * as S from './FeedTable.styles';

// Models
import { ListFeedProps } from './models';

const FeedTable = ({ data, selectedItems, setSelectedItems, handleCheckboxChange }: ListFeedProps) => {
    return (
        <S.Component>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                checked={selectedItems.length === data.length}
                                onChange={e => {
                                    if (e.target.checked) {
                                        setSelectedItems(data.map((_, index) => index));
                                    } else {
                                        setSelectedItems([]);
                                    }
                                }}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td className="checkbox_title">
                                <div>
                                    <span>
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.includes(index)}
                                            onChange={e => handleCheckboxChange(e, index)}
                                        />
                                    </span>
                                    <p>{item.title}</p>
                                </div>
                            </td>
                            <td className="type">
                                <span>
                                    <p>Achados e Perdidos</p>
                                </span>
                            </td>
                            <td className="description">
                                <p>{item.description}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <S.Status>
                <p> Você já visualizou todos as postagens do feed.</p>
            </S.Status>
        </S.Component>
    );
};

export default FeedTable;
