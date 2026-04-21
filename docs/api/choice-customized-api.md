# Choice Customized API

## BatchDeliverJitPurchaseOrder

<a id="jit-purchase-order-batch-pickup-deliver"></a>

- **Path**: `/jit/purchase_order/batch_pickup_deliver`
- **Method**: `GET/POST`
- **Last modified**: 2024-09-26 15:15:10

Batch Pickup Deliver Jit Purchase Order.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `purchaseOrderNoList` · _String[]_ · **required** — 采购单号列表，最大100个。{["POJ1001","POJ1002"]}
- `shipperAreaCode` · _String_ · **required** — 揽收联系人地址区域，如：CN： 当前支持CN，VN，TH，PH，ID，MY一共6个地区。必填。
- `shipperAddressId` · _Number_ · **required** — 揽收联系人地址id。必填。
- `shipperAddressDetail` · _String_ · **required** — 揽收详细地址。必填。
- `shipperMobilePhone` · _String_ · **required** — 揽收联系人电话。必填。
- `shipperName` · _String_ · **required** — 揽收联系人姓名。必填。
- `estimatedPickupDate` · _String_ · **optional** — 预约揽收日期 {yyyy-MM-dd}。非必填

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `data` · _Object[]_ · **optional** — data
    - `status` · _String_ · **optional** — success
    - `pickup_no` · _String_ · **optional** — 揽收单号。发货方式=上门揽收时 返回。
    - `allow_date_range` · _String[]_ · **optional** — 允许的揽收日期范围
    - `purchase_order_no` · _String_ · **optional** — 采购单号
    - `error_message` · _String_ · **optional** — 错误信息
  - `success` · _Boolean_ · **optional** — true
  - `error_message` · _String_ · **optional** — error msg
  - `error_code` · _String_ · **optional** — error code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `INVALID_STATUS_FORBIDDEN_PICK_UP` | INVALID_STATUS_FORBIDDEN_PICK_UP | This API can only be called if the order is in “Ready To Ship (biz_status = 20)” status, please call QueryListJitPurchaseOrder API first to confirm the PO status in the request. |

**Example**

Request sample 1:

```
purchaseOrderNoList=["POJ1","POJ2"]
shipperAreaCode=CN
shipperAddressId=1001
shipperAddressDetail=1 road
shipperMobilePhone=10086
shipperName=test
estimatedPickupDate=2023-10-10
```

Response sample 1:

```
result=result
```

---

## EditChoiceSkuStock

<a id="choice-stock-edit"></a>

- **Path**: `/choice/stock/edit`
- **Method**: `post`
- **Last modified**: 2023-10-16 11:07:16

batch update choice jit product stock by skuId

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `item_id` · _Number_ · **required** — item id
- `site` · _String_ · **required** — The country site of the queried Product
- `sku_edit_stock` · _String_ · **required** — Key：sku_id Value: sellable stock

**Response parameters**

- `data` · _Object_ · **optional** — update result json
  - `success_sku` · _Number[]_ · **optional** — success sku
  - `failed_sku` · _Object[]_ · **optional** — failed sku
- `success` · _Boolean_ · **optional** — success flag
- `error_code` · _String_ · **optional** — error code
- `error_msg` · _String_ · **optional** — error msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `E0208` | Product not exist | The item id in the request does not exist in the current store or the CHOICE item has not yet been reviewed by Lazada, updating inventory is not supported. |
| `E1002` | not jit product | Non-JIT items do not support inventory modification, please call GetChoiceProducts or GetChoiceProductItem API to query the bizSupplement field, only if the field value is 3 or 4 can you call this API to modify inventory. |
| `E1001` | not jit seller | Seller authorization is not a choice authorization, please ask the seller to re-authorize and select the 'country - choice' option to complete the choice store authorization. |
| `E0208` | Product not exist | The item id in the request does not exist in the current store or the CHOICE item has not yet been reviewed by Lazada, updating inventory is not supported. |

**Example**

Request sample 1:

```
item_id=2616344300
site=SG
sku_edit_stock={ 314525867:10, 314525868:11 }
```

Response sample 1:

```
data={ "successSku": [314525868],        "failedSku": [{           "skuId":314525867,           “reason": “sku not exsits” }] }
success=true
error_code=E305
error_msg=Parameter Invalid
```

---

## GetChoiceProductItem

<a id="choice-product-item-get"></a>

- **Path**: `/choice/product/item/get`
- **Method**: `get`
- **Last modified**: 2023-05-12 17:22:15

Get single product by ItemId or SellerSku.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `item_id` · _Number_ · **optional** — Call this API; Either "Item Id" or "Seller Sku" must be selected as the request parameter
- `seller_sku` · _String_ · **optional** — Call this API; Either "Item Id" or "Seller Sku" must be selected as the request parameter
- `site` · _String_ · **required** — The country site of the queried Product

**Response parameters**

- `data` · _Object_ · **required** — Response body
  - `subStatus` · _String_ · **optional** — product reject status
  - `suspendedSkus` · _Object[]_ · **optional** — An array contains at least one Suspended SKU.
  - `variation` · _Object_ · **optional** — self define attributes
    - `variation1` · _Object_ · **optional** — self define attributes
      - `name` · _String_ · **optional** — self define attributes
      - `has_image` · _Boolean_ · **optional** — self define attributes
      - `customize` · _Boolean_ · **optional** — self define attributes
      - `options` · _String[]_ · **optional** — self define attributes
      - `label` · _String_ · **optional** — self define attributes
    - `variation2` · _Object_ · **optional** — self define attributes
      - `name` · _String_ · **optional** — self define attributes
      - `has_image` · _Boolean_ · **optional** — self define attributes
      - `customize` · _Boolean_ · **optional** — self define attributes
      - `options` · _String[]_ · **optional** — self define attributes
      - `label` · _String_ · **optional** — self define attributes
    - `variation3` · _Object_ · **optional** — self define attributes
      - `name` · _String_ · **optional** — self define attributes
      - `has_image` · _Boolean_ · **optional** — self define attributes
      - `customize` · _Boolean_ · **optional** — self define attributes
      - `options` · _String[]_ · **optional** — self define attributes
      - `label` · _String_ · **optional** — self define attributes
    - `variation4` · _Object_ · **optional** — self define attributes
      - `name` · _String_ · **optional** — self define attributes
      - `has_image` · _Boolean_ · **optional** — self define attributes
      - `customize` · _Boolean_ · **optional** — self define attributes
      - `options` · _String[]_ · **optional** — self define attributes
      - `label` · _String_ · **optional** — self define attributes
  - `primary_category` · _Number_ · **optional** — CategoryId
  - `attributes` · _Object_ · **optional** — Item attributes.
  - `skus` · _Object[]_ · **optional** — Sku List
  - `item_id` · _Number_ · **optional** — Item Id
  - `created_time` · _String_ · **optional** — create time
  - `updated_time` · _String_ · **optional** — update time
  - `images` · _String_ · **optional** — product images List
  - `marketImages` · _String_ · **optional** — product market images
  - `status` · _String_ · **optional** — product status
  - `trialProduct` · _Boolean_ · **optional** — trial product
  - `rejectReason` · _Object[]_ · **optional** — rejectReason
  - `hiddenReason` · _String_ · **optional** — hiddenReason
  - `hiddenStatus` · _String_ · **optional** — hiddenStatus
  - `bizSupplement` · _Object_ · **optional** — bizSupplement

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
item_id=2616344300
seller_sku=Apple-6S-Black
site=SG
```

Response sample 1:

```
data={"updatedTime":"1657536195000","skus":[{"Status":"active","quantity":1719,"Images":[""],"SellerSku":"1pc","ShopSku":"5758254690_ID-11212296431","special_time_format":"yyyy-MM-dd HH:mm","Url":"http://www.lazada.co.id/-i5758254690-s11212296431.html","multiWarehouseInventories":[{"occupyQuantity":26,"quantity":1719,"totalQuantity":1745,"withholdQuantity":0,"warehouseCode":"dropshipping","sellableQuantity":1719}],"package_width":"6.00","special_to_time":"2122-07-11 17:43","special_from_time":"2022-07-11 17:43","package_height":"5.00","fblWarehouseInventories":[],"special_price":6500,"price":8500,"channelInventories":[{"channelName":"37ce3f43-f59b-4608-b8b1-773882bd7212","startTime":"2022-09-02 12:00:00","endTime":"2022-09-03 11:59:59","sellableQuantity":200}],"color_text":"Magic","package_length":"7.00","special_from_date":"2022-07-11","package_weight":"0.05","Available":1719,"SkuId":11212296431,"special_to_date":"2122-07-11"}],"suspendedSkus":null,"variation":{"Variation1":{"name":"color_text","options":["Magic Ice Tint"],"hasImage":true,"label":"Color","customize":false}},"subStatus":null,"trialProduct":false,"itemId":5758254690,"rejectReason":null,"productImageList":[""],"primaryCategory":18209,"createdTime":"1632370434000","marketImageList":[],"attributes":{"short_description":null,"makeup_lip_benefit":"Hydrating,Long-wear","description_en":null,"description":"<div></div>","video":null,"source":"asc","warranty_type":null,"short_description_en":null,"finish_lipstick":"Matte","color_family":null,"Hazmat":null,"brand_classification":null,"units_hb":null,"shelf_expiry":null,"name":"LC541","warranty":null,"model":null,"Delivery_Option_Instant":null,"country_origin_hb":null,"brand":"No Brand","product_warranty":null,"name_en":null},"class":"com.taobao.sellglobal.service.api.response.SingleProductResponse","status":"Active"}
```

---

## GetChoiceProducts

<a id="choice-products-get"></a>

- **Path**: `/choice/products/get`
- **Method**: `GET/POST`
- **Last modified**: 2023-05-12 17:30:08

Use this API to get detailed information of the specified products.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `filter` · _String_ · **optional** — Returns the products with the status matching this parameter. Possible values are all, live, inactive, deleted, pending, rejected, sold-out. Mandatory.
- `update_before` · _String_ · **optional** — Limits the returned product list to those updated before or on a specified date, given in ISO 8601 date format. Optional
- `create_before` · _String_ · **optional** — Limits the returned products to those created before or on the specified date, given in ISO 8601 date format. Optional
- `offset` · _String_ · **optional** — Deprecated(The number of Items you want to skip before you start counting),It is recommended to use date for scrolling query.The maximum offset is 10000
- `create_after` · _String_ · **optional** — Limits the returned products to those created after or on the specified date, given in ISO 8601 date format. Optional
- `update_after` · _String_ · **optional** — Limits the returned products to those updated after or on the specified date, given in ISO 8601 date format. Optional
- `limit` · _String_ · **optional** — The number of Items you would like to fetch from every response,The maximum is 50.
- `options` · _String_ · **optional** — This value can be used to get more stock information. e.g., Options=1 means contain ReservedStock, RtsStock, PendingStock, RealTimeStock, FulfillmentBySellable.
- `sku_seller_list` · _String_ · **optional** — Only products that have the Seller SKU in this list will be returned. Input should be a JSON array. For example, ["Apple 6S Gold", "Apple 6S Black"]. It only matches the whole words. A maximum of 100 SKUs can be returned.
- `site` · _String_ · **required** — The country site of the queried Product

**Response parameters**

- `data` · _Object_ · **optional** — Response body
  - `total_products` · _Number_ · **optional** — The number of total Items, it's item level.
  - `products` · _Object[]_ · **optional** — An array contains at least one Product.
    - `primary_category` · _Number_ · **optional** — The ID of the primary category for his product.
    - `attributes` · _Object_ · **optional** — Contains several product attributes.
    - `skus` · _Object[]_ · **optional** — An array contains at least one SKU.
    - `item_id` · _Number_ · **optional** — The ID of this product
    - `created_time` · _String_ · **optional** — create time
    - `updated_time` · _String_ · **optional** — update time
    - `images` · _String_ · **optional** — product images
    - `marketImages` · _String_ · **optional** — product market images
    - `status` · _String_ · **optional** — product status
    - `subStatus` · _String_ · **optional** — product reject status
    - `suspendedSkus` · _Object[]_ · **optional** — An array contains at least one Suspended SKU.
    - `trialProduct` · _Boolean_ · **optional** — Whether product is trial product
    - `rejectReason` · _Object[]_ · **optional** — rejectReason
    - `hiddenReason` · _String_ · **optional** — hiddenReason
    - `hiddenStatus` · _String_ · **optional** — hiddenStatus
    - `bizSupplement` · _Object_ · **optional** — bizSupplement

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
filter=live
update_before=2023-10-01T00:00:00+0800
create_before=2023-01-01T00:00:00+0800
offset=0
create_after=2023-01-01T00:00:00+0800
update_after=2023-01-01T00:00:00+0800
limit=10
options=1
sku_seller_list= ["39817:01:01", "Apple 6S Black"]
site=SG
```

