'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export default function HeroSection({ title, subtitle, ctaText, onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* 动态网格背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 255, 218, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 255, 218, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* 辉光圆环装饰 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-genesis-cyan/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-impulse-violet/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* 顶部装饰 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-genesis-cyan" />
          <Sparkles className="text-genesis-cyan animate-pulse" size={20} />
          <span className="text-genesis-cyan font-ibm-mono text-sm tracking-wider">DIGITAL GENESIS</span>
          <Sparkles className="text-impulse-violet animate-pulse" size={20} />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-impulse-violet" />
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="title-xl gradient-text mb-6 text-glow"
        >
          {title}
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-stardust-white/90 font-lato mb-12 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTA按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onCtaClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-genesis-cyan to-impulse-violet text-deep-space font-exo font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-genesis-cyan/50 hover:scale-105"
          >
            <span className="relative z-10">{ctaText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-impulse-violet to-genesis-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-8 py-4 border-2 border-genesis-cyan/50 text-genesis-cyan font-lato font-semibold rounded-full backdrop-blur-sm hover:bg-genesis-cyan/10 hover:border-genesis-cyan transition-all duration-300">
            探索更多
          </button>
        </motion.div>

        {/* 技术标签云 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {['生成式AI', 'React Three Fiber', 'Next.js 15', 'WebGPU', 'GSAP', '多模态AI'].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 glass-card text-sm font-ibm-mono text-genesis-cyan hover:bg-genesis-cyan/10 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* 滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={onCtaClick}
        >
          <span className="text-neutral-grey text-sm font-lato">向下探索</span>
          <ChevronDown className="text-genesis-cyan" size={24} />
        </motion.div>
      </div>

      {/* 数据流动效果 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-genesis-cyan to-transparent"
            style={{
              width: '200px',
              top: `${20 + i * 15}%`,
              left: '-200px'
            }}
            animate={{
              x: ['0vw', '120vw'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'linear'
            }}
          />
        ))}
      </div>
    </section>
  );
}
