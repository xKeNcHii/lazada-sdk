# Order API

## GetDocument

<a id="order-document-get"></a>

- **Path**: `/order/document/get`
- **Method**: `get`
- **Last modified**: 2022-07-21 11:33:17

Use this API to retrieve order-related documents, including invoices and shipping labels.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `doc_type` · _String_ · **required** — Document types, including 'invoice', 'shippingLabel', or 'carrierManifest'. Mandatory.
- `order_item_ids` · _String_ · **required** — Identifier of the order item for which the caller wants to get a document. Mandatory.

**Response parameters**

- `data` · _Object_ · **required** — response data
  - `document` · _Object_ · **required** — document
    - `file` · _String_ · **required** — To reconstruct the file, the data from the <file> node needs to be base64 decoded, and interpreted according to the mime_type.
    - `mime_type` · _String_ · **required** — To reconstruct the file, the data from the <file> node needs to be base64 decoded, and interpreted according to the mime_type.
    - `document_type` · _String_ · **required** — Document types, including 'invoice', 'shippingLabel', or 'carrierManifest'.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `20` | E020: "%s" Invalid Order Item IDs | The specified order item ID is not valid. |
| `21` | E021: OMS Api Error Occurred | Internal system error. |
| `32` | E032: Document type "%s" is not valid | The specified document type is not valid. |
| `34` | E034: Order Item must be packed. Please call SetStatusToReadyToShip before | The current status of the order item is not valid. |
| `35` | E035: "%s" was not found |  The specified order item is not found. |
| `30012` | rts package not found | Order item ID status must be "packed" or "ready to ship" |
| `700040` | There are no packages that support printing! | Printing AWB is not supported for orders in Unpaid, pending, canceled status or SOF/DBS orders. |
| `700040` | There are no packages that support printing! | Printing AWB is not supported for orders in Unpaid, pending, canceled status or SOF/DBS orders. |
| `700040` | There are no packages that support printing! | Printing AWB is not supported for orders in Unpaid, pending, canceled status or SOF/DBS orders. |
| `700040` | There are no packages that support printing! | Printing AWB is not supported for orders in Unpaid, pending, canceled status or SOF/DBS orders. |
| `6` | For input string: "" | Make sure you enter an array and not a string in the order_item_ids parameter. |
| `50008` | ot support operation for sof order | SOF/DBS type orders do not support the call of this API to query Shipping label, this type of orders by the seller to contact the logistics, Lazada does not provide Shipping label. |

**Example**

Request sample 1:

```
doc_type=shippingLabel
order_item_ids=[279709, 279709]
```

Response sample 1:

```
data={}
```

---

## GetMultipleOrderItems

<a id="orders-items-get"></a>

- **Path**: `/orders/items/get`
- **Method**: `get`
- **Last modified**: 2022-07-14 15:21:31

