# Sponsored Solutions API

## addAdgroupBatch

<a id="sponsor-solutions-adgroup-addadgroupbatch"></a>

- **Path**: `/sponsor/solutions/adgroup/addAdgroupBatch`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:25:19

Do add adgroup for one campaign.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignId` · _Number_ · **required** — Campaign id which you want to add into.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `adgroupViewDTOList` · _Object[]_ · **required** — Adgroup list
  - `adgroupName` · _String_ · **required** — The adgroup name, normanlly is the product name.
  - `autoItemSelect` · _String_ · **required** — The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance).This must be the same as the campaign.
  - `bidPrice` · _String_ · **required** — Let Lazada automatically set cost-effective bid prices for your products.
  - `itemId` · _Number_ · **required** — Product id.
  - `autoCreative` · _Number_ · **required** — Let Lazada automatically set creatives for your products.1:ON;0:OFF.This must be the same as the campaign.
  - `autoKeyword` · _Number_ · **required** — Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance).This must be the same as the campaign.
  - `bidwordViewDTOList` · _Object[]_ · **optional** — Bid word list
    - `keyword` · _String_ · **optional** — The specific keyword.eg:shoe.
    - `bidPrice` · _String_ · **optional** — Let Lazada automatically set cost-effective bid prices for your products.
  - `audienceViewDTOList` · _Object[]_ · **optional** — This setting allows you to bid higher on premium audiences that are more likely to convert in your store.
    - `adCrowdTag` · _Number_ · **optional** — 1:on store visitors in the past 15 days;2:on in-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience
    - `discount` · _Number_ · **optional** — The discount you want to give.eg:10 means 10% discount.

**Response parameters**

- `result` · _Boolean_ · **required** — The detail result, for this api is boolean.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignId=101100023522312
bizCode=sponsoredSearch
adgroupViewDTOList=[]
```

Response sample 1:

```
result=true
success=true
errorMsg=invalid param
analyseTraceId=-
```

---

## addSolution

<a id="sponsor-solutions-addsolution"></a>

- **Path**: `/sponsor/solutions/addSolution`
- **Method**: `post`
- **Last modified**: 2023-03-24 15:26:07

Add sponsor solution

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `autoKeyword` · _Number_ · **optional** — Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance).
- `endDate` · _String_ · **required** — Campaign end date.
- `platform` · _Number[]_ · **required** — Placements determine where shoppers will see your promoted products.3:Search Result Page;4:Just For You Page
- `autoCreative` · _Number_ · **required** — Lazada automatically set creatives for your products.1:ON;0:OFF.
- `campaignObjective` · _Number_ · **required** — Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales.
- `campaignType` · _Number_ · **required** — Unlock different ways to bids, select products, and keywords with campaign types.1:Standard;2:Smart.
- `campaignModel` · _Number_ · **required** — Fine granularity to distinguish solutions.
- `maxBid` · _String_ · **required** — Max bid determines the highest amount that you're willing to pay for a click on your promoted product.String type, -1 means no limit.
- `autoItemSelect` · _Number_ · **required** — The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance)
- `dayBudget` · _String_ · **required** — Budget indicates the maximum amount you’re willing to pay each day.
- `campaignName` · _String_ · **required** — Campaign name.
- `startDate` · _String_ · **required** — Campaign start date.
- `adgroupViewDTOlistWithFeed` · _Object[]_ · **required** — Adgroup list.
  - `adgroupName` · _String_ · **required** — Adgroup name, normally is product name,
  - `bidPrice` · _String_ · **optional** — This is the maximum bid price that you have set for your campaign.When campaignType is 1, this field must be filled.
  - `autoKeyword` · _Number_ · **required** — Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance). This must be the same as the campaign.
  - `audienceViewDTOList` · _Object[]_ · **optional** — This setting allows you to bid higher on premium audiences that are more likely to convert in your store.
    - `adCrowdTag` · _Number_ · **optional** — 1:on store visitors in the past 15 days;2:on in-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience
    - `discount` · _Number_ · **optional** — The discount you want to give.eg:10 means 10% discount.
  - `itemId` · _Number_ · **required** — Product id.
  - `bidwordViewDTOList` · _Object[]_ · **optional** — Bid word list
    - `keyword` · _String_ · **optional** — The specific keyword.eg:shoe.
    - `bidPrice` · _String_ · **optional** — This is the maximum bid price that you have set for your campaign.
  - `autoItemSelect` · _Number_ · **required** — The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance)
  - `autoCreative` · _Number_ · **required** — Let Lazada automatically set creatives for your products.1:ON;0:OFF. This must be the same as the campaign.

**Response parameters**

- `success` · _Boolean_ · **optional** — System result for this api call.
- `result` · _Object_ · **optional** — The detail result, for this api is boolean.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
bizCode=sponsoredSearch
autoKeyword=2
endDate=2023-03-08
platform=[3,4]
autoCreative=1
campaignObjective=2
campaignType=1
campaignModel=99
maxBid=100
autoItemSelect=1
dayBudget=10
campaignName=Campaign_2023_03_08_11:11
startDate=2023-03-01
adgroupViewDTOlistWithFeed={}
```

Response sample 1:

```
success=true
result={}
errorMsg=invalid
analyseTraceId=...
```

---

## clickserver

<a id="gproject-ads-aidc-click"></a>

- **Path**: `/gproject/ads/aidc/click`
- **Method**: `GET/POST`
- **Last modified**: 2025-06-09 16:33:27

aidc click server interface

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `cpcClickDO` · _Object_ · **optional** — cookie section
  - `ext` · _String_ · **optional** — //扩展参数
  - `referer` · _String_ · **optional** — referer
  - `e` · _String_ · **required** — 加密串
  - `utdId` · _String_ · **required** — usertrack section
  - `ip` · _String_ · **required** — ip
  - `utkey` · _String_ · **optional** — //友盟电商墙app标识
  - `utsid` · _String_ · **optional** — //友盟电商墙设备标识
  - `clickid` · _String_ · **optional** — clickid
  - `userAgent` · _String_ · **optional** — 使用默认值
  - `accept` · _String_ · **optional** — //不能为空,反作弊加密串
  - `cna` · _String_ · **optional** — cookie section
  - `host` · _String_ · **optional** — host

**Response parameters**

- `result` · _Object_ · **required** — Result
  - `headers` · _Object_ · **required** — headers
  - `success` · _Boolean_ · **required** — success true / false
  - `model` · _Object_ · **required** — model
  - `biz_ext_map` · _Object_ · **required** — biz_ext_map
  - `mapping_code` · _String_ · **required** — mapping_code
  - `msg_info` · _String_ · **required** — msg_info
  - `msg_code` · _String_ · **required** — msg_code
  - `http_status_code` · _Number_ · **required** — http_status_code

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
cpcClickDO=cookie section
```

Response sample 1:

```
result={   "result": {     "headers": {},     "msg_code": "BIZ_SUCCESS",     "http_status_code": 200,     "success": true,     "msg_info": "ok.",     "model": "https://www.lazada.sg/products/i2203627402-s12629536262.html?ali_trackid=1_209b040e6a4342d8db11e283aa911a00"   },   "code": "0",   "request_id": "212a71d317494484556257760",   "_trace_id_": "0bb4056f17494484554421071e1e10" }
```

---

## deleteAdgroupBatch

<a id="sponsor-solutions-adgroup-deleteadgroupbatch"></a>

- **Path**: `/sponsor/solutions/adgroup/deleteAdgroupBatch`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 16:55:42

