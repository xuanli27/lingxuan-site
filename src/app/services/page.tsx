import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        OUR <span className="text-blue-500">SERVICES</span>
      </h1>

      <div className="text-center text-gray-400">
        <p className="mb-4">
          We provide a wide range of services designed to elevate your business to the next level.
        </p>
        <p>
          From digital marketing strategies to cutting-edge AI solutions, our expertise covers all the bases.
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
