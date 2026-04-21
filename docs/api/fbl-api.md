# FBL API

## BuildFulfillmentSkuRelation

<a id="fbl-fulfillment-sku-relation-write"></a>

- **Path**: `/fbl/fulfillment_sku_relation/write`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:15:47

build the relation between platformSku and fulfillmentSku

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `site` · _String_ · **required** — site
- `item_id` · _Number_ · **required** — itemId
- `sku_id` · _Number_ · **required** — skuId
- `sc_item_id` · _Number_ · **optional** — fulfillmentSkuId
- `fulfillment_sku` · _String_ · **optional** — fulfillmentSku

**Response parameters**

- `result` · _Object_ · **required** — result DTO
  - `success` · _Boolean_ · **required** — if success
  - `failure` · _Boolean_ · **required** — if failure
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
| `PARAM_ILLEGAL` | "sku not exists" | SKU incoming error please verify if it exists in the corresponding shop |

**Example**

Request sample 1:

```
site=SG
item_id=710230731
sku_id=1551058427
sc_item_id=610412175368
fulfillment_sku=CB-2230148066-12811407956
```

Response sample 1:

```
result={   "success": false,   "failure": true,   "errorCode": "PARAM_ILLEGAL",   "class": "com.alibaba.ascp.itemcenter.dto.Result",   "errorMsg": "sku not belongs to the sellerId" }
```

---

## CancelFulfillmentOrderForMCL

<a id="fbl-fulfillment-order-cancel"></a>

- **Path**: `/fbl/fulfillment_order/cancel`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:15:57

Cancel Fulfillment Order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_order_id` · _String_ · **required** — Order level identifier for fulfilment order, unique for idempotence
- `platform_name` · _String_ · **required** — Trade platform name
- `cancel_reason` · _String_ · **optional** — Cancelled reason
- `items` · _Object[]_ · **required** — Cancelled details
  - `platform_item_id` · _String_ · **required** — Unique item level identifier for fulfilment order

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success
- `error_code` · _String_ · **optional** — Error code
- `error_message` · _String_ · **optional** — Error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_order_id=OF02282036214681
platform_name=LAZADA_TH
cancel_reason=RTS
items=[{"platform_item_id":"LP201912141652"}]
```

Response sample 1:

```
success=TRUE
error_code=Error code
error_message=Error message
```

---

## CancelInboundReservation

<a id="fbl-inbound-reservation-cancel"></a>

- **Path**: `/fbl/inbound_reservation/cancel`
- **Method**: `post`
- **Last modified**: 2022-07-29 13:47:56

cancel reservation order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `reservation_order` · _String_ · **required** — reservation order code

**Response parameters**

- `success` · _Boolean_ · **optional** — success
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
reservation_order=RSO1234
```

Response sample 1:

```
success=true
error_code=SELLER_ERROR
error_message=seller error
```

---

## CancelOutboundOrder

<a id="fbl-outbound-order-cancel"></a>

- **Path**: `/fbl/outbound_order/cancel`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:16:36

Cancel outbound order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `outbound_order_no` · _String_ · **required** — Outbound order number

**Response parameters**

- `success` · _Boolean_ · **optional** — Cancel success or not.
- `error_code` · _String_ · **optional** — Error code.
- `error_message` · _String_ · **optional** — Error message.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
outbound_order_no=OO02200XXX
```

Response sample 1:

```
success=true
error_code=ERROR_SYSTEM
error_message=Cancel inbound failed!
```

---

## CancelVasOrder4FBL

<a id="fbl-vas-cancelvasorder"></a>

- **Path**: `/fbl/vas/cancelVasOrder`
- **Method**: `GET/POST`
- **Last modified**: 2026-01-09 11:48:05

取消增值服务

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_name` · _String_ · **required** — laz店铺所属的前台租户,例如: LAZADA_VN
- `vas_order_no` · _String_ · **required** — 增值服务单号
- `cancel_reason` · _String_ · **optional** — 取消原因

**Response parameters**

- `data` · _String_ · **optional** — 取消结果

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_name=LAZADA_VN
vas_order_no=VAS123456
cancel_reason=cancelReason
```

Response sample 1:

```
data={"data":{"retryable":false,"fail":false,"success":true,"succAndNotNull":false,"message":"OK"},"code":"0","request_id":"2101773f17679306722446960","_trace_id_":"2108037917679306720795016e1eaa"}
```

---

## CancelnBoundOrder

<a id="fbl-inbound-order-cancel"></a>

- **Path**: `/fbl/inbound_order/cancel`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:16:29

Cancel inbound order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `inbound_order_no` · _String_ · **required** — Inbound order number

**Response parameters**

- `success` · _Boolean_ · **optional** — Cancel success or not.
- `error_code` · _String_ · **optional** — Error code.
- `error_message` · _String_ · **optional** — Error message.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
inbound_order_no=IO02200XXX
```

Response sample 1:

```
success=true
error_code=ERROR_SYSTEM
error_message=Cancel inbound failed!
```

---

## CheckInboundReservationSlot

<a id="fbl-inbound-reservation-check"></a>

- **Path**: `/fbl/inbound_reservation/check`
- **Method**: `get`
- **Last modified**: 2022-07-26 00:16:42

Check Available Reservation Slots for Inbound Order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `inbound_orders` · _String_ · **required** — inbound order list
- `date` · _String_ · **required** — date

**Response parameters**

- `success` · _Boolean_ · **optional** — success
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message
- `data` · _Object_ · **optional** — data
  - `slots` · _String[]_ · **optional** — data slot list

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
inbound_orders=IO1234,IO5678
date=2021-12-01
```

Response sample 1:

```
success=true
error_code=SHIPPER_ERROR
error_message=shipper error
data={}
```

---

## CreateFulfillmentOrderForMCL

<a id="fbl-fulfillment-order-create"></a>

- **Path**: `/fbl/fulfillment_order/create`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:16:43

Create Fulfillment Order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_payment_method` · _String_ · **required** — Payment method, mainly check cod type
- `remark` · _String_ · **optional** — Remark
- `currency` · _String_ · **required** — Currency
- `items` · _Object[]_ · **required** — Fulfillment order line list, contains no more than 300 items
  - `paid_price` · _String_ · **required** — Item paid price
  - `platform_delivery_type` · _String_ · **required** — Delivery type (this is always standard for now)
  - `platform_item_id` · _String_ · **required** — Unique item level identifier for fulfilment order
  - `sku` · _String_ · **optional** — Sku
  - `owner_id` · _String_ · **required** — Shipper id
  - `shipping_type` · _String_ · **required** — Distribution type (this is always warehouse)
  - `fulfillment_sku_id` · _String_ · **required** — Fulfillment sku id
  - `quantity` · _Number_ · **required** — Quantity (this is always 1)
  - `store_code` · _String_ · **required** — Distribution of warehouse
  - `unit_price` · _String_ · **required** — Item unit price
  - `warehouse_promised_time` · _String_ · **optional** — Warehouse promised estimated arrival time in UTC
  - `promised_max_time` · _String_ · **optional** — Promised max estimated arrival time in UTC
  - `promised_min_time` · _String_ · **optional** — Promised min estimated arrival time in UTC
  - `platform_sub_trade_id` · _String_ · **optional** — Trade platform sub trade order id
  - `category_name` · _String_ · **optional** — Item category name
  - `fulfillment_priority` · _Boolean_ · **optional** — Fulfillment priority
- `receiver` · _Object_ · **required** — Receiver info
  - `zip_code` · _String_ · **optional** — Zip code
  - `country_iso` · _String_ · **required** — iso-3166-1 country code
  - `country` · _String_ · **optional** — Receiver country
  - `province` · _String_ · **optional** — Receiver province
  - `city` · _String_ · **optional** — Receiver city
  - `district` · _String_ · **optional** — Receiver district
  - `town` · _String_ · **optional** — Receiver town
  - `detail_address` · _String_ · **required** — Receiver detail address
  - `area_id` · _String_ · **optional** — Receiver area id from LEL
  - `division_id` · _String_ · **optional** — Receiver division id from LEL
  - `address_id` · _String_ · **required** — Receiver address id from LEL
  - `mobile_phone` · _String_ · **required** — Receiver mobile phone
  - `telephone` · _String_ · **optional** — Receiver telephone
  - `company_name` · _String_ · **optional** — Receiver company name
  - `contact_name` · _String_ · **required** — Receiver cantact name
  - `email` · _String_ · **required** — Receiver email
- `platform_name` · _String_ · **required** — Trade platform name
- `fulfillment_finish_time` · _String_ · **optional** — Estimated warehouse outbound time in UTC
- `platform_order_creation_time` · _String_ · **required** — Trade order create time in UTC
- `sales_order_number` · _String_ · **required** — Sales order number from platform
- `platform_order_id` · _String_ · **required** — Unique order level identifier for fulfilment order
- `out_order_creation_time` · _String_ · **optional** — Out fulfillment order create time in UTC
- `is_platform_nominated_fleet` · _Boolean_ · **optional** — Whether platform nominated fleet
- `seller_store_id` · _String_ · **optional** — seller store id
- `seller_store_name` · _String_ · **optional** — seller store name

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success
- `error_code` · _String_ · **optional** — Error code
- `error_message` · _String_ · **optional** — Error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_payment_method=COD
remark=remark
currency=THB
items=[{"category_name":"24266","fulfillment_priority":false,"paid_price":251.5,"platform_delivery_type":"standard","platform_item_id":"LP1234567890","fulfillment_sku_id":"609298482668","promised_max_time":"2019-12-16T13:00:00Z","promised_min_time":"2019-12-13T13:00:00Z","warehouse_promised_time":"2019-12-12T13:00:00Z","owner_id":"4100162360","shipping_type":"warehouse","sku":"00000000_TH-00000000","store_code":"OMS-LAZADA-TH-W-1","unit_price":229.0,"quantity":1}]
receiver={"detail_address":"bankok, 10150, บางบอน/ Bang Bon, กรุงเทพมหานคร/ Bangkok","address_id":"R1801","email":"yingchuang.xn@alibaba-inc.com","contact_name":"Ricky","mobile_phone":"0888888888"}
platform_name=TEST_TH
fulfillment_finish_time=2018-12-14T18:18:32Z
platform_order_creation_time=2019-12-11T11:40:53Z
sales_order_number=LP666666
platform_order_id=LP201912131233
out_order_creation_time=2018-12-14T18:18:32Z
is_platform_nominated_fleet=false
seller_store_id=001
seller_store_name=TEST001
```

Response sample 1:

```
success=TRUE
error_code=Error code
error_message=Error message
```

---

## CreateFulfillmentOrderForMCLV2PNF

<a id="fbl-fulfillment-order-pnf-create"></a>

- **Path**: `/fbl/fulfillment_order_pnf/create`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:16:47

