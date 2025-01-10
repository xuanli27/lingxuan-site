import Link from 'next/link';

export default function CasesPage() {

  return (
    <div className="container mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        成功的 <span className="text-blue-500">案例</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 示例案例 */}
        {[1, 2, 3, 4, 5, 6].map((caseNumber) => (
          <div
            key={caseNumber}
            className="bg-gray-800 p-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition"
          >
            <h3 className="text-lg font-bold text-blue-500 mb-2">案例 #{caseNumber}</h3>
            <p className="text-gray-400">案例描述。</p>
          </div>
        ))}
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
