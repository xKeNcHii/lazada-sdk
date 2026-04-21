# Logistics API

## AddOrUpdatePickupStop

<a id="logistics-tps-runsheets-stops"></a>

- **Path**: `/logistics/tps/runsheets/stops`
- **Method**: `post`
- **Last modified**: 2022-09-15 11:27:23

3PL call TPS to update pickup stops

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `stopId` · _String_ · **required** — Stop ID
- `sellerId` · _String_ · **required** — Seller ID (Sent in pickup request)
- `warehouseCode` · _String_ · **required** — Warehouse code (Sent in pickup request)
- `dopStationId` · _String_ · **optional** — DOP station code
- `dopStationName` · _String_ · **optional** — DOP station name
- `pickupType` · _String_ · **required** — Type: Pickup/Drop-off
- `status` · _String_ · **required** — 1. planned: when stop is dispatched to courier\n 2. arrived: when driver arrived at stop and start pickup\n 3. finished: when driver finished pickup at the stop\n 4. skipped: when driver selected to skip the stop due to some reason\n 5. removed: when the stop has 0 RTS
- `statusUpdateTime` · _Number_ · **required** — actual process time when reaching the status
- `dispatcherName` · _String_ · **optional** — Dispatcher name
- `dispatcherContact` · _String_ · **optional** — Dispatcher phone number
- `driverId` · _String_ · **optional** — Driver ID
- `driverName` · _String_ · **required** — Driver name
- `driverContact` · _String_ · **optional** — Driver phone number
- `eta` · _Number_ · **optional** — when the ETA is updated, need to update the data to Lazada side, scenario include:   1. without ETA  >> with ETA   2. with ETA >> without ETA   3. ETA change from A to B
- `successVolume` · _String_ · **optional** — Success count
- `failedVolume` · _String_ · **optional** — Failed count
- `failedVolumeList` · _Object[]_ · **optional** — Failed list
  - `volume` · _Number_ · **required** — Failed count
  - `reason` · _String_ · **required** — Failed reason
  - `type` · _String_ · **required** — Type: Failed/Skipped

**Response parameters**

- `retryable` · _Boolean_ · **required** — Is failed request retryable?
- `success` · _Boolean_ · **required** — Is success?
- `errors` · _Object[]_ · **required** — Error detail
  - `errorMessage` · _String_ · **optional** — Error message
  - `errorCode` · _String_ · **optional** — Error code
  - `field` · _String_ · **optional** — Error field
