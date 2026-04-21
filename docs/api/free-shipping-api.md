# Free Shipping API

## FreeShippingActivate

<a id="promotion-freeshipping-activate"></a>

- **Path**: `/promotion/freeshipping/activate`
- **Method**: `post`
- **Last modified**: 2022-07-28 17:09:58

activate free shipping promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — promotion id

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
id=91471121134707
```

Response sample 1:

```
success=true
error_code=0
error_msg=error message
```

---

## FreeShippingAddSelectedProductSKU

<a id="promotion-freeshipping-product-sku-add"></a>

- **Path**: `/promotion/freeshipping/product/sku/add`
- **Method**: `post`
- **Last modified**: 2022-07-28 17:10:00

add sku for free shipping promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — promotion id
- `sku_ids` · _Number[]_ · **required** — sku id list

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
id=91471120815070
sku_ids=[10165704002,10164988653]
```

Response sample 1:

```
data={"sku id": "error message"}
success=true
error_code=0
error_msg=error message
```

---

## FreeShippingCreate

<a id="promotion-freeshipping-create"></a>

- **Path**: `/promotion/freeshipping/create`
- **Method**: `post`
- **Last modified**: 2022-07-28 17:10:01

create a new free shipping promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `budget_type` · _String_ · **required** — UNLIMITED_BUDGET | LIMITED_BUDGET
- `template_type` · _String_ · **optional** — template type, MANUALLY | CAMPAIGN | TEMPLATE
- `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS | CAMPAIGN_PRODUCTS
- `period_end_time` · _Number_ · **required** — when specific period required, the period end time that this promotion takes effect (timestamp)
- `template_code` · _String_ · **optional** — template code
- `category_name` · _String_ · **optional** — product category id
- `budget_value` · _String_ · **optional** — when limited budget required
- `promotion_name` · _String_ · **required** — promotion name
- `period_type` · _String_ · **required** — LONG_TERM | SPECIAL_PERIOD
- `region_type` · _String_ · **required** — ALL_REGIONS | SPECIAL_REGIONS, when regions query api return empty just support ALL_REGIONS
- `period_start_time` · _Number_ · **required** — when specific period required, the period start time that this promotion takes effect (timestamp)
- `campaign_tag` · _String_ · **optional** — when CAMPAIGN template type and CAMPAIGN_PRODUCTS apply type required
- `region_value` · _String[]_ · **optional** — when SPECIAL_REGIONS  required, data from regions query api
- `delivery_option` · _String_ · **required** — data from delivery options query list api
- `tiers` · _Object[]_ · **required** — promotion tier list
  - `filter` · _String_ · **required** — deal criteria value
  - `result` · _String_ · **optional** — when partial subsidy discount type required，shipping fee subsidy value
- `discount_type` · _String_ · **required** — shipping fee subsidy type,FULL_SUBSIDY|PARTIAL_SUBSIDY
- `deal_criteria` · _String_ · **required** — the criteria that customer can enjoy shipping fee subsidy, MONEY_VALUE_FROM_X|ITEM_QUANTITY_FROM_X|NO_CONDITION

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
budget_type=UNLIMITED_BUDGET
template_type=MANUALLY
apply=ENTIRE_SHOP
period_end_time=1630339199000
template_code=null
category_name=null
budget_value=10000
promotion_name=test
period_type=SPECIAL_PERIOD
region_type=ALL_REGIONS
period_start_time=1626969600000
campaign_tag=11230
region_value=["ALL"]
delivery_option=STANDARD
tiers=[{\"filter\":\"500\",\"result\":\"10\"}]
discount_type=PARTIAL_SUBSIDY
deal_criteria=MONEY_VALUE_FROM_X
```

Response sample 1:

```
data=9616200353530
success=true
error_code=null
error_msg=null
```

---

## FreeShippingDeactivate

<a id="promotion-freeshipping-deactivate"></a>

- **Path**: `/promotion/freeshipping/deactivate`
- **Method**: `post`
- **Last modified**: 2022-08-08 16:46:31

deactivate free shipping promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — promotion id

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
id=91471121134707
```

Response sample 1:

```
success=true
error_code=0
error_msg=error message
```

---

## FreeShippingDeleteSelectedProductSKU

<a id="promotion-freeshipping-product-sku-remove"></a>

- **Path**: `/promotion/freeshipping/product/sku/remove`
- **Method**: `post`
- **Last modified**: 2022-08-03 14:15:33

delete sku for free shipping promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — promotion id
- `sku_ids` · _Number[]_ · **required** — sku id list

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
id=91471120815070
sku_ids=[10165704002,10164988653]
```

Response sample 1:

```
success=true
error_code=0
error_msg=error message
```

---

## FreeShippingDeliveryOptionsQuery

<a id="promotion-freeshipping-deliveryoptions-get"></a>

- **Path**: `/promotion/freeshipping/deliveryoptions/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:40:19

query free shipping promotion delivery options

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `data` · _Object[]_ · **required** — response data
  - `name` · _String_ · **required** — delivery option name
  - `value` · _String_ · **required** — delivery option value
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
```

