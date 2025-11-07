import { getTranslations } from 'next-intl/server';
import { Brain, Code, Box, Lightbulb, Sparkles, Smartphone } from 'lucide-react';

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const services = [
    {
      category: 'ai',
      icon: Brain,
      items: [
        { key: 'generativeAI', icon: Sparkles },
        { key: 'multiModal', icon: Brain }
      ]
    },
    {
      category: 'development',
      icon: Code,
      items: [
        { key: 'webDevelopment', icon: Code },
        { key: 'mobileApp', icon: Smartphone }
      ]
    },
    {
      category: 'rendering',
      icon: Box,
      items: [
        { key: 'rendering3D', icon: Box },
        { key: 'systemIntegration', icon: Code }
      ]
    },
    {
      category: 'consulting',
      icon: Lightbulb,
      items: []
    }
  ];

  return (
    <div className="min-h-screen bg-deep-space text-stardust-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="title-xl gradient-text text-center mb-4">
          {t('services.title')}
        </h1>
        <p className="text-center text-neutral-grey text-lg mb-16 max-w-3xl mx-auto">
          {t('services.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map(({ category, icon: CategoryIcon, items }, idx) => (
            <div key={category} className="glass-card p-8 rounded-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden animate-float" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-genesis-cyan/5 to-impulse-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-genesis-cyan/10 flex items-center justify-center group-hover:glow group-hover:rotate-12 transition-all duration-300">
                  <CategoryIcon className="w-7 h-7 text-genesis-cyan group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-exo font-semibold text-genesis-cyan group-hover:text-glow">
                  {t(`services.categories.${category}`)}
                </h3>
              </div>

              {items.length > 0 ? (
                <ul className="space-y-3 relative z-10">
                  {items.map(({ key, icon: ItemIcon }) => (
                    <li key={key} className="flex items-center gap-3 text-neutral-grey hover:text-stardust-white hover:translate-x-2 transition-all duration-300">
                      <ItemIcon className="w-5 h-5 text-impulse-violet" />
                      <span>{t(`homepage.services.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-neutral-grey relative z-10">
                  {category === 'consulting' && '数字化转型战略规划、技术架构设计、AI落地咨询'}
                </p>
              )}
              <div className="absolute top-0 right-0 w-32 h-32 bg-impulse-violet/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
