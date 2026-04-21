# Fulfillment API

## ConfirmDeliveryForDBS

<a id="order-package-sof-delivered"></a>

- **Path**: `/order/package/sof/delivered`
- **Method**: `post`
- **Last modified**: 2022-08-09 14:20:00

Use this API to mark an sof order item as being delivered.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `dbsDeliveryReq` · _Object_ · **required** — request body
  - `packages` · _Object[]_ · **required** — Batch size is limited to 20
    - `package_id` · _String_ · **required** — packageId

**Response parameters**

- `result` · _Object_ · **required** — resp body
  - `data` · _Object_ · **required** — resp body
    - `packages` · _Object[]_ · **required** — packages
      - `msg` · _String_ · **required** — package process error msg
      - `item_err_code` · _String_ · **required** — 0=success other=error code
      - `package_id` · _String_ · **required** — package id
      - `retry` · _Boolean_ · **optional** — Determine if the package can be retried
  - `success` · _Boolean_ · **required** — process result，If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in packages is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful.
  - `error_code` · _String_ · **required** — exists when success is false
  - `error_msg` · _String_ · **required** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
dbsDeliveryReq={"packages":[{"package_id":"FP038521002"}]}
```

Response sample 1:

```
result={"data":{"packages":[{"msg":"operation not support fot nonDBS order!","item_err_code":"700009","package_id":"FP038521002"}]},"success":true,"errorCode":null,"errorMsg":null}
```

---

## DeliverDigital

<a id="order-digital-delivered"></a>

- **Path**: `/order/digital/delivered`
- **Method**: `post`
- **Last modified**: 2022-08-09 14:20:23

Use this API to mark a digital order item as being delivered.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `digitalDeliveryReq` · _Object_ · **required** — request body
  - `orders` · _Object[]_ · **required** — Batch size is limited to 20, deliver orders
    - `order_item_list` · _Number[]_ · **required** — order item list
    - `order_id` · _Number_ · **required** — orderId

**Response parameters**

- `result` · _Object_ · **required** — resp body
  - `data` · _Object_ · **required** — resp body
    - `orders` · _Object[]_ · **required** — deliver order
      - `order_item_list` · _Object[]_ · **required** — order item deliver result
        - `msg` · _String_ · **required** — error msg
        - `order_item_id` · _Number_ · **required** — order item id
        - `item_err_code` · _String_ · **required** — 0=success other=error code
        - `retry` · _Boolean_ · **required** — Determine if the order can be retried
      - `order_id` · _Number_ · **required** — order id
  - `success` · _Boolean_ · **required** — process result,If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in orders is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful.
  - `errorCode` · _String_ · **optional** — exists when success is false
  - `errorMsg` · _String_ · **optional** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
digitalDeliveryReq={"orders":[{"order_id":526170322194184,"order_item_list":[526170322294184]}]}
```

Response sample 1:

```
result={"data":{"orders":[{"order_id":526170322194184,"order_item_list":[{"item_err_code":"700020","msg":"order item not found or not belong to digital!","order_item_id":526170322294184,"retry":false}]}]},"success":true}
```

---

## FailedDeliveryForDBS

<a id="order-package-sof-failed-delivery"></a>

- **Path**: `/order/package/sof/failed_delivery`
- **Method**: `post`
- **Last modified**: 2022-08-09 14:20:28

Use this API to mark an sof order item as being delivered failed

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `dbsFailedDeliveryReq` · _Object_ · **required** — request body
  - `packages` · _Object[]_ · **required** — Batch size is limited to 20, packages
    - `package_id` · _String_ · **required** — packageId

**Response parameters**

- `result` · _Object_ · **required** — resp body
  - `data` · _Object_ · **required** — resp body
    - `packages` · _Object[]_ · **required** — packages
      - `msg` · _String_ · **required** — package process error msg
      - `item_err_code` · _String_ · **required** — 0=success other=error code
      - `package_id` · _String_ · **required** — package id
      - `retry` · _Boolean_ · **optional** — Determine if the package can be retried
  - `success` · _Boolean_ · **required** — process result，If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in packages is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful.
  - `error_code` · _String_ · **required** — exists when success is false
  - `error_msg` · _String_ · **required** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
