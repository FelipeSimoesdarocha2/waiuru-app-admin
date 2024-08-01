// React
import { useState, useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { DataItemTableResidents } from 'models';

// Api
import { useGetResidentCondominiumRequest } from 'api/resident';

export const useLostAndFoundPreview = () => {
    const [searchValue, setSearchValue] = useState('');
    const session = useAppSelector(selectUser);
    const { data, isLoading } = useGetResidentCondominiumRequest(session?.user?.condominium_id || '', !!session?.user?.condominium_id);
    const [filteredData, setFilteredData] = useState<DataItemTableResidents[]>([]);

    useEffect(() => {
        if (data) {
            setFilteredData(data)
        }
    }
        , [data]);

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
        const filter = data?.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filter ?? []);
    };

    return {
        isLoading,
        searchValue,
        filteredData,
        dataResident: data,
        handleSearchChange,
    };
};
