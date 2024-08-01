// React
import { useState, useEffect, ChangeEvent } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { DataItemTableFeed } from 'models';

// i18n
import { getFeedRequest } from 'api/feed/requests';

// Api
import useTranslation from 'i18n';

// Constants
import { screen, sideScreen } from './Feed.constants';

export const useFeed = () => {
    const [data, setData] = useState<DataItemTableFeed[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedScreen, setSelectedScreen] = useState('1');
    const [selectedSideScreen, setSelectedSideScreen] = useState('1');

    const [openForm, setOpenForm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [openPreview, setOpenPreview] = useState<{
        isOpen: boolean;
        index: number | null;
        itemId: DataItemTableFeed | null;
    }>({
        isOpen: false,
        index: null,
        itemId: null,
    });

    const t = useTranslation();
    const session = useAppSelector(selectUser);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedItems([...selectedItems, index]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== index));
        }
    };

    let filteredData: DataItemTableFeed[] = [];

    if (data && data.length > 0) {
        filteredData = data.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    }

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    const handleDeleteSelected = () => {
        setData(prevData => {
            const newData = prevData.filter((_, index) => !selectedItems.includes(index));
            return newData;
        });
        setSelectedItems([]);
    };

    useEffect(() => {
        if (selectedItems.length > 0) {
            setOpenDelete(true);
        } else {
            setOpenDelete(false);
        }
    }, [selectedItems]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await getFeedRequest(session.user.condominium_id);

            setData(response);
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
        t,
        data,
        screen,
        openForm,
        isLoading,
        openFilter,
        sideScreen,
        openDelete,
        openPreview,
        searchValue,
        filteredData,
        selectedItems,
        selectedScreen,
        selectedSideScreen,
        setOpenForm,
        setOpenFilter,
        setOpenDelete,
        setOpenPreview,
        setSelectedItems,
        setSelectedScreen,
        handleSearchChange,
        handleDeleteSelected,
        handleCheckboxChange,
        setSelectedSideScreen,
    };
};
