// Next
import Image from 'next/image';

// Assets
import error from 'assets/icons/error.svg';
import padlock from 'assets/icons/padlock.svg';

// Styles
import * as S from './Settings.styles';

// i18n
import useTranslation from 'i18n';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { Input } from 'components/input';

// Components-Module
import { SettingsTable } from './components';

// Hook
import { useSettings } from './useSettings';

const SettingsScreen = () => {
  const t = useTranslation();
  const { data, isOpen, links, selectedItems, permissionsData, handleBack, handleCheckboxChange } = useSettings();

  return (
    <S.Container>
      <S.Header>
        <Button.Link onClick={handleBack} label={`${t('back')}`} type="primary" />
        <Title name={`${t('access-permissions')}`} size="18px" />
        <div>
          <Image src={padlock} alt="padlock" />
          <p>{`${t('settings-subtitle')}`}</p>
        </div>
      </S.Header>

      <S.Content>
        <div>
          <div>
            {/* <Select */}
            <button className="error">
              <Image src={error} alt="error" />
              <span className="tooltip">
                <p>Funcionários cadastrados no setor selecionado poderão ver as páginas habilitadas abaixo.</p>
              </span>
            </button>
          </div>

          <S.Item>
            {permissionsData.map((item, index) => (
              <div key={item.id}>
                {item.id === 1 && <h2>{`${t('navigation')}`}</h2>}
                <div>
                  <Input.Checkbox
                    id={item.id}
                    label={`${t(`${item.title}`)}`}
                    checked={selectedItems.includes(index)}
                    onChange={() => { }}
                  />
                  <p>{`${t(`${item.subtitle}`)}`}</p>
                </div>
                {item.id === 2 && <h2>{`${t('access-control-registration')}`}</h2>}
                {item.id === 9 && <h2>{`${t('management')}`}</h2>}
                {item.id === 13 && <h2>{`${t('control')}`}</h2>}
                {item.id === 18 && <h2>{`${t('other-services')}`}</h2>}
              </div>
            ))}
          </S.Item>
        </div>

        <SettingsTable data={data} />
      </S.Content>

      {isOpen && (
        <S.ModalFooter>
          <Button.Action label="Salvar alteração" />
        </S.ModalFooter>
      )}
    </S.Container>
  );
};

export default SettingsScreen;
