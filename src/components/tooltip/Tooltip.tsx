// Next
import Image from 'next/image';

// Styles
import * as S from './Tooltip.styles';

// Models
import { TooltipProps } from './models';

const Tooltip = ({ img, label }: TooltipProps) => {
    return (
        <S.Component>
            <Image src={img.src} alt={`status:${img.alt}`} width={20} height={20} priority draggable={false} />
            <span>
                <p>{label}</p>
            </span>
        </S.Component>
    );
};

export default Tooltip;
