# Cross Boarder Product API

## CreateGlobalProduct

<a id="product-global-create"></a>

- **Path**: `/product/global/create`
- **Method**: `post`
- **Last modified**: 2022-07-28 16:57:50

Use this API to create a single new global product to multiple Lazada sites. (For cross boarder sellers ONLY)

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — <a href='https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121751' target='_brank'>Parameter description</a>

**Response parameters**

- `data` · _Object_ · **required** — Response body
  - `sku_list` · _Object[]_ · **optional** — SKU information
    - `seller_sku` · _String_ · **optional** — The SellerSku that is defined,There are no two identical seller SKUs in the same store,

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `"500"` | "E500: Create product failed" | The product was not created, please check the detailed error message. |
| `ServiceTimeout` | The request has failed due to service timeout | The request has failed due to service timeout |
| `"6"` | "E006: Unexpected internal error" | There is internal error, please contact our tech support team for assistance. |
| `"5"` | "E005: Invalid Request Format" | There is something wrong in the request format, please check the detailed error message |
| `IllegalAccessToken` | The specified access token is invalid or expired | Your access token is either expired or invalid. Pleaes refresh your access token and contact our tech support team to renew the token. |
| `4136` | SYSTEM_BUSY | System is busy,try later |
| `4137` | SYSTEM_TIMEOUT | System is timeout,try later |
| `4138` | SYSTEM_EXCEPTION | System is under maintenance |
| `4139` | UNKNOWN_ERROR | System is upgrading... |
| `4140` | CATEGORY_CANNOT_FIND | The specified category cannot be found |
| `4141` | CATEGORY_NOT_PERMITTED | The category is not permitted |
| `4142` | CATEGORY_IS_INACTIVE | The category is inactive |
| `4143` | NO_TARGET_USER_BIND | Do not have access to target market |
| `4144` | LOCAL_CATEGORY_CANNOT_FIND | The specified local category cannot be found |
| `4145` | GLOBAL_PRODUCT_CANNOT_FIND | The global product cannot be found |
| `4146` | LOCAL_PRODUCT_CANNOT_FIND | Cannot find product at local venture: %s |
| `4147` | LOCAL_SKU_CANNOT_FIND | Cannot find any SKUs at local venture: %s |
| `4148` | LOCAL_PRODUCT_HAS_NOT_BEEN_SYNCED | This product has not been published to venture: %s |
| `4149` | LOCAL_SKU_HAS_NOT_BEEN_SYNCED | The SKUs is still synchronizing to venture: %s... |
| `4150` | PRODUCT_DOES_NOT_BELONG_TO_USER | Target product does not belong to the user account |
| `4151` | DAO_NOT_SUPPORT_BIZ_TYPE | The biz type hasn't been supported |
| `4152` | DAO_GLOBAL_PDT_NOT_FOUND | Can not find the global product in the data base |
| `4153` | DAO_GLOBAL_SKU_NOT_FOUND | Can not find the global SKUs in the data base |
| `4154` | DAO_LOCAL_ITEM_RELATION_NOT_FOUND | Can not find the local items in the data base |
| `4155` | DAO_LOCAL_SKU_RELATION_NOT_FOUND | Can not find the local skus in the data base |
| `4156` | NO_CREATE_PRODUCT_PERMISSION | You do not have permission to create product |
| `4157` | PRICE_GENERAL_TOO_LOW_ERROR | Retail price & Sale price at %s cannot be lower than %s %s |
| `4158` | PRICE_GENERAL_TOO_HIGH_ERROR | Retail price & Sale price at %s cannot be higher than %s %s |
| `4159` | PRICE_GENERAL_DISCOUNT_TOO_HIGH_ERROR | Sale price discount at %s should not be more than or equal to %s. Currently, price is %s %s, and sale price is %s %s |
| `4160` | PRICE_GENERAL_DISCOUNT_TOO_LOW_ERROR | Sale price discount at %s should not be less than or equal to %s. Currently, price is %s %s, and sale price is %s %s |
| `4161` | PB_SALE_PROP_RENDER_ILLEGAL_SALE_PROP | The product has illegal sale properties |
| `4162` | PB_SKU_DESC_RENDER_ILLEGAL_SKU_DESC | The product has illegal sku description properties |
| `4163` | PB_VENTURE_NO_VENTURE_SELECT | No venture has been selected |
| `4164` | PB_VENTURE_MY_NOT_PUBLISHED | Malaysia venture is a must for Cross-Border publishing |
| `4165` | PB_NAME_NAME_CANNOT_BE_NULL | Title cannot be empty |
| `4166` | PB_NAME_NAME_CANNOT_BE_TOO_LONG | Title cannot be longer than %d |
| `4167` | PB_NAME_NAME_TRAN_TOO_LONG | publish failed cause by title translation words overflow |
| `4168` | PB_BRAND_ILLEGAL | The brand is invalid |
| `4169` | PB_DETAIL_ATTRIBUTE_REQUIRED | This attribute cannot be empty |
| `4170` | PB_SHORTDESC_REQUIRED | Highlights cannot be empty |
| `4171` | PB_DETAIL_LENGTH_ERROR | This attribute cannot be longer than 255 characters |
| `4172` | PB_SKU_PROP_REQUIRED | This attribute cannot be empty |
| `4173` | PB_NO_PROPER_SKU | No proper sku found |
| `4174` | PB_NO_PC_DECO | PC decoration cant be empty |
| `4175` | PB_NO_WIRELESS_DECO | wireless decoration cant be empty |
| `4176` | PB_IMG_CANNOT_BE_EMPTY | Please upload at least one image for every SKU |
| `4177` | PB_IMG_URL_INVALID | the img url is invalid |
| `4178` | PB_IMG_CANNOT_FETCH | the img could not be fetch caused by network reason or firewall,push the img to where we can access and download |
| `4179` | PB_SALE_PROP_SUBMIT_SALE_PROP_CANNOT_BE_EMPTY | The sale property cannot be empty |
| `4180` | PB_SALE_PROP_SUBMIT_SALE_PROP_ILLEGAL_VAL | The sale property value is invalid |
| `4181` | PB_SALE_PROP_SUBMIT_SALE_PROP_INVALID_INPUT_VAL | The sale property value cannot contain illegal character \"*^~<>/\|\ |
| `4182` | PB_SALE_PROP_SUBMIT_SALE_PROP_TOO_LONG_INPUT_VAL | The sale property value cannot be longer than 255 characters |
| `4183` | PB_SALE_PROP_SUBMIT_TOO_MORE_SKU | The SKUs are too more for these sale properties |
| `4184` | PB_CURRENCY_CANNOT_BE_EMPTY | The SKU does not have legal currency |
| `4185` | PB_ORIGIN_PRICE_CANNOT_BE_EMPTY | The SKU's original price is empty |
| `4186` | PB_ORIGIN_SALE_PRICE_CANNOT_BE_EMPTY | The SKU's original sale price is empty |
| `4187` | PB_ORIGIN_SALE_PRICE_CANNOT_BE_HIGH | The SKU's sale price must be lower than original price |
| `4188` | PB_MARKET_PRICE_CANNOT_BE_EMPTY | The %s SKU's original price is empty |
| `4189` | PB_MARKET_SALE_PRICE_CANNOT_BE_EMPTY | The %s SKU's original sale price is empty |
| `4190` | PB_MARKET_SALE_PRICE_TOO_HIGH | The %s SKU's sale price must be lower than retail price |
| `4191` | PB_STOCK_CANNOT_BE_EMPTY | The %s SKU's stock cannot be empty |
| `4192` | PB_STOCK_INVALID | The %s SKU's stock is invalid |
| `4193` | PB_WARRANTY_INVALID | Warranty Period has not been selected while Warranty Type is not \"No warranty\" |
| `4194` | PB_SELLER_SKU_EXIST | Seller SKU exists |
| `4195` | PB_SELLER_SKU_LENGTH_ERROR | Seller SKU should be 1-50 characters |
| `4196` | PB_SELLER_SKU_DUPLICATE | Seller SKU duplicates |
| `4197` | PB_SELLER_SKU_INVALID | Seller SKU must consist of \"A-Z\", \"a-z\", \"0-9\", \"-\", \"_\" |
| `4198` | PB_SELLER_SKU_CANNOT_BE_REVISED | Seller SKU cannot be revised, it should be kept as: %s |
| `4199` | PB_PACKAGE_UNMATCHED | Package parameters should be all the same for one product |
| `4200` | IMAP_BRAND_NOT_MATCHED | Brand doesn't match at local venture |
| `4201` | IMAP_SALE_PROP_UNMATCHED | Sale properties unmatched |
| `4202` | IMAP_SALE_PROP_ERR_MATCHED | Sale properties error matched |
| `4203` | IMAP_DEST_SALE_PROP_IS_SPU | Dest sale property is SPU property |
| `4204` | IMAP_SALE_PROP_VAL_ERR_MATCHED | Sale properties values error matched |
| `4205` | INVALID_IMAGE_FORMAT | Invalid image format |
| `4206` | INVALID_IMAGE_DIMENSION | Image resolution shoule be from 330 * 330 to 5000 * 5000 |
| `4207` | IMPORT_SELLER_SKU_EMPTY | Import empty seller sku |
| `4208` | IMPORT_SELLER_SKU_INVALID | Import invalid seller sku |
| `4209` | INVALID_CATEGORY | Invalid category |
| `4210` | FAIL_TO_GET_CATEGORY_ID | Fail to get category id |
| `4211` | HAZMAT_WARN | HAZMAT_WARN |
| `4212` | PDT_LIMIT_REACH | Your product list has reached the limit at %s |
| `4213` | MIGRAGE_IMAGE_FAILED | Fail to migrate |
| `4214` | PG_NOT_PERMIT | QC rule checking failed |
| `4215` | DECO_CREATE_ERROR | Fail to create decoration |
| `4216` | DECO_NO_TARGET_USER_BIND | cant find target user |
| `4217` | DECO_SOURCE_QUERY_ERROR | Fail to query for source decoration |
| `4218` | DECO_TRANSLATE_ERROR | Decoration translation error |
| `4219` | DECO_SYNC_ERROR | Decoration sync error |
| `4220` | TRANSLATE_OVER_FLOW | Translate over flow,and will retry auto |
| `4221` | ITEM_NEVER_PUBLISH_SUCCESSED | item have not pulish success to market before |
| `4222` | NO_SKU_COULD_BE_UPDATE | no sku could be update |
| `4223` | PRODUCT_NUM_REACH_LIMITATION | Seller's online product quantity has reach limit in all site |
| `4224` | SELLER_STATUS_INVALID | Seller's account are inactive or not verified in all publish venture. |
| `4225` | PRICE_NOT_VALID | Please review product price to ensure accuracy. |
| `4226` | SELLER_PUNISHMENT_INVALID | Seller is under punishment of blocking edit venture. |
| `4227` | SKU_IMAGE_INVALID | If you upload a sku picture, then all sku must be uploaded. |
| `4228` | PRODUCT_IMAGE_INVALID | Product or sku Image is missing for live product |
| `4229` | PROHIBITED_BRAND | Product has problem with brand. |
| `4230` | PROHIBITED_KEYWORD | Product content exist keyword. |
| `4223` | Seller's online product quantity has reach limit in all publish venture. | The number of products with active status in GPS has exceeded the limit. Please call updateProductStatus API to drop the product or call deleteMerchantProduct API to delete the product with active status and then call this API to publish a new product. |
| `500` | Create product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `5` | Invalid Request Format | Please refer to the “CreateGlobalProduct payload and parameter description” document to check if the payload in your request follows the requirements and format in the document. |
| `4214` | Create product failed | This is a generalized error, this error indicates that there is a sales/logistics policy in your item that does not comply with the current country or region, please check thedetail field for details. |
| `4194` | Seller SKU exists. | This seller sku already exists in the current store, please change to another seller sku to post the item. |
| `4178` | Fail to migrate image | Please do not include external image links in the payload, use the MigrateImage API to migrate the images to Lazada image links first. |
| `4169` | This attribute cannot be empty. | Mandatory attributes are not used in the Payload, call the GetCategoryAttributes API to check if you missed any attributes with an is_mandatory field value of 1. |
| `4159` | Create product failed | Local price limit. sale price and sepcial price can't be less than the specified percentage, please check the detail field for more information. |
| `309` | Video id status is not audit success | Only videos that are in the AUDIT SUCCESSS state can be used in payload. |

