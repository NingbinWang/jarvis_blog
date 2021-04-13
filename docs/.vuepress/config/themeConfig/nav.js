// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '内核技术',
    link: '/kernel/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
         text: 'linux内核',
         items:[
           { text: '任务调度', link: '/pages/8143cc480faf9a11/' },
           { text: '内存管理', link: '/pages/5d463fbdb172d43b/' },
           { text: '虚拟内存', link: '/pages/5d463fbdb172d43b/' },
           { text: '锁与进程间通信', link: '/pages/5d463fbdb172d43b/' },
           { text: '设备驱动', link: '/pages/5d463fbdb172d43b/' },
           { text: '虚拟文件系统', link: '/pages/5d463fbdb172d43b/' },
           { text: '文件系统', link: '/pages/5d463fbdb172d43b/' },
           { text: '网络', link: '/pages/5d463fbdb172d43b/' },
           { text: '子系统', link: '/pages/5d463fbdb172d43b/' },
         ],
      },
      {
        text: 'stm32内核',
        items:[
          { text: '任务调度', link: '/pages/8143cc480faf9a11/' },
        ],
      },

    ],
  },
  {
    text: '电路知识',
    link: '/circuit/',
    items: [
      { text: '画图', link: '/pages/8309a5b876fc95e3/' },
      { text: 'fusion360', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: '深度学习',
    link: '/deeplearn/',
    items: [
      { text: 'tenflow', link: '/pages/9a7ee40fc232253e/' },
    ],
  },
  {
    text: '项目分享',
    link: '/project/',
    items: [
      { text: 'nano-stlink', link: '/pages/9a7ee40fc232253e/' },
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
