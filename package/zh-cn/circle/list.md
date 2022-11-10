# 获取话题列表

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

输出偏移位置，如果limit=1并且offset=0，则仅输出列表里第一篇话题；如果limit=1并且offset=1，则仅输出列表里第二篇话题；以此类推

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
较不推荐使用order=1，因为这是固定榜单，如果某个话题热度极高，但第二篇话题远远达不到第一篇话题的热度，那么此话题会永远占据order=1榜首，因此这样对于增加其他话题的浏览量并无益处。
:::

## 返回示例

当请求频繁时，cache（即缓存）会为true，表示当前请求为缓存请求。

话题数据较大，如果全量使用mySQL查询会导致高并发崩溃，使用limit、ffset指定范围加载，既能达到按需加载、解决页面卡顿的问题，也真正实现了懒加载。

文章与话题返回的数据结构都是基本相同的。

``` json
{
  "code": 200,
  "message": "",
  "cache": false,
  "data": [
    {
      "id": 1,
      "title": "社区规定",
      "data": "<h3 id=\"欢迎来到心电社区，请阅读以下规则哦~\"><a href=\"#欢迎来到心电社区，请阅读以下规则哦~\">欢迎来到心电社区，请阅读以下规则哦~</a></h3><ol>\n<li>严禁发布/讨论政治、宗教歧视、色情、赌博、毒品、反动、暴力、恐怖的相关内容。</li><li>严禁发送大量无意义文本、人身攻击、辱骂他人、引战、吵架或令群内秩序受影响的行为。</li><li>禁止散播谣言。</li><li>严禁上传/贩卖/发布有机会令群内成员的安全、隐私受威胁的文件/链接。</li><li>严禁发布任何广告信息；严禁以任何方式，发布除Apple设备外的交易信息。</li><li>严禁进行账户交易。</li><li>图内文字内容不得违反规定，若发送10条重复的文本按发送大量无意义文本处理。</li><li>私人恩怨请自己解决，不要上升到社区内。</li><li>禁止以任何方式攻击服务器。</li><li>不允许抢注账户行为。</li><li>多次违反以上规则将禁用账户并永久进入黑名单。</li><li>特殊群规及群规解释权归管理人员所有。</li></ol>\n<p>*<em>本网站正在内测，请勿泄露网址与其他相关信息o(\\_////▽////\\_)q</em></p>\n",
      "comment": "open",
      "poster": "",
      "status": "publish",
      "author": 1,
      "view": 0,
      "date": "1665899772102",
      "category": 0
    },
    {
      "id": 2,
      "title": "Apple Watch Ultra 与新一代 AirPods Pro 周五起在零售店正式发售",
      "data": "<p><span class=\"figure\"><img src=\"https://www.apple.com.cn/newsroom/images/product/availability/Apple-Watch-Ultra-AirPods-Pro-2nd-gen-hero_big.jpg.medium.jpg\" title=\"\" alt=\"9 月 23 日起，坚固耐用、功能强大的 Apple Watch Ultra 与迄今最先进的 AirPods 将在全球 Apple Store 零售店正式发售。\" zoom><span class=\"figcaption\">9 月 23 日起，坚固耐用、功能强大的 Apple Watch Ultra 与迄今最先进的 AirPods 将在全球 Apple Store 零售店正式发售。</span></span>9 月 23 日起，坚固耐用、功能强大的 Apple Watch Ultra 与迄今最先进的 AirPods 将在全球 Apple Store 零售店正式发售。<br>9 月 23 日（周五）起，最为坚固耐用、功能强大的 Apple Watch 与迄今最先进的 AirPods 在全球 Apple Store 零售店和 Apple 授权经销商处正式发售。此外，在线订购 Apple Watch Ultra 与 AirPods Pro（第二代）的顾客也将于周五起陆续收到产品。无论在店内或线上，顾客均可体验所有新产品，Apple Specialist 专家也时刻准备为顾客提供个性化支持与建议。</p>\n<h2 id=\"Apple Watch Ultra\"><a href=\"#Apple Watch Ultra\">Apple Watch Ultra</a></h2><p>Apple Watch Ultra 从极限运动中受到启发，带来全新大胆设计与为耐力、探索与冒险活动打造的一系列强大功能。49 毫米钛金属表壳与平面蓝宝石玻璃表镜呈现迄今最大、最明亮的 Apple Watch 显示屏，并配备可自定义的操作按钮，方便用户快捷使用大量实用功能。Apple Watch Ultra 拥有 Apple Watch 中最持久的电池续航能力，在正常使用条件下最长可达 36 小时1。此外，通过全新低电量设置，电池续航时间更可延长至 60 小时，适合连续多日的佩戴体验2。全新“寻路者”表盘专为 Apple Watch Ultra 的大面积显示屏设计，包括融入时间显示区域的指南针，并提供了可容纳多达 8 项复杂功能的空间。随 Apple Watch Ultra 同时推出的还有三款全新表带——野径回环式表带、高山回环式表带和海洋表带，分别以独特设计为每一场冒险提供安全舒适的佩戴体验。</p>\n<p><span class=\"figure\"><img src=\"https://www.apple.com.cn/newsroom/images/product/availability/Apple-Watch-Ultra-lifestyle-adventure_big.jpg.medium.jpg\" title=\"\" alt=\"Apple Watch Ultra 配备更大、更明亮的显示屏，采用大胆设计，是冒险家与探索者在多种环境下的理想设备，无论日常生活还是极端条件都能应对自如。\" zoom><span class=\"figcaption\">Apple Watch Ultra 配备更大、更明亮的显示屏，采用大胆设计，是冒险家与探索者在多种环境下的理想设备，无论日常生活还是极端条件都能应对自如。</span></span>Apple Watch Ultra 配备更大、更明亮的显示屏，采用大胆设计，是冒险家与探索者在多种环境下的理想设备，无论日常生活还是极端条件都能应对自如。</p>\n<p>对于耐力型运动员及有志于挑战体能极限的用户而言，Apple Watch Ultra 是一款卓越的设备。它具备 Apple Watch 迄今最精确的 GPS 功能，为用户提供高度准确的距离、配速与路线数据，以供训练与竞赛之用。它在 Apple Watch 中首次配备了精密双频 GPS，包括 L1 与最新的 L5 频率，并采用了全新定位算法。Apple Watch Ultra 的电池续航时间足够伴随用户完成长距离马拉松。<br>Apple Watch Ultra 配备更大、更明亮的显示屏，采用大胆设计，是冒险家与探索者在多种环境下的理想设备，无论日常生活还是极端条件都能应对自如。watchOS 9 中全面重新设计的指南针 app 可显示更多深度信息与三种独特视图，并提供航点与回溯功能。<br>Apple Watch Ultra 为水上运动设计，包括风筝冲浪与尾波滑水等极限运动，并通过全新 Oceanic+ app 助力深度 40 米以内的休闲式水肺潜水3。为支持这些水下冒险，Apple Watch Ultra 通过了 WR100 认证，并推出水深 app，以发挥全新深度计的作用。</p>\n<h2 id=\"AirPods Pro（第二代）\"><a href=\"#AirPods Pro（第二代）\">AirPods Pro（第二代）</a></h2><p>AirPods Pro（第二代）由全新 H2 芯片驱动，解锁突破性音频表现，包括主动降噪功能与通透模式的重大升级，同时带来体验空间音频的独特方式，进一步提升沉浸感。用户可以使用 iPhone 上的原深感摄像头创建个人空间音频档案，享受专为他们定制的聆听体验。<br>现在，用户可以直接使用耳机柄的触控操作控制媒体播放和音量调节。此外，新一代 AirPods Pro 还带来更持久的电池续航、全新的充电盒，并新增一种耳塞尺寸，以更好地贴合用户耳形。为在旅行时提供更多灵活选择，用户可以使用 Apple Watch 充电器为 AirPods Pro 充电，此外，MagSafe 充电器、Qi 认证充电器或闪电连接线也可兼容为其充电。AirPods Pro 还配备全新设计的抗汗抗水充电盒5，并包含挂绳孔6，让设备随时触手可及。精确查找功能与内置扬声器也让用户更轻松地定位 AirPods Pro。顾客还可镌刻自己的拟我表情，定制个性化充电盒。<br><span class=\"figure\"><img src=\"https://www.apple.com.cn/newsroom/images/product/availability/Apple-AirPods-Pro-2nd-gen_inline.jpg.medium.jpg\" title=\"\" alt=\"全新 AirPods Pro 为通透模式、空间音频及深受顾客喜爱的便利功能带来重大升级，降噪性能也比前代翻倍提升。\" zoom><span class=\"figcaption\">全新 AirPods Pro 为通透模式、空间音频及深受顾客喜爱的便利功能带来重大升级，降噪性能也比前代翻倍提升。</span></span>全新 AirPods Pro 为通透模式、空间音频及深受顾客喜爱的便利功能带来重大升级，降噪性能也比前代翻倍提升。</p>\n<h2 id=\"多种选购方式\"><a href=\"#多种选购方式\">多种选购方式</a></h2><p>无论顾客在零售店内还是通过 apple.com.cn 或 Apple Store app 选购产品，Apple Specialist 专家都时刻准备提供帮助，支持顾客的各种购物需求。无论顾客需要选择适合自己的产品、了解按月分期付款选项、使用符合条件的设备折抵换购新产品，还是转移数据与设置新设备，世界各地高度专业的零售团队成员都将为顾客提供业界一流的支持服务。</p>\n<h2 id=\"价格与上市时间\"><a href=\"#价格与上市时间\">价格与上市时间</a></h2><p>Apple Watch Ultra 与 AirPods Pro（第二代）将于 9 月 23 日（周五）起在零售店正式发售。<br>Apple Watch Ultra 售价为 RMB 6299，AirPods Pro（第二代）售价为 RMB 1899。<br>顾客购买 AirPods Pro（第二代）时，可免费添加拟我表情镌刻（仅限通过 Apple Store app 购买）。如需了解拟我表情镌刻服务的更多信息，请使用 Apple Store app。<br>购买 AirPods Pro（第二代）的新订阅用户可免费试听 Apple Music 六个月。如需了解优惠详情，请查看 apple.com.cn/promo。<br>与运行最新系统的 Apple 设备配对，以使用 AirPods Pro（第二代）的完整功能。个性化空间音频配置和查找功能将于今年 10 月随 iPadOS 16 和 macOS Ventura 发布。</p>\n",
      "comment": "open",
      "poster": "",
      "status": "publish",
      "author": 1,
      "view": 0,
      "date": "",
      "category": 0
    }
  ]
}
```