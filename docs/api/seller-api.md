# Seller API

## BatchQueryFollowStatus

<a id="shop-follow-status-batch-query"></a>

- **Path**: `/shop/follow/status/batch/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 16:51:46

Query whether these customers follow this seller.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `buyer_ids` · _String[]_ · **required** — buyerId array

**Response parameters**

- `result` · _Object_ · **optional** — Rensponse WrapperClass
  - `success` · _Boolean_ · **optional** — where this call succeeded
  - `error` · _Object_ · **optional** — error information
  - `result` · _Object[]_ · **optional** — {         "followFlag": 0,         "buyerId": 310008843475       };A followFlag of 1 indicates that the buyer is a fan

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
buyer_ids=["111","222"]
```

Response sample 1:

```
result=Result<T>
```

---

## GetPickUpStoreList

<a id="rc-store-list-get"></a>

- **Path**: `/rc/store/list/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:14:44

return the list of pick up store infomation for requested Seller

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `result` · _String_ · **required** — result
  - `headers` · _Object_ · **required** — xx
  - `success` · _Boolean_ · **required** — true/false
  - `model` · _Object_ · **required** — result DTO
  - `biz_ext_map` · _Object_ · **required** — xx
  - `mapping_code` · _String_ · **required** — xx
  - `msg_info` · _String_ · **required** — msg_info
  - `msg_code` · _String_ · **required** — msg_code
  - `http_status_code` · _Number_ · **required** — http_status_code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
```

Response sample 1:

```
result={"headers":{},"success":true,"model":{"sellerId":"100000313","pickUpStoreInfo":[{"pickUpStoreCode":"xxx"},"class":"com.taobao.mtop.common.Result","httpStatusCode":200}
```

---

## GetSeller

<a id="seller-get"></a>

- **Path**: `/seller/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 12:49:54

Get seller information by current seller ID.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `data` · _Object_ · **required** — Response data
  - `name_company` · _String_ · **required** — Company name
  - `seller_id` · _Number_ · **required** — Seller's ID
  - `name` · _String_ · **required** — Shop name
  - `short_code` · _String_ · **required** — Seller's short code
  - `logo_url` · _String_ · **required** — Logo URL
  - `email` · _String_ · **required** — Seller's email
  - `cb` · _Boolean_ · **required** — Whether the seller is a Cross Border seller or not
  - `location` · _String_ · **optional** — location of seller
  - `status` · _String_ · **optional** — three status ACTIVE INACTIVE DELETED
  - `verified` · _Boolean_ · **optional** — Whether the seller is verified
  - `marketplaceEaseMode` · _Boolean_ · **optional** — Whether the seller is MarketplaceEaseMode

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
```

Response sample 1:

```
data={}
```

---

## GetSellerMetricsById

<a id="seller-metrics-get"></a>

- **Path**: `/seller/metrics/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 12:00:37

Provide seller metrics data of the specific seller, like positive seller rating, ship on time rate and etc.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `data` · _Object_ · **required** — response data
  - `main_category_name` · _String_ · **required** — main_category_name
  - `seller_id` · _Number_ · **required** — seller_id
  - `response_rate` · _String_ · **required** — response_rate
  - `response_time` · _String_ · **required** — response_time
  - `ship_on_time` · _String_ · **required** — ship_on_time
  - `main_category_id` · _Number_ · **required** — main_category_id
  - `positive_seller_rating` · _String_ · **required** — positive_seller_rating

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
```

Response sample 1:

```
data={}
```

---

## GetSellerPerformance

<a id="seller-performance-get"></a>

