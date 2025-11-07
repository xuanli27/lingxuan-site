'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'zh';
  const currentYear = 2025;

  return (
    <footer className="relative bg-gradient-to-b from-deep-space to-black border-t border-genesis-cyan/20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-genesis-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-impulse-violet/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 公司信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-genesis-cyan to-impulse-violet rounded-lg flex items-center justify-center">
                <span className="text-deep-space font-exo font-bold text-lg">L</span>
              </div>
              <h3 className="text-xl font-exo font-bold gradient-text">灵渲科技</h3>
            </div>
            <p className="text-neutral-grey font-lato text-sm leading-relaxed mb-4">
              专注于生成式AI、3D渲染和多模态交互技术，为客户提供前沿的数字化解决方案。
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-genesis-cyan/10 border border-genesis-cyan/30 flex items-center justify-center text-genesis-cyan hover:bg-genesis-cyan/20 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-exo font-semibold text-genesis-cyan mb-6">快速链接</h4>
            <ul className="space-y-3">
              {['首页', '服务方案', '成功案例', '关于我们', '联系我们'].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}`}
                    className="text-neutral-grey hover:text-genesis-cyan transition-colors font-lato text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-genesis-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 服务领域 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-exo font-semibold text-genesis-cyan mb-6">服务领域</h4>
            <ul className="space-y-3">
              {['生成式AI', '多模态AI', '3D渲染', 'Web开发', '移动应用', '系统集成'].map((item, i) => (
                <li key={i} className="text-neutral-grey font-lato text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-impulse-violet" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-exo font-semibold text-genesis-cyan mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-grey font-lato text-sm">
                <MapPin size={18} className="text-genesis-cyan mt-0.5 flex-shrink-0" />
                <span>上海市浦东新区</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-grey font-lato text-sm">
                <Mail size={18} className="text-genesis-cyan mt-0.5 flex-shrink-0" />
                <a href="mailto:info@lingxuan.tech" className="hover:text-genesis-cyan transition-colors">
                  info@lingxuan.tech
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-grey font-lato text-sm">
                <Phone size={18} className="text-genesis-cyan mt-0.5 flex-shrink-0" />
                <span>+86 21 xxxx xxxx</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 底部版权 */}
        <div className="pt-8 border-t border-genesis-cyan/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-grey text-sm font-lato text-center md:text-left">
              © {currentYear} 上海灵渲科技有限公司. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm font-lato">
              <Link href={`/${locale}/privacy`} className="text-neutral-grey hover:text-genesis-cyan transition-colors">
                隐私政策
              </Link>
              <Link href={`/${locale}/terms`} className="text-neutral-grey hover:text-genesis-cyan transition-colors">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-genesis-cyan to-transparent" />
    </footer>
  );
}
