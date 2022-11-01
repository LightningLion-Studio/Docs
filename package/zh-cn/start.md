# 开始
跟着这个文档，开启社区启程。

## 鉴权
首先您得申请到相应的APPID和APP secret，并且确保您发起请求的域名已经配置在社区开发者中心。

开发时，请在每个请求前使用Http basic auth。

::: warning 认证内容
username: APP ID  
password: APP Secret
:::

## Cookie
用户登录后的cookie作为一个`get`参数附带在请求的URL中，无论该请求是post还是get还是post，凡是需要cookie的，URL中都必须带上cookie参数，否则无法鉴权。

