export default {
  title: "Nai V2",
  lang: "zh-CN",
  themeConfig: {
    footer: {
      message: 'Released this docs under the MIT License.',
      copyright: 'Copyright © 2021-present LightningLion Studio'
    },
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
        collapsible: true,
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
        collapsible: true,
        items: [
          {
            text: "获取全站公告",
            link: "/zh-cn/common/announcement"
          },
          {
            text: "全站PV",
            link: "/zh-cn/common/pv"
          },
        ]
      },
      {
        text: "文章",
        collapsible: true,
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
      },
      {
        text: "圈子",
        collapsible: true,
        items: [
          {
            text: "获取话题列表",
            link: "/zh-cn/circle/list"
          },
          {
            text: "获取单篇话题",
            link: "/zh-cn/circle/single"
          },
          {
            text: "新建话题草稿",
            link: "/zh-cn/circle/create"
          },
          {
            text: "删除话题",
            link: "/zh-cn/circle/delete"
          },
          {
            text: "获取所有圈子",
            link: "/zh-cn/circle/circle"
          },
        ]
      },
      {
        text: "用户",
        collapsible: true,
        items: [
          {
            text: "登录",
            link: "/zh-cn/user/login",
          },
          {
            text: "注册",
            link: "/zh-cn/user/register",
          },
        ]
      },
    ]
  }
}
