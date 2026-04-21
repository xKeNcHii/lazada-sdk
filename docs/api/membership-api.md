# Membership API

## GetLinkMember

<a id="membership-linkmember-get"></a>

- **Path**: `/membership/linkmember/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-22 14:54:54

Query the linkmember relationship between buyers and sellers.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `seller_id` · _String_ · **required** — seller id
- `buyer_id` · _String_ · **required** — buyer id

**Response parameters**

- `result` · _Object_ · **required** — result
  - `module` · _Object_ · **required** — data
    - `seller_id` · _Number_ · **required** — seller id
    - `buyer_id` · _Number_ · **required** — buyer id
    - `partneruser_id` · _String_ · **required** — partnerUser id

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `LZD_MEMBER_USER_1011` | LZD_MEMBER_USER_1011 | The buyer id does not exist, call the PartnerTransaction API to query if you are using the correct buyer id. |

**Example**

Request sample 1:

```
seller_id=1141746107123
buyer_id=1002820096123
```

Response sample 1:

```
result={}
```

---

## GetLinkMember

<a id="partner-get"></a>

- **Path**: `/partner/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-10-11 15:48:49

Query the linkmember relationship between buyers and sellers.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `buyer_id` · _String_ · **required** — buyer id

**Response parameters**

- `result` · _Object_ · **required** — result
  - `module` · _Object_ · **required** — data
    - `seller_id` · _Number_ · **required** — seller id
    - `buyer_id` · _Number_ · **required** — buyer id
    - `partneruser_id` · _String_ · **required** — partnerUser id

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `LZD_MEMBER_USER_1011` | LZD_MEMBER_USER_1011 | The buyer id does not exist, call the PartnerTransaction API to query if you are using the correct buyer id. |

**Example**

Request sample 1:

```
buyer_id=1002820096123
```

Response sample 1:

```
result={}
```

---

## GetLinkMemberList

<a id="membership-linkmember-list"></a>

- **Path**: `/membership/linkmember/list`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-01 09:36:47

Query all linkmembers of the seller

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `page_num` · _String_ · **required** — page number
- `page_size` · _String_ · **required** — page size
- `seller_id` · _String_ · **required** — seller id

**Response parameters**

- `result` · _Object_ · **required** — result
  - `model_list` · _Object[]_ · **required** — data list
    - `seller_id` · _Number_ · **required** — seller id
    - `buyer_id` · _Number_ · **required** — buyer id
    - `partneruser_id` · _String_ · **required** — partneruser id
  - `total_count` · _Number_ · **required** — total count

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
page_num=1
page_size=10
seller_id=11417461071234
```

Response sample 1:

```
result={}
```

---

## GetLinkMemberList

<a id="partner-list"></a>

- **Path**: `/partner/list`
- **Method**: `GET/POST`
- **Last modified**: 2022-10-11 19:38:26

Query all linkmembers of the seller

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `page_num` · _String_ · **required** — page number
- `page_size` · _String_ · **required** — page size

**Response parameters**

- `result` · _Object_ · **required** — result
  - `model_list` · _Object[]_ · **required** — data list
    - `seller_id` · _Number_ · **required** — seller id
    - `buyer_id` · _Number_ · **required** — buyer id
    - `partneruser_id` · _String_ · **required** — partneruser id
  - `total_count` · _Number_ · **required** — total count

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
page_num=1
page_size=10
```

Response sample 1:

```
result={}
```

---

## LinkMembership

<a id="membership-link"></a>

- **Path**: `/membership/link`
- **Method**: `post`
- **Last modified**: 2022-07-29 16:04:43

Used to push a new membership to Lazada for proactively linking memberships.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `p_uid` · _String_ · **required** — A unique identifier of the member on partner side, generated and stored at partner side, that identifies that member and will be referenced by Lazada in further communications.
- `member_name` · _String_ · **optional** — Name of member on partner side, to easier identify the membership on My Account pages
- `tier` · _String_ · **optional** — Customer’s tier in partner side, shown as-is
- `tier_expiry` · _String_ · **optional** — Expiry of the membership, shown as-is
- `balance` · _Number_ · **optional** — Balance of the membership.
- `valid_from` · _String_ · **optional** — Valid from of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance
- `valid_to` · _String_ · **optional** — Valid to of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance
- `linking_token` · _String_ · **required** — Linking token.

**Response parameters**