Use this API to get the item information of one or more orders.（No more than 50 at a time）

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_ids` · _Number[]_ · **required** — Comma-separated list of order identifiers in square brackets.（No more than 50 at a time）

**Response parameters**

- `data` · _Object[]_ · **required** — Response body
  - `order_items` · _Object[]_ · **required** — Order item details
    - `reason` · _String_ · **required** — Cancel, Return or other reason, defined in the table sales_order_reason
    - `digital_delivery_info` · _String_ · **required** — Digital delivery information
    - `promised_shipping_time` · _String_ · **required** — Promised shipping time
    - `order_id` · _Number_ · **required** — Order ID
    - `voucher_amount` · _String_ · **required** — Voucher amount
    - `return_status` · _String_ · **required** — Return status
    - `shipping_type` · _String_ · **required** — Shipping type, Drop-shipping or Warehouse
    - `shipment_provider` · _String_ · **required** — Shipment provider
    - `cancel_return_initiator` · _String_ · **optional** — Indicates who initiated the canceled or returned order. Possible values are cancellation-internal, cancellation-customer, customer service-cancel, buyer-cancel, system-cancel, cancellation-failed Delivery, cancellation-seller, return-customer, refund-internal and so on.
    - `variation` · _String_ · **required** — Variation
    - `created_at` · _String_ · **required** — Time of the feed's creation in ISO 8601 format
    - `invoice_number` · _String_ · **required** — Invoice number
    - `shipping_amount` · _String_ · **required** — Shipping fee
    - `currency` · _String_ · **required** — ISO 4217 compatible currency code
    - `shop_id` · _String_ · **required** — Seller name
    - `sku` · _String_ · **required** — Product SKU
    - `voucher_code` · _String_ · **required** — Voucher code
    - `wallet_credits` · _String_ · **required** — Wallet credit
    - `updated_at` · _String_ · **required** — Time of the feed's last update in ISO 8601 format
    - `is_digital` · _Number_ · **required** — Is digital goods or not
    - `tracking_code_pre` · _String_ · **required** — Not used
    - `order_item_id` · _Number_ · **required** — Order item ID
    - `package_id` · _String_ · **required** — Package source ID
    - `tracking_code` · _String_ · **required** — Tracking code
    - `shipping_service_cost` · _Number_ · **required** — Shipping service cost
    - `extra_attributes` · _String_ · **required** — JSON encoded string with extra attributes
    - `paid_price` · _String_ · **required** — Paid price
    - `shipping_provider_type` · _String_ · **required** — One of the following options: Express, Standard, or Economy
    - `product_detail_url` · _String_ · **required** — Product detail URL
    - `shop_sku` · _String_ · **required** — Shop SKU
    - `reason_detail` · _String_ · **required** — Reason detail
    - `purchase_order_id` · _String_ · **required** — Returned by SetPackedByMarketPlace
    - `purchase_order_number` · _String_ · **required** — Returned by SetPackedByMarketPlace
    - `name` · _String_ · **required** — Product name
    - `product_main_image` · _String_ · **required** — Product main image URL
    - `item_price` · _String_ · **required** — Item price
    - `tax_amount` · _String_ · **required** — Tax amount
    - `status` · _String_ · **required** — Status
    - `voucher_platform` · _String_ · **optional** — The voucher that is issued by Lazada
    - `voucher_seller` · _String_ · **optional** — The voucher that is issued by the seller
    - `order_type` · _String_ · **optional** — The fulfillment type of order,it maybe Normal or PreSale.
    - `stage_pay_status` · _String_ · **optional** — The payment status of Presale order at presale stage. The possible values are null, "unpaid" or "unpaid final payment". (unpaid: presale deposit has not been paid; unpaid final payment: presale deposit is paid but final payment / balance due is not paid)
    - `order_flag` · _String_ · **optional** — The type of order, Possible values are GUARANTEE, NORMAL and GLOBAL_COLLECTION. Orders tagged with "GUARANTEE" or "GLOBAL_COLLECTION" have shorter SLA requirement in order fulfillment.
    - `sla_time_stamp` · _String_ · **optional** — Time of the ship SLA in ISO 8601 format(yyyy-MM-dd'T'HH:mm:ssXXX)
    - `warehouse_code` · _String_ · **optional** — Warehouse Code of multi-wh sellers
    - `shipping_fee_original` · _String_ · **optional** — shipping fee original
    - `shipping_fee_discount_seller` · _String_ · **optional** — shipping fee discount from seller
    - `shipping_fee_discount_platform` · _String_ · **optional** — shipping fee discount from platform
    - `voucher_code_seller` · _String_ · **optional** — voucher code from seller
    - `voucher_code_platform` · _String_ · **optional** — voucher code from platform
    - `delivery_option_sof` · _String_ · **optional** — The mark of whether is seller own fleet, values included 1 and 0.
    - `is_fbl` · _String_ · **optional** — The mark of whether is fulfilled by LAZADA, values included 1 and 0.
    - `is_reroute` · _String_ · **optional** — The mark of whether is secondary sale, values included 1 and 0.
    - `voucher_seller_lpi` · _String_ · **optional** — The Lazada Bonus that is sponsored by the seller
    - `voucher_platform_lpi` · _String_ · **optional** — The Lazada Bonus that is sponsored by Lazada
    - `buyer_id` · _String_ · **optional** — Buyer ID
    - `pick_up_store_info` · _Object_ · **optional** — Pick-up Store infos
      - `pick_up_store_name` · _String_ · **optional** — Pick-up Store's name
      - `pick_up_store_address` · _String_ · **optional** — Pick-up Store's address
      - `pick_up_store_code` · _String_ · **optional** — Pick-up Store's id
      - `pick_up_store_open_hour` · _String[]_ · **optional** — Pick-up Store's business hours
    - `sku_id` · _String_ · **optional** — Sku ID
    - `fulfillment_sla` · _String_ · **optional** — fulfillment sla info
    - `priority_fulfillment_tag` · _String_ · **optional** — priority fulfillment tag
    - `gift_wrapping` · _String_ · **optional** — Custom display copywriting on the packaging
    - `show_gift_wrapping_tag` · _Boolean_ · **optional** — Does the gift label show through
    - `personalization` · _String_ · **optional** — For burning custom copywriting
    - `show_personalization_tag` · _Boolean_ · **optional** — Whether to reveal the engraved service mark
    - `payment_time` · _String_ · **optional** — Payment time in milliseconds local time
    - `supply_price` · _String_ · **optional** — supply price for mp3 order
    - `supply_price_currency` · _String_ · **optional** — supply price currency for mp3 order
    - `mp3_order` · _Boolean_ · **optional** — Is it an MP3 order
    - `semi_managed` · _String_ · **optional** — is semiManaged order or not
    - `biz_group` · _Number_ · **optional** — 70100 stands for MP, which means JIT merchants fulfill orders by themselves; 70020 indicates choice is warehouse dispatch, which is JIT PO stocking.
    - `schedule_delivery_start_timeslot` · _Number_ · **optional** — schedule delivery start timeslot
    - `schedule_delivery_end_timeslot` · _Number_ · **optional** — schedule delivery end timeslot
    - `need_cancel_confirm` · _Boolean_ · **optional** — true: seller needs to respond to the cancellation request from buyer
    - `is_cancel_pending` · _Boolean_ · **optional** — true: seller agrees the cancellation request, waiting for logistic system
    - `cancel_trigger_time` · _Number_ · **optional** — If the seller does not respond to cancellation request before this time, the order will auto canceled
    - `reverse_order_id` · _Number_ · **optional** — reverse order id (cancel order main id)
    - `can_escalate_pickup` · _Boolean_ · **optional** — can urge the logistics to pick up parcels
  - `order_number` · _Number_ · **required** — Order number
  - `order_id` · _Number_ · **required** — Order ID

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `37` | E037: One or more order id in the list are incorrect | One or more order IDs specified are not valid. |
| `38` | E038: Too many orders were requested |  The number of orders exceeds the limit.  |
| `39` | E039: No orders were found |  The specified orders are not found. |
| `56` | E056: Invalid OrdersIdList format. Must use array format [1,2] |  The format of the order ID list is not valid. |

**Example**

Request sample 1:

```
order_ids=[42922, 32793]
```

Response sample 1:

```
data={}
```

---

## GetOVOOrders

<a id="orders-ovo-get"></a>

- **Path**: `/orders/ovo/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-19 18:38:45

