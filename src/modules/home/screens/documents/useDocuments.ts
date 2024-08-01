// React
import { useState, DragEvent } from 'react';

// Models
import { DocumentTypeProps, DocumentsProps } from 'models';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

// Constants
import { links } from './Documents.constants';

export const useDocuments = () => {
    const [documentName, setDocumentName] = useState('');
    const [documentContent, setDocumentContent] = useState('');

    const t = useTranslation();

    const initialValues: DocumentsProps = {
        type:  DocumentTypeProps.PROFILE_PICTURE,
        path: '',
        url: '',
        local: '',
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required(`${t('name-required')}`),
    });

    const formik = useFormik({
        initialValues,
        validateOnBlur: true,
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: () => { },
    });

    const openFileInput = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];

        if (droppedFile) {
            const fileReader = new FileReader();
            fileReader.onload = async event => {
                if (event.target) {
                    const content: any = event.target.result;

                    setDocumentContent(content);
                    setDocumentName(droppedFile.name);
                }
            };

            fileReader.readAsText(droppedFile);
        }
    };

    const handleDragOver = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            const fileReader = new FileReader();

            fileReader.onload = event => {
                if (event.target) {
                    const content: any = event.target.result;
                    setDocumentContent(content);
                    setDocumentName(file.name);
                }
            };

            fileReader.readAsText(file);
        }
    };

    return {
        links,
        formik,
        documentName,
        documentContent,
        t,
        handleDrop,
        openFileInput,
        handleDragOver,
        handleFileUpload,
        setDocumentContent,
    };
};
