const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题
   //theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "AlexKing的个人站",
  description: '个人技术博客,内核开发,学习,面试,JavaScript,ES6,TypeScript,python,Node,git,github,markdown',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
