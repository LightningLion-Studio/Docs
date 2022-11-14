# 删除文章

* 请求方式：`POST`
* URL: `/post/delete`

::: warning
此接口必须使用cookie。在请求时请在URL中携带cookie的`GET`参数。
:::

## 参数
### id
* 类型：int  
* 说明：文章id。请确保该文章id的作者为当前已登录用户的作者。