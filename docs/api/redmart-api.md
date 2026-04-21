# RedMart API

## RssGetOnePickupJob

<a id="rss-pickup-job-get"></a>

- **Path**: `/rss/pickup-job/get`
- **Method**: `GET/POST`
- **Last modified**: 2024-03-15 11:00:48

Get details of a pickup job

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `storeId` · _Number_ · **required** — store id
- `pickupJobId` · _Number_ · **required** — pickup job id

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `data` · _Object_ · **optional** — pickup job details
  - `success` · _Boolean_ · **optional** — success
  - `errorMessage` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
storeId=414
pickupJobId=3588214
```

Response sample 1:

```
result={"result": {"data": {"scheduledAt":1684135189000,"qtyFulfilledCount":10,"amendabilityCutOffDate":1684135989000,"preferredPickupTime":"13:00-17:00","items":[{"name":"Salmon","qtyFulfilled":10,"sku":"19739731408","size":"2.5kg","shipmentsInfo":[{"qty":5,"orderId":"49e74qjnkprp1to4"},{"qty":6,"orderId":"49e74qjn1prp1to4"}],"minimumExpiryDate":1770357600000,"qty":11,"vpc":"19739731408","imageUrl":"http://media.redmart.com/newmedia/1600x/i/m/xxx.jpg","rpc":123456}],"pickedAt":1684136189000,"id":123,"status":"pickedup","category":"Dry","qtyCount":11}, "errorMessage": null, success: true}}
```

---

## RssGetPickupJobs

<a id="rss-pickup-jobs-get"></a>

- **Path**: `/rss/pickup-jobs/get`
- **Method**: `GET/POST`
- **Last modified**: 2024-03-19 10:31:23

Retrieve RSS pickup jobs based on time range and status filter.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `storeId` · _Number_ · **required** — Store id
- `from` · _Number_ · **required** — Epoch millis of job date from
- `till` · _Number_ · **required** — Epoch millis of job date till
- `statuses` · _String_ · **optional** — Job statuses filter. Possible job statuses are "pending", "arrived", "pickedup", "cancelled" and "failed". Concatenate statuses of interest with "," to make queries with multiple job status filter. Leave this field blank or null to query without filtering.

**Response parameters**

- `result` · _Object_ · **optional** — Result
  - `data` · _Object[]_ · **optional** — List of pick up jobs
  - `success` · _Boolean_ · **optional** — Whether response is successful
  - `errorMessage` · _String_ · **optional** — Error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
storeId=414
from=1709266007000
till=1710216407000
statuses="pickedup, pending"
```

Response sample 1:

```
result={"result": {"data": [{"scheduledAt":1684135189000,"qtyFulfilledCount":12,"amendabilityCutOffDate":1684135989000,"preferredPickupTime":"13:00-17:00","items":[{"name":"Salmon","qtyFulfilled":10,"sku":"19739731408","size":"2.5kg","shipmentsInfo":[{"qty":5,"orderId":"49e74qjnkprp1to4"},{"qty":6,"orderId":"49e74qjn1prp1to4"}],"minimumExpiryDate":1770357600000,"qty":11,"vpc":"19739731408","imageUrl":"http://media.redmart.com/newmedia/1600x/i/m/xxx.jpg","rpc":123456},{"name":"Curry","qtyFulfilled":2,"sku":"19739731408","size":"2.5kg","shipmentsInfo":[{"qty":2,"orderId":"49e74qjnkprp1to4"}],"minimumExpiryDate":1770357600000,"qty":2,"vpc":"19739731408","imageUrl":"http://media.redmart.com/newmedia/1600x/i/m/xxx.jpg","rpc":123456}],"pickedAt":1684136189000,"id":123,"status":"pickedup","category":"Dry","qtyCount":13}], "success": true, "errorMessage": null}}
```

---

## RssGetPickupLocations

<a id="rss-pickuplocations-get"></a>

- **Path**: `/rss/pickupLocations/get`
- **Method**: `get`
- **Last modified**: 2024-03-14 17:00:51

rss get pickupLocations by storeId

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `storeId` · _Number_ · **required** — store id
- `page` · _Number_ · **required** — page
- `pageSize` · _Number_ · **required** — pageSize

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `data` · _Object[]_ · **optional** — pickup location detail
  - `page` · _Number_ · **optional** — page
  - `pageSize` · _Number_ · **optional** — page size
  - `total` · _Number_ · **optional** — total
  - `success` · _Boolean_ · **optional** — success
  - `errorMessage` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
