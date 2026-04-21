# Seller Voucher API

## SellerVoucheDeleteSelectedProductSKU

<a id="promotion-voucher-product-sku-remove"></a>

- **Path**: `/promotion/voucher/product/sku/remove`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:45:51

delete seller voucher promotion product sku

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `voucher_type` · _String_ · **required** — voucher type COLLECTIBLE_VOUCHER | CODE_VOUCHER
- `id` · _Number_ · **required** — promotion ID
- `sku_ids` · _Number[]_ · **required** — sku ID list

**Response parameters**

- `success` · _Boolean_ · **required** — true | false
- `error_code` · _Number_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
voucher_type=COLLECTIBLE_VOUCHER
id=91471121134707
sku_ids=[10069285691,10069285692]
```

Response sample 1:

```
success=true
error_code=null
error_msg=null
```

---

## SellerVoucherActivate

<a id="promotion-voucher-activate"></a>

- **Path**: `/promotion/voucher/activate`
- **Method**: `post`
- **Last modified**: 2022-07-22 14:54:57

activate seller voucher promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `voucher_type` · _String_ · **required** — voucher type COLLECTIBLE_VOUCHER | CODE_VOUCHER
- `id` · _Number_ · **required** — Promotion ID

**Response parameters**

- `success` · _Boolean_ · **required** — true | false
- `error_code` · _Number_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
voucher_type=COLLECTIBLE_VOUCHER
id=91471121134707
```

Response sample 1:

```
success=true
error_code=null
error_msg=null
```

---

## SellerVoucherAddSelectedProductSKU

<a id="promotion-voucher-product-sku-add"></a>

- **Path**: `/promotion/voucher/product/sku/add`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:27:52

add seller voucher promotion product sku

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `voucher_type` · _String_ · **required** — voucher type COLLECTIBLE_VOUCHER | CODE_VOUCHER
- `id` · _Number_ · **required** — promotion ID
- `sku_ids` · _Number[]_ · **required** — sku ID list

**Response parameters**

- `data` · _Object_ · **required** — sku list that fail to add
- `success` · _Boolean_ · **required** — true | false
- `error_code` · _Number_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
voucher_type=COLLECTIBLE_VOUCHER
id=91471121134707
sku_ids=[10069285691,10069285692]
```

Response sample 1:

```
data={"sku id": "error message"}
success=true
error_code=null
error_msg=null
```

---

## SellerVoucherCreate

<a id="promotion-voucher-create"></a>

- **Path**: `/promotion/voucher/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:28:07

create a new seller voucher promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `criteria_over_money` · _String_ · **required** — Discount details, if order value reaches set value, will money discount or percentage discount
- `voucher_type` · _String_ · **required** — Voucher type, just set COLLECTIBLE_VOUCHER
- `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS
- `collect_start` · _Number_ · **optional** — The time that customers can collect the voucher
- `display_area` · _String_ · **required** — The area that customers can see the voucher. REGULAR_CHANNEL|STORE_FOLLOWER|OFFLINE|LIVE_STREAM|CEM_SELLER
- `period_end_time` · _Number_ · **required** — The period end time that customers can use the voucher
- `voucher_name` · _String_ · **required** — Voucher name
- `voucher_discount_type` · _String_ · **required** — Discount type, MONEY_VALUE_OFF | PERCENTAGE_DISCOUNT_OFF
- `offering_money_value_off` · _String_ · **optional** — Discount details, if order value reaches criteria_over_money value, will discount money value
- `period_start_time` · _Number_ · **required** — The period start time that customers can use the voucher
- `limit` · _Number_ · **required** — Voucher limit per customer
- `issued` · _Number_ · **required** — Revision should be greater than the current setting
- `max_discount_offering_money_value` · _String_ · **optional** — Discount details, if order value reaches criteria_over_money value, allow maximum discount per order, just support percentage discount off type
- `offering_percentage_discount_off` · _Number_ · **optional** — Discount details, if order value reaches criteria_over_money value, will percentage discount off value

**Response parameters**

- `data` · _Number_ · **required** — promotion ID
- `success` · _Boolean_ · **required** — true | false
- `error_code` · _Number_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `23` | E023: xxxx | business validation error |
| `21` | E023: Internal System Error | Internal System Error |
| `24` | E024: Parameter illegal | Parameter illegal |
| `25` | E025: UMP Exception | UMP Exception |
| `26` | E026: Seller Unauthorized | Seller Unauthorized |

**Example**

Request sample 1:

```
criteria_over_money=100
voucher_type=COLLECTIBLE_VOUCHER
apply=SPECIFIC_PRODUCTS
collect_start=1625649720000
display_area=REGULAR_CHANNEL
period_end_time=1630339199000
voucher_name=test voucher
voucher_discount_type=MONEY_VALUE_OFF
offering_money_value_off=1
period_start_time=1626969600000
limit=1
issued=5
max_discount_offering_money_value=50
offering_percentage_discount_off=1
```

Response sample 1:

```
data=9616200353530
success=true
error_code=null
error_msg=null
```

---

## SellerVoucherDeactivate

<a id="promotion-voucher-deactivate"></a>

- **Path**: `/promotion/voucher/deactivate`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:45:20

deactivate seller voucher promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `voucher_type` · _String_ · **required** — voucher type COLLECTIBLE_VOUCHER | CODE_VOUCHER
- `id` · _Number_ · **required** — Promotion ID

**Response parameters**

- `success` · _Boolean_ · **required** — true | false
- `error_code` · _Number_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
voucher_type=COLLECTIBLE_VOUCHER
id=91471121134707
```