This interface is only applicable to the merchant side of the business and is used to set the maximum number of SKUs that certain merchants can sell per day

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `tradeOrderIds` · _String_ · **required** — id

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _String_ · **optional** — success or not
  - `tradeOrders` · _Object[]_ · **optional** — trader orders
    - `tradeOrderId` · _Number_ · **optional** — trade order id
    - `paymentMethod` · _String_ · **optional** — payment method
    - `paidTime` · _String_ · **optional** — paid time
    - `tradeOrderLines` · _Object[]_ · **optional** — trade OrderLines
      - `tradeOrderLineId` · _Number_ · **optional** — trade orderLine id
      - `deliveryStatus` · _String_ · **optional** — delivery status
      - `reverseStatus` · _String_ · **optional** — reverse status
      - `deliveredTime` · _String_ · **optional** — delivered time
  - `errorCode` · _String_ · **optional** — error code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
tradeOrderIds=31938200743006
```

Response sample 1:

```
result=result
```

---

## GetOrder

<a id="order-get"></a>

- **Path**: `/order/get`
- **Method**: `get`
- **Last modified**: 2022-07-25 14:52:57

Use this API to get the list of items for a single order.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_id` · _Number_ · **required** — The identifier that was assigned to the order by the Seller Center

**Response parameters**

