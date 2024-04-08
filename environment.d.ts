declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // # Server env variables
      TURSO_CONNECTION_URL: string;
      TURSO_AUTH_TOKEN: string;

      // # Client env variables
      NEXT_PUBLIC_ENV: 'development' | 'sandbox' | 'staging' | 'production';
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
