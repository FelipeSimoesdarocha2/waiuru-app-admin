// Next
import Image from 'next/image';

// Assets
import NotificationIcon from './icons/notification.svg';

// Styles
import * as S from './Notification.styles';

// Models
import { NotificationProps } from './models';

const Notification = ({ status }: NotificationProps) => {
  return (
    <S.Component>
      <Image src={NotificationIcon} alt="icon" width={28} height={28} priority />
      {status ? <span /> : null}
    </S.Component>
  );
};

export default Notification;
