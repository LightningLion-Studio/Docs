export default {
  title: "Nai V2",
  lang: "zh-CN",
  themeConfig: {
    nav: [
      {
        text: '概述',
        link: '/zh-cn/introduction'
      },
      {
        text: '起步',
        link: '/zh-cn/start'
      },
      {
        text: '贡献者',
        link: '/zh-cn/contributor'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/LightningLion-Studio/Vue3.git'
      },
    ],
    sidebar: [
      {
        text:'起步',
        items: [
          {
            text: '简介',
            link: '/zh-cn/introduction'
          },
          {
            text: '快速开始',
            link: '/zh-cn/start'
          },
          {
            text: '贡献者',
            link: '/zh-cn/contributor'
          },
        ]
      },
      {
        text: "公共接口",
        items: [
          {
            text: "获取全站公告",
            link: "/zh-cn/common/announcement"
          },
        ]
      },
      {
        text: "文章",
        items: [
          {
            text: "获取文章列表",
            link: "/zh-cn/post/list"
          },
          {
            text: "获取单篇文章详情",
            link: "/zh-cn/post/single"
          },
          {
            text: "新建文章草稿",
            link: "/zh-cn/post/create"
          },
          {
            text: "删除文章",
            link: "/zh-cn/post/delete"
          },
        ]
      }
    ]
  }
}
