# Logistics Station API

## CageValidation

<a id="logistics-station-cages-validate"></a>

- **Path**: `/logistics/station/cages/validate`
- **Method**: `post`
- **Last modified**: 2023-06-12 16:18:14

Validate if a cage is valid

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `cageNumber` · _String_ · **required** — Cage number
- `stationCode` · _String_ · **required** — Station code/ID

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Boolean_ · **optional** — Validate cage result success or not?
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `CAGE_NOT_FOUND` | Cage not found: {cageNumber} | Cage not found |
| `STATION_NOT_ACTIVE` | Station [{stationCode}] is not active | Station is not active |
| `UNEXPECTED_ERROR` | NullpointerException | Mostly the stacktrace of unexpected error |

**Example**

Request sample 1:

```
cageNumber=123
stationCode=STATION_123456
```

Response sample 1:

```
success=true
data=true
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## ConfirmInbound

<a id="logistics-station-v1-confirm-inbound"></a>

- **Path**: `/logistics/station/v1/confirm-inbound`
- **Method**: `post`
- **Last modified**: 2023-10-27 15:30:49

Confirm inbound. Call this API to inbound the scanned parcel and finish the inbound process

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system
- `cageNumber` · _String_ · **optional** — Cage number. If cage number is present, it will be validated. In case missing cage number, the system will choose default cage number
- `trackingNumbers` · _String[]_ · **required** — List of tracking number
- `serviceType` · _String_ · **required** — Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point)

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Boolean_ · **optional** — Response data
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
cageNumber=123
trackingNumbers=["TEST1231124VN", "TEST1231125VN"]
serviceType=SELLER_DROPOFF
```

Response sample 1:

```
success=true
data=Confirm inbound success or not?
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## ConfirmParcelCollection

<a id="logistics-station-v1-cp-confirm-parcel-collection"></a>

- **Path**: `/logistics/station/v1/cp/confirm-parcel-collection`
- **Method**: `post`
- **Last modified**: 2023-10-19 17:22:34

Confirm customer collects or rejects parcel. This API is used after ValidateOTP success.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system
- `trackingNumber` · _String_ · **required** — Tracking number of parcel
- `otp` · _String_ · **required** — The parcel OTP is used for collecting parcel
- `action` · _String_ · **required** — Accept values: COLLECT, REJECT
- `rejectCode` · _String_ · **optional** — Reject reason code, required in case REJECT action

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Boolean_ · **optional** — Validate OTP result is success or not?
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
trackingNumber=TEST1231124VN
otp=123456
action=COLLECT
rejectCode=wrong_product
```

Response sample 1:

```
success=true
data=true
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## CreateScannedParcel

<a id="logistics-station-v1-scanned-parcels-create"></a>

- **Path**: `/logistics/station/v1/scanned-parcels/create`
- **Method**: `post`
- **Last modified**: 2023-10-27 15:16:41

Create a scanned parcel. Call this API when scanning the tracking number on the parcel.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system
- `cageNumber` · _String_ · **optional** — Cage number. If cage number is present, it will be validated. In case missing cage number, the system will choose default cage number
- `trackingNumber` · _String_ · **required** — Tracking number of parcel
- `serviceType` · _String_ · **required** — Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point)

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object_ · **optional** — Response data
  - `trackingNumber` · _String_ · **optional** — Tracking number
  - `cageNumber` · _String_ · **optional** — Cage number
  - `sellerName` · _String_ · **optional** — [SELLER_DROPOFF/CUSTOMER-DROPOFF] Seller name
  - `pickupTplSlug` · _String_ · **optional** — [SELLER_DROPOFF/CUSTOMER-DROPOFF] Pickup 3PL slug: lex-th for regular parcels, another 3PL in case MPU
  - `createdAt` · _Number_ · **optional** — Created at timestamp in milliseconds
  - `lastmileTpl` · _String_ · **optional** — [CUSTOMER_COLLECTION] Lastmile 3PL name: LEX TH, LEX VN, etc
  - `warningMessage` · _String_ · **optional** — [CUSTOMER_COLLECTION] Warning message in case parcel is SLA breached
  - `serviceType` · _String_ · **optional** — Service type
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
cageNumber=123
trackingNumber=TEST1231124VN
serviceType=SELLER_DROPOFF
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## DeleteScannedParcel

<a id="logistics-station-v1-scanned-parcels-delete"></a>

- **Path**: `/logistics/station/v1/scanned-parcels/delete`
- **Method**: `post`
- **Last modified**: 2023-10-19 17:22:33

Delete scanned parcels by tracking number. This API is required when user deletes the scanned parcels

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system
- `trackingNumbers` · _String[]_ · **required** — List of tracking numbers
- `serviceType` · _String_ · **required** — Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point)

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Boolean_ · **optional** — Delete success or not?
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
trackingNumbers=["TEST1231124VN", "TEST1231125VN"]
serviceType=SELLER_DROPOFF
```

