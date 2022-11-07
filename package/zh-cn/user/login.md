# 登录

* 请求方式：`GET`
* URL: `/newuser/login`

## 参数
### username
* 类型：string
* 说明：用户名

### password
* 类型：string
* 说明：密码

## 成功返回示例
`data->data`为时间戳，即该token到期时间。

`data->token`为用户验证依据，凡是需要验证cookie的接口，无论该接口说明了是`GET`还是`POST`，都得在该接口的后面加上`GET`参数，如：

```
/post/delete/?cookie=16b4d535f4e928a3d516f2946dc407d3
```
另外，墙裂不建议把用户输入的账号密码保存在本地，本身这个token验证系统就不够安全，如果再来这套，估计整个系统都得垮掉。

下面是返回示例：
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "id": 1,
    "data": "1668317207717",
    "token": "16b4d535f4e928a3d516f2946dc407d3"
  }
}
```