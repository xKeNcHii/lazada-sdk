# E-Tickets API

## GetOrderItemsFromBarCode

<a id="eticket-code-query"></a>

- **Path**: `/eticket/code/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-22 14:48:03

E-Ticcket certificate query Open API

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `code` · _String_ · **required** — certificate code

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `biz_type` · _Number_ · **optional** — biz type
  - `certificate_code` · _String_ · **optional** — coupon code
  - `code_status` · _String_ · **optional** — coupon code status. 1: can use, -1: consumed, -5: expired
  - `outer_id` · _String_ · **optional** — outer id
  - `strart_time` · _Number_ · **optional** — start time
  - `end_time` · _Number_ · **optional** — end time
  - `trade_order_id` · _Number_ · **optional** — trade_order_id
  - `serial_num` · _String_ · **optional** — consume serial number (if it has been consumed)
  - `item_list` · _Object[]_ · **optional** — item list
    - `item_id` · _String_ · **optional** — item id
    - `item_name` · _String_ · **optional** — item name
    - `item_img` · _String_ · **optional** — item image link
    - `unit_fee` · _String_ · **optional** — item price (the smallest unit of the currency)
    - `unit_fee_currency` · _String_ · **optional** — item price currency
    - `actual_fee` · _String_ · **optional** — the actual amount paid by the buyer (the smallest unit of the currency)
    - `actual_fee_currency` · _String_ · **optional** — the actual currency paid by the buyer

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `100` | E100: Param Invalid, "%s" | Param invalid |
| `200` | E200: Certificate Not Exist | Certificate not exist |
| `201` | E201: Certificate Not Unique | More that one certificate matched |
| `202` | E202: Certificate Can Not Distinguish | Can't distinguish the business type of this code |

**Example**

Request sample 1:

```
code=abcdedf
```

Response sample 1:

```
data={}
```

---

## GlobalEticketMerchantMaAvailable

<a id="eticket-ma-available"></a>

- **Path**: `/eticket/ma/available`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 00:18:41

the callback interface before consume  code

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `biz_type` · _Number_ · **required** — biz type
- `code` · _String_ · **required** — waiting consume code
- `serial_num` · _String_ · **required** — consume serialVersionUID
- `pos_id` · _String_ · **optional** — consume tools no
- `outer_id` · _String_ · **required** — order id
- `consume_num` · _Number_ · **required** — consume num
- `consume_store_id` · _String_ · **required** — consume store id

**Response parameters**

- `resp_body` · _Object_ · **required** — response
  - `attribute_map` · _Object_ · **optional** — attribute_map
- `ret_code` · _String_ · **required** — sub code
- `ret_msg` · _String_ · **required** — sub info

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
biz_type=3001
code=1c31ce6d1dc1691fc211
serial_num=sn1238475
pos_id=2132312
outer_id=35900200436004
consume_num=1
consume_store_id=143003
```

Response sample 1:

```
resp_body={}
ret_code=isv.success-all
ret_msg=success
```

---

## GlobalEticketMerchantMaConsume

<a id="eticket-ma-consume"></a>

- **Path**: `/eticket/ma/consume`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:18:47

consume ma

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `biz_type` · _Number_ · **required** — biz type
- `serial_num` · _String_ · **required** — consume serialVersionUID
- `pos_id` · _String_ · **optional** — consume tools no
- `outer_id` · _String_ · **required** — order id
- `consume_num` · _Number_ · **required** — consume num
- `code` · _String_ · **required** — waiting consume code
- `consume_store_id` · _String_ · **required** — consume store id

**Response parameters**

- `resp_body` · _Object_ · **required** — response
  - `attribute_map` · _Object_ · **optional** — attribute map
- `ret_code` · _String_ · **required** — sub code
- `ret_msg` · _String_ · **required** — sub code info

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
biz_type=3001
serial_num=fadfa123123
pos_id=2132312
outer_id=1753340805138544
consume_num=1
code=abc
consume_store_id=123123
```

Response sample 1:

```
resp_body={}
ret_code=isv.success-all
ret_msg=success
```

---

## GlobalEticketMerchantMaFailsend

<a id="eticket-ma-failsend"></a>

- **Path**: `/eticket/ma/failsend`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:18:53

the callback interface when send code failed

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `biz_type` · _Number_ · **required** — biz type
- `sub_code` · _String_ · **required** — fail reason code
- `outer_id` · _String_ · **required** — order id
- `sub_msg` · _String_ · **required** — fail reason desc

**Response parameters**

- `resp_body` · _Object_ · **required** — response body
- `ret_code` · _String_ · **required** — result code
- `ret_msg` · _String_ · **required** — result info

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
biz_type=3001
sub_code=isv.fail-send-no-stock
outer_id=193962300049720
sub_msg=inventory not enough
```

