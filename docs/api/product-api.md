# Product API

## AdjustSellableQuantity

<a id="product-stock-sellable-adjust"></a>

- **Path**: `/product/stock/sellable/adjust`
- **Method**: `post`
- **Last modified**: 2022-07-22 16:55:40

Use this API to increase or decrease sellable quantity of one or more existing products. The maximum number of products that can be updated is 50, but 20 is recommended.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — Please take demo as reference.

**Response parameters**

- `data` · _Object_ · **optional** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format | The request format is not valid. |
| `6` | E006: Unexpected internal error | Unexpected internal error. |
| `30` | E030: Empty Request | The request URL is not complete. |
| `204` | E204: Too many SKU in one request | The number of SKUs exceeds the limit. |
| `501` | E501: Update product failed | Failed to update the product price or stock. |
| `901` | E901: The request is too frequent, or the requested functionality is temporarily disabled. | Failed to return the requested data due to high calling frequency or disabled functionality. Please try again later. |
| `1000` | Internal Application Error | Internal system error. |
| `212` | Sellable inventory cannot be negative | Please call GetProduct/GetProductItem API to check the current sellable inventory of SKU, the quantity of reduced sellable inventory cannot be greater than the current sellable inventory. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `4170` | During the Bday Mega campaign, there are restrictions for stock adjustments in effect between YYYY-MM-DD HH:MM:SS - YYYY-MM-DD HH:MM:SS. Sellers can increase stocks, but may not decrease stocks. | This SKU is participating in a special Campaign, so this SKU can't be updated to set stock less than current stock. |
| `212` | INV_NEGATIVE_SELLABLE | The updated Sellable Inventory Quantity cannot be negative, and the quantity of inventory reduced in the request cannot be greater than the current Sellable Inventory Quantity. |

**Example**

Request sample 1:

```
payload=<Request>     <Product>         <Skus> <!--single warehouse demo-->             <Sku>                 <ItemId>234234234</ItemId>                 <SkuId>234</SkuId>                 <SellerSku>Apple-SG-Glod-64G</SellerSku>                 <SellableQuantity>20</SellableQuantity>             </Sku> <!--multi warehouse demo-->             <Sku>                 <ItemId>234234234</ItemId>                 <SkuId>234</SkuId>                 <SellerSku>Apple-SG-Glod-64G</SellerSku>                 <MultiWarehouseInventories>                     <MultiWarehouseInventory>                         <WarehouseCode>warehouseTest1</WarehouseCode>                         <SellableQuantity>20</SellableQuantity>                     </MultiWarehouseInventory>                     <MultiWarehouseInventory>                         <WarehouseCode>warehouseTest2</WarehouseCode>                         <SellableQuantity>30</SellableQuantity>                     </MultiWarehouseInventory>                     <MultiWarehouseInventory>                         <BizType>2</BizType> <!--pre inventory biz type-->                         <BizCode>xxxxxxx</BizCode> <!--edit pre inventory if null mean add pre inventory -->                         <ShipTime>1747037186000</ShipTime> <!--pre inventory shiptime-->                         <WarehouseCode>dropshipping</WarehouseCode> <!--pre inventory WarehouseCode-->                         <SellableQuantity>30</SellableQuantity> <!--delete pre inventory -99999999999-->                     </MultiWarehouseInventory>                     <MultiWarehouseInventory>                         <BizType>2</BizType>                         <ShipTime>1747037186000</ShipTime>                         <WarehouseCode>dropshipping</WarehouseCode>                         <SellableQuantity>30</SellableQuantity>                     </MultiWarehouseInventory>                 </MultiWarehouseInventories>             </Sku>         </Skus>     </Product> </Request>
```

Response sample 1:

```
data={}
```

---

## BatchUpdateSizeChart

<a id="size-chart-batch-update"></a>

- **Path**: `/size/chart/batch/update`
- **Method**: `post`
- **Last modified**: 2023-11-15 14:05:34

批量更新尺码表

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — product size chart

**Response parameters**

- `data` · _Object_ · **optional** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `4174` | E4174 | The size template corresponding to this product does not exist |
| `4175` | E4175 | The size chart image url incorrect |
| `4177` | E4177 | Empty Product Id or Size Chart |
| `4178` | E4178 | Invalid size chart format, Size Chart format must image url or template id |
| `4179` | E4179 | Cannot exceed the maximum size chart，maximum is 50 |
| `4180` | E4180 | The product category not support size chart |
| `4181` | E4181 | Update size chart all failed |
| `4182` | E4182 | only local seller and IntraAsean seller can set size chart |
| `4183` | E4183 | Update size chart part failed |
| `4185` | E4185 | The third-party ic service invocation is error |
| `4187` | E4187 | The size chart value is invalid,Please input correct template id or url |
| `4189` | E4189 | One product only can set one size chart |

**Example**

Request sample 1:

```
payload={"Request":{"Product":{"SizeCharts":{"SizeChart":[{"product_id":"2871948231","size_chart":"123"},{"product_id":"2894116588","size_chart":"234"}]}}}}
```

Response sample 1:

```
data={}
```

---

## CreateProduct

<a id="product-create"></a>

- **Path**: `/product/create`
- **Method**: `post`
- **Last modified**: 2022-07-14 15:09:51

Use this API to create a single new product.

Find more details below: https://open.lazada.com/apps/doc/doc?nodeId=30720&docId=120949

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — <a href='https://open.lazada.com/apps/doc/doc?nodeId=30720&docId=120949' target='_brank'>Parameter description</a>

**Response parameters**

- `data` · _Object_ · **required** — Response body
  - `item_id` · _Number_ · **optional** — The ID of this product,which is not unique in different country
  - `sku_list` · _Object[]_ · **optional** — Seller SKU information list
    - `seller_sku` · _String_ · **optional** — The SellerSku that is defined in seller
    - `shop_sku` · _String_ · **optional** — The ShopSku that is generated by the system,which is unique in different country
    - `sku_id` · _Number_ · **optional** — The SKU ID that is generated by the system,which is unique in different country
  - `item_status` · _String_ · **optional** — The status of product created, including Active, InActive, and Pending QC. if a product is in Pending status, it needs to be reviewed and will be processed within 24 hours.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `1` | E001: Parameter %s is mandatory | The parameter is mandatory but not specified. |
