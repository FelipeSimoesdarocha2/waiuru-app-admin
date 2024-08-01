// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import avatar from 'assets/constants/Avatar5.png';
import logo from 'assets/icons/logo/logo@75x.svg';
import superhero from 'assets/icons/superhero.svg';

// Styles
import * as S from './Financial.styles';

// Models
import { FirstAccessScreenProps } from 'models';

// Formik
import { FormikProvider } from 'formik';

// Components
import { Avatar } from 'components/avatar';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { ProgressLine } from 'components/progressLine';
import { Select } from 'components/select';
import { UploadFileModal } from 'components/uploadFileModal';

// Hook
import { useFirstAccess } from './useFirstAccess';

const FirstAccessScreen = ({ session }: FirstAccessScreenProps) => {
  const router = useRouter();
  const {
    menu,
    itens,
    formik,
    isLoading,
    profilePicure,
    currentScreen,
    type_country,
    setFile,
    onSubmit,
    handleItemClick,
    handleProceedScreen,
  } = useFirstAccess();

  return (
    <S.Container>
      {currentScreen.length === 1 && (
        <S.Step_One>
          <S.Step_One_Content>
            <S.Step_One_Header>
              <Image src={logo} alt="logo" />
              <h2>Boas-vindas ao Waiuru!</h2>
            </S.Step_One_Header>
            <S.Step_One_Typography>
              <p>Pronto para conhecer um mundo novo de tecnologia?</p>
              <p>Prepare-se para conhecer um mundo de facilidades e organização para o seu condomínio. Comece já!</p>
              <p>Os próximos passos serão para você cadastrar seu primeiro condomínio.</p>
            </S.Step_One_Typography>
            <S.Step_One_Actions>
              <Button.Action label="Começar" type="primary" onClick={() => handleProceedScreen()} />
            </S.Step_One_Actions>
          </S.Step_One_Content>
          <ProgressLine item={itens} onItemClick={handleProceedScreen} />
        </S.Step_One>
      )}
      <FormikProvider value={formik}>
        {currentScreen.length === 2 && (
          <S.Step_Two>
            <S.Step_Two_Header>
              <span />
              <ProgressLine item={itens} onItemClick={handleProceedScreen} />
              <S.Person>
                <Avatar width={40} height={40} alt={`User ${session.name}`} src={profilePicure ?? avatar} />
                <p>{session.name}</p>
                <Links data={menu} type="secondary" />
              </S.Person>
            </S.Step_Two_Header>
            <S.Step_Two_Content>
              <S.Step_Two_Form>
                <S.Step_Two_Inner>
                  <h4>Antes de continuar, informe os dados do seu condomínio</h4>
                  <S.Step_Two_Fields>
                    <Input.Text
                      title="Email"
                      key="condominium_name"
                      id="name"
                      type="email"
                      placeholder=""
                      data-testid="email"
                      onChange={formik.handleChange('email')}
                      onBlur={formik.handleBlur('email')}
                      value={formik.values.email}
                      autocomplete="email"
                    />
                    <Input.Password
                      key="password"
                      id="password"
                      title={'Senha'}
                      type="password"
                      placeholder=""
                      data-testid="password"
                      onChange={formik.handleChange('password')}
                      onBlur={formik.handleBlur('password')}
                      value={formik.values.password}
                      autocomplete="password"
                    />
                  </S.Step_Two_Fields>
                </S.Step_Two_Inner>
                {/* <div className="camera"> */}
                {/* <Image src={camera} alt="camera" />
                  <p className="title">Clique para fazer upload do foto do seu condomínio</p>
                  <p className="props">SVG, PNG, JPG or GIF (max. 3MB)</p> */}
                {/* <UploadFileModal onSelect={(file: File) => formik.setFieldValue('photo', file)} /> */}
                {/* </div> */}
              </S.Step_Two_Form>
              <S.Step_Two_Actions>
                <Button.Action label="Pular" type="ghost_secondary" onClick={() => handleProceedScreen()} />
                <Button.Action label="Avançar" type="primary" onClick={() => handleProceedScreen()} />
              </S.Step_Two_Actions>
            </S.Step_Two_Content>
          </S.Step_Two>
        )}
        {currentScreen.length === 3 && (
          <S.Step_Two>
            <S.Step_Two_Header>
              <span />
              <ProgressLine item={itens} onItemClick={handleProceedScreen} />
              <S.Person>
                <Avatar width={40} height={40} alt={`User ${session.name}`} src={profilePicure ?? avatar} />
                <p>{session.name}</p>
                <Links data={menu} type="secondary" />
              </S.Person>
            </S.Step_Two_Header>
            <S.Step_Two_Content>
              <S.Step_Two_Form>
                <S.Step_Two_Inner>
                  <h4>Antes de continuar, informe os dados do seu condomínio</h4>
                  <S.Step_Two_Fields>
                    <Input.Text
                      title="Nome do condomínio"
                      key="condominium_name"
                      id="name"
                      type="text"
                      placeholder=""
                      data-testid="condominium_name"
                      onChange={formik.handleChange('condominium_name')}
                      onBlur={formik.handleBlur('condominium_name')}
                      value={formik.values.condominium_name}
                      autocomplete="condominium_name"
                    />
                    <Input.Text
                      title="Quantidade de blocos"
                      key="number_of_blocks"
                      id="number_of_blocks"
                      type="text"
                      placeholder=""
                      data-testid="number_of_blocks"
                      onChange={formik.handleChange('number_of_blocks')}
                      onBlur={formik.handleBlur('number_of_blocks')}
                      value={formik.values.number_of_blocks}
                      autocomplete="number_of_blocks"
                    />
                  </S.Step_Two_Fields>
                </S.Step_Two_Inner>
                {/* <div className="camera"> */}
                {/* <Image src={camera} alt="camera" />
                  <p className="title">Clique para fazer upload do foto do seu condomínio</p>
                  <p className="props">SVG, PNG, JPG or GIF (max. 3MB)</p> */}
                {/* </div> */}
                <S.UploadFile>
                  <UploadFileModal onSelect={file => setFile(file)} />
                </S.UploadFile>
              </S.Step_Two_Form>
              <S.Step_Two_Actions>
                <Button.Action label="Pular" type="ghost_secondary" onClick={() => handleProceedScreen()} />
                <Button.Action label="Avançar" type="primary" onClick={() => handleProceedScreen()} />
              </S.Step_Two_Actions>
            </S.Step_Two_Content>
          </S.Step_Two>
        )}
        {currentScreen.length === 4 && (
          <S.Step_Two>
            <S.Step_Two_Header>
              <span />
              <ProgressLine item={itens} onItemClick={handleProceedScreen} />
              <S.Person>
                <Avatar width={40} height={40} alt={`User ${session.name}`} src={profilePicure ?? avatar} />
                <p>{session.name}</p>
                <Links data={menu} type="secondary" />
              </S.Person>
            </S.Step_Two_Header>
            <S.Step_Two_Content>
              <S.Step_Two_Form style={{ flexDirection: 'column' }}>
                <S.Step_Two_Inner>
                  <h4>Antes de continuar, informe os dados do seu condomínio</h4>
                  <S.Step_Two_Field>
                    <S.Step_Two_Fields>
                      <Input.Text
                        title="Endereço"
                        key="address"
                        id="address"
                        type="text"
                        placeholder=""
                        data-testid="address"
                        onChange={formik.handleChange('address')}
                        onBlur={formik.handleBlur('address')}
                        value={formik.values.address}
                        autocomplete="address"
                      />
                      <Input.Text
                        title="Cidade"
                        key="city"
                        id="city"
                        type="text"
                        placeholder=""
                        data-testid="city"
                        onChange={formik.handleChange('city')}
                        onBlur={formik.handleBlur('city')}
                        value={formik.values.city}
                        autocomplete="city"
                      />

                      <Select.Action
                        id="country"
                        key="country"
                        label={'País origem'}
                        placeholder=""
                        data-testid="country"
                        onChange={formik.handleChange('country')}
                        value={formik.values.country}
                        options={type_country}
                      />
                    </S.Step_Two_Fields>
                    <S.Step_Two_Fields>
                      <Input.Text
                        title="Estado"
                        key="uf"
                        id="uf"
                        type="text"
                        placeholder=""
                        data-testid="uf"
                        onChange={formik.handleChange('uf')}
                        onBlur={formik.handleBlur('uf')}
                        value={formik.values.uf}
                        autocomplete="uf"
                      />
                      <Input.Text
                        title="Zip-code"
                        key="zip_code"
                        id="zip_code"
                        type="text"
                        placeholder=""
                        data-testid="zip_code"
                        onChange={formik.handleChange('zip_code')}
                        onBlur={formik.handleBlur('zip_code')}
                        value={formik.values.zip_code}
                        autocomplete="zip_code"
                      />
                      <Input.Text
                        title="Telefone"
                        key="phone"
                        id="phone"
                        type="phone"
                        placeholder=""
                        data-testid="phone"
                        onChange={formik.handleChange('phone')}
                        onBlur={formik.handleBlur('phone')}
                        value={formik.values.phone}
                        autocomplete="phone"
                      />
                    </S.Step_Two_Fields>
                  </S.Step_Two_Field>
                </S.Step_Two_Inner>
              </S.Step_Two_Form>
              <S.Step_Two_Actions>
                <Button.Action label="Pular" type="ghost_secondary" onClick={() => handleProceedScreen()} />
                <Button.Action label="Avançar" type="primary" onClick={() => handleProceedScreen()} />
              </S.Step_Two_Actions>
            </S.Step_Two_Content>
          </S.Step_Two>
        )}
        {currentScreen.length === 5 && (
          <S.Step_Two>
            <S.Step_Two_Header>
              <span />
              <ProgressLine item={itens} onItemClick={handleProceedScreen} />
              <S.Person>
                <Avatar width={40} height={40} alt={`User ${session.name}`} src={profilePicure ?? avatar} />

                <p>{session.name}</p>
                <Links data={menu} type="secondary" />
              </S.Person>
            </S.Step_Two_Header>
            <S.Step_Two_Content>
              <S.Description>
                <h4>Antes, informe seus dados</h4>
                <textarea
                  title="Breve resumo de valores e missão"
                  key="description"
                  id="description"
                  data-testid="description"
                  rows={10}
                  cols={40}
                  placeholder="Breve resumo de valores e missão"
                  value={formik.values.description}
                  onBlur={formik.handleBlur('description')}
                  onChange={formik.handleChange('description')}
                />
              </S.Description>
              <S.Step_Two_Actions>
                <Button.Action label="Pular" type="ghost_secondary" onClick={() => handleProceedScreen()} />
                <Button.Action label="Cadastrar" type="primary" onClick={() => onSubmit()} loading={isLoading} />
              </S.Step_Two_Actions>
            </S.Step_Two_Content>
          </S.Step_Two>
        )}
      </FormikProvider>
      {currentScreen.length === 6 && (
        <S.Step_One>
          <S.Step_One_Content>
            <S.Step_One_Header>
              <Image src={superhero} alt="logo" />
              <h2 style={{ maxWidth: '309px', textAlign: 'center' }}>
                Cadastrado do condomínio realizado com sucesso!
              </h2>
            </S.Step_One_Header>
            <S.Step_One_Typography>
              <p>
                Lembrando esse e so um cadastro simples, você terá um universos de possibilidades a partir de agora:
                cadastro de moradores, veículos, funconários e muito mais dentro da nossa plataforma de gerenciamento.
              </p>
            </S.Step_One_Typography>
            <S.Step_One_Actions>
              <Button.Action label="Ir para condomínios" type="primary" onClick={() => router.push('/home')} />
            </S.Step_One_Actions>
          </S.Step_One_Content>
        </S.Step_One>
      )}
    </S.Container>
  );
};

export default FirstAccessScreen;
