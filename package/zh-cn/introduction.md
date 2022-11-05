# Nai <Badge type="warning" text="Beta" /><Badge text="v2.0.1" />
本来这个后端项目只是因为我想写个博客而做的后端，起名为`Nai`，中文名`奈`。最近接到⚡️🦁️的社区项目，遂将这个博客项目扩展为⚡️🦁️的社区项目。

## 链接直达
[点击直达心电社区首页](https://light.xhhzs.cn) <Badge type="warning" text="Beta" />

[点击直达腕上B站官网](https://watchbili.com) <Badge text="正式版官网网址" />

## 唠嗑

这个项目一开始写的很垃圾，但是当时我对这个项目标准是：就只是个博客罢了，又不是什么高大上来个并发啥的，能跑就行😂  

从接到⚡️🦁️的项目后那个时候Nai已经在开发阶段了，于是就想在Nai的基础上改造了下，勉强还能撑得起。

但是后来，因为屎山超级多，很多东西甚至cookie鉴权都没用到模块化，而是全是用`if ... else if`进行判断😂导致后来冗余代码贼多（  

是时候改改了！

在此基础上，Nai V2就出来了。相比V1版本的屎山层叠，V2版本的特点有很多，例如：
* API真正采用了标准的Restful API规范，而不是垃圾json乱输出，大大改善了前端对接开发的体验；
* V1版本仅用了MySQL数据库，毕竟对于一个博客来说，MySQL已经够用了（确信）。而在V2版本中使用了Redis作为缓存，可统一设置缓存过期时间，大大减轻了MySQL的负担；
* V1版本没有用任何操作进行API鉴权，而V2版本允许用户自己申请开发者身份，获取相应的APP ID、APP Secret开发各种心电社区的前端。

::: warning
目前心电社区仍处于开发阶段，API权限暂未可公开申请，若想了解详情请加QQ 1203970284
:::

## 技术

### 前端技术栈
* 基础的Html/CSS/JavaScript，JS采用ES6以规范
* Vue3 + Vite + Vue Router + Pinia

::: tip
BB一句懒得使用TypeScript，因为大多数代码都是在手机上用Codesandbox撸。  


其实就是因为懒，TS技艺不精😋写出来，也是AnyScript（😏
:::

### 后端技术栈
* NodeJS + Express
* MySQL + Redis

## 人脉

### 关于⚡️🦁️

腕上系列软件作者。腕上系列包括腕上B站、腕上音乐、腕上资讯、腕上小说等多款Apple Watch APP。

### 关于我

请查看我的[GitHub主页](http://github.com/groupguanfang)。


代码即艺术。 
Zero 撰于 2022/9