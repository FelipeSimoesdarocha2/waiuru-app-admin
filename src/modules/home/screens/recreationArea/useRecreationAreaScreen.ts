// React
import { useEffect, useState } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Api
import { getRecreationAreaRequest } from 'api/recreationArea';

// i18n
import useTranslation from 'i18n';

// Constants
import { screen } from './RecreationAreaScreen.constants';

export const useRecreationArea = () => {
  const t = useTranslation();
  const [data, setData] = useState<any[] | null>(null);
  const session = useAppSelector(selectUser);
  const [searchValue, setSearchValue] = useState('');
  const [selectedScreen, setSelectedScreen] = useState('1');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getRecreationAreaRequest(session.user.condominium_id);
      setData(response);
    } catch (error: any) {
      console.log();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('data', data);

  return {
    t,
    data,
    screen,
    isLoading,
    searchValue,
    selectedScreen,
    setSearchValue,
    setSelectedScreen,
    handleSearchChange,
  };
};
