// Next
import Image from 'next/image';

// React
import React, { useState, useCallback } from 'react';

// Assets
import download from 'assets/icons/download.svg';

// Styles
import * as S from './UploadFileModal.styles';

const UploadFileModal = ({ onSelect }: UploadFileModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const onChangeFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        onSelect(file); // Call onSelect with selectedImage

        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
            if (loadEvent.target && loadEvent.target.result) {
              setSelectedImage(loadEvent.target.result as string);
            }
          };
          reader.readAsDataURL(file);
        }
      }
    },
    [onSelect]
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        onSelect(file); // Call onSelect with selectedImage

        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
            if (loadEvent.target && loadEvent.target.result) {
              setSelectedImage(loadEvent.target.result as string);
            }
          };
          reader.readAsDataURL(file);
        }
      }
    },
    [onSelect]
  );

  return (
    <S.Component onDragOver={onDragOver} onDrop={onDrop}>
      {selectedImage ? (
        <Image src={selectedImage} alt="Imagem selecionada" layout="responsive" width={400} height={500} />
      ) : (
        <S.Container>
          <S.Header>
            <S.Label>Foto(opcional)</S.Label>
            <S.Text>Arraste um arquivo</S.Text>
          </S.Header>
          <S.Content>
            <Image src={download} alt="download" width={21.75} height={27.272} />
            <S.Text>ou</S.Text>
            <input type="file" accept="image/*" onChange={onChangeFile} style={{ display: 'none' }} id="fileInput" />
          </S.Content>
          <S.Footer>
            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
              Tirar uma foto
            </label>
          </S.Footer>
        </S.Container>
      )}
    </S.Component>
  );
};

export default UploadFileModal;
