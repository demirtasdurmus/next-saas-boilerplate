import '@/styles/globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & { params: { locale: string } };

const inter = Inter({ subsets: ['latin'] });

/**
 * Generate localized dynamic metadata
 * By leveraging translation files
 */
export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({ children, params: { locale } }: Props) {
  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
