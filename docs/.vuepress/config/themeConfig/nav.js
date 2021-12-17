// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '操作系统',
    link: '/kernel/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
         text: 'linux内核',
         items:[
           { text: '内存管理', link: '/kernel/memory/' },
         ],
      },
      {
        text: 'TubuOS',
        items:[
          { text: '项目创建', link: '/pages/1491f1/' },
        ],
      },
    ],
  },
  {
    text: '电路知识',
    link: '/circuit/',
    items: [
      { text: 'AD的使用', link: '/circuit/use/' },
    ],
  },
  {
    text: '深度学习',
    link: '/deeplearn/',
    items: [
      { text: 'opencv4', link: '/pages/1491f1/' },
    ],
  },
  {
    text: '多媒体技术分享',
    link: '/media/',
    items: [
      { text: '多媒体技术基础', link: '/media/basic/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
