// Next
import dynamic from 'next/dynamic';
import Image from 'next/image';

// React
import React from 'react';

// Assets
import { WaiuruHeadDefault } from 'assets/lottie';

// Styles
import * as S from './Action.styles';

// Models
import { ActionProps } from './models';

// Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Action = ({ src, type, label, loading, disabled, className, onClick }: ActionProps) => {
  return (
    <S.Component onClick={onClick} disabled={disabled || loading} className={`${[type]} ${loading} ${className} `}>
      {loading ? (
        <Lottie loop={true} autoPlay={true} animationData={WaiuruHeadDefault} className="lottie" />
      ) : (
        <>
          <p>{label}</p>
          {src && <Image src={src} alt="img" width={24} height={24} priority />}
        </>
      )}
    </S.Component>
  );
};

export default Action;
