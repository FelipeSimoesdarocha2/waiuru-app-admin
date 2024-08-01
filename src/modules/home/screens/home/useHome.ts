// Next
import { useRouter } from 'next/router';

// Next
import { useEffect, useState } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { saveUser } from 'store/features/user';
import { useAppDispatch, useAppSelector } from 'store/hooks';

// Models
import { CondominiumProps } from 'models';

// Api
import { useGetCondoByAdminIdRequest } from 'api/condo';

// i18n
import useTranslation from 'i18n';

// Constants
import { menu } from './Home.constants';

export const useHome = () => {
  const session = useAppSelector(selectUser);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<CondominiumProps[]>([]);
  const { data, isLoading } = useGetCondoByAdminIdRequest(session?.user?.id, !!session.user.id);

  const t = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const profilePicure = session?.user?.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url;

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    if (data) {
      const dataFilter = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
      setFilteredData(dataFilter);
    }
  };

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const onSelectCondo = (condominiumId: string) => {
    const condominium = data && data.find(item => item.id === condominiumId);
    const newUser = {
      ...session.user,
      condominium_id: condominium?.id ?? '',
      condominium: {
        id: condominium?.id ?? '',
        uuid: condominium?.uuid ?? '',
        name: condominium?.name ?? '',
        email: condominium?.payment_gateway_email ?? '',
        address: condominium?.payment_gateway_country ?? '',
        phone_number: condominium?.payment_gateway_email ?? '',
        status: 1,
        role: 'condominium',
      },
    };

    dispatch(saveUser({ user: newUser }));
    router.push('/dashboard');
  };


  return {
    t,
    data,
    menu,
    session,
    isLoading,
    searchValue,
    filteredData,
    profilePicure,
    onSelectCondo,
    handleSearchChange,
  };
};