storeId=414
page=1
pageSize=10
```

Response sample 1:

```
result=none
```

---

## RssGetProduct

<a id="rss-product-get"></a>

- **Path**: `/rss/product/get`
- **Method**: `get`
- **Last modified**: 2024-02-29 17:08:27

get rss product by storeId and productId

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `storeId` · _Number_ · **required** — store id
- `productId` · _Number_ · **required** — the RPC of the Product

**Response parameters**

- `result` · _Object_ · **optional** — reuslt
  - `data` · _Object_ · **optional** — data
  - `success` · _Boolean_ · **optional** — success
  - `errorMessage` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
storeId=414
productId=1026158
```

Response sample 1:

```
result=none
```

---

## RssGetProducts

<a id="rss-products-get"></a>

- **Path**: `/rss/products/get`
- **Method**: `get`
- **Last modified**: 2024-03-04 15:25:36

rss get products paged by storeId and pickupLocationId

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `storeId` · _Number_ · **required** — store id
- `pickupLocationIds` · _Number[]_ · **optional** — pickup location ids
- `page` · _Number_ · **required** — page
- `pageSize` · _Number_ · **required** — page size

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `data` · _Object[]_ · **optional** — data
  - `page` · _Number_ · **optional** — page
  - `pageSize` · _Number_ · **optional** — page size
  - `total` · _Number_ · **optional** — total
  - `success` · _Boolean_ · **optional** — success
  - `errorMessage` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
storeId=414
pickupLocationIds=[1837, 1838]
page=1
pageSize=10
```

Response sample 1:

```
result=none
```

---

## RssGetStockLot

<a id="rss-stocklot-get"></a>

- **Path**: `/rss/stockLot/get`
- **Method**: `get`
- **Last modified**: 2024-03-04 16:26:00

rss get stockLot

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `storeId` · _Number_ · **required** — store id
- `pickupLocationId` · _Number_ · **required** — pickupLocation id
- `productId` · _Number_ · **required** — the RPC of the Product
- `stockLotId` · _String_ · **required** — Identifier of the requested Stock Lot. For now always hardcoded to "0" (please note the String type, do not always expect it to be a number !)

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `data` · _Object_ · **optional** — data
  - `success` · _Boolean_ · **optional** — success
  - `errorMessage` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
storeId=414
pickupLocationId=1837
productId=1026158
stockLotId=0
```

Response sample 1:

```
result=none
```

---

## RssGetStockLots

<a id="rss-stocklots-get"></a>

- **Path**: `/rss/stockLots/get`
- **Method**: `get`
- **Last modified**: 2024-03-04 16:12:43

rss get stockLots

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `storeId` · _Number_ · **required** — store id
- `pickupLocationId` · _Number_ · **required** — pickupLocation id
- `productId` · _Number_ · **required** — product id

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `data` · _Object[]_ · **optional** — data
  - `success` · _Boolean_ · **optional** — success
  - `errorMessage` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
storeId=414
pickupLocationId=1837
productId=1026158
```

Response sample 1:

```
result=none
```

---

## RssUpdateStockLot

<a id="rss-stocklot-update"></a>

- **Path**: `/rss/stockLot/update`
- **Method**: `GET/POST`
- **Last modified**: 2024-03-04 16:26:39

rss update stockLot

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `storeId` · _Number_ · **required** — store id
- `pickupLocationId` · _Number_ · **required** — The unique id of the pickup location where the product is stored
- `productId` · _Number_ · **required** — the RPC of the Product (so the RedMart-specific code, not the merchant-specific code)
- `stockLotId` · _String_ · **required** — Identifier of the requested Stock Lot. For now always hardcoded to "0" (please note the String type, do not always expect it to be a number !)
- `stockLotUpdateDTO` · _Object_ · **required** — stockLot update DTO
  - `quantityAtPickupLocation` · _Number_ · **required** — quantity at pickupLocation

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `success` · _Boolean_ · **optional** — success
  - `errorMessage` · _String_ · **optional** — error message
  - `data` · _Object_ · **optional** — data

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
storeId=414
pickupLocationId=1837
productId=1000152
stockLotId=0
stockLotUpdateDTO={"quantityAtPickupLocation": 10}
```

Response sample 1:

```
result=none
```

---