**Example**

Request sample 1:

```
payload=<?xml version="1.0" encoding="utf-8"?><Request><Product><PrimaryCategory>11069</PrimaryCategory><SPUId/><AssociatedSku/><AutoAllocateStock>false</AutoAllocateStock><Ventures><Venture>MY</Venture><Venture>SG</Venture><Venture>TH</Venture></Ventures><Images><Image>http://imgsrc.baidu.com/imgad/pic/item/37d12f2eb9389b508e646c9b8f35e5dde6116e64.jpg</Image><Image>http://imgsrc.baidu.com/imgad/pic/item/37d12f2eb9389b508e646c9b8f35e5dde6116e64.jpg</Image></Images><Attributes><name>api create product test sample</name><video>video id</video><short_description>This is a nice product</short_description><description>This is a nice product description</description><brand>Remark</brand><model>asdf</model><kid_years>Kids (6-10yrs)</kid_years><package_length>11</package_length><package_height>22</package_height><package_weight>1</package_weight><package_width>44</package_width><package_content>this is what's in the box</package_content></Attributes><Skus><Sku><SellerSku>api-create-test1-14</SellerSku><color_family>Green</color_family><size>40</size><quantity>120</quantity><sg_retail_price>388.50</sg_retail_price><sg_sales_price>308.50</sg_sales_price><retail_price>388.50</retail_price><sales_price>308.50</sales_price><tax_class>default</tax_class><Images><Image>http://imgsrc.baidu.com/imgad/pic/item/37d12f2eb9389b508e646c9b8f35e5dde6116e64.jpg</Image><Image>http://imgsrc.baidu.com/imgad/pic/item/37d12f2eb9389b508e646c9b8f35e5dde6116e64.jpg</Image></Images></Sku></Skus></Product></Request>
```

