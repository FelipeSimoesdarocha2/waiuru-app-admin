// Styles
import * as S from './ProgressLine.styles';

// Models
import { ProgressLineProps } from './models';

const ProgressLine = ({ item, onItemClick }: ProgressLineProps) => {
  return (
    <S.Component>
      {item.map((item, index) => (
        <span key={index} className={item.status ? 'active' : undefined} onClick={() => onItemClick(item.id)} />
      ))}
    </S.Component>
  );
};

export default ProgressLine;
