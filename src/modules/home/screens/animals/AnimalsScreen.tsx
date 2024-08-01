// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import super_check from 'assets/icons/super_check.svg';
import cardImage from 'assets/images/cardImage.png';
import imgAnimals from 'assets/images/imgAnimals.png';

// Styles
import * as S from './Animals.styles';

// Formik
import { FormikProvider } from 'formik';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Cursor } from 'components/cursor';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { ListResidentModal } from 'components/listResidentModal';
import { Photo } from 'components/photo';
import { ProgressBar } from 'components/progressBar';
import { ProgressCard } from 'components/progressCard';
import { Select } from 'components/select';
import { UploadPhotoModal } from 'components/uploadPhotoModal';

// Hook
import { useAnimals } from './useAnimals';

const AnimalsScreen = () => {
  const router = useRouter();
  const {
    itens,
    links,
    formik,
    disabled,
    currentScreen,
    updateProgressBar,
    animal_species,
    t,
    openResidentModal,
    isOpenPhotoModal,
    isLoading,
    photoLoading,
    setIsOpenPhotoModal,
    setFile,
    setOpenResidentModal,
    onSelectedResident,
    onSubmit,
    onAddNew,
    handleReturnScreen,
    handleProceedScreen,
  } = useAnimals();

  const home = () => {
    router.push('/dashboard');
  };

  return (
    <S.Container>
      <S.Header>
        <Title name={`${t('registration')}`} size="18px" />
        <div className="sub_title">
          <p>{`${t('registration-subtitle')}`}</p>
        </div>
      </S.Header>
      <S.Content>
        <div className="content_hero">
          <div className="content_header">
            <div>
              <p>{`${t('registration-form')}`}</p>
              <p>Preencha abaixo com as informações do seu pet.</p>
            </div>

            <div>
              <Links data={links} label={links[4].name} type="link" />
              <ProgressBar value={updateProgressBar} />
              {currentScreen.length === 3 && (
                <Button.Link onClick={handleReturnScreen} label={`${t('back')}`} type="primary" />
              )}
            </div>
          </div>
          <div className="form">
            <FormikProvider value={formik}>
              {currentScreen.length === 1 && (
                <div className="steep_one">
                  <Input.Text
                    title="Nome do animal"
                    key="name"
                    id="name"
                    type="text"
                    placeholder=""
                    data-testid="name"
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.name}
                    autocomplete="name"
                  />
                  <Select.Action
                    id="type"
                    key="password"
                    data-testid="type"
                    placeholder=""
                    label={t('Espécie do animal')}
                    onChange={formik.handleChange('type')}
                    // value={formik.values.animal_species}
                    options={animal_species}
                  />
                  <Input.Text
                    title="Raça (se houver)"
                    key="breed"
                    id="breed"
                    type="text"
                    placeholder="Ex: Yorkishire"
                    data-testid="breed"
                    onChange={formik.handleChange('breed')}
                    onBlur={formik.handleBlur('breed')}
                    value={formik.values.breed}
                    autocomplete="breed"
                  />
                </div>
              )}

              {currentScreen.length === 2 && (
                <div className="steep_two">
                  <Input.Text
                    title="Morador vinculado ao veículo"
                    key="resident_name"
                    id="resident_name"
                    type="text"
                    placeholder=""
                    data-testid="resident_name"
                    onChange={formik.handleChange('resident_name')}
                    onBlur={formik.handleBlur('resident_name')}
                    value={formik.values.resident_name}
                    autocomplete="resident_name"
                  />
                  <Button.Link
                    type="primary"
                    label="ver lista de moradores"
                    onClick={() => setOpenResidentModal(true)}
                    className="btn"
                  />
                  {openResidentModal && (
                    <ListResidentModal
                      title="Lista de Moradores"
                      onClose={() => setOpenResidentModal(false)}
                      onSelect={user => {
                        onSelectedResident(user);
                      }}
                    />
                  )}
                </div>
              )}

              {currentScreen.length === 3 && (
                <div className="steep_three">
                  <div>
                    <p className="title">Incluir foto</p>
                    <UploadPhotoModal
                      title={'Adicionar foto do pet'}
                      subtitle={'Opcional'}
                      onClick={() => setIsOpenPhotoModal(true)}
                      image={{ src: cardImage, width: 108.117 }}
                    />
                  </div>
                  <Button.Action
                    label={'Finalizar cadastro'}
                    disabled={disabled}
                    type="primary"
                    loading={isLoading || photoLoading}
                    onClick={onSubmit}
                  />
                </div>
              )}

              {currentScreen.length === 4 && (
                <div className="steep_four">
                  <div>
                    <p>Pet adicionado com sucesso!</p>
                    <Image src={super_check} alt="super_check" />
                  </div>
                  <div>
                    <Button.Action
                      label={'Adicionar outro animal'}
                      type="ghost"
                      onClick={() => {
                        onAddNew();
                      }}
                    />
                    <Button.Action label={'Ir para a página inicial'} type="secondary" onClick={home} />
                  </div>
                </div>
              )}

              <div className="gap_btn">
                {currentScreen.length === 2 && <Button.Action label={'Adicionar morador vinculado'} type="ghost" />}
                {currentScreen.length === 1 || currentScreen.length === 2 ? (
                  <Button.Action
                    label={'Prosseguir'}
                    onClick={handleProceedScreen}
                    disabled={disabled}
                    type="primary"
                  />
                ) : null}
              </div>
            </FormikProvider>
          </div>
        </div>
        {isOpenPhotoModal && (
          <Photo
            onClose={() => setIsOpenPhotoModal(false)}
            onSelect={file => {
              setFile(file);
            }}
          />
        )}
        <Cursor />
        <ProgressCard
          label={'Acesso Animal'}
          item={itens}
          src={imgAnimals}
          className={`${'useRotation'} ${'useCursor'}`}
        />
      </S.Content>
    </S.Container>
  );
};

export default AnimalsScreen;