Response sample 1:

```
data={}
```

---

## GetGlobalProductExtension

<a id="product-global-extension"></a>

- **Path**: `/product/global/extension`
- **Method**: `get`
- **Last modified**: 2024-03-08 13:40:45

Use this API to query the extension info of the specified global product. (CrossBoarderSellersOnly)

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `global_item_ids` · _Number[]_ · **optional** — Batch size is limited to 50
- `item_ids` · _Number[]_ · **optional** — Batch size is limited to 50, if global_Item_ids is present, this field will be ignored
- `country` · _String_ · **optional** — country,if global_Item_ids is present, this field will be ignored

**Response parameters**

- `success` · _Boolean_ · **optional** — process result，If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in packages is equal to 0 to determine that the processing is successful.
- `error_code` · _String_ · **optional** — exists when success is false
- `error_msg` · _String_ · **optional** — exists when success is false
- `data` · _Object[]_ · **optional** — resp body
  - `global_item_id` · _Number_ · **optional** — globalItemId
  - `item_id` · _Number_ · **optional** — itemId
  - `products` · _Object[]_ · **optional** — products
    - `abs` · _String_ · **optional** — average number of items included in an order
    - `item_id` · _Number_ · **optional** — itemId
    - `market` · _String_ · **optional** — market
    - `semi_status` · _Number_ · **optional** — 0 : false 1:true
    - `skus` · _Object[]_ · **optional** — skus
      - `sku_id` · _Number_ · **optional** — sku_id
      - `seller_sku` · _String_ · **optional** — sellerSku
      - `no_postage_fee` · _Object_ · **optional** — no_postage_fee
      - `special_price` · _Object_ · **optional** — special_price
      - `price` · _Object_ · **optional** — freight_insurance

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `E1000` | Internal Application Error | Endpoint exception, please use MY endpoint for GSP related requests. |

