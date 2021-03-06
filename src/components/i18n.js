import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { reactI18nextModule } from 'react-i18next'

import config from '../../gatsby-config'

let i18nConfig = {
  fallbackLng: 'ar',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    wait: true,
  },

  detection: {
    lookupFromPathIndex: 0,
    order: ['path'],
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init(i18nConfig)

export default i18n