Response sample 1:

```
data={"data":{"created_time":"1645176573000","updated_time":"1653463851000","images":["https://my-live.slatic.net/p/58a4f48c8e5d526ba0f4ee2150dff8ab.jpg"],"skus":[{"Status":"active","quantity":20,"Images":[],"SellerSku":"12333-poi","ShopSku":"2807246166_MY-13449296008","Url":"https://www.lazada.com.my/-i2807246166-s13449296008.html","multiWarehouseInventories":[{"occupyQuantity":0,"quantity":20,"totalQuantity":20,"withholdQuantity":0,"warehouseCode":"dropshipping","sellableQuantity":20}],"package_width":"10.00","package_height":"10.00","fblWarehouseInventories":[],"special_price":0.0,"price":102.0,"channelInventories":[{"channelName":"4a9198e3-9b40-44d2-a6b6-863696c42f74","startTime":"2022-05-28 00:00:00","endTime":"2022-05-30 23:59:59","sellableQuantity":1},{"channelName":"9e46b6eb-a509-4db1-a22c-7ad266ac4a74","startTime":"2022-02-25 00:00:00","endTime":"2022-02-26 00:00:00","sellableQuantity":7}],"package_length":"10.00","package_weight":"0.3","Available":20,"SkuId":13449296008}],"item_id":2807246166,"variation":{},"trialProduct":false,"primary_category":8707,"marketImages":[],"attributes":{"name":"#TEST TITLE#$2022-02-18 15:21:16&","short_description":"1234","description":"<p style=\"margin:0\"><span style=\"font-family:none\">123321</span></p>","video":"30000176356","brand":"NAVIFORCE","model":"9095","movement":"Quartz","feature":"Date,Luminous,Chronograph,World Time,Calculator,Calendar,Shock Resistant","movement_country":"Japan","water_resistant":"30m","case_shape":"Round","Dial_Glass":"Hesalite Crystal","watch_dial_size":"Other","strap":"Leather","warranty_type":"No Warranty","name_ms":"# Ujian Tajuk #2022-02-18 15:21:16","source":"asc","delivery_option_sof":"0"},"status":"Active"},"code":"0","request_id":"21017d2816548274295911740"}
```

