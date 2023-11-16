import {useTranslation} from 'react-i18next';

function translator(screen, str) {
  const {t} = useTranslation(screen);
  return t(str);
}

export {translator};