- `errorMessage` · _String_ · **required** — Error message
- `errorCode` · _String_ · **optional** — Error code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
stopId=Stop001
sellerId=200165961111
warehouseCode=dropshipping
dopStationId=SSG
dopStationName=Sai Gon
pickupType=Pickup
status=planned
statusUpdateTime=1659439136265
dispatcherName=Geralt
dispatcherContact=+841231231123
driverId=DriverX
driverName=John Wick
driverContact=+841231231124
eta=1659439136265
successVolume=10
failedVolume=1
failedVolumeList=[]
```

Response sample 1:

```
retryable=false
success=true
errors=[]
errorMessage=traceId=0b190023897207ea244
errorCode=BAD_REQUEST
```

---

## Create3PLStation

<a id="logistics-tps-stations-create"></a>

- **Path**: `/logistics/tps/stations/create`
- **Method**: `post`
- **Last modified**: 2022-07-28 16:56:22

TPS_CREATE_STATION_API
External partner call TPS to create station

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `externalCode` · _String_ · **required** — Station code in 3PL system
- `modifier` · _String_ · **optional** — Modifier name. if blank will use 3PL name
- `name` · _String_ · **required** — Station name in 3PL system
- `functionCodes` · _String[]_ · **required** — Station functions
- `subTypes` · _String[]_ · **required** — Y	Station subtypes (depends on function) enum:  DOP function: MDOP, DOP, OTC,IDOP CP function: COLLECTION_ON_POINT, MOBILE_COLLECTION_POINT, LOCKER Return function: CUSTOMER_RETURN
- `codSupport` · _Boolean_ · **required** — Support COD or not
- `age` · _Number_ · **optional** — Number of days the station can keep packages for (used by LOP station tool). If not withdrawn by the customer within the age value, the package will be picked up from the station by a dedicated 3PL and brought to the warehouse. The package will be marked as failed delivery. Unit: Days
- `firstMileTplSlugs` · _String[]_ · **required** — Which 3PL can go and pick up the seller dropped-off parcel from the station
- `lastMileTplSlugs` · _String[]_ · **required** — This is a list of logistics providers which can deliver packages to this station.
- `contact` · _Object_ · **required** — Station contact information
  - `name` · _String_ · **required** — Contact name
  - `phone` · _String_ · **required** — Contact phone
  - `email` · _String_ · **optional** — Contact email
- `address` · _Object_ · **required** — Station address
  - `id` · _String_ · **required** — Lazada R code address id
  - `details` · _String_ · **required** — Address details
  - `latitude` · _String_ · **required** — Latitude (At most 6 decimal digits)
  - `longitude` · _String_ · **required** — Longitude (At most 6 decimal digits)
- `timeZone` · _String_ · **optional** — Timezone (used to calculate the schedules) If not specified, use default country timezone format: (+/-)XX:XX
- `schedules` · _Object[]_ · **optional** — Station schedules
  - `workDays` · _String[]_ · **required** — List of working days apply which this schedule applied
  - `startTime` · _String_ · **required** — the start time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00
  - `endTime` · _String_ · **required** — the end time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00
  - `cutOffTime` · _String_ · **required** — the cutoff time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00
- `constraints` · _Object[]_ · **optional** — Function constraint
  - `maxCapacity` · _Number_ · **required** — the maximum number of packages processed per day by Station.
  - `maxWidth` · _Number_ · **required** — the maximum width of packages processed by Station, unit: cm
  - `maxHeight` · _Number_ · **required** — the maximum height of packages processed by Station, unit: cm
  - `maxLength` · _Number_ · **required** — the maximum length of packages processed by Station, unit: cm
  - `maxWeight` · _Number_ · **required** — the maximum weight of packages processed by Station, unit: g
  - `functionCode` · _String_ · **required** — Function which this constraint applied
  - `maxCbm` · _String_ · **required** — the maximum cbm of packages processed by Station, unit: m³

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `retryable` · _Boolean_ · **optional** — Is failed request retryable?
- `errorMessage` · _String_ · **optional** — Error message
- `errorCode` · _String_ · **optional** — Error code
- `errors` · _Object[]_ · **optional** — Error list
  - `errorMessage` · _String_ · **optional** — Error message
  - `errorCode` · _String_ · **optional** — Error code
  - `field` · _String_ · **optional** — Error field

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
externalCode=NJV_001
modifier=John Wick
name=Station 001
functionCodes=["CP"]
subTypes=["COLLECTION_ON_POINT"]
codSupport=true
age=10
firstMileTplSlugs=["ninjavan-id","jne"]
lastMileTplSlugs=["ninjavan-id","jne"]
contact={         "phone": "+84000000000",         "name": "Zohan",         "email": "email@gmail.com"     }
address={         "latitude": 10.131231,         "details": "08-18, 233 SERANGOON AVENUE 3Singapore, Singapore",         "id": "R80071346",         "longitude": 113.131231     }
timeZone=+08:00
schedules=[]
constraints=[     {         "functionCode": "CP",         "maxCbm": 3.44,         "maxHeight": 100,         "maxCapacity": 1000,         "maxWeight": 15000,         "maxLength": 100,         "maxWidth": 100     } ]
```

Response sample 1:

```
success=false
retryable=false
errorMessage=Bad request
errorCode=BAD_REQUEST
errors=[]
```

---

## GetOrderTrace

<a id="logistic-order-trace"></a>

- **Path**: `/logistic/order/trace`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 11:58:45

