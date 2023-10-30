import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import enTranslations from './en';
import arTranslations from './ar';

const LANG_STORAGE_KEY = 'appLanguage';
const LAYOUT_STORAGE_KEY = 'isRTL';

class LocalizationManager {
  static async initialize() {
    const currentLanguage = await AsyncStorage.getItem(LANG_STORAGE_KEY);

    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }

  static getCurrentLanguage() {
    return i18n.language;
  }

  static setCurrentLanguage(language) {
    i18n.changeLanguage(language);
    AsyncStorage.setItem(LANG_STORAGE_KEY, language);
  }

  static isRTLLayout() {
    return I18nManager.isRTL;
  }

  static setRTLLayout(isRTL) {
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);

    AsyncStorage.setItem(LAYOUT_STORAGE_KEY, isRTL.toString());

    // Restart the app to apply layout changes immediately
    RNRestart.Restart();
  }

  static changeToArabic() {
    this.setRTLLayout(true);
    this.setCurrentLanguage('ar');
  }

  static async loadLocalizationFile(module) {
    language = await AsyncStorage.getItem(LANG_STORAGE_KEY);
    try {
        const moduleTranslation = language === 'ar' ? arTranslations[module] : enTranslations[module];
        i18n.addResourceBundle(language, module, moduleTranslation, true, true);

        console.log(moduleTranslation)
        console.log(language)
    } catch (error) {
        console.error(`Error loading translation for ${module}:`, error);
    }
  }
}

export default LocalizationManager;