dbsFailedDeliveryReq={"packages":[{"package_id":"FP038521002"}]}
```

Response sample 1:

```
result={"data":{"packages":[{"msg":"operation not support fot nonDBS order!","item_err_code":"700009","package_id":"FP038521002"}]},"success":true,"errorCode":null,"errorMsg":null}
```

---

## GetShipmentProvider

<a id="order-shipment-providers-get"></a>

- **Path**: `/order/shipment/providers/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-09 14:20:31

Use this API to get the list of all active shipping providers, which is needed when working with the PackOrder API.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `getShipmentProvidersReq` · _Object_ · **required** — req body
  - `orders` · _Object[]_ · **required** — Batch size is limited to 20, to pack orders
    - `order_id` · _Number_ · **required** — order_id
    - `order_item_ids` · _Number[]_ · **required** — order_item_ids

**Response parameters**

- `result` · _Object_ · **required** — resp body
  - `data` · _Object_ · **required** — resp body
    - `platform_default` · _Number_ · **required** — 1==seller not need or can't choose transferring warehouses .   0=seller must choose transferring warehouses from shipment_providers  and pass to PACK API by self
    - `shipment_providers` · _Object[]_ · **required** — transferring warehouses list which seller can be choose
      - `name` · _String_ · **optional** — transferring warehouses name
      - `provider_code` · _String_ · **optional** — transferring warehouses code
    - `shipping_allocate_type` · _String_ · **optional** — NTFS/TFS ，Directly pass through to the PACK API
  - `success` · _Boolean_ · **required** — process result
  - `error_code` · _String_ · **required** — exists when success is false
  - `error_msg` · _String_ · **required** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
