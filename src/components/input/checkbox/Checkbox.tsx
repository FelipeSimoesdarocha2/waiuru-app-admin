// Styles
import * as S from './Checkbox.styles';

// Models
import { CheckboxProps } from './models';

const Checkbox = ({ id, label, checked, onChange, className }: CheckboxProps) => {
    const handleOnChange = () => {
        onChange(!checked);
    };

    const idString = id?.toString();

    return (
        <S.Component className={className}>
            <input type="checkbox" id={idString} checked={checked} onChange={handleOnChange} />
            <label htmlFor={idString}>
                <span></span>
            </label>
            <p>{label}</p>
        </S.Component>
    );
};

export default Checkbox;