Delete adgroup batch.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `adgroupIdList` · _Number[]_ · **required** — Adgroup id list.

**Response parameters**

- `result` · _Boolean_ · **required** — The detail result, for this api is boolean.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
bizCode=sponsoredSearch
adgroupIdList=[1374428109]
```

Response sample 1:

```
result=true
success=true
errorMsg=invalid param
analyseTraceId=-
```

---

## deleteCampaign

<a id="sponsor-solutions-campaign-deletecampaign"></a>

- **Path**: `/sponsor/solutions/campaign/deleteCampaign`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:23:39

Delete campaign.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignIdList` · _Number[]_ · **required** — Campaign id list.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.

**Response parameters**

- `result` · _Number_ · **required** — The detail result, for this api is deleted count.
- `success` · _Boolean_ · **required** — The detail result, for this api is boolean.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignIdList=[101100023522308]
bizCode=sponsoredSearch
```

Response sample 1:

```
result=1
success=true
errorMsg=invalid param
analyseTraceId=...
```

---

## getAccountSignInfo

<a id="sponsor-solutions-account-getaccountsigninfo"></a>

- **Path**: `/sponsor/solutions/account/getAccountSignInfo`
- **Method**: `get`
- **Last modified**: 2023-03-24 17:53:10

Get seller account sign status.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `result` · _Object_ · **required** — The detail result, for this api is boolean.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
```

Response sample 1:

```
result={}
success=true
errorMsg=-
analyseTraceId=...
```

---

## getAutoTopUpOptionOneConfig

<a id="sponsor-solutions-wallet-getautotopupoptiononeconfig"></a>

- **Path**: `/sponsor/solutions/wallet/getAutoTopUpOptionOneConfig`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:30:52

Get auto top up option one config.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `result` · _Object_ · **required** — The detail result, for this api is configuration.
  - `status` · _Number_ · **optional** — The option one status.1:ON;0:OFF.
  - `limitAmount` · _String_ · **optional** — If balance is lower than this value, auto topUp operation will be done.
  - `topUpAmount` · _String_ · **optional** — The amount of topUp for each auto topUp.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
```

Response sample 1:

```
result={"memberId":..}
success=true
errorMsg=invalid param
analyseTraceId=-
```

---

## getCampaign

<a id="sponsor-solutions-campaign-getcampaign"></a>

- **Path**: `/sponsor/solutions/campaign/getCampaign`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:30:41

Get campaign list with bizCode by seller.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `bizCode` · _String_ · **required** — Discovery:sponsoredSearch
- `campaignId` · _Number_ · **required** — 123

**Response parameters**

- `result` · _Object_ · **required** — The detail result, for this api is campaign detail info.
  - `endDate` · _String_ · **required** — Campaign end date.
  - `onlineStatus` · _Number_ · **required** — The campaign online status.1:Online;0:Offline;9:deleted.
  - `campaignObjective` · _Number_ · **required** — Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.
  - `campaignType` · _Number_ · **required** — Unlock different ways to bids, select products, and keywords with campaign types.
  - `campaignId` · _Number_ · **required** — Campaign id.
  - `budgetUsedAmount` · _Number_ · **required** — Today used amount of daily budget.
  - `autoItemSelect` · _Number_ · **required** — The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real-time to maximize the campaigns' performance)
  - `haveAdCount` · _Number_ · **required** — The count of adgroup of this campaign.
  - `startDate` · _String_ · **required** — Campaign start date.
  - `switchStatus` · _Number_ · **required** — Is the campaign on rightnow.1:ON:0:OFF.
  - `platform` · _Number[]_ · **required** — Placements determine where shoppers will see your promoted products.
  - `sceneId` · _Number_ · **required** — Fine granularity to discriminate solutions.0:SD;
  - `autoCreative` · _Number_ · **required** — Let Lazada automatically set creatives for your products.1:ON;0:OFF.
  - `campaignModel` · _Number_ · **required** — To discriminate solutions.99:SD+NPL.
  - `maxBid` · _String_ · **required** — Max bid determines the highest amount that you're willing to pay for a click on your promoted product.
  - `dayBudget` · _String_ · **required** — Budget indicates the maximum amount you’re willing to pay each day.
  - `campaignName` · _String_ · **required** — campaignName
- `success` · _String_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
bizCode=sponsoredSearch
campaignId=123
```

Response sample 1:

```
result={}
success=true
errorMsg=Invalid param.
analyseTraceId=...
```

---

## getCampaignCount

<a id="sponsor-solutions-campaign-getcampaigncount"></a>

- **Path**: `/sponsor/solutions/campaign/getCampaignCount`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:30:51

Get campaign count with bizCode for each solution type.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.

**Response parameters**

- `result` · _Number_ · **required** — The detail result, for this api is campaign count.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
bizCode=sponsoredSearch
```

Response sample 1:

```
result=100
success=true
errorMsg=invalid
analyseTraceId=-
```

---

## getDiscoveryReportAdgroup

<a id="sponsor-solutions-report-getdiscoveryreportadgroup"></a>

- **Path**: `/sponsor/solutions/report/getDiscoveryReportAdgroup`
- **Method**: `GET/POST`
- **Last modified**: 2023-12-27 14:38:32

Get sponsored discovery report adgroup level

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignType` · _String_ · **optional** — Campaign Type,1 standard 2 automated
- `campaignName` · _String_ · **optional** — Campaign Name, frazzy search
- `campaignId` · _String_ · **optional** — Campaign Id
- `adgroupName` · _String_ · **optional** — Adgroup Name
- `adgroupId` · _String_ · **optional** — Adgroup Id
- `itemId` · _String_ · **optional** — Item Id
- `useRtTable` · _Boolean_ · **optional** — It means that if endDate have selected today, and you need realtime data,then set useRtTable=true If useRtTable=false,it will not search realtime data
- `sort` · _String_ · **optional** — sort column,we have provide some index to sort
- `pageNo` · _String_ · **required** — Page No，default 1,max=100
- `pageSize` · _String_ · **required** — Page No, default 10, max=100
- `order` · _String_ · **optional** — ASC or DESC, other String is invalid
- `startDate` · _String_ · **required** — start date, format like yyyy-MM-dd
- `endDate` · _String_ · **required** — end date , date, format like yyyy-MM-dd

**Response parameters**

