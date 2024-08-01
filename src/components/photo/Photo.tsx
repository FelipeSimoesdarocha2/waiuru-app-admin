// Next
import Image from 'next/image';

// React
import React, { useState, useCallback } from 'react';

// Assets
import download from 'assets/icons/download.svg';
import exit from 'assets/icons/exit.svg';

// Styles
import * as S from './Photo.styles';

// Models
import { UploadFileModalProps } from './models';

// Components
import { Button } from 'components/button';

const Photo = ({ onClose, onSelect }: UploadFileModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const onChangeFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        onSelect(file);
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
    <S.Modal>
      <S.Wrapper>
        <S.Hero>
          <h2>Adicionar foto</h2>
          <button onClick={onClose}>
            <Image src={exit} alt=" vector" />
          </button>
        </S.Hero>
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
                <input
                  type="file"
                  accept="image/*"
                  onChange={onChangeFile}
                  style={{ display: 'none' }}
                  id="fileInput"
                />
              </S.Content>
              <S.Footer>
                <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                  Tirar uma foto
                </label>
              </S.Footer>
            </S.Container>
          )}
        </S.Component>
        <S.Actions>
          <Button.Action
            label={selectedImage ? 'Remover foto' : 'Sair'}
            onClick={() => {
              if (selectedImage) {
                setSelectedImage('');
              } else {
                onClose && onClose();
              }
            }}
            type="ghost"
            className="close"
          />
          {selectedImage && (
            <Button.Action
              label={'Escolher foto'}
              onClick={() => onClose && onClose()}
              type="primary"
              className="close"
            />
          )}
        </S.Actions>
      </S.Wrapper>
    </S.Modal>
  );
};

export default Photo;
