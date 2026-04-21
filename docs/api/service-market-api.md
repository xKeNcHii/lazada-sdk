# Service Market API

## ServiceMarketAppKeyOrderQuery

<a id="service-market-order-query"></a>

- **Path**: `/service/market/order/query`
- **Method**: `GET/POST`
- **Last modified**: 2023-04-10 20:42:45

Query user order list for specific App on Service Market

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `endCreated` · _String_ · **optional** — order create time range end
- `bizType` · _Number_ · **optional** — biz type
- `bizOrderId` · _Number_ · **optional** — bi order id
- `orderId` · _Number_ · **optional** — order_id
- `pageNo` · _Number_ · **required** — page no
- `itemCode` · _String_ · **optional** — service market item code
- `pageSize` · _Number_ · **required** — page size
- `startCreated` · _String_ · **optional** — order create time range start
- `articleCode` · _String_ · **required** — service market article code
- `shortCode` · _String_ · **optional** — seller short code

**Response parameters**

- `result` · _Object_ · **required** — null
  - `data` · _Object_ · **required** — null
    - `totalItem` · _String_ · **required** — total order count
    - `articleBizOrders` · _Object[]_ · **required** — null
      - `orderCycleStart` · _String_ · **required** — order cycle start
      - `refundFee` · _String_ · **required** — refund fee
      - `articleItemName` · _String_ · **required** — article item name
      - `bizType` · _String_ · **required** — biz type
      - `articleName` · _String_ · **required** — article name
      - `totalPayFee` · _String_ · **required** — total pay fee
      - `orderId` · _String_ · **required** — order id
      - `orderCycleEnd` · _String_ · **required** — order cycle end
      - `itemCode` · _String_ · **required** — item code
      - `fee` · _String_ · **required** — fee
      - `nick` · _String_ · **required** — seller nick
      - `activityCode` · _String_ · **required** — promotion activity code
      - `itemName` · _String_ · **required** — item name
      - `orderCycle` · _String_ · **required** — order cycle
      - `bizOrderId` · _String_ · **required** — biz order id
      - `promFee` · _String_ · **required** — prom fee
      - `create` · _String_ · **required** — order create time
      - `articleCode` · _String_ · **required** — article code
      - `userId` · _String_ · **optional** — seller id
  - `success` · _Boolean_ · **required** — is success
  - `resultCode` · _String_ · **required** — result code
  - `remark` · _String_ · **required** — remark

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
endCreated=2000-01-01 00:00:00
bizType=1
bizOrderId=123123
orderId=1451231241
pageNo=1
itemCode=ts-1234-1
pageSize=10
startCreated=2000-01-01 00:00:00
articleCode=ts-1234
shortCode=TH123124
```

Response sample 1:

```
result=1
```

---

## ServiceMarketAppKeySubQuery

<a id="service-market-subs-query"></a>

- **Path**: `/service/market/subs/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-12-13 19:21:41

Query user subscription info for specific App on Service Market

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `articleCode` · _String_ · **required** — Service Market article code
- `shortCode` · _String_ · **required** — seller short code

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object[]_ · **required** — data
    - `nick` · _String_ · **required** — seller nick
    - `item_name` · _String_ · **required** — item name
    - `article_name` · _String_ · **required** — article name
    - `expire_notice` · _Boolean_ · **required** — notice when subscription expired
    - `item_code` · _String_ · **required** — item code
    - `autosub` · _Boolean_ · **required** — is auto sub
    - `end_time` · _Number_ · **required** — subscription end time
    - `article_code` · _String_ · **required** — article code
    - `status` · _Number_ · **required** — 1=valid 2=expired
  - `success` · _Boolean_ · **required** — is query success

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
articleCode=FW_GOODS-1000000281
shortCode=A123BV12
```

Response sample 1:

```
result=result
```

---

