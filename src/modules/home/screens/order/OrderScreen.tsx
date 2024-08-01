// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import super_check from 'assets/icons/super_check.svg';
import cardImage from 'assets/images/cardImage.png';
import imgOrder from 'assets/images/imgOrder.png';

// Styles
import * as S from './Order.styles';

// Formik
import { FormikProvider } from 'formik';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Cursor } from 'components/cursor';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { Photo } from 'components/photo';
import { ProgressBar } from 'components/progressBar';
import { ProgressCard } from 'components/progressCard';
import { Select } from 'components/select';
import { UploadPhotoModal } from 'components/uploadPhotoModal';

// Hook
import { useOrder } from './useOrder';

const OrderScreen = () => {
  const router = useRouter();
  const {
    t,
    itens,
    links,
    formik,
    disabled,
    currentScreen,
    isOpenPhotoModal,
    updateProgressBar,
    responsible_company,
    photoLoading,
    orderLoading,
    onSubmit,
    setCurrentScreen,
    handleReturnScreen,
    handleProceedScreen,
    setIsOpenPhotoModal,
    setFile,
  } = useOrder();

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
              <p>Preencha abaixo com as informações da encomenda.</p>
            </div>

            <div>
              <Links data={links} label={links[1].name} type="link" />
              <ProgressBar value={updateProgressBar} />
              {currentScreen.length === 1 || currentScreen.length === 5 ? null : (
                <Button.Link onClick={handleReturnScreen} label={`${t('back')}`} type="primary" />
              )}
            </div>
          </div>

          <div className="form">
            <FormikProvider value={formik}>
              {currentScreen.length === 1 && (
                <div className="steep_one">
                  <Input.Text
                    title="Nome completo do recebedor"
                    key="receiver_name"
                    id="name"
                    type="text"
                    placeholder=""
                    data-testid="receiver_name"
                    onChange={formik.handleChange('receiver_name')}
                    onBlur={formik.handleBlur('receiver_name')}
                    value={formik.values.receiver_name}
                    autocomplete="receiver_name"
                  />

                  <Input.Text
                    title="Nome completo do destinatário"
                    key="provider_name"
                    id="provider_name"
                    type="email"
                    placeholder=""
                    data-testid="provider_name"
                    onChange={formik.handleChange('provider_name')}
                    onBlur={formik.handleBlur('provider_name')}
                    value={formik.values.provider_name}
                    autocomplete="provider_name"
                  />

                  <Input.Text
                    title="Data de recebimento"
                    key="delivery_date"
                    id="delivery_date"
                    type="date"
                    placeholder=""
                    data-testid="delivery_date"
                    onChange={formik.handleChange('delivery_date')}
                    onBlur={formik.handleBlur('delivery_date')}
                    value={formik.values.delivery_date}
                    autocomplete="delivery_date"
                  />
                </div>
              )}

              {currentScreen.length === 2 && (
                <div className="steep_two">
                  <Input.Text
                    title="Hora do recebimento (opcional)"
                    key="delivery_hour"
                    id="delivery_hour"
                    type="time"
                    placeholder=""
                    data-testid="delivery_hour"
                    onChange={formik.handleChange('delivery_hour')}
                    onBlur={formik.handleBlur('delivery_hour')}
                    value={formik.values.delivery_hour}
                    autocomplete="delivery_hour"
                  />
                  <Input.Text
                    title="Responsável pela assinatura"
                    key="signed"
                    id="signed"
                    type="text"
                    placeholder=""
                    data-testid="signed"
                    onChange={formik.handleChange('signed')}
                    onBlur={formik.handleBlur('signed')}
                    value={formik.values.signed}
                    autocomplete="signed"
                  />
                  <Input.Text
                    title="Observações (opcional)"
                    key="package_info"
                    id="package_info"
                    type="text"
                    placeholder=""
                    data-testid="package_info"
                    onChange={formik.handleChange('package_info')}
                    onBlur={formik.handleBlur('package_info')}
                    value={formik.values.package_info}
                    autocomplete="package_info"
                  />
                </div>
              )}

              {currentScreen.length === 3 && (
                <div className="steep_three">
                  <Select.Action
                    label={t('Empresa responsável pela entrega')}
                    key="package_code"
                    id="package_code"
                    placeholder=""
                    data-testid="package_code"
                    onChange={formik.handleChange('package_code')}
                    value={formik.values.package_code}
                    options={responsible_company}
                  />
                </div>
              )}

              {currentScreen.length === 4 && (
                <div className="steep_four">
                  <p className="title">Incluir foto</p>
                  <UploadPhotoModal
                    title={'Anexar foto da encomenda'}
                    subtitle={'Opcional'}
                    image={{ src: cardImage, width: 108.117 }}
                    onClick={() => setIsOpenPhotoModal(true)}
                  />
                </div>
              )}

              {currentScreen.length === 5 && (
                <div className="steep_five">
                  <div>
                    <p>Encomenda adicionada com sucesso!</p>
                    <Image src={super_check} alt="super_check" />
                  </div>
                  <div>
                    <Button.Action
                      label={'Adicionar outra encomenda'}
                      type="ghost"
                      onClick={() => {
                        setCurrentScreen([1]);
                      }}
                    />
                    <Button.Action label={'Ir para a página inicial'} type="secondary" onClick={home} />
                  </div>
                </div>
              )}

              {currentScreen.length === 5 ? null : (
                <Button.Action
                  label={'Prosseguir'}
                  onClick={currentScreen.length === 4 ? onSubmit : handleProceedScreen}
                  disabled={disabled}
                  loading={photoLoading || orderLoading}
                  type="primary"
                />
              )}
            </FormikProvider>
          </div>
        </div>

        <Cursor />
        <ProgressCard
          label={`${t('parcel-registration')}`}
          item={itens}
          src={imgOrder}
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

export default OrderScreen;