| `5` | E005: Invalid Request Format | The request format is not valid. |
| `6` | E006: Unexpected internal error | Unexpected internal error. |
| `30` | E030: Empty Request | The request URL is not complete. |
| `201` | E201: %s Invalid CategoryId | The specified category ID is not valid. |
| `202` | E202: %s Invalid SPUId | The specified SPU ID is not valid. |
| `205` | E205: SPU does not exist | The specified SPU ID does not exist. |
| `206` | E206: Different category id in SPU and PrimaryCategory | The specified category ID is not consistent. |
| `500` | E500: Create product failed | Failed to create the product. |
| `502` | E502: Search SPU failed | Failed to search for the specified SPU. |
| `512` | E512: BIZ_CHECK_MANGROVE_RULE_QC | The request failed because the category was banned |
| `901` | E901: The request is too frequent, or the requested functionality is temporarily disabled. | Failed to return the requested data due to high calling frequency or disabled functionality. Please try again later. |
| `1000` | Internal Application Error |  Internal system error. |
| `4104` | BIZ_CHECK_PRICE_PRECISION_INVALID | Price accuracy check failed |
| `4105` | BIZ_CHECK_SELLER_SKU_DUPLICATE | SellerSku repeat |
| `4106` | CHK_CATPROP_CPV_INPUT_SIZE_LIMIT | Item customization attributes exceeded the limit |
| `4107` | CHECK_CAT_PROP_INVALID_NUMBER | The category attribute value is invalid |
| `4108` | CHK_BASIC_REQUIRED | Basic attributes Mandatory verification |
| `4109` | CHK_SKU_PROPS_NOT_MATCH_SALE_PROP | Sku sales attributes do not match |
| `4110` | BIZ_CHECK_CAT_PROP_MANDATORY | Category attribute This parameter is mandatory |
| `4111` | CHK_CATPROP_CPV_TEXT_REPEAT | Category attribute content repeats |
| `4112` | CHK_SKU_PROPS_DUPLICATE | Duplicate Sku attributes |
| `4113` | CHK_SKU_PROPS_NOT_IDENTICAL | Sales attribute is not filled in |
| `4114` | BIZ_CHECK_PRICE_SAMPLE_NON_ZERO | The sample price is 0 |
| `4115` | CHK_CATPROP_CPV_NOT_ENUM | The CPV attribute is not one of the options provided by the category |
| `4116` | BIZ_CHECK_MAIN_IMAGE_DUPLICATE | Repeat check of master diagram |
| `4117` | BIZ_CHECK_SPECIAL_PRICE_FROM_DATE_AFTER_TO_DATE | Special offer date check |
| `4118` | BIZ_CHECK_PRICE_IS_ZERO | Price is not 0 check |
| `4119` | BIZ_CHECK_SPECIAL_PRICE_RATE_OUT_OF_RANGE | Special price range check |
| `4120` | CHK_CATPROP_CPV_MAX_LEGNTH | Verify the maximum CPV value of a category |
| `4121` | BIZ_CHECK_SPECIAL_PRICE_PRECISION_INVALID | Special accuracy check does not pass |
| `4122` | BIZ_CHECK_VIRTUAL_BUNDLE_SKU_SUB_OVER_LIMIT | virtual bundle sku relation skuc over limit |
| `4123` | BIZ_CHECK_MANGROVE_RULE | Restricted publication check |
| `4124` | BIZ_CHECK_MANGROVE_RULE_QC | MANGROVE rule verification |
| `4125` | THD_IC_F_IC_DOMAIN_PROPERTY_002 | IC Verification category Attribute This parameter is mandatory |
| `4126` | THD_IC_F_IC_INFRA_PRODUCT_036 | SellerSku repeat |
| `4127` | THD_IC_F_IC_SCENE_PUBLISH_012 | ProductId repeat |
| `4128` | THD_IC_F_IC_DOMAIN_ACTOR_006 | Seller lock cannot be edited |
| `4129` | BIZ_CHECK_PROP_SPECIAL_CHAR | Special characters are not allowed:   "^~<>\| |
| `4130` | BIZ_CHECK_OFFICIAL_STORE_BRAND_UNAUTHORIZED | Uncertified brand |
| `4131` | BIZ_CHECK_CAT_PROP_SENSITIVE_WORDS | description has sensitive words New brand |
| `4132` | Invalid Request Format | Invalid Request Format |
| `4133` | Invalid variation | Invalid variation |
| `4134` | Please select the last level category. | Please select the last level category. |
| `4135` | THD_IC_ERR | IC service error |
| `4136` | SELLER_SKU_NOT_FOUND | seller sku not found |
| `4137` | ITEM_NOT_FOUND | IC commodity query less than |
| `4138` | BIZ_CHECK_EXIST_OUTER_IMAGE | The image exists in the outer link |
| `4139` | BIZ_CHECK_MAIN_IMAGE_REQUIRE | Main image is require |
| `4140` | CHK_ENUM_PROP_VALUE_NOT_IN_OPTION | Class does not have this attribute |
| `4141` | THD_IC_ERR_F_IC_INFRA_PRODUCT_036 | SellerSku repeat |
| `4142` | THD_BRAND_ID_IS_NOT_VALID_IN_CATEGORY | The brand is invalid in the category |
| `4143` | BIZ_CHECK_SALEPROP_ATTRIBUTE_INVALID | The selling attributes are not defined in the variation |
| `4144` | BIZ_CHECK_SKU_NOT_CONTAIN_SALEPROP | The sku does not contain the saleProp tag |
| `4145` | BIZ_CHECK_SALEPROP_AND_OLD_PARAM_REPEAT | You can't put sales properties in both saleProp and sku |
| `4146` | BIZ_CHECK_SALEPROP_NOT_SUPPORT_THUMBNAIL | Thumbnails are not supported for this sale attribute |
| `4147` | THD_IC_ERR_F_IC_SERVICE_EDIT_002 | Concurrent product edit is not allowed |
| `4148` | BIZ_CHECK_ITEM_HAS_REACH_LIMIT | Seller's online product count has reach limit |
| `4149` | BIZ_CHECK_PACKAGE_DECIMAL_INVALID | Package attribute value is not valid |
| `4150` | SELLER_SKU_INVALID | seller sku is invalid |
| `4151` | BIZ_CHECK_MTEE_RULE_QC | Quality Check, Failed by Lazada Policy |
| `4152` | THD_INVENTORY_ERR_INV_PARAM_ILLEGAL | illegal parameter |
| `4153` | THD_IC_ERR_FC_IC_SKU_IMAGE_001 | If you upload a sku picture then all sku must be uploaded |
| `4154` | SYS_REQUEST_TOO_FAST | Slow down a bit! Too many opertions at once. Please try again later |
| `4155` | BIZ_CHECK_NO_EDIT_ITEM_LOCK | This product is currently locked so you are unable to do editing. Please go to Data Inisight > Policy Compliance to unlock the product |
| `4156` | C035: No brand cannot be selected | Can't set Brand name as No brand, Mandatory select Brand due to LazMall identity |
| `4157` | BIZ_CHECK_SPECIAL_PRICE_GREATER_THAN_PRICE | The discount price must be cheaper than the regular price |
| `4158` | THD_IC_ERR_F_DOMAIN_IMAGE_00_01_003 | Main image has duplicate. Please remove to continue |
| `4159` | IC_EXCEPTION | IC service is exception |
| `4160` | THD_IC_ERR_F_PRODUCT_00_15_004 | The max length of Multi title for locale  can not exceed 255 bytes |
| `4161` | VARIATION_CATEGORY_ATTRIBUTE_INVALID | This  variaition attribute  is not found in the category attribute library |
| `4162` | THD_IC_ERR_F_IC_ABILITY_PG | Product edit was blocked by tag |
| `4163` | BIZ_CHECK_RESTRICTED_CATEGORY | You are not authorised to sell this category |
| `4164` | BIZ_CHECK_MAX_PACKAGE_WEIGHT | The package weight exceeds 40kg, please make change or contact your category manager to apply DBS permission. |
| `4165` | BIZ_CHECK_MAX_PACKAGE_DIMENISIONS | The Package dimension(Length+Width+Height)  exceeds 300cm,  please make change or contact your category manager to  apply DBS permission. |
| `4166` | THD_IC_ERR_F_IC_INFRA_SPU_036 | eancode already exists |
| `4167` | THD_IC_ERR_F_IC_DOMAIN_PROPERTY_002 | The value of category property is required,property |
| `4168` | BIZ_CHECK_BRAND_PERMISSION_TIER_TWO | Tienes que solicitar dicha marca para poder utilizarla. |
| `4169` | CHK_IMAGE_MAX_ITEMS | Upload a maximum of 8 pictures |
| `500` | Create product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `SellerNotActive` | Seller not active,please check seller status | The seller's store status is inactive can not call the commodity API, you can call the GetSeller API and based on the Status field to confirm the current status of the store, if the seller has questions about this status, please want to seller center seller customer service consulting how to modify the status. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `500` | Create product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `5` | Invalid Request Format | Please check that the payload is documented and conforms to the XML formatting requirements. If you have URLs with “&” in them, then please use Cdata tags to avoid XML parsing problems. |
| `4221` | BIZ_CHECK_MTEE_RISK_RULE_TRIGGER_MTEE_RISK_RULE_TRIGGER_ERROR | The price or content of this product violates the current national policy, please modify it according to the relevant policy mentioned in the details of the message field. |
| `4139` | BIZ_CHECK_MAIN_IMAGE_REQUIRE:Main image is require | Please add at least one main or SKU image of the item. lazada does not allow uploading items without images. |
| `4130` | BIZ_CHECK_OFFICIAL_STORE_BRAND_UNAUTHORIZED | The store you requested is a Lazmall store, there are strict restrictions on the use of brands for this type of store, please apply for permission to use the relevant brand on the Seller Center -> setting -> brand page. |
| `4112` | CHK_SKU_PROPS_DUPLICATE | The values of variant attributes are duplicated between SKUs. Multi-SKU products need to set variant attributes and make sure that the values of variant attributes owned by each SKU cannot be duplicated. |
| `209` | Invalid variation | The number of variants in the payload exceeds the upper limit or does not meet the requirements, please check the message in the message to understand the detailed reasons and modify the payload. |

**Example**

Request sample 1:

```
payload={   "Request": {     "Product": {       "PrimaryCategory": "10002019",       "Images": {         "Image": [           "XXX"         ]       },       "Attributes": {         "name": "test 2022 02",         "description": "TEST",         "brand": "No Brand",         "model": "test",         "waterproof": "Waterproof",         "warranty_type": "Local seller warranty",         "warranty": "1 Month",         "short_description": "cm x 1efgtecm<br /><brfwefgtek",         "Hazmat": "None",         "material": "Leather",         "laptop_size": "11 - 12 inches",         "delivery_option_sof": "No",         "name_engravement": "Yes",         "gift_wrapping": "Yes",         "preorder_enable": "Yes",         "preorder_days": "25"       },       "Skus": {         "Sku": [           {             "SellerSku": "test2022 02",             "quantity": "3",             "price": "35",             "special_price": "33",             "special_from_date": "2022-06-20 17:18:31",             "special_to_date": "2025-03-15 17:18:31",             "package_height": "10",             "package_length": "10",             "package_width": "10",             "package_weight": "0.5",             "package_content": "laptop bag",             "coming_soon": "2024-11-11 00:00:00",             "delay_delivery_days":12,             "Images": {               "Image": [                 "XXX"               ]             }           }         ]       }     }   } }
```

Response sample 1:

```
data={}
```

---

## DeactivateProduct

<a id="product-deactivate"></a>

- **Path**: `/product/deactivate`
- **Method**: `post`
- **Last modified**: 2022-07-28 17:05:41

Use this API to deactivate Product or SKUs corresponding to the product

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `apiRequestBody` · _String_ · **required** — Parameter ItemId is mandatory, Skus is optional

**Response parameters**

- `data` · _Object_ · **optional** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `E0001` | Parameter ItemId is mandatory | Parameter ItemId is mandatory |
| `E0002` | Product not exists | Product not exists |
| `E0003` | Seller Sku not exists | Seller Sku not exists |
| `E0004` | Product Status not online | Product Status not online |
| `E0006` | Unexpected internal error | Unexpected internal error |
| `E0004` | Product Status not online | The current item is already in the Inactive state and does not need to call this API. |
| `E0004` | Product Status not online | The current item is already in the Inactive state and does not need to call this API. |
| `E0004` | Product Status not online | The current item is already in the Inactive state and does not need to call this API. |
| `E0004` | Product Status not online | The current item is already in the Inactive state and does not need to call this API. |
| `E0004` | Product Status not online | The current item is already in the Inactive state and does not need to call this API. |
| `E0002` | Product:item id not exist | The item id in your request does not exist with the current store, please call GetProducts/GetProductItem API to check. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `4193` | The SellerSku parameter is no longer supported. Please update your parameter to use SkuId and try again | Seller sku field does not have uniqueness, so it cannot be used as a key field for editing products, please add SkuId field as product editing Key. |

**Example**

Request sample 1:

```
apiRequestBody=<Request><Product><ItemId>234234234</ItemId><Skus><SkuId>20690462002</SkuId><SellerSku>5000</SellerSku></Skus></Product></Request>
```

Response sample 1:

```
data={}
```

---

## GetBrandByPages

<a id="category-brands-query"></a>

- **Path**: `/category/brands/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 16:54:33

Use this API to retrieve all product brands by page index in the system.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `startRow` · _String_ · **required** — Number of brands to skip (i.e., an offset into the result set; together with the "limit" parameter, simple result set paging is possible; if you do page through results, note that the list of brands might change during paging).
- `pageSize` · _String_ · **required** — The maximum number of brands that can be returned. If you omit this parameter, the default of 40 is used. The Maximum is 200.

**Response parameters**

- `data` · _Object_ · **required** — Response data
  - `start_row` · _Number_ · **required** — start row
  - `page_index` · _Number_ · **required** — page index
  - `total_page` · _Number_ · **required** — total page (no use)
  - `module` · _Object[]_ · **required** — data module
    - `global_identifier` · _String_ · **required** — A unique string identifier for the brand across different systems. For example: ADIDAS, NIKE, APPLE.
    - `name_en` · _String_ · **required** — The English name of the brand.
    - `brand_id` · _Number_ · **required** — brand id
    - `name` · _String_ · **required** — The actual name of the brand.
  - `enable_total` · _Boolean_ · **required** — enable total or  not (no use)
  - `page_size` · _Number_ · **required** — page size
  - `total_record` · _Number_ · **required** — total number of record
- `success` · _Boolean_ · **required** — operation success or not
- `error_code` · _String_ · **required** — error code
- `error_msg` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
startRow=0
pageSize=20
```

Response sample 1:

```
data=[]
success=true
error_code=null
error_msg=null
```

---

## GetCategoryAttributes

<a id="category-attributes-get"></a>

- **Path**: `/category/attributes/get`
- **Method**: `get`
- **Last modified**: 2022-07-28 16:51:54

Use this API to get a list of attributes for a specified product category.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `primary_category_id` · _String_ · **required** — identifiers of category code
- `language_code` · _String_ · **optional** — Language code indicates the type of language you would like to translate. Please note not all languages are available in every region. For example, in Indonesia, only English and Indonesia are available.  If you are passing a language code which does not belong to your area, null value might receive. Please do make sure your language code is correct. Supported  language codes are listed as below: English:"en_US"  -  available in every area     Singapore:"en_SG" - available in Singapore    Thailand"th_TH" - available in Thailand     Indonesia:"id_ID" - available in Indonesia     Vietnam:"vi_VN" - available in Vietnam    Philippines: "fil_PH" - available in Philippines     Malaysia : "ms_MY" - available in Malaysia     Default(if null is passed): "en_US"

