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
           { text: '进程管理和调度', link: '/pages/1491f1/' },
           { text: '内存管理', link: '/kernel/memory/' },
           { text: '进程虚拟内存', link: '/pages/1491f1/' },
           { text: '锁与进程间通信', link: '/pages/1491f1/' },
           { text: '设备驱动程序', link: '/pages/1491f1/' },
           { text: '模块', link: '/pages/1491f1/' },
           { text: '虚拟文件系统', link: '/pages/1491f1/' },
           { text: '无持久存储的文件系统', link: '/pages/1491f1/' }, 
           { text: '网络', link: '/pages/1491f1/' },
           { text: '系统调用', link: '/pages/1491f1/' },
           { text: '内核活动', link: '/pages/1491f1/' },
           { text: '页缓存和块缓存', link: '/pages/1491f1/' },
           { text: '数据同步', link: '/pages/1491f1/' },
           { text: '页面回收和页交换', link: '/pages/1491f1/' },
         ],
      },
      {
        text: 'linux内核子系统',
        items:[
          { text: 'RTC子系统', link: '/pages/1491f1/' },
          { text: 'Remote Processor子系统', link: '/pages/1491f1/' },
          { text: 'Remote Processor Message子系统', link: '/pages/1491f1/' },
          { text: 'SCSI子系统', link: '/pages/1491f1/' },
          { text: 'SCSI Target子系统', link: '/pages/1491f1/' },
          { text: 'Security子系统', link: '/pages/1491f1/' },
          { text: 'SOUNDWIRE子系统', link: '/pages/1491f1/' },
          { text: 'SPI NOR子系统', link: '/pages/1491f1/' },
          { text: 'SPI子系统', link: '/pages/1491f1/' },
          { text: 'I2C子系统', link: '/pages/1491f1/' },
          { text: 'SPMI 子系统', link: '/pages/1491f1/' },
          { text: 'STAGING 子系统', link: '/pages/1491f1/' },
          { text: 'SWIOTLB 子系统', link: '/pages/1491f1/' },
          { text: 'TEE 子系统', link: '/pages/1491f1/' },
          { text: 'USB GADGET/PERIPHERAL 子系统', link: '/pages/1491f1/' },
          { text: 'USB SERIAL 子系统', link: '/pages/1491f1/' },
          { text: 'USB 子系统', link: '/pages/1491f1/' },
          { text: 'IIO(Industrial Input/Output)子系统', link: '/pages/1491f1/' },
          { text: 'PWM子系统', link: '/pages/1491f1/' },
          { text: 'regmap子系统', link: '/pages/1491f1/' },
          { text: 'cpufreq 子系统', link: '/pages/1491f1/' },
          { text: 'cpuidle 子系统', link: '/pages/1491f1/' },
          { text: 'pinctrl 子系统', link: '/pages/1491f1/' },
          { text: 'gpio 子系统', link: '/pages/1491f1/' },
          { text: 'mtd 子系统', link: '/pages/1491f1/' },
          { text: 'PM wakeup source 子系统', link: '/pages/1491f1/' },
          { text: 'Runtime PM 子系统', link: '/pages/1491f1/' },
        ],
      },
      {
        text: 'linux内核调试',
        items:[
          { text: '并发与同步', link: '/pages/1491f1/' },
          { text: '中断管理', link: '/pages/1491f1/' },
          { text: '内核调试与性能优化', link: '/pages/1491f1/' },
        ],
      },
      {
        text: 'stm32内核',
        items:[
          { text: '任务调度', link: '/pages/1491f1/' },
        ],
      },

    ],
  },
  {
    text: '电路知识',
    link: '/circuit/',
    items: [
      { text: 'AD20知多少', link: '/pages/1491f1/' },
      { text: 'fusion360', link: '/pages/1491f1/' },
    ],
  },
  {
    text: '深度学习',
    link: '/deeplearn/',
    items: [
      { text: 'tenflow', link: '/pages/1491f1/' },
    ],
  },
  {
    text: '项目分享',
    link: '/project/',
    items: [
      { text: 'stm32demoboard', link: '/pages/1491f1/' },
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