- `result` · _Object_ · **required** — Result Details
  - `result` · _Object[]_ · **required** — Details of each adgroup
    - `dateRange` · _String_ · **required** — Unused
    - `productUnitSold` · _Number_ · **required** — Product Unit Sold
    - `productCvr` · _String_ · **required** — Product CVR
    - `productOrders` · _Number_ · **required** — Product Orders
    - `adgroupId` · _Number_ · **required** — Adgroup Id
    - `adgroupName` · _String_ · **required** — Adgroup Name,if query duration include current Date or yesterday, the adgroup name maybe is null because of real time data logic. The best way to get the adgroup name is to query adgroup info and cache it.
    - `cpc` · _String_ · **required** — CPC
    - `spend` · _String_ · **required** — Spend
    - `storeUnitSold` · _Number_ · **required** — Store Unit Sold
    - `productA2c` · _Number_ · **required** — Product A2C
    - `productImageUrl` · _String_ · **required** — Unused
    - `ctr` · _String_ · **required** — CTR
    - `campaignId` · _Number_ · **required** — Campaign Id
    - `storeRevenue` · _String_ · **required** — Store Revenue
    - `storeCvr` · _String_ · **required** — Store CVR
    - `storeA2c` · _Number_ · **required** — Store A2C
    - `storeOrders` · _Number_ · **required** — Store Orders
    - `impressions` · _Number_ · **required** — Impressions
    - `bidPrice` · _String_ · **required** — Unused
    - `itemId` · _Number_ · **required** — Item Id
    - `storeRoi` · _String_ · **required** — Store ROI
    - `maxBid` · _Number_ · **required** — Max Bid
    - `clicks` · _Number_ · **required** — Clicks
    - `productRevenue` · _String_ · **required** — Product Revenue
    - `campaignName` · _String_ · **required** — Campagin Name,if query duration include current Date or yesterday, the campaign name maybe is null because of real time data logic. The best way to get the campaign name is to query campaign info and cache it.
  - `errorKey` · _String_ · **required** — Unused
  - `errorDTOList` · _Object[]_ · **required** — Unused
  - `success` · _Boolean_ · **required** — true:success  false:fail
  - `analyseTraceId` · _String_ · **required** — Unused
  - `errorCode` · _String_ · **required** — Error Code
  - `totalCount` · _Number_ · **required** — Total count of the search record
  - `errorMsg` · _String_ · **required** — Error Message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignType=1
campaignName=test
campaignId=101100033026398
adgroupName=test
adgroupId=2281484260
itemId=2281484260
useRtTable=true
sort=impressions
pageNo=1
pageSize=10
order=ASC
startDate=2023-11-12
endDate=2023-11-13
```

Response sample 1:

```
result={}
```

---

## getDiscoveryReportAudience

<a id="sponsor-solutions-report-getdiscoveryreportaudience"></a>

- **Path**: `/sponsor/solutions/report/getDiscoveryReportAudience`
- **Method**: `GET/POST`
- **Last modified**: 2023-12-27 16:16:01

Get sponsored discovery report audience level

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignName` · _String_ · **optional** — Campaign Name
- `campaignId` · _Number_ · **optional** — Campaign Id
- `audienceGroup` · _Number_ · **optional** — Audienct type  1:15 days Visitors 2:Similar Product Visitors 3:Store Awareness Audience 4:Store Interest Audience 5:DMP Crow Audience 6:Gender 7:Age
- `sort` · _String_ · **optional** — sort column,we have provide some index to sort
- `order` · _String_ · **optional** — ASC or DESC, other String is invalid
- `pageNo` · _Number_ · **required** — Page No，default 1,max=100
- `pageSize` · _Number_ · **required** — Page No, default 10, max=100
- `startDate` · _String_ · **required** — start date, format like yyyy-MM-dd
- `endDate` · _String_ · **required** — end date , date, format like yyyy-MM-dd

**Response parameters**

- `result` · _Object_ · **required** — Details
  - `result` · _Object[]_ · **required** — Details of each record
    - `productImageUrl` · _String_ · **required** — Product Image URL
    - `ctr` · _String_ · **required** — CTR
    - `campaignId` · _Number_ · **required** — Campaign Id
    - `storeRevenue` · _String_ · **required** — Store Revenue
    - `storeCvr` · _String_ · **required** — Store CVR
    - `storeA2c` · _Number_ · **required** — Store A2C
    - `storeOrders` · _Number_ · **required** — Store Orders
    - `productUnitSold` · _Number_ · **required** — Product Unit Sold
    - `impressions` · _Number_ · **required** — Impressions
    - `productCvr` · _String_ · **required** — Product CVR
    - `productOrders` · _Number_ · **required** — Product Orders
    - `audienceFakeId` · _String_ · **required** — Audience Fake Id
    - `storeRoi` · _String_ · **required** — Store ROI
    - `adgroupId` · _Number_ · **required** — Adgroup Id
    - `audienceGroup` · _Number_ · **required** — Audience Group
    - `adgroupName` · _String_ · **required** — Adgroup Name,if query duration include current Date or yesterday, the adgroup name maybe is null because of real time data logic. The best way to get the adgroup name is to query adgroup info and cache it.
    - `cpc` · _String_ · **required** — CPC
    - `spend` · _String_ · **required** — Spend
    - `clicks` · _Number_ · **required** — Clicks
    - `productRevenue` · _String_ · **required** — Product Revenue
    - `storeUnitSold` · _Number_ · **required** — Store Unit Sold
    - `campaignName` · _String_ · **required** — Campaign Name,if query duration include current Date or yesterday, the campaign name maybe is null because of real time data logic. The best way to get the campaign name is to query campaign info and cache it.
    - `productA2c` · _Number_ · **required** — Product A2C
  - `errorKey` · _String_ · **required** — Unused
  - `errorDTOList` · _Object[]_ · **required** — Unused
  - `success` · _Boolean_ · **required** — true:success false:fail
  - `analyseTraceId` · _String_ · **required** — Analyse Trace Id
  - `errorCode` · _String_ · **required** — Error Code
  - `totalCount` · _Number_ · **required** — Total Count
  - `errorMsg` · _String_ · **required** — Error Message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignName=test
campaignId=101100033026398
audienceGroup=1
sort=impressions
order=ASC
pageNo=1
pageSize=100
startDate=2023-11-12
endDate=2023-11-13
```

Response sample 1:

```
result={}
```

---

## getDiscoveryReportCampaign

<a id="sponsor-solutions-report-getdiscoveryreportcampaign"></a>

- **Path**: `/sponsor/solutions/report/getDiscoveryReportCampaign`
- **Method**: `GET/POST`
- **Last modified**: 2023-12-26 14:30:41

Get sponsored discovery report campaign level

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignId` · _Number_ · **optional** — Campaign Id
- `useRtTable` · _Boolean_ · **optional** — It means that if endDate have selected today, and you need realtime data,then set useRtTable=true If useRtTable=false,it will not search realtime data
- `sort` · _String_ · **optional** — sort column,we have provide some index to sort
- `order` · _String_ · **optional** — ASC or DESC, other String is invalid
- `startDate` · _String_ · **required** — start date, format like yyyy-MM-dd
- `endDate` · _String_ · **required** — end date , date, format like yyyy-MM-dd
- `pageNo` · _String_ · **required** — Page No，default 1,max=100
- `pageSize` · _String_ · **required** — Page No, default 10, max=100
- `campaignType` · _Number_ · **optional** — Campaign type, 1 Manual  2 Automated
- `productType` · _String_ · **optional** — Placement , N Sponsored Search, J Sponsored Product
- `campaignName` · _String_ · **optional** — campaign name，fuzzy search

**Response parameters**

