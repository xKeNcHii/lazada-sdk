# Return and Refund API

## GetReverseOrderDetail

<a id="order-reverse-return-detail-list"></a>

- **Path**: `/order/reverse/return/detail/list`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:13:18

Get the detailed information for a specific reverse order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `reverse_order_id` · _Number_ · **required** — 0

**Response parameters**

- `data` · _Object_ · **optional** — data
  - `reverse_order_id` · _Number_ · **optional** — reverse order id
  - `trade_order_id` · _Number_ · **optional** — trade order id
  - `request_type` · _String_ · **optional** — CANCEL;RETURN;ONLY_REFUND
  - `shipping_type` · _String_ · **optional** — PICK_UP;DROP_OFF
  - `is_rtm` · _Boolean_ · **optional** — is Return to Merchant or not
  - `reverseOrderLineDTOList` · _Object[]_ · **optional** — reverseOrderLineDTOList
    - `reverse_order_line_id` · _Number_ · **optional** — reverse order line id
    - `trade_order_line_id` · _Number_ · **optional** — trade order line id
    - `buyer` · _Object_ · **optional** — buyer
      - `user_id` · _Number_ · **optional** — buyer user id
    - `reverse_status` · _String_ · **optional** — REQUEST_INITIATE;REQUEST_REJECT;REQUEST_CANCEL;CANCEL_SUCCESS
    - `productDTO` · _Object_ · **optional** — productDTO
      - `product_id` · _Number_ · **optional** — product id
      - `sku` · _String_ · **optional** — sku id
    - `is_need_refund` · _Boolean_ · **optional** — need refund or not
    - `ofc_status` · _String_ · **optional** — fulfillment status
    - `trade_order_gmt_create` · _Number_ · **optional** — trade order create time
    - `refund_amount` · _Number_ · **optional** — refund amount, currency in cent, except VN (for example for SG, 100 equals SGD $1; for VN, 10000 equals VND 10000)
    - `reason_text` · _String_ · **optional** — reason text
    - `reason_code` · _Number_ · **optional** — reason code
    - `refund_payment_method` · _String_ · **optional** — refund payment Method
    - `whqc_decision` · _String_ · **optional** — warehouse decision
    - `return_order_line_gmt_create` · _Number_ · **optional** — reverse order line create time
    - `return_order_line_gmt_modified` · _Number_ · **optional** — reverse order line modified time
    - `is_dispute` · _Boolean_ · **optional** — is in dispute or not
    - `seller_sku_id` · _String_ · **optional** — seller sku id
    - `item_unit_price` · _Number_ · **optional** — price, currency in cent, except VN (for example for SG, 100 equals SGD $1; for VN, 10000 equals VND 10000)
    - `platform_sku_id` · _String_ · **optional** — platform sku id
    - `tracking_number` · _String_ · **optional** — tracking number
    - `sla` · _Number_ · **optional** — seller operation sla in milliseconds

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `105` | E0105: reverse order id is empty or invalid | E0105: reverse order id is empty or invalid |
| `106` | E0106: ROC internal error | E0106: ROC internal error |
| `116` | E0116: no seller id | E0116: no seller id |
| `117` | E0117: no user id | E0117: no user id |
| `118` | E0118: no user email | E0118: no user email |
| `Mp3SellerApiLimit` | Mp3 Seller not support the api -apipath | MP3 sellers cannot call the current API, please readthis document for a list of APIs that can be called by MP3 sellers, and you can call the GetSeller API and check the marketplaceEaseMode field to confirm that the current seller is of type MP3. |
| `106` | ROC internal error | The reverse ID entered in reverse_order_id does not exist in the current store or is incorrect, call the GetReverseOrdersForSeller API to resynchronize or query for the correct reverse order ID. |

**Example**

Request sample 1:

```
reverse_order_id=reverse order id
```

Response sample 1:

```
data={}
```

---

## GetReverseOrderHistoryList

<a id="order-reverse-return-history-list"></a>

- **Path**: `/order/reverse/return/history/list`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:13:25

Get the communication history of the reverse order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `reverse_order_line_id` · _Number_ · **required** — reverse order line id
- `page_size` · _Number_ · **optional** — default 10
- `page_number` · _Number_ · **optional** — default 1