**Response parameters**

- `data` · _Object[]_ · **optional** — Response body
  - `advanced` · _Object_ · **optional** — When the attribute is key attribute, is_key_prop = 1.  When the attribute is not key attribute,  is_key_prop = 0.
  - `label` · _String_ · **optional** — Human-readable display name of the attribute
  - `name` · _String_ · **optional** — Name of the attribute
  - `is_mandatory` · _Number_ · **optional** — Whether the attribute is mandatory
  - `attribute_type` · _String_ · **optional** — Attribute type
  - `input_type` · _String_ · **optional** — Attribute input type (text, date,numeric,img,rich text, singleSelect，multiSelect,enumInput,multiEnumInput) multiEnumInput/multiEnumInput supports custom value
  - `options` · _Object[]_ · **optional** — List of all option nodes
    - `name` · _String_ · **optional** — Option name
    - `en_name` · _String_ · **optional** — Option name in English
    - `id` · _Number_ · **optional** — options id
  - `is_sale_prop` · _Number_ · **optional** — Whether the attribute is sale property
  - `id` · _Number_ · **optional** — attribute id
  - `unit` · _Object_ · **optional** — {                 "precision": 1,                 "type": [                     "inch",                     "cm"                 ],                 "numericMin": "1",                 "numericMax": "999"             }
    - `type` · _String[]_ · **optional** — [                     "inch",                     "cm"                 ]
    - `numericMin` · _String_ · **optional** — 1
    - `numericMax` · _String_ · **optional** — 999
    - `precision` · _Number_ · **optional** — 0

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `57` | E057: No attribute sets linked to that category. |  No attributes are linked to the specified category. |
| `4228` | Query category is not active | The category ID in the request is in Inactive state and cannot be used. Please call GetCategoryTree to query the latest category. |
| `4227` | Query category is null | The category ID in the request does not exist in the current country, call the GetCategoryTree API to query the latest category list. |
| `4227` | Query category is null | The category ID in the request does not exist in the current country, call the GetCategoryTree API to query the latest category list. |
| `4228` | Query category is not active | The category ID in the request is in Inactive state and cannot be used. Please call GetCategoryTree to query the latest category. |
| `4228` | Query category is not active | The category ID in the request is in Inactive state and cannot be used. Please call GetCategoryTree to query the latest category. |
| `4227` | Query category is null | The category ID in the request does not exist in the current country, call the GetCategoryTree API to query the latest category list. |

**Example**

Request sample 1:

```
primary_category_id=8704
language_code=en_US
```

Response sample 1:

```
data=[]
```

---

## GetCategorySuggestion

<a id="product-category-suggestion-get"></a>

- **Path**: `/product/category/suggestion/get`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:02:37

Get product's category suggestion by product title

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `product_name` · _String_ · **required** — Product Name
- `image_url` · _String_ · **optional** — image url

**Response parameters**

- `data` · _Object_ · **required** — data
  - `categorySuggestions` · _Object[]_ · **optional** — Category Beans
    - `categoryId` · _Number_ · **optional** — categoryId
    - `categoryName` · _String_ · **optional** — categoryName
    - `categoryPath` · _String_ · **optional** — categoryPath

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `701` | E701: Empty category suggestion. | Empty category suggestion. |
| `1000` | Internal Application Error | Internal Application Error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `701` | Empty category suggestion. | The API is unable to provide suggestions, please change the product name and retry. |

**Example**

Request sample 1:

```
product_name=Man T-Shirt Summer
image_url=https://laz-img-cdn.alicdn.com/images/ims-web/TB19SB7aMFY.1VjSZFnXXcFHXXa.png
```

Response sample 1:

```
data={}
```

---

## GetCategoryTree

<a id="category-tree-get"></a>

- **Path**: `/category/tree/get`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:07:38

Use this API to retrieve the list of all product categories in the system.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `language_code` · _String_ · **optional** — Language code indicates the type of language you would like to translate. Please note not all languages are available in every region. For example, in Indonesia, only English and Indonesia are available.  If you are passing a language code which does not belong to your area, null value might receive. Please do make sure your language code is correct. Supported  language codes are listed as below: English:"en_US"  -  available in every area     Singapore:"en_SG" - available in Singapore    Thailand"th_TH" - available in Thailand     Indonesia:"id_ID" - available in Indonesia     Vietnam:"vi_VN" - available in Vietnam    Philippines: "fil_PH" - available in Philippines     Malaysia : "ms_MY" - available in Malaysia     Default(if null is passed): "en_US"

**Response parameters**

- `data` · _Object[]_ · **optional** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
language_code=en_US
```

Response sample 1:

```
data=[{   "children": [     {       "var": true,       "name": "Socks",       "leaf": true,       "category_id": 7436     },     {       "var": true,       "name": "Underwear",       "leaf": true,       "category_id": 7435     }   ],   "var": true,   "name": "Socks & Tights",   "leaf": false,   "category_id": 6588 }]
```

---

## GetNextCascadeProp

<a id="category-cascade-getnextcascadeprop"></a>

- **Path**: `/category/cascade/getNextCascadeProp`
- **Method**: `GET/POST`
- **Last modified**: 2022-12-20 10:30:36

Use this API to query next cascade prop.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `categoryId` · _Number_ · **required** — Category id
- `cascadeId` · _Number_ · **required** — Cascade id. Query from https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fattributes%2Fget
- `path` · _String_ · **optional** — current cascade property path

**Response parameters**

- `data` · _Object_ · **optional** — Response body
  - `prop` · _Object_ · **optional** — cascade property
    - `id` · _Number_ · **optional** — property id
    - `name` · _String_ · **optional** — property name
    - `required` · _Boolean_ · **optional** — Whether the attribute is mandatory
  - `propValue` · _Object[]_ · **optional** — cascade property value
    - `id` · _Number_ · **optional** — property value id
    - `name` · _String_ · **optional** — property value name
    - `leaf` · _String_ · **optional** — whether is leaf node

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
categoryId=62094240
cascadeId=26
path=120013644:162,100006867:160387;120013642:163,100006864:164
```

Response sample 1:

```
data={}
```

---

## GetPreQcRules

<a id="product-seller-item-getpreqcrules"></a>

- **Path**: `/product/seller/item/getPreQcRules`
- **Method**: `GET/POST`
- **Last modified**: 2022-09-10 15:10:38

query pre qc rules

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `option` · _Number_ · **required** — query qc option
- `option_set` · _Number[]_ · **required** — query qc rules option.[1] return item limit, [2] return restricted category id, [1,2] return both

**Response parameters**