Response sample 1:

```
success=true
data=true
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## DopConfirmInbound

<a id="logistics-station-dop-confirm-inbound"></a>

- **Path**: `/logistics/station/dop/confirm-inbound`
- **Method**: `post`
- **Last modified**: 2023-06-12 16:48:25

DOP confirm inbound

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationCode` · _String_ · **required** — Station code/ID
- `scannedParcels` · _Object[]_ · **required** — List scanned parcels
  - `cageNumber` · _String_ · **required** — Cage number
  - `trackingNumber` · _String_ · **required** — Tracking number of parcel

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _String_ · **optional** — Confirm inbound success or not?
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `DOP_RESERVED_PARCEL_NOT_FOUND` | No parcel info for tracking number {trackingNumber}. Please scan again or manually input the tracking number. | Cannot find parcel info with provided tracking number |
| `CAGE_NOT_FOUND` | Cage not found: {cageNumber} | Cage not found |
| `STATION_NOT_ACTIVE` | Station [{stationCode}] is not active | Station is not active |
| `PARCEL_ALREADY_INBOUND` | Parcel has already inbounded: {trackingNumber} | Parcel has already inbounded |
| `STATION_IS_NOT_DOP` | Station {stationCode} is not a DOP. You can not drop-off here. | Station is not DOP type |
| `DOP_PARCEL_STATUS_NOT_WHITELIST` | Parcel is not at correct status to dropoff, parcel {trackingNumber} is now {status} | Invalid status to inbound |
| `CANNOT_INBOUND_CANCELLED_TASK` | Tracking number {trackingNumber} is cancelled. Please remove out of list | Parcel is cancelled |
| `DOP_MERCHANT_MDOP` | Seller is a MDOP, your parcel cannot be dropped-off to any station. DOP Merchant={sellerName}, and TN={trackingNumber} | The seller of the parcel is MDOP |
| `DUPLICATE_REQUEST` | Your request is processing | Client submit duplicate request at the same time |
| `UNEXPECTED_ERROR` | NullpointerException | Mostly the stacktrace of unexpected error |

**Example**

Request sample 1:

```
stationCode=STATION_123456
scannedParcels=List scanned parcels
```

Response sample 1:

```
success=true
data=true
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## DopCreateScannedParcel

<a id="logistics-station-dop-scanned-parcels"></a>

- **Path**: `/logistics/station/dop/scanned-parcels`
- **Method**: `post`
- **Last modified**: 2023-06-15 16:09:23

DOP create scanned parcel

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationCode` · _String_ · **required** — Station code/ID
- `cageNumber` · _String_ · **required** — Cage number
- `trackingNumber` · _String_ · **required** — Tracking number of parcel

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object_ · **optional** — Response data
  - `trackingNumber` · _String_ · **optional** — Tracking number
  - `stationCode` · _String_ · **optional** — Station code/ID
  - `cageNumber` · _String_ · **optional** — Cage number
  - `sellerName` · _String_ · **optional** — Seller name
  - `pickupTplSlug` · _String_ · **optional** — Pickup 3PL slug: lex-th for regular parcels, another 3PL in case MPU
  - `createdAt` · _Number_ · **optional** — Created at timestamp in milliseconds
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `DOP_RESERVED_PARCEL_NOT_FOUND` | No parcel info for tracking number {trackingNumber}. Please scan again or manually input the tracking number. | Cannot find parcel info with provided tracking number |
| `CAGE_NOT_FOUND` | Cage not found: {cageNumber} | Cage not found |
| `STATION_NOT_ACTIVE` | Station [{stationCode}] is not active | Station is not active |
| `PARCEL_ALREADY_INBOUND` | Parcel has already inbounded: {trackingNumber} | Parcel has already inbounded |
| `STATION_IS_NOT_DOP` | Station {stationCode} is not a DOP. You can not drop-off here. | Station is not DOP type |
| `DOP_PARCEL_STATUS_NOT_WHITELIST` | Parcel is not at correct status to dropoff, parcel {trackingNumber} is now {status} | Invalid status to inbound |
| `CANNOT_INBOUND_CANCELLED_TASK` | Tracking number {trackingNumber} is cancelled. Please remove out of list | Parcel is cancelled |
| `DOP_MERCHANT_MDOP` | Seller is a MDOP, your parcel cannot be dropped-off to any station. DOP Merchant={sellerName}, and TN={trackingNumber} | The seller of the parcel is MDOP |
| `DUPLICATE_REQUEST` | Your request is processing | Client submit duplicate request at the same time |
| `UNEXPECTED_ERROR` | NullpointerException | Mostly the stacktrace of unexpected error |

