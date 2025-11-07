'use client';

import { motion } from 'framer-motion';

interface TechBadgeProps {
  text: string;
  delay?: number;
}

export function TechBadge({ text, delay = 0 }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.1 }}
      className="inline-block px-4 py-2 glass-card text-sm font-ibm-mono text-genesis-cyan hover:bg-genesis-cyan/10 hover:shadow-lg hover:shadow-genesis-cyan/20 transition-all duration-300 cursor-default"
    >
      {text}
    </motion.span>
  );
}
