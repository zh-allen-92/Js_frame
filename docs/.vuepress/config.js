module.exports = {
  base: '/Js_frame/',
  title: '前端开发知识汇总-个人博客',
  description: '个人在前端开发过程中整理积累的前端方面的知识',
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: 'xes-wxapp', link: 'https://liuyun012.github.io/xes-wxapp/' },
      {text: 'GitHub', link: 'https://github.com/liuyun012/Js_frame/'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/jade语法整理',
        ]
      },

    ]
  }
}
