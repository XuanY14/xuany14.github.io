// ============================================================
//  评论区配置（基于 Giscus，使用 GitHub Discussions）
//  启用步骤见 README.md。只需填写下面两项即可：
//   1. 在仓库 Settings → Features 中开启 Discussions
//   2. 访问 https://giscus.app 安装 Giscus 应用并获取 repoId / categoryId
// ============================================================

export const giscus = {
  // 你的仓库（固定）
  repo: 'XuanY14/xuany14.github.io',
  repoId: '',            // ← 填入 giscus.app 提供的 Repository ID
  category: 'Announcements', // Discussions 中的分类名
  categoryId: '',        // ← 填入 giscus.app 提供的 Category ID
  mapping: 'pathname',   // 评论按页面路径关联
  reactionsEnabled: true,
  lang: 'zh-CN',
}

// 是否已配置好（用于组件判断是否渲染提示）
export const isGiscusConfigured = () =>
  Boolean(giscus.repoId && giscus.categoryId)

export default giscus