- `values` · _Object_ · **required** — response value
  - `restricted_cate_ids` · _Number[]_ · **required** — restricted category id which can not publish
  - `item_limit` · _Number_ · **required** — item quantity limit
  - `item_count` · _Number_ · **required** — current item count

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
option=1
option_set=[1]
```

Response sample 1:

```
values={}
```

---

## GetProductContentScore

<a id="product-content-score-get"></a>

- **Path**: `/product/content/score/get`
- **Method**: `GET/POST`
- **Last modified**: 2023-05-24 11:02:04

get product content score

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `item_id` · _Number_ · **required** — Call this API; "Item Id" must be selected as the request parameter.

**Response parameters**

- `result` · _Object_ · **required** — Result
  - `data` · _Object_ · **required** — Response body
    - `productTitle` · _String_ · **optional** — Product title
    - `score` · _Number_ · **optional** — Product's latest content score
    - `image` · _String_ · **optional** — The main image of the selected product for a quick product information summary
    - `total` · _Number_ · **optional** — The total full content score
    - `productId` · _Number_ · **optional** — Product ID
    - `items` · _Object[]_ · **optional** — Issue list that need to be optimized of the selected product
      - `key` · _String_ · **optional** — Unique key to identify each issue
      - `score` · _Number_ · **optional** — The current score got in this issue
      - `total` · _Number_ · **optional** — The total score of this issue
      - `group` · _String_ · **optional** — Indicates the group of the issue, such as Content Completeness and Content Quality name		The name of each issue to be displayed to sellers.
      - `label` · _String_ · **optional** — The extra high-level guidance and suggestion for this issue.
      - `latest` · _Boolean_ · **optional** — Optional field.  Will only return for certain issues which need offline calculation. Value "false" means this issue has been optimized but still under system calculation and may update in 2 days.
      - `indicators` · _Object[]_ · **optional** — Optional field.  Some extra details (usually for sub issues) and will only return for certain issues. Please check API response examples for more information.
        - `critical` · _Boolean_ · **optional** — To mark the critical issues which leads to 0 product score and represents potential content policy violations
        - `text` · _String_ · **optional** — Detailed name and description of the sub issue.
        - `key` · _String_ · **optional** — Unique key of the sub issue.
      - `imageList` · _Object[]_ · **optional** — Optional field. Only available for product with Image Quality issue. List the issue and image breakdown.
        - `score` · _Number_ · **optional** — The score of each image.
        - `imageUrl` · _String_ · **optional** — The url of the image with image quality issue
        - `text` · _String_ · **optional** — The image name, e.g product image/SKU image/long image/square image.
        - `type` · _String_ · **optional** — The score level of each image, e.g. low/moderate. This level is mapped to score.
        - `imageType` · _Number_ · **optional** — The enum of image type, e.g product image/SKU image/long image/square image.
        - `indicators` · _Object[]_ · **optional** — Optional field.  Some extra details (usually for sub issues) and will only return for certain issues. Please check API response examples for more information.
          - `text` · _String_ · **optional** — Detailed name and description of the sub issue.
          - `key` · _String_ · **optional** — Unique key of the sub issue.
      - `itemTitle` · _String_ · **optional** — The name of each issue to be displayed to sellers.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |

**Example**

Request sample 1:

```
item_id=692345699
```

Response sample 1:

```
result={"productTitle":"test product","score":50,"image":"https://vn-live.slatic.net/p/861cd50dae0a8dfa220abf6718fbc485.jpg","total":110,"productId":2260471639,"items":[{"key":"productIndicatorCatProperties","score":0,"total":10,"group":"completeness","name":"Incomplete attributes input","label":"Fill attributes in key product information"},{"key":"productIndicatorDescriptionImage","score":0,"total":5,"group":"completeness","name":"Lack of image in description","label":"Add min 1 image in description"},{"key":"titleQuality","score":4,"total":5,"type":"moderate","text":"Moderate","group":"contentQuality","name":"Title Quality","label":"To improve product exposure and click-through rate, please optimize product names according to our recommendations.","title":"test product","indicators":[{"canReport":true,"critical":false,"text":"Suggest title length between 20 and 150.","key":"wordLength"}],"latest":true},{"score":1,"total":5,"type":"low","text":"Low","group":"contentQuality","name":"Image Quality","label":"Provide an image following the platform image guideline.","imageList":[{"score":1,"imageUrl":"https://vn-live.slatic.net/p/861cd50dae0a8dfa220abf6718fbc485.jpg","text":"Main Image","type":"low","indicators":[{"canReport":true,"text":"Severe information overload in the photo. Please remove unnecessary information from the photo.","key":"flagContext"},{"canReport":true,"text":"Pure text image detected. Please upload another image.","key":"flagPuretxt"},{"canReport":true,"text":"Main object is not centered. Please adjust and upload again.","key":"flagCenter"}],"imageType":1},{"score":4,"text":"Square Image","type":"moderate","indicators":[{"canReport":false,"text":"Buyer Promotion Image is missing\\u0000. Please add one in to attract buyers.","key":"imageMissing"}],"imageType":4}]}]}
```

---

## GetProductItem

<a id="product-item-get"></a>

- **Path**: `/product/item/get`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:13:05

Get single product by ItemId or SellerSku.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `item_id` · _Number_ · **required** — Call this API; "Item Id"  must be selected as the request parameter
- `seller_sku` · _String_ · **optional** — The parameter has been deprecated and is no longer supported after November 15th, 2023.

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
  - `bizSupplement` · _Object_ · **optional** — global feature field
  - `imageSequence` · _Object_ · **optional** — ai image sequence

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `200` | E200: Empty SellerSku | Empty Item Id and Seller Sku. |
| `207` | E207: SKU not exist | Cannot find a Sku by the Seller Sku. |
| `208` | E208: Item not exist | Cannot find a Item by the Item Id. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `207` | SKU not exist | The item id used in the request does not exist on the current site.Please call GetProducts API to check if the sku you are querying belongs to the current store or if the item id is correct. |
| `207` | SKU not exist | The item id used in the request does not exist on the current site.Please call GetProducts API to check if the sku you are querying belongs to the current store or if the item id is correct. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `207` | SKU not exist | The item id used in the request does not exist on the current site.Please call GetProducts API to check if the sku you are querying belongs to the current store or if the item id is correct. |
| `207` | SKU not exist | The item id used in the request does not exist on the current site.Please call GetProducts API to check if the sku you are querying belongs to the current store or if the item id is correct. |
| `207` | SKU not exist | The item id used in the request does not exist on the current site.Please call GetProducts API to check if the sku you are querying belongs to the current store or if the item id is correct. |
| `207` | SKU not exist | The item id used in the request does not exist on the current site.Please call GetProducts API to check if the sku you are querying belongs to the current store or if the item id is correct. |
| `EDIT_ITEM_NOT_BELONG_SELLER` | You are not authorized to edit the item. | The item id queried in the request does not belong to the current store, please call the GetProducts API to resynchronize the product list to ensure the accuracy of the item id. |
| `EDIT_ITEM_NOT_BELONG_SELLER` | You are not authorized to edit the item. | The item id queried in the request does not belong to the current store, please call the GetProducts API to resynchronize the product list to ensure the accuracy of the item id. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `6` | Unexpected internal error | System fluctuations cause the query to fail please retry, if you encounter this error frequently when querying a particular product, please record these request ids and create a ticket to inquire. |

**Example**

Request sample 1:

```
item_id=692345699
seller_sku=Apple-6S-Black
```

Response sample 1:

```
data={"updatedTime":"1657536195000","skus":[{"Status":"active","quantity":1719,"Images":[""],"SellerSku":"1pc","ShopSku":"5758254690_ID-11212296431","special_time_format":"yyyy-MM-dd HH:mm","Url":"http://www.lazada.co.id/-i5758254690-s11212296431.html","multiWarehouseInventories":[{"occupyQuantity":26,"quantity":1719,"totalQuantity":1745,"withholdQuantity":0,"warehouseCode":"dropshipping","sellableQuantity":1719}],"package_width":"6.00","special_to_time":"2122-07-11 17:43","special_from_time":"2022-07-11 17:43","package_height":"5.00","fblWarehouseInventories":[],"special_price":6500,"price":8500,"channelInventories":[{"channelName":"37ce3f43-f59b-4608-b8b1-773882bd7212","startTime":"2022-09-02 12:00:00","endTime":"2022-09-03 11:59:59","sellableQuantity":200}],"color_text":"Magic","package_length":"7.00","special_from_date":"2022-07-11","package_weight":"0.05","Available":1719,"SkuId":11212296431,"special_to_date":"2122-07-11"}],"suspendedSkus":null,"variation":{"Variation1":{"name":"color_text","options":["Magic Ice Tint"],"hasImage":true,"label":"Color","customize":false}},"subStatus":null,"trialProduct":false,"itemId":5758254690,"rejectReason":null,"productImageList":[""],"primaryCategory":18209,"createdTime":"1632370434000","marketImageList":[],"attributes":{"short_description":null,"makeup_lip_benefit":"Hydrating,Long-wear","description_en":null,"description":"<div></div>","video":null,"source":"asc","warranty_type":null,"short_description_en":null,"finish_lipstick":"Matte","color_family":null,"Hazmat":null,"brand_classification":null,"units_hb":null,"shelf_expiry":null,"name":"LC541","warranty":null,"model":null,"Delivery_Option_Instant":null,"country_origin_hb":null,"brand":"No Brand","product_warranty":null,"name_en":null},"class":"com.taobao.sellglobal.service.api.response.SingleProductResponse","status":"Active"}
```

---

## GetProducts

<a id="products-get"></a>

- **Path**: `/products/get`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:06:23

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

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format |  The request URL is not valid. |
| `6` | E006: Unexpected internal error | Unexpected internal error.  |
| `14` | E014: "%s" Invalid Offset |  The value for the offset parameter is not valid.  |
| `17` | E017: "%s" Invalid Date Format |  The date format is not valid. |
| `19` | E019: "%s" Invalid Limit |   The value for the limit parameter is not valid.  |
| `36` | E036: Invalid status filter |  The specified status filter is not valid. |
| `70` | E070: You have corrupt data in your sku seller list. |  Data in the SKU list are not valid. |
| `506` | E506: Get product failed |  Failed to get the product information. |
| `901` | E901: The request is too frequent, or the requested functionality is temporarily disabled. | Failed to return the requested data due to high calling frequency or disabled functionality. Please try again later. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `SellerNotVerified` | Seller not verified,please check seller status | The seller's store opening process has not been completed, please log in to the Seller Center, check the store information that needs to be improved on the home page and submit it for review. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `19` | Invalid Limit | The limit field value is incorrect and should not exceed a maximum of 50. |

**Example**

Request sample 1:

```
filter=live
update_before=2018-01-01T00:00:00+0800
create_before=2018-01-01T00:00:00+0800
offset=0
create_after=2010-01-01T00:00:00+0800
update_after=2010-01-01T00:00:00+0800
limit=10
options=1
sku_seller_list= ["39817:01:01", "Apple 6S Black"]
```

Response sample 1:

```
data={"data":{"created_time":"1645176573000","updated_time":"1653463851000","images":["https://my-live.slatic.net/p/58a4f48c8e5d526ba0f4ee2150dff8ab.jpg"],"skus":[{"Status":"active","quantity":20,"Images":[],"SellerSku":"12333-poi","ShopSku":"2807246166_MY-13449296008","Url":"https://www.lazada.com.my/-i2807246166-s13449296008.html","multiWarehouseInventories":[{"occupyQuantity":0,"quantity":20,"totalQuantity":20,"withholdQuantity":0,"warehouseCode":"dropshipping","sellableQuantity":20}],"package_width":"10.00","package_height":"10.00","fblWarehouseInventories":[],"special_price":0.0,"price":102.0,"channelInventories":[{"channelName":"4a9198e3-9b40-44d2-a6b6-863696c42f74","startTime":"2022-05-28 00:00:00","endTime":"2022-05-30 23:59:59","sellableQuantity":1},{"channelName":"9e46b6eb-a509-4db1-a22c-7ad266ac4a74","startTime":"2022-02-25 00:00:00","endTime":"2022-02-26 00:00:00","sellableQuantity":7}],"package_length":"10.00","package_weight":"0.3","Available":20,"SkuId":13449296008}],"item_id":2807246166,"variation":{},"trialProduct":false,"primary_category":8707,"marketImages":[],"attributes":{"name":"#TEST TITLE#$2022-02-18 15:21:16&","short_description":"1234","description":"<p style=\"margin:0\"><span style=\"font-family:none\">123321</span></p>","video":"30000176356","brand":"NAVIFORCE","model":"9095","movement":"Quartz","feature":"Date,Luminous,Chronograph,World Time,Calculator,Calendar,Shock Resistant","movement_country":"Japan","water_resistant":"30m","case_shape":"Round","Dial_Glass":"Hesalite Crystal","watch_dial_size":"Other","strap":"Leather","warranty_type":"No Warranty","name_ms":"# Ujian Tajuk #2022-02-18 15:21:16","source":"asc","delivery_option_sof":"0"},"status":"Active"},"code":"0","request_id":"21017d2816548274295911740"}
```

---

## GetQCAlertProducts

<a id="product-qc-alert-list"></a>

- **Path**: `/product/qc/alert/list`
- **Method**: `get`
- **Last modified**: 2022-12-13 10:09:17

Getting seller's products that have been alerted by quality control.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `offset` · _String_ · **required** — Number of QC alert products to skip
- `limit` · _String_ · **required** — The maximum number of QC alert products that can be returned.

**Response parameters**

- `data` · _Object[]_ · **optional** — Response data list
  - `productId` · _Number_ · **optional** — product Id
  - `categoryId` · _Number_ · **optional** — product category id
  - `deactivationTime` · _Number_ · **optional** — Date to execute deactivation
  - `suggestionCategories` · _Number[]_ · **optional** — suggested categories

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
offset=1
limit=10
```

Response sample 1:

```
data=[]
```

---

## GetResponse

<a id="image-response-get"></a>

- **Path**: `/image/response/get`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:06:03

Use this API to get the returned information from the system for the MigrateImages API.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `batch_id` · _String_ · **required** — Request ID from the MigrateImages request

**Response parameters**

- `data` · _Object_ · **required** — Response body
  - `images` · _Object[]_ · **optional** — Image information
    - `url` · _String_ · **optional** — The URL address of the migrated images.
    - `hash_code` · _String_ · **optional** — The hash code of the images.
  - `errors` · _Object[]_ · **optional** — Image error information
    - `field` · _String_ · **optional** — The error url
    - `msg` · _String_ · **optional** — The error message
    - `original_url` · _String_ · **optional** — The original url

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format |  The format of the request URL is not valid. |
| `6` | E006: Unexpected internal error |  Unexpected internal error. |
| `302` | Not supported URL | The server is unable to download the image from the link, please check that the image link you added to the MigrateImages API responds with an HTTP status code of 200 and that your image meets the requirements of this document |
| `301` | Migrate Image Failed | The server is unable to download the image from the link, please check that the image link you added to the MigrateImages API responds with an HTTP status code of 200 and that your image meets the requirements of this document |
| `1000` | Internal Application Error | Please check that you are uploading a JPG or PGN image that meets the requirements, and if you are sure that there is nothing wrong with the image but encounter this error frequently, please create a ticket to inquire about it. |

**Example**

Request sample 1:

```
batch_id=1e0bb81415173896232054839e
```