- `result` · _Object_ · **required** — 1
  - `success` · _Boolean_ · **required** — 1
  - `data` · _Object_ · **required** — 1
  - `error_code` · _String_ · **required** — 1
    - `display_message` · _String_ · **required** — 1
    - `key` · _String_ · **required** — 1

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
p_uid=123456
member_name=Marie Curie
tier=GOLD
tier_expiry=2019-10-02T15:00:00Z
balance=6000
valid_from=2019-10-02T15:00:00Z
valid_to=2019-10-02T15:00:00Z
linking_token=ndi9ah0s9e7902377923470
```

Response sample 1:

```
result=1
```

---

## PartnerLink

<a id="partner-link"></a>

- **Path**: `/partner/link`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 16:05:11

Used to push a new membership to Lazada for proactively linking memberships.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `member_name` · _String_ · **optional** — Name of member on partner side, to easier identify the membership on My Account pages
- `valid_from` · _String_ · **optional** — Valid from of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance
- `linking_token` · _String_ · **required** — Linking token.
- `tier` · _String_ · **optional** — Customer’s tier in partner side, shown as-is
- `balance` · _Number_ · **optional** — Balance of the membership.
- `tier_expiry` · _String_ · **optional** — Expiry of the membership, shown as-is
- `p_uid` · _String_ · **required** — A unique identifier of the member on partner side, generated and stored at partner side, that identifies that member and will be referenced by Lazada in further communications.
- `valid_to` · _String_ · **optional** — Valid to of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance
- `from_source` · _String_ · **optional** — Where does this user come from.LAZADA or PARTNER

**Response parameters**

- `result` · _Object_ · **optional** — api result
  - `success` · _Boolean_ · **optional** — whether the call succeed
  - `module` · _Object_ · **optional** — result data
  - `errorCode` · _Object_ · **optional** — result error
    - `displayMessage` · _String_ · **optional** — result error detail
    - `key` · _String_ · **optional** — result error key

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
member_name=Marie Curie
valid_from=2019-10-02T15:00:00Z
linking_token=ndi9ah0s9e7902377923470
tier=GOLD
balance=6000
tier_expiry=2019-10-02T15:00:00Z
p_uid=123456
valid_to=2019-10-02T15:00:00Z
from_source=LAZADA
```

Response sample 1:

```
result={"module":{"partnerUid":"test_partneruid","status":"ACTIVE"},"notSuccess":false,"success":true}
```

---

## PartnerTransaction

<a id="partner-transaction"></a>

- **Path**: `/partner/transaction`
- **Method**: `GET/POST`
- **Last modified**: 2022-10-09 16:23:51

