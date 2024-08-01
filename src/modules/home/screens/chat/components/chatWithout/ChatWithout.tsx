// Next
import Image from 'next/image';

// Styles
import * as S from './ChatWithout.styles';

// Models
import { WithoutChatProps } from './models';

import useTranslations from 'i18n';

const ChatWithout = ({ name, src }: WithoutChatProps) => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <figure>
          <Image src={src} alt="icon" />
        </figure>
        <div>
          <h2>{name}</h2>
          <p>{t('send-and-receive-messages-from-employees-condominium-owners-and-more-easy-access-easy-management')}</p>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default ChatWithout;