Response sample 1:

```
data={}
```

---

## GetSellerItemLimit

<a id="product-seller-item-limit"></a>

- **Path**: `/product/seller/item/limit`
- **Method**: `get`
- **Last modified**: 2022-07-28 17:06:03

The platform will provide the product quantity limit information by this interface. The qps will be limited by seller, 10 qps per seller.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `success` · _Boolean_ · **optional** — The result of this request,true or false.
- `errorCodes` · _String[]_ · **optional** — If the request failed, errorCodes will be returned.
- `errorMsgs` · _String[]_ · **optional** — The error msg, may be null even though the result is failed.
- `data` · _Object_ · **optional** — The data
  - `onlineItemCount` · _Number_ · **optional** — The count of online item, oos included.
  - `itemLimit` · _Number_ · **optional** — The item limit. T + 2 refresh.
  - `payItemCnt` · _Number_ · **optional** — the number of selling item in last 90 days.T + 2 refresh.
  - `payByrCnt` · _Number_ · **optional** — the number of buyer in last 90 days.T + 2 refresh.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `HOT_KEY_BLOCK_EXCEPTION` | hot key protect | 10 qps promised for each seller |
| `SELLER_SERVICE_FAIL` | inner service fail | inner system error, please retry |
| `ONLY_CB_SELLER_SUPPORTED` | For now, only cb seller supported | For local seller, we will support later. |
| `THIRD_SERVICE_ERROR` | inner service fail | inner system error, please retry |
| `SYS_ERROR` | inner service fail | inner system error, please retry |

**Example**

Request sample 1:

```
```

Response sample 1:

```
success=true
errorCodes=HOT_KEY_BLOCK_EXCEPTION
errorMsgs=...
data=...
```

---

## GetSizeChartTemplate

<a id="size-chart-template-get"></a>

- **Path**: `/size/chart/template/get`
- **Method**: `get`
- **Last modified**: 2023-11-15 14:07:40

获取尺码模板列表

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `template_id` · _Number_ · **optional** — size chart template id
- `template_name` · _String_ · **optional** — size chart name
- `page_no` · _Number_ · **required** — page no
- `page_size` · _Number_ · **required** — page size

**Response parameters**

- `data` · _Object_ · **optional** — Response body
  - `total` · _Number_ · **optional** — total
  - `pageNo` · _Number_ · **optional** — page no
  - `pageSize` · _Number_ · **optional** — page size
  - `totalPage` · _Number_ · **optional** — total page
  - `sizeChartResponses` · _Object[]_ · **optional** — [{"sizeChartName":"test template","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40010},{"sizeChartName":"sssss 1233","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40007},{"sizeChartName":"test dup sizeGroup","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":38014},{"sizeChartName":"test publish sizechart template","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":38013},{"sizeChartName":"from publish template","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40003},{"sizeChartName":"asasa","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40002},{"sizeChartName":"test","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":42005},{"sizeChartName":"copy-test dress templatetest dress templatetest dress t","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":38010},{"sizeChartName":"test template 2","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":42001},{"sizeChartName":"winni test -1","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":36003}]

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `4184` | E4184 | Size chart template id must be a number and greater than 0 |
| `4190` | E4190 | getSizeChartTemplate pageSize maximum value is 100 |
| `4176` | E4176 | Size chart list query fail |

**Example**

Request sample 1:

```
template_id=123
template_name=test
page_no=1
page_size=20
```

Response sample 1:

```
data={"data":{"total":10,"pageNo":1,"totalPage":1,"pageSize":20,"class":"com.taobao.sellglobal.service.api.response.SizeChartResponse","sizeChartResponses":[{"sizeChartName":"test template","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40010},{"sizeChartName":"sssss 1233","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40007},{"sizeChartName":"test dup sizeGroup","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":38014},{"sizeChartName":"test publish sizechart template","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":38013},{"sizeChartName":"from publish template","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40003},{"sizeChartName":"asasa","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":40002},{"sizeChartName":"test","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":42005},{"sizeChartName":"copy-test dress templatetest dress templatetest dress t","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":38010},{"sizeChartName":"test template 2","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":42001},{"sizeChartName":"winni test -1","linkProductIds":null,"class":"com.taobao.sellglobal.service.api.response.SingleSizeChartResponse","sizeChartId":36003}]},"success":true,"errorCode":null,"errorDetail":null,"class":"com.alibaba.normandie.gateway.client.domain.lazop.APIResult","errors":null,"errorMsg":null}
```

---

## GetUnfilledAttributeItem

<a id="product-unfilled-attribute-get"></a>

- **Path**: `/product/unfilled/attribute/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:05:45

Get products without key attributes. (For cross boarder sellers Only)

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `page_index` · _Number_ · **required** — page_index
- `attribute_tag` · _String_ · **required** — The tag of attributes. Currently only has one value "key_prop"  属性标示。当前只支持key_prop
- `page_size` · _Number_ · **required** — The number of Products you would like to fetch from every response. The max number is 50.  返回的最大商品量。最大值50。商品级别
- `language_code` · _String_ · **required** — Multi-language of category attributes that need to be returned

**Response parameters**

- `success` · _Boolean_ · **required** — api
- `total_products` · _Number_ · **required** — The current product volume returned. Commodity level
- `products` · _Object[]_ · **required** — products
  - `item_id` · _Number_ · **required** — The ID of this product
  - `primary_category` · _Number_ · **required** — The ID of the primary category for his product.
  - `attributes` · _Object[]_ · **required** — Contains unfilled product attributes.  只返回符合查询条件的未填写的属性
    - `advanced` · _Object_ · **required** — When the attribute is key attribute, is_key_prop = 1.  When the attribute is not key attribute,  is_key_prop = 0.
    - `name` · _String_ · **required** — Human-readable display name of the attribute
    - `input_type` · _String_ · **required** — Attribute input type (text, date,numeric,img,rich text, singleSelect，multiSelect,enumInput,multiEnumInput) multiEnumInput/multiEnumInput supports custom value
    - `options` · _Object[]_ · **required** — List of all option nodes
      - `name` · _String_ · **required** — Option name
    - `is_mandatory` · _Number_ · **required** — Whether the attribute is mandatory
    - `attribute_type` · _String_ · **required** — Attribute type
    - `label` · _String_ · **required** — Name of the attribute
  - `seller_sku_id` · _String_ · **required** — One of seller SKU ID under this product.  status and sub_status of it is 1 (active)
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
page_index=1
attribute_tag=key_prop
page_size=50
language_code=en_us
```

Response sample 1:

```
success=true
total_products=100
products=Object
error_msg=systemerror
```

---

## MigrateImage

<a id="image-migrate"></a>

- **Path**: `/image/migrate`
- **Method**: `post`
- **Last modified**: 2022-07-28 17:05:35

Use this API to migrate a single image from an external site to Lazada site. Allowed image formats are JPG and PNG. The maximum size of an image file is 1MB.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — Request body

**Response parameters**

- `data` · _Object_ · **optional** — Response body
  - `image` · _Object_ · **optional** — image info
    - `url` · _String_ · **optional** — The URL address of the migrated image.
    - `hash_code` · _String_ · **optional** — The hash code of the image.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format |  The request URL is not valid. |
| `6` | E006: Unexpected internal error |  Unexpected internal error. |
| `30` | E030: Empty Request |  The request is not complete. |
| `301` | E301: Migrate Image Failed |  Failed to migrate the image. |
| `302` | E302: Not supported URL |  The image URL is not supported. |
| `303` | E303: The image is too large | The size of the migrated image exceeds the 1M limit. |
| `901` | E901: The request is too frequent, or the requested functionality is temporarily disabled. | Failed to return the requested data due to high calling frequency or disabled functionality. Please try again later. |
| `1000` | Internal Application Error |  Internal system error. |
| `302` | Not supported URL | The server could not download the image from the link, please check that your link responds with an HTTP status code of 200 and that your image meets the requirements of this document |
| `302` | Not supported URL | The server could not download the image from the link, please check that your link responds with an HTTP status code of 200 and that your image meets the requirements of this document |
| `5` | Invalid Request Format | Please check that the payload is documented and conforms to the XML formatting requirements. If you have URLs with “&” in them, then please use Cdata tags to avoid XML parsing problems. |
| `304` | Get Response Failed | Please check if the URL of the image you provided is externally accessible or if the HTTP status code of the response is 200. |
| `303` | The image is too large | Please make sure your image size is less than 5000*5000px and file size is less than 3145728B. |
| `302` | Not supported URL | Please check if the http status code in response to the image link in the request is 200, and check if your image meets the requirements based on this document. |
| `1000` | Internal Application Error | Please check that you are uploading a JPG or PGN image that meets the requirements, and if you are sure that there is nothing wrong with the image but encounter this error frequently, please create a ticket to inquire about it. |

**Example**

Request sample 1:

```
payload=<?xml version="1.0" encoding="UTF-8" ?> <Request>     <Image>         <Url>http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg</Url>     </Image> </Request>
```

Response sample 1:

```
data={}
```

---

## MigrateImages

<a id="images-migrate"></a>

- **Path**: `/images/migrate`
- **Method**: `post`
- **Last modified**: 2022-07-28 17:09:17

Use this API to migrate multiple images from an external site to Lazada site. Allowed image formats are JPG and PNG. The maximum size of an image file is 1MB. A single call can migrate 8 images at most.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — Request body

**Response parameters**

- `batch_id` · _String_ · **required** — The returned request ID is used by the GetResponse API to get the migrated image information.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format |  The format of the request URL is not valid. |
| `6` | E006: Unexpected internal error |  Unexpected internal error. |
| `30` | E030: Empty Request |  The request is not complete. |
| `301` | E301: Migrate Image Failed |  Failed to migrate the images. |
| `302` | E302: Not supported URL |  The image URL is not supported. |
| `303` | E303: The image is too large |  The size of the migrated image exceeds the 1M limit. |
| `901` | E901: The request is too frequent, or the requested functionality is temporarily disabled. | Failed to return the requested data due to high calling frequency or disabled functionality. Please try again later. |
| `1000` | Internal Application Error |  Internal system error. |

**Example**

Request sample 1:

```
payload=<?xml version="1.0" encoding="UTF-8" ?> <Request>     <Images>         <Url>http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg</Url>         <Url>http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg</Url>     </Images> </Request>
```

Response sample 1:

```
batch_id=1e0bb81415173896232054839e
```

---

## ProductCheck

<a id="product-pre-check"></a>

- **Path**: `/product/pre/check`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 13:25:14

Use this API to check CB seller quantity limit of adding product .

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _String_ · **required** — <a href='https://open.lazada.com/apps/doc/doc?nodeId=10557&docId=108253' target='_brank'>Parameter description</a>

**Response parameters**

