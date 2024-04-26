import { logger } from '@/libs/logger';
import { NextRequest, NextResponse } from 'next/server';

export function GET(_req: NextRequest) {
  logger.info({ title: 'Logged' });
  return NextResponse.json('Logged');
}