**Response parameters**

- `data` · _Object_ · **optional** — {}
  - `list` · _Object[]_ · **optional** — history
    - `operator` · _String_ · **optional** — operator
    - `picture` · _String[]_ · **optional** — picture url
    - `time` · _Number_ · **optional** — timestamp
  - `page_info` · _Object_ · **optional** — page info
    - `page_size` · _Number_ · **optional** — page size
    - `current_page_number` · _Number_ · **optional** — current page number
    - `total` · _Number_ · **optional** — total number

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `103` | E0103: reverse order line id is empty when query reject reason | E0103: reverse order line id is empty when query reject reason |
| `106` | E0106: ROC internal error | E0106: ROC internal error |
| `116` | E0116: no seller id | E0116: no seller id |
| `117` | E0117: no user id | E0117: no user id |
| `118` | E0118: no user email | E0118: no user email |
| `120` | E0120: page size invalid | E0120: page size invalid |
| `121` | E0121: page number invalid | E0121: page number invalid |

**Example**

Request sample 1:

```
reverse_order_line_id=0
page_size=10
page_number=1
```

Response sample 1:

```
data={}
```

---

## GetReverseOrderReasonList

<a id="order-reverse-reason-list"></a>

- **Path**: `/order/reverse/reason/list`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:13:33

Get the list of reject reason. Need to be used in all refuse refund actions

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `reverse_order_line_id` · _Number_ · **required** — reverse order line,Can be understood as reverse order item id

**Response parameters**

- `data` · _Object[]_ · **optional** — data
  - `reason_id` · _Number_ · **optional** — reason id
  - `muti_language_text` · _String_ · **optional** — multi-language reason
  - `text` · _String_ · **optional** — english reason

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `103` | E0103: reverse order line id is empty when query reject reason | E0103: reverse order line id is empty when query reject reason |
| `106` | E0106: ROC internal error | E0106: ROC internal error |
| `116` | E0116: no seller id | E0116: no seller id |
| `117` | E0117: no user id | E0117: no user id |
| `118` | E0118: no user email | E0118: no user email |
| `119` | E0119: cannot find any cancel reasons for these orders | E0119: cannot find any cancel reasons for these orders |

**Example**

Request sample 1:

```
reverse_order_line_id=0
```

Response sample 1:

```
data=[]
```

---

## GetReverseOrdersForSeller

<a id="reverse-getreverseordersforseller"></a>

- **Path**: `/reverse/getreverseordersforseller`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:13:33

Use this API to get the list of items for a range of reverse orders.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `request_type_list` · _String[]_ · **optional** — request type
- `ofc_status_list` · _String[]_ · **optional** — Limit the ofc status
- `reverse_order_id` · _Number_ · **optional** — Specify reverse order id
- `trade_order_id` · _Number_ · **optional** — Specify trade order id
- `page_size` · _Number_ · **required** — Page size, default 10
- `reverse_status_list` · _String[]_ · **optional** — Limit the reverse status.
- `page_no` · _Number_ · **required** — Page no
- `return_to_type` · _String_ · **optional** — Return Type. Enum Values：[RTM, RTW]（ RTW: return to the lazada warehouse; RTM: return to the seller）
- `dispute_in_progress` · _Boolean_ · **optional** — Is dispute in progress
- `TradeOrderLineCreatedTimeRangeStart` · _Number_ · **optional** — timestamp in Milliseconds
- `TradeOrderLineCreatedTimeRangeEnd` · _Number_ · **optional** — timestamp in Milliseconds
- `ReverseOrderLineTimeRangeStart` · _Number_ · **optional** — timestamp in Milliseconds
- `ReverseOrderLineTimeRangeEnd` · _Number_ · **optional** — timestamp in Milliseconds
- `ReverseOrderLineModifiedTimeRangeStart` · _Number_ · **optional** — timestamp in Milliseconds
- `ReverseOrderLineModifiedTimeRangeEnd` · _Number_ · **optional** — timestamp in Milliseconds
- `QC_Decision` · _String_ · **optional** — warehouse qc decision, select one from the following: scrap/return_to_merchant/return_to_merchant_cb/return_to_customer/return_to_warehouse/not_returned

**Response parameters**