Create Fulfillment Order for MCL2.0 PNF

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_payment_method` · _String_ · **required** — Payment method, mainly check cod type
- `remark` · _String_ · **optional** — Remark
- `currency` · _String_ · **required** — Currency
- `items` · _Object[]_ · **required** — Fulfillment order line list, contains no more than 300 items
  - `paid_price` · _String_ · **required** — Item paid price
  - `platform_delivery_type` · _String_ · **required** — Delivery type (this is always standard for now)
  - `platform_item_id` · _String_ · **required** — Unique item level identifier for fulfilment order
  - `sku` · _String_ · **optional** — Sku
  - `owner_id` · _String_ · **required** — Shipper id
  - `shipping_type` · _String_ · **required** — Distribution type (this is always warehouse)
  - `fulfillment_sku_id` · _String_ · **required** — Fulfillment sku id
  - `quantity` · _Number_ · **required** — Quantity (this is always 1)
  - `store_code` · _String_ · **required** — Distribution of warehouse
  - `unit_price` · _String_ · **required** — Item unit price
  - `warehouse_promised_time` · _String_ · **optional** — Warehouse promised estimated arrival time in UTC
  - `promised_max_time` · _String_ · **optional** — Promised max estimated arrival time in UTC
  - `promised_min_time` · _String_ · **optional** — Promised min estimated arrival time in UTC
  - `platform_sub_trade_id` · _String_ · **optional** — Trade platform sub trade order id
  - `category_name` · _String_ · **optional** — Item category name
  - `fulfillment_priority` · _Boolean_ · **optional** — Fulfillment priority
- `platform_name` · _String_ · **required** — Trade platform name
- `fulfillment_finish_time` · _String_ · **optional** — Estimated warehouse outbound time in UTC
- `platform_order_creation_time` · _String_ · **required** — Trade order create time in UTC
- `sales_order_number` · _String_ · **required** — Sales order number from platform
- `platform_order_id` · _String_ · **required** — Unique order level identifier for fulfilment order
- `out_order_creation_time` · _String_ · **optional** — Out fulfillment order create time in UTC
- `seller_store_id` · _String_ · **optional** — seller store id
- `seller_store_name` · _String_ · **optional** — seller store name

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success
- `error_code` · _String_ · **optional** — Error code
- `error_message` · _String_ · **optional** — Error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_payment_method=COD
remark=remark
currency=THB
items=[{"category_name":"24266","fulfillment_priority":false,"paid_price":251.5,"platform_delivery_type":"standard","platform_item_id":"LP1234567890","fulfillment_sku_id":"609298482668","promised_max_time":"2019-12-16T13:00:00Z","promised_min_time":"2019-12-13T13:00:00Z","warehouse_promised_time":"2019-12-12T13:00:00Z","owner_id":"4100162360","shipping_type":"warehouse","sku":"00000000_TH-00000000","store_code":"OMS-LAZADA-TH-W-1","unit_price":229.0,"quantity":1}]
platform_name=TEST_TH
fulfillment_finish_time=2018-12-14T18:18:32Z
platform_order_creation_time=2019-12-11T11:40:53Z
sales_order_number=LP666666
platform_order_id=LP201912131233
out_order_creation_time=2018-12-14T18:18:32Z
seller_store_id=001
seller_store_name=TEST001
```

Response sample 1:

```
success=TRUE
error_code=Error code
error_message=Error message
```

---

## CreateFulfillmentSkuDecouple

<a id="fbl-fulfillment-sku-create"></a>

- **Path**: `/fbl/fulfillment_sku/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 18:02:03

create fulfillment sku without product

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `fulfillment_sku_name` · _String_ · **required** — title
- `barcodes` · _String[]_ · **required** — barcode list
- `hygroscopic` · _Boolean_ · **required** — true/false
- `precious` · _Boolean_ · **required** — true/false
- `product_type` · _String_ · **required** — food,liquid,danger,other
- `temperature_requirement` · _String_ · **required** — 1: normal temperature 4: refrigerated 6: frozen
- `pic_urls` · _String[]_ · **required** — at most 6 pictures url
- `serial_number_flag` · _Boolean_ · **required** — true/false
- `shelf_life_flag` · _Boolean_ · **required** — true/false
- `shelf_life_days` · _Number_ · **optional** — required if shelf_life_day is life_mgnt
- `reject_shelf_live` · _Number_ · **optional** — required if shelf_life_day is life_mgnt
- `alert_shelf_live` · _Number_ · **optional** — required if shelf_life_day is life_mgnt
- `offline_shelf_live` · _Number_ · **optional** — required if shelf_life_day is life_mgnt
- `seller_sku` · _String_ · **required** — erp sku code
- `sale_price` · _String_ · **required** — sale price
- `length` · _Number_ · **optional** — length(mm)
- `width` · _Number_ · **optional** — width(mm)
- `height` · _Number_ · **optional** — height(mm)
- `weight` · _Number_ · **optional** — weight(g)

**Response parameters**

- `data` · _Object_ · **optional** — data
  - `fulfillment_sku_id` · _Number_ · **optional** — fulfillment_sku_id
  - `fulfillment_sku_code` · _String_ · **optional** — fulfillment_sku_code
- `success` · _Boolean_ · **optional** — is success
- `error_code` · _String_ · **optional** — error_code
- `error_message` · _String_ · **optional** — error_msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
fulfillment_sku_name=SPORTLAND อินไลน์ สเก็ต In-line Skate รุ่น SL-120 
barcodes=["LZD000000063206","8859295109033"]
hygroscopic=true
precious=true
product_type=food
temperature_requirement=1
pic_urls=["https://th-live-02.slatic.net/p/sportland-inailn-sekt-in-line-skate-run-sl-120-gray-yellow-s-7899-583337-d61a153af3f15bc83f31fa2aeec6db4d-catalog.jpg"]
serial_number_flag=true
shelf_life_flag=true
shelf_life_days=1825
reject_shelf_live=180
alert_shelf_live=60
offline_shelf_live=30
seller_sku=xxxxxxx
sale_price=32.25
length=100
width=100
height=100
weight=300
```

Response sample 1:

```
data={"fulfillment_sku_id":634523827682,"fulfillment_sku_code":"xxxxxx_LAZOP-LZD000000063206"}
success=true
error_code=null
error_message=null
```

---

## CreateFulfillmentSkuForFBL

<a id="fbl-fulfillment-sku-fbl-create"></a>

- **Path**: `/fbl/fulfillment_sku_fbl/create`
- **Method**: `post`
- **Last modified**: 2023-10-09 21:08:33

create fulfillment sku for specified platform product

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `sku_id` · _Number_ · **required** — platform sku sku_id
- `barcodes` · _String[]_ · **required** — barcode list
- `hygroscopic` · _Boolean_ · **required** — is product hygroscopic?
- `product_type` · _String_ · **required** — food / liquid / danger / other
- `temperature_requirement` · _String_ · **required** — "1": normal temperature  "4": refrigerated  "6": frozen
- `serial_number_flag` · _Boolean_ · **required** — is serial number management enabled?
- `shelf_life_flag` · _Boolean_ · **required** — is shelf life management enabled?
- `shelf_life_days` · _Number_ · **optional** — days of shelf life, required if shelf_life_flag is true.
- `reject_shelf_live` · _Number_ · **optional** — days to reject at inbound before expiry, required if shelf_life_flag is true.
- `alert_shelf_live` · _Number_ · **optional** — days to alert before expiry, required if shelf_life_flag is true.
- `offline_shelf_live` · _Number_ · **optional** — days to take offline before expiry, required if shelf_life_flag is true.

**Response parameters**

- `success` · _Boolean_ · **optional** — request result
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message
- `data` · _Object_ · **optional** — data
  - `fulfillment_sku_id` · _Number_ · **optional** — fulfillment sku id
  - `fulfillment_sku_code` · _String_ · **optional** — fulfillment sku code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
sku_id=45679245789
barcodes=["barcode1", "barcode2"]
hygroscopic=true
product_type=food
temperature_requirement=1
serial_number_flag=true
shelf_life_flag=true
shelf_life_days=100
reject_shelf_live=20
alert_shelf_live=10
offline_shelf_live=5
```

Response sample 1:

```
success=true
error_code=INVALID_PARAM
error_message=seller info not found
data={ }
```

---

## CreateInboundOrder

<a id="fbl-inbound-order-create"></a>

- **Path**: `/fbl/inbound_order/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 17:09:32

Create inbound order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `warehouse_code` · _String_ · **required** — Inbound warehouse code.
- `delivery_type` · _String_ · **optional** — Delivery type,Enum: Dropoff / Pickup.
- `seller_warehouse_code` · _String_ · **optional** — Seller warehouse code. Default value is seller's first sellerWarehouse, usually it's seller's address in asc. You can get the warehouse list by openApi listIcpWarehouse.
- `estimate_time` · _String_ · **required** — Estimated Arrival Time in UTC+0. format is "yyyy-MM-ddTHH:mm:ssZ".
- `comment` · _String_ · **optional** — Inbound comment.
- `reference_number` · _String_ · **optional** — Reference number.
- `skus` · _Object[]_ · **required** — List of inbound skus. Max list size is 100.
  - `seller_sku` · _String_ · **optional** — Seller sku.
  - `fulfillment_sku` · _String_ · **optional** — Fulfillment sku code. You should use at least one of  params seller_sku and fulfillment_sku. If you send them both, we will use fulfillment_sku to find your sku and ignore param seller_sku.
  - `requested_quantity` · _Number_ · **required** — Requested inbound quantity. The quantity must be greater than 0.

**Response parameters**

- `success` · _Boolean_ · **optional** — Create success or not.
- `error_code` · _String_ · **optional** — Error code.
- `error_message` · _String_ · **optional** — Error message.
- `inbound_order_no` · _String_ · **optional** — Inbound order number.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
warehouse_code=OMS-LAZADA-SG-W-1
delivery_type=Dropoff
seller_warehouse_code=Seller_warehouse_1
estimate_time=2020-12-03T11:00:00Z
comment=Inbound to join D11
reference_number=RSO1001
skus=[{"fulfillment_sku":"4239212438_LAZOPSG-barcode1","requested_quantity":10},{"seller_sku":"seller_sku2","requested_quantity":30}]
```

Response sample 1:

```
success=true
error_code=ERROR_SYSTEM
error_message=Create inbound failed!
inbound_order_no=IOXXXXX1
```

---

## CreateInboundReservation

<a id="fbl-inbound-reservation-create"></a>

- **Path**: `/fbl/inbound_reservation/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 17:39:20

create reservation order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `inbound_orders` · _String[]_ · **required** — inbound order list
- `slot` · _String_ · **required** — reserve slot

**Response parameters**

- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message
- `data` · _Object_ · **optional** — data
  - `reservation_order` · _String_ · **optional** — reservation order code
- `success` · _Boolean_ · **optional** — is success

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
inbound_orders=["IO1234","IO5678"]
slot=2021-12-01T00:30:00Z
```

Response sample 1:

```
error_code=SELLER_ERROR
error_message=seller error 
data={}
success=true
```

---

## CreateOutBoundOrder

<a id="fbl-outbound-order-create"></a>

- **Path**: `/fbl/outbound_order/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 17:39:17

Create outbound order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `reference_number` · _String_ · **optional** — Reference number.
- `warehouse_code` · _String_ · **required** — outbound warehouse code.
- `delivery_type` · _String_ · **optional** — Delivery type,Enum: Dropoff / Pickup.
- `seller_warehouse_code` · _String_ · **optional** — Seller warehouse code. Default value is seller's first sellerWarehouse, usually it's seller's address in asc. You can get the warehouse list by openApi listIcpWarehouse.
- `estimate_time` · _String_ · **required** — Estimated Time in UTC+0. format is "yyyy-MM-ddTHH:mm:ssZ".
- `comment` · _String_ · **optional** — Outbound comment.
- `inventory_type` · _Number_ · **required** — Inventory type, 1 for good, 101 for defective.
- `skus` · _Object[]_ · **required** — List of outbound skus. Max list size is 100.
  - `fulfillment_sku` · _String_ · **optional** — Fulfillment sku code. You should use at least one of  params seller_sku and fulfillment_sku. If you send them both, we will use fulfillment_sku to find your sku and ignore param seller_sku.
  - `requested_quantity` · _Number_ · **required** — Request outbound quantity.The quantity must be greater than 0.
  - `seller_sku` · _String_ · **optional** — Seller sku.

**Response parameters**

