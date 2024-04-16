import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1>{t('home')}</h1>
      <p>{t('description')}</p>

      <div className="flex flex-row gap-4">
        <Link href="/about">{t('about')}</Link>
        <Link href="/example">{t('example')}</Link>
      </div>
    </div>
  );
}