- `data` · _Object_ · **optional** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
payload=<Request><Product><PrimaryCategory>6614</PrimaryCategory><SPUId/><AssociatedSku/><Images><Image>https://my-live-02.slatic.net/p/765888ef9ec9e81106f451134c94048f.jpg</Image><Image>https://my-live-02.slatic.net/p/9eca31edef9f05f7e42f0f19e4d412a3.jpg</Image></Images><Attributes><name>api create product test sample</name><short_description>This is a nice product</short_description><brand>Remark</brand><model>asdf</model><kid_years>Kids (6-10yrs)</kid_years><video>12345 (fill with the video id of the previously uploaded video) optional</video><delivery_option_sof>Yes</delivery_option_sof></Attributes><Skus><Sku><SellerSku>api-create-test-1</SellerSku><color_family>Green</color_family><size>40</size><quantity>1</quantity><price>388.50</price><package_length>11</package_length><package_height>22</package_height><package_weight>33</package_weight><package_width>44</package_width><package_content>this is what's in the box</package_content><Images><Image>http://sg.s.alibaba.lzd.co/original/59046bec4d53e74f8ad38d19399205e6.jpg</Image><Image>http://sg.s.alibaba.lzd.co/original/179715d3de39a1918b19eec3279dd482.jpg</Image></Images></Sku></Skus></Product></Request>
```

Response sample 1:

```
data={}
```

---

## RemoveProduct

<a id="product-remove"></a>

- **Path**: `/product/remove`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:54:03

Use this API to remove an existing product, some SKUs in one product, or all SKUs in one product. System supports a maximum number of 50 SellerSkus in one request.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `seller_sku_list` · _String_ · **optional** — sellerSku in a json list to be removed. System supports a maximum number of 50 sellerSku in one request.;for example: itemid: 1269656765 sellerSku: test00111 、test00222、test00333, then Param should be: ["test00111","test00222","test00333"]
- `sku_id_list` · _String_ · **optional** — Highest priority,skuId in a json list to be removed. System supports a maximum number of 50 skuId in one request.; for example: itemid: 1269656765 skuid: 5230534246, then Param should be: ["SkuId_1269656765_5230534246"]

**Response parameters**

- `data` · _Object_ · **required** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format |  The request format is not valid. |
| `6` | E006: Unexpected internal error |  Unexpected internal error. |
| `30` | E030: Empty Request |  The request URL is not complete. |
| `204` | E204: Too many SKU in one request |  The number of SKUs exceeds the limit. |
| `503` | E503: Remove product failed |  Failed to remove the product. |
| `512` | E512: BIZ_CHECK_MANGROVE_RULE_QC | The request failed because the category was banned |
| `1000` | Internal Application Error |  Internal system error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `6` | Unexpected internal error | The seller_sku_list field has been deprecated, please use the sku_id_list field, if you still encounter this issue frequently with the sku_id_list field, please create a ticket inquiry. |
| `503` | Remove product failed | This is a generalized error code, it is not possible to determine the specific problem based on this error code, please check the message information in the detail field to understand the details of the error, for example, the product cannot be found or the SKU has been deleted. |

**Example**

Request sample 1:

```
seller_sku_list=["test00111","test00222","test00333"]
sku_id_list=["SkuId_1269656765_5230534246","SkuId_1269656765_5230534246","SkuId_1269656765_5230534246"]
```

Response sample 1:

```
data={}
```

---

## RemoveSku

<a id="product-sku-remove"></a>

- **Path**: `/product/sku/remove`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:22:25

Use this API to delete SKUs and sales attributes of corresponding products.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _String_ · **required** — <Request>     <Product>        <ItemId>1911687838</ItemId>      <variation><variation1><name>color_family</name> </variation1></variation>          <Skus>             <Sku>        <SellerSku>1911687838-1627269303789-1</SellerSku>                </Sku>         </Skus>     </Product> </Request>

**Response parameters**

- `data` · _Object_ · **optional** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | Invalid Request Format | The request parameter is not formatted correctly, check that you are using the correct format against the RemoveSKU section of the Custom sales attributes documentation. |

**Example**

Request sample 1:

```
payload=<Request>     <Product>         <ItemId>4911096929</ItemId>         <variation>             <Variation1>                 <name>color family</name>             </Variation1>         </variation>         <Skus>             <Sku>                 <SkuId>20691153083</SkuId>             </Sku>             <Sku>                 <SkuId>20690462002</SkuId>             </Sku>         </Skus>     </Product> </Request>
```

Response sample 1:

```
data={}
```

---

## SetImages

<a id="images-set"></a>

- **Path**: `/images/set`
- **Method**: `post`
- **Last modified**: 2022-07-28 17:14:55

Use this API to set the images for an existing product by associating one or more image URLs with it.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — <a href='https://open.lazada.com/apps/doc/doc?nodeId=10557&docId=108254' target='_brank'>Parameter description</a>

**Response parameters**

- `data` · _Object_ · **optional** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format |  The request format is not valid. |
| `6` | E006: Unexpected internal error |  Unexpected internal error. |
| `30` | E030: Empty Request |  The request URL is not complete. |
| `200` | E200: Empty SellerSku |  The Seller SKU is not specified. |
| `203` | E203: Too many images in one SKU |  The number of images exceeds the limit (8 images). |
| `204` | E204: Too many SKU in one request |  The number of SKUs exceeds the limit. |
| `504` | E504: Set product Image failed |  Failed to set images for the product. |
| `1000` | Internal Application Error |  Internal system error. |
| `504` | THD_IC_ERR_F_IC_ABILITY_PG_004:THD_IC_ERR_F_IC_ABILITY_PG_004 | The product is participating in a special Camapign that does not allow modification of images until the end of this Campaign. |

**Example**

Request sample 1:

```
payload=<Request><Product><Skus><Sku><SkuId>20692116001</SkuId><Images><Image>https://sg-test-11.slatic.net/p/fc83aeae8cf46456468c175970edee75.png</Image><Image>https://th-live.slatic.net/p/6993be3715b37d5ccf0ed4ea5b50b58a.png</Image><Image>https://th-live.slatic.net/p/d619ac00b273e442c8f60035f5fb74d5.png</Image><Image>https://th-live.slatic.net/p/dc4ad00eb9f4da013707d855b7dbbbc6.png</Image><Image>https://th-live.slatic.net/p/4b47161058edfa6593c55e8e0c1e12a3.png</Image><Image>https://th-live.slatic.net/p/d95763400b94e65cc24b91e2fa70c514.png</Image><Image>https://th-live.slatic.net/p/cb10a4bc14c839bb808f83848d3a8222.png</Image></Images></Sku></Skus></Product></Request>
```

Response sample 1:

```
data={}
```

---

## UpdatePriceQuantity

<a id="product-price-quantity-update"></a>

- **Path**: `/product/price_quantity/update`
- **Method**: `post`
- **Last modified**: 2022-07-28 17:14:55

Use this API to update the price and quantity of one or more existing products. The maximum number of products that can be updated is 50, but 20 is recommended.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _Payload_ · **required** — <a href='https://open.lazada.com/apps/doc/doc?nodeId=42713&docId=121234' target='_brank'>Parameter description</a>

**Response parameters**

- `data` · _Object_ · **required** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format | The request format is not valid. |
| `6` | E006: Unexpected internal error | Unexpected internal error. |
| `30` | E030: Empty Request |  The request URL is not complete. |
| `204` | E204: Too many SKU in one request | The number of SKUs exceeds the limit. |
| `501` | E501: Update product failed |  Failed to update the product price or stock. |
| `901` | E901: The request is too frequent, or the requested functionality is temporarily disabled. | Failed to return the requested data due to high calling frequency or disabled functionality. Please try again later. |
| `1000` | Internal Application Error |  Internal system error. |
| `4104` | BIZ_CHECK_PRICE_PRECISION_INVALID | Price accuracy check failed |
| `4105` | BIZ_CHECK_SELLER_SKU_DUPLICATE | SellerSku repeat |
| `4106` | CHK_CATPROP_CPV_INPUT_SIZE_LIMIT | Item customization attributes exceeded the limit |
| `4107` | CHECK_CAT_PROP_INVALID_NUMBER | The category attribute value is invalid |
| `4108` | CHK_BASIC_REQUIRED | Basic attributes Mandatory verification |
| `4109` | CHK_SKU_PROPS_NOT_MATCH_SALE_PROP | Sku sales attributes do not match |
| `4110` | BIZ_CHECK_CAT_PROP_MANDATORY | Category attribute This parameter is mandatory |
| `4111` | CHK_CATPROP_CPV_TEXT_REPEAT | Category attribute content repeats |
| `4112` | CHK_SKU_PROPS_DUPLICATE | Duplicate Sku attributes |
| `4113` | CHK_SKU_PROPS_NOT_IDENTICAL | Sales attribute is not filled in |
| `4114` | BIZ_CHECK_PRICE_SAMPLE_NON_ZERO | The sample price is 0 |
| `4115` | CHK_CATPROP_CPV_NOT_ENUM | The CPV attribute is not one of the options provided by the category |
| `4116` | BIZ_CHECK_MAIN_IMAGE_DUPLICATE | Repeat check of master diagram |
| `4117` | BIZ_CHECK_SPECIAL_PRICE_FROM_DATE_AFTER_TO_DATE | Special offer date check |
| `4118` | BIZ_CHECK_PRICE_IS_ZERO | Price is not 0 check |
| `4119` | BIZ_CHECK_SPECIAL_PRICE_RATE_OUT_OF_RANGE | Special price range check |
| `4120` | CHK_CATPROP_CPV_MAX_LEGNTH | Verify the maximum CPV value of a category |
| `4121` | BIZ_CHECK_SPECIAL_PRICE_PRECISION_INVALID | Special accuracy check does not pass |
| `4122` | BIZ_CHECK_VIRTUAL_BUNDLE_SKU_SUB_OVER_LIMIT | virtual bundle sku relation skuc over limit |
| `4123` | BIZ_CHECK_MANGROVE_RULE | Restricted publication check |
| `4124` | BIZ_CHECK_MANGROVE_RULE_QC | MANGROVE rule verification |
| `4125` | THD_IC_F_IC_DOMAIN_PROPERTY_002 | IC Verification category Attribute This parameter is mandatory |
| `4126` | THD_IC_F_IC_INFRA_PRODUCT_036 | SellerSku repeat |
| `4127` | THD_IC_F_IC_SCENE_PUBLISH_012 | ProductId repeat |
| `4128` | THD_IC_F_IC_DOMAIN_ACTOR_006 | Seller lock cannot be edited |
| `4129` | BIZ_CHECK_PROP_SPECIAL_CHAR | Containssymbol/characterthatisnotallowed:"<".Pleaseremovethenre-upload |
| `4130` | BIZ_CHECK_OFFICIAL_STORE_BRAND_UNAUTHORIZED | Uncertified brand |
| `4131` | BIZ_CHECK_CAT_PROP_SENSITIVE_WORDS | description has sensitive words New brand |
| `4132` | Invalid Request Format | Invalid Request Format |
| `4133` | Invalid variation | Invalid variation |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `4225` | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. | To modify the inventory of a Global Plus item call the AdjustSellableQuantity or UpdateSellableQuantity APIs. |
| `4225` | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. | To modify the inventory of a Global Plus item call the AdjustSellableQuantity or UpdateSellableQuantity APIs. |
| `4225` | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. | To modify the inventory of a Global Plus item call the AdjustSellableQuantity or UpdateSellableQuantity APIs. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `4225` | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. | To modify the inventory of a Global Plus item call the AdjustSellableQuantity or UpdateSellableQuantity APIs. |
| `513` | Internal call exception | A small number of occurrences are normal, if you want to avoid this error as much as possible, reduce the number of SKUs in a single request to 20 or less. |
| `4225` | Your product participated in semi-hosted program, please go to GSP to edit the product price/stock/package details information. | To modify the inventory of a Global Plus item call the AdjustSellableQuantity or UpdateSellableQuantity APIs. |
| `4171` | The updated SKU quantity exceeds the maximum number 50, please do not update more than 50 SKUs at once | The number of SKUs included in a single request cannot exceed 50, and no more than 20 is recommended. |
| `4170` | During the Bday Mega campaign, there are restrictions for stock adjustments in effect between YYYY-MM-DD HH:MM:SS - YYYY-MM-DD HH:MM:SS. Sellers can increase stocks, but may not decrease stocks. | This SKU is participating in a special Campaign, so this SKU can't be updated to set stock less than current stock. |

**Example**

Request sample 1:

```
payload=<Request>   <Product>     <Skus>       <Sku>         <ItemId>234234234</ItemId>         <SkuId>234</SkuId>         <SellerSku>Apple-SG-Glod-64G</SellerSku>         <Price>1099.00</Price>         <SalePrice>900.00</SalePrice>         <SaleStartDate>2017-08-08</SaleStartDate>         <SaleEndDate>2017-08-31</SaleEndDate>         <MultiWarehouseInventories>           <MultiWarehouseInventory>             <WarehouseCode>warehouseTest1</WarehouseCode>             <Quantity>20</Quantity>           </MultiWarehouseInventory>           <MultiWarehouseInventory>             <WarehouseCode>warehouseTest2</WarehouseCode>             <Quantity>30</Quantity>           </MultiWarehouseInventory>          </MultiWarehouseInventories>        </Sku>     </Skus>   </Product> </Request>
```

Response sample 1:

```
data={}
```

---

## UpdateProduct

<a id="product-update"></a>

- **Path**: `/product/update`
- **Method**: `post`
- **Last modified**: 2022-07-29 12:51:21

Use this API to update attributes or SKUs of an existing product. if need update inventory, offline, price, not recommended to use this API.
The iteration 25/6/2020 Updated for DBS changes. Refer to Input Parameters Payload

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _String_ · **required** — <a href='https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121228' target='_brank'>Parameter description</a>

**Response parameters**

- `data` · _Object_ · **optional** — Response body
  - `variation` · _Object_ · **optional** — self define attributes
    - `Variation1` · _Object_ · **optional** — self define attributes
      - `name` · _String_ · **optional** — self define attributes
      - `has_image` · _Boolean_ · **optional** — self define attributes
      - `customize` · _Boolean_ · **optional** — self define attributes
      - `options` · _String[]_ · **optional** — self define attributes
    - `Variation2` · _Object_ · **optional** — self define attributes
      - `name` · _String_ · **optional** — self define attributes
      - `has_image` · _Boolean_ · **optional** — self define attributes
      - `customize` · _Boolean_ · **optional** — self define attributes
      - `options` · _String[]_ · **optional** — self define attributes
    - `Variation3` · _Object_ · **optional** — self define attributes
      - `name` · _String_ · **optional** — self define attributes
      - `has_image` · _Boolean_ · **optional** — self define attributes
      - `customize` · _Boolean_ · **optional** — self define attributes
      - `options` · _String[]_ · **optional** — self define attributes
    - `Variation4` · _Object_ · **optional** — self define attributes
      - `name` · _String_ · **optional** — self define attributes
      - `has_image` · _Boolean_ · **optional** — self define attributes
      - `customize` · _Boolean_ · **optional** — self define attributes
      - `options` · _String[]_ · **optional** — self define attributes
  - `item_status` · _String_ · **optional** — The status of product updated, including Active, InActive, and Pending QC. if a product is in Pending status, it needs to be reviewed and will be processed within 24 hours.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `1` | E001: Parameter %s is mandatory |  The parameter is mandatory but not specified. |
| `5` | E005: Invalid Request Format |  The request format is not valid. |
| `6` | E006: Unexpected internal error |  Unexpected internal error. |
| `30` | E030: Empty Request |  The request URL is not complete. |
| `201` | E201: %s Invalid CategoryId |  The specified category ID is not valid. |
| `202` | E202: %s Invalid SPUId |  The specified SPU ID is not valid. |
| `501` | E501: Update product failed |  Failed to update the product. |
| `512` | E512: BIZ_CHECK_MANGROVE_RULE_QC | The request failed because the category was banned |
| `901` | E901: The request is too frequent, or the requested functionality is temporarily disabled. | Failed to return the requested data due to high calling frequency or disabled functionality. Please try again later. |
| `1000` | Internal Application Error |  Internal system error. |
| `4104` | BIZ_CHECK_PRICE_PRECISION_INVALID | Price accuracy check failed |
| `4105` | BIZ_CHECK_SELLER_SKU_DUPLICATE | SellerSku repeat |
| `4106` | CHK_CATPROP_CPV_INPUT_SIZE_LIMIT | Item customization attributes exceeded the limit |
| `4107` | CHECK_CAT_PROP_INVALID_NUMBER | The category attribute value is invalid |
| `4108` | CHK_BASIC_REQUIRED | Basic attributes Mandatory verification |
| `4109` | CHK_SKU_PROPS_NOT_MATCH_SALE_PROP | Sku sales attributes do not match |
| `4110` | BIZ_CHECK_CAT_PROP_MANDATORY | Category attribute This parameter is mandatory |
| `4111` | CHK_CATPROP_CPV_TEXT_REPEAT | Category attribute content repeats |
| `4112` | CHK_SKU_PROPS_DUPLICATE | Duplicate Sku attributes |
| `4113` | CHK_SKU_PROPS_NOT_IDENTICAL | Sales attribute is not filled in |
| `4114` | BIZ_CHECK_PRICE_SAMPLE_NON_ZERO | The sample price is 0 |
| `4115` | CHK_CATPROP_CPV_NOT_ENUM | The CPV attribute is not one of the options provided by the category |
| `4116` | BIZ_CHECK_MAIN_IMAGE_DUPLICATE | Repeat check of master diagram |
| `4117` | BIZ_CHECK_SPECIAL_PRICE_FROM_DATE_AFTER_TO_DATE | Special offer date check |
| `4118` | BIZ_CHECK_PRICE_IS_ZERO | Price is not 0 check |
| `4119` | BIZ_CHECK_SPECIAL_PRICE_RATE_OUT_OF_RANGE | Special price range check |
| `4120` | CHK_CATPROP_CPV_MAX_LEGNTH | Verify the maximum CPV value of a category |
| `4121` | BIZ_CHECK_SPECIAL_PRICE_PRECISION_INVALID | Special accuracy check does not pass |
| `4122` | BIZ_CHECK_VIRTUAL_BUNDLE_SKU_SUB_OVER_LIMIT | virtual bundle sku relation skuc over limit |
| `4123` | BIZ_CHECK_MANGROVE_RULE | Restricted publication check |
| `4124` | BIZ_CHECK_MANGROVE_RULE_QC | MANGROVE rule verification |
| `4125` | THD_IC_F_IC_DOMAIN_PROPERTY_002 | IC Verification category Attribute This parameter is mandatory |
| `4126` | THD_IC_F_IC_INFRA_PRODUCT_036 | SellerSku repeat |
| `4127` | THD_IC_F_IC_SCENE_PUBLISH_012 | ProductId repeat |
| `4128` | THD_IC_F_IC_DOMAIN_ACTOR_006 | Seller lock cannot be edited |
| `4129` | BIZ_CHECK_PROP_SPECIAL_CHAR | Containssymbol/characterthatisnotallowed:"<".Pleaseremovethenre-upload |
| `4130` | BIZ_CHECK_OFFICIAL_STORE_BRAND_UNAUTHORIZED | Uncertified brand |
| `4131` | BIZ_CHECK_CAT_PROP_SENSITIVE_WORDS | description has sensitive words New brand |
| `4132` | Invalid Request Format | Invalid Request Format |
| `4133` | Invalid variation | Invalid variation |
| `4134` | CHK_CATEGORY_ID_NOT_LEAF_CATEGORY | The category Id is Invalid |
| `4135` | THD_IC_ERR | IC service error reported |
| `4136` | SELLER_SKU_NOT_FOUND | Seller Sku is not found |
| `4137` | ITEM_NOT_FOUND | item not found |
| `4138` | BIZ_CHECK_EXIST_OUTER_IMAGE | The picture exists in the outer chain |
| `4139` | BIZ_CHECK_MAIN_IMAGE_REQUIRE | Main image is require |
| `4140` | CHK_ENUM_PROP_VALUE_NOT_IN_OPTION | Class does not have this attribute |
| `4141` | THD_IC_ERR_F_IC_INFRA_PRODUCT_036 | SellerSku repeat |
| `4142` | THD_BRAND_ID_IS_NOT_VALID_IN_CATEGORY | This brand is not valid in the category package |
| `4143` | BIZ_CHECK_SALEPROP_ATTRIBUTE_INVALID | The selling attributes are not defined in the variation |
| `4144` | BIZ_CHECK_SKU_NOT_CONTAIN_SALEPROP | The sku does not contain the saleProp tag |
| `4145` | BIZ_CHECK_SALEPROP_AND_OLD_PARAM_REPEAT | You can't put sales properties in both saleProp and sku |
| `4146` | BIZ_CHECK_SALEPROP_NOT_SUPPORT_THUMBNAIL | Thumbnails are not supported for this sale attribute |
| `10002` | Incorrect/missing/unavailable product attributes | Please check the details in the API response in order to confirm the properties that are causing the problem and the cause.And according to the content of the error, correct the attributes, options or delete the attributes without permission. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `10006` | the control price is not pass | Global Plus products have a price control logic: the price limit is: sku without postal price ≤ (pre-upgrade retail price - LGS shipping cost) + (LGS shipping cost - Global Plus shipping cost) * 50%; beyond the upper limit, it is impossible to adjust the sku without postal price |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `10002` | System error update fail | Please check the details in the API response in order to confirm the properties that are causing the problem and the cause.And according to the content of the error, correct the attributes, options or delete the attributes without permission. |
| `10006` | the control price is not pass | Global Plus products have a price control logic: the price limit is: sku without postal price ≤ (pre-upgrade retail price - LGS shipping cost) + (LGS shipping cost - Global Plus shipping cost) * 50%; beyond the upper limit, it is impossible to adjust the sku without postal price |
| `10006` | the control price is not pass | Global Plus products have a price control logic: the price limit is: sku without postal price ≤ (pre-upgrade retail price - LGS shipping cost) + (LGS shipping cost - Global Plus shipping cost) * 50%; beyond the upper limit, it is impossible to adjust the sku without postal price |
| `10006` | the control price is not pass | Global Plus products have a price control logic: the price limit is: sku without postal price ≤ (pre-upgrade retail price - LGS shipping cost) + (LGS shipping cost - Global Plus shipping cost) * 50%; beyond the upper limit, it is impossible to adjust the sku without postal price |
| `10002` | System error update fail | Please check the details in the API response in order to confirm the properties that are causing the problem and the cause.And according to the content of the error, correct the attributes, options or delete the attributes without permission. |
| `10002` | System error update fail | Please check the details in the API response in order to confirm the properties that are causing the problem and the cause.And according to the content of the error, correct the attributes, options or delete the attributes without permission. |
| `10002` | System error update fail | Please check the details in the API response in order to confirm the properties that are causing the problem and the cause.And according to the content of the error, correct the attributes, options or delete the attributes without permission. |
| `4137` | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. | The item id in the request does not belong to the current store or country, please call the GetProduct/GetProductItem API to check the item id in the response again. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `4218` | Update product failed | The product has been penalized down to prohibit editing, if the seller has a problem with this product, please let the seller in the seller center to seller customer service or appeal. |
| `4137` | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| `4137` | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| `10006` | the control price is not pass | Global Plus products have a price control logic: the price limit is: sku without postal price ≤ (pre-upgrade retail price - LGS shipping cost) + (LGS shipping cost - Global Plus shipping cost) * 50%; beyond the upper limit, it is impossible to adjust the sku without postal price |
| `4137` | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| `SellerNotActive` | Seller not active,please check seller status | The seller's store status is inactive can not call the commodity API, you can call the GetSeller API and based on the Status field to confirm the current status of the store, if the seller has questions about this status, please want to seller center seller customer service consulting how to modify the status. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `4218` | Update product failed | The product has been penalized down to prohibit editing, if the seller has a problem with this product, please let the seller in the seller center to seller customer service or appeal. |
| `4216` | skuId is a mandatory field and must be filled in. | Sku id is a mandatory parameter when updating a product. |
| `4155` | Update product failed | The product is locked by the penalty does not support the update, please create a new product or appeal in the seller center |
| `4152` | THD_INVENTORY_ERR_INV_PARAM_ILLEGAL:illegal parameter:quantity | Negative numbers are not allowed in the quantity field. |
| `4137` | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. | The item id entered in the request does not exist on the current country and store, please call the GetProducts/GetProductItem API to query for the correct item id. |
| `4115` | Attribute value that you input is not included in the dropdown list given. Please select from dropdown to avoid error | A value in a single or multiple select attribute does not exist in the Option provided by Lazada, call the GetCategoryAttributes API to check the attribute in question and verify the Otpion. |
| `4113` | CHK_SKU_PROPS_NOT_IDENTICAL | The custom variant attribute you are using is not declared in the variation tag, so please declare the variant attribute first according to case3 in the UpdateProduct section of the Custom sales attributes document. |
| `4108` | CHK_BASIC_REQUIRED | The current product may have unfilled mandatory attributes due to category update, please call GetCategoryAttributes API first to query the latest category attribute list and confirm the new mandatory attributes and add the attributes in the payload. |
| `209` | Invalid variation | The number of variants in the payload exceeds the upper limit or does not meet the requirements, please check the message in the message to understand the detailed reasons and modify the payload. |
| `1001` | The parameters are not in JSON format | Make sure that your payload is JSON compliant, that the attributes and structure are filled out correctly according to the documentation and that all field values in the SKU are of string type. |

**Example**

Request sample 1:

```
payload=<?xml version="1.0" encoding="UTF-8" ?> <Request>   <Product>     <ItemId>234234234</ItemId>     <Attributes>       <name>api update product sample</name>       <short_description>This is an amazing product</short_description>       <delivery_option_sof>Yes</delivery_option_sof>       <name_engravement>Yes</name_engravement>       <gift_wrapping>Yes</gift_wrapping> <!--should be set as ‘Yes’ only for products to be delivered by seller-->     </Attributes>     <Skus>       <Sku>         <SkuId>234</SkuId>         <coming_soon>2024-11-11 00:00:00</coming_soon>         <delay_delivery_days>20</delay_delivery_days>         <SellerSku>api-create-test-1</SellerSku>         <quantity>88</quantity>         <price>350</price>         <package_length>12</package_length>         <package_height>23</package_height>         <package_weight>34</package_weight>         <package_width>45</package_width>         <Images></Images>       </Sku>       <Sku>         <SkuId>235</SkuId>         <SellerSku>api-create-test-2</SellerSku>         <quantity>44</quantity>         <price>488.88</price>         <package_length>10</package_length>         <package_height>21</package_height>         <package_weight>32</package_weight>         <package_width>43</package_width>         <package_content>this is what's in the box, update</package_content>         <Images>           <Image>http://sg.s.alibaba.lzd.co/original/59046bec4d53e74f8ad38d19399205e6.jpg</Image>           <Image>http://sg.s.alibaba.lzd.co/original/179715d3de39a1918b19eec3279dd482.jpg</Image>           <Image>http://sg.s.alibaba.lzd.co/original/e2ae2b41afaf310b51bc5764c17306cd.jpg</Image>         </Images>       </Sku>     </Skus>     <trialProduct>false</trialProduct>   </Product> </Request>
```

Response sample 1:

```
data={}
```

---

## UpdateSellableQuantity

<a id="product-stock-sellable-update"></a>

- **Path**: `/product/stock/sellable/update`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 17:14:55

Use this API to update sellable quantity of one or more existing products. The maximum number of products that can be updated is 50, but 20 is recommended.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `payload` · _String_ · **required** — Please take demo as reference.

**Response parameters**

- `data` · _Object_ · **optional** — Response body

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `5` | E005: Invalid Request Format | The request format is not valid. |
| `6` | E006: Unexpected internal error | Unexpected internal error. |
| `30` | E030: Empty Request | The request URL is not complete. |
| `204` | E204: Too many SKU in one request | The number of SKUs exceeds the limit. |
| `501` | E501: Update product failed | Failed to update the product price or stock. |
| `901` | E901: The request is too frequent, or the requested functionality is temporarily disabled. | Failed to return the requested data due to high calling frequency or disabled functionality. Please try again later. |
| `1000` | Internal Application Error |  Internal system error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `501` | Update product failed | This error code is an overview error code and cannot be used to determine the detailed cause of the error, please check the detail field in the API response to understand the SKU where the error occurred and the cause of the error. |
| `4170` | During the Bday Mega campaign, there are restrictions for stock adjustments in effect between YYYY-MM-DD HH:MM:SS - YYYY-MM-DD HH:MM:SS. Sellers can increase stocks, but may not decrease stocks. | This SKU is participating in a special Campaign, so this SKU can't be updated to set stock less than current stock. |
| `901` | Limit service request speed in server side temporarily. | API level QPS limiting flow, please retry in the next second when you encounter this error. |
| `6` | Unexpected internal error | System fluctuation please retry, if you encounter this error frequently, please create a ticket to consult. |
| `513` | Internal call exception | A small number of occurrences are normal, if you want to avoid this error as much as possible, reduce the number of SKUs in a single request to 20 or less. |
| `4170` | During the Bday Mega campaign, there are restrictions for stock adjustments in effect between YYYY-MM-DD HH:MM:SS - YYYY-MM-DD HH:MM:SS. Sellers can increase stocks, but may not decrease stocks. | This SKU is participating in a special Campaign, so this SKU can't be updated to set stock less than current stock. |

**Example**

Request sample 1:

```
payload=<Request>   <Product>      <Skus>   <!--single warehouse demo-->  <Sku>         <ItemId>234234234</ItemId>         <SkuId>234</SkuId>         <SellerSku>Apple-SG-Glod-64G</SellerSku>                                     <SellableQuantity>20</SellableQuantity>    </Sku>   <!--multi warehouse demo-->   <Sku>         <ItemId>234234234</ItemId>         <SkuId>234</SkuId>         <SellerSku>Apple-SG-Glod-64G</SellerSku>                <MultiWarehouseInventories>           <MultiWarehouseInventory>             <WarehouseCode>warehouseTest1</WarehouseCode>             <SellableQuantity>20</SellableQuantity>           </MultiWarehouseInventory>           <MultiWarehouseInventory>             <WarehouseCode>warehouseTest2</WarehouseCode>             <SellableQuantity>30</SellableQuantity>           </MultiWarehouseInventory>          </MultiWarehouseInventories>        </Sku>   </Skus>   </Product> </Request>
```

Response sample 1:

```
data={}
```

---

## UploadImage

<a id="image-upload"></a>

- **Path**: `/image/upload`
- **Method**: `post`
- **Last modified**: 2022-07-29 12:35:51

Use this API to upload a single image file to Lazada site. Allowed image formats are JPG and PNG. The maximum size of an image file is 1MB.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `image` · _byte[]_ · **required** — Upload an image file

**Response parameters**

- `data` · _Object_ · **required** — Response body
  - `image` · _Object_ · **optional** — image info
    - `url` · _String_ · **optional** — The URL address of the uploaded image.
    - `hash_code` · _String_ · **optional** — The hash code of the image.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `30` | E030: Empty Request |  The request is not complete. |
| `300` | E300: Upload Image Failed |  Failed to upload the image. |
| `303` | E303: The image is too large |  The size of the uploaded image exceeds the 1M limit. |
| `1000` | Internal Application Error |  Internal system error. |
| `302` | Not supported URL | The image field should be passed in as a stream rather than a string, check that you are not passing in data that is not of a stream type，or if the image matches the requirements of this document.or if the image matches the requirements of this document. |
| `302` | Not supported URL | The image field should be passed in as a stream rather than a string, check that you are not passing in data that is not of a stream type，or if the image matches the requirements of this document.or if the image matches the requirements of this document. |
| `302` | Not supported URL | The image field should be passed in as a stream rather than a string, check that you are not passing in data that is not of a stream type，or if the image matches the requirements of this document.or if the image matches the requirements of this document. |
| `302` | Not supported URL | The image field should be passed in as a stream rather than a string, check that you are not passing in data that is not of a stream type，or if the image matches the requirements of this document.or if the image matches the requirements of this document. |
| `302` | Not supported URL | The image field should be passed in as a stream rather than a string, check that you are not passing in data that is not of a stream type，or if the image matches the requirements of this document.or if the image matches the requirements of this document. |
| `303` | The image is too large | Please make sure your image size is less than 5000*5000px and file size is less than 3145728B. |
| `302` | Not supported URL | The image field should be passed in as a stream rather than a string, check that you are not passing in data that is not of a stream type，or if the image matches the requirements of this document.or if the image matches the requirements of this document. |
| `1000` | Internal Application Error | Please check that you are uploading a JPG or PGN image that meets the requirements, and if you are sure that there is nothing wrong with the image but encounter this error frequently, please create a ticket to inquire about it. |

**Example**

Request sample 1:

```
image=image
```

Response sample 1:

```
data={}
```

---

