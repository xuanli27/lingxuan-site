import { getTranslations } from 'next-intl/server';
import HomePageClient from '@/components/pages/HomePageClient';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const translations = {
    navigation: t.raw('navigation'),
    homepage: t.raw('homepage')
  };

  return <HomePageClient locale={locale} translations={translations} />;
}
