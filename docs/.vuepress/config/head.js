// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '个人技术博客,内核开发,学习,面试,JavaScript,ES6,TypeScript,python,Node,git,github,markdown',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: 'code-Wy2QzuggWl' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
]