- `data` · _Object_ · **required** — Response body
  - `address_shipping` · _Object_ · **required** — Node that contains additional nodes, which makes up the shipping address: FirstName, LastName, Phone, Phone2, Address1, Address2, City, PostCode, and Country.
    - `address5` · _String_ · **required** — Third-level address
    - `post_code` · _String_ · **required** — Post code; Note: This value will not be used in Lazada ID
    - `address4` · _String_ · **required** — City name
    - `last_name` · _String_ · **required** — Customer last name
    - `country` · _String_ · **required** — Country
    - `address3` · _String_ · **required** — State name
    - `address2` · _String_ · **required** — Not used for now
    - `city` · _String_ · **required** — City name
    - `address1` · _String_ · **required** — Detailed address
    - `phone2` · _String_ · **required** — Backup phone number
    - `first_name` · _String_ · **required** — Customer first name
    - `phone` · _String_ · **required** — Phone number
    - `addressDistrict` · _String_ · **optional** — District
  - `customer_last_name` · _String_ · **required** — Customer last name
  - `gift_option` · _Boolean_ · **required** — 1 if item is a gift, and 0 if it is not.
  - `voucher_code` · _String_ · **required** — Voucher code
  - `updated_at` · _String_ · **required** — Date and time of the last change to the order.
  - `delivery_info` · _String_ · **required** — Order delivery information.
  - `gift_message` · _String_ · **required** — Gift message as specified by the customer
  - `branch_number` · _String_ · **required** — (For Thailand only) The tax branch code for corporate customers, provided by the customer when placing the order.
  - `tax_code` · _String_ · **required** — (For Thailand and Vietnam only) The customer's VAT tax code, provided by the customer when placing the order.
  - `extra_attributes` · _String_ · **required** — Extra attributes which were passed to the Seller Center on getMarketPlaceOrders call.
  - `shipping_fee` · _String_ · **required** — Shipping fee
  - `customer_first_name` · _String_ · **required** — Customer first name
  - `payment_method` · _String_ · **required** — The method of payment.
  - `statuses` · _String[]_ · **required** — Unique status of the items in the order
  - `remarks` · _String_ · **required** — A human-readable remark
  - `order_number` · _Number_ · **required** — The order number
  - `order_id` · _Number_ · **required** — Identifier of this order as assigned by the Seller Center
  - `voucher` · _String_ · **required** — Voucher amount
  - `national_registration_number` · _String_ · **required** — Required in some countries
  - `promised_shipping_times` · _String_ · **required** — Promised shipping time
  - `items_count` · _Number_ · **required** — Number of items in the order
  - `created_at` · _String_ · **required** — Date and time when the order was placed
  - `price` · _String_ · **required** — Total amount for this order
  - `address_billing` · _Object_ · **required** — Node that contains additional nodes, which makes up the shipping address: FirstName, LastName, Phone, Phone2, Address1, Address2, City, PostCode, and Country
    - `address3` · _String_ · **required** — State name
    - `address2` · _String_ · **required** — Not used for now
    - `city` · _String_ · **required** — City name
    - `address1` · _String_ · **required** — Detailed address
    - `phone2` · _String_ · **required** — Backup phone number
    - `first_name` · _String_ · **required** — Customer first name
    - `phone` · _String_ · **required** — Phone number
    - `address5` · _String_ · **required** — Third-level address
    - `post_code` · _String_ · **required** — Post code; Note: This value will not be used in Lazada ID
    - `address4` · _String_ · **required** — City name
    - `last_name` · _String_ · **required** — Customer last name
    - `country` · _String_ · **required** — Country
    - `addressDistrict` · _String_ · **optional** — District
  - `warehouse_code` · _String_ · **optional** — Warehouse Code of multi-wh sellers
  - `shipping_fee_original` · _String_ · **optional** — shipping fee original
  - `shipping_fee_discount_seller` · _String_ · **optional** — shipping fee discount from seller
  - `shipping_fee_discount_platform` · _String_ · **optional** — shipping fee discount from platform
  - `buyer_note` · _String_ · **optional** — buyer note
  - `recipient_info` · _Object_ · **optional** — Information filled in by the buyer when placing an order
    - `passport_no` · _String_ · **optional** — passport number
    - `identify_no` · _String_ · **optional** — identify card number
    - `detail_address` · _String_ · **optional** — recipient address
  - `need_cancel_confirm` · _Boolean_ · **optional** — true: seller needs to respond to the cancellation request from buyer
  - `is_cancel_pending` · _Boolean_ · **optional** — true: seller agrees the cancellation request, waiting for logistic system

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `16` | E016: "%s" Invalid Order ID |  The specified order ID is not valid. |
| `6` | E006: System Error | System Error |
| `16` | Invalid Order ID | The order number in the request does not exist in the current store, please call GetOrders API to synchronize the order list first, or call GetSeller API to check if you are using the access token of the corresponding store. |
| `16` | Invalid Order ID | The order number in the request does not exist in the current store, please call GetOrders API to synchronize the order list first, or call GetSeller API to check if you are using the access token of the corresponding store. |
| `16` | Invalid Order ID | The order number in the request does not exist in the current store, please call GetOrders API to synchronize the order list first, or call GetSeller API to check if you are using the access token of the corresponding store. |

**Example**

Request sample 1:

```
order_id=16090
```

Response sample 1:

```
data={}
```

---

## GetOrderItems

<a id="order-items-get"></a>

- **Path**: `/order/items/get`
- **Method**: `get`
- **Last modified**: 2022-07-21 15:05:05

