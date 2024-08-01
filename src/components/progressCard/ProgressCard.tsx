// Next
import Image from 'next/image';

// Images
import bannerBotton from './images/bannerBotton.svg';
import bannerTop from './images/bannerTop.svg';
import logo from './images/logo.svg';

// Styles
import * as S from './ProgressCard.styles';

// Models
import { ProgressCardProps } from './models';

const ProgressCard = ({ src, item, label, className }: ProgressCardProps) => {
    return (
        <S.Component className={className}>
            <Image src={src} alt="card_image" className="card_image" priority />
            <Image src={bannerTop} alt="image" className="bannerTop" priority />
            <Image src={bannerBotton} alt="image" className="bannerBotton" priority />
            <Image src={logo} alt="image" className="logo" priority />

            <h2>{label}</h2>
            <S.Content>
                {item.map((item, index) => (
                    <div key={index}>
                        <div>
                            <figure>
                                <span className={item.status ? 'active' : undefined} />
                            </figure>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </S.Content>
        </S.Component>
    );
};

export default ProgressCard;
