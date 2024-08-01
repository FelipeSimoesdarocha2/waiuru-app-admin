// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Assets
import avatar from 'assets/constants/Avatar1.png';
import constant_thumb from 'assets/constants/feed/_placeholderImage.png';

// Styles
import * as S from './FeedPreview.styles';

// Models
import { FeedPreviewProps } from './models';

// i18n
import useTranslation from 'i18n';

// Components
import { Input } from 'components/input';
import { Select } from 'components/select';
import { TextArea } from 'components/textarea';

const FeedPreview = ({ data, onClose }: FeedPreviewProps) => {
    const t = useTranslation();

    const [type, setType] = useState('');
    const [subject, setSubject] = useState('');
    const [sendMessage, setSendMessage] = useState('');

    const [step, setStep] = useState('1');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedScreen, setSelectedScreen] = useState('1');

    const handleTypeChange = (value: string) => {
        setType(value);
    };

    const handleSubjectChange = (value: string) => {
        setSubject(value);
    };

    const handleSendChange = (value: string) => {
        setSendMessage(value);
    };

    const typeOptions = [
        {
            value: '1',
            label: 'Comunicado',
        },
        {
            value: '2',
            label: 'Anúncio',
        },
    ];

    const subjectOptions = [
        {
            value: '1',
            label: 'Achados e Perdidos',
        },
        {
            value: '2',
            label: 'Atividades',
        },
        {
            value: '3',
            label: 'Anúncio',
        },
        {
            value: '4',
            label: 'Votação Online',
        },
    ];

    return (
        <S.Component onClick={onClose}>
            {selectedScreen === '1' && (
                <S.Container
                    onClick={event => {
                        event.stopPropagation();
                    }}
                >
                    <S.Actions>
                        <button onClick={() => { }} className="accept">
                            <p>Aceitar</p>
                        </button>
                        <button onClick={() => setSelectedScreen('2')} className="refuse">
                            <p>recusar</p>
                        </button>
                    </S.Actions>
                    <S.Header>
                        <Image src={avatar} alt="" width={32} />
                        <S.Person>
                            <S.Name>Julia Campos</S.Name>
                            <S.Create_At>Enviado 12 de dezembro de 2022, 18:54</S.Create_At>
                        </S.Person>
                    </S.Header>
                    <S.Content>
                        <S.Form>
                            <S.Field>
                                <p>Tipo de postagem</p>
                                <Select.Action id="type" label={''} onChange={handleTypeChange} value={type} options={typeOptions} />
                            </S.Field>
                            <S.Field>
                                <p>Assunto</p>
                                <Select.Action
                                    id="type"
                                    label={''}
                                    onChange={handleSubjectChange}
                                    value={subject}
                                    options={subjectOptions}
                                />
                            </S.Field>
                        </S.Form>
                        <S.Inner>
                            <S.Title>{data?.title}</S.Title>
                            <Image src={constant_thumb} alt="constant_thumb" />
                            <S.Description>{data?.description}</S.Description>
                        </S.Inner>
                    </S.Content>
                </S.Container>
            )}

            {selectedScreen === '2' && (
                <S.Recused
                    onClick={event => {
                        event.stopPropagation();
                    }}
                >
                    <h2>Por qual motivo essa publicação será recusada?</h2>
                    <S.Options>
                        {step === '1' && (
                            <>
                                <Input.Radio
                                    title={t('Conteúdo inadequado ao feed')}
                                    id="checkbox-id"
                                    onChange={() => setSelectedOption('1')}
                                    checked={selectedOption === '1'}
                                />
                                <Input.Radio
                                    title={t('Publicação precisa de ajustes')}
                                    id="checkbox-id"
                                    onChange={() => setSelectedOption('2')}
                                    checked={selectedOption === '2'}
                                />

                                <Input.Radio
                                    title={t('Conteúdo é um spam')}
                                    id="checkbox-id"
                                    onChange={() => setSelectedOption('3')}
                                    checked={selectedOption === '3'}
                                />
                            </>
                        )}

                        {step === '2' && (
                            <>
                                <TextArea
                                    id="name"
                                    placeholder="Escreva uma mensagem..."
                                    value={sendMessage}
                                    onChange={handleSendChange}
                                />
                            </>
                        )}
                    </S.Options>
                    <S.Action>
                        <button onClick={step === '1' ? () => setSelectedScreen('1') : () => setStep('1')}>
                            <p>Cancelar</p>
                        </button>
                        <button onClick={step === '1' ? () => setStep('2') : () => setStep('1')}>
                            <p>recusar publicação</p>
                        </button>
                    </S.Action>
                </S.Recused>
            )}
        </S.Component>
    );
};

export default FeedPreview;
