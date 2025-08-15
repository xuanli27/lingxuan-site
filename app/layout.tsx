import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "上海灵渲科技 - 渲染未来，智能涌现",
  description: "上海灵渲科技专注于生成式AI、3D渲染和多模态交互技术，为客户提供前沿的数字化解决方案。",
};

// This layout only renders the children (which will be the locale layout)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
