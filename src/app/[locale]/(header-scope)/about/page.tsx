import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AboutPage() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1>{t('about')}</h1>

      <div className="flex flex-row gap-4">
        <Link href="/">{t('home')}</Link>
        <Link href="/example">{t('example')}</Link>
      </div>
    </div>
  );
}
