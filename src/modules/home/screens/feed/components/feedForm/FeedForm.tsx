// Next
import Image from 'next/image';

// Assets
import banner from 'assets/images/feed/form/banner.svg';

// Styles
import * as S from './FeedForm.styles';

// Models
import { FeedFormProps } from './models';

// @Waiuru-Components
import { Input, Title } from '@waiuru/waiuru-ui';

// Components
import { Button } from 'components/button';

// Hook
import { useFeedForm } from './useFeedForm';

const FeedForm = ({ onClose }: FeedFormProps) => {
    const { t, formik } = useFeedForm();

    return (
        <S.Container>
            <S.Header>
                <S.Wrapper>
                    <Title name="Feed" size="18px" />
                    <S.Actions>
                        <Button.Link onClick={onClose} label={`${t('back')}`} type="primary" />
                        <Title name="Nova postagem" size="18px" />
                    </S.Actions>
                </S.Wrapper>
                <S.Tips>
                    <Image src={banner} alt="banner" />
                    <p>Postagens feitas por administradores não caem na fila para análise.</p>
                </S.Tips>
            </S.Header>
            <S.Form>
                <S.Row>
                    <Input.Text
                        title="Título"
                        key="title"
                        id="title"
                        type="text"
                        placeholder="Escreva um título"
                        data-testid="title"
                        onChange={formik.handleChange('title')}
                        onBlur={formik.handleBlur('title')}
                        value={formik.values.title}
                        autocomplete="title"
                        className="field"
                    />
                    <Input.Text
                        title="Assunto:"
                        key="title"
                        id="title"
                        type="text"
                        placeholder="Ex: Achados e Perdidos"
                        data-testid="title"
                        onChange={formik.handleChange('title')}
                        onBlur={formik.handleBlur('title')}
                        value={formik.values.title}
                        autocomplete="title"
                        className="field"
                    />
                </S.Row>
                <textarea
                    rows={10}
                    cols={50}
                    placeholder="Escreva algo..."
                    value={formik.values.description}
                    onChange={formik.handleChange('description')}
                />
            </S.Form>
        </S.Container>
    );
};

export default FeedForm;
