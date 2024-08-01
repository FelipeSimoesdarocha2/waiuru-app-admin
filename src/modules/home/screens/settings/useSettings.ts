// React
import { useState, useEffect, ChangeEvent, } from 'react';

// Models
import { DataItemTableSettings } from 'models';

// Constants
import { links, settingsData, settingsPermissions } from './Settings.constants';

export const useSettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data] = useState<DataItemTableSettings[]>(settingsData);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [permissionsData, setPermissionsData] = useState(settingsPermissions);

    const handleBack = () => {
        window.history.back();
    };

    const handleCloseModal = () => {
        setIsOpen(false);
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
        setPermissionsData(prevData => {
            const newData = prevData.filter((_, index) => !selectedItems.includes(index));
            return newData;
        });
        setSelectedItems([]);
    };

    useEffect(() => {
        if (selectedItems.length > 0) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [selectedItems]);

    return {
        data,
        links,
        isOpen,
        selectedItems,
        permissionsData,
        handleBack,
        handleCloseModal,
        handleDeleteSelected,
        handleCheckboxChange,
    };
};