- `result` · _Object_ · **required** — Response body
  - `page_no` · _Number_ · **required** — Page no
  - `success` · _Boolean_ · **required** — Result
  - `page_size` · _Number_ · **required** — Page size
  - `total` · _Number_ · **required** — The total number of data
  - `items` · _Object[]_ · **required** — Data list
    - `reverse_order_id` · _Number_ · **optional** — Reverse order id
    - `trade_order_id` · _Number_ · **optional** — Trade order id
    - `request_type` · _String_ · **optional** — The order applied by the buyer is: CANCEL;   RETURN;    ONLY_ REFUND
    - `is_rtm` · _Boolean_ · **optional** — rtm:true, rtw:false
    - `shipping_type` · _String_ · **optional** — Shipping type
    - `reverse_order_lines` · _Object[]_ · **optional** — Reverse order lines list
      - `ofc_status` · _String_ · **optional** — Ofc status
      - `product` · _Object_ · **optional** — Product Object
        - `product_id` · _Number_ · **optional** — Product id
        - `product_sku` · _String_ · **optional** — Product sku
      - `buyer` · _Object_ · **optional** — Buyer Object
        - `buyer_id` · _Number_ · **optional** — Buyer id
      - `trade_order_gmt_create` · _Number_ · **optional** — trade order create time
      - `refund_amount` · _Number_ · **optional** — refund amount, currency in cent, except VN (for example for SG, 100 equals SGD $1; for VN, 10000 equals VND 10000)
      - `reason_text` · _String_ · **optional** — reverse reason
      - `reason_code` · _Number_ · **optional** — reverse reason code
      - `refund_payment_method` · _String_ · **optional** — payment method
      - `whqc_decision` · _String_ · **optional** — warehouse decision
      - `return_order_line_gmt_create` · _Number_ · **optional** — reverse order line create time
      - `return_order_line_gmt_modified` · _Number_ · **optional** — reverse order line modified time
      - `is_dispute` · _Boolean_ · **optional** — is in dispute or not
      - `seller_sku_id` · _String_ · **optional** — seller sku id
      - `item_unit_price` · _Number_ · **optional** — price, currency in cent, except VN (for example for SG, 100 equals SGD $1; for VN, 10000 equals VND 10000)
      - `platform_sku_id` · _String_ · **optional** — platform sku id
      - `tracking_number` · _String_ · **optional** — tracking number of return order package
      - `receiver_address` · _String_ · **optional** — receiver address, normally refers to seller address or warehouse address. Not available when customer self-arrange.
      - `sla` · _Number_ · **optional** — seller operation sla in milliseconds
      - `reverse_order_line_id` · _Number_ · **optional** — Reverse order line id
      - `trade_order_line_id` · _Number_ · **optional** — Trade order line id
      - `reverse_status` · _String_ · **optional** — Reverse order status
      - `is_need_refund` · _String_ · **optional** — Is need refund

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `Mp3SellerApiLimit` | Mp3 Seller not support the api - apipath | MP3 sellers cannot call the current API, please readthis document for a list of APIs that can be called by MP3 sellers, and you can call the GetSeller API and check the marketplaceEaseMode field to confirm that the current seller is of type MP3. |

**Example**

Request sample 1:

```
request_type_list=["ONLY_REFUND"]
ofc_status_list=["RETURN_CANCELED"]
reverse_order_id=0
trade_order_id=0
page_size=10
reverse_status_list=["REQUEST_INITIATE"]
page_no=1
return_to_type=RTM
dispute_in_progress=true
TradeOrderLineCreatedTimeRangeStart=1662430200000
TradeOrderLineCreatedTimeRangeEnd=1662430296000
ReverseOrderLineTimeRangeStart=1662430270000
ReverseOrderLineTimeRangeEnd=1662430296000
ReverseOrderLineModifiedTimeRangeStart=1633830696000
ReverseOrderLineModifiedTimeRangeEnd=1665366696000
QC_Decision=scrap
```

Response sample 1:

```
result={}
```

---

## InitReverseOrderCancel

<a id="order-reverse-cancel-create"></a>

- **Path**: `/order/reverse/cancel/create`
- **Method**: `get`
- **Last modified**: 2022-08-10 15:56:48