**Example**

Request sample 1:

```
stationCode=STATION_123456
cageNumber=123
trackingNumber=TEST1231124VN
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## DopDeleteScannedParcel

<a id="logistics-station-dop-scanned-parcels-delete"></a>

- **Path**: `/logistics/station/dop/scanned-parcels/delete`
- **Method**: `post`
- **Last modified**: 2023-06-12 15:38:35

DOP delete scanned parcel

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationCode` · _String_ · **required** — Station code/ID
- `trackingNumbers` · _String[]_ · **required** — List scanned tracking number

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _String_ · **optional** — Delete success or not?
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `PARCEL_NOT_FOUND` | Parcel not found: {trackingNumber1,trackingNumber2} | Parcel not found |
| `UNEXPECTED_ERROR` | NullpointerException | Mostly the stacktrace of unexpected error |

**Example**

Request sample 1:

```
stationCode=STATION_123456
trackingNumbers=["TEST1234VN", "TEST1235VN"]
```

Response sample 1:

```
success=true
data=true
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## DopGetInboundedParcel

<a id="logistics-station-dop-inbounded-parcels-list"></a>

- **Path**: `/logistics/station/dop/inbounded-parcels/list`
- **Method**: `get`
- **Last modified**: 2023-06-12 17:19:00

DOP get list scanned parcel

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationCode` · _String_ · **required** — Station code/ID
- `trackingNumbers` · _String[]_ · **required** — List inbounded tracking number

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object[]_ · **optional** — Response data
  - `trackingNumber` · _String_ · **optional** — Tracking number
  - `cageNumber` · _String_ · **optional** — Cage number
  - `status` · _String_ · **optional** — Status of parcel: with_dop_waiting_for_pickup (parcel is still in station), pickup_successful (parcel is picked-up by lex), auto_closure (parcel is picked-up by other 3PL), missing (parcel is marked lost)
  - `inboundedAt` · _Number_ · **optional** — Inbounded at timestamp in milliseconds
  - `lostAt` · _Number_ · **optional** — Lost at timestamp in milliseconds
  - `pickupTplSlug` · _String_ · **optional** — Pickup 3PL slug: lex-th for regular parcels, another 3PL in case MPU
  - `outboundedAt` · _Number_ · **optional** — Outbounded at timestamp in milliseconds
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `UNEXPECTED_ERROR` | NullpointerException | Mostly the stacktrace of unexpected error |

**Example**

Request sample 1:

```
stationCode=STATION_123456
trackingNumbers=["TEST1234VN", "TEST1235VN"]
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## DopGetScannedParcel

<a id="logistics-station-dop-scanned-parcels-list"></a>

- **Path**: `/logistics/station/dop/scanned-parcels/list`
- **Method**: `get`
- **Last modified**: 2023-06-15 16:09:13

DOP get list scanned parcel

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationCode` · _String_ · **required** — Station code/ID
- `cageNumber` · _String_ · **optional** — Cage number

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object[]_ · **optional** — Response data
  - `trackingNumber` · _String_ · **optional** — Tracking number
  - `stationCode` · _String_ · **optional** — Station code/ID
  - `cageNumber` · _String_ · **optional** — Cage number
  - `sellerName` · _String_ · **optional** — Seller name
  - `pickupTplSlug` · _String_ · **optional** — Pickup 3PL slug: lex-th for regular parcels, another 3PL in case MPU
  - `createdAt` · _Number_ · **optional** — Created at timestamp in milliseconds
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `UNEXPECTED_ERROR` | NullpointerException | Mostly the stacktrace of unexpected error |