- `result` · _Object_ · **required** — The Details
  - `result` · _Object[]_ · **required** — The details of each campaign
    - `ctr` · _String_ · **required** — CTR
    - `campaignObjective` · _String_ · **required** — Unused
    - `campaignType` · _Number_ · **required** — Campaign Type, 1 Manual  2 Automated
    - `campaignId` · _Number_ · **required** — Campaign Id
    - `storeRevenue` · _String_ · **required** — Store Revenue
    - `storeCvr` · _String_ · **required** — Store CVR
    - `storeA2c` · _Number_ · **required** — Store A2C
    - `storeOrders` · _Number_ · **required** — Store Orders
    - `productUnitSold` · _Number_ · **required** — Product Unit Sold
    - `impressions` · _Number_ · **required** — Impressions
    - `productCvr` · _String_ · **required** — Product CVR
    - `productOrders` · _Number_ · **required** — Product Orders
    - `storeRoi` · _String_ · **required** — Store ROI
    - `cpc` · _String_ · **required** — CPC
    - `spend` · _String_ · **required** — Spend
    - `clicks` · _Number_ · **required** — Clicks
    - `productRevenue` · _String_ · **required** — Product Revenue
    - `storeUnitSold` · _Number_ · **required** — Store Unit Sold
    - `campaignName` · _String_ · **required** — Campaign Name, if query duration include today or yesterday, the campaign name maybe is null because of real time data logic. The best way to get the campaign name is to query campaign info and cache it.
    - `productType` · _String_ · **required** — Product Type, N Sponsored Search;J Sponsored Product
    - `dayBudget` · _Number_ · **required** — Campaign Daily Budget
    - `productA2c` · _Number_ · **required** — Product A2C
  - `errorKey` · _String_ · **required** — Unused
  - `errorDTOList` · _Object[]_ · **required** — Unused
  - `success` · _Boolean_ · **required** — true means query success; false means fail
  - `analyseTraceId` · _String_ · **required** — Unused
  - `errorCode` · _String_ · **required** — Error Code
  - `totalCount` · _Number_ · **required** — Total count by search param
  - `errorMsg` · _String_ · **required** — Error Message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignId=101100033026398
useRtTable=true
sort=impressions
order=ASC
startDate=2023-11-12
endDate=2023-11-13
pageNo=1
pageSize=10
campaignType=1
productType=N
campaignName=test
```

Response sample 1:

```
result={}
```

---

## getDiscoveryReportKeyword

<a id="sponsor-solutions-report-getdiscoveryreportkeyword"></a>

- **Path**: `/sponsor/solutions/report/getDiscoveryReportKeyword`
- **Method**: `GET/POST`
- **Last modified**: 2023-12-26 20:27:09

Get sponsored discovery report keyword level

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `adgroupName` · _String_ · **optional** — Adgroup Name
- `adgroupId` · _String_ · **optional** — Adgroup Id
- `keyword` · _String_ · **optional** — Keyword
- `useRtTable` · _Boolean_ · **optional** — It means that if endDate have selected today, and you need realtime data,then set useRtTable=true If useRtTable=false,it will not search realtime data
- `sort` · _String_ · **optional** — sort column,we have provide some index to sort
- `order` · _String_ · **optional** — ASC or DESC, other String is invalid
- `pageNo` · _String_ · **required** — Page No，default 1,max=100
- `pageSize` · _String_ · **required** — Page No, default 10, max=100
- `startDate` · _String_ · **required** — start date, format like yyyy-MM-dd
- `endDate` · _String_ · **required** — end date , date, format like yyyy-MM-dd
- `campaignName` · _String_ · **optional** — Campaign Name
- `campaignId` · _String_ · **optional** — Campaign Id

**Response parameters**

- `result` · _Object_ · **required** — Result Details
  - `result` · _Object[]_ · **required** — Details of each Record
    - `productImageUrl` · _String_ · **required** — Product Image URL
    - `ctr` · _String_ · **required** — CTR
    - `keywordId` · _Number_ · **required** — Keyword ID
    - `campaignId` · _Number_ · **required** — Campaign Id
    - `storeRevenue` · _String_ · **required** — Store Revenue
    - `storeCvr` · _String_ · **required** — Store CVR
    - `storeA2c` · _Number_ · **required** — Store A2C
    - `storeOrders` · _Number_ · **required** — Store Orders
    - `productUnitSold` · _Number_ · **required** — Product Unit Sold
    - `impressions` · _Number_ · **required** — Impressions
    - `productCvr` · _String_ · **required** — Product CVR
    - `productOrders` · _Number_ · **required** — Product Orders
    - `storeRoi` · _String_ · **required** — Store Roi
    - `adgroupId` · _Number_ · **required** — Adgroup Id
    - `adgroupName` · _String_ · **required** — Adgroup Name,if query duration include current Date or yesterday, the adgroup name maybe is null because of real time data logic. The best way to get the adgroup name is to query adgroup info and cache it.
    - `cpc` · _String_ · **required** — CPC
    - `spend` · _String_ · **required** — Spend
    - `maxBid` · _String_ · **required** — Max Bid
    - `storeUnitSold` · _Number_ · **required** — Store Unit Sold
    - `clicks` · _Number_ · **required** — Clicks
    - `productRevenue` · _String_ · **required** — Product Revenue
    - `keyword` · _String_ · **required** — Keyword
    - `campaignName` · _String_ · **required** — Campaign Name,if query duration include current Date or yesterday, the campaign name maybe is null because of real time data logic. The best way to get the campaign name is to query campaign info and cache it.
    - `productA2c` · _Number_ · **required** — Product A2C
  - `errorKey` · _String_ · **required** — Unused
  - `errorDTOList` · _Object[]_ · **required** — Unused
  - `success` · _Boolean_ · **required** — true:success false:fail
  - `analyseTraceId` · _String_ · **required** — Unused
  - `errorCode` · _String_ · **required** — Error Code
  - `totalCount` · _Number_ · **required** — Total count of search rescord
  - `errorMsg` · _String_ · **required** — Error Msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
adgroupName=test
adgroupId=2281484260
keyword=test
useRtTable=true
sort=impressions
order=ASC
pageNo=1
pageSize=100
startDate=2023-11-12
endDate=2023-11-13
campaignName=test
campaignId=101100033026398
```

Response sample 1:

```
result={}
```

---

## getLatestSignInfo

<a id="sponsor-solutions-account-getlatestsigninfo"></a>

- **Path**: `/sponsor/solutions/account/getLatestSignInfo`
- **Method**: `get`
- **Last modified**: 2023-03-24 17:45:58