**Example**

Request sample 1:

```
global_item_ids=[1234]
item_ids=[1234]
country=SG/VN/PH/TH/MY
```

Response sample 1:

```
success=true
error_code=E0019
error_msg=Invalid Limit
data=[{"global_item_id":"180226526","item_id":13243454,"products":[{"market":"LAZADA_VN","item_id":1234234,"semi_status":1,"abs":1,"skus":[{"sku_id":123412,"seller_sku":"ctf-a","no_postage_fee":{"amount":3500,"currency":"VND"},"special_price":{"amount":3800,"currency":"VND"},"price":{"amount":7500,"currency":"VND"}}]}]}]
```

---

## GetGlobalProductStatus

<a id="product-global-status-get"></a>

- **Path**: `/product/global/status/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 12:17:23

Use this API to query the status of the specified global product. It takes several minutes for the global product to be created on each site. (CrossBoarderSellersOnly)

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `params` · _Object_ · **required** — put the "sellerSku" as the key

**Response parameters**

- `data` · _String_ · **required** — result json type string
- `success` · _Boolean_ · **required** — success flag
- `error_code` · _String_ · **required** — error code
- `error_msg` · _String_ · **required** — error msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `"E0207"` | "E207: SKU not exist" | This SKU can not be found under your shop account. |
| `E0208` | Product not exist | The requested seller sku does not exist in the current store, please check the correctness of the seller sku. |
| `E1000` | Internal Application Error | Endpoint exception, please use MY endpoint for GSP related requests. |
| `E0208` | Product not exist | The requested seller sku does not exist in the current store, please check the correctness of the seller sku. |

**Example**

Request sample 1:

```
params={"sellerSku" : "123"}
```

Response sample 1:

```
data={}
success=true
error_code=E207
error_msg=get SKU failed
```

---

## GetRecommendPrice

<a id="product-global-semi-recommend-price-get"></a>

- **Path**: `/product/global/semi/recommend/price/get`
- **Method**: `GET/POST`
- **Last modified**: 2024-02-28 22:44:17

get recommend price

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — request data

**Response parameters**

- `data` · _Object_ · **required** — data
  - `item_id` · _Number_ · **required** — 0
  - `skus` · _Object[]_ · **required** — 1
    - `seller_sku` · _String_ · **required** — seller sku
    - `country_price` · _Object[]_ · **required** — country info
      - `market` · _String_ · **required** — LAZADA_SG
      - `no_postage_price` · _String_ · **required** — 10.01
      - `currency` · _String_ · **required** — SGB
    - `sku_id` · _Number_ · **required** — 0
  - `global_item_id` · _Number_ · **required** — 0
- `success` · _Boolean_ · **required** — true
- `error_code` · _String_ · **required** — null
- `error_msg` · _String_ · **required** — null

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
payload=request data
```