- `success` · _Boolean_ · **optional** — Create success or not.
- `error_code` · _String_ · **optional** — Error code.
- `error_message` · _String_ · **optional** — Error message.
- `outbound_order_no` · _String_ · **optional** — Outbound order number

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
reference_number=Refer1001
warehouse_code=OMS-LAZADA-SG-W-1
delivery_type=Pickup
seller_warehouse_code=Seller_warehouse_1
estimate_time=2020-12-03T11:00:00Z
comment=Ready to outbound
inventory_type=1
skus=[{"fulfillment_sku":"4239212438_LAZOPSG-barcode1","requested_quantity":10},{"seller_sku":"seller_sku2","requested_quantity":30}]
```

Response sample 1:

```
success=true
error_code=ERROR_SYSTEM
error_message=Create inbound failed!
outbound_order_no=OOXXXXX1
```

---

## CreateProductReinboundOrderForMCL

<a id="fbl-product-reinbound-create"></a>

- **Path**: `/fbl/product_reinbound/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 17:09:32

Create Product Reinbound Order on Failed Delivery for MCL

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_name` · _String_ · **required** — Trade platform name
- `sales_order_number` · _String_ · **required** — Sales order number from platform
- `platform_order_id` · _String_ · **required** — Unique order level identifier for fulfilment order
- `reinbound_order_id` · _String_ · **required** — Package level identifier for product reinbound request, unique for idempotence
- `tracking_number` · _String_ · **required** — Tracking number for original package
- `reason` · _String_ · **optional** — Failed delivery reason

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success
- `error_code` · _String_ · **optional** — Error code
- `error_message` · _String_ · **optional** — Error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_name=LAZADA_TH
sales_order_number=LP666666
platform_order_id=LP201912131233
reinbound_order_id=THQCC05-20112704798831
tracking_number=JNAT-0000494020
reason=Address unreachable
```

Response sample 1:

```
success=TRUE
error_code=Error code
error_message=Error message
```

---

## CreateVasOrder4FBL

<a id="fbl-vas-createvasorder"></a>

- **Path**: `/fbl/vas/createVasOrder`
- **Method**: `GET/POST`
- **Last modified**: 2026-01-09 17:50:43

FBL增值服务创建

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_name` · _String_ · **required** — laz店铺所属的前台租户,例如: LAZADA_VN
- `idempotent_key` · _String_ · **required** — 幂等码
- `service_provider_no` · _String_ · **optional** — 物流服务商单据号，比如：LBX
- `target_order_no` · _String_ · **optional** — 服务目标单据号,比如：CO单号
- `target_order_type` · _String_ · **optional** — 服务对象类型：服务对象为入库单，则填写：CO；服务对象为品，则填写:GOODS;
- `vas_code` · _String_ · **required** — 增值服务Code：LABEL_PRINTING_PASTING_FOR_IB 打印并贴商品条码 LABEL_PRINTING_PASTING_FOR_ITEM 打印并贴商品条码 REPACKING_FOR_IB 重新包装 REPACKING_FOR_ITEM 重新包装 BUNDLING 绑定商品 LABEL_PRINTING_FOR_IB 打印商品条码 LABEL_PRINTING_FOR_ITEM 打印商品条码 LABEL_PASTING_FOR_IB 贴商品条码 LABEL_PASTING_FOR_ITEM 贴商品条码 SORTING 分类商品 INBOUND_QC 收货质检
- `warehouse_code` · _String_ · **required** — 仓code
- `lines` · _Object[]_ · **required** — 明细行
  - `quantity` · _Number_ · **required** — 计划数量
  - `scItem_id` · _Number_ · **required** — 货品ID
  - `bundle_quantity` · _Number_ · **optional** — 绑定数量

**Response parameters**

- `data` · _String_ · **optional** — 建单结果

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_name=LAZADA_VN
idempotent_key=IOCN2510311706463989472694#VAS001
service_provider_no=LBX02254922342245544
target_order_no=IOCN2510311706463989472694
target_order_type=CO
vas_code=VAS001
warehouse_code=AET001
lines=[{"quantity":6,"scItem_id":566122254124,"bundle_quantity":2}]
```

Response sample 1:

```
data={"data":{"retryable":false,"fail":false,"data":"ZVAS20260109005518012","success":true,"succAndNotNull":true,"message":"OK"},"code":"0","request_id":"2101773f17679312998796972","_trace_id_":"212b8f2f17679312997072285e1ccf"}
```

---

## GetChannelStocksForMCL

<a id="fbl-channel-stocks-get"></a>

- **Path**: `/fbl/channel_stocks/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:39:22

Query Channel Stocks

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_name` · _String_ · **required** — Platform Name
- `fulfillment_sku_id` · _Number_ · **required** — Fulfillment Sku ID
- `warehouse_code` · _String_ · **optional** — Warehouse Code

**Response parameters**

- `success` · _Boolean_ · **optional** — Success Flag
- `error_code` · _String_ · **optional** — Error Code
- `error_message` · _String_ · **optional** — Error Message
- `data` · _Object_ · **optional** — Result Data
  - `fulfillment_sku_id` · _Number_ · **optional** — Fulfillment Sku ID
  - `stocks` · _Object[]_ · **optional** — Stocks by Warehouses
    - `warehouse_code` · _String_ · **optional** — Warehouse Code
    - `channel_stocks` · _Object[]_ · **optional** — Stocks by Channel
      - `quantity` · _Number_ · **optional** — Quantity
      - `channel` · _String_ · **optional** — Channel Value: EXTERNAL

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_name=LAZADA_TH
fulfillment_sku_id=222222
warehouse_code=OMS-LAZADA-TH-W-1
```

Response sample 1:

```
success=TRUE
error_code=Error Code
error_message=Error Message
data={}
```

---

## GetFulfillmentProductDetail

<a id="fbl-fulfillment-products-get"></a>

- **Path**: `/fbl/fulfillment_products/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:18:18

GET  fulfillment product Detail；Call Get Platform Products for fulfillment_sku first

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `per_page` · _Number_ · **optional** — Maximum number of results per page
- `shelf_life_flag` · _Boolean_ · **optional** — Serial number flag. true or false
- `marketplace` · _String_ · **required** — Marketplace should be "LAZADA_MY","LAZADA_ID","LAZADA_VN","LAZADA_SG","LAZADA_TH","LAZADA_PH"
- `fulfillment_sku` · _String_ · **optional** — Fulfillment SKU
- `serial_number_flag` · _Boolean_ · **optional** — Serial number flag. true or false
- `page` · _Number_ · **optional** — Page
- `fulfillment_sku_name` · _String_ · **optional** — Fulfillment SKU Name used in Lazada fulfilment system
- `barcode` · _String_ · **optional** — Barcode

**Response parameters**

- `data` · _Object[]_ · **required** — List of products data
  - `shelf_life_days` · _Number_ · **required** — Shelf Life (Days)
  - `color` · _String_ · **required** — Color
  - `fulfillment_sku` · _String_ · **required** — Fulfillment SKU
  - `serial_number_flag` · _Boolean_ · **required** — Serial number flag. true or false
  - `length` · _Number_ · **required** — Length
  - `offline_shelf_live` · _Number_ · **required** — Offline before Expiry Date (Days)
  - `barcodes` · _String_ · **required** — Barcodes, list of String
  - `net_weight` · _Number_ · **required** — Net Weight
  - `alert_shelf_live` · _Number_ · **required** — Alert before Expiry Date (Days)
  - `shelf_life_flag` · _Boolean_ · **required** — Shelf life flag, true or false
  - `reject_shelf_live` · _Number_ · **required** — Reject at Inbound before Expiry Date (Days)
  - `sn_sample_list` · _Object[]_ · **required** — Serial number Sample List
    - `sample_seq` · _String_ · **required** — Sample Seq
    - `sample_desc` · _String_ · **required** — Sample Desc
    - `sample_rule_list` · _Object[]_ · **required** — Sample Rule List
      - `rule_regular_expression` · _String_ · **required** — Rule Regular Expression
      - `rule_desc` · _String_ · **required** — Rule Desc
      - `rule_img_url` · _String_ · **required** — Rule Img Url
      - `rule_sample` · _String_ · **required** — Rule Sample
  - `width` · _Number_ · **required** — Width
  - `shipper_id` · _String_ · **required** — Shipper Id is the id used in Lazada internal systms
  - `serial_number_mode` · _String_ · **required** — 1 Serial number mode used to indicate when serial number management is required, value can be 0 (Outbound), 1 (Outbound+Inbound), 2 (Outbound+Return).
  - `fulfillment_sku_name` · _String_ · **required** — Fulfillment SKU Name used in Lazada fulfilment systems.
  - `gross_weight` · _Number_ · **required** — Gross Weight
  - `height` · _Number_ · **required** — Height
  - `hygroscopic` · _String_ · **optional** — true/false
  - `precious` · _String_ · **optional** — true/false
  - `product_type` · _String_ · **optional** — food,liquid,danger,other
  - `seller_skus` · _String[]_ · **optional** — seller_skus
  - `temperature_requirement` · _String_ · **optional** — 1: normal temperature 4: refrigerated 6: frozen

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
per_page=50
shelf_life_flag=true
marketplace=LAZADA_SG
fulfillment_sku=245906966_VNAMZ-315595775
serial_number_flag=true
page=1
fulfillment_sku_name=some random name
barcode=LZD12315152
```

Response sample 1:

```
data=[{...data...}]
```

---

## GetFulfillmentSkuListForMCL

<a id="fbl-fulfillment-sku-list-get"></a>

- **Path**: `/fbl/fulfillment_sku_list/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:16:06

Get Fulfillment SKU List for LAZADA Partner

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `page` · _Number_ · **required** — Page Index
- `per_page` · _String_ · **required** — Maximum number of results per page
- `platform_name` · _String_ · **required** — Platform name
- `fulfillment_sku_name` · _String_ · **optional** — Fulfillment Sku Name
- `seller_sku` · _String_ · **optional** — Seller Sku
- `fulfillment_sku_code` · _String_ · **optional** — Fulfillment Sku Code
- `barcode` · _String_ · **optional** — barcode
- `fulfillment_sku_codes` · _String_ · **optional** — Fulfillment Sku Codes

**Response parameters**

- `error_message` · _String_ · **optional** — Error Message
- `page` · _Number_ · **optional** — Page Index
- `per_page` · _Number_ · **optional** — Maximum number of results per page
- `total_count` · _Number_ · **optional** — Total Count
- `data` · _Object[]_ · **optional** — Fulfillment sku list
  - `seller_id` · _Number_ · **optional** — Seller ID
  - `platform_name` · _String_ · **optional** — Platform name
  - `owner_id` · _Number_ · **optional** — Fulfillment sku owner ID
  - `seller_skus` · _String_ · **optional** — Seller Sku list
  - `fulfillment_sku_code` · _String_ · **optional** — Fulfillment Sku Code
  - `fulfillment_sku_name` · _String_ · **optional** — Fulfillment Sku Name
  - `fulfillment_sku_id` · _Number_ · **optional** — Fulfillment Sku ID
  - `barcodes` · _String_ · **optional** — barcodes
  - `serial_num_flag` · _Boolean_ · **optional** — Indicates if the SKU has a serial number.(applies mainly for electronic products)​
  - `shelf_life_flag` · _Boolean_ · **optional** — Indicates if the SKU has an expiry date​.
  - `has_stock` · _Boolean_ · **optional** — Indicates if the SKU has stock available in the Warehouse
  - `min_stock_alert` · _Boolean_ · **optional** — Indicates if the SKU has a low stock alert defined
  - `platform_sku_status` · _String_ · **optional** — Platform sku status list, active/deactive/delete
  - `sale_price` · _String_ · **optional** — fulfillment_sku sale price
  - `currency` · _String_ · **optional** — fulfillment_sku currency
  - `pic_urls` · _String_ · **optional** — picurls
