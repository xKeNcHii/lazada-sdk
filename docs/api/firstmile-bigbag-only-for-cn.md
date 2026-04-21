# FirstMile Bigbag(only for CN)

## GetChannelcodeByFirstMileNo

<a id="logistics-cngfc-fulfill-getchannelcode"></a>

- **Path**: `/logistics/cngfc/fulfill/getchannelcode`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-14 15:10:57

get channelcode by first mile No

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `firstMileNos` · _String[]_ · **required** — 首公里面单号

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — success
  - `module` · _Object[]_ · **required** — module
  - `errorCode` · _String_ · **required** — errorCode
  - `errorMsg` · _String_ · **required** — errorMsg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | Token过期或输入有误 |

**Example**

Request sample 1:

```
firstMileNos=["xxx","xxx"]
```

Response sample 1:

```
result={"success":true}
```

---

## GetLazadaBigbagPDFLable

<a id="logistics-cnpms-bigbag-lable-getpdf"></a>

- **Path**: `/logistics/cnpms/bigbag/lable/getPdf`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:07:35

Get Lazada Bigbag PDF Lable

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `userInfo` · _Object_ · **required** — 用户信息
  - `appUserKey` · _String_ · **required** — ISV用户Id
- `client` · _String_ · **required** — ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称
- `orderCode` · _String_ · **optional** — 大包单号，即大包LP号，同handoverContentCode
- `remark` · _String_ · **optional** — 备注
- `locale` · _String_ · **optional** — 多语言，默认zh_CN
- `trackingNumber` · _String_ · **optional** — 大包运单号

**Response parameters**

- `result` · _Object_ · **required** — 同步响应结果
  - `data` · _Object_ · **required** — pdf数据内容
  - `success` · _Boolean_ · **required** — 是否成功，true:成功，false:失败
  - `errorCode` · _String_ · **required** — 错误码
  - `errorMsg` · _String_ · **required** — 错误描述

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `P-088-0101-10-10-192` | query across account relation not found | 跨店铺组包授权关系不存在 |
| `P-088-0000-00-15-209` | handover content not found | 未找到指定的大包 |

**Example**

Request sample 1:

```
userInfo={"appUserKey":"12345"}
client=test
orderCode=LP000000123
remark=备注
locale=zh_CN
trackingNumber=ST0000123
```

Response sample 1:

```
result=-
```

---

## LazadaBigbagCancel

<a id="logistics-cnpms-bigbag-cancel"></a>

- **Path**: `/logistics/cnpms/bigbag/cancel`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 14:14:05

Lazada Bigbag cancel

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `userInfo` · _Object_ · **required** — 用户信息
  - `appUserKey` · _String_ · **required** — ISV用户Id
- `client` · _String_ · **required** — ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称
- `orderCode` · _String_ · **optional** — 大包单号，即大包LP号，同handoverContentCode，orderCode、trackingNumber二者选其一
- `remark` · _String_ · **optional** — 备注
- `locale` · _String_ · **optional** — 多语言，默认zh_CN
- `trackingNumber` · _String_ · **optional** — 大包运单号，orderCode、trackingNumber二者选其一

**Response parameters**

- `result` · _Object_ · **required** — 同步响应结果
  - `data` · _Object_ · **required** — 取消结果
  - `success` · _Boolean_ · **required** — 是否成功，true:成功，false:失败
  - `error_code` · _String_ · **required** — 错误码
  - `error_msg` · _String_ · **required** — 错误描述

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `P-088-0101-10-10-191` | query across store account not found | 跨店铺组包账号不存在 |
| `P-088-0000-00-15-209` | handover content not found | 未找到指定的大包 |
| `P-088-0000-00-15-209` | handover content is not found | trackingNumber输入无效 |

**Example**

Request sample 1:

```
userInfo={"appUserKey":"12345"}
client=test
orderCode=LP000000123
remark=test
locale=zh_CN
trackingNumber=ST0000123
```

Response sample 1:

```
result=-
```

---

## LazadaBigbagCollectionPoints

<a id="logistics-cnpms-bigbag-querycollection"></a>

- **Path**: `/logistics/cnpms/bigbag/querycollection`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 14:38:25

Lazada bigbag query collection points

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `pageSize` · _String_ · **optional** — 每页N条
- `currentPage` · _String_ · **optional** — 当前第N页

**Response parameters**

- `result` · _Object_ · **required** — 同步响应结果
  - `data` · _Object_ · **required** — 返回结构体
    - `currentPageIndex` · _Number_ · **optional** — 当前页
    - `pageTotalNum` · _Number_ · **optional** — 总页数
    - `pageSize` · _Number_ · **optional** — 页大小
    - `totalCount` · _Number_ · **optional** — 集货点总量
    - `itemList` · _Object[]_ · **optional** — 返回集货点信息
  - `success` · _Boolean_ · **required** — 是否成功，true:成功，false:失败
  - `errorCode` · _String_ · **required** — 错误码
  - `erroMsg` · _String_ · **required** — 错误描述

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | Token过期或输入有误 |