Response sample 1:

```
data=data
success=true
error_code=null
error_msg=null
```

---

## GetUnfilledAttribute

<a id="product-global-unfilled-attribute-get"></a>

- **Path**: `/product/global/unfilled/attribute/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 14:54:09

get the product which have attribute not filled （for cross boarder sellers Only）

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `offset` · _Number_ · **required** — offset
- `limit` · _Number_ · **required** — pageSize
- `attributeTag` · _String_ · **required** — only support key_prop

**Response parameters**

- `data` · _Object_ · **required** — response body
  - `total_products` · _Number_ · **required** — total numbers
  - `products` · _Object[]_ · **required** — products
    - `item_id` · _Number_ · **required** — product id
    - `primary_category` · _Number_ · **required** — category id
    - `seller_sku` · _String_ · **required** — seller sku
    - `attributes` · _Object[]_ · **required** — all attributes
      - `advanced` · _Object_ · **required** — 1: key attribute
        - `is_key_prop` · _Number_ · **required** — 1: key attribute
      - `input_type` · _String_ · **required** — text
      - `options` · _String[]_ · **required** — all values
      - `name` · _String_ · **required** — key name
      - `is_mandatory` · _Number_ · **required** — 1: mandatory
      - `attribute_type` · _String_ · **required** — normal
      - `label` · _String_ · **required** — attritebu label
- `success` · _Boolean_ · **required** — success or false
- `error_detail` · _String_ · **required** — error detail
- `error_code` · _String_ · **required** — error code
- `errors` · _String_ · **required** — errors
- `error_msg` · _String_ · **required** — error msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `19` | E019: Invalid Limit | The maximum value of limit is 50 |
| `306` | E306: attribute tag not allowed | attributeTag only enter "key_ prop" |

**Example**

Request sample 1:

```
offset=0
limit=50
attributeTag=key_prop
```

Response sample 1:

```
data={}
success=true
error_detail=null
error_code=19
errors=[]
error_msg=E019: Invalid Limit
```

---

## GetUpgradableGlobalPlusProductList

<a id="product-global-semi-avaible-get"></a>

- **Path**: `/product/global/semi/avaible/get`
- **Method**: `GET/POST`
- **Last modified**: 2024-02-28 20:54:16

get an upgradeable global plus product list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `type` · _String_ · **required** — global
- `country` · _String_ · **optional** — country
- `pageNo` · _String_ · **required** — page no
- `pageSize` · _String_ · **required** — page size
- `currentIndex` · _String_ · **required** — current index
- `itemIds` · _Number[]_ · **optional** — itemId or productId

**Response parameters**

- `data` · _Object_ · **required** — data
  - `total_products` · _Number_ · **required** — 1
  - `page_size` · _Number_ · **required** — 0
  - `type` · _String_ · **required** — global
  - `current_index` · _Number_ · **required** — 0
  - `products` · _Object[]_ · **required** — data
    - `item_id` · _Number_ · **required** — 3025196234185548
    - `skus` · _Object[]_ · **required** — sku
      - `item_id` · _Number_ · **required** — 3025196234185548
      - `package_height` · _String_ · **required** — 10
      - `package_weight` · _String_ · **required** — 0.5
      - `package_length` · _String_ · **required** — 10
      - `package_width` · _String_ · **required** — 10
      - `seller_sku` · _String_ · **required** — sku
      - `country_info` · _Object[]_ · **required** — country info
        - `market` · _String_ · **required** — LAZADA_SG
        - `quantity` · _Number_ · **required** — 1
        - `price` · _String_ · **required** — 1
        - `currency` · _String_ · **required** — 1
        - `special_price` · _String_ · **required** — 1
        - `item_id` · _Number_ · **optional** — country item id
        - `sku_id` · _Number_ · **optional** — country sku id
        - `abs` · _String_ · **optional** — abs
      - `sku_id` · _Number_ · **required** — 3025196234185548
    - `global_item_id` · _Number_ · **required** — 3025196234185548
  - `current_page` · _String_ · **optional** — 0
- `success` · _Boolean_ · **required** — true

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
type=global
country=SG
pageNo=0
pageSize=10
currentIndex=0
itemIds=[3135539721]
```

