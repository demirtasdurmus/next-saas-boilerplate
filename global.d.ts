import en from './src/locales/en.json';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}

  // Nodejs process env typed variable
  namespace NodeJS {
    interface ProcessEnv {
      // # Server env variables
      TURSO_CONNECTION_URL: string;
      TURSO_AUTH_TOKEN: string;

      CROWDIN_PROJECT_ID: string;
      CROWDIN_PERSONAL_TOKEN: string;

      // # Client env variables
      NEXT_PUBLIC_ENV: 'development' | 'sandbox' | 'staging' | 'production';

      LOGTAIL_SOURCE_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
