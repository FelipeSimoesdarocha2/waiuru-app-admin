// Next
import Image from 'next/image';

// React
import { useEffect, useState } from 'react';

import menu from './icons/menu.svg';
import CloseIcon from '@mui/icons-material/Close';

import * as S from './TextareaChat.styles';

// Models
import { TextAreaProps } from './models';
import { Message } from 'models';

import useTranslation from 'i18n';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const TextareaChat = ({
  id,
  value,
  type,
  className,
  placeholder,
  file,
  respondMessage,
  onBlur,
  onChange,
  onSend,
  onOpenDocuments,
  onCleandTextAndFile,
  setRespondMessage,
}: TextAreaProps) => {
  const t = useTranslation();
  const [isFocused, setIsFocused] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target?.value ?? '';
    onChange(value);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  const onRemoveRespondMessage = () => {
    setRespondMessage && setRespondMessage(null);
  };

  const isMessageImage = (messageToTest: Message) => {
    return messageToTest.content_type === 'application/image';
  };

  if (respondMessage) {
    return (
      <>
        <S.ContainerRespond>
          <S.ContainerMessageRespond>
            {isMessageImage(respondMessage) ? (
              <S.ImageComponent>
                <Image src={respondMessage.message} width={150} height={150} alt="image" />
              </S.ImageComponent>
            ) : (
              <S.Message>{respondMessage.message}</S.Message>
            )}
            {/* <S.Message>{respondMessage?.message}</S.Message> */}
            <IconButton aria-label="delete" color="primary" onClick={onRemoveRespondMessage}>
              <CloseIcon />
            </IconButton>
          </S.ContainerMessageRespond>
          {file && (
            <S.ImageContainer>
              <S.ImageComponent>
                <Image src={imageSrc} width={150} height={150} alt="image" />
              </S.ImageComponent>
            </S.ImageContainer>
          )}
          <S.Component className={`${isFocused ? 'focused' : null} `}>
            {file ? (
              <textarea
                id={id}
                key={id}
                value={value}
                data-testid={id}
                className={className}
                disabled
                placeholder={'Enviar image ou documento'}
              />
            ) : (
              <textarea
                id={id}
                key={id}
                value={value}
                data-testid={id}
                className={className}
                onChange={onChangeValue}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={event => {
                  onBlur && onBlur(event);
                  setIsFocused(false);
                }}
              />
            )}

            {type === 'chat' && (
              <div>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={onOpenDocuments}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      onOpenDocuments && onOpenDocuments();
                    }}
                  >
                    Adicionar Documento
                  </MenuItem>
                </Menu>
                {/* <IconButton aria-label="delete" color="primary" onClick={onOpenEmoji}>
                  <Image src={emoji} alt="icon" />
                </IconButton> */}
                <IconButton aria-label="delete" color="primary" onClick={handleClick}>
                  <Image src={menu} alt="icon" />
                </IconButton>
                <div>
                  <S.CleanButton className="test" id="test" onClick={onCleandTextAndFile}>
                    <p>{t('clean')}</p>
                  </S.CleanButton>
                  <S.Spacer />
                  <button onClick={onSend}>
                    <p>{t('send')}</p>
                  </button>
                </div>
              </div>
            )}
          </S.Component>
        </S.ContainerRespond>
      </>
    );
  }

  if (file) {
    return (
      <>
        <S.ContainerFile className={`${isFocused ? 'focused' : null} `}>
          <S.ImageContainer>
            <S.ImageComponent>
              <Image src={imageSrc} width={150} height={150} alt="image" />
            </S.ImageComponent>
            <S.CloseButton>
              <IconButton aria-label="delete" color="primary" onClick={onCleandTextAndFile}>
                <CloseIcon />
              </IconButton>
            </S.CloseButton>
          </S.ImageContainer>
          <S.ComponentFile>
            <textarea
              id={id}
              key={id}
              value={value}
              data-testid={id}
              className={className}
              placeholder={'Enviar image ou documento'}
            />
            {type === 'chat' && (
              <div>
                {/* <IconButton aria-label="delete" color="primary" onClick={onOpenEmoji}>
                  <Image src={emoji} alt="icon" />
                </IconButton> */}
                <IconButton aria-label="delete" color="primary" onClick={onOpenDocuments}>
                  <Image src={menu} alt="icon" />
                </IconButton>
                <div>
                  <S.CleanButton className="test" id="test" onClick={onCleandTextAndFile}>
                    <p>{t('clean')}</p>
                  </S.CleanButton>
                  <S.Spacer />
                  <button onClick={onSend}>
                    <p>{t('send')}</p>
                  </button>
                </div>
              </div>
            )}
          </S.ComponentFile>
        </S.ContainerFile>
      </>
    );
  }

  return (
    <>
      <S.Component className={`${isFocused ? 'focused' : null} `}>
        <textarea
          id={id}
          key={id}
          value={value}
          data-testid={id}
          className={className}
          onChange={onChangeValue}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={event => {
            onBlur && onBlur(event);
            setIsFocused(false);
          }}
        />
        {type === 'chat' && (
          <div>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={onOpenDocuments}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  onOpenDocuments && onOpenDocuments();
                }}
              >
                Adicionar Documento
              </MenuItem>
            </Menu>
            {/* <IconButton aria-label="delete" color="primary" onClick={onOpenEmoji}>
              <Image src={emoji} alt="icon" />
            </IconButton> */}
            <IconButton aria-label="delete" color="primary" onClick={handleClick}>
              <Image src={menu} alt="icon" />
            </IconButton>
            <div>
              <button onClick={onSend}>
                <p>{t('send')}</p>
              </button>
            </div>
          </div>
        )}
      </S.Component>
    </>
  );
};

export default TextareaChat;