Using this interface, you can obtain the seller's transaction order based on the conditions, and also contain the membership information

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `status` · _String_ · **optional** — When set, limits the returned set of orders to loose orders, which return only entries which fit the status provided. Possible values are unpaid, pending, canceled, ready_to_ship, delivered, returned, shipped , failed, topack,toship,shipping and lost
- `update_before` · _String_ · **optional** — Limits the returned orders to those updated before or on the specified date, given in ISO 8601 date format. Optional.
- `sort_direction` · _String_ · **optional** — Specify the sorting type. Possible values are ASC and DESC.
- `offset` · _Number_ · **optional** — Number of orders to skip at the beginning of the list.
- `limit` · _Number_ · **optional** — The maximum number of orders that can be returned. The supported maximum number is 100.
- `update_after` · _String_ · **optional** — Limits the returned orders to those updated after or on the specified date, given in ISO 8601 date format. Either UpdatedAfter or CreatedAfter is mandatory.
- `sort_by` · _String_ · **optional** — Allows to choose the sorting column. Possible values are created_at and updated_at.
- `created_before` · _String_ · **optional** — Limits the returned orders to those updated before or on the specified date, given in ISO 8601 date format. Optional.
- `created_after` · _String_ · **optional** — Limits the returned orders to those updated after or on the specified date, given in ISO 8601 date format. Either UpdatedAfter or CreatedAfter is mandatory.

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `model_list` · _Object[]_ · **optional** — data list
    - `shipping_fee_original` · _String_ · **optional** — the original shipping fee which are supposed to be charged to the customer, before any type of shipping fee promotion
    - `shipping_fee_discount_seller` · _String_ · **optional** — shipping fee discount from seller
    - `shipping_fee_discount_platform` · _String_ · **optional** — shipping fee discount from platform
    - `address_shipping` · _Object_ · **optional** — Node that contains additional nodes, which makes up the shipping address: FirstName, LastName, Phone, Phone2, Address1, Address2, City, PostCode, and Country.
      - `address1` · _String_ · **optional** — Detailed address
      - `phone2` · _String_ · **optional** — Backup phone number
      - `first_name` · _String_ · **optional** — Customer first name
      - `phone` · _String_ · **optional** — Phone number
      - `address5` · _String_ · **optional** — Third-level address
      - `post_code` · _String_ · **optional** — Post code; Note: This value will not be used in Lazada ID
      - `address4` · _String_ · **optional** — City name
      - `last_name` · _String_ · **optional** — Customer last name
      - `country` · _String_ · **optional** — country
      - `address3` · _String_ · **optional** — State name
      - `address2` · _String_ · **optional** — Not used for now
      - `city` · _String_ · **optional** — City name
    - `customer_last_name` · _String_ · **optional** — Empty for now. See cutomer_first_name.
    - `gift_option` · _String_ · **optional** — 1 if item is a gift, and 0 if it is not.
    - `voucher_code` · _String_ · **optional** — The returned value is Voucher id
    - `updated_at` · _String_ · **optional** — Date and time of the last change to the order.
    - `delivery_info` · _String_ · **optional** — Delivery information
    - `gift_message` · _String_ · **optional** — Gift message as specified by the customer.
    - `member_sub_order_list` · _Object[]_ · **optional** — the membership info and subOrder info
      - `buyer_id` · _Number_ · **optional** — buyer id
      - `partner_user_id` · _String_ · **optional** — partnerUser id
      - `seller_id` · _String_ · **optional** — seller id
      - `pick_up_store_info` · _Object_ · **optional** — Pick-up Store infos
        - `pick_up_store_name` · _String_ · **optional** — Pick-up Store's name
        - `pick_up_store_address` · _String_ · **optional** — Pick-up Store's address
        - `pick_up_store_code` · _String_ · **optional** — Pick-up Store's id
        - `pick_up_store_open_hour` · _String[]_ · **optional** — Pick-up Store's business hours
      - `purchase_order_number` · _String_ · **optional** — Returned when calling SetPackedByMarketPlace
      - `name` · _String_ · **optional** — Product name
      - `product_main_image` · _String_ · **optional** — Product main image URL
      - `item_price` · _String_ · **optional** — Product price
      - `tax_amount` · _String_ · **optional** — Tax amount
      - `status` · _String_ · **optional** — canceled
      - `cancel_return_initiator` · _String_ · **optional** — cancellation-customer
      - `voucher_platform` · _String_ · **optional** — The voucher that is issued by Lazada
      - `voucher_seller` · _String_ · **optional** — The voucher that is issued by the seller
      - `order_type` · _String_ · **optional** — The type of order，maybe Normal, PreSale, Coupon, O2O or InStoreO2O
      - `stage_pay_status` · _String_ · **optional** — The payment status of Presale order at presale stage. The possible values are null, "unpaid" or "unpaid final payment". (unpaid: presale deposit has not been paid; unpaid final payment: presale deposit is paid but final payment / balance due is not paid)
      - `warehouse_code` · _String_ · **optional** — Warehouse Code of multi-wh sellers
      - `voucher_seller_lpi` · _String_ · **optional** — The Lazada Bonus that is sponsored by the seller
      - `voucher_platform_lpi` · _String_ · **optional** — The Lazada Bonus that is sponsored by Lazada
      - `shipping_fee_original` · _String_ · **optional** — shipping fee original
      - `shipping_fee_discount_seller` · _String_ · **optional** — shipping fee discount from seller
      - `shipping_fee_discount_platform` · _String_ · **optional** — shipping fee discount from platform
      - `voucher_code_seller` · _String_ · **optional** — voucher code from seller
      - `voucher_code_platform` · _String_ · **optional** — voucher code from platform
      - `is_fbl` · _Number_ · **optional** — The mark of whether is fulfilled by LAZADA, values included 1 and 0.
      - `is_reroute` · _Number_ · **optional** — The mark of whether is secondary sale, values included 1 and 0.
      - `reason` · _String_ · **optional** — Cancel, Return or other reason, defined in the table sales_order_reason
      - `digital_delivery_info` · _String_ · **optional** — Digital deliery information
      - `promised_shipping_time` · _String_ · **optional** — Promised shipping time
      - `order_id` · _Number_ · **optional** — order id
      - `voucher_amount` · _String_ · **optional** — Voucher amount
      - `return_status` · _String_ · **optional** — Return status
      - `shipping_type` · _String_ · **optional** — Shipping type, Drop-shipping or Warehouse
      - `shipment_provider` · _String_ · **optional** — 3PL shipment provider, such as LEX
      - `variation` · _String_ · **optional** — variation
      - `created_at` · _String_ · **optional** — Time of the feed's creation in ISO 8601 format
      - `invoice_number` · _String_ · **optional** — Invoice number
      - `shipping_amount` · _String_ · **optional** — Shipping fee
      - `currency` · _String_ · **optional** — SGD
      - `order_flag` · _String_ · **optional** — The type of order, Possible values are GUARANTEE, NORMAL and GLOBAL_COLLECTION. Orders tagged with "GUARANTEE" or "GLOBAL_COLLECTION" have shorter SLA requirement in order fulfillment.
      - `shop_id` · _String_ · **optional** — dawen dp
      - `sla_time_stamp` · _String_ · **optional** — Time of the ship SLA in ISO 8601 format(yyyy-MM-dd'T'HH:mm:ssXXX)
      - `sku` · _String_ · **optional** — Product SKU
      - `voucher_code` · _String_ · **optional** — Not used
      - `wallet_credits` · _String_ · **optional** — Wallet credit
      - `updated_at` · _String_ · **optional** — Time of the feed's last update in ISO 8601 format
      - `is_digital` · _Number_ · **optional** — Is digital goods or not
      - `tracking_code_pre` · _String_ · **optional** — Not used
      - `order_item_id` · _Number_ · **optional** — Order item ID
      - `package_id` · _String_ · **optional** — Package source ID
      - `tracking_code` · _String_ · **optional** — Tracking code retrieved from 3PL shipment provider
      - `shipping_service_cost` · _String_ · **optional** — Shipping service cost
      - `extra_attributes` · _String_ · **optional** — JSON encoded string with extra attributes
      - `paid_price` · _String_ · **optional** — Paid price
      - `shipping_provider_type` · _String_ · **optional** — One of the following options: EXPRESS, STANDARD, ECONOMY, INSTANT, SELLER_OWN_FLEET, PICKUP_IN_STORE or DIGITAL
      - `product_detail_url` · _String_ · **optional** — Product detail URL
      - `shop_sku` · _String_ · **optional** — Product outer ID
      - `reason_detail` · _String_ · **optional** — Reason detail
      - `purchase_order_id` · _String_ · **optional** — Returned when calling SetPackedByMarketPlace
      - `sku_id` · _String_ · **optional** — Sku Id
      - `product_id` · _String_ · **optional** — Product ID
    - `branch_number` · _String_ · **optional** — (For Thailand only) The tax branch code for corporate customers, provided by the customer when placing the order.
    - `tax_code` · _String_ · **optional** — (For Thailand and Vietnam only) The customer's VAT tax code, provided by the customer when placing the order.
    - `extra_attributes` · _String_ · **optional** — Extra attributes which were passed to the Seller Center on getMarketPlaceOrders call.
    - `address_updated_at` · _String_ · **optional** — Address updated at
    - `shipping_fee` · _String_ · **optional** — Total shipping fee for this order.
    - `customer_first_name` · _String_ · **optional** — Customer first name
    - `payment_method` · _String_ · **optional** — The method of the payment.
    - `statuses` · _String[]_ · **optional** — An array of unique status of the items in the order. You can find all of the different status codes in the response example.
    - `remarks` · _String_ · **optional** — Remarks
    - `order_number` · _Number_ · **optional** — Represents the order ID
    - `order_id` · _Number_ · **optional** — Represents the order ID
    - `voucher` · _String_ · **optional** — Total voucher for this order.
    - `national_registration_number` · _String_ · **optional** — National registration number. Required in some countries.
    - `promised_shipping_times` · _String_ · **optional** — Target shipping time for the soonest order item if they are available.
    - `items_count` · _Number_ · **optional** — Number of items in order.
    - `voucher_platform` · _String_ · **optional** — The voucher that is issued by Lazada
    - `voucher_seller` · _String_ · **optional** — The voucher that is issued by the seller
    - `created_at` · _String_ · **optional** — Date and time when the order was placed.
    - `price` · _String_ · **optional** — Total amount for this order.Not the final transaction price of the order, excluding voucher and shipping_fee
    - `address_billing` · _Object_ · **optional** — Node that contains additional nodes, which makes up the billing address: FirstName, LastName, Phone, Phone2, Address1, Address2, City, PostCode, and Country.
      - `address1` · _String_ · **optional** — Detailed address
      - `phone2` · _String_ · **optional** — Backup phone number
      - `first_name` · _String_ · **optional** — Customer first name
      - `phone` · _String_ · **optional** — Phone number
      - `address5` · _String_ · **optional** — Third-level address
      - `post_code` · _String_ · **optional** — Post code; Note: This value will not be used in Lazada ID
      - `address4` · _String_ · **optional** — City name
      - `last_name` · _String_ · **optional** — Customer last name
      - `country` · _String_ · **optional** — country
      - `address3` · _String_ · **optional** — State name
      - `address2` · _String_ · **optional** — Not used for now
      - `city` · _String_ · **optional** — City name
    - `warehouse_code` · _String_ · **optional** — Warehouse Code of multi-wh sellers
  - `total_count` · _Number_ · **optional** — total count
  - `page_no` · _Number_ · **optional** — page num
  - `page_size` · _Number_ · **optional** — page size

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
status=delivered
update_before=2022-10-10T16:00:00+08:00
sort_direction=desc
offset=0
limit=100
update_after=2022-10-10T16:00:00+08:00
sort_by=updated_at
created_before=2022-10-10T16:00:00+08:00
created_after=2022-10-10T16:00:00+08:00
```

Response sample 1:

```
result={}
```

---

## PartnerUnlink

<a id="partner-unlink"></a>

- **Path**: `/partner/unlink`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-01 12:50:50

Used to remove a linked membership from Lazada. Please note that the link will not physically be removed, but deactivated.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `p_uid` · _String_ · **required** — A unique identifier of the member on partner side, used to establish the link to partner ID.

**Response parameters**

- `result` · _Object_ · **optional** — 1
  - `success` · _Boolean_ · **optional** — 1
  - `data` · _Object_ · **optional** — 1
  - `error_code` · _Object_ · **optional** — 1
    - `display_message` · _String_ · **optional** — 1
    - `key` · _String_ · **optional** — 1

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
p_uid=123456
```

