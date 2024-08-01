// React
import { useState, useEffect, ChangeEvent } from 'react';

// Models
import { DataItemTableOnlineVotings } from 'models';

// Api
import { getOnlineVotingRequest } from 'api/onlineVoting';

// Constants
import { screen } from './OnlineVotings.constants';

export interface DataProps {
    id: number;
    name: string;
    type: string;
    title: string;
    mensage: string;
    isFixed: boolean;
}

export const useOnlineVotings = () => {
    const [openPreview, setOpenPreview] = useState<{
        isOpen: boolean;
        index: number | null;
        itemId: DataProps | null;
    }>({
        isOpen: false,
        index: null,
        itemId: null,
    });

    const [openPreviewSise, setOpenPreviewSide] = useState<{
        isOpen: boolean;
        index: string | null;
        data: DataItemTableOnlineVotings | null;
    }>({
        isOpen: false,
        index: null,
        data: null,
    });
    console.log("openPreviewSise", openPreviewSise)

    const [openForm, setOpenForm] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);

    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedScreen, setSelectedScreen] = useState<string>('1');
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [data, setData] = useState<DataItemTableOnlineVotings[]>([]);

    let filteredData: DataItemTableOnlineVotings[] = [];

    if (data && data.length > 0) {
        filteredData = data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedItems([...selectedItems, index]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== index));
        }
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
            const response = await getOnlineVotingRequest();
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
        data,
        screen,
        openForm,
        isLoading,
        openFilter,
        openDelete,
        searchValue,
        openPreview,
        filteredData,
        selectedItems,
        selectedScreen,
        openPreviewSise,
        setOpenForm,
        setOpenFilter,
        setOpenPreview,
        setOpenPreviewSide,
        setSelectedItems,
        setSelectedScreen,
        handleSearchChange,
        handleDeleteSelected,
        handleCheckboxChange,
    };
};