getShipmentProvidersReq={"orders":[{"order_id":12312312,"order_item_ids":[123124321]}]}
```

Response sample 1:

```
result={"data":{"platform_default":1,"shipment_providers":[]},"success":true,"errorCode":"","errorMsg":""}
```

---

## Pack

<a id="order-fulfill-pack"></a>

- **Path**: `/order/fulfill/pack`
- **Method**: `post`
- **Last modified**: 2022-08-09 14:20:34

Use this API to mark an order item as being packed.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `packReq` · _Object_ · **required** — request body
  - `pack_order_list` · _Object[]_ · **required** — Batch size is limited to 20，Orders that need to be packed，Sub-orders of the same order will be processed together
    - `order_item_list` · _Number[]_ · **required** — order_item_ids that need to be packed
    - `order_id` · _Number_ · **required** — order that need to be packed
  - `delivery_type` · _String_ · **required** — dropship
  - `shipment_provider_code` · _String_ · **optional** — If it is a local store (TFs), this field cannot be transferred; If it is a cross-border store must pass (NTFS); This field cannot be transferred to DBS orders (including local stores and cross-border stores) If you want to get the available values, you can call the <a href='https://open.lazada.com/apps/doc/api?path=%2Forder%2Fshipment%2Fproviders%2Fget' target='_brank'>getshipmentprovider</a>  API
  - `shipping_allocate_type` · _String_ · **required** — If you want to get the available values, you can call the <a href='https://open.lazada.com/apps/doc/api?path=%2Forder%2Fshipment%2Fproviders%2Fget' target='_brank'>getshipmentprovider</a>  API

**Response parameters**

- `result` · _Object_ · **required** — resp body
  - `data` · _Object_ · **required** — resp data
    - `pack_order_list` · _Object[]_ · **required** — pack order process result list
      - `order_item_list` · _Object[]_ · **required** — order item pack result
        - `order_item_id` · _Number_ · **required** — orderItemId
        - `msg` · _String_ · **required** — errMsg when item_err_code!=0
        - `item_err_code` · _String_ · **required** — 0=success other=error code，The final processing result of the order
        - `tracking_number` · _String_ · **required** — tracking_number
        - `shipment_provider` · _String_ · **required** — shipment_provider
        - `package_id` · _String_ · **required** — package_id
        - `retry` · _Boolean_ · **required** — Determine if the package can be retried
      - `order_id` · _Number_ · **required** — order id
  - `success` · _Boolean_ · **required** — If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in orders is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful.
  - `error_code` · _String_ · **required** — exists when success is false
  - `error_msg` · _String_ · **required** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `6` | SYSTEM_ERROR | system is busy now ,pls try later |
| `1003` | E1003_3PL_ALLOCATION_FAIL | 3pl allocation failed |
| `40011` | RPC_ERROR | system is busy now ,pls try later |
| `700000` | PACKAGE_STATUS_NOT_ALLOW_TO_OP | current package status not allow to operation |
| `700001` | DBS_SHIPMENT_PROVIDER_CODE_NOT_EXITS | shipment provider code not exits |
| `700004` |  PARAM_ILLEGAL | param illegal |
| `700013` | OP_NOT_SUPPORT | operation is no support |
| `700016` | NOT_AVAILABLE_NTFS_3PL | seller not available 3pl , pls contact us to subscription 3pl |
| `700017` | PARAM_IS_NULL | param can't be null |
| `700018` |  PARAM_SIZE_ERROR | param size not match |
| `700019` | PARAM_MIN_ERROR | param min not match |
| `700020` | ORDER_ITEM_NOT_FOUND_OR_NOT_BELONG_DIGITAL | order item not found or not belong to digital |
| `700021` |  ORDER_NOT_FOUND | order not found |
| `700022` | BATCH_SIZE_OUT_OF_LIMIT | batch size out of limit |
| `700023` |  PICKUP_IN_STORE_NO_SUPPORT | pickup in store order no allow to operation |
| `700024` | GET_LOCK_FAILED | failed get lock,pls try later |
| `700025` | ORDER_ITEM_NOT_FOUND | order item not found |
| `700026` | FO_ITEM_NOT_ALLOW_TO_PACK | item current status not allow to pack |
| `700027` | NOT_SUPPORT_FBL_TO_PACK | Does not support FBL order to pack |
| `700028` | NOT_SUPPORT_PACK_UP_IN_STORE_TO_PACK | Does not support pickup_in_store order to pack |
| `700029` |  ITEM_MUST_BELONG_SAME_WAREHOUSE | item must belong same warehouse |
| `700030` |  NOT_SUPPORT_DG_SERVICE_TO_PACK | digital or service order not need  to pack |
| `700031` |  ITEM_NOT_READY_TO_FULFILL | item not ready to fulfill |
| `700032` | SELLER_NOT_FOUND | can't found seller |
| `700033` | TRANSFERRING_WAREHOUSE_PROVIDER | transferringWarehouseCode cannot found |

**Example**

Request sample 1:

```
packReq={"pack_order_list":[{"order_item_list":[560694402292001],"order_id":560694402192001}],"delivery_type":"dropship","shipment_provider_code":"FM50","shipping_allocate_type":"NTFS"}
```

Response sample 1:

```
result={"data":{"pack_order_list":[{"order_item_list":[{"order_item_id":560694402292001,"msg":"success","item_err_code":"0","tracking_number":"TH340231JV0W0A","shipment_provider":"Flash Express","package_id":"FP022511752246001","retry":false}],"order_id":560694402192001}]},"success":true,"errorCode":null,"errorMsg":null}
```

---

## PackageStatusUpdateForDBS

<a id="order-package-sof-status-update"></a>

- **Path**: `/order/package/sof/status/update`
- **Method**: `post`
- **Last modified**: 2024-08-08 15:06:24

DBS package status update.
This interface is only open to some stores

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `trackingNumber` · _String_ · **required** — waybill no
- `source` · _String_ · **required** — OPENAPI
- `carrierCode` · _String_ · **optional** — SF
- `tag` · _String_ · **required** — package no
- `trackInfo` · _Object_ · **required** — track info
  - `latestStatus` · _Object_ · **required** — latest status
    - `status` · _String_ · **required** — status
    - `subStatus` · _String_ · **required** — subStatus
    - `subStatusDesc` · _String_ · **optional** — subStatusDesc
  - `latestEvent` · _Object_ · **required** — latestEvent
    - `eventTime` · _Number_ · **required** — 1723012167919
    - `description` · _String_ · **optional** — description
    - `location` · _String_ · **optional** — location
    - `stage` · _String_ · **optional** — stage

**Response parameters**

- `success` · _Boolean_ · **optional** — api result
- `module` · _Object_ · **optional** — content
  - `result` · _Boolean_ · **optional** — business result
- `errorCode` · _Object_ · **optional** — error msesage
  - `displayMessage` · _String_ · **optional** — error msesage

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
trackingNumber=SOF123456
source=OPENAPI
carrierCode=SF
tag=FP043412484186001
trackInfo=track info
```

