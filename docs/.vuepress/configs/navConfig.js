/*
 * @Description: 头部navs导航配置文件,入口文件原本在config.js文件中,但抽离到了themeConfig.js中,该文件通过module.exports导出,在themeConfig.js中通过require方式引入
 * 集中配置管理头部nav导航栏
 * @docs: https://vuepress.docschina.org/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F-navbar
 */

const navs = [
  { text: '首页', link: '/' },
  { text: '导航', link: '/navigation/' },
  {
    text: 'LLM',
    items: [
      {
        text: '基础理论',
        items: [
          { text: 'transformer', link: '/llm/1_0_transformer' },
        ]
      },
      {
        text: 'ai应用',
        items: [
          { text: 'RAG', link: '/llm/4_1_rag' },
        ]
      },
      {
        text: '测评',
        items: [
          { text: 'RAG测试', link: '/llm/rag_1_test' },
        ]
      }
    ],
  },
  // { text: '数据库', link: '/database/' },
  // { text: '方法论', link: '/methodology/' },
  { text: '关于', link: '/about/' },
  {
    text: 'Github', link: 'https://github.com/muxicode/muxicode.github.io'
    // 下拉框的配置
    // items: [
    //     { text: 'Github', link: 'https://github.com/code' }
    // ]
  }
]

module.exports = navs;