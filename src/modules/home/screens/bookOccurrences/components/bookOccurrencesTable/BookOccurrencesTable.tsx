// Styles
import * as S from './BookOccurrencesTable.styles';

// Models
import { ListBookOccurrencesProps } from './models';

// Constants
import { statusColorMap } from '../../BookOccurrences.constants';

import moment from 'moment';

const BookOccurrencesTable = ({
  data,
  columns,
  selectedItems,
  openModal,
  setSelectedItems,
  handleCheckboxChange,
}: ListBookOccurrencesProps) => {
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
            <tr key={index} onClick={() => handleOpenModal(index)}>
              <td>
                <div>
                  <span>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(index)}
                      onChange={e => handleCheckboxChange(e, index)}
                    />
                  </span>
                  <p>{item.incident}</p>
                </div>
              </td>
              <td>
                <div>
                  <div>
                    <span style={{ backgroundColor: statusColorMap[item.status] }}>
                      <p>{item.status}</p>
                    </span>
                  </div>
                  <p>Julia Caldas, Torre A </p>
                  <div>
                    <p> {moment(item.date).format('DD/MM/YYYY')}</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Component>
  );
};

export default BookOccurrencesTable;