**Example**

Request sample 1:

```
pageSize=1
currentPage=10
```

Response sample 1:

```
result=-
```

---

## LazadaBigbagCommit

<a id="logistics-cnpms-bigbag-commit"></a>

- **Path**: `/logistics/cnpms/bigbag/commit`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 14:38:27

Lazada bigbag commit

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `userInfo` · _Object_ · **required** — Lazada开放平台信息
  - `appUserKey` · _String_ · **required** — Lazada开放平台appUserKey
- `orderCodeList` · _String[]_ · **required** — 要创建交接单的小包编码集合，数量上限1000
- `weight` · _String_ · **required** — 重量
- `client` · _String_ · **required** — ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称
- `collectionInfo` · _Object_ · **optional** — 集货点信息
  - `pickUpCode` · _String_ · **required** — 集货点编码
- `remark` · _String_ · **optional** — 备注
- `pickupInfo` · _Object_ · **required** — 揽收信息
  - `courierCompany` · _String_ · **optional** — 快递公司
  - `receiverPhone` · _String_ · **optional** — 收件人手机号
  - `address` · _Object_ · **required** — 揽收地址信息
    - `country` · _String_ · **required** — 国家
    - `zipCode` · _String_ · **required** — 邮编
    - `city` · _String_ · **required** — 市
    - `province` · _String_ · **required** — 省
    - `street` · _String_ · **required** — 街道
    - `district` · _String_ · **required** — 区
    - `detailAddress` · _String_ · **required** — 详细地址
  - `phone` · _String_ · **optional** — 移动电话, 校验格式：^1(3|4|5|6|7|8|9)\d{9}$
  - `name` · _String_ · **required** — 揽收联系人名称，必须包含中文字符
  - `mobile` · _String_ · **required** — 固定电话，可空，校验格式：(^0[\d]{2,3}-[\d]{7,8}$)|(^400[\d]{3,4}[\d]{3,4}$)|(400-[\d]{3,4}-[\d]{3,4}$)
  - `email` · _String_ · **required** — 邮箱
  - `addressId` · _Number_ · **required** — 揽收地址ID
- `locale` · _String_ · **optional** — 多语言，默认zh_CN
- `weightUnit` · _String_ · **required** — 重量单位，克:g, 千克:kg，默认g
- `type` · _String_ · **required** — 类型：cainiao_pickup(菜鸟揽收)、self_post(自寄)、pickup_collection(集货)
- `sellerTrackingNumber` · _String_ · **optional** — 商家定义的大包标签号，一般不传，需要将自有大包号作为菜鸟面单号时才传
- `returnInfo` · _Object_ · **required** — 退件信息
  - `phone` · _String_ · **optional** — 固定电话，可空，校验格式：(^0[\d]{2,3}-[\d]{7,8}$)|(^400[\d]{3,4}[\d]{3,4}$)|(400-[\d]{3,4}-[\d]{3,4}$)
  - `name` · _String_ · **required** — 退件联系人名称，必须包含中文字符
  - `mobile` · _String_ · **required** — 手机号
  - `email` · _String_ · **required** — 邮箱
  - `addressId` · _Number_ · **required** — 退件地址ID
  - `fmReverseOption` · _String_ · **optional** — 退件方式 1-退回，2-销毁，3-自提
  - `address` · _Object_ · **required** — 退件地址
    - `province` · _String_ · **required** — 省
    - `street` · _String_ · **required** — 街道
    - `district` · _String_ · **required** — 区
    - `detailAddress` · _String_ · **required** — 详细地址
    - `country` · _String_ · **required** — 国家
    - `zipCode` · _String_ · **required** — 退件地址ID
    - `city` · _String_ · **required** — 市

**Response parameters**

- `result` · _Object_ · **required** — 同步响应结果
  - `data` · _Object_ · **required** — 响应信息，只有当success为true时才有效
    - `handoverOrderId` · _Number_ · **optional** — 交接单ID
    - `handoverContentId` · _Number_ · **optional** — 大包ID
    - `handoverContentCode` · _String_ · **optional** — 大包交接单号，即大包LP号
  - `success` · _Boolean_ · **required** — 是否成功，true:成功，false:失败
  - `errorCode` · _String_ · **required** — 错误码
  - `errorMsg` · _String_ · **required** — 错误描述

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `P-088-0101-10-10-140` | all parcel order not found | 选择的所有小包都找不到，请核对后重试 |
| `P-088-0101-10-10-191` | query across store account not found | 跨店铺组包账号不存在 |
| `P-088-0000-00-15-170` | seller has stores that are not packaged across stores | 商家存在未跨店铺组包的店铺 |
| `InvalidParameter` | The specified parameter “null#addressId” is not valid | addressId是必填的 |
| `UnknownRuntimeException` | The request has failed due to RPC runtime failure | weight需要填整数 |
| `P-088-0000-00-15-231` | pick up collection point info missing | pickup_collection的条件下pickUpCode必填 |
| `P-088-0000-00-15-205` | param is null | self_post的条件下sellerTrackingNumber必填 |