Response sample 1:

```
success=true
error_code=null
error_msg=null
```

---

## SellerVoucherDetailQuery

<a id="promotion-voucher-get"></a>

- **Path**: `/promotion/voucher/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 12:48:35

get a seller voucher promotion detail

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `voucher_type` · _String_ · **required** — voucher type COLLECTIBLE_VOUCHER | CODE_VOUCHER
- `id` · _Number_ · **required** — promotion ID

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `criteria_over_money` · _String_ · **required** — Discount details, if order value reaches set value, will money discount or percentage discount
  - `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS
  - `voucher_type` · _String_ · **required** — Voucher type, COLLECTIBLE_VOUCHER | CODE_VOUCHER
  - `collect_start` · _Number_ · **required** — The time that customers can collect the voucher
  - `display_area` · _String_ · **required** — The area that customers can see the voucher. REGULAR_CHANNEL|STORE_FOLLOWER|OFFLINE|LIVE_STREAM|SHARE_VOUCHER|CEM_SELLER
  - `period_end_time` · _Number_ · **required** — The period end time that customers can use the voucher
  - `voucher_name` · _String_ · **required** — Voucher name
  - `voucher_discount_type` · _String_ · **required** — Discount type
  - `offering_money_value_off` · _String_ · **required** — Discount details, if order value reaches criteria_over_money value, will discount money value
  - `period_start_time` · _Number_ · **required** — The period start time that customers can use the voucher
  - `limit` · _Number_ · **required** — Voucher limit per customer
  - `order_used_budget` · _String_ · **required** — Already used total
  - `currency` · _String_ · **required** — Currency
  - `id` · _Number_ · **required** — Promotion ID
  - `issued` · _Number_ · **required** — Revision should be greater than the current setting
  - `max_discount_offering_money_value` · _String_ · **required** — Discount details, if order value reaches criteria_over_money value, allow maximum discount per order, just support percentage discount off type
  - `voucher_code` · _String_ · **required** — Voucher code
  - `offering_percentage_discount_off` · _String_ · **required** — Discount details, if order value reaches criteria_over_money value, will percentage discount off value
  - `status` · _String_ · **required** — Promotin status, NOT_START | ONGOING | SUSPEND | FINISH
- `success` · _Boolean_ · **required** — true | false
- `error_code` · _String_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `21` | E021 | The voucher_type field only supports the enumeration COLLECTIBLE_VOUCHER \| CODE_VOUCHER. |

**Example**

Request sample 1:

```
voucher_type=COLLECTIBLE_VOUCHER
id=91471121134707
```

Response sample 1:

```
data=response body
success=true
error_code=null
error_msg=null
```

---

## SellerVoucherList

<a id="promotion-vouchers-get"></a>

- **Path**: `/promotion/vouchers/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 14:43:23

query seller voucher promotion list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `cur_page` · _Number_ · **optional** — current page
- `voucher_type` · _String_ · **required** — voucher type COLLECTIBLE_VOUCHER | CODE_VOUCHER
- `name` · _String_ · **optional** — promotion name
- `page_size` · _Number_ · **optional** — page size
- `status` · _String_ · **optional** — NOT_START | ONGOING | SUSPEND | FINISH

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `total` · _Number_ · **required** — total
  - `current` · _Number_ · **required** — current page
  - `data_list` · _Object[]_ · **required** — data list
    - `criteria_over_money` · _String_ · **required** — Discount details, if order value reaches set value, will money discount or percentage discount
    - `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS
    - `voucher_type` · _String_ · **required** — Voucher type, COLLECTIBLE_VOUCHER | CODE_VOUCHER
    - `collect_start` · _Number_ · **required** — The time that customers can collect the voucher
    - `display_area` · _String_ · **required** — The area that customers can see the voucher. REGULAR_CHANNEL|STORE_FOLLOWER|OFFLINE|LIVE_STREAM|SHARE_VOUCHER|CEM_SELLER
    - `period_end_time` · _Number_ · **required** — The period end time that customers can use the voucher
    - `voucher_name` · _String_ · **required** — Voucher name
    - `voucher_discount_type` · _String_ · **required** — Discount type
    - `offering_money_value_off` · _String_ · **required** — Discount details, if order value reaches criteria_over_money value, will discount money value
    - `period_start_time` · _Number_ · **required** — The period start time that customers can use the voucher
    - `limit` · _Number_ · **required** — Voucher limit per customer
    - `order_used_budget` · _Number_ · **required** — Already used total
    - `currency` · _String_ · **required** — Currency
    - `id` · _Number_ · **required** — Promotion ID
    - `issued` · _Number_ · **required** — Revision should be greater than the current setting
    - `max_discount_offering_money_value` · _String_ · **required** — Discount details, if order value reaches criteria_over_money value, allow maximum discount per order, just support percentage discount off type
    - `voucher_code` · _String_ · **required** — Voucher code
    - `offering_percentage_discount_off` · _String_ · **required** — Discount details, if order value reaches criteria_over_money value, will percentage discount off value
    - `status` · _String_ · **required** — Promotin status, NOT_START | ONGOING | SUSPEND | FINISH
  - `page_size` · _Number_ · **required** — current page size
