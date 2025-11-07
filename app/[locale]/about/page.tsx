import { getTranslations } from 'next-intl/server';
import { Target, Users, Zap, Award } from 'lucide-react';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const sections = [
    { key: 'mission', icon: Target, color: 'genesis-cyan' },
    { key: 'team', icon: Users, color: 'impulse-violet' },
    { key: 'culture', icon: Zap, color: 'genesis-cyan' },
    { key: 'technology', icon: Award, color: 'impulse-violet' }
  ];

  return (
    <div className="min-h-screen bg-deep-space text-stardust-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="title-xl gradient-text text-center mb-4">
          {t('about.title')}
        </h1>
        <p className="text-center text-neutral-grey text-lg mb-16 max-w-3xl mx-auto">
          {t('about.subtitle')}
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map(({ key, icon: Icon, color }, idx) => (
            <div key={key} className="glass-card p-8 rounded-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-genesis-cyan/5 to-impulse-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-6 relative z-10">
                <div className={`w-14 h-14 rounded-full bg-${color}/10 flex items-center justify-center flex-shrink-0 group-hover:glow group-hover:rotate-12 transition-all duration-300`}>
                  <Icon className={`w-7 h-7 text-${color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-exo font-semibold text-${color} mb-3 group-hover:text-glow`}>
                    {t(`about.${key}`)}
                  </h3>
                  <p className="text-neutral-grey leading-relaxed group-hover:text-stardust-white transition-colors">
                    {key === 'mission' && '致力于通过前沿AI技术推动数字化创新，为企业提供智能化解决方案，创造数字世界的无限可能。'}
                    {key === 'team' && '汇聚来自顶尖科技公司的AI专家、3D渲染工程师和全栈开发者，拥有丰富的行业经验和技术积累。'}
                    {key === 'culture' && '追求技术卓越，鼓励创新思维，倡导开放协作，持续学习成长，共同探索AI技术的边界。'}
                    {key === 'technology' && '深耕生成式AI、多模态交互、3D可视化等前沿领域，拥有多项核心技术专利和成熟的产品化能力。'}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-genesis-cyan to-impulse-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
