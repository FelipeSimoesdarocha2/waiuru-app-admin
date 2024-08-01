// Styles
import * as S from './LostAndFoundTable.styles';

// Models
import { LostAndFoundTableProps } from './models';

// Constants
import { statusColorMap } from '../../LostAndFound.constants';

const formatDeliveryDateTime = (rawDate: string | number | Date) => {
  const date = new Date(rawDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year}, ${hours}:${minutes}`;
};

const LostAndFoundTable = ({
  data,
  columns,
  selectedItems,
  openModal,
  setSelectedItems,
  handleCheckboxChange,
}: LostAndFoundTableProps) => {
  const handleOpenModal = (index: number) => {
    const itemId = data[index];
    openModal({ isOpen: true, index, itemId });
  };

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
            {columns.map(item => (
              <th key={item.dataIndex}>
                <p>{item.title}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="name_check">
                  <span>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(index)}
                      onChange={e => handleCheckboxChange(e, index)}
                    />
                  </span>
                  <p>{item.name}</p>
                </div>
              </td>
              <td className="status">
                <span style={{ backgroundColor: statusColorMap[item.type] }}>
                  <p>{item.type}</p>
                </span>
              </td>
              <td className="info">
                <button onClick={() => handleOpenModal(index)}>
                  <p>ver informações</p>
                </button>
              </td>
              <td>
                <p>Atualizado em {formatDeliveryDateTime(item.date_found)}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Component>
  );
};

export default LostAndFoundTable;
