// Next
import Image from 'next/image';

// Assets
import avatar from 'assets/constants/Avatar6.png';
import fixed from 'assets/icons/fixed.svg';
import paperclip from 'assets/icons/paperclip.svg';

// Styles
import * as S from './FeedSide.styles';

// Models
import { FeedSideProps } from './models';

// i18n
import useTranslation from 'i18n';

// @Waiuru-Components
import { Avatar } from '@waiuru/waiuru-ui';

// Components
import { Tab } from 'components/tab';

const FeedSide = ({ data, sideScreen, selectedSideScreen, OpenModal, setSelectedSideScreen }: FeedSideProps) => {
    const t = useTranslation();

    const handleOpenModal = (index: number) => {
        const itemId = data[index];
        OpenModal({ isOpen: true, index, itemId });
    };

    const fakeData = [
        {
            id: 1,
            name: 'Venda de salgados no apt 203',
            type: 'Anúncio',
            title: 'Venda de salgados no apt 203',
            mensage: 'Olá, pessoal. Comecei a vender salgados em casa. Me contratem para festas no 7190293.',
            perfilImage: avatar,
            isFixed: true,
        },
        {
            id: 2,
            name: 'Venda de salgados no apt 203',
            type: 'Anúncio',
            title: 'Venda de salgados no apt 203',
            mensage: 'Olá, pessoal. Comecei a vender salgados em casa. Me contratem para festas no 7190293.',
            perfilImage: avatar,
            isFixed: false,
        },
    ];

    return (
        <S.Container>
            <S.Header value={fakeData.length} valueFiltered={fakeData.filter(item => item.isFixed).length}>
                {sideScreen.map(item => (
                    <Tab
                        key={item.id}
                        name={item.name}
                        tabItemKey={item.id}
                        defaultSelectedKeys={selectedSideScreen}
                        onClick={() => {
                            if (setSelectedSideScreen) {
                                setSelectedSideScreen(item.id);
                            }
                        }}
                    />
                ))}
            </S.Header>
            <S.Content>
                {data ? (
                    <>
                        {selectedSideScreen === '1' && (
                            <>
                                {fakeData.map((item, index) => (
                                    <S.Card key={index} onClick={() => handleOpenModal(index)}>
                                        <div>
                                            <Avatar src={item.perfilImage} alt={`User ${item.name}`} width={30} height={30} />
                                            <span>
                                                <p>{item.type}</p>
                                            </span>
                                        </div>

                                        <div>
                                            <p>{item.title}</p>
                                            <p>{item.mensage}</p>
                                        </div>

                                        <div>
                                            <div>
                                                <button>
                                                    <p>aceitar</p>
                                                </button>
                                                <button>
                                                    <p>recusar</p>
                                                </button>
                                            </div>

                                            <button className="paperclip">
                                                <Image src={paperclip} alt="paperclip" />
                                                <span className="tooltip">
                                                    <p>Ver anexo</p>
                                                </span>
                                            </button>
                                        </div>
                                    </S.Card>
                                ))}
                            </>
                        )}
                        {selectedSideScreen === '2' && (
                            <>
                                {fakeData
                                    .filter(item => item.isFixed)
                                    .map(item => (
                                        <S.Card key={item.id}>
                                            <div>
                                                <Avatar src={item.perfilImage} alt={`User ${item.name}`} width={30} height={30} />
                                                <span>
                                                    <p>{item.type}</p>
                                                </span>
                                            </div>

                                            <div>
                                                <p>{item.title}</p>
                                                <p>{item.mensage}</p>
                                            </div>

                                            <div>
                                                <div>
                                                    <Image src={fixed} alt="avatar" />
                                                    <p>Fixado no feed</p>
                                                </div>

                                                <button>
                                                    <p>Remover</p>
                                                </button>
                                            </div>
                                        </S.Card>
                                    ))}
                            </>
                        )}
                    </>
                ) : (
                    <p className="noData">Publicações dos condôminos aparecerão aqui.</p>
                )}
            </S.Content>
        </S.Container>
    );
};

export default FeedSide;
