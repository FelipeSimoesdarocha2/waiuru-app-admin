// Next
import Image from 'next/image';

// Styles
import * as S from './ChatNotFound.styles';

// Models
import { ChatNotFoundProps } from './models';

const ChatNotFound = ({ name, src }: ChatNotFoundProps) => {
    return (
        <S.Container>
            <S.Content>
                <figure>
                    <Image src={src ? src : ''} alt="icon" />
                </figure>
                <div>
                    <p>{name}</p>
                    <button>
                        <p>Tentar novamente</p>
                    </button>
                </div>
            </S.Content>
        </S.Container>
    );
};

export default ChatNotFound;
