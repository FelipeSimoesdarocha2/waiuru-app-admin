// React
import { useState, useEffect } from 'react';

// Models
import { AdvertisementsProps } from 'models';

// Constants
import { screen, links, columns, dataAdvertisements } from './Advertisements.constants';

export const useAdvertisements = () => {
    const [openForm, setIsOpen] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedScreen, setSelectedScreen] = useState('1');
    const [openPreview, setOpenPreview] = useState<{
        isOpen: boolean;
        index: number | null;
        itemId: AdvertisementsProps | null;
    }>({
        isOpen: false,
        index: null,
        itemId: null,
    });

    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState<AdvertisementsProps[]>([]);

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    let filteredData: AdvertisementsProps[] = [];

    if (data && data.length > 0) {
        filteredData = data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    const fetchData = async () => {
        setIsLoading(true);

        try {
            setData(dataAdvertisements);
        } catch (error: any) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        links,
        screen,
        columns,
        isLoading,
        openFilter,
        searchValue,
        openPreview,
        filteredData,
        selectedScreen,
        setIsOpen,
        setOpenFilter,
        setOpenPreview,
        setSelectedScreen,
        handleSearchChange,
    };
};