Response sample 1:

```
success=true
module=content
errorCode=error msesage
```

---

## PrintAWB

<a id="order-package-document-get"></a>

- **Path**: `/order/package/document/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-09 14:20:38

Use this API to retrieve order-related documents, only for shipping labels.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `getDocumentReq` · _Object_ · **required** — request body
  - `doc_type` · _String_ · **required** — HTML/PDF
  - `packages` · _Object[]_ · **required** — Batch size is limited to 20
    - `package_id` · _String_ · **required** — package
  - `print_item_list` · _Boolean_ · **optional** — if is true, print package AWB with package item info, else no print package item info

**Response parameters**

- `result` · _Object_ · **required** — resp body
  - `data` · _Object_ · **required** — resp body
    - `file` · _String_ · **required** — pdf /html content
    - `doc_type` · _String_ · **required** — HTML/PDF
    - `pdf_url` · _String_ · **optional** — pdf file url , only exist when doc_type is PDF
  - `success` · _Boolean_ · **required** — process result
  - `error_code` · _String_ · **required** — exists when success is false
  - `error_msg` · _String_ · **required** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
getDocumentReq={"doc_type":"PDF","packages":[{"package_id":"FP038541022"}]}
```

Response sample 1:

```
result={"data":{"file":"PGlmcmFtZSBzcm","doc_type":"PDF"},"success":true,"errorCode":"","errorMsg":""}
```

---

## ReadyToShip

<a id="order-package-rts"></a>

- **Path**: `/order/package/rts`
- **Method**: `post`
- **Last modified**: 2022-08-09 14:20:41

Use this API to mark an order item as being ready to ship.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `readyToShipReq` · _Object_ · **required** — request body
  - `packages` · _Object[]_ · **required** — Batch size is limited to 20, to readyToShip packages
    - `package_id` · _String_ · **required** — packageId

**Response parameters**

- `result` · _Object_ · **required** — resp body
  - `data` · _Object_ · **required** — resp data
    - `packages` · _Object[]_ · **required** — package readyToShip result
      - `msg` · _String_ · **required** — err msg
      - `item_err_code` · _String_ · **required** — 0=success other=error code
      - `package_id` · _String_ · **required** — packageId
      - `retry` · _String_ · **optional** — Determine if the package can be retried
  - `success` · _Boolean_ · **required** — process result，If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in packages is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful.
  - `error_code` · _String_ · **required** — exists when success is false
  - `error_msg` · _String_ · **required** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
readyToShipReq={"packages":[{"package_id":"FP038524014"}]}
```

Response sample 1:

```
result={"data":{"packages":[{"msg":"package already cancelled","item_err_code":"600002","package_id":"FP038524014"}]},"success":true,"errorCode":"","errorMsg":""}
```

---

## RecreatePackage

<a id="order-package-repack"></a>

- **Path**: `/order/package/repack`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-09 14:20:45

Use this API to mark a package item as being repack.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `rePackReq` · _Object_ · **required** — request body
  - `packages` · _Object[]_ · **required** — Batch size is limited to 20, packages
    - `package_id` · _String_ · **required** — packageId

**Response parameters**

- `result` · _Object_ · **required** — resp body
  - `data` · _Object_ · **required** — resp data
    - `packages` · _Object[]_ · **required** — package process result
      - `msg` · _String_ · **required** — error msg
      - `item_err_code` · _String_ · **required** — 0=success     other=error code
      - `package_id` · _String_ · **required** — packageId
      - `retry` · _Boolean_ · **optional** — Determine if the package can be retried
  - `success` · _Boolean_ · **required** — process result , If this is true, it doesn't mean that everything is processed successfully. It is necessary to judge that the item_err_code in packages is equal to 0 to determine that the processing is successful. Otherwise, if this is false, this batch must be unsuccessful.
  - `error_code` · _String_ · **required** — exists when success is false
  - `error_msg` · _String_ · **required** — exists when success is false

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
rePackReq={"packages":[{"package_id":"FP12312321"}]}
```

Response sample 1:

```
result={"data":{"packages":[{"msg":"package not found","item_err_code":"600001","package_id":"FP12312321"}]},"success":true,"errorCode":"","errorMsg":""}
```

---

