"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
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
          contact: '',
          message: ''
        });
      } else {
        setError('提交失败，请稍后再试。');
      }
    } catch {
      setError('提交失败，请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">联系我们 | 让创新无界限</h1>
      <p className="text-xl mb-12 text-center">
        灵渲科技工作室期待与您的合作。无论是技术咨询，还是共同开发创新项目，我们都将提供最专业的技术支持，确保您的项目成功落地。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">联系方式</h2>
          <ul className="space-y-2">
            <li>邮箱：info@lingxuan.tech</li>
            <li>地址：上海市浦东新区</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">合作伙伴</h2>
          <p>
            我们欢迎各种合作机会，尤其是跨行业的技术创新合作。如果您有项目合作或技术咨询需求，请填写表单，我们的团队会在24小时内回复您。
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">联系表单</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                姓名
              </label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                联系方式
              </label>
              <Input id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                留言内容
              </label>
              <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? '提交中...' : '提交'}
            </Button>
          </form>
          {success && <p className="text-green-500 mt-4">提交成功！我们会尽快与您联系。</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Image src="/images/contact-illustration.svg" alt="Contact Illustration" className="w-1/2 h-auto" />
      </div>
    </div>
  );
}