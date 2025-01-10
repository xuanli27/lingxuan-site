import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; 2024 灵渲科技工作室. 保留所有权利.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm underline">
            隐私政策
          </Link>
          <Link href="/terms" className="text-sm underline">
            服务条款
          </Link>
        </div>
      </div>
    </footer>
  )
}

