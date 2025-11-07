import { getTranslations } from 'next-intl/server';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactFormClient from '@/components/pages/ContactFormClient';

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const contactInfo = [
    { icon: MapPin, key: 'address', color: 'genesis-cyan' },
    { icon: Mail, key: 'email', color: 'impulse-violet' },
    { icon: Phone, key: 'phone', color: 'genesis-cyan' }
  ];

  return (
    <div className="min-h-screen bg-deep-space text-stardust-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="title-xl gradient-text text-center mb-4">
          {t('contact.title')}
        </h1>
        <p className="text-center text-neutral-grey text-lg mb-16 max-w-3xl mx-auto">
          {t('contact.subtitle')}
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactFormClient />

          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl hover:scale-[1.02] transition-all duration-500 animate-float" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-impulse-violet animate-pulse" />
                联系方式
              </h2>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, key, color }) => (
                  <div key={key} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className={`w-12 h-12 rounded-full bg-${color}/10 flex items-center justify-center flex-shrink-0 group-hover:glow group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className={`w-6 h-6 text-${color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div>
                      <p className="text-neutral-grey text-sm mb-1">
                        {key === 'address' && '地址'}
                        {key === 'email' && '邮箱'}
                        {key === 'phone' && '电话'}
                      </p>
                      <p className="text-stardust-white font-medium group-hover:text-genesis-cyan transition-colors">
                        {t(`contact.info.${key}`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl hover:scale-[1.02] transition-all duration-500 animate-float relative overflow-hidden group" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-genesis-cyan/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-xl font-exo font-semibold text-genesis-cyan mb-3 relative z-10">
                工作时间
              </h3>
              <p className="text-neutral-grey relative z-10 group-hover:text-stardust-white transition-colors">
                周一至周五：9:00 - 18:00<br />
                周末及节假日：预约服务
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
