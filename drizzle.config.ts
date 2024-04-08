import { env } from '@/libs/env.mjs';
import type { Config } from 'drizzle-kit';

/** @type {import('drizzle-kit').Config} */
export default {
  out: './migrations',
  schema: './src/models/Schema.ts',
  driver: 'libsql',
  dbCredentials: {
    url: env.TURSO_CONNECTION_URL,
  },
} satisfies Config;
