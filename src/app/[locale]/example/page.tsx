import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ExamplePage() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1>{t('example')}</h1>

      <div className="flex flex-row gap-4">
        <Link href="/">{t('home')}</Link>
        <Link href="/about">{t('about')}</Link>
      </div>
    </div>
  );
}