Get the latest url of sign(T&C).

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `result` · _Object_ · **required** — The T&C url.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
```

Response sample 1:

```
result=https://...
success=true
errorMsg=-
analyseTraceId=...
```

---

## getReportCampaignOnFIrstSlot

<a id="sponsor-solutions-report-getreportcampaignonpreplacement"></a>

- **Path**: `/sponsor/solutions/report/getReportCampaignOnPrePlacement`
- **Method**: `GET/POST`
- **Last modified**: 2023-12-26 20:27:08

Get sponsored discovery report campaign first slot

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `sort` · _String_ · **optional** — sort column,we have provide some index to sort
- `order` · _String_ · **optional** — ASC or DESC, other String is invalid
- `pageNo` · _Number_ · **required** — Page No，default 1,max=100
- `pageSize` · _Number_ · **required** — Page Size, default 10, max=100
- `startDate` · _String_ · **required** — start date, format like yyyy-MM-dd
- `endDate` · _String_ · **required** — end date , date, format like yyyy-MM-dd
- `campaignName` · _String_ · **optional** — Campaign Name
- `campaignId` · _Number_ · **optional** — campagnId
- `productType` · _String_ · **optional** — Product Type, N:Sponsored Search(All)  F:Firsh Search Slot
- `useRtTable` · _Boolean_ · **optional** — It means that if endDate have selected today, and you need realtime data,then set useRtTable=true If useRtTable=false,it will not search realtime data

**Response parameters**

- `result` · _Object_ · **required** — Details
  - `result` · _Object[]_ · **required** — Details of each record
    - `ctr` · _String_ · **required** — CTR
    - `campaignObjective` · _String_ · **required** — Unused
    - `campaignType` · _Number_ · **required** — Campaign Type 1 Manual  2 Automated
    - `firstImpShare` · _String_ · **required** — First Imp Share
    - `campaignId` · _Number_ · **required** — Campaign Id
    - `storeRevenue` · _String_ · **required** — Store Revenue
    - `storeCvr` · _String_ · **required** — Store CVR
    - `storeA2c` · _Number_ · **required** — Store A2C
    - `storeOrders` · _Number_ · **required** — Store Orders
    - `productUnitSold` · _Number_ · **required** — Product Unit Sold
    - `impressions` · _Number_ · **required** — Impressions
    - `productCvr` · _String_ · **required** — Product CVR
    - `productOrders` · _Number_ · **required** — Product Orders
    - `storeRoi` · _String_ · **required** — Store ROI
    - `cpc` · _String_ · **required** — CPC
    - `spend` · _String_ · **required** — Spend
    - `clicks` · _Number_ · **required** — Clicks
    - `productRevenue` · _String_ · **required** — Product Revenue
    - `storeUnitSold` · _Number_ · **required** — Store Unit Sold
    - `campaignName` · _String_ · **required** — Campagin Name,if query duration include current Date or yesterday, the campaign name maybe is null because of real time data logic. The best way to get the campaign name is to query campaign info and cache it.
    - `productType` · _String_ · **required** — Product Type
    - `dayBudget` · _Number_ · **required** — Day Budget
    - `productA2c` · _Number_ · **required** — Product A2C
  - `errorKey` · _String_ · **required** — Unused
  - `errorDTOList` · _Object[]_ · **required** — Unused
  - `success` · _Boolean_ · **required** — true:success false:fail
  - `analyseTraceId` · _String_ · **required** — Analyse Trace Id
  - `errorCode` · _String_ · **required** — Error Code
  - `totalCount` · _Number_ · **required** — Total Count
  - `errorMsg` · _String_ · **required** — Error Message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
sort=impressions
order=ASC
pageNo=1
pageSize=100
startDate=2023-11-12
endDate=2023-11-13
campaignName=test
campaignId=101100033026398
productType=F
useRtTable=true
```

Response sample 1:

```
result={}
```

---

## getReportOverview

<a id="sponsor-solutions-report-getreportoverview"></a>

- **Path**: `/sponsor/solutions/report/getReportOverview`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-25 11:42:34

Get report overview.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `lastStartDate` · _String_ · **required** — -
- `endDate` · _String_ · **required** — -
- `useRtTable` · _Boolean_ · **required** — -
- `bizCode` · _String_ · **required** — -
- `lastEndDate` · _String_ · **required** — -
- `startDate` · _String_ · **required** — -

**Response parameters**

- `result` · _Object_ · **required** — The detail data.
  - `reportOverviewDetailDTO` · _Object_ · **optional** — Today's data.
    - `spend` · _String_ · **optional** — Spend is the total amount spent.
    - `impressions` · _Number_ · **optional** — An impression is counted when your promoted product is shown. Impressions help you understand how often your promoted product is being seen.
    - `clicks` · _Number_ · **optional** — A click is counted when someone clicks on your promoted product.
    - `ctr` · _String_ · **optional** — Clickthrough rate (CTR) measures how often people click on your promoted product after it's shown to them, which can help you understand the effectiveness of your promoted product.
    - `unitsSold` · _Number_ · **optional** — The total number of units sold after someone clicks your promoted product.
    - `revenue` · _String_ · **optional** — The revenue generated from units sold after someone clicks your promoted product. It is the total buyer paid amount inclusive of all discounts applied, store credit, shipping fees and surcharges.
    - `cpc` · _String_ · **optional** — The cost-per-click (CPC) is the average amount you pay when someone clicks your promoted product.
    - `roi` · _String_ · **optional** — The store's return on investment (ROI) shows how efficient your Sponsored Discovery's spend is in driving revenue for your store.
  - `lastReportOverviewDetailDTO` · _Object_ · **optional** — Yestoday's data.
    - `spend` · _String_ · **optional** — Spend is the total amount spent.
    - `impressions` · _Number_ · **optional** — An impression is counted when your promoted product is shown. Impressions help you understand how often your promoted product is being seen.
    - `clicks` · _Number_ · **optional** — A click is counted when someone clicks on your promoted product.
    - `ctr` · _String_ · **optional** — Clickthrough rate (CTR) measures how often people click on your promoted product after it's shown to them, which can help you understand the effectiveness of your promoted product.
    - `unitsSold` · _Number_ · **optional** — The total number of units sold after someone clicks your promoted product.
    - `revenue` · _String_ · **optional** — The revenue generated from units sold after someone clicks your promoted product. It is the total buyer paid amount inclusive of all discounts applied, store credit, shipping fees and surcharges.
    - `cpc` · _String_ · **optional** — The cost-per-click (CPC) is the average amount you pay when someone clicks your promoted product.
    - `roi` · _String_ · **optional** — The store's return on investment (ROI) shows how efficient your Sponsored Discovery's spend is in driving revenue for your store.
- `success` · _String_ · **required** — System result for this api call.
- `analyseTraceId` · _String_ · **required** — If the api call failed, you could find us with this.
- `errorMsg` · _String_ · **required** — If the api call failed, this field will show the detail reason.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
lastStartDate=2023-03-01
endDate=2023-03-08
useRtTable=false
bizCode=sponsoredSearch
lastEndDate=2023-03-07
startDate=2023-03-02
```

Response sample 1:

```
result={}
success=-
analyseTraceId=-
errorMsg=-
```

---

## getReportOverviewMetric

<a id="sponsor-solutions-report-getreportoverviewmetric"></a>

- **Path**: `/sponsor/solutions/report/getReportOverviewMetric`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:33:17

get report overview metric

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `metricType` · _Number_ · **required** — The type pf metric.1:spend;2:impressions;3:clicks;4:ctr;5:units sold;6:revenue;7:cpc;8:roi;9:store order;10:store a2c;11:product order.
- `endDate` · _String_ · **required** — End date.
- `useRtTable` · _Boolean_ · **required** — If you need to search data for today, then use true, otherwise false.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `startDate` · _String_ · **required** — Start date.

**Response parameters**

- `result` · _Object_ · **required** — The detail result, for this api is metric data.
  - `dateList` · _Number[]_ · **optional** — Timelime for horizontal axis.
  - `hourList` · _Number[]_ · **optional** — Timelime for horizontal axis.Only when search date is today.
  - `metricList` · _String[]_ · **optional** — The detail metric data for longitudinal axis.
- `success` · _String_ · **required** — System result for this api call.
- `analyseTraceId` · _String_ · **required** — If the api call failed, you could find us with this.
- `errorMsg` · _String_ · **required** — If the api call failed, this field will show the detail reason.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
metricType=1
endDate=2023-03-08
useRtTable=false
bizCode=sponsoredSearch
startDate=2023-03-01
```

Response sample 1:

```
result={}
success=true
analyseTraceId=...
errorMsg=INTERNAL_ERROR
```

---

## listCategory

<a id="sponsor-solutions-category-listcategory"></a>

- **Path**: `/sponsor/solutions/category/listCategory`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 17:57:16

list category

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `parentId` · _Number_ · **optional** — The category parent id.

**Response parameters**

- `result` · _Object[]_ · **required** — -
  - `label` · _String_ · **optional** — The category name.
  - `value` · _Number_ · **optional** — The category id.
  - `isLeaf` · _Boolean_ · **optional** — Is the category leaf node.
  - `selectable` · _Boolean_ · **optional** — Can the category be selected.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
