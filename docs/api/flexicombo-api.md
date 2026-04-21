# Flexicombo API

## ActivateFlexiCombo

<a id="promotion-flexicombo-activate"></a>

- **Path**: `/promotion/flexicombo/activate`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:20:54

activate flexi combo

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — id

**Response parameters**

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
| `21` | E021: Internal System Error | Internal System Error |
| `23` | E023: activate failed | activate failed |

**Example**

Request sample 1:

```
id=9694800953530
```

Response sample 1:

```
success=true
error_code=null
error_msg=null
```

---

## AddFlexiComboProducts

<a id="promotion-flexicombo-products-add"></a>

- **Path**: `/promotion/flexicombo/products/add`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:20:53

add flexi combo products

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — promotion id
- `sku_ids` · _Number[]_ · **required** — sku list that will be added to this flexi combo

**Response parameters**

- `data` · _Object_ · **required** — sku list that fail to add
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
| `21` | E021: Internal System Error | Internal System Error |

**Example**

Request sample 1:

```
id=9616200353530
sku_ids=[2865522584, 2865522584]
```

Response sample 1:

```
data={"sku id": "error message"}
success=true
error_code=null
error_msg=null
```

---

## CreateFlexiCombo

<a id="promotion-flexicombo-create"></a>

- **Path**: `/promotion/flexicombo/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:19:57

create a  new promotion flexi combo

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `apply` · _String_ · **required** — apply scope: ENTIRE_STORE | SPECIFIC_PRODUCTS
- `sample_skus` · _Object[]_ · **optional** — sample list
  - `productId` · _Number_ · **optional** — sample product id
  - `skuId` · _Number_ · **optional** — sample sku id
- `criteria_type` · _String_ · **required** — AMOUNT | QUANTITY
- `criteria_value` · _String[]_ · **required** — criteria value list
- `order_numbers` · _Number_ · **required** — orders numbers that can use flexi combo
- `name` · _String_ · **required** — flexi combo name
- `platform_channel` · _String_ · **optional** — platform channel, default is 1
- `gift_skus` · _Object[]_ · **optional** — gift list
  - `productId` · _Number_ · **optional** — gift product id
  - `skuId` · _Number_ · **optional** — gift sku id
- `start_time` · _Number_ · **required** — start time
- `discount_type` · _String_ · **required** — money | discount | freeGift | freeSample |  discountWithGift | moneyWithGift | discountWithSample | moneyWithSample
- `end_time` · _Number_ · **required** — end time
- `discount_value` · _String[]_ · **required** — discount value list
- `stackable` · _String_ · **optional** — Stackable Discount，Ex. Buy 2SGD Save 1SGD, Buy 4SGD Save 2SGD, Buy 6SGD Save 3SGD, etc.
- `gift_buy_limit_value` · _String[]_ · **optional** — buyer can choose gift/sample quantity limit value list

**Response parameters**

- `data` · _Number_ · **required** — flexi combo id
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
| `21` | E021: Internal System Error | Internal System Error |
| `22` | E022: "%s" | validate param error |
| `23` | E023: "%s" | create error |

**Example**

Request sample 1:

```
apply=ENTIRE_STORE
sample_skus=[{"productId": 442156001,"skuId": 1174240001}]
criteria_type=AMOUNT
criteria_value=["100"]
order_numbers=100
name=test
platform_channel=1
gift_skus=[{"productId": 442156001,"skuId": 1174240001}]
start_time=1591977600000
discount_type=money
end_time=1592063999000
discount_value=["100"]
stackable=false
gift_buy_limit_value=["1"]
```

Response sample 1:

```
data=9616200353530
success=true
error_code=null
error_msg=null
```

---

## DeactivateFlexiCombo

<a id="promotion-flexicombo-deactivate"></a>

- **Path**: `/promotion/flexicombo/deactivate`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:20:56

deactivate flexi combo

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — id

**Response parameters**

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
| `21` | E021: Internal System Error | Internal System Error |
| `23` | E023: deactivate failed | deactivate failed |

**Example**

Request sample 1:

```
id=9694800953530
```

Response sample 1:

```
success=true
error_code=null
error_msg=null
```

---

## DeleteFlexiComboProducts

<a id="promotion-flexicombo-products-delete"></a>

- **Path**: `/promotion/flexicombo/products/delete`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:20:56

delete flexi combo products

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — id
- `sku_ids` · _Number[]_ · **required** — sku list that will remove from flexi combo

**Response parameters**

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
| `21` | E021: Internal System Error | Internal System Error |
| `23` | E023: remove sku from flexi combo failed | remove sku from flexi combo failed |

**Example**

Request sample 1:

```
id=9616200353530
sku_ids=[2865522584, 2865522584]
```

Response sample 1:

```
success=true
error_code=null
error_msg=null
```

---

## GetFlexiComboDetails

<a id="promotion-flexicombo-details"></a>

- **Path**: `/promotion/flexicombo/details`
- **Method**: `get`
- **Last modified**: 2022-07-29 14:20:57

get promotion flexi combo detail by id

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — id

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `order_used_numbers` · _Number_ · **optional** — orders numbers that has been used in flexi combo
  - `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS
  - `sample_skus` · _Object[]_ · **required** — sample list
    - `product_id` · _Number_ · **optional** — sample product id
    - `sku_id` · _Number_ · **optional** — sample sku id
    - `tier` · _Number_ · **optional** — tier of the sample
  - `criteria_type` · _String_ · **required** — criteria type: AMOUNT | QUANTITY
  - `type` · _String_ · **required** — fixed value: Flexi-combo
  - `criteria_value` · _String[]_ · **required** — criteria value
  - `order_numbers` · _Number_ · **required** — orders numbers that can use flexi combo
  - `platform_channel` · _String_ · **required** — platform channel
  - `name` · _String_ · **required** — name
  - `gift_skus` · _Object[]_ · **required** — gift list
    - `product_id` · _Number_ · **optional** — gift product id
    - `sku_id` · _Number_ · **optional** — gift sku id
    - `tier` · _Number_ · **optional** — tier of the gift
  - `discount_type` · _String_ · **required** — money | discount | freeGift | freeSample |  discountWithGift | moneyWithGift | discountWithSample | moneyWithSample
  - `start_time` · _Number_ · **required** — flexi combo start time
  - `end_time` · _Number_ · **required** — flexi combo end time
  - `id` · _Number_ · **required** — id
  - `discount_value` · _String[]_ · **required** — discount value
  - `status` · _String_ · **required** — NOT_START | ONGOING | SUSPEND | FINISH
  - `stackable` · _Boolean_ · **optional** — Stackable Discount，Ex. Buy 2SGD Save 1SGD, Buy 4SGD Save 2SGD, Buy 6SGD Save 3SGD, etc.
  - `gift_buy_limit_value` · _String[]_ · **optional** — buyer can choose gift/sample quantity limit value list
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
| `21` | E021: Internal System Error | Internal System Error |