---

## GetChoiceSeller

<a id="choice-seller-get"></a>

- **Path**: `/choice/seller/get`
- **Method**: `GET/POST`
- **Last modified**: 2023-05-12 17:22:33

Get choice seller information by seller ID and site

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `site` · _String_ · **required** — The country site of the queried merchant

**Response parameters**

- `data` · _Object_ · **optional** — Response data
  - `name_company` · _String_ · **optional** — Company name
  - `name` · _String_ · **optional** — Shop name
  - `seller_id` · _String_ · **optional** — Seller's ID
  - `verified` · _String_ · **optional** — Whether the seller is verified
  - `email` · _String_ · **optional** — Seller's email
  - `short_code` · _String_ · **optional** — Seller's short code
  - `cb` · _String_ · **optional** — Whether the seller is a Cross Border seller or not
  - `location` · _String_ · **optional** — location of seller
  - `status` · _String_ · **optional** — three status :Active\Deleted\Inactive

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
```

Response sample 1:

```
data={ "data": {   "name_company": "alibaba group",   "name": "abc shop",   "verified": "true",   "location": "Singapore",   "seller_id": "10",   "email": "Beanbagmart.sg@gmail.com",   "short_code": "SG1015W",   "cb": "false",   "status": "Active" }, "code":"0", "request_id":"21017d2816548274295911740" }
```

---

## GetChoiceSkuItemRelationBySku

<a id="choice-sku-item-relation-get-by-sku"></a>

- **Path**: `/choice/sku_item_relation/get_by_sku`
- **Method**: `GET/POST`
- **Last modified**: 2023-05-12 17:31:09

get the relation between platformSku and item by sku

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `item_id` · _String_ · **required** — itemId
- `sku_id` · _String_ · **required** — skuId
- `site` · _String_ · **required** — The country site of the queried Product item

**Response parameters**

- `data` · _Object_ · **required** — Response
  - `item_id` · _Number_ · **required** — itemId
  - `site` · _String_ · **required** — site
  - `seller_id` · _Number_ · **required** — sellerId
  - `sc_item_user_id` · _String_ · **required** — scItemUserId, always null
  - `sc_item_id` · _Number_ · **required** — scItemId
  - `source` · _String_ · **required** — source
  - `sku_id` · _Number_ · **required** — skuId
  - `barcode` · _String_ · **optional** — barcode

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
item_id=2934199168
sku_id=14293663022
site=MY
```

