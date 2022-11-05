# 开始 <badge type="warning" text="Beta" /><Badge text="v2.0.1" />
跟着这个文档，开启社区启程。

::: warning
文档与接口仍在快速迭代中，目前社区仍然为Beta内测状态，接口返回内容可能随时会出现改动。目前暂不推荐使用本API开发多端APP。
:::

## API地址
### V2 API
```
https://v2.api.light.xhhzs.cn/v2
```

### V1 API
```
https://api.light.xhhzs.cn
```

本文档为V2 API文档，V1 API目前非常不推荐使用，文档也极其不完善！

::: info
目前鉴权系统仍然在开发中，因此现在任何人都可以使用本API，无需任何鉴权
:::

## 鉴权
首先您得申请到相应的APPID和APP secret，并且确保您发起请求的域名已经配置在社区开发者中心。

开发时，请在每个请求前使用Http basic auth。

::: warning 认证内容
username: APP ID  
password: APP Secret
:::

## Cookie
用户登录后的cookie作为一个`get`参数附带在请求的URL中，无论该请求是post还是get还是post，凡是需要cookie的，URL中都必须带上cookie参数，否则无法鉴权。

