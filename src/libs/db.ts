import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from '@/models/schema';
import { env } from './env.mjs';

const client = createClient({
  url: env.TURSO_CONNECTION_URL,
  authToken: env.TURSO_AUTH_TOKEN,
});

// eslint-disable-next-line import/prefer-default-export
export const db = drizzle(client, { schema });