Response sample 1:

```
data={     "data": {         "site": "TH",         "item_id": "151579598",         "fulfillment_sku": "CB-885710187-1305210866",         "sc_item_user_id": "null",         "sku_id": "177256899",         "source": "Lazada",         "seller_id": "100011046",         "sc_item_id": "567148194446"     },     "code": "0",     "request_id": "0ba2887315178178017221014" }
```

---

## PackageJitPurchaseOrder

<a id="jit-purchase-order-package"></a>

- **Path**: `/jit/purchase_order/package`
- **Method**: `post`
- **Last modified**: 2024-01-24 17:58:07

Package Jit Purchase Order.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `purchase_order_no_list` · _String[]_ · **required** — 采购单列表，最大100个。{["POJ1001","POJ1002"]}

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object_ · **required** — data
    - `status` · _String_ · **required** — success
  - `success` · _Boolean_ · **required** — is success
  - `error_message` · _String_ · **required** — errror msg
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
purchase_order_no_list=["POJ1001","POJ1002"]
```

Response sample 1:

```
result=result
```

---

## PrintJitPurchaseOrderAndItem

<a id="jit-purchase-order-print"></a>

- **Path**: `/jit/purchase_order/print`
- **Method**: `GET/POST`
- **Last modified**: 2024-01-24 17:57:58

Print Jit Purchase Order And Item.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `purchase_order_no_list` · _String[]_ · **required** — 采购单号列表，最大20个。{["POJ1001","POJ1002"]}
- `print_order` · _Boolean_ · **required** — 是否打印PO单。{true/false}
- `print_barcode` · _String_ · **required** — 是否打印货品barcode。{true/false}
- `pdf_size` · _String_ · **required** — pdf样式。{A4/6030/100150}

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object_ · **required** — data
    - `file` · _String_ · **required** — pdf文件下载路径。{文件下载url有过期时间，过期后需要重新调用生成文件url}
  - `success` · _Boolean_ · **required** — is success
  - `error_message` · _String_ · **required** — error msg
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
purchase_order_no_list=["POJ1001"]
print_order=true
print_barcode=true
pdf_size=6030
```

Response sample 1:

```
result=result
```

---

## PrintPickuoOrder

<a id="pickup-order-print"></a>

- **Path**: `/pickup_order/print`
- **Method**: `GET/POST`
- **Last modified**: 2024-01-25 11:06:23

