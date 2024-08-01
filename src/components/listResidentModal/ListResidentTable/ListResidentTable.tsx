// React
import * as React from 'react';

// Styles
import * as S from './ListResidentTable.styles';

// Models
import { DataItemTableResidents } from 'models';

// @Waiuru-Components
import { Avatar } from '@waiuru/waiuru-ui';

interface ListResidentTableProps {
  data: DataItemTableResidents[];
  onSelect: (user: DataItemTableResidents) => void;
}

const ListResidentTable = ({ data, onSelect }: ListResidentTableProps) => {
  const [selectedItem, setSelectedItem] = React.useState<DataItemTableResidents | null>(null);

  const handleSelect = (item: DataItemTableResidents) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <S.Component>
      <table>
        <tbody>
          {selectedItem ? (
            <tr>
              <td>
                <Avatar src={selectedItem.perfilImage} alt={`User ${selectedItem.name}`} width={40} height={40} />
                <p>{selectedItem.name}</p>
              </td>
              <td>
                <button onClick={() => setSelectedItem(null)}>
                  <p>LIMPAR SELEÇÃO</p>
                </button>
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Avatar src={item.perfilImage} alt={`User ${item.name}`} width={40} height={40} />
                  <p>{item.name}</p>
                </td>
                <td>
                  <button onClick={() => handleSelect(item)}>
                    <p>SELECIONAR</p>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </S.Component>
  );
};

export default ListResidentTable;
