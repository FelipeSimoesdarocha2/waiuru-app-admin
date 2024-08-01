// React
import * as React from 'react';

// Styles
import * as S from './ListResidentTable.styles';

// Models
import { DataItemTableResidents } from 'models';

import { Avatar } from '@waiuru/waiuru-ui';

interface ListResidentTableProps {
  data: DataItemTableResidents[];
  onSelect: (id: string, resident_name: string) => void;
}

const ListResidentTable = ({ data, onSelect }: ListResidentTableProps) => {
  return (
    <S.Component>
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <Avatar src={item.perfilImage} alt={`User ${item.name}`} width={40} height={40} />
                <p>{item.name}</p>
              </td>
              <td>
                <button onClick={() => onSelect(item.id.toString(), item.name)}>
                  <p>SELECIONAR</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Component>
  );
};

export default ListResidentTable;