Response sample 1:

```
result=1
```

---

## PartnerUpdate

<a id="partner-update"></a>

- **Path**: `/partner/update`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-02 13:03:53

Used to push membership bulk status updates to Lazada. Please note that this is not an incremental update, thus information left out that haven been in our system before, will be removed on our end.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `tier` · _String_ · **optional** — Customer’s tier in partner side, shown as-is
- `balance` · _Number_ · **required** — Balance of the membership.
- `tier_expiry` · _String_ · **optional** — Expiry of the membership, shown as-is
- `p_uid` · _String_ · **required** — A unique identifier of the member on partner side, used to establish the link to partner ID.
- `member_name` · _String_ · **optional** — Name of member on partner side, to easier identify the membership on My Account pages
- `valid_from` · _String_ · **optional** — Valid from of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance
- `status` · _String_ · **required** — One of: ‘active’ – For activated members ‘inactive’ – For inactive member ‘pending’ – For members that are pending activation
- `valid_to` · _String_ · **optional** — Valid to of this balance in RFC RFC3339 format. Ignore if this is no validity period for the balance

**Response parameters**

- `result` · _Object_ · **optional** — 1
  - `success` · _Boolean_ · **optional** — 1
  - `data` · _Object_ · **optional** — 1
  - `error_code` · _Object_ · **optional** — 1
    - `display_message` · _String_ · **optional** — 1
    - `key` · _String_ · **optional** — 1

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
tier=Gold
balance=6000
tier_expiry=2019-10-02T15:00:00Z
p_uid=123456
member_name=Marie Curie
valid_from=2019-10-02T15:00:00Z
status=BLACKLISTED
valid_to=2019-10-02T15:00:00Z
```

Response sample 1:

```
result=1
```

---

## UpdatePartnerUserId

<a id="partner-updatepartneruserid"></a>

- **Path**: `/partner/updatePartnerUserId`
- **Method**: `GET/POST`
- **Last modified**: 2024-07-22 11:26:18

Used to update the partner user id to new partner user id

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `old_p_uid` · _String_ · **required** — the current partner user id to match up with a user
- `new_p_uid` · _String_ · **required** — the new partner user id to be placed

**Response parameters**

- `result` · _Object_ · **required** — api result
  - `success` · _Boolean_ · **required** — whether the call succeed
  - `module` · _Object_ · **required** — result data
  - `errorCode` · _Object_ · **required** — result error
    - `displayMessage` · _String_ · **required** — result error detail
    - `key` · _String_ · **required** — result error key

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
old_p_uid=abc-28754775-2938575-239374
new_p_uid=abc-28754775-2938575-239374
```

Response sample 1:

```
result={"module":true,"notSuccess":false,"success":true}
```

---