Use this API to get the item information of an order.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_id` · _Number_ · **required** — The identifier that was assigned to the order by the Seller Center.

**Response parameters**

- `data` · _Object[]_ · **required** — Response body
  - `pick_up_store_info` · _Object_ · **optional** — Pick-up Store infos
    - `pick_up_store_name` · _String_ · **optional** — Pick-up Store's name
    - `pick_up_store_address` · _String_ · **optional** — Pick-up Store's address
    - `pick_up_store_code` · _String_ · **optional** — Pick-up Store's id
    - `pick_up_store_open_hour` · _String[]_ · **optional** — Pick-up Store's business hours
  - `purchase_order_number` · _String_ · **required** — Returned when calling SetPackedByMarketPlace
  - `name` · _String_ · **required** — Product name
  - `product_main_image` · _String_ · **required** — Product main image URL
  - `item_price` · _String_ · **required** — Product price
  - `tax_amount` · _String_ · **required** — Tax amount
  - `status` · _String_ · **required** — Status
  - `cancel_return_initiator` · _String_ · **optional** — Indicates who initiated the canceled or returned order. Possible values are cancellation-internal, cancellation-customer, cancellation-failed Delivery, cancellation-seller, return-customer, and refund-internal.
  - `voucher_platform` · _String_ · **optional** — The voucher that is issued by Lazada
  - `voucher_seller` · _String_ · **optional** — The voucher that is issued by the seller
  - `order_type` · _String_ · **optional** — The type of order，maybe Normal, PreSale, Coupon, O2O or InStoreO2O
  - `stage_pay_status` · _String_ · **optional** — The payment status of Presale order at presale stage. The possible values are null, "unpaid" or "unpaid final payment". (unpaid: presale deposit has not been paid; unpaid final payment: presale deposit is paid but final payment / balance due is not paid)
  - `warehouse_code` · _String_ · **optional** — Warehouse Code of multi-wh sellers
  - `voucher_seller_lpi` · _String_ · **optional** — The Lazada Bonus that is sponsored by the seller
  - `voucher_platform_lpi` · _String_ · **optional** — The Lazada Bonus that is sponsored by Lazada
  - `buyer_id` · _String_ · **optional** — Buyer ID
  - `shipping_fee_original` · _String_ · **optional** — shipping fee original
  - `shipping_fee_discount_seller` · _String_ · **optional** — shipping fee discount from seller
  - `shipping_fee_discount_platform` · _String_ · **optional** — shipping fee discount from platform
  - `voucher_code_seller` · _String_ · **optional** — voucher code from seller
  - `voucher_code_platform` · _String_ · **optional** — voucher code from platform
  - `delivery_option_sof` · _String_ · **optional** — The mark of whether is seller own fleet, values included 1 and 0.
  - `is_fbl` · _String_ · **optional** — The mark of whether is fulfilled by LAZADA, values included 1 and 0.
  - `is_reroute` · _String_ · **optional** — The mark of whether is secondary sale, values included 1 and 0.
  - `reason` · _String_ · **required** — Cancel, Return or other reason, defined in the table sales_order_reason
  - `digital_delivery_info` · _String_ · **required** — Digital deliery information
  - `promised_shipping_time` · _String_ · **required** — Promised shipping time
  - `order_id` · _String_ · **required** — Order ID
  - `voucher_amount` · _String_ · **required** — Voucher amount
  - `return_status` · _String_ · **required** — Return status
  - `shipping_type` · _String_ · **required** — Shipping type, Drop-shipping or Warehouse
  - `shipment_provider` · _String_ · **required** — 3PL shipment provider, such as LEX
  - `variation` · _String_ · **required** — Variation
  - `created_at` · _String_ · **required** — Time of the feed's creation in ISO 8601 format
  - `invoice_number` · _String_ · **required** — Invoice number
  - `shipping_amount` · _String_ · **required** — Shipping fee
  - `currency` · _String_ · **required** — ISO 4217 compatible currency code
  - `order_flag` · _String_ · **optional** — The type of order, Possible values are GUARANTEE, NORMAL and GLOBAL_COLLECTION. Orders tagged with "GUARANTEE" or "GLOBAL_COLLECTION" have shorter SLA requirement in order fulfillment.
  - `shop_id` · _String_ · **required** — Seller name
  - `sla_time_stamp` · _String_ · **optional** — Time of the ship SLA in ISO 8601 format(yyyy-MM-dd'T'HH:mm:ssXXX)
  - `sku` · _String_ · **required** — Product SKU
  - `voucher_code` · _String_ · **required** — Not used
  - `wallet_credits` · _String_ · **required** — Wallet credit
  - `updated_at` · _String_ · **required** — Time of the feed's last update in ISO 8601 format
  - `is_digital` · _Number_ · **required** — Is digital goods or not
  - `tracking_code_pre` · _String_ · **required** — Not used
  - `order_item_id` · _Number_ · **required** — Order item ID
  - `package_id` · _String_ · **required** — Package source ID
  - `tracking_code` · _String_ · **required** — Tracking code retrieved from 3PL shipment provider
  - `shipping_service_cost` · _Number_ · **required** — Shipping service cost
  - `extra_attributes` · _String_ · **required** — JSON encoded string with extra attributes
  - `paid_price` · _String_ · **required** — Paid price
  - `shipping_provider_type` · _String_ · **required** — One of the following options: EXPRESS, STANDARD, ECONOMY, INSTANT, SELLER_OWN_FLEET, PICKUP_IN_STORE or DIGITAL
  - `product_detail_url` · _String_ · **required** — Product detail URL
  - `shop_sku` · _String_ · **required** — Product outer ID
  - `reason_detail` · _String_ · **required** — Reason detail
  - `purchase_order_id` · _String_ · **required** — Returned when calling SetPackedByMarketPlace
  - `sku_id` · _String_ · **optional** — Sku ID
  - `product_id` · _String_ · **optional** — Product ID
  - `fulfillment_sla` · _String_ · **optional** — fulfillment sla info
  - `priority_fulfillment_tag` · _String_ · **optional** — priority fulfillment tag
  - `gift_wrapping` · _String_ · **optional** — Custom display copywriting on the packaging
  - `show_giftwrapping_tag` · _Boolean_ · **optional** — Is the gift label visible
  - `personalization` · _String_ · **optional** — Engraving service, for engraving custom copywriting
  - `show_personalization_tag` · _Boolean_ · **optional** — Whether to reveal the engraved service mark
  - `payment_time` · _Number_ · **optional** — Payment time in milliseconds local time
  - `supply_price` · _String_ · **optional** — supply price for mp3 order
  - `supply_price_currency` · _String_ · **optional** — supply price currency for mp3 order
  - `mp3_order` · _Boolean_ · **optional** — is mp3 order or not
  - `semi_managed` · _Boolean_ · **optional** — is semiManaged order or not
  - `biz_group` · _Number_ · **optional** — 70100 stands for MP, which means JIT merchants fulfill orders by themselves; 70020 indicates choice is warehouse dispatch, which is JIT PO stocking.
  - `schedule_delivery_start_timeslot` · _Number_ · **optional** — schedule delivery start timeslot
  - `schedule_delivery_end_timeslot` · _Number_ · **optional** — schedule delivery end timeslot
  - `need_cancel_confirm` · _Boolean_ · **optional** — true: seller needs to respond to the cancellation request from buyer
  - `is_cancel_pending` · _Boolean_ · **optional** — true: seller agrees the cancellation request, waiting for logistic system
  - `cancel_trigger_time` · _Number_ · **optional** — If the seller does not respond to cancellation request before this time, the order will auto canceled
  - `reverse_order_id` · _Number_ · **optional** — reverse order id (cancel order main id)
  - `can_escalate_pickup` · _Boolean_ · **optional** — can urge the logistics to pick up parcels

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `16` | E016: "%s" Invalid Order ID |  The specified order ID is not valid. |
| `6` | E006: System Error | System Error |
| `16` | Invalid Order ID | The order number in the request does not exist in the current store, please call GetOrders API to synchronize the order list first, or call GetSeller API to check if you are using the access token of the corresponding store. |
| `16` | Invalid Order ID | The order number in the request does not exist in the current store, please call GetOrders API to synchronize the order list first, or call GetSeller API to check if you are using the access token of the corresponding store. |
| `16` | Invalid Order ID | The order number in the request does not exist in the current store, please call GetOrders API to synchronize the order list first, or call GetSeller API to check if you are using the access token of the corresponding store. |

**Example**

Request sample 1:

```
order_id=31202
```

Response sample 1:

```
data={}
```

---

## GetOrders

<a id="orders-get"></a>

- **Path**: `/orders/get`
- **Method**: `get`
- **Last modified**: 2022-07-25 14:53:01

Use this API to get the list of items for a range of orders1..

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `update_before` · _String_ · **optional** — Limits the returned orders to those updated before or on the specified date, given in ISO 8601 date format. Optional.
- `sort_direction` · _String_ · **optional** — Specify the sorting type. Possible values are ASC and DESC.
- `offset` · _Number_ · **optional** — Number of orders to skip at the beginning of the list.
- `limit` · _Number_ · **optional** — The maximum number of orders that can be returned. The supported maximum number is 100.
- `update_after` · _String_ · **optional** — Limits the returned orders to those updated after or on the specified date, given in ISO 8601 date format. Either UpdatedAfter or CreatedAfter is mandatory.
- `sort_by` · _String_ · **optional** — Allows to choose the sorting column. Possible values are created_at and updated_at.
- `created_before` · _String_ · **optional** — Limits the returned orders to those updated before or on the specified date, given in ISO 8601 date format. Optional.
- `created_after` · _String_ · **optional** — Limits the returned orders to those updated after or on the specified date, given in ISO 8601 date format. Either UpdatedAfter or CreatedAfter is mandatory.
- `status` · _String_ · **optional** — When set, limits the returned set of orders to loose orders, which return only entries which fit the status provided. Possible values are unpaid, pending, canceled, ready_to_ship, delivered, returned, shipped , failed, topack,toship,shipping and lost

**Response parameters**

- `data` · _Object_ · **required** — Response body
  - `countTotal` · _Number_ · **optional** — Displayed in the Head section, this number tells the complete number of all orders for the current filter set in the database.
  - `count` · _Number_ · **required** — Displayed in the Head section, this number tells the complete number of all orders for the current filter set in the database(included offset and limit).
  - `orders` · _Object[]_ · **required** — Order details
    - `branch_number` · _String_ · **required** — (For Thailand only) The tax branch code for corporate customers, provided by the customer when placing the order.
    - `tax_code` · _String_ · **required** — (For Thailand and Vietnam only) The customer's VAT tax code, provided by the customer when placing the order.
    - `extra_attributes` · _String_ · **required** — Extra attributes which were passed to the Seller Center on getMarketPlaceOrders call.
    - `address_updated_at` · _String_ · **required** — Address updated at
    - `shipping_fee` · _String_ · **required** — Total shipping fee for this order.
    - `customer_first_name` · _String_ · **required** — Customer first name
    - `payment_method` · _String_ · **required** — The method of the payment. For details, see <a href='https://open.lazada.com/apps/doc/doc?nodeId=29616&docId=121753' target='_brank'>Payment method options</a>.
    - `statuses` · _String[]_ · **required** — An array of unique status of the items in the order. You can find all of the different status codes in the response example.
    - `remarks` · _String_ · **required** — Remarks
    - `order_number` · _String_ · **required** — Represents the order ID
    - `order_id` · _String_ · **required** — Represents the order ID
    - `voucher` · _String_ · **required** — Total voucher for this order.
    - `national_registration_number` · _String_ · **required** — National registration number. Required in some countries.
    - `promised_shipping_times` · _String_ · **required** — Target shipping time for the soonest order item if they are available.
    - `items_count` · _Number_ · **required** — Number of items in order.
    - `voucher_platform` · _String_ · **optional** — The voucher that is issued by Lazada
    - `voucher_seller` · _String_ · **optional** — The voucher that is issued by the seller
    - `created_at` · _String_ · **required** — Date and time when the order was placed.
    - `price` · _String_ · **required** — Total amount for this order.Not the final transaction price of the order, excluding voucher and shipping_fee
    - `address_billing` · _Object_ · **required** — Node that contains additional nodes, which makes up the billing address: FirstName, LastName, Phone, Phone2, Address1, Address2, City, PostCode, and Country.
      - `address1` · _String_ · **required** — Detailed address
      - `phone2` · _String_ · **required** — Backup phone number
      - `first_name` · _String_ · **required** — Customer first name
      - `phone` · _String_ · **required** — Phone number
      - `address5` · _String_ · **required** — Third-level address
      - `post_code` · _String_ · **required** — Post code; Note: This value will not be used in Lazada ID
      - `address4` · _String_ · **required** — City name
      - `last_name` · _String_ · **required** — Customer last name
      - `country` · _String_ · **required** — Country
      - `address3` · _String_ · **required** — State name
      - `address2` · _String_ · **required** — Not used for now
      - `city` · _String_ · **required** — City name
      - `addressDsitrict` · _String_ · **optional** — Dsitrict
    - `warehouse_code` · _String_ · **optional** — Warehouse Code of multi-wh sellers
    - `shipping_fee_original` · _String_ · **optional** — the original shipping fee which are supposed to be charged to the customer, before any type of shipping fee promotion
    - `shipping_fee_discount_seller` · _String_ · **optional** — shipping fee discount from seller
    - `shipping_fee_discount_platform` · _String_ · **optional** — shipping fee discount from platform
    - `address_shipping` · _Object_ · **required** — Node that contains additional nodes, which makes up the shipping address: FirstName, LastName, Phone, Phone2, Address1, Address2, City, PostCode, and Country.
      - `address1` · _String_ · **required** — Detailed address
      - `phone2` · _String_ · **required** — Backup phone number
      - `first_name` · _String_ · **required** — Customer first name
      - `phone` · _String_ · **required** — Phone number
      - `address5` · _String_ · **required** — Third-level address
      - `post_code` · _String_ · **required** — Post code; Note: This value will not be used in Lazada ID
      - `address4` · _String_ · **required** — City name
      - `last_name` · _String_ · **required** — Customer last name
      - `country` · _String_ · **required** — Country
      - `address3` · _String_ · **required** — State name
      - `address2` · _String_ · **required** — Not used for now
      - `city` · _String_ · **required** — City name
      - `addressDsitrict` · _String_ · **optional** — Dsitrict
    - `customer_last_name` · _String_ · **required** — Empty for now. See cutomer_first_name.
    - `gift_option` · _String_ · **required** — 1 if item is a gift, and 0 if it is not.
    - `voucher_code` · _String_ · **required** — The returned value is Voucher id
    - `updated_at` · _String_ · **required** — Date and time of the last change to the order.
    - `delivery_info` · _String_ · **required** — Delivery information
    - `gift_message` · _String_ · **required** — Gift message as specified by the customer.
    - `buyer_note` · _String_ · **optional** — buyer note
    - `recipient_info` · _Object_ · **optional** — Information filled in by the buyer when placing an order
      - `passport_no` · _String_ · **optional** — passport number
      - `identify_no` · _String_ · **optional** — identify card number
      - `detail_address` · _String_ · **optional** — recipient address
    - `need_cancel_confirm` · _Boolean_ · **optional** — true: seller needs to respond to the cancellation request from buyer
    - `is_cancel_pending` · _String_ · **optional** — true: seller agrees the cancellation request, waiting for logistic system

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `14` | E014: "%s" Invalid Offset |  The value for the offset parameter is not valid. |
| `17` | E017: "%s" Invalid Date Format |  The date format is not valid. |
| `19` | E019: "%s" Invalid Limit |  The value for the limit parameter is not valid. |
| `36` | E036: Invalid status filter |  The specified status filter is not valid. |
| `74` | E074: Invalid sort direction. |   The specified sort direction is not valid. |
| `75` | E075: Invalid sort filter. |   The specified sort filter is not valid. |
| `SellerNotVerified` | Seller not verified,please check seller status | The seller's store opening process has not been completed, please log in to the Seller Center, check the store information that needs to be improved on the home page and submit it for review. |
| `SellerNotVerified` | Seller not verified,please check seller status | The seller's store opening process has not been completed, please log in to the Seller Center, check the store information that needs to be improved on the home page and submit it for review. |
| `6` | Invalid status filter | The status field value is incorrect and only these enumerations are currently supported:unpaid, pending, packed, canceled, ready_to_ship, delivered, returned, shipped , failed, topack,toship , lost, lost_by_3pl, damaged_by_3pl, failed_delivery, shipped_back, shipped_back_success, shipped_back_failed, package_scrapped. |
| `17` | Invalid Date Format | The time format used in the request is incorrect, please make sure your time format meets this format requirement: YYYY-MM-DDTHH:mm:ss±HH:MM. |

**Example**

Request sample 1:

```
update_before=2018-02-10T16:00:00+08:00
sort_direction=DESC
offset=0
limit=10
update_after=2017-02-10T09:00:00+08:00
sort_by=updated_at
created_before=2018-02-10T16:00:00+08:00
created_after=2017-02-10T09:00:00+08:00
status=shipped
```

Response sample 1:

```
data={}
```

---

## OrderCancelValidate

<a id="order-reverse-cancel-validate"></a>

- **Path**: `/order/reverse/cancel/validate`
- **Method**: `get`
- **Last modified**: 2022-08-01 18:01:08

Seller can check whether the order can be canceled through this API and get corresponding reasons if not.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_id` · _String_ · **required** — order id
- `order_item_id_list` · _String[]_ · **required** — all order items need to be cancel