parentId=8229
```

Response sample 1:

```
result={}
success=true
errorMsg=invalid param
analyseTraceId=-
```

---

## listKeywordByAdgroup

<a id="sponsor-solutions-keyword-listkeywordbyadgroup"></a>

- **Path**: `/sponsor/solutions/keyword/listKeywordByAdgroup`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 17:57:12

List keyword by adgroup.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignObjective` · _Number_ · **required** — Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales.
- `campaignType` · _Number_ · **required** — Unlock different ways to bids, select products, and keywords with campaign types.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `itemId` · _Number_ · **required** — Product id.
- `adgroupId` · _Number_ · **required** — Adgroup id.

**Response parameters**

- `result` · _Object[]_ · **required** — The detail result, for this api is keyword detail.
  - `keyword` · _String_ · **optional** — Keyword.
  - `relevance` · _Number_ · **optional** — Based on our prediction of the likelihood of shoppers clicking on the promoted product(s). Higher relevance drives better campaign performance.
  - `historicalPV` · _Number_ · **optional** — The number of searches a keyword gets in the last 30 days on average.
  - `suggestedPrice` · _String_ · **optional** — The suggested bid is calculated based on the average market winning bid for the keyword and the level of competition of the keyword in the market
  - `currency` · _String_ · **optional** — Local currency.
  - `reservePrice` · _String_ · **optional** — The hard limit of lower price.
  - `softLowerLimit` · _String_ · **optional** — The soft limit of lower price.
  - `softUpperLimit` · _String_ · **optional** — The soft limit of upper price.
  - `softUpperLimitType` · _Number_ · **optional** — 1:Bid is far higher than market price;2:Bid is too high due to current ads account credit.
- `success` · _String_ · **required** — System result for this api call.
- `analyseTraceId` · _String_ · **required** — If the api call failed, you could find us with this.
- `totalCount` · _Number_ · **required** — Total count of keyword.
- `errorMsg` · _String_ · **required** — If the api call failed, this field will show the detail reason.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignObjective=2
campaignType=2
bizCode=sponsoredSearch
itemId=3049004024
adgroupId=1374428115
```

Response sample 1:

```
result={}
success=true
analyseTraceId=...
totalCount=100
errorMsg=INTERNAL_ERROR
```

---

## listKeywordByItem

<a id="sponsor-solutions-keyword-listkeywordbyitem"></a>

- **Path**: `/sponsor/solutions/keyword/listKeywordByItem`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-26 09:20:43

List keyword by item.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignObjective` · _Number_ · **required** — Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales.
- `campaignType` · _Number_ · **required** — Unlock different ways to bids, select products, and keywords with campaign types.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `itemId` · _Number_ · **required** — Product id.

**Response parameters**

- `result` · _Object[]_ · **required** — The detail result, for this api is keyword detail.
  - `keyword` · _String_ · **optional** — Keyword.
  - `relevance` · _Number_ · **optional** — Based on our prediction of the likelihood of shoppers clicking on the promoted product(s). Higher relevance drives better campaign performance.
  - `historicalPV` · _Number_ · **optional** — The number of searches a keyword gets in the last 30 days on average.
  - `suggestedPrice` · _String_ · **optional** — The suggested bid is calculated based on the average market winning bid for the keyword and the level of competition of the keyword in the market
  - `currency` · _String_ · **optional** — Local currency.
  - `reservePrice` · _String_ · **optional** — The hard limit of lower price.
  - `softLowerLimit` · _String_ · **optional** — The soft limit of lower price.
  - `softUpperLimit` · _String_ · **optional** — The soft limit of upper price.
  - `softUpperLimitType` · _Number_ · **optional** — 1:Bid is far higher than market price;2:Bid is too high due to current ads account credit.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignObjective=2
campaignType=2
bizCode=sponsoredSearch
itemId=123
```

Response sample 1:

```
result={}
success=true
errorMsg=invalid param
analyseTraceId=-
```

---

## modifyAutoTopUpOptionOneConfig

<a id="sponsor-solutions-wallet-modifyautotopupoptiononeconfig"></a>

- **Path**: `/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:30:28

Modify auto top up option one config.1. each country has differect tax rate
2. we have minimum and maximam top-up amount limitation.For SG, min=5, max = 8,333,333,330;for PH, min=100,Max=17,895,600;for TH, min=100,max=8,333,333,300;for VN, min=50,000,max=833,333,300,000;for MY,min=10,max=8,333,333,330;for ID,min=25,000,max=8,333,333,000.the api timeout is 3s, max qps is 100, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `status` · _Number_ · **required** — The option one status.1:ON;0:OFF.
- `limitAmount` · _String_ · **required** — If balance is lower than this value, auto topUp operation will be done.
- `topupAmount` · _String_ · **required** — The amount of topUp for each auto topUp.

**Response parameters**

- `result` · _Boolean_ · **required** — The detail result, for this api is boolean.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
status=1
limitAmount=1000
topupAmount=1000
```

Response sample 1:

```
result=true
success=true
errorMsg=invalid param
analyseTraceId=-
```

---

## searchAdgroupList

<a id="sponsor-solutions-adgroup-searchadgrouplist"></a>

- **Path**: `/sponsor/solutions/adgroup/searchAdgroupList`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 17:57:15

Search adgroup with bizCode by seller.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `pageSize` · _Number_ · **required** — Page size.
- `endDate` · _String_ · **required** — Campaign end date.
- `campaignId` · _Number_ · **required** — Campaign id.
- `pageNo` · _Number_ · **required** — Page number.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `adgroupName` · _String_ · **optional** — Adgroup name for fuzzy search.
- `startDate` · _String_ · **required** — Campaign start date.
- `onlineStatus` · _Number_ · **optional** — The campaign online status.1:Online;0:Offline;9:deleted.

**Response parameters**

- `success` · _Boolean_ · **required** — The detail result, for this api is boolean.
- `errorMsg` · _String_ · **required** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **required** — If the api call failed, you could find us with this.If the api call failed, you could find us with this.
- `totalCount` · _Number_ · **optional** — The count of adgorup.
- `result` · _Object[]_ · **optional** — The detail result, for this api is adgroup detail list.
  - `adgroupId` · _Number_ · **optional** — Adgroup id.
  - `adgroupName` · _String_ · **optional** — The adgroup name, normanlly is the product name.
  - `imageUrl` · _String_ · **optional** — Normally is the product first pic.
  - `bidPrice` · _String_ · **optional** — This is the maximum bid price that you have set for your campaign.Local currency.
  - `autoCreative` · _Number_ · **optional** — Automated Creatives selection allows Lazada to automatically optimise towards the best performing creative from your existing product image set.1:ON;0:OFF.
  - `audienceViewDTOList` · _Object[]_ · **optional** — This setting allows you to bid higher on premium audiences that are more likely to convert in your store.
    - `adCrowdTag` · _Number_ · **optional** — 1:on store visitors in the past 15 days;2:on in-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience
    - `discount` · _Number_ · **optional** — The discount you want to give.eg:10 means 10% discount.
  - `spend` · _String_ · **optional** — Spend is the total amount of your spend.
  - `impressions` · _String_ · **optional** — An impression is counted each time your promoted product is shown. Impressions help you understand how often your product is being seen.
  - `clicks` · _String_ · **optional** — A click is counted each time someone clicks on your promoted product.
  - `ctr` · _String_ · **optional** — Clickthrough rate (CTR) is the ratio showing how often people who see your promoted product end up clicking on it. It’s calculated as Clicks divided by Impressions.
  - `cpc` · _String_ · **optional** — The cost-per-click (CPC) is the average amount you pay each time someone clicks your promoted product. It’s calculated as Spend divided by Clicks.
  - `storeUnitsSold` · _String_ · **optional** — The total number of units sold after the shoppers click on your promoted product during the selected date range.
  - `storeRevenue` · _String_ · **optional** — Total store revenue is generated from the units sold in your store after buyer(s) click your promoted product(s). It is the total amount paid by the buyer plus all discounts applied, store credit, shipping fees, and surcharges.
  - `storeRoi` · _String_ · **optional** — The store's return on investment (ROI) shows how efficient your Sponsored Discovery's spend is in driving revenue for your store.
  - `storeOrders` · _String_ · **optional** — The total number of orders from your store during the selected time period, after someone clicks on your promoted product.
  - `productOrders` · _String_ · **optional** — The total number of direct orders from your store during the selected time period, after someone clicks on your promoted product.
  - `unitsSold` · _String_ · **optional** — The number of promoted product units sold after shoppers click on them and purchase them.
  - `revenue` · _String_ · **optional** — Revenue generated from your promoted product after someone clicks on it and purchases it. It is the total buyer paid amount inclusive of all discounts applied, store credit, shipping fees and surcharges.
  - `status` · _Number_ · **optional** — The combine of balance,budget,schedule...
  - `adAccountBalanceStatus` · _Number_ · **optional** — Is the balance enough.1:ON;0:OFF.
  - `adApproveStatus` · _Number_ · **optional** — Is the adgroup be approved.1:ON;0:OFF.
  - `adSwitchStatus` · _Number_ · **optional** — Is the adgroup on right now.1:ON;0:OFF.
  - `campaignDailyBudgetStatus` · _Number_ · **optional** — Is the campaign budget of today enougn now.1:ON;0:OFF.
  - `campaignScheduleStatus` · _Number_ · **optional** — Is the campaign running now.1:ON;0:OFF.
  - `campaignSwitchStatus` · _Number_ · **optional** — Is the campaign switch on now.1:ON;0:OFF.
  - `productEligibleStatus` · _Number_ · **optional** — Is the product eligible.1:ON;0:OFF.
  - `productStockStatus` · _Number_ · **optional** — Is the product have enougn stock.1:ON;0:OFF.
  - `sellerEligibleStatus` · _Number_ · **optional** — Is the seller eligible.1:ON;0:OFF.
  - `itemId` · _Number_ · **optional** — Product id.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
pageSize=10
endDate=2023-03-08
campaignId=101100023522308
pageNo=1
bizCode=sponsoredSearch
adgroupName=-
startDate=2023-03-01
onlineStatus=1
```

