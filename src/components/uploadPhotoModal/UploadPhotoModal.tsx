// Next
import Image from 'next/image';

// Icons
import banner from './icons/banner.svg';

// Styles
import * as S from './UploadPhotoModal.styles';

// Models
import { UploadPhotoModalProps } from './models';

const UploadPhotoModal = ({ title, subtitle, image, onClick }: UploadPhotoModalProps) => {
    return (
        <S.Component onClick={onClick}>
            <div className="typography">
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
            <Image src={image.src} className="image" width={image.width} alt="image" />
            <Image src={banner} alt="decore" className="decore" />
        </S.Component>
    );
};

export default UploadPhotoModal;
