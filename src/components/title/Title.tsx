// React
import * as React from 'react';

// Styles
import * as S from './Title.styles';

// Models
import { TitleProps } from './models';

const Title = ({ name, size }: TitleProps) => {
  return <S.Component size={size}>{name}</S.Component>;
};

export default Title;
