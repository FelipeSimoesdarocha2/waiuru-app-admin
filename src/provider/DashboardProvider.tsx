// React
import React, { ReactNode } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Components
import { Loading } from 'components/loading';

interface iProps {
  children?: ReactNode;
}

const defaultContext = {};

const DashboardContext = React.createContext(defaultContext);

const DashboardProvider: React.FC<iProps> = ({ children }) => {
  const sessionUser = useAppSelector(selectUser);

  const [isLoading, setIsLoading] = React.useState(false);

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    return children;
  };

  const value = {
    sessionUser,
  };

  return <DashboardContext.Provider value={value}>{renderContent()}</DashboardContext.Provider>;
};

export default DashboardProvider;