Response sample 1:

```
data=response data
success=true
error_code=0
error_msg=error message
```

---

## FreeShippingGet

<a id="promotion-freeshipping-get"></a>

- **Path**: `/promotion/freeshipping/get`
- **Method**: `get`
- **Last modified**: 2022-08-01 19:18:42

get free shipping promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — promotion id

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `template_type` · _String_ · **required** — template type, MANUALLY | CAMPAIGN | TEMPLATE
  - `budget_type` · _String_ · **required** — UNLIMITED_BUDGET | LIMITED_BUDGET
  - `used_budget_value` · _String_ · **required** — used budget value
  - `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS | CAMPAIGN_PRODUCTS
  - `period_end_time` · _Number_ · **required** — when specific period required, the period end time that this promotion takes effect (timestamp)
  - `template_code` · _String_ · **required** — template code, when TEMPLATE type not null
  - `category_name` · _String_ · **required** — category name
  - `budget_value` · _String_ · **required** — budget value
  - `promotion_name` · _String_ · **required** — promotion name
  - `period_type` · _String_ · **required** — LONG_TERM | SPECIAL_PERIOD
  - `region_type` · _String_ · **required** — ALL_REGIONS | SPECIAL_REGIONS
  - `period_start_time` · _Number_ · **required** — when specific period required, the period start time that this promotion takes effect (timestamp)
  - `platform_channel` · _String_ · **required** — LAZADA | ZAL | ALL_CHANNEL
  - `campaign_tag` · _String_ · **required** — when CAMPAIGN template type and CAMPAIGN_PRODUCTS apply type not null
  - `region_value` · _String[]_ · **required** — when SPECIAL_REGIONS  not null
  - `currency` · _String_ · **required** — currency
  - `id` · _Number_ · **required** — promotion id
  - `delivery_option` · _String_ · **required** — delivery option
  - `promo_tier` · _Object_ · **required** — promotion tier
    - `tiers` · _Object[]_ · **required** — promotion tier list
      - `filter` · _String_ · **required** — deal criteria value
      - `result` · _String_ · **required** — when partial subsidy discount type required，shipping fee subsidy value
    - `discount_type` · _String_ · **required** — shipping fee subsidy type,FULL_SUBSIDY|PARTIAL_SUBSIDY
    - `deal_criteria` · _String_ · **required** — the criteria that customer can enjoy shipping fee subsidy, MONEY_VALUE_FROM_X|ITEM_QUANTITY_FROM_X|NO_CONDITION
  - `status` · _String_ · **required** — status, NOT_START | ONGOING | SUSPEND | FINISH
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
id=91471121124115
```

Response sample 1:

```
data=response body
success=true
error_code=null
error_msg=null
```

---

## FreeShippingList

<a id="promotion-freeshippings-get"></a>

- **Path**: `/promotion/freeshippings/get`
- **Method**: `get`
- **Last modified**: 2022-08-01 01:01:42

query free shipping promotion list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `curPage` · _Number_ · **optional** — current page
- `name` · _String_ · **optional** — promotion name
- `pageSize` · _Number_ · **optional** — page size
- `status` · _String_ · **optional** — NOT_START | ONGOING | SUSPEND | FINISH

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `total` · _Number_ · **required** — total
  - `current` · _Number_ · **required** — current page
  - `data_list` · _Object[]_ · **required** — data list
    - `budget_type` · _String_ · **required** — UNLIMITED_BUDGET | LIMITED_BUDGET
    - `template_type` · _String_ · **required** — template type, MANUALLY | CAMPAIGN | TEMPLATE
    - `used_budget_value` · _String_ · **required** — used budget value
    - `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS | CAMPAIGN_PRODUCTS
    - `period_end_time` · _Number_ · **required** — when specific period required, the period end time that this promotion takes effect (timestamp)
    - `template_code` · _String_ · **required** — template code, when TEMPLATE type not null
    - `category_name` · _String_ · **required** — category name
    - `budget_value` · _String_ · **required** — budget value
    - `promotion_name` · _String_ · **required** — promotion name
    - `period_type` · _String_ · **required** — LONG_TERM | SPECIAL_PERIOD
    - `region_type` · _String_ · **required** — ALL_REGIONS | SPECIAL_REGIONS
    - `period_start_time` · _Number_ · **required** — when specific period required, the period start time that this promotion takes effect (timestamp)
    - `platform_channel` · _String_ · **required** — LAZADA | ZAL | ALL_CHANNEL
    - `campaign_tag` · _String_ · **required** — when CAMPAIGN template type and CAMPAIGN_PRODUCTS apply type not null
    - `region_value` · _String[]_ · **required** — when SPECIAL_REGIONS  not null
    - `currency` · _String_ · **required** — currency
    - `id` · _Number_ · **required** — promotion id
    - `delivery_option` · _String_ · **required** — delivery option
    - `promo_tier` · _Object_ · **required** — promotion tier
      - `tiers` · _Object[]_ · **required** — promotion tier list
        - `filter` · _String_ · **required** — deal criteria value
        - `result` · _String_ · **required** — when partial subsidy discount type required，shipping fee subsidy value
      - `discount_type` · _String_ · **required** — shipping fee subsidy type,FULL_SUBSIDY|PARTIAL_SUBSIDY
      - `deal_criteria` · _String_ · **required** — the criteria that customer can enjoy shipping fee subsidy, MONEY_VALUE_FROM_X|ITEM_QUANTITY_FROM_X|NO_CONDITION
    - `status` · _String_ · **required** — status, NOT_START | ONGOING | SUSPEND | FINISH
  - `page_size` · _Number_ · **required** — page size
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
curPage=1
name=test
pageSize=10
status=ONGOING
```