Response sample 1:

```
success=true
errorMsg=Internal_error.
analyseTraceId=...
totalCount=100
result={}
```

---

## searchCampaignList

<a id="sponsor-solutions-campaign-searchcampaignlist"></a>

- **Path**: `/sponsor/solutions/campaign/searchCampaignList`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 17:37:59

Search campaign list with bizCode for sellers.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `onlineStatus` · _Number_ · **optional** — The campaign online status.1:Online;0:Offline;9:deleted.
- `startDate` · _String_ · **required** — Campaign start date.
- `endDate` · _String_ · **required** — Campaign end date.
- `pageNo` · _String_ · **required** — Page number.
- `pageSize` · _String_ · **required** — Page size.

**Response parameters**

- `success` · _Boolean_ · **required** — System result for this api call.
- `totalCount` · _Number_ · **required** — Campaign total count.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.
- `result` · _Object[]_ · **required** — The detail campaign list.
  - `impressions` · _String_ · **optional** — An impression is counted each time your promoted product is shown. Impressions help you understand how often your product is being seen.The impression of the campaign during startDate-endDate.String type..If the value is '-', it means no data.
  - `clicks` · _String_ · **optional** — Clickthrough rate (CTR) is the ratio showing how often people who see your promoted product end up clicking on it. It’s calculated as Clicks divided by Impressions.The click of the campaign during startDate-endDate.String type..If the value is '-', it means no data.
  - `ctr` · _String_ · **optional** — Clickthrough rate (CTR) is the ratio showing how often people who see your promoted product end up clicking on it. It’s calculated as Clicks divided by Impressions..If the value is '-', it means no data.
  - `cpc` · _String_ · **optional** — The cost-per-click (CPC) is the average amount you pay each time someone clicks your promoted product. It’s calculated as Spend divided by Clicks..If the value is '-', it means no data.
  - `storeUnitsSold` · _String_ · **optional** — The total number of units sold after the shoppers click on your promoted product during the selected date range..If the value is '-', it means no data.
  - `storeOrders` · _String_ · **optional** — The total number of orders from your store during the selected time period, after someone clicks on your promoted product..If the value is '-', it means no data.
  - `storeRevenue` · _String_ · **optional** — Total store revenue is generated from the units sold in your store after buyer(s) click your promoted product(s). It is the total amount paid by the buyer plus all discounts applied, store credit, shipping fees, and surcharges.
  - `storeRoi` · _String_ · **optional** — The store's return on investment (ROI) shows how efficient your Sponsored Discovery's spend is in driving revenue for your store.
  - `campaignId` · _Number_ · **optional** — The campaign id.
  - `campaignName` · _String_ · **optional** — The campaign name.
  - `dailyBudget` · _String_ · **optional** — The budget shows your campaign's daily budget.
  - `startDate` · _String_ · **optional** — Campaign start date.
  - `endDate` · _String_ · **optional** — Campaign end date.
  - `status` · _String_ · **optional** — The campaign status,this is a combination of 5 status include balance,budget,schedule,swtich,products.1:ON:0:OFF.
  - `adAccountBalanceStatus` · _String_ · **optional** — Is the seller have enough balance in wallet.1:ON:0:OFF.
  - `campaignDailyBudgetStatus` · _String_ · **optional** — Is the campaign hava enough realtime budget today.1:ON:0:OFF.
  - `campaignScheduleStatus` · _String_ · **optional** — Is the campaign in right schedule.1:ON:0:OFF.
  - `campaignSwitchStatus` · _String_ · **optional** — Is the campaign on rightnow.1:ON:0:OFF.
  - `haveActiveAdStatus` · _String_ · **optional** — Is the campaign hava at least 1 active product.1:ON:0:OFF.
  - `spend` · _String_ · **optional** — Spend is the total amount of your spend.The spend of the campaign during startDate-endDate.String type.If the value is '-', it means no data.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
bizCode=sponsoredSearch
onlineStatus=1
startDate=2023-03-01
endDate=2023-05-01
pageNo=1
pageSize=10
```

Response sample 1:

```
success=true
totalCount=100
errorMsg=invalid param
analyseTraceId=...
result={"campaignName":"123"...}
```

---

## searchKeyword

<a id="sponsor-solutions-keyword-searchkeyword"></a>

- **Path**: `/sponsor/solutions/keyword/searchKeyword`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 17:41:02

Search keyword with specific word.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignObjective` · _Number_ · **required** — Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales.
- `campaignType` · _Number_ · **required** — Unlock different ways to bids, select products, and keywords with campaign types.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `itemQuery` · _String_ · **required** — The word you do not want to put in the result.
- `itemId` · _Number_ · **required** — Product id.
- `searchWord` · _String_ · **required** — The specific word.

**Response parameters**

