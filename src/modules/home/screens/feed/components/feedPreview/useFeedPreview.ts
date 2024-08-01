// React
import { useState, useEffect } from 'react';

// Models
import { DataItemTableResidents } from 'models';

// Api
import { getUserRequest } from 'api/user';

export const useFeedPreview = (id: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<DataItemTableResidents[]>([]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await getUserRequest(id);
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
        isLoading
    };
};