Response sample 1:

```
data=response body
success=true
error_code=0
error_msg=error message
```

---

## FreeShippingRegionsQuery

<a id="promotion-freeshipping-regions-get"></a>

- **Path**: `/promotion/freeshipping/regions/get`
- **Method**: `get`
- **Last modified**: 2022-08-04 09:31:48

query free shipping promotion regions

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `data` · _Object[]_ · **required** — response data
  - `name` · _String_ · **required** — region name
  - `value` · _String_ · **required** — region value
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
```

Response sample 1:

```
data=response data
success=true
error_code=0
error_msg=error message
```

---

## FreeShippingSelectedProductList

<a id="promotion-freeshipping-products-get"></a>

- **Path**: `/promotion/freeshipping/products/get`
- **Method**: `get`
- **Last modified**: 2022-08-01 19:18:33

query free shipping promotion selected product list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `curPage` · _Number_ · **optional** — current page
- `pageSize` · _Number_ · **optional** — page size
- `id` · _Number_ · **required** — promotion id

**Response parameters**

- `data` · _Object_ · **required** — response data
  - `total` · _Number_ · **required** — total
  - `current` · _Number_ · **required** — current page
  - `data_list` · _Object[]_ · **required** — data list
    - `product_id` · _Number_ · **required** — product item id
    - `sku_ids` · _Number[]_ · **required** — item sku id list
  - `page_size` · _Number_ · **required** — page size
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
curPage=1
pageSize=10
id=91471121124115
```

Response sample 1:

```
data=response data
success=true
error_code=0
error_msg=error msg
```

---

## FreeShippingUpdate

<a id="promotion-freeshipping-update"></a>

- **Path**: `/promotion/freeshipping/update`
- **Method**: `post`
- **Last modified**: 2022-08-04 09:25:55

update free shipping promotion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `budget_type` · _String_ · **required** — UNLIMITED_BUDGET | LIMITED_BUDGET
- `template_type` · _String_ · **required** — template type, MANUALLY | CAMPAIGN | TEMPLATE
- `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS | CAMPAIGN_PRODUCTS
- `period_end_time` · _Number_ · **required** — when specific period required, the period end time that this promotion takes effect (timestamp)
- `template_code` · _String_ · **optional** — template code
- `category_name` · _String_ · **optional** — product category id
- `budget_value` · _String_ · **optional** — when limited budget required
- `promotion_name` · _String_ · **required** — promotion name
- `period_type` · _String_ · **required** — LONG_TERM | SPECIAL_PERIOD
- `region_type` · _String_ · **required** — ALL_REGIONS | SPECIAL_REGIONS, when regions query api return empty just support ALL_REGIONS
- `period_start_time` · _Number_ · **required** — when specific period required, the period start time that this promotion takes effect (timestamp)
- `campaign_tag` · _String_ · **optional** — when CAMPAIGN template type and CAMPAIGN_PRODUCTS apply type required
- `region_value` · _String[]_ · **optional** — when SPECIAL_REGIONS  required, data from regions query api
- `id` · _Number_ · **required** — promotion id
- `delivery_option` · _String_ · **required** — data from delivery options query list api
- `discount_type` · _String_ · **required** — shipping fee subsidy type,FULL_SUBSIDY|PARTIAL_SUBSIDY
- `deal_criteria` · _String_ · **required** — the criteria that customer can enjoy shipping fee subsidy, MONEY_VALUE_FROM_X|ITEM_QUANTITY_FROM_X|NO_CONDITION
- `tiers` · _Object[]_ · **required** — promotion tier list
  - `filter` · _String_ · **required** — deal criteria value
  - `result` · _String_ · **optional** — when partial subsidy discount type required，shipping fee subsidy value

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
budget_type=UNLIMITED_BUDGET
template_type=MANUALLY
apply=ENTIRE_SHOP
period_end_time=1630339199000
template_code=null
category_name=null
budget_value=10000
promotion_name=test
period_type=SPECIAL_PERIOD
region_type=ALL_REGIONS
period_start_time=1626969600000
campaign_tag=11230
region_value=["ALL"]
id=9616200353530
delivery_option=STANDARD
discount_type=PARTIAL_SUBSIDY
deal_criteria=MONEY_VALUE_FROM_X
tiers=[{\"filter\":\"500\",\"result\":\"10\"}]
```

Response sample 1:

```
data=9616200353530
success=true
error_code=null
error_msg=null
```

---

