import {
  AllLocales,
  LocalePrefix,
  Pathnames,
} from 'node_modules/next-intl/dist/types/src/shared/types';

export const localePrefix: LocalePrefix = 'as-needed';

export const localeDetails = [
  { id: 'en', name: 'English' },
  { id: 'de', name: 'Deutsch' },
];

export const locales: AllLocales = localeDetails.map((locale) => locale.id);

export const defaultLocale = 'en';

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/about': {
    en: '/about',
    de: '/über',
  },
  '/example': {
    en: '/example',
    de: '/beispiel',
  },
};
