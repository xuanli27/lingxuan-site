import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="text-blue-500">联系</span> 我们
      </h1>

      <div className="text-center text-gray-400 mb-10">
        <p>我们期待与您的联系</p>
      </div>

      <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg space-y-4">
        <div>
          <label className="block text-gray-400 mb-2" htmlFor="name">
            姓名
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 bg-gray-700 rounded-lg text-white focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2" htmlFor="email">
            邮箱
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 bg-gray-700 rounded-lg text-white focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2" htmlFor="message">
            内容
          </label>
          <textarea
            id="message"
            className="w-full p-2 bg-gray-700 rounded-lg text-white focus:ring focus:ring-blue-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          发送
        </button>
      </form>

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
