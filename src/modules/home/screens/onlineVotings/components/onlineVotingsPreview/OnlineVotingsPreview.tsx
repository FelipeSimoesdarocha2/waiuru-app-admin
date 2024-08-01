// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Assets
import edit from 'assets/icons/edit_black.svg';
import exit from 'assets/icons/exit.svg';

// Styles
import * as S from './OnlineVotingsPreview.styles';

// Models
import { OnlineVotingsPreviewProps } from './models';

// i18n
import useTranslation from 'i18n';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { TextArea } from 'components/textarea';

const OnlineVotingsPreview = ({ data, onClose }: OnlineVotingsPreviewProps) => {
    const t = useTranslation();

    const [step, setStep] = useState('1');
    const [sendMessage, setSendMessage] = useState('');

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedScreen, setSelectedScreen] = useState('1');

    const onChangeComments = (value: string) => {
        setSendMessage(value);
    };

    return (
        <S.Component>
            {selectedScreen === '1' && (
                <S.Container>
                    <S.Header>
                        <S.Title>
                            <h2>{data?.title}</h2>
                            <button>
                                <Image src={edit} alt=" edit" width={22} />
                            </button>
                        </S.Title>
                        <button>
                            <Image src={exit} alt=" exit" onClick={onClose} width={20} />
                        </button>
                    </S.Header>
                    <S.Content></S.Content>
                    <S.Actions>
                        <Button.Link
                            label={'Recusar votação'}
                            onClick={() => setSelectedScreen('2')}
                            type="secondary"
                            className="close"
                        />
                        <Button.Action label={'Aprovar votação'} onClick={() => { }} type="primary" />
                    </S.Actions>
                </S.Container>
            )}

            {selectedScreen === '' && (
                <S.Recused
                    onClick={event => {
                        event.stopPropagation();
                    }}
                >
                    <h2>Por qual motivo essa votação será recusada?</h2>
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
                                    placeholder="Caso precise de pequenos ajustes, descreva o que o usuário precisa fazer para que a publicação seja aprovada."
                                    value={sendMessage}
                                    onChange={onChangeComments}
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

export default OnlineVotingsPreview;
