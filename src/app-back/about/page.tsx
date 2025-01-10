"use client"

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    });

    document.querySelectorAll(".fade-in, .stat-number").forEach((el) => {
      observer.observe(el);
    });

    document.querySelectorAll(".stat-number").forEach((stat) => {
      const updateNumber = () => {
        const target = +(stat.getAttribute("data-value") || 0);
        const current = +(stat.textContent || 0);

        const increment = target / 100;
        if (current < target) {
          stat.textContent = Math.ceil(current + increment).toString();
          setTimeout(updateNumber, 20);
        } else {
          stat.textContent = target.toString();
        }
      };
      updateNumber();
    });
  }, []);

  return (
    <div className="container mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        OUR APPROACH BLENDS THE <span className="text-blue-500">TIMELESS PRINCIPLES</span> OF CLASSICAL MARKETING WITH A <span className="text-blue-500">CREATIVE SPIRIT</span>
      </h1>

      <div className="flex flex-wrap justify-between items-center gap-6 mb-10">
        <div className="stat text-center flex-1 fade-in">
          <div className="stat-number text-5xl font-bold mb-2" data-value="350">0</div>
          <div className="stat-description text-gray-400">thriving partnerships</div>
        </div>
        <div className="stat text-center flex-1 fade-in">
          <div className="stat-number text-5xl font-bold mb-2" data-value="12">0</div>
          <div className="stat-description text-gray-400">years of revolutionary marketing</div>
        </div>
        <div className="stat text-center flex-1 fade-in">
          <div className="stat-number text-5xl font-bold mb-2" data-value="2">0</div>
          <div className="stat-description text-gray-400">portfolio of ventures</div>
        </div>
        <div className="stat text-center flex-1 fade-in">
          <div className="stat-number text-5xl font-bold mb-2" data-value="21">0</div>
          <div className="stat-description text-gray-400">powerful team members</div>
        </div>
      </div>

      <div className="flex justify-center globe fade-in">
        <Image
          src="/images/globe-placeholder.png"
          alt="3D Globe"
          width={400}
          height={400}
          className="opacity-0 transform scale-75 transition-transform duration-500 ease-in-out"
        />
      </div>

      <footer className="text-center mt-10 py-4 bg-gray-900 text-gray-500">
        <nav className="flex justify-center space-x-10">
          {[
              { name: "首页", href: "/" },
              { name: "服务", href: "/services" },
              { name: "案例", href: "/cases" },
              { name: "关于我们", href: "/about" },
              { name: "联系我们", href: "/contact" },
          ].map((item) => (
            <Link key={item.name} href={item.href}>{item.name}</Link>
          ))}
        </nav>
        <p className="mt-4">© 2025 上海灵渲科技工作室 | All Rights Reserved</p>
      </footer>

      <style jsx>{`
        .animate {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: transform 0.6s ease, opacity 0.6s ease;
        }
      `}</style>
    </div>
  );
}
