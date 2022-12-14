# 获取圈子列表

* 请求方式：`GET`
* URL: `/topic`

## 参数
### limit
* 类型：int
* 默认： 10

输出限制，1时仅输出1篇，2时仅输出两篇，以此类推

### offset
* 类型：int
* 默认：0

输出偏移位置，如果limit=1并且offset=0，则仅输出列表里第一篇圈子；如果limit=1并且offset=1，则仅输出列表里第二篇圈子；以此类推

### order
* 类型：int
* 默认：1

该参数共有四个选项：
* order=1: 按热度排序
* order=2: 按时间排序
* order=3: 本日热门
* order=4: 本周热门
* order=5: 本月热门

::: tip
较不推荐使用order=1，因为这是固定榜单，如果某个圈子热度极高，但第二篇圈子远远达不到第一篇圈子的热度，那么此圈子会永远占据order=1榜首，因此这样对于增加其他圈子的浏览量并无益处。
:::

## 返回示例

当请求频繁时，cache（即缓存）会为true，表示当前请求为缓存请求。

圈子数据较大，如果全量使用mySQL查询会导致高并发崩溃，使用limit、ffset指定范围加载，既能达到按需加载、解决页面卡顿的问题，也真正实现了懒加载。

文章与圈子、话题返回的数据结构都是基本相同的。

```
// 正在建设中...
```