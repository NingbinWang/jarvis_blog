// ！！！注：此文件没有使用到，仅用于测试和侧边栏数据格式的参考。

// 侧边栏
module.exports = {
  '/01.内核技术/': [
    {
      title: 'kernel',
      collapsable: false, //是否可折叠，可选的，默认true
      children: [
        ['01.JavaScript/01.JavaScript中的名词概念','JavaScript中的名词概念'],
      ]
    },
  ],
  '/02.电路/': [
    {
      title: 'html-css',
      collapsable: false,
      children: [
        ['01.html-css/00.flex布局语法','flex布局语法'],
      ]
    },
  ],
  '/03.技术杂谈/': [
    {
      title: '技术杂谈',
      collapsable: false, //是否可折叠，可选的，默认true
      sidebarDepth: 2, // 深度，可选的, 默认值是 1
      children: [
        ['01.Git使用手册','Git使用手册'], // 同 {path: '01.Git使用手册', title: 'Git使用文档'}
      ]
    }
  ],
  '/04.其他/': [
    {
      title: '学习',
      collapsable: false,
      children: [
        ['01.学习/01.学习网站','学习网站'],
      ]
    },
    {
      title: '学习笔记',
      collapsable: false,
      children: [
        ['02.学习笔记/01.小程序笔记','小程序笔记'],
      ]
    },
    {
      title: '面试',
      collapsable: false, //是否可折叠，可选的，默认true
      children: [
        ['03.面试/01.面试问题集锦','面试问题集锦'],
      ]
    },
    ['01.在线工具','在线工具'],
    ['02.友情链接','友情链接'],
  ],
}