- `success` · _Boolean_ · **optional** — success flag
- `error_code` · _String_ · **optional** — Error Code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
page=1
per_page=50
platform_name=LAZADA_TH
fulfillment_sku_name=Lenovo Thinkpad
seller_sku=Brown-350
fulfillment_sku_code=245906966_VNAMZ-315595775
barcode=LZD000006614829
fulfillment_sku_codes=245906966_VNAMZ-315595775,245906966_VNAMZ-315595776
```

Response sample 1:

```
error_message=platform name is null
page=1
per_page=50
total_count=88888
data=[{},{}]
success=TRUE
error_code=001
```

---

## GetFulfillmentSkuRelationByScItem

<a id="fbl-fulfillment-sku-relation-get-by-sc-item"></a>

- **Path**: `/fbl/fulfillment_sku_relation/get_by_sc_item`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 18:02:08

get the relation between platformSku and fulfillmentSku by scItem

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `site` · _String_ · **required** — site
- `sc_item_id` · _Number_ · **optional** — scItemId/fulfillment_sku_id
- `fulfillment_sku` · _String_ · **optional** — fulfillment_sku

**Response parameters**

- `result` · _Object_ · **required** — result dto
  - `data` · _Object[]_ · **required** — data array
    - `item_id` · _Number_ · **required** — itemId
    - `site` · _String_ · **required** — site
    - `seller_id` · _Number_ · **required** — sellerId
    - `sc_item_user_id` · _Number_ · **required** — scItem userId
    - `sc_item_id` · _Number_ · **required** — scItemId/fulfillment_sku_id
    - `source` · _String_ · **required** — platform source
    - `sku_id` · _Number_ · **required** — skuId
    - `fulfillment_sku` · _String_ · **optional** — fulfillment_sku
  - `failure` · _Boolean_ · **required** — if failure
  - `success` · _Boolean_ · **required** — is success
  - `error_code` · _String_ · **required** — errorCode
  - `error_msg` · _String_ · **required** — errorMsg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
site=SG
sc_item_id=567148194446
fulfillment_sku=CB-885710187-1305210866
```

Response sample 1:

```
result={   "data": [     {       "itemId": 151579598,       "site": "TH",       "sellerId": 100011046,       "scItemUserId": 3370592432,       "scItemId": 567148194446,       "source": "Lazada",       "class": "com.alibaba.ascp.itemcenter.domain.RelationOpenBO",       "skuId": 177256899     }   ],   "failure": false,   "success": true,   "errorCode": null,   "class": "com.alibaba.ascp.itemcenter.dto.Result",   "errorMsg": null }
```

---

## GetFulfillmentSkuRelationBySku

<a id="fbl-fulfillment-sku-relation-get-by-sku"></a>

- **Path**: `/fbl/fulfillment_sku_relation/get_by_sku`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 17:58:18

get the relation between platformSku and fulfillmentSku by sku

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `site` · _String_ · **required** — site
- `item_id` · _Number_ · **required** — itemId
- `sku_id` · _Number_ · **required** — skuId

**Response parameters**

- `result` · _Object_ · **required** — result dto
  - `data` · _Object_ · **required** — data dto
    - `item_id` · _Number_ · **required** — itemId
    - `site` · _String_ · **required** — site
    - `seller_id` · _Number_ · **required** — sellerId
    - `sc_item_user_id` · _String_ · **required** — scItem userId
    - `sc_item_id` · _Number_ · **required** — scItemId/fulfillment_sku_id
    - `source` · _String_ · **required** — platform source
    - `sku_id` · _Number_ · **required** — skuId
    - `fulfillment_sku` · _String_ · **optional** — fulfillment_sku
  - `failure` · _Boolean_ · **required** — if failure
  - `success` · _Boolean_ · **required** — if success
  - `error_code` · _String_ · **required** — error_code
  - `error_msg` · _String_ · **required** — error_msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
site=SG
item_id=710230731
sku_id=1551058427
```

Response sample 1:

```
result={   "data": {     "itemId": 151579598,     "site": "TH",     "sellerId": 100011046,     "scItemUserId": null,     "scItemId": 567148194446,     "source": "Lazada",     "class": "com.alibaba.ascp.itemcenter.domain.RelationOpenBO",     "skuId": 177256899   },   "failure": false,   "success": true,   "errorCode": null,   "class": "com.alibaba.ascp.itemcenter.dto.Result",   "errorMsg": null }
```

---

## GetFulfillmentSkuRelationsByScItems

<a id="fbl-fulfillment-sku-relation-get-by-sc-items"></a>

- **Path**: `/fbl/fulfillment_sku_relation/get_by_sc_items`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 18:03:28

get fulfillmentSku Relations By ScItems

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `biz_name` · _String_ · **required** — bizName
- `seller_ids` · _Number[]_ · **required** — sellerIds
- `sc_item_ids` · _Number[]_ · **optional** — scItemIds
- `fulfillment_skus` · _String[]_ · **optional** — fulfillmentSkus

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object[]_ · **required** — data
    - `item_id` · _Number_ · **required** — itemId
    - `site` · _String_ · **required** — site
    - `seller_id` · _Number_ · **required** — sellerId
    - `sc_item_user_id` · _Number_ · **required** — shipperId
    - `sc_item_id` · _Number_ · **required** — fulfillentSkuId
    - `source` · _String_ · **required** — source
    - `fulfillment_sku` · _String_ · **required** — fulfillmentSku
    - `sku_id` · _Number_ · **required** — skuId
  - `failure` · _Boolean_ · **required** — is failed
  - `success` · _Boolean_ · **required** — is success
  - `error_code` · _String_ · **required** — error
  - `error_msg` · _String_ · **required** — error

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
biz_name=Lazada/Daraz
seller_ids=[100056775,100131295,1000029719,100076220,100191757]
sc_item_ids=[677725310474]
fulfillment_skus=[CB-720504627-1582768814]
```

Response sample 1:

```
result=result
```

---

## GetFulfillmentSkuRelationsBySkus

<a id="fbl-fulfillment-sku-relation-get-by-skus"></a>

- **Path**: `/fbl/fulfillment_sku_relation/get_by_skus`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 17:56:59

get fulfillmentSku Relations By Skus

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `site` · _String_ · **required** — site
- `item_sku` · _Object_ · **required** — obj
  - `item_ids` · _Number[]_ · **required** — item_ids
  - `sku_ids` · _Number[]_ · **required** — sku_ids

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object[]_ · **required** — data
    - `item_id` · _Number_ · **required** — item_id
    - `site` · _String_ · **required** — site
    - `seller_id` · _Number_ · **required** — sellerId
    - `sc_item_user_id` · _Number_ · **required** — shipperId
    - `sc_item_id` · _Number_ · **required** — fulfillment_sku_id
    - `source` · _String_ · **required** — source
    - `fulfillment_sku` · _String_ · **required** — fulfillment_sku
    - `sku_id` · _Number_ · **required** — skuid
  - `failure` · _Boolean_ · **required** — is failed
  - `success` · _Boolean_ · **required** — is success
  - `error_code` · _String_ · **required** — error
  - `error_msg` · _String_ · **required** — error

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
site=MY,SG
item_sku={"item_ids":[3068365057],"sku_ids":[15291207605],"class":"com.alibaba.ascp.itemcenter.domain.ItemSkuIdDTO"}
```

Response sample 1:

```
result=result
```

---

## GetIcpOrderFile

<a id="fbl-icp-order-file"></a>

- **Path**: `/fbl/icp_order/file`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:39:31

Get Inbound/Outbound order print PDF file

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_number` · _String_ · **required** — Inbound/Outbound order number

**Response parameters**

- `error_code` · _String_ · **optional** — Error code.
- `error_message` · _String_ · **optional** — Error message.
- `data` · _Object_ · **optional** — File data
  - `url` · _String_ · **optional** — Pdf file download url
- `success` · _Boolean_ · **optional** — Success or not.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
order_number=OO02200XXX
```

Response sample 1:

```
error_code=ERROR_SYSTEM
error_message=Cancel inbound failed!
data={"url":"http://test.misc.oss-ap-southeast-1.aliyuncs.com/testFile"}
success=true
```

---

## GetInboundOrderDetail

<a id="fbl-inbound-order-detail-get"></a>

- **Path**: `/fbl/inbound_order_detail/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:18:20

Use this API to get the Inbound Order Detail

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `inbound_order_no` · _String_ · **required** — Inbound ouder number
- `marketplace` · _String_ · **required** — Enum Value:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH

**Response parameters**

- `data` · _Object_ · **required** — Order detail
  - `reservation_status` · _String_ · **optional** — ReservationStatus: PENDING_RESERVATION_ORDER_CREATE | RESERVATION_ORDER_CREATED | RESERVED |ARRIVED. PENDING_RESERVATION_ORDER_CREATE
  - `reservation_order` · _String_ · **optional** — Reservation Order number
  - `seller_city` · _String_ · **optional** — Seller's city
  - `seller_address` · _String_ · **optional** — Seller's address
  - `seller_postcode` · _String_ · **optional** — Seller's postcode
  - `seller_country` · _String_ · **optional** — Seller's country
  - `seller_contact` · _String_ · **optional** — Seller's contact for this order
  - `seller_mobile` · _String_ · **optional** — Seller's mobile for this order
  - `fulfillment_order_number` · _String_ · **optional** — Fulfillment order number
  - `inbound_warehouse_code` · _String_ · **optional** — Inbound warehouse code
  - `inbound_time` · _String_ · **required** — Actually inbound time
  - `skus` · _Object[]_ · **required** — Sku list
    - `item_inbounded_expired` · _String_ · **optional** — Item Inbounded-Expired
    - `seller_sku` · _String[]_ · **required** — Seller Sku Id List
    - `item_inbounded_good` · _Number_ · **required** — Items Inbounded-Good
    - `serial_number_flag` · _Boolean_ · **required** — Serial Number Flag
    - `sku_status` · _String_ · **required** — Sku status
    - `item_inbounded_damaged` · _Number_ · **required** — Item Inbounded-Damaged
    - `fulfillment_sku_name` · _String_ · **required** — Fulfillment sku name
    - `requested_quantity` · _Number_ · **required** — Requested quantity
    - `shelf_life_flag` · _Boolean_ · **required** — Shelf Life Flag
    - `barcodes` · _String[]_ · **required** — Sku barcode list
    - `fulfillment_sku` · _String_ · **required** — Fulfillment sku
    - `comments` · _String_ · **optional** — Item comment
  - `comments` · _String_ · **required** — Order comment
  - `io_number` · _String_ · **required** — Inbound order number
  - `estimate_time` · _String_ · **required** — Estimate inbound time
  - `marketplace` · _String_ · **required** — marketplace
  - `delivery_type` · _String_ · **required** — Seller drop off to warehouse Lazada Pickup
  - `created_at` · _String_ · **required** — Order create time
  - `inbound_warehouse` · _String_ · **required** — Inbound warehouse name
  - `reference_number` · _String_ · **required** — Reference number
  - `updated_at` · _String_ · **required** — Order update time
  - `io_status` · _String_ · **required** — Order status: Created|Pending Plan Approval|Pending Approval|Approved|Rejected by Lazada|Operate Inventory|Foc Order Created|Request Accepted|Inbound in Process|Partially|Completely|Cancelled by Seller|Cancelled by Lazada|Cancelled by system|Rejected by Warehouse
  - `shop_name` · _String_ · **optional** — Shop name
  - `io_type` · _String_ · **optional** — Order type, normal|reinbound|New Product Launch|Sellable In Transit
  - `warehouse_name` · _String_ · **optional** — Lazada's warehouse name
  - `warehouse_address` · _String_ · **optional** — Lazada's warehouse adress
  - `seller_warehouse_name` · _String_ · **optional** — Seller's warehouse name
  - `need_reservation` · _Boolean_ · **optional** — Whether need inbound reservation, true|false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
