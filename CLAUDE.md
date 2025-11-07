# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

上海灵渲科技官方网站 - 一个以"数字创世纪"为核心理念的现代化企业网站，展示生成式AI、3D渲染和多模态交互技术能力。

## 技术栈

- **框架**: Next.js 15 (App Router) + React 19
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **3D渲染**: React Three Fiber + Drei + Postprocessing
- **动画**: GSAP + Framer Motion
- **UI组件**: shadcn-ui (New York style)
- **国际化**: next-intl (支持中文/英文)
- **包管理**: pnpm

## 常用命令

```bash
# 开发
pnpm dev              # 启动开发服务器 (http://localhost:3000)

# 构建与部署
pnpm build            # 生产构建
pnpm start            # 启动生产服务器

# 代码质量
pnpm lint             # ESLint 检查
```

## 项目架构

### 目录结构

```
app/
  [locale]/          # 国际化路由 (zh/en)
    layout.tsx       # 布局配置（字体、元数据、next-intl）
    page.tsx         # 各页面入口
components/
  3d/                # 3D组件（粒子系统、场景）
  layout/            # 布局组件（导航、页脚）
  sections/          # 页面区块组件
  ui/                # shadcn-ui 基础组件
lib/
  3d/                # 3D工具函数
  hooks/             # 自定义Hooks
  utils.ts           # 通用工具（cn等）
messages/            # 国际化翻译文件
  zh.json
  en.json
middleware.ts        # next-intl 中间件
```

### 核心架构特点

**国际化路由系统**
- 使用 next-intl 实现中英文切换
- 路由格式: `/zh/*` 和 `/en/*`
- 默认语言: 中文 (zh)
- 翻译文件位于 `messages/` 目录

**3D渲染系统**
- 基于 React Three Fiber 的声明式3D场景
- `ParticleBackground.tsx` 实现核心粒子系统
- 支持鼠标交互、动态颜色、神经网络连接线
- 性能优化：限制连接数、使用 dpr 控制渲染质量

**设计系统**
- 色彩方案定义在 `globals.css` 的 `:root` 中
- 主色: `--genesis-cyan` (#64FFDA)
- 辅色: `--impulse-violet` (#915EFF)
- 背景: `--deep-space` (#050816)
- 自定义工具类: `.glow`, `.gradient-text`, `.glass-card`, `.title-*`

**字体系统**
- 标题: Exo 2 (--font-exo)
- 正文: Lato (--font-lato)
- 代码: IBM Plex Mono (--font-ibm-mono)

## 开发规范

### 组件开发
- 所有3D组件必须使用 `'use client'` 指令
- 导航和交互组件需要 `'use client'`
- 优先使用 shadcn-ui 组件，保持设计一致性
- 使用 `cn()` 工具函数合并 className

### 样式规范
- 使用 Tailwind CSS 工具类
- 品牌色使用 CSS 变量（如 `text-genesis-cyan`）
- 复杂效果使用自定义工具类（`.glow`, `.glass-card`）
- 响应式标题使用 `.title-xl/lg/md`

### 3D性能优化
- 粒子数量默认 2000-3000，移动端需降低
- 连接线限制在 200 条以内
- 使用 `dpr={[1, 2]}` 控制渲染质量
- 复杂场景考虑使用 `useFrame` 节流

### 国际化
- 所有用户可见文本必须通过 `messages/*.json` 管理
- 使用 `useTranslations()` Hook 获取翻译
- 路由链接需包含 locale 前缀

## 设计理念

**"数字创世纪"叙事**
- 首页采用滚动叙事：粒子云 → 神经网络 → 智能晶体 → 应用生态
- 视觉元素强调科技感、未来感、沉浸感
- 大量使用辉光效果、粒子系统、平滑动画

**交互原则**
- 鼠标交互影响粒子运动
- 导航栏滚动时显示玻璃形态背景
- 按钮和卡片有悬停提升效果
- 微交互增强精致度

## 注意事项

- Next.js 15 使用 Turbopack 作为开发服务器
- Tailwind CSS v4 使用新的 `@import` 语法
- shadcn-ui 组件路径别名: `@/components/ui`
- 3D场景的 `pointer-events: none` 避免阻挡页面交互
- 移动端需简化或禁用复杂3D效果