Response sample 1:

```
data=data
success=true
```

---

## SemiProductUpdate

<a id="product-global-semi-update"></a>

- **Path**: `/product/global/semi/update`
- **Method**: `post`
- **Last modified**: 2024-03-11 10:13:31

SemiProductUpdate

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _String_ · **required** — request data

**Response parameters**

- `data` · _Object_ · **optional** — response data
  - `product_id` · _Number_ · **optional** — upgrade item id or global item id
- `success` · _Boolean_ · **optional** — success or fail
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
| `10001` | Illegal parameters | 参数不合法 |
| `10002` | System error  | 系统异常 |
| `10003` | Item not found | 商品未找到 |
| `10004` | price need to be lower than the original price | 价格需低于零售价 |
| `10005` | 商品已升级 | 商品已升级 |
| `10006` | 商品校验失败，无法升级 | 商品校验失败，无法升级 |

**Example**

Request sample 1:

```
payload={"global_item_id":null,"item_id":4003109638,"country":["my"],"skus":[{"item_id":4003109638,"seller_sku":"ly-testSKU-0-1709174493544","sku_id":22803519824,"package_height":"1","package_length":"1","package_width":"1","package_weight":"0.1","country_info":[{"market":"LAZADA_MY","quantity":null,"no_postage_price":"8","price":"10","currency":"MYR"}]}]}
```