**Example**

Request sample 1:

```
stationCode=STATION_123456
cageNumber=123
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## GetCpScheduledPuParcel

<a id="logistics-station-v1-cp-scheduled-pu-parcels-list"></a>

- **Path**: `/logistics/station/v1/cp/scheduled-pu-parcels/list`
- **Method**: `get`
- **Last modified**: 2023-10-19 20:38:42

Get a list of parcels that are scheduled to be picked up for return to seller. These parcels are expired (no collection from customer), SLA breached or customer rejected. This API is used to help the agent prepare parcels before seller comes.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object[]_ · **optional** — Response data
  - `trackingNumber` · _String_ · **optional** — Tracking number
  - `dispatchedAt` · _Number_ · **optional** — Runsheet is dispatched for courier pickup timestamp in milliseconds
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## GetInboundedParcel

<a id="logistics-station-v1-inbounded-parcels-list"></a>

- **Path**: `/logistics/station/v1/inbounded-parcels/list`
- **Method**: `get`
- **Last modified**: 2023-10-19 20:38:45

Get a list of inbounded parcels by a list of tracking numbers. This API is used for checking the status of inbounded parcels such as parcels picked up by LEX, picked up by 3PL, or collected by a customer.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system
- `trackingNumbers` · _String[]_ · **required** — List of tracking number
- `serviceType` · _String_ · **required** — Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point)

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object[]_ · **optional** — Response data
  - `trackingNumber` · _String_ · **optional** — Tracking number
  - `cageNumber` · _String_ · **optional** — Cage number
  - `pickupTplSlug` · _String_ · **optional** — [SELLER_DROPOFF/CUSTOMER-DROPOFF] Pickup 3PL slug: lex-th for regular parcels, another 3PL in case MPU
  - `lastmileTpl` · _String_ · **optional** — [CUSTOMER_COLLECTION] Lastmile 3PL name: LEX TH, LEX VN, etc
  - `warningMessage` · _String_ · **optional** — [CUSTOMER_COLLECTION] Warning message in case parcel is SLA breached
  - `serviceType` · _String_ · **optional** — Service type
  - `inboundedAt` · _String_ · **optional** — Inbounded at timestamp in milliseconds
  - `outboundedAt` · _String_ · **optional** — Outbounded at timestamp in milliseconds
  - `lostAt` · _String_ · **optional** — Lost at timestamp in milliseconds
  - `status` · _String_ · **optional** — Status of parcel: with_dop_waiting_for_pickup (DOP status, inbound success), pickup_successful (DOP status, picked-up by LEX), auto_closure (DOP status, picked-up by other 3PL), missing (lost), waiting_for_customer_to_collect (CP status, inbound success), customer_collected (CP status, collected by customer), customer_rejected (CP status, rejected by customer), cp_parcel_expired (CP status, expired after some days without customer collect), cp_waiting_for_pickup (CP status, waiting driver to collect expired/rejected parcel), cp_handover_to_3pl (CP status, handed over expired/rejected parcel to driver)
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
trackingNumbers=["TEST1231124VN", "TEST1231125VN"]
serviceType=SELLER_DROPOFF
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## GetListAccessStation

<a id="logistics-station-list"></a>

- **Path**: `/logistics/station/list`
- **Method**: `get`
- **Last modified**: 2023-06-14 18:16:29

Get list access station by APP

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object[]_ · **optional** — List access station
  - `stationName` · _String_ · **optional** — Station name
  - `stationCode` · _String_ · **optional** — Station code/ID
  - `active` · _Boolean_ · **optional** — Station is active?
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
```

Response sample 1:

```
success=true
data=List access station
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## GetMetaData

<a id="logistics-station-v1-metadata"></a>

- **Path**: `/logistics/station/v1/metadata`
- **Method**: `get`
- **Last modified**: 2023-10-23 15:50:19

Get metadata such as reject reasons, etc

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object_ · **optional** — Response data
  - `rejectReasons` · _Object[]_ · **optional** — List of reject reasons
    - `rejectCode` · _String_ · **optional** — The reject reason code, it's used for ConfirmParcelCollection in case action REJECT
    - `text` · _String_ · **optional** — The text is to display on the screen for user selection
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## GetScannedParcel

<a id="logistics-station-v1-scanned-parcels-list"></a>

- **Path**: `/logistics/station/v1/scanned-parcels/list`
- **Method**: `get`
- **Last modified**: 2023-10-19 20:38:49

Get a list of scanned parcels. This API is often used for synchronization purposes such as: user refreshes the page, partner system can call this API to get the list of scanned parcels again. This API is not required to call during operations.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `cageNumber` · _String_ · **optional** — Cage number
- `serviceType` · _String_ · **required** — Accept values: SELLER_DROPOFF, CUSTOMER_DROPOFF (Customer return), CUSTOMER_COLLECTION (Collection point)
- `stationId` · _String_ · **required** — Station ID in partner system

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object[]_ · **optional** — Response data
  - `trackingNumber` · _String_ · **optional** — Tracking number
  - `cageNumber` · _String_ · **optional** — Cage number
  - `sellerName` · _String_ · **optional** — [SELLER_DROPOFF/CUSTOMER-DROPOFF] Seller name
  - `pickupTplSlug` · _String_ · **optional** — [SELLER_DROPOFF/CUSTOMER-DROPOFF] Pickup 3PL slug: lex-th for regular parcels, another 3PL in case MPU
  - `createdAt` · _Number_ · **optional** — Created at timestamp in milliseconds
  - `lastmileTpl` · _String_ · **optional** — [CUSTOMER_COLLECTION] Lastmile 3PL name: LEX TH, LEX VN, etc
  - `warningMessage` · _String_ · **optional** — [CUSTOMER_COLLECTION] Warning message in case parcel is SLA breached
  - `serviceType` · _String_ · **optional** — Service type
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
cageNumber=123
serviceType=SELLER_DROPOFF
stationId=1234
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## SearchCustomerReturnParcel

<a id="logistics-station-v1-dop-cr-parcels-search"></a>

- **Path**: `/logistics/station/v1/dop/cr-parcels/search`
- **Method**: `get`
- **Last modified**: 2023-10-31 11:43:14

Search customer return parcel by at least 4 letters text. This API is to improve user experience, user can search for the tracking number instead of typing the full tracking number.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system
- `searchText` · _String_ · **required** — Search tracking number text at least 4 letters

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Object[]_ · **optional** — Response data
  - `trackingNumber` · _String_ · **optional** — Tracking number of parcel
  - `maskedCustomerName` · _String_ · **optional** — The masked customer name. For example: customer name "John Wick" will be masked to "J****Wick"
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
searchText=TEST12
```

Response sample 1:

```
success=true
data=Response data
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## ValidateCage

<a id="logistics-station-v1-cages-validate"></a>

- **Path**: `/logistics/station/v1/cages/validate`
- **Method**: `post`
- **Last modified**: 2023-10-18 10:05:25

Validate if a cage is valid. This API is often called before starting inbound but it's not required.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system
- `cageNumber` · _String_ · **required** — Cage number, Lazada will provides cage number

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Boolean_ · **optional** — Validate cage result success or not?
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
cageNumber=123
```

Response sample 1:

```
success=true
data=true
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

## ValidateOTP

<a id="logistics-station-v1-cp-validate-otp"></a>

- **Path**: `/logistics/station/v1/cp/validate-otp`
- **Method**: `post`
- **Last modified**: 2023-10-19 20:38:51

Validate if OTP of parcel is valid or not. This API is used for checking OTP before confirming collection.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stationId` · _String_ · **required** — Station ID in partner system
- `trackingNumber` · _String_ · **required** — Tracking number of parcel
- `otp` · _String_ · **required** — The parcel OTP is used for collecting parcel

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `data` · _Boolean_ · **optional** — Validate OTP result is success or not?
- `errorCode` · _String_ · **optional** — Error code
- `errorMsg` · _String_ · **optional** — Error message
- `traceId` · _String_ · **optional** — Trace id for debugging

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stationId=1234
trackingNumber=TEST1231124VN
otp=123456
```

Response sample 1:

```
success=true
data=true
errorCode=CAGE_NOT_FOUND
errorMsg=Cage 123 is not found
traceId=d2d9043316862098123051035df9da
```

---

