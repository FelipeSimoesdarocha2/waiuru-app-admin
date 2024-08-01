// React
import React, { useState } from 'react';
import { ReactNode } from 'react';

// Store
import { selectUser } from 'store/features/user'
import { useAppSelector } from 'store/hooks'

// Models
interface iProps {
    id?: string
    children?: ReactNode;
}

const defaultContext = {
    saving: false,
}

const DocumentContext = React.createContext(defaultContext)

const DocumentProvider: React.FC<iProps> = ({ id, children }) => {
    const sessionUser = useAppSelector(selectUser)
    const [saving, setSaving] = useState(false)

    const renderContent = () => {
        if (id) {
            return <div>Erro</div>
        }

        return children
    }

    const value = {
        sessionUser,
        saving,
    }

    return <DocumentContext.Provider value={value}>{renderContent()}</DocumentContext.Provider>
}

export default DocumentProvider
