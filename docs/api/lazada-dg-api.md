# Lazada DG API

## InstallServiceCallBack

<a id="digital-install-servicecallback"></a>

- **Path**: `/digital/install/servicecallback`
- **Method**: `GET/POST`
- **Last modified**: 2022-11-21 14:46:20

Install the service callback interface

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `orderNo` · _String_ · **required** — service provider company orderId
- `thirdOrderNo` · _String_ · **required** — LZD orderLineId
- `type` · _String_ · **required** — type = 1 (mean install sevice finish)   type = 2(mean install update). type =3 (mean cancel install service)
- `servicePrice` · _String_ · **optional** — install service price
- `serviceDate` · _String_ · **optional** — install service date
- `jobStatus` · _String_ · **optional** — The installation status of the external company
- `jobReason` · _String_ · **optional** — Reasons for success or failure
- `extendInfo` · _String_ · **optional** — extendInfo

**Response parameters**

- `resultCode` · _String_ · **optional** — result code
- `resultMsg` · _String_ · **optional** — result message
- `transactionId` · _String_ · **optional** — LZD orderLineId
- `extendInfo` · _String_ · **optional** — extendInfo

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `00` | transaction success | transaction success |
| `01` | cancel success | cancel success |
| `02` | update serviceDate success | update serviceDate success |
| `99` | fail | fail |
| `11` | orderNo is empty | orderNo is empty |
| `12` | thirdOrderNo is empty | thirdOrderNo is empty |
| `13` | type is empty | type is empty |
| `14` | type not exist | type not exist |
| `15` | servicePrice is empty | servicePrice is empty |
| `16` | jobStatus is empty | jobStatus is empty |
| `17` | serviceDate is empty | serviceDate is empty |
| `21` | order processing | order processing |
| `31` | parse extendInfo to map fail | parse extendInfo to map fail |
| `32` | date format is wrong | date format is wrong |

**Example**

Request sample 1:

```
orderNo=9827281687778
thirdOrderNo=9827281687778
type=1
servicePrice=2000
serviceDate=2022-11-18
jobStatus=created
jobReason=success
extendInfo={"xxx":"xxx"}
```

Response sample 1:

```
resultCode=00
resultMsg=success
transactionId=9827281687778
extendInfo={"xxx":"xxx"}
```

---

## InstallServiceCallBack

<a id="digital-test-install-servicecallback"></a>

- **Path**: `/digital/test/install/servicecallback`
- **Method**: `GET/POST`
- **Last modified**: 2023-01-11 17:04:48

Install the service callback interface

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `orderNo` · _String_ · **required** — service provider company orderId
- `thirdOrderNo` · _String_ · **required** — LZD orderLineId
- `type` · _String_ · **required** — type = 1 (mean install sevice finish)   type = 2(mean install update). type =3 (mean cancel install service)
- `servicePrice` · _String_ · **optional** — install service price
- `serviceDate` · _String_ · **optional** — install service date
- `jobStatus` · _String_ · **required** — The installation status of the external company
- `jobReason` · _String_ · **optional** — Reasons for success or failure
- `extendInfo` · _String_ · **optional** — extendInfo

**Response parameters**

- `resultCode` · _String_ · **optional** — result code
- `resultMsg` · _String_ · **optional** — result message
- `transactionId` · _String_ · **optional** — LZD orderLineId
- `extendInfo` · _String_ · **optional** — extendInfo

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
orderNo=9827281687778
thirdOrderNo=9827281687778
type=1
servicePrice=2000
serviceDate=2022-11-18
jobStatus=created
jobReason=success
extendInfo={"xxx":"xxx"}
```

Response sample 1:

```
resultCode=00
resultMsg=success
transactionId=9827281687778
extendInfo={"xxx":"xxx"}
```

---

## InstallServiceCallBackForTest

<a id="digital-install-test-servicecallback"></a>

- **Path**: `/digital/install/test/servicecallback`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-06 20:44:47

Install the service callback interface

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `orderNo` · _String_ · **required** — service provider company orderId
- `thirdOrderNo` · _String_ · **required** — LZD orderLineId
- `type` · _String_ · **required** — type = 1 (mean install sevice finish)   type = 2(mean install update). type =3 (mean cancel install service)
- `servicePrice` · _String_ · **optional** — install service price
- `serviceDate` · _String_ · **optional** — install service date
- `jobStatus` · _String_ · **required** — The installation status of the external company
- `jobReason` · _String_ · **optional** — Reasons for success or failure
- `extendInfo` · _String_ · **optional** — extendInfo

**Response parameters**

- `resultCode` · _String_ · **optional** — result code
- `resultMsg` · _String_ · **optional** — result message
- `transactionId` · _String_ · **optional** — LZD orderLineId
- `extendInfo` · _String_ · **optional** — extendInfo

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
orderNo=9827281687778
thirdOrderNo=9827281687778
type=1
servicePrice=2000
serviceDate=2022-12-10
jobStatus=created
jobReason=success
extendInfo={"xxx":"xxx"}
```

Response sample 1:

```
resultCode=00
resultMsg=success
transactionId=9827281687778
extendInfo={"xxx":"xxx"}
```

---

## InuranceNotication

<a id="digital-insurance-notification"></a>

- **Path**: `/digital/insurance/notification`
- **Method**: `GET/POST`
- **Last modified**: 2022-10-09 14:02:38