**Example**

Request sample 1:

```
id=9694800953530
```

Response sample 1:

```
data=response body
success=true
error_code=null
error_msg=null
```

---

## ListFlexiCombo

<a id="promotion-flexicombo-list"></a>

- **Path**: `/promotion/flexicombo/list`
- **Method**: `get`
- **Last modified**: 2022-07-29 14:20:57

list flexi combo

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `cur_page` · _Number_ · **required** — current page
- `name` · _String_ · **optional** — name
- `page_size` · _Number_ · **required** — page size
- `status` · _String_ · **optional** — NOT_START | ONGOING | SUSPEND | FINISH

**Response parameters**

- `success` · _Boolean_ · **required** — success
- `error_code` · _String_ · **required** — error_code
- `error_msg` · _String_ · **required** — error_msg
- `data` · _Object_ · **required** — data
  - `page_size` · _Number_ · **required** — page_size
  - `total` · _Number_ · **required** — total
  - `current` · _Number_ · **required** — current
  - `data_list` · _Object[]_ · **required** — data_list
    - `order_numbers` · _Number_ · **required** — order_numbers
    - `platform_channel` · _String_ · **required** — platform_channel
    - `name` · _String_ · **required** — name
    - `gift_skus` · _Object[]_ · **required** — gift_skus
      - `product_id` · _Number_ · **required** — product_id
      - `sku_id` · _Number_ · **required** — sku_id
    - `start_time` · _Number_ · **required** — start_time
    - `order_used_numbers` · _Number_ · **optional** — orders numbers that has been used in flexi combo
    - `discount_type` · _String_ · **required** — discount_type
    - `end_time` · _Number_ · **required** — end_time
    - `id` · _Number_ · **required** — id
    - `discount_value` · _String[]_ · **required** — discount_value
    - `status` · _String_ · **required** — status
    - `apply` · _String_ · **required** — apply
    - `sample_skus` · _Object[]_ · **required** — sample_skus
      - `product_id` · _Number_ · **required** — product_id
      - `sku_id` · _Number_ · **required** — sku_id
    - `criteria_type` · _String_ · **required** — criteria_type
    - `type` · _String_ · **required** — type
    - `criteria_value` · _String[]_ · **required** — criteria_value
    - `stackable` · _Boolean_ · **optional** — Stackable Discount，Ex. Buy 2SGD Save 1SGD, Buy 4SGD Save 2SGD, Buy 6SGD Save 3SGD, etc.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `21` | E021: Internal System Error | Internal System Error |

**Example**