**Example**

Request sample 1:

```
userInfo={"appUserKey":"12345"}
orderCodeList=["LZD1001","LZD1002","LZD1003"]
weight=100
client=test
collectionInfo={"pickUpCode": ""}
remark=test
pickupInfo={"courierCompany":"st","receiverPhone":"1234567","address":{"country":"中国","zipCode":"310012","province":"浙江省","city":"杭州市","street":"蒋村街道","district":"西湖区","detailAddress":"文一西路680菜鸟"},"phone":"","name":"张三","mobile":"17601000007","email":"123@abc.com","addressId":"310106006"}
locale=zh_CN
weightUnit=g
type=cainiao_pickup
sellerTrackingNumber=B20127000438
returnInfo={"fmReverseOption":1,"address":{"country":"中国","zipCode":"310012","province":"浙江省","city":"杭州市","street":"蒋村街道","district":"西湖区","detailAddress":"文一西路680菜鸟"},"phone":"","name":"张三","mobile":"17601000007","email":"123@abc.com","addressId":"310106006"}
```

Response sample 1:

```
result=-
```

---

## LazadaBigbagUpdate

<a id="logistics-cnpms-bigbag-update"></a>

- **Path**: `/logistics/cnpms/bigbag/update`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:08:05

Lazada bigbag update

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `userInfo` · _Object_ · **required** — 用户信息
  - `appUserKey` · _String_ · **required** — 由ISV/ERP自定义，用于授权分组
- `weight` · _Number_ · **required** — 重量
- `locale` · _String_ · **optional** — 多语言，默认zh_CN
- `orderCodeList` · _String[]_ · **required** — 要创建交接单的小包编码集合，数量上限300
- `client` · _String_ · **required** — ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称
- `orderCode` · _String_ · **optional** — 大包单号，即大包LP号，orderCode、trackingNumber二者选其一
- `trackingNumber` · _String_ · **optional** — 大包运单号，orderCode、trackingNumber二者选其一
- `weightUnit` · _String_ · **required** — 重量单位，克:g, 千克:kg，默认g

**Response parameters**

- `result` · _Object_ · **required** — 同步响应结果
  - `data` · _Object_ · **required** — 返回更新结果
  - `success` · _Boolean_ · **required** — 是否成功，true:成功，false:失败
  - `errorCode` · _String_ · **required** — 错误码
  - `erroMsg` · _String_ · **required** — 错误描述

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `P-088-0000-00-15-300` | handover content status not committed、awaiting_tracking_number or awaiting_pickup, can not update | 大包状态非已提交、等待分配运单号、待揽收，不能更新该大包 |
| `P-088-0000-00-15-209` | handover content not found | 未找到指定的大包 |
| `P-088-0101-10-10-140` | all parcel order not found | 选择的所有小包都找不到，请核对后重试 |
| `P-088-0101-10-10-191` | query across store account not found | 跨店铺组包账号不存在 |

**Example**

Request sample 1:

```
userInfo={"appUserKey":"12345"}
weight=100
locale=zh_CN
orderCodeList=["LZD1001","LZD1002","LZD1003"]
client=test
orderCode=LP000000123
trackingNumber=ST0000123
weightUnit=g
```

Response sample 1:

```
result=-
```

---

## LazadaSellerAccountBind

<a id="logistics-cnpms-account-bind"></a>

- **Path**: `/logistics/cnpms/account/bind`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:07:41

Lazada seller account bind for big bag pick up

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `userInfo` · _Object_ · **required** — 用户信息
  - `appUserKey` · _String_ · **required** — ISV用户Id
- `client` · _String_ · **optional** — ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称
- `remark` · _String_ · **optional** — 备注
- `sellerList` · _Object[]_ · **required** — 授权商家列表，最多一次传50
  - `country` · _String_ · **required** — 国家简码，如：MY, TH, VN, SG, ID, PH
  - `sellerId` · _String_ · **optional** — 商家ID，sellerId与shortCode必填其一
  - `shortCode` · _String_ · **optional** — 商家账号，sellerId与shortCode必填其一。如果使用shortCode，则当前sellerList中的country必须一致
  - `sellerName` · _String_ · **optional** — 商家名称
