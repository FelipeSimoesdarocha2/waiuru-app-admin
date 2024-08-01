// Next
import { useRouter } from 'next/router';

// React
import { useState, useEffect } from 'react';

// Constants
import { itens } from './Internationalization.constants';

export const useInternationalization = () => {
    const [languageSelected, setLanguageSelected] = useState('en');
    const { locale } = useRouter();

    const onChangeLanguage = (value: string) => {
        setLanguageSelected(value);
    };

    useEffect(() => {
        (() => {
            setLanguageSelected(locale ?? 'en-US');
        })();
    }, [locale]);

    return {
        itens,
        languageSelected,
        onChangeLanguage,
    };
};
