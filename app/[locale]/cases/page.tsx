import { getTranslations } from 'next-intl/server';
import { Sparkles, Box, Brain, Code } from 'lucide-react';

export default async function CasesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const cases = [
    {
      title: 'AI智能客服系统',
      icon: Brain,
      tech: ['GPT-4', 'React', 'Node.js'],
      color: 'genesis-cyan'
    },
    {
      title: '3D产品展示平台',
      icon: Box,
      tech: ['Three.js', 'WebGL', 'Next.js'],
      color: 'impulse-violet'
    },
    {
      title: '多模态内容生成工具',
      icon: Sparkles,
      tech: ['Stable Diffusion', 'Python', 'FastAPI'],
      color: 'genesis-cyan'
    },
    {
      title: '企业数字化转型方案',
      icon: Code,
      tech: ['微服务', 'K8s', 'AI集成'],
      color: 'impulse-violet'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-space text-stardust-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="title-xl gradient-text text-center mb-4">
          {t('cases.title')}
        </h1>
        <p className="text-center text-neutral-grey text-lg mb-16 max-w-3xl mx-auto">
          {t('cases.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden animate-float" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-genesis-cyan/5 to-impulse-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`w-16 h-16 rounded-full bg-${item.color}/10 flex items-center justify-center mb-6 group-hover:glow group-hover:rotate-12 transition-all duration-300 relative z-10`}>
                <item.icon className={`w-8 h-8 text-${item.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-2xl font-exo font-semibold text-stardust-white mb-4 group-hover:text-glow relative z-10">
                {item.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {item.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-genesis-cyan/10 text-genesis-cyan text-sm rounded-full hover:bg-genesis-cyan/20 hover:scale-110 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="text-impulse-violet hover:text-genesis-cyan transition-colors font-medium relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all">
                {t('cases.viewDetails')} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-impulse-violet to-genesis-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