Query logistic detail for seller erp with seller id, order id and locale info. This api is only available in the state after ready to ship.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_id` · _String_ · **required** — order id
- `locale` · _String_ · **optional** — local
- `ofcPackageIdList` · _String[]_ · **optional** — package id list

**Response parameters**

- `result` · _Object_ · **required** — Result
  - `error_code` · _Object_ · **required** — Error code
    - `displayMessage` · _String_ · **optional** — displayMessage
  - `repeated` · _Boolean_ · **required** — Repeated
  - `retry` · _Boolean_ · **required** — Retry
  - `not_success` · _Boolean_ · **required** — Not success
  - `success` · _Boolean_ · **required** — Success
  - `module` · _Object[]_ · **required** — Module
    - `warehouse_detail_info` · _String_ · **required** — Warehouse detail info
    - `ofc_order_id` · _String_ · **required** — ofc order id
    - `package_detail_info_list` · _Object[]_ · **required** — Package detail info list
      - `order_line_info_list` · _String_ · **required** — Order line info list
      - `tracking_number` · _String_ · **required** — Tracking number
      - `ofc_package_id` · _String_ · **required** — ofc package id
      - `logistic_detail_info_list` · _Object[]_ · **required** — Logistic detail info list
        - `package_location_name` · _String_ · **required** — Package location name
        - `event_date` · _String_ · **required** — Event date
        - `detail_type` · _String_ · **required** — Detail stauts type
        - `proof_images` · _Object[]_ · **required** — Proof images
        - `receive_time` · _Number_ · **required** — Receive time
        - `status_code` · _String_ · **required** — Status code
        - `icon` · _String_ · **required** — icon
        - `event_time` · _Number_ · **required** — Event time
        - `description` · _String_ · **required** — Description of status
        - `title` · _String_ · **required** — title of status

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `INPUT_PARAM_VALID` | query trade failed | order id or ofcPackageIdList invalid |
| `LD_INVOKE_DOWNSTREAM_RESPONSE_BLANK` | LD_INVOKE_DOWNSTREAM_RESPONSE_BLANK | This order does not exist in the current country or store, please call the GetOrders API to check if you have entered the correct order ID |
| `Dropshipping invalid` | input orderId: Own Warehouse invalid | The input parameters are incorrect, please check that the package id you entered in the ofcPackageIdList field is correct. |
| `LD_INPUT_PARAM_VALID` | orderId is wrong | The order number does not exist in the current store or is incorrect, please check if the order number input format in your request is correct first, and then call the GetOrders API or check in the Seller Center if the order exists in the current requesting store. |

**Example**

Request sample 1:

```
order_id=56150613585762
locale=en
ofcPackageIdList=[]
```

Response sample 1:

```
result={}
```

---

## ScanParcel

<a id="dop-scan"></a>

- **Path**: `/dop/scan`
- **Method**: `GET/POST`
- **Last modified**: 2023-04-03 11:32:13

DOP Scan Parcel

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `cageNumber` · _String_ · **required** — test
- `trackingNumber` · _String_ · **required** — test

**Response parameters**

- `trackingNumber` · _String_ · **optional** — test

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
cageNumber=case1
trackingNumber=MYMPA092974023
```

Response sample 1:

```
trackingNumber=MYMPA092974023
```

---

## StationDopScan

<a id="stations-dop-scan"></a>

- **Path**: `/stations/dop/scan`
- **Method**: `GET/POST`
- **Last modified**: 2023-04-03 13:51:17

StationDopScan

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `cageNumber` · _String_ · **required** — test
- `trackingNumber` · _String_ · **required** — test

**Response parameters**

- `success` · _Boolean_ · **optional** — test
- `data` · _Object_ · **optional** — test
  - `trackingNumber` · _String_ · **optional** — test
