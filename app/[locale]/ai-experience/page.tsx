import { getTranslations } from 'next-intl/server';
import { Sparkles, Image, Mic, TrendingUp } from 'lucide-react';

export default async function AIExperiencePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const demos = [
    { key: 'textGeneration', icon: Sparkles, color: 'genesis-cyan' },
    { key: 'imageGeneration', icon: Image, color: 'impulse-violet' },
    { key: 'voiceInteraction', icon: Mic, color: 'genesis-cyan' },
    { key: 'predictiveAnalysis', icon: TrendingUp, color: 'impulse-violet' }
  ];

  return (
    <div className="min-h-screen bg-deep-space text-stardust-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="title-xl gradient-text text-center mb-4">
          {t('aiExperience.title')}
        </h1>
        <p className="text-center text-neutral-grey text-lg mb-16 max-w-2xl mx-auto">
          {t('aiExperience.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {demos.map(({ key, icon: Icon, color }, idx) => (
            <div key={key} className="glass-card p-8 rounded-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-genesis-cyan/5 to-impulse-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`w-16 h-16 rounded-full bg-${color}/10 flex items-center justify-center mb-6 group-hover:glow group-hover:scale-110 transition-all duration-300 relative z-10`}>
                <Icon className={`w-8 h-8 text-${color} group-hover:animate-pulse`} />
              </div>
              <h3 className={`text-2xl font-exo font-semibold text-${color} mb-3 group-hover:text-glow relative z-10`}>
                {t(`aiExperience.demos.${key}`)}
              </h3>
              <p className="text-neutral-grey mb-4 relative z-10">
                {t('common.comingSoon')}
              </p>
              <button className="text-genesis-cyan hover:text-impulse-violet transition-colors font-medium relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all">
                {t('common.learnMore')} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-genesis-cyan to-impulse-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
