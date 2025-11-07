import { getTranslations } from 'next-intl/server';
import { Shield } from 'lucide-react';

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen bg-deep-space text-stardust-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Shield className="w-12 h-12 text-genesis-cyan" />
          <h1 className="title-xl gradient-text">隐私政策</h1>
        </div>

        <div className="glass-card p-8 rounded-xl space-y-6 text-neutral-grey leading-relaxed">
          <section>
            <h2 className="text-2xl font-exo font-semibold text-genesis-cyan mb-4">1. 信息收集</h2>
            <p>我们收集您主动提供的信息，包括姓名、邮箱、公司名称等联系信息，用于响应您的咨询和提供服务。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-genesis-cyan mb-4">2. 信息使用</h2>
            <p>您的信息仅用于：</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>回复您的咨询和服务请求</li>
              <li>改进我们的产品和服务</li>
              <li>发送相关的技术更新和营销信息（需您同意）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-genesis-cyan mb-4">3. 信息保护</h2>
            <p>我们采用行业标准的安全措施保护您的个人信息，包括加密传输、访问控制和定期安全审计。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-genesis-cyan mb-4">4. 信息共享</h2>
            <p>我们不会向第三方出售、交易或转让您的个人信息，除非获得您的明确同意或法律要求。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-genesis-cyan mb-4">5. Cookie使用</h2>
            <p>我们使用Cookie改善用户体验，您可以通过浏览器设置管理Cookie偏好。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-genesis-cyan mb-4">6. 您的权利</h2>
            <p>您有权访问、更正、删除您的个人信息，或撤回同意。请联系我们行使这些权利。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-genesis-cyan mb-4">7. 政策更新</h2>
            <p>我们可能不时更新本隐私政策，更新后的政策将在本页面公布。</p>
          </section>

          <div className="pt-6 border-t border-genesis-cyan/20">
            <p className="text-sm">最后更新：2025年1月</p>
            <p className="text-sm mt-2">如有疑问，请联系：hello@lingxuan.tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}
