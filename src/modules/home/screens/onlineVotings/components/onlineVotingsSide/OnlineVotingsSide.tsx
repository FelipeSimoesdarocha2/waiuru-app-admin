// React
import { useState } from 'react';

// Styles
import * as S from './OnlineVotingsSide.styles';

// Models
import { OnlineVotingsSideProps } from './models';
import { DataItemTableOnlineVotings, UpdateOnlineVotingProps } from 'models';

// Api
import { useUpdateOnlineVotingRequest } from 'api/onlineVoting';

// i18n
import useTranslation from 'i18n';

const OnlineVotingsSide = ({ data, OpenModal }: OnlineVotingsSideProps) => {
    const t = useTranslation();
    const [updateLoading, setUpdateLoading] = useState(false);

    const handleOpenModal = (index: DataItemTableOnlineVotings) => {
        const itemIds = index?.id;
        OpenModal({ isOpen: true, index: itemIds, data: index });
    };

    const { mutateAsync } = useUpdateOnlineVotingRequest();

    const handleUpdateItem = async (item: any) => {
        console.log('item', item);

        setUpdateLoading(true);
        const dataRequest: UpdateOnlineVotingProps = {
            id: item,
        };

        try {
            await mutateAsync(dataRequest);
        } catch (error) {
            console.log('error', error);
        } finally {
            setUpdateLoading(false);
        }
    };

    const openItems = data.filter(item => item.status === 'OPEN');

    return (
        <S.Container>
            <S.Header>
                <S.Title>Solicitações</S.Title>
            </S.Header>
            <S.Content>
                {!data ? (
                    <>
                        {openItems.map((item, index) => (
                            <S.Card key={index} onClick={() => handleOpenModal(item)}>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                                <div className="actions">
                                    <button className="accept" onClick={() => handleUpdateItem(item.id)}>
                                        <p>aceitar</p>
                                    </button>
                                    <button>
                                        <p>recusar</p>
                                    </button>
                                </div>
                            </S.Card>
                        ))}
                    </>
                ) : (
                    <p className="noData">Votações iniciadas por condôminos aparecerão aqui.</p>
                )}
            </S.Content>
        </S.Container>
    );
};

export default OnlineVotingsSide;
