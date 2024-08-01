// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import super_check from 'assets/icons/super_check.svg';
import cardImage from 'assets/images/cardImage.png';
import imgVehicles from 'assets/images/imgVehicles.png';

// Styles
import * as S from './Vehicles.styles';

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
import { useVehicles } from './useVehicles';

const VehiclesScreen = () => {
  const router = useRouter();
  const {
    t,
    itens,
    links,
    formik,
    disabled,
    type_vehicles,
    currentScreen,
    openResidentModal,
    updateProgressBar,
    isOpenPhotoModal,
    onSubmit,
    setFile,
    setCurrentScreen,
    handleReturnScreen,
    setIsOpenPhotoModal,
    handleProceedScreen,
    setOpenResidentModal,
    onSelectedResident,
  } = useVehicles();

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
              <p>Preencha abaixo com as informações do seu veículo.</p>
            </div>

            <div>
              <Links data={links} label={links[2].name} type="link" />
              <ProgressBar value={updateProgressBar} />
              {currentScreen.length === 2 || currentScreen.length === 3 ? (
                <Button.Link onClick={handleReturnScreen} label={`${t('back')}`} type="primary" />
              ) : null}
            </div>
          </div>
          <div className="form">
            <FormikProvider value={formik}>
              {currentScreen.length === 1 && (
                <div className="steep_one">
                  <Input.Text
                    title="Nome completo do proprietário"
                    key="name"
                    id="name"
                    type="name"
                    placeholder=""
                    data-testid="name"
                    onChange={formik.handleChange('name_property')}
                    onBlur={formik.handleBlur('name_property')}
                    value={formik.values.name_property}
                    autocomplete="name"
                  />
                  <Select.Action
                    label={t('Tipo do veículo')}
                    key="type"
                    id="type"
                    placeholder=""
                    data-testid="type"
                    onChange={formik.handleChange('type')}
                    value={formik.values.type}
                    options={type_vehicles}
                  />
                  <Input.Text
                    title="Modelo"
                    key="model"
                    id="model"
                    type="text"
                    placeholder="Ex: New Fiesta"
                    data-testid="model"
                    onChange={formik.handleChange('model')}
                    onBlur={formik.handleBlur('model')}
                    value={formik.values.model}
                    autocomplete="model"
                  />
                </div>
              )}

              {currentScreen.length === 2 && (
                <div className="steep_two">
                  <Input.Text
                    title="Placa"
                    key="plate"
                    id="plate"
                    type="text"
                    placeholder="Ex: MRV 1234"
                    data-testid="plate"
                    onChange={formik.handleChange('plate')}
                    onBlur={formik.handleBlur('plate')}
                    value={formik.values.plate}
                    autocomplete="plate"
                  />
                  <Input.Text
                    title="Cor"
                    key="color"
                    id="color"
                    type="text"
                    placeholder="Ex: Cinza"
                    data-testid="color"
                    onChange={formik.handleChange('color')}
                    onBlur={formik.handleBlur('color')}
                    value={formik.values.color}
                    autocomplete="color"
                  />
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
                      image={{ src: cardImage, width: 108.117 }}
                      onClick={() => setIsOpenPhotoModal(true)}
                    />
                  </div>
                  <Button.Action label={'Finalizar cadastro'} type="primary" onClick={onSubmit} />
                </div>
              )}

              {currentScreen.length === 4 && (
                <div className="steep_four">
                  <div>
                    <p>Veículo adicionado com sucesso!</p>
                    <Image src={super_check} alt="super_check" />
                  </div>
                  <div>
                    <Button.Action
                      label={'Adicionar outro veículo'}
                      type="ghost"
                      onClick={() => {
                        setCurrentScreen([1]);
                        formik.resetForm();
                      }}
                    />
                    <Button.Action label={'Ir para a página inicial'} type="secondary" onClick={home} />
                  </div>
                </div>
              )}

              {currentScreen.length === 1 || currentScreen.length === 2 ? (
                <Button.Action label={'Prosseguir'} onClick={handleProceedScreen} disabled={disabled} type="primary" />
              ) : null}
            </FormikProvider>
          </div>
        </div>
        <Cursor />
        <ProgressCard
          label={'Acesso Veículo'}
          item={itens}
          src={imgVehicles}
          className={`${'useRotation'} ${'useCursor'}`}
        />
      </S.Content>
      {isOpenPhotoModal && (
        <Photo
          onClose={() => setIsOpenPhotoModal(false)}
          onSelect={file => {
            setFile(file);
          }}
        />
      )}
    </S.Container>
  );
};

export default VehiclesScreen;
