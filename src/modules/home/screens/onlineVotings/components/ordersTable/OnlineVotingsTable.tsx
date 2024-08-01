// Styles
import * as S from './OnlineVotingsTable.styles';

// Models
import { ListOrdersProps } from './models';

// Components
import { Button } from 'components/button';

const formatDeliveryDateTime = (rawDate: string | number | Date) => {
    const date = new Date(rawDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const OnlineVotingsTable = ({ data, selectedItems, setSelectedItems, handleCheckboxChange }: ListOrdersProps) => {
    return (
        <S.Component>
            <div className="head">
                <span>
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
                </span>
            </div>
            {data.map((item, index) => (
                <div key={item.id} className="item">
                    <div className="content">
                        <span>
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(index)}
                                onChange={e => handleCheckboxChange(e, index)}
                            />
                        </span>
                        <div className="typography">
                            <p className="name">{item.name}</p>
                            <p className="description">{item.description}</p>
                            <p className="start_date">
                                {formatDeliveryDateTime(item.start_date)} a {formatDeliveryDateTime(item.end_date)}
                            </p>
                        </div>
                    </div>
                    <div className="actions">
                        <Button.Link label="acompanhar resultado" />
                    </div>
                </div>
            ))}
        </S.Component>
    );
};

export default OnlineVotingsTable;
