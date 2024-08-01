// Next
import Image from 'next/image';

// React
import React from 'react';

// Assets
import CloseIcon from '@mui/icons-material/Close';

// Styles
import * as S from './ShowDocument.styles';

// Models
import { ShowFileProps } from './models';

import { IconButton } from '@mui/material';

const ShowDocument = ({ url, onClose }: ShowFileProps) => {
  return (
    <S.Modal>
      <S.Wrapper>
        <Image src={url} alt="Imagem selecionada" layout="responsive" width={700} height={700} />
        <S.ContainerClose>
          <IconButton aria-label="delete" color="primary" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </S.ContainerClose>
      </S.Wrapper>
    </S.Modal>
  );
};

export default ShowDocument;