Response sample 1:

```
data=true
success=true
error_code=null
error_msg=null
```

---

## SemiProductUpgrade

<a id="product-global-semi-upgrade"></a>

- **Path**: `/product/global/semi/upgrade`
- **Method**: `GET/POST`
- **Last modified**: 2024-02-28 11:48:39

SemiProductUpgrade

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — request data

**Response parameters**

- `data` · _Object_ · **required** — response data
  - `product_id` · _Number_ · **optional** — upgrade item id or global item id
- `success` · _Boolean_ · **required** — success or fail
- `error_code` · _String_ · **required** — error code
- `error_msg` · _String_ · **required** — error msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
payload={"global_item_id":null,"item_id":4003109638,"country":["my"],"skus":[{"item_id":4003109638,"seller_sku":"ly-testSKU-0-1709174493544","sku_id":22803519824,"package_height":"1","package_length":"1","package_width":"1","package_weight":"0.1","country_info":[{"market":"LAZADA_MY","quantity":null,"no_postage_price":"8","price":"10","currency":"MYR"}]}]}
```

Response sample 1:

```
data=true
success=true
error_code=null
error_msg=null
```

---

## UpdateGlobalProductAttribute

<a id="product-global-attribute-update"></a>

- **Path**: `/product/global/attribute/update`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:54:09

update global product attribute (For cross boarder sellers only)

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — the content want to update

**Response parameters**

- `success` · _Boolean_ · **required** — success or fail
- `error_detail` · _String_ · **required** — error detail
- `error_code` · _String_ · **required** — error code
- `errors` · _String_ · **required** — all errors
- `error_msg` · _String_ · **required** — error msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `501` | E501: Update product failed | Update product failed |

**Example**

Request sample 1:

```
payload=<?xml version="1.0" encoding="utf-8"?> <Request>   <Product>     <item_id>624525348185548</item_id>     <AssociatedSku>wensong_test_cb_hk</AssociatedSku>     <PrimaryCategory>4339</PrimaryCategory>     <Attributes>       <pants_length>Full Length,Cropped</pants_length>       <fa_pattern>Plaid</fa_pattern>     </Attributes>   </Product> </Request>
```

Response sample 1:

```
success=true
error_detail={\"success\":false,\"error\":{\"global_error\":[\"global seller not exist. my sellerId:1000567751\"]}}
error_code=501
errors={\"success\":false,\"error\":{\"global_error\":[\"global seller not exist. my sellerId:1000567751\"]}}
error_msg=E501: Update product failed
```

---

## deleteMerchantProduct

<a id="product-global-delete"></a>

- **Path**: `/product/global/delete`
- **Method**: `post`
- **Last modified**: 2024-03-29 10:46:20

Use this API to delete the product。(CrossBoarderSellersOnly)

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `type` · _String_ · **required** — Product Types
- `country` · _String_ · **optional** — country,if type is "global", this field will be ignored
- `product_id` · _Number_ · **required** — When  type is "global", it is the global product ID, when type is "single",  product id is the IC product ID.

**Response parameters**

- `data` · _Object_ · **optional** — body，deleteGspProductResult is true，mean update gsp product success。when deleteICProductResult is false，mean update IC product fail，and deleteIcProductFailResultList will show the reason
  - `deleteGspProductResult` · _Boolean_ · **optional** — update gsp product result
  - `deleteICProductResult` · _Boolean_ · **optional** — update ic product result，if it is false，deleteIcProductFailResultList will show reason
  - `deleteIcProductFailResultList` · _Object[]_ · **optional** — update ic fail result list
    - `productId` · _Number_ · **optional** — ic product id
    - `market` · _String_ · **optional** — market
    - `updateResult` · _Boolean_ · **optional** — update ic product result
    - `updateMsg` · _String_ · **optional** — update fail message
- `success` · _Boolean_ · **optional** — process result，If this is true, it doesn't mean that everything is processed successfully
- `error_code` · _String_ · **optional** — exists when success is false
- `error_msg` · _String_ · **optional** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
type=global/single
country=SG/VN/PH/TH/MY
product_id=1234  	
```

Response sample 1:

```
data={   "data": {     "deleteICProductResult": true,     "deleteGspProductResult": true,     "class": "com.alibaba.gsp.client.common.response.DeleteProductResponse"   },   "success": true,   "class": "com.alibaba.normandie.gateway.client.domain.lazop.APIResult" }
success=true
error_code=E0019
error_msg=Invalid Limit
```

---

## updateProductStatus

<a id="product-global-update-status"></a>

- **Path**: `/product/global/update/status`
- **Method**: `post`
- **Last modified**: 2024-03-29 10:46:19

product up shelf or down shelf，(CrossBoarderSellersOnly)

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `type` · _String_ · **required** — Product Types
- `country` · _String_ · **optional** — country,if type is "global", this field will be ignored
- `product_id` · _Number_ · **required** — When  type is "global", it is the global product ID, when type is "single",  product id is the IC product ID.
- `status` · _String_ · **required** — update product type

**Response parameters**

- `data` · _Object_ · **optional** — body，updateGspProductResult is true，mean update gsp product success。when updateICProductResult is false，mean update IC product fail，and updateIcProductFailResultList will show the reason
  - `update_gsp_product_result` · _Boolean_ · **optional** — update gsp product result
  - `update_ic_product_result` · _Boolean_ · **optional** — update ic product result，if it is false，deleteIcProductFailResultList will show reason
  - `update_ic_product_fail_result_list` · _Object[]_ · **optional** — update ic fail result list
    - `product_id` · _Number_ · **optional** — ic product id
    - `market` · _String_ · **optional** — market
    - `update_result` · _Boolean_ · **optional** — update ic product result
    - `update_msg` · _String_ · **optional** — update fail message
- `success` · _Boolean_ · **optional** — process result，If this is true, it doesn't mean that everything is processed successfully
- `error_code` · _String_ · **optional** — exists when success is false
- `error_msg` · _String_ · **optional** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
type=global/single
country=SG/VN/PH/TH/MY
product_id=1234  	
status=upShelf / downShelf
```

Response sample 1:

```
data={   "data": {     "deleteICProductResult": true,     "deleteGspProductResult": true,     "class": "com.alibaba.gsp.client.common.response.DeleteProductResponse"   },   "success": true,   "class": "com.alibaba.normandie.gateway.client.domain.lazop.APIResult" }
success=true
error_code=E0019
error_msg=Invalid Limit
```

---

