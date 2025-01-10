import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
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
            <li>邮箱：cczutang@gmail.com</li>
            <li>电话：177 0109 5357</li>
            <li>地址：上海市</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">合作伙伴</h2>
          <p>
            我们欢迎各种合作机会，尤其是跨行业的技术创新合作。如果您有项目合作或技术咨询需求，请填写表单，我们的团队会在24小时内回复您。
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">联系表单</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                姓名
              </label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                电子邮件
              </label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                留言内容
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit">提交</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