Print Pickuo Order.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `pickup_order_no` · _String_ · **required** — 揽收单号
- `pdf_size` · _String_ · **required** — pdf格式枚举类型。A4纸大小样式、100*100大小样式。{PICKUP_A4/PICKUP_1010}
- `box_number` · _String_ · **required** — 装箱数量。（最大值 100）

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object_ · **required** — data
    - `file` · _String_ · **required** — pdf文件下载路径。{文件下载url有过期时间，过期后需要重新调用生成文件url}
  - `success` · _Boolean_ · **required** — true
  - `error_message` · _String_ · **required** — error msg
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
pickup_order_no=pickup_order_no
pdf_size=PICKUP_A4
box_number=1
```

Response sample 1:

```
result=result
```

---

## QueryListJitPurchaseOrder

<a id="jit-purchase-order-query-list"></a>

- **Path**: `/jit/purchase_order/query_list`
- **Method**: `GET/POST`
- **Last modified**: 2024-01-24 15:21:19

Query List Jit Purchase Order.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `gmt_create_begin` · _String_ · **optional** — 单据创建开始时间，建单时间范围(即end-begin)需要在90天内。{yyyy-MM-dd HH:mm:ss}
- `gmt_create_end` · _String_ · **optional** — 单据创建结束时间，建单时间范围(即end-begin)需要在90天内。{yyyy-MM-dd HH:mm:ss}
- `purchase_order_no_list` · _String[]_ · **optional** — 采购单列表，最大20个。{["POJ1001","POJ1002"]}
- `logistics_no_list` · _String[]_ · **optional** — 物流单列表，最大10个。{["LBX1001","LBX1002"]}
- `order_status` · _String_ · **optional** — 单据状态 10:待打包; 20:待发货; 22:待收货; 25:已到仓; 40:已完成; -100610:超时关闭; -100:买家取消；不传则返回所有状态的采购单；
- `page_index` · _Number_ · **optional** — 当前页，默认1。
- `page_size` · _Number_ · **optional** — 分页大小，最大50个，默认20。

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object[]_ · **required** — data
    - `supplier_name` · _String_ · **required** — 供应商名称
    - `consign_order_no_list` · _String_ · **required** — 发货单号列表
    - `gmt_modified` · _Number_ · **required** — 更新时间
    - `creator` · _String_ · **required** — 创建人
    - `supplier_id` · _Number_ · **required** — 供应商ID
    - `delivery_method` · _String_ · **required** — 发货方式 parcel:快递; truck:卡车派送或其他; pickup:上门揽收;
    - `store_contact_name` · _String_ · **required** — 仓库联系人
    - `supplier_code` · _String_ · **required** — 供应商编码
    - `gmt_create` · _Number_ · **required** — 创建时间
    - `gmt_except_arrive_time` · _Number_ · **required** — 期望到仓时间
    - `purchase_order_no` · _String_ · **required** — 采购单号
    - `gmt_arrive_time` · _Number_ · **required** — 实际到仓时间
    - `trade_order_id_list` · _String[]_ · **required** — 交易单号
    - `pickup_order_no` · _String_ · **required** — 揽收单号
    - `store_contact_phone` · _String_ · **required** — 仓库联系电话
    - `logistics_no_list` · _String_ · **required** — 物流单号列表
    - `seller_id` · _String_ · **required** — 站点店铺ID
    - `total_quantity` · _Number_ · **required** — 采购数量
    - `store_address` · _String_ · **required** — 仓库地址
    - `total_sku_count` · _Number_ · **required** — SKU数量
    - `site_id` · _String_ · **required** — 收件人国家
    - `store_name` · _String_ · **required** — 仓库名称
    - `biz_status` · _String_ · **required** — 状态
    - `store_code` · _String_ · **required** — 仓库Code
    - `fulfillment_cancel_status` · _String_ · **optional** — 履约取消状态
    - `ext_fields` · _String_ · **optional** — 采购单扩展字段
  - `page_index` · _Number_ · **required** — 当前页
  - `total_page` · _Number_ · **required** — 总页数
  - `success` · _Boolean_ · **required** — isSuccess
  - `error_message` · _String_ · **required** — error msg
  - `page_size` · _Number_ · **required** — 每页大小
  - `error_code` · _String_ · **required** — error code
  - `total_count` · _Number_ · **required** — 总记录数

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
gmt_create_begin=2023-10-01 00:00:00
gmt_create_end=2023-10-10 00:00:00
purchase_order_no_list=["POJ1001","POJ1002"]
logistics_no_list=["LBX1001","LBX1002"]}
order_status=10
page_index=1
page_size=20
```

Response sample 1:

```
result=result
```

---

## QueryListPurchaseItem

<a id="jit-purchase-order-query-list-purchase-item"></a>

