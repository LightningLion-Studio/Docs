# 注册相关接口

## 发送邮箱验证码（必须）
* 请求方式: `GET`
* URL: `/newuser/sendmail`

### 参数 

#### email
* 类型: string
* 说明:传入一个电子邮件地址

### 成功返回示例
```json
{
  "code": 200,
  "message": "发送成功",
  "info": {
    "accepted": [
      "1203970284@qq.com"
    ],
    "rejected": [],
    "envelopeTime": 132,
    "messageTime": 333,
    "messageSize": 713,
    "response": "250 OK: queued as.",
    "envelope": {
      "from": "gczgroup@qq.com",
      "to": [
        "1203970284@qq.com"
      ]
    },
    "messageId": "<7b5710fb-d152-85a0-45b9-eaa27ff8b67e@qq.com>"
  },
  "query": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 118,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
  }
}
```