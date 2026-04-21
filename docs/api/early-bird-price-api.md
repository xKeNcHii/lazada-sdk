# Early Bird Price API

## CreateEarlyBirdActivity

<a id="activity-early-bird-create"></a>

- **Path**: `/activity/early/bird/create`
- **Method**: `post`
- **Last modified**: 2026-02-27 15:05:37

early bird price activity create

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `sku_list` · _Object[]_ · **required** — sku list
  - `product_id` · _Number_ · **required** — item id
  - `order_total_budget` · _Number_ · **required** — activity inventory
  - `discount_price` · _Object_ · **required** — discount price
  - `sku_id` · _Number_ · **required** — sku id
- `page_no` · _Number_ · **optional** — page no
- `name` · _String_ · **optional** — activity name
- `page_size` · _Number_ · **optional** — page_size
- `id` · _Number_ · **optional** — activity id
- `source` · _String_ · **optional** — source
- `buyer_code` · _String_ · **optional** — buyer_code

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — success
  - `module` · _Object_ · **required** — activity id
  - `error_code` · _Object_ · **required** — errorCode
    - `error_code_params` · _Object[]_ · **required** — error_code_params
    - `display_message` · _String_ · **required** — display_message
    - `log_message` · _String_ · **required** — log_message
    - `key` · _String_ · **required** — error code
  - `repeated` · _Boolean_ · **required** — repeated
  - `retry` · _Boolean_ · **required** — retry

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
sku_list=[   {     "product_id": 111111,     "sku_id": 222222,     "discount_price": 99.99,     "order_total_budget": 100   } ]
page_no=0
name=xx activity
page_size=0
id=0
source=OPENAPI
buyer_code=0
```

Response sample 1:

```
result={   "success": true,   "module": 123456789 }
```

---

## EarlyBirdActivityAddSkus

<a id="activity-early-bird-addskus"></a>

- **Path**: `/activity/early/bird/addSkus`
- **Method**: `post`
- **Last modified**: 2026-02-27 15:29:31

add skus for early bird activity

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `sku_list` · _Object[]_ · **required** — sku list
  - `product_id` · _Number_ · **required** — product id
  - `order_total_budget` · _Number_ · **required** — order total budget inventory
  - `discount_price` · _Number_ · **required** — discount price
  - `sku_id` · _Number_ · **required** — sku id
- `page_no` · _Number_ · **optional** — page no
- `name` · _String_ · **optional** — activity name
- `page_size` · _Number_ · **optional** — page size
- `id` · _Number_ · **required** — activity id
- `source` · _String_ · **optional** — source
- `buyer_code` · _String_ · **optional** — buyer code

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — interface success
  - `module` · _Object_ · **required** — null
  - `error_code` · _Object_ · **required** — error message
    - `error_code_params` · _Object[]_ · **required** — message
    - `display_message` · _String_ · **required** — message
    - `log_message` · _String_ · **required** — message
    - `key` · _String_ · **required** — error key
  - `repeated` · _Boolean_ · **required** — repeated
  - `retry` · _Boolean_ · **required** — retry

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
sku_list=[   {     "product_id": 13633845026,     "order_total_budget": 5,     "discount_price": 1,     "sku_id": 124028569037   } ]
page_no=0
name=activity name
page_size=0
id=123
source=OPENAPI
buyer_code=buyer
```

Response sample 1:

```
result={   "notSuccess": false,   "success": true,   "module": null,   "errorCode": null,   "class": "com.alibaba.ecommerce.module.Response",   "repeated": false,   "retry": false }
```

---

## EarlyBirdActivityDeactivateSkus

<a id="activity-early-bird-deactivateskus"></a>

- **Path**: `/activity/early/bird/deactivateSkus`
- **Method**: `post`
- **Last modified**: 2026-02-27 15:29:39

deactivate Skus for early bird acivity

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `sku_list` · _Object[]_ · **required** — sku list
  - `product_id` · _Number_ · **required** — product id
  - `order_total_budget` · _Number_ · **optional** — order total budget inventory
  - `discount_price` · _Object_ · **optional** — discount price
  - `sku_id` · _Number_ · **required** — sku id
- `page_no` · _Number_ · **optional** — page no
- `name` · _String_ · **optional** — activity name
- `page_size` · _Number_ · **optional** — page size
- `id` · _Number_ · **required** — activity id
- `source` · _String_ · **optional** — source
- `buyer_code` · _String_ · **optional** — buyer code

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — interface success
  - `module` · _Object_ · **required** — null
  - `error_code` · _Object_ · **required** — error message
    - `error_code_params` · _Object[]_ · **required** — message
    - `display_message` · _String_ · **required** — message
    - `log_message` · _String_ · **required** — message
    - `key` · _String_ · **required** — error key
  - `repeated` · _Boolean_ · **required** — repeated
  - `retry` · _Boolean_ · **required** — retry

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
sku_list=[   {     "product_id": 13633845026,     "order_total_budget": 5,     "discount_price": 1,     "sku_id": 124028569037   } ]
page_no=0
name=activity name
page_size=0
id=123
source=OPENAPI
buyer_code=buyer
```

Response sample 1:

```
result={   "notSuccess": false,   "success": true,   "module": null,   "errorCode": null,   "class": "com.alibaba.ecommerce.module.Response",   "repeated": false,   "retry": false }
```

---

