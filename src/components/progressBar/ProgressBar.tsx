// Styles
import * as S from './ProgressBar.styles';

// Models
import { ProgressBarProps } from './models';

const ProgressBar = ({ value }: ProgressBarProps) => {
    return (
        <S.Component width={value}>
            <div>
                <span />
            </div>
            <p>{value ? value : 0}%</p>
        </S.Component>
    );
};

export default ProgressBar;
