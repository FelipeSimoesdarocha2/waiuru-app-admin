// Next
import Image, { ImageProps, StaticImageData } from 'next/image';
import router from 'next/router';

// React
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// Assets
import avatar from 'assets/constants/Avatar8.png';

// Styles
import * as S from './ResidentEdit.styles';

// Models
import { ResidentDto } from 'models/residents';

// Api
import { useUpdateResidentRequest } from 'api/resident';

// Formik
import { useFormik, FormikProvider } from 'formik';

// i18n
import useTranslation from 'i18n';

// Provider
import { useResident } from 'provider/ResidentProvider';

// Components-Temporary
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Tab } from 'components/tab';
import { Title } from 'components/title';

// Yup
import * as yup from 'yup';

// Constants
import { screen } from './ResidentEdit.constants';

const ResidentEditScreen = () => {
  const [disabled, setDisabled] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState('1');

  const t = useTranslation();
  const { data } = useResident();
  const { mutateAsync, isLoading } = useUpdateResidentRequest();

  const initialValues: ResidentDto = {
    id: '',
    uuid: '',
    name: '',
    phone_number: '',
    email: '',
    documents: [],
    deficiencies: null,
    parent: '',
    status: 0,
    created_at: '',
    updated_at: '',
    deleted_at: '',
    email_verified_at: '',
    role: '',
    condominium: {
      id: '',
      uuid: '',
      name: '',
      email: '',
      address: '',
      phone_number: '',
      status: 0,
      created_at: '',
      role: '',
    },
    condominium_id: '',
    invitation_id: '',
    is_temporary_user: false,
    is_billable_user: false,
    document_number: '',
    condominium_unit_id: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(`${t('email-invalid')}`)
      .required(`${t('email-required')}`),
  });

  const onSubmit = async () => {
    const dataRequest: ResidentDto = {
      name: formik.values.name,
      id: data?.id ?? '',
      uuid: '',
      phone_number: formik.values.phone_number,
      email: formik.values.email,
      documents: [],
      deficiencies: null,
      parent: '',
      status: 0,
      created_at: '',
      updated_at: '',
      deleted_at: '',
      email_verified_at: '',
      role: '',
      condominium: {
        id: '',
        uuid: '',
        name: '',
        email: '',
        address: '',
        phone_number: '',
        status: 0,
        created_at: '',
        role: '',
      },
      condominium_id: '',
      invitation_id: '',
      is_temporary_user: false,
      is_billable_user: false,
      document_number: '',
      condominium_unit_id: '',
    };
    try {
      const response = await mutateAsync(dataRequest);
      if (!response.ok) {
        const data = await response.json();
        console.error(data);
        toast.error(`${t('erro au atualizar')}`);
        return;
      }
      toast.success(`${t('Atualizado com sucesso')}`);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const reset = () => {
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (!formik.values.email) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formik.values]);

  return (
    <S.Container>
      <S.Header>
        <S.Action>
          <Button.Link
            onClick={() => router.push(`/vizualize/resident/${data?.id}`)}
            label={`${t('back')}`}
            type="primary"
          />
        </S.Action>
        <Title name={'Editar dados cadastrais'} size="18px" />
        <S.Tabs>
          {screen.map(item => (
            <Tab
              key={item.id}
              name={item.name}
              src={item.icon}
              tabItemKey={item.id}
              defaultSelectedKeys={selectedScreen}
              onClick={() => setSelectedScreen(item.id)}
            />
          ))}
        </S.Tabs>
      </S.Header>
      <S.Content>
        <S.Componente_Image>
          <ImageWithFallback
            fallbackSrc={avatar}
            width={40}
            height={40}
            alt={`User ${data?.name}`}
            src={data?.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url ?? avatar}
          />
        </S.Componente_Image>
        <S.Form>
          <FormikProvider value={formik}>
            <Input.Text
              title="Nome completo"
              key="name"
              id="name"
              type="text"
              placeholder={data?.name}
              data-testid="name"
              onChange={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
              value={formik.values.name}
              autocomplete="name"
            />
            <Input.Text
              title="Email"
              key="email"
              id="email"
              type="email"
              placeholder={data?.email}
              data-testid="email"
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              autocomplete="email"
            />
            <Input.Text
              title="Nº do celular"
              key="phone_number"
              id="tel"
              type="text"
              placeholder={data?.phone_number}
              data-testid="phone_number"
              onChange={formik.handleChange('phone_number')}
              onBlur={formik.handleBlur('phone_number')}
              value={formik.values.phone_number}
              autocomplete="phone_number"
            />
            <Input.Text
              title="Nº do documento"
              key="document_number"
              id="document_number"
              type="text"
              placeholder={data?.document_number}
              data-testid="document_number"
              onChange={formik.handleChange('document_number')}
              onBlur={formik.handleBlur('document_number')}
              value={formik.values.document_number}
              autocomplete="document"
            />

            <S.Btn>
              <Button.Action
                label={'Salvar alterações'}
                loading={isLoading}
                onClick={onSubmit}
                disabled={disabled}
                type="primary"
                className="bnt"
              />
            </S.Btn>
          </FormikProvider>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default ResidentEditScreen;

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  fallbackSrc: string | StaticImageData;
  src: string | StaticImageData;
}

const ImageWithFallback = ({ src, fallbackSrc, ...rest }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

  return <Image {...rest} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} draggable="false" />;
};