inbound_order_no=IO3215vsdfXXXXX
marketplace=LAZADA_SG
```

Response sample 1:

```
data={data}
```

---

## GetInboundOrderList

<a id="fbl-inbound-orders-get"></a>

- **Path**: `/fbl/inbound_orders/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:39:39

Use this API to get inbound order list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `inbound_order_no` · _String_ · **optional** — Inbound order number, Multi orders split by ','. Max size is 100
- `creation_time_From` · _String_ · **optional** — Order's create time from
- `creation_time_To` · _String_ · **optional** — Order's create time end
- `inbound_warehouse` · _String_ · **optional** — Inbound warehouse name
- `seller_sku` · _String_ · **optional** — seller sku name
- `fulfillment_sku` · _String_ · **optional** — Fulfilment SKU code
- `marketplace` · _String_ · **required** — marketplace:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH
- `page` · _String_ · **optional** — Order list page index
- `per_page` · _String_ · **optional** — Order list per page size, Max is 100
- `reservation_status` · _String_ · **optional** — ReservationStatus: PENDING_RESERVATION_ORDER_CREATE | RESERVATION_ORDER_CREATED | RESERVED |ARRIVED. PENDING_RESERVATION_ORDER_CREATE
- `reservation_order` · _String_ · **optional** — Reservation Order number
- `reference_number` · _String_ · **optional** — Reference number

**Response parameters**

- `result` · _Object_ · **required** — Result
  - `per_page` · _Number_ · **required** — Per page size
  - `data` · _Object[]_ · **required** — Orders
    - `sku_approved` · _Number_ · **required** — Sku Approved quantity
    - `inbound_time` · _String_ · **required** — Actual inbound Time
    - `io_number` · _String_ · **required** — Inbound order number
    - `estimate_time` · _String_ · **required** — Estimate inbound Time
    - `marketplace` · _String_ · **required** — Enum Value:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH
    - `item_inbounded_good` · _Number_ · **required** — Items Inbounded Good quantity
    - `delivery_type` · _String_ · **required** — Delivery Type: drop off/pick up
    - `item_requested` · _Number_ · **required** — Item Requested quantity
    - `created_at` · _String_ · **required** — Create time
    - `sku_inbounded` · _Number_ · **required** — Sku Inbounded quantity
    - `sku_requested` · _Number_ · **required** — Sku Requested quantity
    - `inbound_warehouse` · _String_ · **required** — Inbound Warehouse
    - `reference_number` · _String_ · **required** — Reference number
    - `item_inbounded_damaged` · _Number_ · **required** — Item Inbounded damaged quantity
    - `updated_at` · _String_ · **required** — Latest update time
    - `status` · _String_ · **required** — Order status：Created|Pending Plan Approval|Pending Approval|Approved|Rejected by Lazada|Operate Inventory|Foc Order Created|Request Accepted|Inbound in Process|Partially|Completely|Cancelled by Seller|Cancelled by Lazada|Cancelled by system|Rejected by Warehouse
    - `shop_name` · _String_ · **optional** — Shop name
    - `io_type` · _String_ · **optional** — Order type, normal|reinbound|New Product Launch|Sellable In Transit
    - `inbound_warehouse_code` · _String_ · **optional** — Inbound warehouse code
    - `need_reservation` · _Boolean_ · **optional** — Whether need inbound reservation, true|false
    - `reservation_status` · _String_ · **optional** — ReservationStatus: PENDING_RESERVATION_ORDER_CREATE | RESERVATION_ORDER_CREATED | RESERVED |ARRIVED. PENDING_RESERVATION_ORDER_CREATE
    - `reservation_order` · _String_ · **optional** — Reservation Order number
    - `item_inbounded_expired` · _String_ · **optional** — Item Inbounded expired quantity
  - `page` · _Number_ · **required** — Page index
  - `total_count` · _Number_ · **required** — Total order count

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
inbound_order_no=IO022019061429XXXXX,IO022019061429YYYY
creation_time_From=2019-08-10
creation_time_To=2019-08-16
inbound_warehouse=yavin test warehouse
seller_sku=test-chengxi-icp-yavin-044
fulfillment_sku=309958149_SGAMZ-56XXXXX
marketplace=LAZADA_SG
page=1
per_page=20
reservation_status=PENDING_RESERVATION_ORDER_CREATE
reservation_order=RSO00001
reference_number=refer
```

Response sample 1:

```
result={result}
```

---

## GetInboundReservationFile

<a id="fbl-inbound-reservation-file"></a>

- **Path**: `/fbl/inbound_reservation/file`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:39:44

get inbound reservation order file

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `reservation_order` · _String_ · **required** — reservation order code

**Response parameters**

- `success` · _Boolean_ · **optional** — success
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message
- `data` · _Object_ · **optional** — data
  - `url` · _String_ · **optional** — url

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
reservation_order=RSO1234
```

Response sample 1:

```
success=true
error_code=SELLER_ERROR
error_message=seller error
data={}
```

---

## GetInventoryChangedSKU

<a id="fbl-inventory-changed-sku-get"></a>

- **Path**: `/fbl/inventory_changed_sku/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:39:46

Use this API to get SKU list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `warehouse_code` · _String_ · **optional** — Warehouse code
- `page` · _Number_ · **optional** — Sku list page index
- `per_page` · _Number_ · **optional** — Sku list per page size
- `market_place` · _String_ · **required** — market place:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH
- `operate_Time_From` · _String_ · **optional** — Inventory operate time from. This param is Required
- `operate_Time_To` · _String_ · **optional** — Inventory operate time to. This param is Required.We suggest that operate_time_to - operate_time_from < 6 months

**Response parameters**

- `per_page` · _Number_ · **optional** — Per page size
- `page` · _Number_ · **optional** — Page index
- `total_count` · _Number_ · **optional** — Total count of sku
- `sku_list` · _Object[]_ · **optional** — Sku list
  - `fulfillment_sku_id` · _String_ · **optional** — Fulfillment sku id
  - `operate_log_count` · _Number_ · **optional** — Total count of operate log
- `success` · _String_ · **optional** — The api request success or not
- `errMessage` · _String_ · **optional** — Error message when success=false
- `errCode` · _String_ · **optional** — Error code when success=false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
warehouse_code=OMS-LAZADA-MY-W-1
page=1
per_page=20
market_place=LAZADA_SG
operate_Time_From=2019-07-23
operate_Time_To=2019-08-24
```

Response sample 1:

```
per_page=10
page=1
total_count=100
sku_list=[{sku}]
success=true
errMessage=invalid marketplace
errCode=INVALID PARAM
```

---

## GetInventoryOccupyDetails

<a id="fbl-inventory-occupy-details-get"></a>

- **Path**: `/fbl/inventory_occupy_details/get`
- **Method**: `get`
- **Last modified**: 2023-02-22 09:36:01

Use this API to get a sku's inventory occupy details

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `fulfillmentSku` · _String_ · **required** — Fulfillment Sku Id
- `storeCode` · _String_ · **required** — Warehouse code
- `marketplace` · _String_ · **required** — market place:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH
- `pageNum` · _Number_ · **optional** — pageNum
- `pageSize` · _Number_ · **optional** — pageSize

**Response parameters**

- `inventoryOccupyDetails` · _Object[]_ · **optional** — inventory occupy detail list
  - `orderCode` · _String_ · **optional** — main order code
  - `quantity` · _Number_ · **optional** — reversed number eg:
  - `orderType` · _String_ · **optional** — order type
  - `inventoryType` · _String_ · **optional** — Inventory type:GOOD,Damaged,ONWAY,TRANSFER_WAY,Expired,Damaged A,Damaged B,Damaged C.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
fulfillmentSku=322302784_SGAMZ-648014149
storeCode=OMS-LAZADA-MY-W-1
marketplace=LAZADA_SG
pageNum=1
pageSize=50
```

Response sample 1:

```
inventoryOccupyDetails=[{inventoryOccupyDetail}]
```

---

## GetInventoryOperateLog

<a id="fbl-inventory-operate-log-get"></a>

- **Path**: `/fbl/inventory_operate_log/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:39:48

Use this API to get a sku's inventory operate log

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `page` · _Number_ · **optional** — Operate log list page index
- `per_page` · _Number_ · **optional** — Operate log list perpage size
- `market_place` · _String_ · **required** — market place:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH
- `operate_time_from` · _String_ · **optional** — Inventory operate time from, GMT+0.
- `operate_time_to` · _String_ · **optional** — Inventory operate time to, GMT+0. This param is Required. We suggest that operate_time_to - operate_time_from < 6 months
- `warehouse_code` · _String_ · **optional** — Warehouse code
- `fulfillment_sku_id` · _String_ · **optional** — Fulfillment Sku Id
- `order_type_code` · _String_ · **optional** — Order Type Code

**Response parameters**

- `inventory_operate_log` · _Object[]_ · **optional** — Inventory operate log
  - `ref_order_code` · _Object[]_ · **optional** — ref order
    - `type` · _String_ · **optional** — type
    - `order_code` · _String_ · **optional** — order code
  - `warehouse_code` · _String_ · **optional** — Warehouse code
  - `warehouse_name` · _String_ · **optional** — Warehouse name
  - `order_type` · _String_ · **optional** — Order type
  - `inventory_type` · _String_ · **optional** — Inventory type:GOOD,Damaged,ONWAY,TRANSFER_WAY,Expired,Damaged A,Damaged B,Damaged C.
  - `change_quantity` · _String_ · **optional** — Change quantity
  - `result_quantity` · _String_ · **optional** — Result quantity
  - `operate_time` · _String_ · **optional** — Operate time, GMT+0
  - `order_type_code` · _String_ · **optional** — Order Type Code
  - `fulfillment_sku_id` · _String_ · **optional** — Fulfillment Sku Id
  - `customer_order` · _String_ · **optional** — customer order ,trade order and reverse trade order will not be null
