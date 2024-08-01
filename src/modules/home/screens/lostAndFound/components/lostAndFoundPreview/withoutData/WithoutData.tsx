// Next
import Image from 'next/image';
import router from 'next/router';

// Assets
import documents_rafiki from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './WithoutData.styles';

const WithoutData = () => {
    return (
        <S.Container>
            <S.Content>
                <Image src={documents_rafiki} alt="icon" />
                <S.Inner>
                    <p>Ainda não há nenhum item.</p>
                    <button onClick={() => router.push('/create/residents')}>
                        <p>Cadastrar item</p>
                    </button>
                </S.Inner>
            </S.Content>
        </S.Container>
    );
};

export default WithoutData;