- **Path**: `/jit/purchase_order/query_list_purchase_item`
- **Method**: `GET/POST`
- **Last modified**: 2024-01-24 17:57:55

Query List Purchase Item.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `purchase_order_no` · _String_ · **required** — JIT采购单号
- `page_index` · _Number_ · **optional** — 当前页，默认1。
- `page_size` · _Number_ · **optional** — 分页大小，最大200个，默认20。

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object[]_ · **required** — data
    - `product_id` · _String_ · **required** — 商品id
    - `sc_item_code` · _String_ · **required** — 货品编码
    - `buyer_qty` · _Number_ · **required** — 下单数量
    - `sc_item_id` · _Number_ · **required** — 货品id
    - `barcodes` · _String[]_ · **required** — 条形码
    - `received_normal_qty` · _Number_ · **required** — 实收正品数量
    - `img_url` · _String_ · **required** — 商品预览图
    - `purchase_order_no` · _String_ · **required** — 采购单号
    - `product_title` · _String_ · **required** — 商品名称
    - `sc_item_name` · _String_ · **required** — 货品名称
    - `seller_sku` · _String_ · **required** — 商品sellerSku
    - `sku_id` · _String_ · **required** — 商品sku id
    - `received_defective_qty` · _Number_ · **required** — 实收残品数量
  - `page_index` · _Number_ · **required** — 当前页
  - `total_page` · _Number_ · **required** — 总页数
  - `success` · _Boolean_ · **required** — is success
  - `error_message` · _String_ · **required** — error msg
  - `page_size` · _Number_ · **required** — 每页大小
  - `error_code` · _String_ · **required** — error code
  - `total_count` · _Number_ · **required** — 总记录数

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
purchase_order_no=POJ1001
page_index=1
page_size=20
```

Response sample 1:

```
result=result
```

---

## QueryPickupOrder

<a id="pickup-order-query"></a>

- **Path**: `/pickup_order/query`
- **Method**: `GET/POST`
- **Last modified**: 2024-01-24 17:57:54

Query Pickup Order.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `pickup_order_no` · _String_ · **required** — 揽收单号

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object_ · **required** — data
    - `reason` · _String_ · **required** — 原因
    - `actual_arrive_time` · _String_ · **required** — 实际送达时间
    - `shipper_name` · _String_ · **required** — 发货人姓名
    - `update_time` · _Number_ · **required** — 更新时间
    - `car_driver_name` · _String_ · **required** — 司机姓名
    - `receive_store_code` · _String_ · **required** — 收货仓库编码
    - `estimated_volume` · _String_ · **required** — 预估体积(m3) {#.###}
    - `shipper_address` · _String_ · **required** — 发货地址
    - `actual_pickup_time` · _String_ · **required** — 实际揽收时间
    - `car_number` · _String_ · **required** — 车牌号
    - `pickup_order_no` · _String_ · **required** — 揽收单号
    - `actual_weight` · _String_ · **required** — 实际重量(KG) {#.###}
    - `purchase_order_no_list` · _String[]_ · **required** — 关联发货单号列表
    - `shipper_phone` · _String_ · **required** — 发货人联系方式
    - `estimated_weight` · _String_ · **required** — 预估重量(KG) {#.###}
    - `create_time` · _Number_ · **required** — 创建时间
    - `estimated_box_number` · _Number_ · **required** — 预估揽收箱数
    - `logistics_no_list` · _String[]_ · **required** — 关联物流单号列表
    - `estimated_pickup_time` · _Number_ · **required** — 预约揽收上门日期
    - `receive_store_address` · _String_ · **required** — 收货仓库地址
    - `car_driver_phone` · _String_ · **required** — 司机联系电话
    - `status` · _String_ · **required** — 揽收单状态code。10: 待揽收; 20: 已派车; 30: 已揽收; 40: 已送达; 50: 已完成; -10: 已取消; -20: 揽收失败; -30: 已删除;
    - `actual_logistics_no_list` · _String[]_ · **optional** — 揽收真实物流单号
  - `success` · _Boolean_ · **required** — true
  - `error_message` · _String_ · **required** — error msg
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
pickup_order_no=FO20231010
```

Response sample 1:

```
result=result
```

---