- `error` · _Object_ · **optional** — test
  - `errorCode` · _String_ · **optional** — test

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
cageNumber=CASE1
trackingNumber=TRACKING1
```

Response sample 1:

```
success=true
data={}
error={}
```

---

## Update3PLStation

<a id="logistics-tps-stations-update"></a>

- **Path**: `/logistics/tps/stations/update`
- **Method**: `post`
- **Last modified**: 2022-07-28 16:58:10

TPS_UPDATE_STATION_API
External partner call TPS to update station

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `externalCode` · _String_ · **required** — Station code in 3PL system
- `modifier` · _String_ · **optional** — Modifier name. if blank will use 3PL name
- `enable` · _Boolean_ · **required** — Enable or disable Station
- `functionCodes` · _String[]_ · **required** — Station functions
- `subTypes` · _String[]_ · **required** — Y	Station subtypes (depends on function) enum:  DOP function: MDOP, DOP, OTC,IDOP CP function: COLLECTION_ON_POINT, MOBILE_COLLECTION_POINT, LOCKER Return function: CUSTOMER_RETURN
- `codSupport` · _Boolean_ · **required** — Support COD or not
- `age` · _Number_ · **optional** — Number of days the station can keep packages for (used by LOP station tool). If not withdrawn by the customer within the age value, the package will be picked up from the station by a dedicated 3PL and brought to the warehouse. The package will be marked as failed delivery. Unit: Days
- `firstMileTplSlugs` · _String[]_ · **required** — Which 3PL can go and pick up the seller dropped-off parcel from the station
- `lastMileTplSlugs` · _String[]_ · **required** — This is a list of logistics providers which can deliver packages to this station.
- `contact` · _Object_ · **required** — Station contact information
  - `name` · _String_ · **required** — Contact name
  - `phone` · _String_ · **required** — Contact phone
  - `email` · _String_ · **optional** — Contact email
- `address` · _Object_ · **required** — Station address
  - `id` · _String_ · **required** — Lazada R code address id
  - `details` · _String_ · **required** — Address details
  - `latitude` · _String_ · **required** — Latitude (At most 6 decimal digits)
  - `longitude` · _String_ · **required** — Longitude (At most 6 decimal digits)
- `timeZone` · _String_ · **optional** — Timezone (used to calculate the schedules) If not specified, use default country timezone format: (+/-)XX:XX
- `schedules` · _Object[]_ · **optional** — Station schedules
  - `workDays` · _String[]_ · **required** — List of working days apply which this schedule applied
  - `startTime` · _String_ · **required** — the start time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00
  - `endTime` · _String_ · **required** — the end time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00
  - `cutOffTime` · _String_ · **required** — the cutoff time of Station schedule adopted by 24 hour system, the pattern is HH:mm:ss. example 07:00:00, 15:05:00
- `constraints` · _Object[]_ · **optional** — Function constraint
  - `maxCapacity` · _Number_ · **required** — the maximum number of packages processed per day by Station.
  - `maxWidth` · _Number_ · **required** — the maximum width of packages processed by Station, unit: cm
  - `maxHeight` · _Number_ · **required** — the maximum height of packages processed by Station, unit: cm
  - `maxLength` · _Number_ · **required** — the maximum length of packages processed by Station, unit: cm
  - `maxWeight` · _Number_ · **required** — the maximum weight of packages processed by Station, unit: g
  - `functionCode` · _String_ · **required** — Function which this constraint applied
  - `maxCbm` · _String_ · **required** — the maximum cbm of packages processed by Station, unit: m³
- `name` · _String_ · **optional** — Station name

**Response parameters**

- `success` · _Boolean_ · **optional** — Is success?
- `retryable` · _Boolean_ · **optional** — Is failed request retryable?
- `errorMessage` · _String_ · **optional** — Error message
- `errorCode` · _String_ · **optional** — Error code
- `errors` · _Object[]_ · **optional** — Error list
  - `errorMessage` · _String_ · **optional** — Error message
  - `errorCode` · _String_ · **optional** — Error code
  - `field` · _String_ · **optional** — Error field

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
externalCode=NJV_001
modifier=John Wick
enable=true
functionCodes=["CP"]
subTypes=["COLLECTION_ON_POINT"]
codSupport=true
age=10
firstMileTplSlugs=["ninjavan-id","jne"]
lastMileTplSlugs=["ninjavan-id","jne"]
contact={         "phone": "+84000000000",         "name": "Zohan",         "email": "email@gmail.com"     }
address={         "latitude": 10.131231,         "details": "08-18, 233 SERANGOON AVENUE 3Singapore, Singapore",         "id": "R80071346",         "longitude": 113.131231     }
timeZone=+08:00
schedules=[         {             "workDays": [                 "MONDAY"             ],             "startTime": "08:00:00",             "endTime": "18:00:00",             "cutOffTime": "17:00:00"         }     ]
constraints=[         {             "functionCode": "CP",             "maxCbm": 3.44,             "maxHeight": 100,             "maxCapacity": 1000,             "maxWeight": 15000,             "maxLength": 100,             "maxWidth": 100         },     ]
name=Station 001
```