- **Path**: `/seller/performance/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:14:50

Provide the performance metrics of the current seller, such as positive seller rating, ship on time, etc.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `language` · _String_ · **optional** — Optional ISO 639-1 standard language code (default: en-US, supported languages: en-US, zh-CN, ms-MY, th-TH, vi-VN, id-ID).

**Response parameters**

- `data` · _Object_ · **required** — Response payload.
  - `seller_id` · _Number_ · **optional** — Seller ID.
  - `main_category_id` · _Number_ · **optional** — Seller's main category ID.
  - `main_category_name` · _String_ · **optional** — Seller's main category name.
  - `indicators` · _Object[]_ · **optional** — Performance indicators.
    - `type` · _String_ · **optional** — Indicator type (e.g. POSITIVE_SELLER_RATING, PRODUCT_RATING_COVERAGE, ...).
    - `name` · _String_ · **optional** — Name of the indicator is the seller's language.
    - `tip` · _String_ · **optional** — Longer description of the indicator is the seller's language.
    - `score` · _Number_ · **optional** — Raw score value. Note: if the indicator doesn't contain any value, a null value is set instead.
    - `score_format` · _String_ · **optional** — Score format: INTEGER, DOUBLE, PERCENTAGE, MINUTES, HOURS.
    - `formatted_score` · _String_ · **optional** — Score formatted in the seller's language and locale. Note: if the indicator doesn't contain any value, a "-" is set instead.
    - `target` · _Number_ · **optional** — Indicator target (raw value). Note: if the indicator doesn't contain any value, a null value is set instead.
    - `target_format` · _String_ · **optional** — Target format: GREATER_THAN_DOUBLE ('≥' #.##), GREATER_THAN_PERCENTAGE ('≥' #.##'%'), LOWER_THAN_PERCENTAGE('≤' #.##'%'), LOWER_THAN_MINUTES('≤' #'min'), STRICTLY_LOWER_THAN_HOURS('<' #'h'), GREATER_THAN_DOUBLE ('≥' #.##), EQUALS_TO_INTEGER(= #).
    - `formatted_target` · _String_ · **optional** — Indicator target formatted in the seller's language and locale.
    - `target_respected` · _Boolean_ · **optional** — true if the formattedScore respects the formattedTarget, false if not.
    - `action_url` · _String_ · **optional** — Relative (from the Seller Portal) or absolute URL to redirect the seller to the page where he cans handle the task.
- `success` · _Boolean_ · **required** — true for success, false for error.
- `error_code` · _String_ · **required** — Error code if success = false.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
language=en-US
```

Response sample 1:

```
data=N/A
success=true
error_code=REQUEST_CANNOT_BE_NULL
```

---

## GetWarehouseBySellerId

<a id="rc-warehouse-get"></a>

- **Path**: `/rc/warehouse/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:14:54

get warehouse by seller id

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `result` · _Object_ · **required** — xxxx
  - `not_success` · _Boolean_ · **required** — xxx
  - `success` · _Object_ · **required** — xxx
  - `module` · _Object_ · **required** — result
  - `error_code` · _String_ · **required** — error_code
  - `repeated` · _Boolean_ · **required** — repeated
  - `retry` · _Boolean_ · **required** — retry

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
```

Response sample 1:

```
result=xxxx
```

---

## QueryWarehouseDetailInfoBySellerId

<a id="rc-warehouse-detail-get"></a>

- **Path**: `/rc/warehouse/detail/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:14:55

query warehouse detail info by seller id

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `result` · _Object_ · **required** — xxx
  - `not_success` · _Boolean_ · **required** — xxx
  - `success` · _Boolean_ · **required** — xxx
  - `module` · _Object_ · **required** — xxx
    - `country` · _String_ · **required** — country
    - `province` · _String_ · **required** — province
    - `city` · _String_ · **required** — city
    - `district` · _String_ · **required** — district
    - `name` · _String_ · **required** — name
    - `detail_address` · _String_ · **required** — detail_address
    - `post_code` · _String_ · **required** — post_code
    - `warehouse_code` · _String_ · **required** — warehouse_code
    - `default_address` · _Boolean_ · **required** — default_address
    - `status` · _String_ · **required** — status
  - `error_code` · _String_ · **required** — xxx
  - `repeated` · _Boolean_ · **required** — xx
  - `retry` · _Boolean_ · **required** — xx
  - `class_name` · _String_ · **optional** — class name

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
```

Response sample 1:

```
result=xxx
```

---

## SellerCenterMsgList

<a id="sellercenter-msg-list"></a>

- **Path**: `/sellercenter/msg/list`
- **Method**: `GET/POST`
- **Last modified**: 2024-05-07 15:27:44

seller center msg box

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `language` · _String_ · **optional** — Set the language for returned messages.(en/vn/id/sg/ph...)
- `page` · _String_ · **optional** — Paged query.
- `pageSize` · _String_ · **optional** — Paged query, with a maximum return of one hundred records.

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `success` · _Object_ · **optional** — success
  - `type` · _String_ · **optional** — type
  - `errorCode` · _String_ · **optional** — error code
  - `error` · _String_ · **optional** — error msg
  - `data` · _Object_ · **optional** — {}
    - `dataSource` · _Object[]_ · **optional** — []
      - `id` · _String_ · **optional** — msg id
      - `time` · _String_ · **optional** — send time
      - `message_content` · _Object_ · **optional** — message content
        - `title` · _String_ · **optional** — title
        - `description` · _String_ · **optional** — description
        - `categoryName` · _String_ · **optional** — msg category name
        - `picture` · _String_ · **optional** — msg img url
        - `webLink` · _String_ · **optional** — web jump link
        - `appLink` · _String_ · **optional** — app jump link
    - `pageInfo` · _Object_ · **optional** — pageInfo
      - `current` · _Number_ · **optional** — page
      - `pageSize` · _Number_ · **optional** — pageSize
      - `total` · _Number_ · **optional** — tatal

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
language=en_EN
page=1
pageSize=10
```

Response sample 1:

```
result={}
```

---

## SellerPolicyFetch

<a id="seller-policy-fetch"></a>

- **Path**: `/seller/policy/fetch`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:14:51

Fetch seller policy information

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `locale` · _String_ · **required** — locale

**Response parameters**

- `success` · _String_ · **optional** — result status
- `data` · _String_ · **optional** — data obj

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `UnknownRuntimeException` | The request has failed due to RPC runtime failure | Incorrect input venture |
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
locale=en
```