Seller initiates a cancelation

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_item_id_list` · _String[]_ · **required** — all order items need to be cancel
- `order_id` · _Number_ · **required** — order id
- `reason_id` · _String_ · **required** — reason id

**Response parameters**

- `data` · _Object_ · **optional** — data
  - `tip_content` · _String_ · **optional** — tip infomation
  - `tip_type` · _String_ · **optional** — type of tip: error/warn

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `102` | E0102: trade order line id is empty or invalid | E0102: trade order line id is empty or invalid |
| `104` | E0104: reason is empty or invalid | E0104: reason is empty or invalid |
| `106` | E0106: ROC internal error | E0106: ROC internal error |
| `115` | E0115: order id is null | E0115: order id is null |
| `116` | E0116: no seller id | E0116: no seller id |
| `117` | E0117: no user id | E0117: no user id |
| `118` | E0118: no user email | E0118: no user email |
| `122` | E0122: invalid trade order | E0122: invalid trade order |
| `123` | E0123: invalid trade order lines %s | E0123: invalid trade order lines %s |
| `124` | E0124: invalid seller id for this order line %s | E0124: invalid seller id for this order line %s |

**Example**

Request sample 1:

```
order_item_id_list=[]
order_id=0
reason_id=10000021
```

Response sample 1:

```
data={}
```

---

## InitReverseOrderCancelDecide

<a id="order-reverse-cancel-seller-decide"></a>

- **Path**: `/order/reverse/cancel/seller/decide`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:13:46

Seller initiates a cancelation

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `reverse_order_id` · _Number_ · **required** — The reverse order to be cancelled
- `agree_cancel` · _Boolean_ · **required** — decision
- `reason_code` · _Number_ · **optional** — reason id

**Response parameters**

- `data` · _Object_ · **optional** — null

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `116` | E0116: no seller id | E0116: no seller id |
| `105` | E0105: reverse order id is empty or invalid | E0105: reverse order id is empty or invalid |
| `131` | E0131: no decision for this reverse order | E0131: no decision for this reverse order |
| `106` | E0106: ROC internal error | E0106: ROC internal error |

**Example**

Request sample 1:

```
reverse_order_id=1234567890
agree_cancel=false
reason_code=0
```

Response sample 1:

```
data=null
```

---

## ReverseOrderOnlyRefundDecide

<a id="order-reverse-onlyrefund-seller-decide"></a>

- **Path**: `/order/reverse/onlyrefund/seller/decide`
- **Method**: `get`
- **Last modified**: 2025-03-20 11:44:01

Seller can use this API to operate only refund requests

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `action` · _String_ · **required** — agreeRefund, startDispute
- `reverse_order_id` · _Number_ · **required** — reverse order id
- `reverse_order_item_ids` · _Number[]_ · **required** — reverse order item id list, currently list size can be only 1
- `comment` · _String_ · **optional** — comment, required if action is startDispute
- `image_info_list` · _Object[]_ · **optional** — image info list, required if action is startDispute
  - `file_name` · _String_ · **optional** — image name
  - `file_url` · _String_ · **optional** — image url
- `video_info_list` · _Object[]_ · **optional** — video info list
  - `cover_url` · _String_ · **optional** — cover url
  - `video_url` · _String_ · **optional** — video url

**Response parameters**

- `data` · _Object_ · **optional** — null

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `116` | E0116: no seller id | E0116: no seller id |
| `118` | E0108: reason can't be empty if you want to refuse return or refund | E0108: reason can't be empty if you want to refuse return or refund |
| `100` | E0100: reverse order list is empty | E0100: reverse order list is empty |
| `125` | E0125: invalid reverse id | E0125: invalid reverse id |
| `112` | E0112: no reverse order found | E0112: no reverse order found |
| `133` | E0133: do not support batch operation | E0133: do not support batch operation |
| `126` | E0126: invalid reverse order lines | E0126: invalid reverse order lines |
| `114` | E0114: this reverse does not support this action | E0114: this reverse does not support this action |
| `107` | E0107: invalid action | E0107: invalid action |
| `109` | E0109: comment can't be empty if startDispute | E0109: comment can't be empty if startDispute |
| `110` | E0110: image can't be empty if startDispute | E0110: image can't be empty if startDispute |
| `106` | E0106: ROC internal error | E0106: ROC internal error |
| `113` | E0113: reverse order line have unknown status | E0113: reverse order line have unknown status |
| `114` | E0114: this reverse does not support this action | E0114: this reverse does not support this action |

**Example**

Request sample 1:

```
action=agreeRefund
reverse_order_id=123
reverse_order_item_ids=[]
comment=""
image_info_list=[]
video_info_list=[]
```

Response sample 1:

```
data=null
```

---

## ReverseOrderReturnUpdate

<a id="order-reverse-return-update"></a>

- **Path**: `/order/reverse/return/update`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:13:46

Seller can use this API to action on return and refund related.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `action` · _String_ · **required** — instantRefund;agreeReturn;refuseReturn;agreeRefund;refuseRefund;confirmDelivery
- `reverse_order_id` · _Number_ · **required** — reverse order id
- `reverse_order_item_ids` · _Number[]_ · **required** — reverse order item id list
- `reason_id` · _Number_ · **optional** — reason id
- `comment` · _String_ · **optional** — comment
- `image_info` · _Object[]_ · **optional** — image_info
  - `name` · _String_ · **optional** — image name
  - `url` · _String_ · **optional** — image url

**Response parameters**

- `data` · _Object_ · **optional** — data
  - `reverse_order_line` · _Object[]_ · **optional** — reverse order line
    - `reverse_order_line_id` · _Number_ · **optional** — reverse order line id
    - `reason_source` · _String_ · **optional** — reason source
    - `reason_type` · _String_ · **optional** — reason type
    - `reason_id` · _Number_ · **optional** — reason id
    - `reason_name` · _String_ · **optional** — reason name
    - `reason_desc` · _String_ · **optional** — reason desc
    - `refund_amount` · _Number_ · **optional** — refund amount
    - `is_cancel` · _Boolean_ · **optional** — cancel or not
    - `order_id` · _Number_ · **optional** — order id
    - `seller_sku` · _String_ · **optional** — seller sku
    - `paid_price` · _Number_ · **optional** — paid price
    - `apply_reason` · _String_ · **optional** — apply reason
    - `order_line_id` · _Number_ · **optional** — order line id
  - `reverse_order_id` · _Number_ · **optional** — reverse orde id
  - `reason_info` · _Object[]_ · **optional** — reason info
    - `reason_id` · _Number_ · **optional** — reason id
    - `reason_name` · _String_ · **optional** — reason name
  - `total_refund` · _String_ · **optional** — total refund amount

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `100` | E0100: reverse order list is empty | E0100: reverse order list is empty |
| `106` | E0106: ROC internal error | E0106: ROC internal error |
| `107` | E0107: invalid action | E0107: invalid action |
| `108` | E0108: reason can't be empty if you want to refuse return or refund | E0108: reason can't be empty if you want to refuse return or refund |
| `109` | E0109: comment can't be empty if you want to refuse return or refund | E0109: comment can't be empty if you want to refuse return or refund |
| `110` | E0110: image can't be empty if you want to refuse refund | E0110: image can't be empty if you want to refuse refund |
| `111` | E0111: do not support massive reverse order line operation if you want to refuse return or refund | E0111: do not support massive reverse order line operation if you want to refuse return or refund |
| `112` | E0112: no reverse order found | E0112: no reverse order found |
| `113` | E0113: reverse order line have unknown status | E0113: reverse order line have unknown status |
| `114` | E0114: this reverse does not support this action | E0114: this reverse does not support this action |
| `116` | E0116: no seller id | E0116: no seller id |
| `117` | E0117: no user id | E0117: no user id |
| `118` | E0118: no user email | E0118: no user email |
| `125` | E0125: invalid reverse id | E0125: invalid reverse id |
| `126` | E0126: invalid reverse order lines | E0126: invalid reverse order lines |
| `127` | E0127: invalid seller id for this reverse order line | E0127: invalid seller id for this reverse order line |

**Example**

Request sample 1:

```
action=instantRefund
reverse_order_id=0
reverse_order_item_ids=[]
reason_id=0
comment=comment
image_info=[]
```

Response sample 1:

```
data={}
```

---