Response sample 1:

```
success=false
retryable=false
errorMessage=Bad request
errorCode=BAD_REQUEST
errors=[]
```

---

## UpdatePickupTimeSlot

<a id="logistics-tps-sellers-pickup-timeslot"></a>

- **Path**: `/logistics/tps/sellers/pickup_timeslot`
- **Method**: `post`
- **Last modified**: 2022-08-30 10:00:23

3PL call TPS to update pickup timeslot

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `sellerId` · _String_ · **required** — Seller ID (Sent in pickup request)
- `warehouseCode` · _String_ · **required** — Warehouse code (Sent in pickup request)
- `pickupTimeslots` · _String[]_ · **required** — Format: HH:mm, separate by comma

**Response parameters**

- `retryable` · _Boolean_ · **required** — Is failed request retryable?
- `success` · _Boolean_ · **required** — Is success?
- `errors` · _Object[]_ · **required** — Error detail
  - `errorMessage` · _String_ · **optional** — Error message
  - `errorCode` · _String_ · **optional** — Error code
  - `field` · _String_ · **optional** — Error field
- `errorMessage` · _String_ · **required** — Error message
- `errorCode` · _String_ · **optional** — Error code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
sellerId=200165961111
warehouseCode=dropshipping
pickupTimeslots=["08:00-12:00","13:00-15:00"]
```

Response sample 1:

```
retryable=false
success=true
errors=[]
errorMessage=traceId=0b190023897207ea244
errorCode=BAD_REQUEST
```

---

## createConsolidationService

<a id="logistics-ldp-createconsolidationservice"></a>

- **Path**: `/logistics/ldp/createConsolidationService`
- **Method**: `post`
- **Last modified**: 2024-11-04 17:21:19

create Consolidation Service

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `unitCodes` · _String[]_ · **required** — unit codes
- `properties` · _Object_ · **required** — prop

**Response parameters**

- `data` · _String_ · **required** — data
- `success` · _Boolean_ · **required** — is success
- `errorCode` · _String_ · **required** — error code
- `errorMsg` · _String_ · **required** — error Msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
unitCodes="FU23900000000000007164132600",   "FU2386993"
properties={"sellerGroupName": "CN-Others"}
```

Response sample 1:

```
data=null
success=false
errorCode=lnp_ldm-fcp#biz-queryTargetFulfilUnitError-E
errorMsg=Query target fulfilUnit error
```

---

## updateLastMile

<a id="logistics-ldp-updatelastmile"></a>

- **Path**: `/logistics/ldp/updateLastmile`
- **Method**: `post`
- **Last modified**: 2024-11-04 15:55:25

跨境场景，物流末端预报信息

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `unitCode` · _String_ · **required** — unitCode
- `shippingProviderCode` · _String_ · **required** — shippingProviderCode
- `trackingNumber` · _String_ · **required** — trackingNumber

**Response parameters**

- `success` · _Boolean_ · **optional** — is success
- `data` · _String_ · **optional** — data
- `errorCode` · _String_ · **optional** — errorCode
- `errorMsg` · _String_ · **optional** — errorMsg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
unitCode=FU20202020001
shippingProviderCode=057_***_****
trackingNumber=TN_0001
```

Response sample 1:

```
success=false
data=*****
errorCode=lnp_ldm-fcp#illegalPkgCode-E
errorMsg=package code is not LDM order!
```

---

