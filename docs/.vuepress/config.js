module.exports = {
  title: "前端技能点总结",
  description: "前端",
  base: '/frontappBase/', // 项目根路径
  cache: false,
  dest: './dist/', // 打包后的文件夹路径，为了方便，我把 dist 文件夹放到了根目录上
  // head 标签中的额外内容
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 这个是标签页 logo
  ],
  // 语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  themeConfig: {
    // 顶部导航
    nav: [
    ],
    
    // 侧边栏
    sidebar: [
      {
        title: 'js基础知识',
        collapsable: false,
        children: [
          ['/jsbase/home', '数字，字符串比较的转换']
        ]
      }
    ],
    sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

    // Git 仓库和编辑链接
    repo: 'https://github.com/yating291018/frontappBase', // 你的仓库
    repoLabel: 'GitHub', // 导航栏上的文本

    editLinks: false
  }
}