**Response parameters**

- `data` · _Object_ · **optional** — data
  - `tip_content` · _String_ · **optional** — tip content when cancel order
  - `tip_type` · _String_ · **optional** — warn or error
  - `reason_options` · _Object[]_ · **optional** — reason options
    - `reason_name` · _String_ · **optional** — reason name
    - `reason_id` · _String_ · **optional** — Since the cancellation reasons supported by each order may be different, if you want reason_id, you need to call this interface to get

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
| `106` | E0106: ROC internal error | E0106: ROC internal error |
| `115` | E0115: order id is null | E0115: order id is null |
| `116` | E0116: no seller id | E0116: no seller id |
| `117` | E0117: no user id | E0117: no user id |
| `118` | E0118: no user email | E0118: no user email |
| `122` | E0122: invalid trade order  | E0122: invalid trade order  |
| `123` | E0123: invalid trade order lines %s | E0123: invalid trade order lines %s |
| `124` | E0124: invalid seller id for this order line %s | E0124: invalid seller id for this order line %s |

**Example**

Request sample 1:

```
order_id=0
order_item_id_list=[]
```

Response sample 1:

```
data={}
```

---

## SetInvoiceNumber

<a id="order-invoice-number-set"></a>

- **Path**: `/order/invoice_number/set`
- **Method**: `post`
- **Last modified**: 2022-07-18 20:00:40

Use this API to set the invoice number for the specified order.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_item_id` · _Number_ · **required** — Identifier of the order item.
- `invoice_number` · _String_ · **required** — The invoice number.

**Response parameters**

- `data` · _Object_ · **required** — Response body
  - `order_item_id` · _Number_ · **optional** — Identifier of the order item.
  - `invoice_number` · _String_ · **optional** — The invoice number.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `20` | "E020: 59871357123 Invalid Order Item ID" | Order Item ID is incorrect, please verify |
| `34` | "E034: Order Item must be packed. Please call setStatusToReadyToShip before" | Canceled or pending orders are not allowed to call this API |

**Example**

Request sample 1:

```
order_item_id=123
invoice_number=INV-20
```

Response sample 1:

```
data={}
```

---

