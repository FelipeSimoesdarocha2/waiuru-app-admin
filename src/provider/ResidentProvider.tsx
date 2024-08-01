// React
import React, { useContext, ReactNode } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { User } from 'models';
import { ResidentDto } from 'models/residents';

// Api
import { useGetUserRequest } from 'api/user';

// Components
import { Loading } from 'components/loading';

export interface iResidentProvider {
    sessionUser?: User;
    data?: ResidentDto;
}

interface iProps {
    id?: string;
    children: ReactNode;
}

const defaultContext = {};

const ResidentContext = React.createContext(defaultContext);

export const useResident = (): iResidentProvider => useContext(ResidentContext);

const ResidentProvider: React.FC<iProps> = ({ id, children }) => {
    const sessionUser = useAppSelector(selectUser);

    const { data, isLoading } = useGetUserRequest(id);

    const renderContent = () => {
        if (isLoading) {
            return <Loading />;
        }

        if (id && !data) {
            return <div>Erro ao carregar dados</div>;
        }

        return children;
    };

    const value = {
        data,
        sessionUser,
    };

    return <ResidentContext.Provider value={value}>{renderContent()}</ResidentContext.Provider>;
};

export default ResidentProvider;
