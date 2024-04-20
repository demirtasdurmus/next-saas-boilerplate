import '@/styles/globals.css';
// import { deDE, enUS } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
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

  // let clerkLocale = enUS;

  // if (locale === 'de') {
  //   // eslint-disable-next-line unused-imports/no-unused-vars
  //   clerkLocale = deDE;
  // }

  return (
    <html className="h-full" lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClerkProvider
            /* Disable due to a bug in userProfile component rerender problem */
            // localization={clerkLocale}
            appearance={{
              baseTheme: dark,
            }}
            afterSignOutUrl={'sign-in'}
          >
            {children}
          </ClerkProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
