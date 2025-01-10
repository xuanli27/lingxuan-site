import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        我们的 <span className="text-blue-500">服务</span>
      </h1>

      <div className="text-center text-gray-400">
        <p className="mb-4">
          我们提供一系列服务，用以提升您的业务水平。
        </p>
        <p>
          从数字营销策略到最新的人工智能解决方案，我们的专业知识覆盖了所有领域。
        </p>
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
    </div>
  );
}