- `success` · _String_ · **optional** — The api request success or not
- `errMessage` · _String_ · **optional** — Error message when success=false
- `errCode` · _String_ · **optional** — Error code when success=false
- `page` · _Number_ · **optional** — Page index
- `per_page` · _Number_ · **optional** — Per page size
- `total_count` · _Number_ · **optional** — Total log count

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
page=1
per_page=20
market_place=LAZADA_SG
operate_time_from=2019-07-23
operate_time_to=2019-08-24
warehouse_code=OMS-LAZADA-MY-W-1
fulfillment_sku_id=322302784_SGAMZ-648014149
order_type_code=TRADE_OUT,COORDINATE_OUT,FAILED_DELIVERY_IN,REFOUND_IN,SELLER_INBOUND,OTHER_INBOUND,IMBALANCE_LOCK,CHECK_OUT,CHECK_IN,INVENTORY_STATUS_ADJUST_OUT,INVENTORY_STATUS_ADJUST_IN,OUTBOUND
```

Response sample 1:

```
inventory_operate_log=[{inventoryOperateLog}]
success=true
errMessage=invalid marketplace
errCode=INVALID PARAM
page=1
per_page=20
total_count=100
```

---

## GetOutboundOrderDetail

<a id="fbl-outbound-order-detail-get"></a>

- **Path**: `/fbl/outbound_order_detail/get`
- **Method**: `get`
- **Last modified**: 2022-08-01 19:41:16

Use this API to Get outbound order detail; shoud call GetOutboundOrderList for outbound_order_no first

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `outbound_order_no` · _String_ · **required** — order number
- `marketplace` · _String_ · **required** — Enum Value:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH

**Response parameters**

- `data` · _Object_ · **required** — Order detail
  - `outbound_time` · _String_ · **required** — Outbound time
  - `comments` · _String_ · **required** — Comments
  - `skus` · _Object[]_ · **required** — Sku list
    - `seller_sku` · _String[]_ · **required** — Seller sku id list
    - `item_outbounded` · _Number_ · **required** — Item outbounded
    - `serial_number_flag` · _Boolean_ · **required** — Serial number flag
    - `sku_status` · _String_ · **required** — Sku status
    - `requested_quantity` · _Number_ · **required** — Requested quantity
    - `fulfillment_sku_name` · _String_ · **required** — Fulfillment sku name
    - `shelf_life_flag` · _Boolean_ · **required** — Shelf life flag
    - `barcodes` · _String[]_ · **required** — Barcode list
    - `fulfillment_sku` · _String_ · **required** — Fulfillment sku
    - `comments` · _String_ · **optional** — item comments
  - `estimate_time` · _String_ · **required** — Estimate outbound time
  - `marketplace` · _String_ · **required** — marketplace
  - `outbound_warehouse` · _String_ · **required** — Outbound warehouse name
  - `delivery_type` · _String_ · **required** — Seller drop off to warehouse Lazada Pickup
  - `created_at` · _String_ · **required** — Order create time
  - `reference_number` · _String_ · **required** — Reference number
  - `item_outbounded` · _Number_ · **required** — Items outbound num
  - `outbound_order_no` · _String_ · **required** — Outbound order no
  - `updated_at` · _String_ · **required** — Order update time
  - `status` · _String_ · **required** — Order Status: Created|Pending Plan Approval|Pending Approval|Approved|Rejected by Lazada|Operate Inventory|Foc Order Created|Request Accepted|Outbound in Process|Partially|Completely|Cancelled by Seller|Cancelled by Lazada|Cancelled by system|Rejected by Warehouse|Re-inbounded Accepted
  - `shop_name` · _String_ · **optional** — Shop name
  - `created_by` · _String_ · **optional** — Creator of the order, Seller|Lazada|Daraz|Retail
  - `outbound_reason` · _String_ · **optional** — RTS, Sold-Offline or Scrapped
  - `inventory_type` · _String_ · **optional** — Outbound sku's inventory type, good or defective
  - `warehouse_name` · _String_ · **optional** — Lazada's warehouse name
  - `warehouse_address` · _String_ · **optional** — Lazada's warehouse adress
  - `seller_warehouse_name` · _String_ · **optional** — Seller's warehouse name
  - `seller_city` · _String_ · **optional** — Seller's city
  - `seller_address` · _String_ · **optional** — Seller's address
  - `seller_postcode` · _String_ · **optional** — Seller's postcode
  - `seller_country` · _String_ · **optional** — Seller's country
  - `seller_contact` · _String_ · **optional** — Seller's contact for this order
  - `seller_mobile` · _String_ · **optional** — Seller's mobile for this order
  - `fulfillment_order_number` · _String_ · **optional** — Fulfillment order number
  - `outbound_warehouse_code` · _String_ · **optional** — Outbound warehouse code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
outbound_order_no=OO0120190614XXXX
marketplace=LAZADA_SG
```

Response sample 1:

```
data={data}
```

---

## GetOutboundOrderList

<a id="fbl-outbound-orders-get"></a>

- **Path**: `/fbl/outbound_orders/get`
- **Method**: `get`
- **Last modified**: 2022-08-01 19:41:16

Use this API to get outbound order list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `outbound_order_no` · _String_ · **optional** — Outbound order number,Multi orders split by ','. Max size is 100
- `creation_time_from` · _String_ · **optional** — Order's create time from
- `creation_time_to` · _String_ · **optional** — Order's create time end
- `outbound_warehouse` · _String_ · **optional** — Outbound warehouse name
- `seller_sku` · _String_ · **optional** — seller sku name
- `fulfillment_sku` · _String_ · **optional** — Fulfilment SKU code
- `marketplace` · _String_ · **required** — marketplace:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH
- `page` · _String_ · **optional** — Order list page index
- `per_page` · _String_ · **optional** — Order list per page size
- `reference_number` · _String_ · **optional** — Reference number

**Response parameters**

- `result` · _Object_ · **required** — Result
  - `per_page` · _Number_ · **required** — Per page size
  - `data` · _Object[]_ · **required** — Orders
    - `sku_approved` · _Number_ · **required** — Sku Approved quantity
    - `outbound_time` · _String_ · **required** — Actual outbound Time
    - `oo_number` · _String_ · **required** — Outbound order number
    - `estimate_time` · _String_ · **required** — Estimate outbound Time
    - `marketplace` · _String_ · **required** — Enum Value:LAZADA_VN,LAZADA_SG,LAZADA_MY, LAZADA_ID,LAZADA_PH,LAZADA_TH
    - `delivery_type` · _String_ · **required** — Delivery Type: drop off/pick up
    - `item_requested` · _Number_ · **required** — Item Requested quantity
    - `created_at` · _String_ · **required** — Create time
    - `sku_outbounded` · _Number_ · **required** — Sku outbounded quantity
    - `sku_requested` · _Number_ · **required** — Sku Requested quantity
    - `outbound_warehouse` · _String_ · **required** — Outbound Warehouse
    - `reference_number` · _String_ · **required** — Reference number
    - `item_outbounded` · _Number_ · **required** — Item outbounded quantity
    - `updated_at` · _String_ · **required** — Latest update time
    - `status` · _String_ · **required** — Order status: Created|Pending Plan Approval|Pending Approval|Approved|Rejected by Lazada|Operate Inventory|Foc Order Created|Request Accepted|Outbound in Process|Partially|Completely|Cancelled by Seller|Cancelled by Lazada|Cancelled by system|Rejected by Warehouse|Re-inbounded Accepted
    - `shop_name` · _String_ · **optional** — Shop name
    - `created_by` · _String_ · **optional** — Who create the order, Seller|Lazada|Daraz|Retail
    - `outbound_reason` · _String_ · **optional** — Outbound reason, RTS|Sold-Offline|Scrapped
    - `fulfillment_order_number` · _String_ · **optional** — Fulfillment order number
    - `outbound_warehouse_code` · _String_ · **optional** — Outbound Warehouse code
  - `page` · _Number_ · **required** — Page index
  - `total_count` · _Number_ · **required** — Total order count

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
outbound_order_no=OO022019061429XXXXX
creation_time_from=2019-08-10
creation_time_to=2019-08-16
outbound_warehouse=yavin test warehouse
seller_sku=test-chengxi-icp-yavin-044
fulfillment_sku=309958149_SGAMZ-56XXXXX
marketplace=LAZADA_SG
page=1
per_page=20
reference_number=refer001
```

Response sample 1:

```
result={result}
```

---

## GetPlatformProductsV2

<a id="fbl-platform-products-get2"></a>

- **Path**: `/fbl/platform_products/get2`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:39:25

Search products list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `per_page` · _Number_ · **optional** — Maximum number of results Per Page
- `seller_id` · _Number_ · **required** — sellerId
- `marketplace` · _String_ · **required** — Marketplace
- `seller_sku` · _String_ · **optional** — sellerSku
- `platform_sku_name` · _String_ · **optional** — Platform SKU Name
- `ready_for_inbound` · _Boolean_ · **optional** — Products that have binding stock in warsehouse
- `platform_sku` · _String_ · **optional** — List of Platform SKU. Separate By Comma (,)
- `page` · _Number_ · **optional** — Page Number

**Response parameters**

- `data` · _Object[]_ · **required** — List of products data
  - `platform_sku_name` · _String_ · **required** — Platform SKU Name
  - `status` · _String_ · **required** — status from ASC
  - `marketplace` · _String_ · **required** — marketplace Fields
  - `source` · _String_ · **required** — source
  - `product_id` · _String_ · **required** — productId
  - `skus` · _Object[]_ · **required** — List of sku data
    - `fulfillment_sku_name` · _String_ · **optional** — FulfillmentSkuName
    - `fulfillment_sku` · _String_ · **optional** — FulfillmentSkuCode
    - `sku_status` · _String_ · **optional** — status from ASC
    - `platform_sku` · _String_ · **optional** — PlatformSkuCode
    - `seller_sku` · _String_ · **optional** — sellerSku
    - `extend_fields` · _String_ · **optional** — extend_fields

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
per_page=50
seller_id=100056775
marketplace=LAZADA_SG
seller_sku=341355
platform_sku_name=normal product name   
ready_for_inbound=true
platform_sku=222103860_TH-339012944
page=1
```

Response sample 1:

```
data=[{...data...}]
```

---

## GetShipperInfo

<a id="fbl-shipper-get"></a>

- **Path**: `/fbl/shipper/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:16:33

Get Shipper Info for LAZADA Partner

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `error_message` · _String_ · **optional** — Error Message
- `data` · _Object_ · **optional** — Result Data
  - `shipper_id` · _String_ · **optional** — Shipper ID
  - `is_mcl` · _Boolean_ · **optional** — Whether Shipper Support MCL
  - `partner_name` · _String_ · **optional** — MCL Partner Name
  - `is_cb` · _Boolean_ · **optional** — is cb seller
  - `main_seller_id` · _String_ · **optional** — main seller id for cb seller
  - `main_seller_site` · _String_ · **optional** — main site for cb seller
  - `main_shipper_id` · _String_ · **optional** — main shipper id for cb seller
- `success` · _Boolean_ · **optional** — Whether Success
- `error_code` · _String_ · **optional** — Error Code

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
error_message=Internal system error
data={}
success=true
error_code=PARAM_VALID_ERROR
```

---

## GetStockRule

<a id="fbl-stock-rule-get"></a>

- **Path**: `/fbl/stock_rule/get`
- **Method**: `get`
- **Last modified**: 2022-08-01 13:02:58

Get SKU stock rule by sku and warehouse

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `fulfillment_sku_ids` · _String_ · **optional** — fulfilment sku id list
- `store_code` · _String_ · **required** — warehouse code
- `page` · _String_ · **optional** — page index, default: 1
- `per_page` · _String_ · **optional** — page size, default: 50

**Response parameters**

- `success` · _String_ · **optional** — result
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message
- `page` · _Number_ · **optional** — page
- `per_page` · _Number_ · **optional** — page size
- `total_count` · _Number_ · **optional** — total count
- `data` · _Object[]_ · **optional** — data list
  - `fulfillment_sku_id` · _String_ · **optional** — fulfillment sku id
  - `store_code` · _String_ · **optional** — warehouse code
  - `auto_balancing` · _Boolean_ · **optional** — enable auto balance
  - `channel_ratio` · _Object[]_ · **optional** — channel ratio list
    - `ratio` · _Number_ · **optional** — channel ratio
    - `channel_code` · _String_ · **optional** — EXTERNAL channel or LAZADA channel

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
fulfillment_sku_ids=638646125507,654069263100
store_code=OMS-LAZADA-WH3
page=1
per_page=50
```

Response sample 1:

```
success=true
error_code=SHIPPER_ERROR
error_message=shipper error
page=1
per_page=50
total_count=150
data=[]
```

---

## GetVasOrderByNo4FBL

<a id="fbl-vas-getvasorderbyno"></a>

- **Path**: `/fbl/vas/getVasOrderByNo`
- **Method**: `GET/POST`
- **Last modified**: 2026-01-09 18:09:44

get vasOrder by orderNo

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_name` · _String_ · **required** — laz店铺所属的前台租户,例如: LAZADA_VN
- `vas_order_code` · _String_ · **required** — 增值服务单号

**Response parameters**

