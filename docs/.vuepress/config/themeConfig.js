const nav = require('./themeConfig/nav.js');
const sidebar = require('./themeConfig/sidebar.js');
//const htmlModules = require('./themeConfig/htmlModules.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/kinglogo.png', // 导航栏logo
  //repo: 'NingbinWang', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 5, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

   bodyBgImg: [
     'https://img-blog.csdnimg.cn/cover1/0826/422939250963120306.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,image_MjAyMDA3MTUxNjIxMDEzOC5wbmc=,size_16,color_FFFFFF,t_70,image/resize,m_lfit,w_962#pic_center',
   ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'alex_king', // 必需
    link: 'https://github.com/NingbinWang', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'https://cdn.jsdelivr.net/gh/samuelwnb/imgbed/blog/kinglogo.png',
    name: 'AlexKing阁下',
    slogan: 'When Technology Becomes Absolute Passion!',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/NingbinWang',
      },
      {
        iconClass: 'icon-zhihu',
        title: 'Zhihu',
        link: 'https://www.zhihu.com/people/cnskeyline',
      },
      {
        iconClass: 'icon-csdn',
        title: 'csdn',
        link: 'https://blog.csdn.net/u013983194',
      },
      {
        iconClass: 'icon-bilibili',
        title: 'bilibili',
        link: 'https://space.bilibili.com/52331336',
      },

    ],
  },
  footer: {
    // 页脚信息
    createYear: 2021, // 博客创建年份
    copyrightInfo:
      'King Alex | <a href="http://www.miitbeian.gov.cn" target="_blank">苏ICP备18018270号</a>', // 博客版权信息，支持a标签
  },
 // htmlModules // 插入hmtl(广告)模块
}
