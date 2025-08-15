import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ParticleBackground from '@/components/3d/ParticleBackground';

export default async function HomePage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();

  const handleCtaClick = () => {
    // 滚动到下一个部分或触发路由跳转
    document.getElementById('services')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <main className="relative min-h-screen bg-deep-space text-stardust-white overflow-x-hidden">
      {/* 3D粒子背景 */}
      <ParticleBackground count={3000} />
      
      {/* 导航栏 */}
      <Navigation locale={locale} messages={t} />
      
      {/* 主页面内容 */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          title={t('homepage.slogan')}
          subtitle={t('homepage.subtitle')}
          ctaText={t('homepage.cta')}
          onCtaClick={handleCtaClick}
        />

        {/* 服务概览部分 */}
        <section id="services" className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="title-lg gradient-text mb-4">
                {t('homepage.services.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-genesis-cyan to-impulse-violet mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: t('homepage.services.generativeAI'),
                  description: '前沿生成式AI技术，赋能创意无限可能',
                  icon: '🤖',
                  gradient: 'from-genesis-cyan/20 to-impulse-violet/20'
                },
                {
                  title: t('homepage.services.multiModal'),
                  description: '融合视觉、语音、文本的智能交互体验',
                  icon: '🎭',
                  gradient: 'from-impulse-violet/20 to-intelligent-orange-start/20'
                },
                {
                  title: t('homepage.services.rendering3D'),
                  description: '沉浸式3D渲染技术，构建数字孪生世界',
                  icon: '🎨',
                  gradient: 'from-intelligent-orange-start/20 to-genesis-cyan/20'
                },
                {
                  title: t('homepage.services.webDevelopment'),
                  description: '现代化Web应用开发，响应式用户体验',
                  icon: '💻',
                  gradient: 'from-genesis-cyan/20 to-impulse-violet/20'
                },
                {
                  title: t('homepage.services.mobileApp'),
                  description: '跨平台移动应用，原生性能体验',
                  icon: '📱',
                  gradient: 'from-impulse-violet/20 to-intelligent-orange-start/20'
                },
                {
                  title: t('homepage.services.systemIntegration'),
                  description: '企业级系统集成，数字化转型解决方案',
                  icon: '⚙️',
                  gradient: 'from-intelligent-orange-start/20 to-genesis-cyan/20'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-xl hover-lift group cursor-pointer bg-gradient-to-br ${service.gradient}`}
                >
                  <div className="text-6xl mb-6 group-hover:animate-bounce">
                    {service.icon}
                  </div>
                  <h3 className="font-exo font-semibold text-xl text-genesis-cyan mb-4 group-hover:text-glow transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-stardust-white/80 font-lato leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-genesis-cyan/30 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 创世纪理念部分 */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-deep-space to-impulse-violet/10">
          <div className="container mx-auto text-center">
            <h2 className="title-lg gradient-text mb-8">
              数字创世纪 - 我们的核心理念
            </h2>
            <p className="text-lg text-stardust-white/80 font-lato max-w-4xl mx-auto leading-relaxed mb-12">
              我们将无形的"灵感"和"数据"，通过强大的生成式AI和多模态技术能力，"渲染"成有形的、智能化的数字解决方案。
              每一次合作，都是一场从混沌到秩序的创世之旅。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { phase: t('homepage.sections.genesis'), icon: '✨', desc: '灵感萌芽' },
                { phase: t('homepage.sections.neural'), icon: '🧠', desc: 'AI觉醒' },
                { phase: t('homepage.sections.crystal'), icon: '💎', desc: '技术结晶' },
                { phase: t('homepage.sections.ecosystem'), icon: '🌍', desc: '生态构建' }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-genesis-cyan to-impulse-violet flex items-center justify-center text-3xl mb-4 animate-float">
                    {step.icon}
                  </div>
                  <h3 className="font-exo font-semibold text-lg text-genesis-cyan mb-2">
                    {step.phase}
                  </h3>
                  <p className="text-neutral-grey font-lato text-sm">
                    {step.desc}
                  </p>
                  {index < 3 && (
                    <div className="hidden md:block absolute w-8 h-px bg-gradient-to-r from-genesis-cyan to-impulse-violet mt-10 ml-20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA部分 */}
        <section className="py-20 px-4 lg:px-8 text-center">
          <div className="container mx-auto">
            <h2 className="title-lg gradient-text mb-6">
              准备开启您的数字创世纪之旅？
            </h2>
            <p className="text-lg text-stardust-white/80 font-lato mb-8 max-w-2xl mx-auto">
              让我们一起将您的创意构想渲染成令人惊艳的数字现实
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-genesis-cyan to-impulse-violet text-deep-space font-exo font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-genesis-cyan/25 transition-all duration-300 transform hover:scale-105">
                立即开始项目咨询
              </button>
              <button className="border border-genesis-cyan/50 text-genesis-cyan hover:bg-genesis-cyan/10 font-lato px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300">
                查看更多案例
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}