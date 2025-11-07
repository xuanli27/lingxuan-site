'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass-card p-8 rounded-xl hover-lift group cursor-pointer relative overflow-hidden ${className}`}
    >
      {/* 悬停光效 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-genesis-cyan/5 via-transparent to-impulse-violet/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-genesis-cyan to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-impulse-violet to-transparent" />
      </div>

      {children}
    </motion.div>
  );
}
