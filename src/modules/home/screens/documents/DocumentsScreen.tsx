// Next
import Image from 'next/image';

// Assets
import download from 'assets/icons/download.svg';
import edit from 'assets/icons/edit.svg';
import menu from 'assets/icons/menu.svg';
import upDocument from 'assets/images/documents_rafiki.png';

// Styles
import * as S from './Documents.styles';

// Formik
import { FormikProvider } from 'formik';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// @Waiuru-Temporary
import { Input } from 'components/input';

// Hook
import { useDocuments } from './useDocuments';

const DocumentsScreen = () => {
  const {
    links,
    formik,
    documentName,
    documentContent,
    t,
    openFileInput,
    handleFileUpload,
    handleDrop,
    handleDragOver,
    setDocumentContent,
  } = useDocuments();

  return (
    <S.Container>
      {!documentContent && (
        <S.UpDocument onDrop={handleDrop} onDragOver={handleDragOver}>
          <div>
            <Image src={upDocument} alt="img" />
            <div>
              <p>Você ainda não possui nenhum documento.</p>
              <button onClick={openFileInput}>
                <p>Importar documento</p>
              </button>
              <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileUpload} />
            </div>
          </div>
          <div>
            <p>Ou arraste um arquivo</p>
            <Image src={download} alt="upload" />
          </div>
        </S.UpDocument>
      )}

      {documentContent && (
        <S.ToDocument>
          <Title name={`${t('documents')}`} size="18px" />
          <div>
            <div className="header">
              <div className="header_top">
                <span className="custonStyleInput">
                  <FormikProvider value={formik}>
                    <Input.Text
                      title=""
                      key="name"
                      id="name"
                      type="text"
                      placeholder={documentName}
                      data-testid="name"
                      onChange={formik.handleChange('name')}
                      onBlur={formik.handleBlur('name')}
                      value={formik.values.local}
                      autocomplete="name"
                      className="teste"
                    />
                  </FormikProvider>
                  <Image src={edit} alt="icon" className="editIcon" />
                </span>

                <p className="document_category">Categoria do documento</p>
                {/* <Select */}
                <Image src={menu} alt="icon" />
              </div>
              <div className="header_botton">
                <button onClick={() => setDocumentContent('')}>
                  <p>Excluir documento</p>
                </button>
                <button>
                  <p>Atualizar documento</p>
                </button>
              </div>
            </div>

            <textarea rows={10} cols={50} value={documentContent} onChange={e => setDocumentContent(e.target.value)} />
          </div>
        </S.ToDocument>
      )}
    </S.Container>
  );
};

export default DocumentsScreen;
