// ============================================================
//  站点内容配置 —— 只需修改这里即可更换全部文案与数据
// ============================================================

export const site = {
  // 基本信息
  name: 'Xuan Y',
  nickname: 'XuanY14',
  title: '研究生 · 全栈开发者',
  tagline: '用代码把想法变成现实',
  bio: '热爱构建产品与开源工具，关注 Web 开发、数据与交互体验。这里是我的数字花园，记录项目、技能与一点思考。',
  avatar: '/avatar.svg',
  email: '2063323240@qq.com',
  location: '中国',

  // 社交链接（type 用于匹配图标：github / email / linkedin / twitter / weibo / zhihu / bilibili / telegram / website）
  socials: [
    { type: 'github', label: 'GitHub', url: 'https://github.com/XuanY14' },
    { type: 'email', label: 'Email', url: 'mailto:2063323240@qq.com' },
    { type: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { type: 'twitter', label: 'X / Twitter', url: 'https://twitter.com/' },
    { type: 'bilibili', label: 'Bilibili', url: 'https://space.bilibili.com/' },
  ],

  // 关于我（支持多段）
  about: [
    '你好，我是 Xuan Y，一名正在探索技术与产品边界的开发者。',
    '平时喜欢把复杂的问题拆解成小而美的工具，相信好的工程体验来自对细节的执着。除了写代码，也喜欢记录学习过程，与更多人交流。',
  ],

  // 数据指标（可选，展示在关于区）
  stats: [
    { label: '开源项目', value: '20+' },
    { label: '技术文章', value: '50+' },
    { label: 'GitHub Stars', value: '1.2k' },
  ],

  // 技能（level 为 0-100 的进度，用于技能条）
  skills: [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React / Vue', level: 88 },
    { name: 'Node.js / Python', level: 82 },
    { name: 'UI / 交互设计', level: 75 },
    { name: 'Linux / DevOps', level: 70 },
  ],

  // 项目展示（卡片）
  projects: [
    {
      title: 'Personal Site',
      description: '你正在浏览的这个用 React + Vite 构建的个人主页，支持明暗主题与评论区。',
      tags: ['React', 'Vite', 'GitHub Pages'],
      link: 'https://xuany14.github.io',
      repo: 'https://github.com/XuanY14/xuany14.github.io',
    },
    {
      title: 'Project Alpha',
      description: '一个轻量的前端组件库，开箱即用、可定制主题，已服务多个内部项目。',
      tags: ['TypeScript', 'UI', 'npm'],
      link: '#',
      repo: '#',
    },
    {
      title: 'DataViz Toolkit',
      description: '基于 Canvas 的数据可视化工具，支持大规模点云与实时动画渲染。',
      tags: ['Canvas', '可视化', '性能'],
      link: '#',
      repo: '#',
    },
    {
      title: 'Notes Hub',
      description: '支持双向链接的本地优先笔记应用，数据完全掌握在自己手里。',
      tags: ['Electron', '本地优先', 'Markdown'],
      link: '#',
      repo: '#',
    },
  ],

  // 联系方式文案
  contactText: '想合作、交流，或者只是打个招呼？随时联系我。',
}

export default site
