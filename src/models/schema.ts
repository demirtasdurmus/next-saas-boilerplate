import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const examples = sqliteTable('example', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  message: text('message').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});

export type InsertExample = typeof examples.$inferInsert;
export type SelectExample = typeof examples.$inferSelect;
