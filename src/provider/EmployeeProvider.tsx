// React
import React, { useContext, ReactNode } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { User } from 'models';
import { EmployeeDto } from 'models/employees';

// Api
import { useGetEmployeeById } from 'api/employee';

// Components
import { Loading } from 'components/loading';

export interface iEmployeeProvider {
  sessionUser?: User;
  data?: EmployeeDto;
}

interface iProps {
  id?: string;
  children: ReactNode;
}

const defaultContext = {};

const EmployeeContext = React.createContext(defaultContext);

export const useEmployee = (): iEmployeeProvider => useContext(EmployeeContext);

const EmployeeProvider: React.FC<iProps> = ({ id, children }) => {
  const sessionUser = useAppSelector(selectUser);
  const { data, isLoading } = useGetEmployeeById(id);

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

  return <EmployeeContext.Provider value={value}>{renderContent()}</EmployeeContext.Provider>;
};

export default EmployeeProvider;