- `result` · _Object[]_ · **required** — The keyword detail.
  - `keyword` · _String_ · **optional** — Keyword.
  - `relevance` · _Number_ · **optional** — Based on our prediction of the likelihood of shoppers clicking on the promoted product(s). Higher relevance drives better campaign performance.
  - `historicalPV` · _Number_ · **optional** — The number of searches a keyword gets in the last 30 days on average.
  - `suggestedPrice` · _String_ · **optional** — The suggested bid is calculated based on the average market winning bid for the keyword and the level of competition of the keyword in the market
  - `currency` · _String_ · **optional** — Local currency.
  - `reservePrice` · _String_ · **optional** — The hard limit of lower price.
  - `softLowerLimit` · _String_ · **optional** — The soft limit of lower price.
  - `softUpperLimit` · _String_ · **optional** — The soft limit of upper price.
  - `softUpperLimitType` · _Number_ · **optional** — 1:Bid is far higher than market price;2:Bid is too high due to current ads account credit.
- `success` · _Boolean_ · **required** — System result for this api call.
- `analyseTraceId` · _String_ · **required** — If the api call failed, you could find us with this.
- `totalCount` · _Number_ · **required** — Total count of keyword.
- `errorMsg` · _String_ · **required** — If the api call failed, this field will show the detail reason.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignObjective=2
campaignType=1
bizCode=sponsoredSearch
itemQuery=-
itemId=123
searchWord=shirt
```

Response sample 1:

```
result={}
success=true
analyseTraceId=...
totalCount=19
errorMsg=-
```

---

## searchProductWithPage

<a id="sponsor-solutions-product-searchproductwithpage"></a>

- **Path**: `/sponsor/solutions/product/searchProductWithPage`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 17:41:29

Search product.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `brandName` · _String_ · **optional** — Prodct brand name.
- `campaignType` · _Number_ · **required** — Unlock different ways to bids, select products, and keywords with campaign types.
- `pageSize` · _Number_ · **required** — Page size.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `placementList` · _Number[]_ · **required** — Placements determine where shoppers will see your promoted products.3:Search Result Page;4:Just For You Page
- `productName` · _String_ · **optional** — Product name to fuzzy search.
- `campaignObjectLive` · _Number_ · **required** — Your campaign objective helps determine your bidding strategy - Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales.
- `eligible` · _Number_ · **required** — Only search product which is eligible|ineligible.1:eligible;0:ineligible.
- `pageNo` · _Number_ · **required** — Page number.
- `sellerSku` · _String_ · **optional** — Product sellerSku.
- `maxCpc` · _String_ · **required** — Max bid determines the highest amount that you're willing to pay for a click on your promoted product.-1 means no limit.
- `categoryId` · _Number_ · **optional** — Input category id to exact search.
- `itemIdBlackList` · _Number[]_ · **optional** — Input item id which you do not want put into result.

**Response parameters**

- `result` · _Object[]_ · **required** — The detail result, for this api is product detail info.
  - `itemId` · _Number_ · **optional** — Product id.
  - `productName` · _String_ · **optional** — Product name.
  - `imageUrl` · _String_ · **optional** — Product image url.
  - `pdpLink` · _String_ · **optional** — Product datail page.
  - `categoryId` · _Number_ · **optional** — Category id.
  - `bidPrice` · _String_ · **optional** — This is the maximum bid price that you have set for your campaign.
  - `competitionIndex` · _Number_ · **optional** — From 10 to 1, derived from algorithm, bigger number means the product is better.
  - `avgSalesVolume` · _Number_ · **optional** — Unit sold.
  - `retailPrice` · _String_ · **optional** — Retail price.
  - `inventory` · _Number_ · **optional** — Quantity reflects the number of products left in stock.
  - `ipv` · _String_ · **optional** — Average number of page views for your product over the past 7 days.
  - `cvr` · _String_ · **optional** — Overall conversion rate for the product level for the past 7 days
  - `contentScore` · _Number_ · **optional** — From 0 to 100, the bigger the better.
  - `isBan` · _Boolean_ · **optional** — If this is false, means you can not select this product.
  - `isDigitalUtilities` · _Boolean_ · **optional** — Is this product digital utilities.
  - `tags` · _String[]_ · **optional** — This shows the product platform.SS:sponsored search;SP:sponsored products.
- `success` · _Boolean_ · **required** — System result for this api call.
- `analyseTraceId` · _String_ · **required** — If the api call failed, you could find us with this.
- `totalCount` · _Number_ · **required** — Total count of product.
- `errorMsg` · _String_ · **required** — If the api call failed, this field will show the detail reason.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
brandName=adidas
campaignType=1
pageSize=20
bizCode=sponsoredSearch
placementList=[3,4]
productName=star
campaignObjectLive=2
eligible=1
pageNo=1
sellerSku=sku1
maxCpc=-1
categoryId=7939
itemIdBlackList=[321]
```

Response sample 1:

```
result=()
success=true
analyseTraceId=...
totalCount=100
errorMsg=-
```

---

## sign

<a id="sponsor-solutions-account-sign"></a>

- **Path**: `/sponsor/solutions/account/sign`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 16:55:51

Description: Do sign for seller. Seller or agencies can use this api to sign up the t&c.
Timeout Period： the api timeout is 10s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `result` · _Object_ · **required** — The detail result, for this api is boolean.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
```

Response sample 1:

```
result=true
success=true
errorMsg=invalid param
analyseTraceId=...
```

---

## updateAdgroupBatch

<a id="sponsor-solutions-adgroup-updateadgroupbatch"></a>

- **Path**: `/sponsor/solutions/adgroup/updateAdgroupBatch`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:32:22

Update adgroup batch.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `adgroupViewDTOList` · _Object[]_ · **required** — Adgroup list
  - `adgroupId` · _Number_ · **required** — Adgroup id.
  - `switchStatus` · _String_ · **required** — Is the adgroup online rightnow.1:ON:0:OFF.

**Response parameters**

- `result` · _Boolean_ · **required** — The detail result, for this api is boolean.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
bizCode=sponsoredSearch
adgroupViewDTOList={}
```

Response sample 1:

```
result=true
success=true
errorMsg=invalid param
analyseTraceId=-
```

---

## updateCampaign

<a id="sponsor-solutions-campaign-updatecampaign"></a>

- **Path**: `/sponsor/solutions/campaign/updateCampaign`
- **Method**: `GET/POST`
- **Last modified**: 2023-03-24 15:32:19

Update campaign with status field.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `campaignId` · _Number_ · **required** — Campaign id.
- `campaignName` · _String_ · **optional** — Campaign name.
- `startDate` · _String_ · **optional** — Campaign start date.
- `endDate` · _String_ · **optional** — Campaign end date.
- `dayBudget` · _String_ · **optional** — Budget indicates the maximum amount you’re willing to pay each day.
- `bizCode` · _String_ · **required** — Decided to choose which advertisement solution.SD:sponsoredSearch.
- `switchStatus` · _Number_ · **optional** — Campaign swtich status.1:Online;0:Offline.

**Response parameters**

- `result` · _Object_ · **required** — The campaign's detail which you just updated.
- `success` · _Boolean_ · **required** — System result for this api call.
- `errorMsg` · _String_ · **optional** — If the api call failed, this field will show the detail reason.
- `analyseTraceId` · _String_ · **optional** — If the api call failed, you could find us with this.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
campaignId=123
campaignName=campaignName
startDate=2023-02-08
endDate=2023-03-08
dayBudget=100
bizCode=sponsoredSearch
switchStatus=1
```

Response sample 1:

```
result={}
success=true
errorMsg=invalid param
analyseTraceId=...
```

---

