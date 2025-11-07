"use client"

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactFormClient() {
  const t = useTranslations('contact.form');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('https://contact-xenoiklppw.cn-shanghai.fcapp.run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          company: '',
          contact: '',
          message: ''
        });
      } else {
        setError(t('errorMessage'));
      }
    } catch {
      setError(t('errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card p-8 rounded-xl hover:scale-[1.02] transition-all duration-500 animate-float">
      <h2 className="text-2xl font-exo font-semibold text-genesis-cyan mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-genesis-cyan animate-pulse" />
        {t('title')}
      </h2>
      
      {success && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
          {t('successMessage')}
        </div>
      )}
      
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
          {t('errorMessage')}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-stardust-white mb-2 font-medium">{t('name')}</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full bg-deep-space border border-genesis-cyan/30 rounded-lg px-4 py-3 text-stardust-white focus:border-genesis-cyan focus:glow outline-none transition-all duration-300 disabled:opacity-50" 
          />
        </div>
        <div>
          <label className="block text-stardust-white mb-2 font-medium">{t('company')}</label>
          <input 
            type="text" 
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full bg-deep-space border border-genesis-cyan/30 rounded-lg px-4 py-3 text-stardust-white focus:border-genesis-cyan focus:glow outline-none transition-all duration-300 disabled:opacity-50" 
          />
        </div>
        <div>
          <label className="block text-stardust-white mb-2 font-medium">{t('contact')}</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            disabled={loading}
            placeholder="+86 xxx xxxx xxxx"
            className="w-full bg-deep-space border border-genesis-cyan/30 rounded-lg px-4 py-3 text-stardust-white placeholder:text-neutral-grey/50 focus:border-genesis-cyan focus:glow outline-none transition-all duration-300 disabled:opacity-50"
          />
        </div>
        <div>
          <label className="block text-stardust-white mb-2 font-medium">{t('message')}</label>
          <textarea 
            rows={4} 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full bg-deep-space border border-genesis-cyan/30 rounded-lg px-4 py-3 text-stardust-white focus:border-genesis-cyan focus:glow outline-none transition-all duration-300 resize-none disabled:opacity-50"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-genesis-cyan to-impulse-violet text-deep-space font-exo font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-genesis-cyan/25 hover:scale-105 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {loading ? t('submitting') : t('submit')}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-impulse-violet to-genesis-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </form>
    </div>
  );
}