- `locale` · _String_ · **optional** — 多语言，默认zh_CN

**Response parameters**

- `result` · _Object_ · **required** — 同步响应结果
  - `data` · _Object_ · **required** — 授权结果
  - `success` · _Boolean_ · **required** — 是否成功，true:成功，false:失败
  - `errorCode` · _String_ · **required** — 错误码
  - `errorMsg` · _String_ · **required** — 错误描述

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `P-088-0000-00-15-195` | query lzd merchant seller not found | 店铺信息不存在 |

**Example**

Request sample 1:

```
userInfo={"appUserKey":"12345"}
client=test
remark=备注
sellerList=[{"country": "my", "sellerId": "1000002082", "shortCode": "MYJ2DN82 "}]
locale=zh_CN
```

Response sample 1:

```
result=-
```

---

## QueryAddressInformaiton

<a id="logistics-cnpms-address-query"></a>

- **Path**: `/logistics/cnpms/address/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 17:09:32

Query Address Informaiton

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `country` · _String_ · **required** — 国家
- `zipCode` · _String_ · **optional** — 邮编
- `userInfo` · _Object_ · **required** — 用户信息
  - `appUserKey` · _String_ · **required** — 由ISV/ERP自定义，用于授权分组
- `city` · _String_ · **required** — 市
- `remark` · _String_ · **optional** — 备注
- `locale` · _String_ · **optional** — 多语言，默认zh_CN
- `province` · _String_ · **required** — 省
- `street` · _String_ · **required** — 街道
- `district` · _String_ · **required** — 区/县
- `detailAddress` · _String_ · **required** — 详细地址
- `client` · _String_ · **optional** — ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称

**Response parameters**

- `result` · _Object_ · **required** — 同步响应结果
  - `data` · _Object_ · **required** — 查询结果，当success为true时有效
  - `success` · _Boolean_ · **required** — 是否成功，true:成功，false:失败
  - `errorCode` · _String_ · **required** — 错误码
  - `errorMsg` · _String_ · **required** — 错误描述

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `P-088-0101-10-10-152` | address service result error | 地址解析失败，只能输入中国大陆地区 |
| `P-088-0000-00-15-213` | param country is null | 请输入中文地址，英文无效 |
| `P-088-0000-00-15-214` | param province is null | 请输入中文地址，英文无效 |
| `P-088-0000-00-15-215` | param city is null | 请输入中文地址，英文无效 |
| `P-088-0000-00-15-216` | param detailAddress is null | 请输入中文地址，英文无效 |
| `P-088-0000-00-15-217` | param country is not support | 请输入中文地址，英文无效 |
| `P-088-0000-00-15-218` | params is null | 请输入中文地址，英文无效 |

**Example**

Request sample 1:

```
country=中国
zipCode=3455657
userInfo={"appUserKey":"12345"}
city=杭州市
remark=备注
locale=zh_CN
province=浙江省
street=蒋村街道
district=西湖区
detailAddress=文一西路西溪首座
client=test
```

Response sample 1:

```
result=-
```

---

## QueryLazadaBigbagInfo

<a id="logistics-cnpms-bigbag-query"></a>

- **Path**: `/logistics/cnpms/bigbag/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-01 10:22:46

Query Lazada Bigbag Info

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `userInfo` · _Object_ · **required** — 用户信息
  - `appUserKey` · _String_ · **required** — ISV用户Id
- `client` · _String_ · **required** — ISV名称，ISV：ISV-ISV英文或拼音名称、商家ERP：SELLER-商家英文或拼音名称
- `orderCode` · _String_ · **optional** — 大包单号，即大包LP号，同handoverContentCode，orderCode、trackingNumber二者选其一
- `remark` · _String_ · **optional** — 备注
- `locale` · _String_ · **optional** — 多语言，默认zh_CN
- `trackingNumber` · _String_ · **optional** — 大包运单号，orderCode、trackingNumber二者选其一

**Response parameters**

- `result` · _Object_ · **required** — 同步响应结果
  - `data` · _Object_ · **required** — 大包信息
  - `success` · _Boolean_ · **required** — 是否成功，true:成功，false:失败
  - `errorCode` · _String_ · **required** — 错误码
  - `errorMsg` · _String_ · **required** — 错误描述

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `P-088-0101-10-10-191` | query across store account not found | 跨店铺组包账号不存在 |

**Example**

Request sample 1:

```
userInfo={"appUserKey":"12345"}
client=test
orderCode=LP000000123
remark=remark
locale=zh_CN
trackingNumber=ST0000123
```

Response sample 1:

```
result=-
```

---

