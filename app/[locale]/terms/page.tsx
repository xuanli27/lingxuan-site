import { getTranslations } from 'next-intl/server';
import { FileText } from 'lucide-react';

export default async function TermsPage({
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
          <FileText className="w-12 h-12 text-impulse-violet" />
          <h1 className="title-xl gradient-text">服务条款</h1>
        </div>

        <div className="glass-card p-8 rounded-xl space-y-6 text-neutral-grey leading-relaxed">
          <section>
            <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-4">1. 服务说明</h2>
            <p>上海灵渲科技提供生成式AI、3D渲染、多模态交互等技术服务。使用我们的服务即表示您同意遵守本条款。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-4">2. 用户责任</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>提供真实、准确的信息</li>
              <li>合法使用我们的服务和技术</li>
              <li>不得用于任何非法或侵权目的</li>
              <li>保护账户安全和登录凭证</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-4">3. 知识产权</h2>
            <p>我们提供的所有技术、代码、设计和内容均受知识产权法保护。未经授权不得复制、修改或分发。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-4">4. 服务变更</h2>
            <p>我们保留随时修改、暂停或终止服务的权利，恕不另行通知。我们将尽力提前通知重大变更。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-4">5. 免责声明</h2>
            <p>服务按"现状"提供，我们不对服务的准确性、可靠性或适用性作任何明示或暗示的保证。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-4">6. 责任限制</h2>
            <p>在法律允许的最大范围内，我们不对因使用或无法使用服务而产生的任何间接、偶然或后果性损害承担责任。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-4">7. 争议解决</h2>
            <p>本条款受中华人民共和国法律管辖。任何争议应首先通过友好协商解决，协商不成的，提交上海仲裁委员会仲裁。</p>
          </section>

          <section>
            <h2 className="text-2xl font-exo font-semibold text-impulse-violet mb-4">8. 条款修改</h2>
            <p>我们保留随时修改本条款的权利。修改后的条款将在本页面公布，继续使用服务即表示接受修改后的条款。</p>
          </section>

          <div className="pt-6 border-t border-impulse-violet/20">
            <p className="text-sm">最后更新：2025年1月</p>
            <p className="text-sm mt-2">如有疑问，请联系：info@lingxuan.tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}