Response sample 1:

```
resp_body={}
ret_code=isv.success-all
ret_msg=success
```

---

## GlobalEticketMerchantMaQuery

<a id="eticket-ma-query"></a>

- **Path**: `/eticket/ma/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 00:18:58

the callback interface that query lazada platform ma

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `code` · _String_ · **required** — code
- `seller_id` · _Number_ · **required** — sellerId
- `store_id` · _Number_ · **optional** — storeId

**Response parameters**

- `resp_body` · _Object_ · **required** — response
  - `certificate` · _Object_ · **required** — certificate
    - `locked_num` · _Number_ · **required** — lockedNum
    - `biz_type` · _Number_ · **required** — bizType
    - `certificate_code` · _String_ · **required** — code
    - `initial_num` · _Number_ · **required** — initialNum
    - `available_num` · _Number_ · **required** — availableNum
    - `consume_status` · _String_ · **required** — consumeStatus
    - `code_status` · _String_ · **required** — codeStatus
    - `qr_code_url` · _String_ · **required** — qrCodeUrl
    - `outer_id` · _String_ · **required** — outerId
    - `start_time` · _Number_ · **required** — startTime
    - `end_time` · _Number_ · **required** — endTime
    - `used_num` · _Number_ · **required** — usedNum
    - `attributes` · _Object_ · **optional** — attributes
- `ret_code` · _String_ · **required** — ret code
- `ret_msg` · _String_ · **required** — ret msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
code=abcabc
seller_id=123123
store_id=123
```

Response sample 1:

```
resp_body={}
ret_code=isv.success-all
ret_msg=操作成功
```

---

## GlobalEticketMerchantMaQueryTbMa

<a id="eticket-ma-querytbma"></a>

- **Path**: `/eticket/ma/queryTbMa`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 00:19:02

the callback interface that query tb ma

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `code` · _String_ · **required** — code

**Response parameters**

- `resp_body` · _Object_ · **required** — response
- `ret_code` · _String_ · **required** — sub code
- `ret_msg` · _String_ · **required** — sub code info

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
code=1c31ce6d1dc1691fc211
```

Response sample 1:

```
resp_body={}
ret_code=isv.success-all
ret_msg=操作成功
```

---

## GlobalEticketMerchantMaSend

<a id="eticket-ma-send"></a>

- **Path**: `/eticket/ma/send`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 00:19:26

the callback interface when merchant send code successful

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `biz_type` · _Number_ · **required** — biz type
- `isv_ma_list` · _Object[]_ · **required** — ma list
  - `code` · _String_ · **required** — code
  - `num` · _Number_ · **required** — available num
- `outer_id` · _String_ · **required** — order id

**Response parameters**

- `resp_body` · _Object_ · **required** — response
- `ret_code` · _String_ · **required** — sub code
- `ret_msg` · _String_ · **required** — sub code info

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
biz_type=3001
isv_ma_list=[{"code":"abc123","num":1}]
outer_id=1753340805138544
```

Response sample 1:

```
resp_body={}
ret_code=isv.success-all
ret_msg=操作成功
```

---

## RedeemOrderItems

<a id="eticket-code-consume"></a>

- **Path**: `/eticket/code/consume`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 00:18:37

Certificate Consume Open API

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `biz_type` · _Number_ · **required** — biz type
- `code` · _String_ · **required** — certificate code
- `outer_id` · _String_ · **required** — outer id
- `serial_num` · _String_ · **required** — consume serial number
- `consume_num` · _Number_ · **required** — consume num
- `store_id` · _String_ · **optional** — store id
- `pos_id` · _String_ · **optional** — pos id

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `outer_id` · _String_ · **optional** — outer id
  - `serial_num` · _String_ · **optional** — consume serial number
  - `left_num` · _Number_ · **optional** — code left available num

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `100` | E100: Param Invalid, "%s" | Param invalid |
| `101` | E101: Redemption Operator Invalid | The certificate not belongs to the seller |
| `200` | E200: Certificate Not Exist | Certificate not exist |
| `202` | E202: Certificate Can Not Distinguish | Can't distinguish the business type of this code |
| `203` | E203: Certificate Order Not Exist | No matched certificate of the outerId |
| `301` | E301: Certificate Not Available | Certificate status available, can't redeem |

**Example**

Request sample 1:

```
biz_type=5107
code=f12csfds
outer_id=FO1fsdjhk123
serial_num=3451c641-a7da-4264-92cb-78a1f79392c3
consume_num=1
store_id=123456
pos_id=POS1
```

Response sample 1:

```
data={}
```

---