- `data` · _String_ · **optional** — 增值服务信息

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_name=LAZADA_VN
vas_order_code=ZVAS20251217005438003
```

Response sample 1:

```
data={"data":{"retryable":false,"fail":false,"data":{"gmtOperated":1766051362000,"gmtModified":1766051362000,"supplierId":1000000304751101,"warehouseCode":"OMS-LAZADA-WH3","outerVasOrderNo":"LBZ00201820007","features":{"financeOrganizationCode":"FIN_CSLazSupplyChain"},"vasOrderNo":"ZVAS20251217005438003","lines":[{"quantity":6,"operatedQuantity":6,"intOperatedQuantity":6,"scItemId":566122254124,"intQuantity":6}],"creator":"lzdvn0003(lzdvn0003@gmail.com)","blameType":"null","gmtCreate":1765958945000,"vasCode":"BUNDLING_TEST","targetOrderType":"GOODS","tenantId":"CSFBL","financeOrganizationCode":"FIN_CSLazSupplyChain","status":"OPERATED"},"success":true,"succAndNotNull":true,"message":"OK"},"code":"0","request_id":"2101773f17679308323726963","_trace_id_":"21076dc917679308322066562e1d74"}
```

---

## GetWarehouseListForMCL

<a id="fbl-warehouses-get"></a>

- **Path**: `/fbl/warehouses/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 13:51:00

Get Warehouse List By Country And Multi-Channel

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `country_code` · _String_ · **required** — CountryCode
- `page` · _Number_ · **required** — PageIndex
- `per_page` · _Number_ · **required** — Maximum number of results per page

**Response parameters**

- `success` · _Boolean_ · **optional** — Success flag
- `error_code` · _String_ · **optional** — Error Code
- `error_message` · _String_ · **optional** — Error Message
- `page` · _Number_ · **optional** — Page Index
- `per_page` · _Number_ · **optional** — Maximum number of results per page
- `total_count` · _Number_ · **optional** — Total count
- `total_page` · _Number_ · **optional** — Total page
- `data` · _Object[]_ · **optional** — Warehouse list
  - `warehouse_name` · _String_ · **optional** — Warehosue  name
  - `warehouse_code` · _String_ · **optional** — Warehouse code
  - `platform_name` · _String_ · **optional** — Platform name
  - `country_code` · _String_ · **optional** — Country ID
  - `area_code` · _String_ · **optional** — Area code
  - `city_code` · _String_ · **optional** — City code
  - `town_code` · _String_ · **optional** — Town code
  - `division_id` · _String_ · **optional** — The default address of the warehouse, when no explicit address is given, the default is used.
  - `longitude` · _String_ · **optional** — longitude
  - `latitude` · _String_ · **optional** — latitude
  - `zip_code` · _String_ · **optional** — Postcode
  - `multi_channel` · _Boolean_ · **optional** — Whether multi-channel warehouse

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
country_code=MY
page=1
per_page=20
```

Response sample 1:

```
success=TRUE
error_code=PARAM_INVALID
error_message=Param invalid
page=1
per_page=20
total_count=20
total_page=10
data=[warehouse]
```

---

## GetWarehouseStock

<a id="fbl-stocks-get"></a>

- **Path**: `/fbl/stocks/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 18:28:46

Get SKU list and stock by warehouse code

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `seller_sku` · _String_ · **optional** — Seller SKU
- `marketplace` · _String_ · **required** — Marketplace should be "LAZADA_MY","LAZADA_ID","LAZADA_VN","LAZADA_SG","LAZADA_TH","LAZADA_PH"
- `fulfilment_sku` · _String_ · **optional** — List of shop SKU, Comma separated list in square brackets
- `store_code` · _String_ · **optional** — Warehouse Code  List：https://www.yuque.com/u1990121/kb/exh5go#B4gg

**Response parameters**

- `data` · _Object[]_ · **optional** — Response body
  - `fulfilment_sku` · _String_ · **optional** — Shop SKU
  - `store_stocks` · _Object[]_ · **optional** — Stock Warehouse Detail
    - `store_code` · _String_ · **optional** — Warehouse Code
    - `stocks` · _Object_ · **optional** — Stock Items Detail
      - `sellable` · _Object_ · **optional** — Sellable Stock
        - `available` · _Number_ · **optional** — Sellable available Stock
        - `reserved` · _Number_ · **optional** — Sellable reserved Stocks
      - `unsellable` · _Object_ · **optional** — Unsellable Stock
        - `available` · _Number_ · **optional** — Unsellable available Stock
        - `reserved` · _Number_ · **optional** — Unsellable reserved Stocks
      - `pending` · _Object_ · **optional** — Pending Stock
        - `reserved` · _Number_ · **optional** — Pending reserved Stocks
        - `available` · _Number_ · **optional** — Pending available Stock

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
seller_sku=AP082ELAAXCXJVANID
marketplace=LAZADA_ID
fulfilment_sku=AP082ELAAXCXJVANID-75574360,WA362HBABISOANID-77873
store_code=OMS-LAZADA-SG-W-1
```

Response sample 1:

```
data=[]
```

---

## GetWarehouseStockV3

<a id="fbl-stocks-getv3"></a>

- **Path**: `/fbl/stocks/getV3`
- **Method**: `get`
- **Last modified**: 2022-07-29 13:54:00

Get SKU list and stock by warehouse code, this version separates pending inbound and stock in transit in return json.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `seller_sku` · _String_ · **optional** — Seller SKU, required when fulfilment_sku is empty
- `marketplace` · _String_ · **required** — Marketplace should be "LAZADA_MY","LAZADA_ID","LAZADA_VN","LAZADA_SG","LAZADA_TH","LAZADA_PH"
- `fulfilment_sku` · _String_ · **optional** — List of shop SKU, Comma separated list in square brackets, required when seller_sku is empty
- `store_code` · _String_ · **optional** — Warehouse Code  List：https://www.yuque.com/u1990121/kb/exh5go#B4gg

**Response parameters**

- `data` · _Object[]_ · **optional** — Response body
  - `fulfilment_sku` · _String_ · **optional** — Shop SKU
  - `store_stocks` · _Object[]_ · **optional** — Stock Warehouse Detail
    - `store_code` · _String_ · **optional** — Warehouse Code
    - `stocks` · _Object_ · **optional** — Stock Items Detail
      - `expiredUnsellable` · _Object_ · **optional** — Expired Unsellable Stock
        - `available` · _Number_ · **optional** — Expired Unsellable Available Stock
        - `reserved` · _Number_ · **optional** — Expired Unsellable  Reserved Stock
      - `sellable` · _Object_ · **optional** — Sellable Stock
        - `available` · _Number_ · **optional** — Sellable available Stocks
        - `reserved` · _Number_ · **optional** — Sellable reserved Stocks
      - `unsellable` · _Object_ · **optional** — Unsellable Stock
        - `available` · _Number_ · **optional** — Unsellable available Stocks
        - `reserved` · _Number_ · **optional** — Unsellable reserved Stocks
      - `pending` · _Object_ · **optional** — Pending Stock
        - `available` · _Number_ · **optional** — Pending available Stocks
        - `reserved` · _Number_ · **optional** — Pending reserved Stocks
      - `transfer` · _Object_ · **optional** — Transfer Stock
        - `available` · _Number_ · **optional** — Transfer available Stocks
        - `reserved` · _Number_ · **optional** — Transfer reserved Stocks
      - `damagedUnsellable` · _Object_ · **optional** — Damaged Unsellable Stock
        - `reserved` · _Number_ · **optional** — Damaged Unsellable Reserved Stock
        - `available` · _Number_ · **optional** — Damaged Unsellable Reserved Stock

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `HttpConnectError` | Request failed, due to [%s] | The connection timed out or failed and needs to be retried. |

**Example**

Request sample 1:

```
seller_sku=AP082ELAAXCXJVANID
marketplace=LAZADA_ID
fulfilment_sku=AP082ELAAXCXJVANID-75574360,WA362HBABISOANID-77873
store_code=OMS-LAZADA-SG-W-1
```

Response sample 1:

```
data=[]
```

---

## ListIcpWarehouse

<a id="fbl-icp-warehouse-list"></a>

- **Path**: `/fbl/icp_warehouse/list`
- **Method**: `get`
- **Last modified**: 2022-07-29 13:51:05

List warehouses for create InboundOrder and outboundOrder

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `warehouse_type` · _String_ · **required** — Warehouse type. Enum: Inbound | outbound | Seller

**Response parameters**

- `success` · _Boolean_ · **optional** — Success or not.
- `error_code` · _String_ · **optional** — Error code.
- `error_message` · _String_ · **optional** — Error message.
- `data` · _Object[]_ · **optional** — warehouse list
  - `warehouse_code` · _String_ · **optional** — Warehouse code
  - `warehouse_name` · _String_ · **optional** — Warehouse name

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
warehouse_type=Inbound
```

Response sample 1:

```
success=true
error_code=ERROR_SYSTEM
error_message=List failed
data=[{"warehouse_code":"Code1","warehouse_name":"name1"}]
```

---

## QueryFulfillmentOrderForMCL

<a id="fbl-fulfillment-order-list-get"></a>

- **Path**: `/fbl/fulfillment_order_list/get`
- **Method**: `get`
- **Last modified**: 2022-08-01 23:15:48

Query list of Fulfillment Orders by shipper

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `platform_order_id` · _String_ · **optional** — Order level identifier for fulfilment order, unique for idempotence
- `platform_name` · _String_ · **required** — Trade platform name
- `per_page` · _Number_ · **required** — Page size
- `page` · _Number_ · **required** — Page index
- `sales_order_number` · _String_ · **optional** — Sales order number from platform
- `status` · _String_ · **optional** — Status
- `create_start_time` · _String_ · **required** — Order create time lower bound
- `create_end_time` · _String_ · **required** — Order create time upper bound
- `delivery_type` · _String_ · **optional** — Delivery type

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success
- `error_code` · _String_ · **optional** — Error code
- `error_message` · _String_ · **optional** — Error message
- `per_page` · _Number_ · **optional** — Page size
- `page` · _Number_ · **optional** — Page index
- `total_count` · _Number_ · **optional** — Total count
- `data` · _Object[]_ · **optional** — Result order list
  - `sales_order_number` · _String_ · **optional** — Sales order number from platform
  - `platform_order_id` · _String_ · **optional** — Unique order level identifier for fulfilment order
  - `create_time` · _String_ · **optional** — Create time
  - `items` · _Object[]_ · **optional** — Result item list
    - `platform_item_id` · _String_ · **optional** — Unique item level identifier for fulfillment order
    - `fulfillment_sku_id` · _String_ · **optional** — Item id
    - `status` · _String_ · **optional** — logistics status: created created_failed send_to_warehouse handled_by_warehouse ready_to_shipped shipped inbound delivery_failed failed delivered canceled request_failed oos

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
platform_order_id=OF02282036214681
platform_name=LAZADA_TH
per_page=10
page=1
sales_order_number=orderxxxx
status=created
create_start_time=2019-12-04T18:18:32Z
create_end_time=2019-12-04T18:18:32Z
delivery_type=standard
```

Response sample 1:

```
success=TRUE
error_code=Error code
error_message=Error message
per_page=20
page=1
total_count=100
data=[order]
```

---

## QueryInboundReservationOrder

<a id="fbl-inbound-reservation-get"></a>

- **Path**: `/fbl/inbound_reservation/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 17:39:42

get inbound reservation order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `reservation_order` · _String_ · **optional** — reservation order
- `inbound_order` · _String_ · **optional** — Inbound Order ID, required when  reservation order is not present. if  reservation order is present, use reservation order first

**Response parameters**