Response sample 1:

```
success=true
data={}
```

---

## SynchronizeSellerItemArConfig

<a id="seller-ar-config-syn"></a>

- **Path**: `/seller/ar/config/syn`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:14:55

synchronize seller item ar config

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `siteId` · _String_ · **required** — site Id
- `source` · _String_ · **required** — ar config isv
- `uid` · _String_ · **required** — uid
- `contents` · _String_ · **required** — syn sku ar config info
- `synDate` · _String_ · **required** — synDate
- `business` · _String_ · **optional** — business

**Response parameters**

- `success` · _Boolean_ · **required** — success
- `errorCode` · _String_ · **required** — errorCode
- `model` · _Object_ · **required** — syn result
  - `uid` · _String_ · **optional** — uid
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
| `IllegalAccessToken` | The specified access token is invalid or expired | access token is invalid or expired |

**Example**

Request sample 1:

```
siteId=sg
source=PERFECT
uid=123456
contents=[]
synDate=synDate
business=LAZADA、ARISE
```

Response sample 1:

```
success=success
errorCode=errorCode
model=model
errorMsg=errorMsg
```

---

## getCountryInfo

<a id="seller-cb-country-get"></a>

- **Path**: `/seller/cb/country/get`
- **Method**: `GET/POST`
- **Last modified**: 2023-04-07 17:17:00

getCountryInfo

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `type` · _String_ · **required** — scence description
- `seller_country` · _String_ · **optional** — seller register country

**Response parameters**

- `data` · _Object[]_ · **required** — returned data
  - `label` · _String_ · **optional** — country label
  - `value` · _String_ · **optional** — country value
- `success` · _String_ · **optional** — if success

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
type=register
seller_country=CN
```

Response sample 1:

```
data=*
success=false
```

---

## getSellerRegisterInfo 

<a id="seller-cb-register-info"></a>

- **Path**: `/seller/cb/register/info`
- **Method**: `GET/POST`
- **Last modified**: 2023-04-07 17:17:04

getSellerRegisterInfo

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Object[]_ · **required** — *
  - `licenseNumber` · _String_ · **required** — *
  - `companyName` · _String_ · **required** — *

**Response parameters**

- `data` · _Object[]_ · **optional** — *
  - `licenseNumber` · _String_ · **optional** — *
  - `companyName` · _String_ · **optional** — *
  - `baseInfoList` · _Object[]_ · **optional** — *
    - `email` · _String_ · **optional** — *
    - `phone` · _String_ · **optional** — *
    - `shopName` · _String_ · **optional** — *
    - `status` · _String_ · **optional** — *
    - `reqNo` · _String_ · **optional** — *
    - `registerCountry` · _String_ · **optional** — *
- `success` · _String_ · **optional** — *

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
payload=[   {     "companyName": "Lazada集成申请开店-入驻审核通过",     "licenseNumber":"13424"   } ]
```

Response sample 1:

```
data=*
success=*
```

---

## getSubAddress

<a id="seller-cb-country-location-get"></a>

- **Path**: `/seller/cb/country/location/get`
- **Method**: `GET/POST`
- **Last modified**: 2023-04-07 17:16:21

get location info

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `location_id` · _String_ · **required** — *
- `level` · _Number_ · **required** — *

**Response parameters**

- `data` · _Object[]_ · **optional** — *
  - `label` · _String_ · **optional** — country label
  - `value` · _String_ · **optional** — country value
- `success` · _Boolean_ · **optional** — if success

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
location_id=CN
level=1
```

Response sample 1:

```
data=*
success=false
```

---

## paymentBinding

<a id="seller-cb-payment-config"></a>

- **Path**: `/seller/cb/payment/config`
- **Method**: `GET/POST`
- **Last modified**: 2023-04-07 00:05:56

paymentBinding

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _String_ · **required** — I *

**Response parameters**

- `data` · _Object[]_ · **required** — *
  - `result` · _Boolean_ · **optional** — *
  - `reason` · _String_ · **optional** — *
  - `shortCode` · _String_ · **optional** — *
- `success` · _Boolean_ · **optional** — *

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
payload=*
```

Response sample 1:

```
data=*
success=*
```