- `success` · _Boolean_ · **required** — true | false
- `error_code` · _String_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `Mp3SellerApiLimit` | Mp3 Seller not support the api -apipath | MP3 sellers cannot call the current API, please readthis document for a list of APIs that can be called by MP3 sellers, and you can call the GetSeller API and check the marketplaceEaseMode field to confirm that the current seller is of type MP3. |

**Example**

Request sample 1:

```
cur_page=1
voucher_type=COLLECTIBLE_VOUCHER
name=null
page_size=10
status=null
```

Response sample 1:

```
data=response body
success=true
error_code=null
error_msg=null
```

---

## SellerVoucherSelectedProductList

<a id="promotion-voucher-products-get"></a>

- **Path**: `/promotion/voucher/products/get`
- **Method**: `get`
- **Last modified**: 2022-08-03 21:16:29

query seller voucher selected products list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `voucher_type` · _String_ · **required** — voucher type COLLECTIBLE_VOUCHER | CODE_VOUCHER
- `id` · _Number_ · **required** — Promotion ID
- `cur_page` · _Number_ · **optional** — cur page
- `page_size` · _Number_ · **optional** — page size

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `total` · _Number_ · **required** — total
  - `current` · _Number_ · **required** — current page
  - `data_list` · _Object[]_ · **required** — product list
    - `product_id` · _Number_ · **required** — product item id
    - `sku_ids` · _Number[]_ · **required** — item sku id list
  - `page_size` · _Number_ · **required** — page size
- `success` · _Boolean_ · **required** — true | false
- `error_code` · _String_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
voucher_type=COLLECTIBLE_VOUCHER
id=91471121134707
cur_page=1
page_size=20
```

Response sample 1:

```
data=response body
success=true
error_code=null
error_msg=null
```

---

## SellerVoucherUpdate

<a id="promotion-voucher-update"></a>

- **Path**: `/promotion/voucher/update`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:45:36

update a existing seller voucher promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `max_discount_offering_money_value` · _String_ · **optional** — Discount details, if order value reaches criteria_over_money value, allow maximum discount per order, just support percentage discount off type
- `offering_percentage_discount_off` · _Number_ · **optional** — Discount details, if order value reaches criteria_over_money value, will percentage discount off value
- `id` · _String_ · **required** — Promotion ID
- `criteria_over_money` · _String_ · **required** — Discount details, if order value reaches set value, will money discount or percentage discount
- `voucher_type` · _String_ · **required** — Voucher type, just set COLLECTIBLE_VOUCHER
- `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS
- `collect_start` · _Number_ · **optional** — The time that customers can collect the voucher
- `display_area` · _String_ · **required** — The area that customers can see the voucher.
- `period_end_time` · _Number_ · **required** — The period end time that customers can use the voucher
- `voucher_name` · _String_ · **required** — Voucher name
- `voucher_discount_type` · _String_ · **required** — Discount type
- `offering_money_value_off` · _String_ · **required** — Discount details, if order value reaches criteria_over_money value, will discount money value
- `period_start_time` · _Number_ · **required** — The period start time that customers can use the voucher
- `limit` · _Number_ · **required** — Voucher limit per customer
- `issued` · _Number_ · **required** — Revision should be greater than the current setting

**Response parameters**

- `data` · _Number_ · **required** — promotion ID
- `success` · _Boolean_ · **required** — true | false
- `error_code` · _Number_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
max_discount_offering_money_value=50
offering_percentage_discount_off=1
id=91471121134707
criteria_over_money=100
voucher_type=COLLECTIBLE_VOUCHER
apply=SPECIFIC_PRODUCTS
collect_start=1625649720000
display_area=REGULAR_CHANNEL
period_end_time=1630339199000
voucher_name=test voucher
voucher_discount_type=MONEY_VALUE_OFF
offering_money_value_off=1
period_start_time=1626969600000
limit=1
issued=5
```

Response sample 1:

```
data=9616200353530
success=true
error_code=null
error_msg=null
```

---