Third party insurance company callback interface

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `orderNo` · _String_ · **required** — Insurance company order number
- `thirdOrderNo` · _String_ · **required** — lazada orderId
- `premium` · _String_ · **required** — premium
- `ePolicyLink` · _String_ · **required** — ePolicy Link
- `policyNo` · _String_ · **required** — Policy No
- `underwritingStatus` · _String_ · **required** — Order Status
- `underwritingReason` · _String_ · **optional** — Order Message
- `expirationDate` · _String_ · **required** — expirationDate

**Response parameters**

- `errorCode` · _String_ · **optional** — 错误码
- `errorMsg` · _String_ · **optional** — 错误信息
- `transactionId` · _String_ · **optional** — 交易Id
- `extendInfo` · _String_ · **optional** — 拓展信息

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `11` | policyNo is empty | policyNo is empty |
| `12` | orderNo is empty | orderNo is empty |
| `13` | thirdOrderNo is empty | lazada orderId |
| `14` | ePolicyLink is empty | Insurance information link |
| `15` | underwritingStatus is empty | Insurance status |
| `16` | premium is empty | premium is empty |
| `21` | order processing | The order is already being processed |
| `00` | success | success |
| `99` | fail | fail |

**Example**

Request sample 1:

```
orderNo=12332323
thirdOrderNo=43434123
premium=1000
ePolicyLink=https://xxxx.com/xxxx
policyNo=1234343
underwritingStatus=123
underwritingReason=123
expirationDate=expirationDate
```

Response sample 1:

```
errorCode=123
errorMsg=123
transactionId=123
extendInfo=123
```

---

## InuranceNotication

<a id="digital-insurance-test-notificationcopy"></a>

- **Path**: `/digital/insurance/test/notificationcopy`
- **Method**: `GET/POST`
- **Last modified**: 2022-12-16 10:42:22

Third party insurance company callback interface

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `orderNo` · _String_ · **required** — Insurance company order number
- `thirdOrderNo` · _String_ · **required** — lazada orderId
- `premium` · _String_ · **required** — premium
- `ePolicyLink` · _String_ · **required** — ePolicy Link
- `policyNo` · _String_ · **required** — Policy No
- `underwritingStatus` · _String_ · **required** — Order Status
- `underwritingReason` · _String_ · **optional** — Order Message

**Response parameters**

- `errorCode` · _String_ · **optional** — 错误码
- `errorMsg` · _String_ · **optional** — 错误信息
- `transactionId` · _String_ · **optional** — 交易Id
- `extendInfo` · _String_ · **optional** — 拓展信息

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
orderNo=12332323
thirdOrderNo=43434123
premium=1000
ePolicyLink=https://xxxx.com/xxxx
policyNo=1234343
underwritingStatus=123
underwritingReason=123
```

Response sample 1:

```
errorCode=123
errorMsg=123
transactionId=123
extendInfo=123
```

---

## InuranceNotifyLapse

<a id="digital-insurance-notificationlapse"></a>

- **Path**: `/digital/insurance/notificationlapse`
- **Method**: `GET/POST`
- **Last modified**: 2023-10-17 11:09:04

Insurance company push the callback notification to partners once the policy has been cancelled successfully

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `orderNo` · _String_ · **required** — 1234
- `thirdOrderNo` · _String_ · **required** — 12344
- `policyNo` · _String_ · **required** — 1234
- `lapseTime` · _String_ · **required** — 1234
- `lapseType` · _String_ · **required** — enum： expiration: policy expired. end: the customer has used up the sum insured amount, policy end.
- `message` · _String_ · **optional** — expire

**Response parameters**

- `transactionId` · _String_ · **optional** — LZD orderLineId
- `extendInfo` · _String_ · **optional** — extendInfo
- `errorCode` · _String_ · **optional** — result code
- `errorMsg` · _String_ · **optional** — result message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
orderNo=1234
thirdOrderNo=1234
policyNo=1234
lapseTime=1234
lapseType=enum： expiration: policy expired. end: the customer has used up the sum insured amount, policy end.
message=expire
```

Response sample 1:

```
transactionId=123	 
extendInfo={"xxx":"xxx"}
errorCode=result code
errorMsg=success
```

---

## digitalServiceCdkCodeReceived

<a id="digital-service-cdkcodereceived"></a>

- **Path**: `/digital/service/cdkCodeReceived`
- **Method**: `post`
- **Last modified**: 2026-04-10 17:40:57

接受码商发码请求，给用户发送码。

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `tb_order_id` · _String_ · **required** — 淘天主订单号
- `cdk_name` · _String_ · **optional** — 商品名称
- `tb_order_line_id` · _String_ · **required** — 淘天子订单号
- `valid_from` · _String_ · **optional** — 有效期起始时间，YYYY-MM-DD格式
- `cdk_code_key` · _String[]_ · **required** — CDK密钥/兑换码
- `cdk_code_number` · _String_ · **required** — CDK码数量
- `valid_end` · _String_ · **optional** — 有效期结束时间，YYYY-MM-DD格式
- `terms_use` · _String_ · **optional** — 使用规则/条款等说明

**Response parameters**

- `result_code` · _String_ · **required** — 响应状态码
- `result_msg` · _String_ · **required** — 响应描述信息

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
tb_order_id=2026032600001
cdk_name=Steam充值卡
tb_order_line_id=2026032600001
valid_from=2027-03-15
cdk_code_key=["ABCD-EFGH-IJKL-MNOP","ABCD-EFGH-IJKL-MNOP"]
cdk_code_number=2
valid_end=2027-03-15
terms_use=本CDK仅限单次使用...
```

Response sample 1:

```
result_code=0
result_msg=success
```

---

