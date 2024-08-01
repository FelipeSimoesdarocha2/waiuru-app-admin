// Styles
import * as S from './Cursor.styles';

const Cursor = () => {
    return (
        <S.Component>
            <div id="cursor" className="cursor">
                <div className="cursor-content-wrap">
                    <div className="cursor-content"></div>
                </div>
                <div className="cursor-highlight"></div>
            </div>
        </S.Component>
    );
};

export default Cursor;
