# 个人主页 · Personal Site

一个基于 **React + Vite** 构建的现代化个人主页，部署在 GitHub Pages（`xuany14.github.io`），内置明暗主题切换、响应式布局与基于 GitHub Discussions 的评论区。

## ✨ 特性

- ⚡️ React 18 + Vite 5，极速构建
- 🌗 亮色 / 暗色主题（记忆用户选择）
- 📱 完全响应式，移动端友好
- 🎬 滚动入场动画
- 💬 评论区（Giscus，无需自建后端）
- 🚀 推送即自动部署（GitHub Actions）

## 🗂 目录结构

```
.
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css            # 全局样式 / 设计系统
│   ├── config/
│   │   ├── site.js          # ★ 所有站点文案与数据都在这里改
│   │   └── comments.js      # 评论区（Giscus）配置
│   └── components/          # 各板块组件
└── .github/workflows/deploy.yml
```

## 🛠 本地开发

```bash
npm install
npm run dev        # 开发预览 http://localhost:5173
npm run build      # 生产构建到 dist/
npm run preview    # 预览构建产物 http://localhost:4173
```

## ✏️ 如何修改内容

**几乎不需要动代码**——打开 `src/config/site.js`，修改：

- `name` / `title` / `tagline` / `bio`：个人信息
- `avatar`：头像（默认 `public/avatar.svg`，可换成自己的图片）
- `socials`：社交链接（支持 github / email / linkedin / twitter / weibo / zhihu / bilibili / telegram / website）
- `about` / `stats`：关于段落与数据指标
- `skills`：技能与熟练度（0–100）
- `projects`：项目卡片（标题、描述、标签、预览/源码链接）

修改后保存即可，部署会自动更新。

## 💬 启用评论区（Giscus）

评论区基于 [Giscus](https://giscus.app)，使用你仓库的 GitHub Discussions，**免费、无需服务器**。首次使用前需完成两步：

1. 在仓库 **Settings → Features** 中开启 **Discussions**。
2. 访问 [giscus.app](https://giscus.app)，用 GitHub 登录并授权 Giscus 应用，按提示生成配置，把得到的 **Repository ID** 与 **Category ID** 填入 `src/config/comments.js` 的 `repoId` 与 `categoryId` 字段。
3. 提交并推送，刷新页面即可看到评论区。

> 未填写前，评论区会显示一段引导提示，不影响其他功能。

## 🚀 部署（已默认配置好）

仓库已包含 `.github/workflows/deploy.yml`，**推送到 `master` 分支即自动构建并部署**。你只需在仓库中开启一次 Pages：

1. 打开仓库 **Settings → Pages**。
2. **Build and deployment → Source** 选择 **GitHub Actions**。
3. 等待 Actions 跑完（或手动在 Actions 页 re-run），站点即上线于 <https://xuany14.github.io>。

> 说明：这是 `*.github.io` 用户页，GitHub Pages 只能从该仓库的默认分支经 GitHub Actions 发布（不能用 `gh-pages` 分支，那是项目页的做法）。

## 🧱 技术栈

React · Vite · GitHub Pages · Giscus