---

## queryBuyboxHuntingInfo

<a id="hunting-buybox-get"></a>

- **Path**: `/hunting/buybox/get`
- **Method**: `GET/POST`
- **Last modified**: 2024-10-17 13:58:46

SPU竞价接口

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `HuntingQueryParam` · _Object_ · **required** — param
  - `venture` · _String_ · **required** — venture
  - `skuId` · _String_ · **required** — skuId

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `data` · _Object_ · **optional** — data
    - `venture` · _String_ · **optional** — venture
    - `itemId` · _String_ · **optional** — itemId
    - `skuId` · _String_ · **optional** — skuId
    - `isValid` · _String_ · **optional** — 是否符合规则 0不符合 1符合
    - `priceRank` · _String_ · **optional** — 价格在簇内排名
  - `retSuccess` · _Boolean_ · **optional** — retSuccess

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
HuntingQueryParam={}
```

Response sample 1:

```
result={}
```

---

## saveSellerWarehouseInfo

<a id="rc-sellerwarehouse-savewarehouseinfo"></a>

- **Path**: `/rc/sellerWarehouse/saveWarehouseInfo`
- **Method**: `GET/POST`
- **Last modified**: 2024-03-21 19:51:15

Api to create or edit the seller warehouse info except the "default"
dropshipping warehouse and the return warehouse.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `ownerType` · _Number_ · **required** — the fixed value is 0
- `sellerId` · _Number_ · **required** — seller id
- `warehouseOwnerType` · _String_ · **required** — the fixed value is SELLER
- `warehouseContactDTO` · _Object_ · **required** — address info
  - `phoneNumber` · _String_ · **required** — phone
  - `email` · _String_ · **required** — email
- `siteId` · _String_ · **required** — site id
- `warehouseAddressInfoDTO` · _Object_ · **required** — address info
  - `locationLevel2Label` · _String_ · **required** — province
  - `address` · _String_ · **required** — address detail
  - `locationLevel4Label` · _String_ · **required** — district
  - `locationLevel3Label` · _String_ · **required** — city
  - `postalCode` · _String_ · **required** — postal code
  - `latitude` · _Number_ · **optional** — latitude
  - `countryIosCode` · _String_ · **required** — currencyCode
  - `defaultAddress` · _Number_ · **required** — the fixed value is 0
  - `longitude` · _Number_ · **optional** — longitude
- `warehouseType` · _Number_ · **required** — the fixed value is 200
- `ownerId` · _Number_ · **required** — seller id
- `warehouseName` · _String_ · **required** — warehouse name
- `currencyCode` · _String_ · **required** — currency code
- `resourceType` · _Number_ · **required** — resourceType - the fixed value is 1.

**Response parameters**

- `result` · _Object_ · **required** — result
  - `not_success` · _Boolean_ · **required** — not  success
  - `success` · _Boolean_ · **required** — success
  - `module` · _Boolean_ · **required** — true of false for the create or update result
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
ownerType=0
sellerId=123456
warehouseOwnerType=SELLER
warehouseContactDTO={     "phoneNumber": "0918071972",     "email": "325792375@qq.com" }
siteId=VN
warehouseAddressInfoDTO={     "locationLevel2Label": "Hồ Chí Minh",     "address": "275B Đường Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Việt Nam",     "locationLevel4Label": "Phường Phạm Ngũ Lão",     "locationLevel3Label": "Quận 1",     "postalCode": "999999",     "countryIosCode": "VN",     "locationLevel1Label": "Việt Nam",     "defaultAddress": 0   }
warehouseType=200
ownerId=32525
warehouseName=STORE1
currencyCode=VN
resourceType=1
```

Response sample 1:

```
result={   "notSuccess": false,   "success": true,   "module": true,   "class": "com.alibaba.ecommerce.module.Response",   "repeated": false,   "retry": false }
```

---

## sellerFieldVerify

<a id="seller-cb-register-fieldcheck"></a>

- **Path**: `/seller/cb/register/fieldcheck`
- **Method**: `GET/POST`
- **Last modified**: 2023-04-10 09:34:32

verify seller info field

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Object[]_ · **required** — *
  - `countryRegion` · _String_ · **required** — *
  - `name` · _String_ · **required** — *
  - `value` · _String_ · **required** — *

**Response parameters**

- `data` · _Object[]_ · **optional** — *
  - `err_code` · _String_ · **optional** — *
  - `result` · _String_ · **optional** — *
  - `error_msg` · _String_ · **optional** — *
  - `name` · _String_ · **optional** — *
- `success` · _String_ · **optional** — *

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
payload=[     {       "country_region": "CN",       "name": "phone",       "value": "13506051251"     }   ]
```

Response sample 1:

```
data=null
success=false
```

---

