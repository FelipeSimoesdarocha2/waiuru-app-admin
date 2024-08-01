// Next
import Image from 'next/image';

// React
import * as React from 'react';

// Assets
import avatar from './icons/avatar.png';

// Styles
import * as S from './Avatar.styles';

// Models
import { AvatarProps } from './models';

const Avatar = ({ src, alt, width, height }: AvatarProps) => {
  return (
    <S.Component>
      <Image src={src ? src : avatar} alt={alt} width={width} height={height} />
    </S.Component>
  );
};

export default Avatar;
