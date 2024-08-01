// Next
import Image from 'next/image';

// Assets
import pt from './icons/br.png';
import en from './icons/en.png';
import es from './icons/es.png';

// Styles
import * as S from './Internationalization.styles';

// Hooks
import { useInternationalization } from './useInternationalization';

// Components
import { Select } from './select';

const Internationalization = () => {
  const { itens, languageSelected, onChangeLanguage } = useInternationalization();

  let imageSrc;

  switch (languageSelected) {
    case 'pt':
      imageSrc = pt;
      break;
    case 'en':
      imageSrc = en;
      break;
    case 'es':
      imageSrc = es;
      break;
    default:
      imageSrc = pt;
  }

  return (
    <S.Component>
      <Image src={imageSrc} alt="Logo" width={30} height={30} priority />
      <Select
        id="languages"
        key="languages"
        options={itens}
        value={languageSelected}
        onChange={value => onChangeLanguage(value)}
      />
    </S.Component>
  );
};

export default Internationalization;