Request sample 1:

```
cur_page=1
name=test
page_size=10
status=NOT_START
```

Response sample 1:

```
success=true
error_code=null
error_msg=null
data= {"data":{"current":1,"dataList":[{"apply":"SPECIFIC_PRODUCTS","criteriaType":"QUANTITY","criteriaValue":["1"],"discountType":"freeGift","endTime":1593878399000,"giftSkus":[{"productId":600956022,"skuId":1742246015},{"productId":600956022,"skuId":1742246016}],"id":9786600553530,"name":"终极","orderNumbers":10,"startTime":1593705600000,"status":"ONGOING","type":"Flexi-combo"}],"pageSize":10,"total":118},"success":true,"error_code":null,"errorMsg":null}
```

---

## ListFlexiComboProducts

<a id="promotion-flexicombo-products-list"></a>

- **Path**: `/promotion/flexicombo/products/list`
- **Method**: `get`
- **Last modified**: 2022-07-29 14:20:58

list flexi combo products

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `cur_page` · _Number_ · **required** — current page
- `page_size` · _Number_ · **required** — page size;Maximum value: 100; Minimum value: 10
- `id` · _Number_ · **required** — flexi combo id

**Response parameters**

- `data` · _Object_ · **required** — data
  - `total` · _Number_ · **required** — total
  - `current` · _Number_ · **required** — current
  - `data_list` · _Number[]_ · **required** — data_list
  - `page_size` · _Number_ · **required** — page_size
- `success` · _Boolean_ · **required** — true|false
- `error_code` · _String_ · **required** — error_code
- `error_msg` · _String_ · **required** — error_msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `21` | E021: Internal System Error | Internal System Error |

**Example**

Request sample 1:

```
cur_page=1
page_size=10
id=9616200353530
```

Response sample 1:

```
data={"data":{"total":6,"current":1,"dataList":[2865356462,1658824901,1174240001],"pageSize":10,"class":"com.alibaba.global.merchant.promotion.lzd.domain.openapi.PageDataModel"},"success":true,"errorCode":null,"class":"com.alibaba.global.merchant.promotion.lzd.domain.openapi.OpenApiResponse","errorMsg":null}
success=true
error_code=null
error_msg=null
```

---

## UpdateFlexiCombo

<a id="promotion-flexicombo-update"></a>

- **Path**: `/promotion/flexicombo/update`
- **Method**: `post`
- **Last modified**: 2022-07-30 10:20:59

update flexi combo

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `apply` · _String_ · **required** — apply scope: ENTIRE_SHOP | SPECIFIC_PRODUCTS
- `sample_skus` · _Object[]_ · **optional** — sample list
  - `productId` · _Number_ · **optional** — sample product id
  - `skuId` · _Number_ · **optional** — sample sku id
- `criteria_type` · _String_ · **required** — AMOUNT | QUANTITY
- `criteria_value` · _String[]_ · **required** — criteria value list
- `order_numbers` · _Number_ · **required** — orders numbers that can use flexi combo
- `name` · _String_ · **required** — flexi combo name
- `platform_channel` · _String_ · **optional** — platform channel
- `gift_skus` · _Object[]_ · **optional** — gift list
  - `productId` · _Number_ · **optional** — gift product id
  - `skuId` · _Number_ · **optional** — gift sku id
- `start_time` · _Number_ · **required** — start time
- `discount_type` · _String_ · **required** — money | discount | freeGift | freeSample |  discountWithGift | moneyWithGift | discountWithSample | moneyWithSample
- `id` · _Number_ · **required** — flexi combo id
- `end_time` · _Number_ · **required** — end time
- `discount_value` · _String[]_ · **required** — discount value list
- `stackable` · _String_ · **optional** — Stackable Discount，Ex. Buy 2SGD Save 1SGD, Buy 4SGD Save 2SGD, Buy 6SGD Save 3SGD, etc.
- `gift_buy_limit_value` · _String[]_ · **optional** — buyer can choose gift/sample quantity limit value list

**Response parameters**

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
| `21` | E021: Internal System Error | Internal System Error |
| `22` | E022: "%s" | invalid param |
| `23` | E023: "%s" | update failed |

**Example**

Request sample 1:

```
apply=ENTIRE_STORE
sample_skus=[{"productId": 442156001,"skuId": 1174240001}]
criteria_type=AMOUNT
criteria_value=["100"]
order_numbers=100
name=test
platform_channel=1
gift_skus=[{"productId": 442156001,"skuId": 1174240001}]
start_time=1591977600000
discount_type=money
id=9694800953530
end_time=1592063999000
discount_value=["100"]
stackable=false
gift_buy_limit_value=["1"]
```

Response sample 1:

```
success=true
error_code=null
error_msg=null
```

---

