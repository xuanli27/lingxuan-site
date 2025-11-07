'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const pathname = usePathname();
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const locale = pathname.split('/')[1] || 'zh';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: `/${locale}`, label: t('navigation.home') },
    { href: `/${locale}/services`, label: t('navigation.services') },
    { href: `/${locale}/cases`, label: t('navigation.cases') },
    { href: `/${locale}/about`, label: t('navigation.about') },
    { href: `/${locale}/contact`, label: t('navigation.contact') },
    { href: `/${locale}/ai-experience`, label: t('navigation.aiExperience') },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "glass-card backdrop-blur-xl border-b border-white/10" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-genesis-cyan to-impulse-violet rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-genesis-cyan/25 transition-all duration-300">
                <span className="text-deep-space font-exo font-bold text-lg">L</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-genesis-cyan to-impulse-violet rounded-lg opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-exo font-bold gradient-text">
                上海灵渲科技
              </h1>
              <p className="text-xs text-neutral-grey font-lato">
                {locale === 'zh' ? 'LINGXUAN TECH' : 'Digital Genesis'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => {
              const isActive = item.href === `/${locale}` 
                ? pathname === `/${locale}` 
                : pathname.includes(item.href.split('/')[2]);

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 font-lato font-medium transition-all duration-300 group",
                      isActive 
                        ? "text-genesis-cyan" 
                        : "text-stardust-white hover:text-genesis-cyan"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-genesis-cyan/10 to-impulse-violet/10 rounded-md -z-10"
                      />
                    )}
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-genesis-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 p-2 rounded-lg glass-card">
              <Globe size={16} className="text-genesis-cyan" />
              <Link
                href={`/${locale === 'zh' ? 'en' : 'zh'}${pathname.substring(3)}`}
                className="text-sm font-lato font-medium text-stardust-white hover:text-genesis-cyan transition-colors"
              >
                {locale === 'zh' ? 'EN' : '中文'}
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="text-genesis-cyan hover:bg-genesis-cyan/10">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80 bg-deep-space/95 backdrop-blur-xl border-l border-genesis-cyan/20"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-exo font-bold gradient-text">
                      导航菜单
                    </h2>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-genesis-cyan hover:bg-genesis-cyan/10"
                    >
                      <X size={20} />
                    </Button>
                  </div>
                  
                  <nav className="flex-1">
                    <div className="space-y-4">
                      {navigationItems.map((item, index) => {
                        const isActive = item.href === `/${locale}` 
                          ? pathname === `/${locale}` 
                          : pathname.includes(item.href.split('/')[2]);

                        return (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                "flex items-center space-x-3 p-4 rounded-lg font-lato font-medium transition-all duration-300",
                                isActive 
                                  ? "bg-gradient-to-r from-genesis-cyan/20 to-impulse-violet/20 text-genesis-cyan border border-genesis-cyan/30" 
                                  : "text-stardust-white hover:bg-genesis-cyan/10 hover:text-genesis-cyan"
                              )}
                            >
                              <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                              <span>{item.label}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </nav>

                  {/* Mobile Footer */}
                  <div className="pt-8 border-t border-genesis-cyan/20">
                    <p className="text-sm text-neutral-grey text-center font-lato">
                      © 2025 上海灵渲科技
                    </p>
                    <p className="text-xs text-neutral-grey/60 text-center font-lato mt-1">
                      Rendering the Future
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navigation;