- `success` · _Boolean_ · **optional** — success
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message
- `data` · _Object_ · **optional** — data
  - `reservation_order` · _String_ · **optional** — reservation order
  - `slot` · _String_ · **optional** — reservation date
  - `status` · _String_ · **optional** — status
  - `inbound_orders` · _String[]_ · **optional** — inbound order list

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
reservation_order=RSO1234
inbound_order=IO1234
```

Response sample 1:

```
success=true
error_code=SELLER_ERROR
error_message=seller error
data={}
```

---

## QueryReverseOrderForMCL

<a id="fbl-reverse-order-get"></a>

- **Path**: `/fbl/reverse_order/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 12:50:57

Query Reverse Order for MCL

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `sales_order_number` · _String_ · **required** — Sales order number from platform

**Response parameters**

- `success` · _Boolean_ · **optional** — Whether Success
- `error_message` · _String_ · **optional** — Error Message
- `data` · _Object[]_ · **optional** — Result Data
  - `sales_order_number` · _String_ · **optional** — Sales order number from platform
  - `create_time` · _String_ · **optional** — Reverse order create time in ISO8601 format
  - `type` · _String_ · **optional** — Reverse order type
  - `status` · _String_ · **optional** — Reverse order status
  - `items` · _Object[]_ · **optional** — Items in reverse order
    - `fulfillment_sku_id` · _Number_ · **optional** — Fulfillment sku id
    - `fulfillment_sku_code` · _String_ · **optional** — Fulfillment sku code
    - `quantity` · _Number_ · **optional** — Item number

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
sales_order_number=123456
```

Response sample 1:

```
success=true
error_message=Internal system error
data=[{}]
```

---

## RemoveFulfillmentSkuRelation

<a id="fbl-fulfillment-sku-relation-remove"></a>

- **Path**: `/fbl/fulfillment_sku_relation/remove`
- **Method**: `post`
- **Last modified**: 2022-07-29 17:18:34

remove the relation between platformSku and fulfillmentSku

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `site` · _String_ · **required** — site
- `item_id` · _Number_ · **required** — itemId
- `sku_id` · _Number_ · **required** — skuId
- `sc_item_id` · _Number_ · **optional** — fulfillmentSkuId
- `fulfillment_sku` · _String_ · **optional** — fulfillmentSku

**Response parameters**

- `result` · _Object_ · **required** — result DTO
  - `success` · _Boolean_ · **required** — if success
  - `failure` · _Boolean_ · **required** — if failure
  - `error_code` · _String_ · **required** — error_code
  - `error_msg` · _String_ · **required** — error_msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
site=SG
item_id=710230731
sku_id=1551058427
sc_item_id=610412175368
fulfillment_sku=CB-885710187-1305210866
```

Response sample 1:

```
result={   "success": false,   "failure": true,   "errorCode": "PARAM_ILLEGAL",   "class": "com.alibaba.ascp.itemcenter.dto.Result",   "errorMsg": "sku not belongs to the sellerId" }
```

---

## ReturnCancellation

<a id="fbl-returns-cancel"></a>

- **Path**: `/fbl/returns/cancel`
- **Method**: `post`
- **Last modified**: 2022-07-29 17:39:52

Return order cancellation

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `return_id` · _String_ · **required** — return id created during return order creation

**Response parameters**

- `success` · _Boolean_ · **optional** — is success
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
return_id=123e4567-e89b-12d3-a456-426655440000
```

Response sample 1:

```
success=TRUE
error_code=400
error_message=bad request
```

---

## ReturnOrderCreation

<a id="fbl-returns-create"></a>

- **Path**: `/fbl/returns/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 17:18:27

Api to create customer returns

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `tracking` · _Object_ · **required** — tracking
  - `origin` · _Object_ · **required** — origin
    - `location` · _Object_ · **required** — location
      - `address` · _String_ · **required** — Address
      - `address_id` · _String_ · **required** — Address ID
      - `details` · _String_ · **optional** — Additional details of the location
  - `tracking_number` · _String_ · **required** — Tracking Number
- `platform_name` · _String_ · **required** — Platform Name
- `platform_order_creation_time` · _String_ · **required** — Sales order creation time of platform side Datetime format: 2017-11-17T10:14:13.185Z
- `return_comment` · _String_ · **required** — Customer comments accompanying the return order, will be used as reference during quality check
- `return_delivery_type` · _String_ · **required** — Return delivery type (always return_by_customer)
- `return_order_number` · _String_ · **required** — Return order number from platform; must be unique
- `sales_order_number` · _String_ · **required** — Sales order number accompanying the original fulfilment order request
- `currency` · _String_ · **required** — Currency
- `customer` · _Object_ · **required** — customer info
  - `phone` · _String_ · **required** — Customer phone
  - `email` · _String_ · **optional** — Customer email
  - `name` · _String_ · **required** — Customer name
- `platform_order_id` · _String_ · **required** — Return order id - unique order level Identifier used to send return order and item status notification events
- `parcel` · _Object_ · **required** — parcel
  - `items` · _Object[]_ · **required** — items
    - `name` · _String_ · **required** — Item name
    - `paid_price` · _String_ · **optional** — Paid Price Minimum value : 0
    - `platform_item_id` · _String_ · **required** — Return item id - unique item level Identifier used to send return item status notification events
    - `quantity` · _Number_ · **required** — Quantity Minimum value : 1
    - `return_reason` · _String_ · **required** — Return reason (please refer to list of return reasons below)
    - `return_type` · _String_ · **required** — Return Type (always normal)
    - `seller_return_policy` · _String_ · **required** — Seller return policy (free text)
    - `sku` · _String_ · **required** — Fulfillment SKU id
    - `unit_price` · _String_ · **required** — Price of a single unit Minimum value : 0
    - `weight` · _String_ · **required** — Weight of a single unit in grams Minimum value : 0
    - `width` · _String_ · **required** — Width in cm Minimum value : 0
    - `delivery_package_id` · _String_ · **required** — Package indentifier used to deliver original sales order item to customer
    - `fulfillment_type` · _String_ · **required** — Fulfillment type (always MCL)
    - `height` · _String_ · **required** — Height in cm. Minimum value : 0
    - `length` · _String_ · **required** — Length in cm. Minimum value : 0

**Response parameters**

- `data` · _Object_ · **optional** — result
  - `return_id` · _String_ · **optional** — Reference return id used for further communication, like updating return cancellation status. It must be saved on client side.
- `success` · _Boolean_ · **optional** — is success
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
tracking={"tracking_number":"611892047371","origin": {"location": {"address": "xyz address", "address_id": "R80160375", "details": "xyz address"}}}
platform_name=SHOPEE_ID
platform_order_creation_time=2017-11-17T10:14:13.185Z
return_comment=wrong size
return_delivery_type=return_by_customer
return_order_number=206611892047371
sales_order_number=206611892047371
currency=PHP
customer={"email":"xyz@example.com", "name":"John Doe", "phone": "999999999"}
platform_order_id=4592129765330
parcel={"items": [{"delivery_package_id":"34abb0e9-05bf-4503-b47f-22ddfe0b8ac8","fulfillment_type":"MCL","height":10,"length":10,"name":"Sample Product 1","paid_price":10,"platform_item_id":"OF04592182434859","quantity":1,"return_reason":"10505","return_type":"normal","seller_return_policy":"7 days easy return","sku":"308990418","unit_price":3316.01,"weight":1000,"width":10}]}
```

Response sample 1:

```
data={"return_id":"123e4567-e89b-12d3-a456-426655440000"}
success=TRUE
error_code=400
error_message=bad request
```

---

## SetStockRule

<a id="fbl-stock-rule-set"></a>

- **Path**: `/fbl/stock_rule/set`
- **Method**: `post`
- **Last modified**: 2022-08-03 18:25:10

set channel ratio by sku and warehouse

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `skus` · _Object[]_ · **required** — skus
  - `fulfillment_sku_id` · _String_ · **required** — fulfillment sku id
  - `store_code` · _String_ · **required** — warehouse code
  - `ratio` · _Number_ · **required** — ratio
  - `auto_balancing` · _Boolean_ · **required** — enable auto-balancing between channels

**Response parameters**

- `success` · _Boolean_ · **optional** — success
- `error_code` · _String_ · **optional** — error code
- `error_message` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
skus=[{"ratio": 100,"auto_balancing": true,"fulfillment_sku_id": 638646397094,"store_code": "OMS-LAZADA-WH3"}]
```

Response sample 1:

```
success=true
error_code=SHIPPER_ERROR
error_message=shipper_error
```

---

## UpdateFulfillmentSkuDecouple

<a id="fbl-fulfillment-sku-update"></a>

- **Path**: `/fbl/fulfillment_sku/update`
- **Method**: `post`
- **Last modified**: 2022-07-26 00:16:56

update fulfillment sku without product

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `barcodes` · _String[]_ · **optional** — barcode list
- `hygroscopic` · _Boolean_ · **optional** — true/false
- `precious` · _Boolean_ · **optional** — true/false
- `product_type` · _String_ · **optional** — food,liquid,danger,other
- `temperature_requirement` · _String_ · **optional** — 1: normal temperature 4: refrigerated 6: frozen
- `pic_urls` · _String[]_ · **optional** — at most 6 pictures url
- `serial_number_flag` · _Boolean_ · **optional** — true/false
- `shelf_life_flag` · _Boolean_ · **optional** — true/false
- `shelf_life_days` · _Number_ · **optional** — required if shelf_life_day is life_mgnt
- `reject_shelf_live` · _Number_ · **optional** — required if shelf_life_day is life_mgnt
- `alert_shelf_live` · _Number_ · **optional** — required if shelf_life_day is life_mgnt
- `offline_shelf_live` · _Number_ · **optional** — required if shelf_life_day is life_mgnt
- `sale_price` · _String_ · **optional** — sale price
- `fulfillment_sku_id` · _Number_ · **required** — fulfillment_sku_id

**Response parameters**

- `success` · _Boolean_ · **optional** — is success
- `error_code` · _String_ · **optional** — error_code
- `error_message` · _String_ · **optional** — error_msg
- `data` · _Boolean_ · **optional** — is success

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
barcodes=["LZD000000063206","8859295109033"]
hygroscopic=true
precious=true
product_type=food
temperature_requirement=1
pic_urls=["https://th-live-02.slatic.net/p/sportland-inailn-sekt-in-line-skate-run-sl-120-gray-yellow-s-7899-583337-d61a153af3f15bc83f31fa2aeec6db4d-catalog.jpg"]
serial_number_flag=true
shelf_life_flag=true
shelf_life_days=1825
reject_shelf_live=180
alert_shelf_live=60
offline_shelf_live=30
sale_price=32.25
fulfillment_sku_id=656853096987
```

Response sample 1:

```
success=true
error_code=null
error_message=null
data=true
```

---

## UploadWaybill

<a id="fbl-waybill-upload"></a>

- **Path**: `/fbl/waybill/upload`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-01 16:00:13

Use this API to upload a waybill pdf to Lazada site. The maximum size of an pdf file is 1MB.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `waybill` · _byte[]_ · **required** — waybill pdf
- `package_code` · _String_ · **required** — package code
- `tracking_number` · _String_ · **required** — tracking number
- `extends_field` · _String_ · **optional** — extend fields
- `store_code` · _String_ · **required** — warehouse_code

**Response parameters**

- `success` · _Boolean_ · **required** — whether success
- `error_message` · _String_ · **required** — error message
- `error_code` · _String_ · **required** — error code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
waybill=waybill
package_code=HU2005191006185
tracking_number=LEXPU0017101924
extends_field=none
store_code=STORE_188564
```

Response sample 1:

```
success=true/false
error_message=WaybillUpladServiceImpl failed! lack the necessary Params errorMsg= store code can't null
error_code=A0410
```

---

