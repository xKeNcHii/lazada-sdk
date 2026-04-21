# LazPay API

## ConsultPayment

<a id="lazadapay-v1-debit-consult-payment"></a>

- **Path**: `/lazadapay/v1/debit/consult_payment`
- **Method**: `GET/POST`
- **Last modified**: 2022-12-30 09:17:21

The interface is used for consult pay view. Will return pay view info including balance, coupon, credit card etc. If we have no available coupon, we will return pay method view with an empty list of coupon.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `serviceCode` · _String_ · **required** — Indentifier for service
- `payFrom` · _Object_ · **required** — Where is the money to be received, the receivable details, including the user and payment amount information
  - `custIdMercghost` · _String_ · **required** — Indentifier in merchant system for customer who need to pay
  - `transAmount` · _Object_ · **required** — Amount customer need to pay
    - `currency` · _String_ · **required** — 3-letter currency code, refer to ISO 4217 Standard currency alphabetic code
    - `value` · _String_ · **required** — Amount
  - `additionalInfo` · _String_ · **optional** — Additional Information, json format
- `payTos` · _Object[]_ · **optional** — Details payable, including sellers and amount
  - `customerId` · _String_ · **required** — Indentifier in lazpay system for customer who need to receipt
  - `payToAmount` · _Object_ · **required** — Amount customer need to receipt
    - `currency` · _String_ · **required** — 3-letter currency code, refer to ISO 4217 Standard currency alphabetic code
    - `value` · _String_ · **required** — Amount
  - `additionalInfo` · _String_ · **optional** — Additional Information, json format
- `orderGroup` · _Object_ · **optional** — Multi Orders Information
- `envInfo` · _String_ · **optional** — Environment info from buyer
- `payOptions` · _String[]_ · **optional** — pay simulate when payOptions is not null
- `productExt` · _String_ · **optional** — Additional Info for payment product
- `additionalInfo` · _String_ · **optional** — Additional Info

**Response parameters**

- `responseMessage` · _String_ · **required** — Response code
- `responseCode` · _String_ · **required** — Response message
- `errorCode` · _String_ · **optional** — Error Code
- `additionalInfo` · _String_ · **required** — Additional Info
- `payOptions` · _Object[]_ · **required** — Available payment option to user
  - `supportedCurrencies` · _String[]_ · **required** — Supported currency for this payment option
  - `payMethod` · _String_ · **required** — Payment Method Category
  - `additionalInfo` · _String_ · **required** — Additional Information, json format
  - `payOption` · _String_ · **required** — Payment Method Type
  - `rank` · _Number_ · **required** — Rank of payment option
  - `payAssetDetails` · _Object[]_ · **required** — Payment assets of the user,  can not be null when payCategory is "CHANNELDETAIL".
    - `payAssetType` · _String_ · **required** — Payment asset type
    - `card` · _Object_ · **required** — Card asset detail
    - `externalAccount` · _Object_ · **optional** — External asset detail
    - `storeValue` · _Object_ · **optional** — Inner account asset detail
    - `coupon` · _Object_ · **optional** — Coupon asset detail
    - `rebate` · _Object_ · **optional** — Rebate asset detail
    - `bankAccount` · _Object_ · **optional** — Bank account asset detail
    - `discount` · _Object_ · **optional** — Discount asset detail
    - `additionalInfo` · _String_ · **optional** — Additional Info
  - `preferred` · _Boolean_ · **required** — Successful or not in last payment
  - `disableReasonCode` · _String_ · **required** — Code to indicate the reason of disable
  - `disableReasonDesc` · _String_ · **required** — escription to indicate the reason of disable
  - `amountLimitMap` · _Object_ · **required** — Limit information for each currency
  - `payOptionInfo` · _Object_ · **required** — PaymentOption detail information,can not be null when payCategory is "CHANNEL".
  - `enabled` · _Boolean_ · **required** — enable or disable
  - `payCategory` · _String_ · **required** — Indicate this payment method is a payment asset or or not.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
serviceCode=01
payFrom={}
payTos={}
orderGroup={}
envInfo={}
payOptions={}
productExt={}
additionalInfo={}
```

Response sample 1:

```
responseMessage=Request has been processed successfully
responseCode=20054000
errorCode=PARAM_ILLEGAL
additionalInfo={"deviceId": "12345679237"}
payOptions={}
```

---

## CreateSubscriptionToFusion

<a id="insurance-subscription-create"></a>

- **Path**: `/insurance/subscription/create`
- **Method**: `post`
- **Last modified**: 2025-10-24 13:57:33

Create User Subscription To Fusion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `subscriptionStatus` · _String_ · **required** — Subscription Status
- `subscribeTime` · _Number_ · **optional** — Subscribe Time
- `unsubscribeTime` · _Number_ · **optional** — Unsubscribe Time
- `subscribeSource` · _String_ · **optional** — Subscribe Source
- `unsubscribeSource` · _String_ · **optional** — Unsubscribe Source
- `userToken` · _String_ · **required** — User Id

**Response parameters**

- `subscriptionStatus` · _String_ · **optional** — Subscription Status
- `subscribeTime` · _Number_ · **optional** — Subscribe Time
- `unsubscribeTime` · _Number_ · **optional** — Unsubscribe Time

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
subscriptionStatus=SUBSCRIBED
subscribeTime=1760075913214
unsubscribeTime=1760075913214
subscribeSource=NCD
unsubscribeSource=NCD
userToken=4095214361000
```

Response sample 1:

```
subscriptionStatus=SUBSCRIBED
subscribeTime=1760075913214
unsubscribeTime=1760075913214
```

---

## DGUtiityPreCreateOrder

<a id="digital-service-createorder"></a>

- **Path**: `/digital/service/createorder`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-06 20:42:52

This API provides an open interface for partner users to create DG orders

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `miniToken` · _String_ · **required** — mini token
- `miniappId` · _String_ · **required** — minapp id
- `paymentRequestId` · _String_ · **required** — partner order id
- `extendInfo` · _String_ · **optional** — extend message
- `signature` · _String_ · **optional** — md5 signture
- `value` · _String_ · **required** — price
- `currency` · _String_ · **required** — currency

**Response parameters**

- `success` · _Boolean_ · **optional** — true or false
- `resultCode` · _String_ · **optional** — result code
- `resultMsg` · _String_ · **optional** — result message
- `tradeNo` · _String_ · **optional** — trade no

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `00` | sucess | sueccss |

**Example**

Request sample 1:

```
miniToken=123456
miniappId=123456
paymentRequestId=888888
extendInfo={"123":"123"}
signature=hgfjpodmnvlirer
value=100
currency=PHP
```

Response sample 1:

```
success=true
resultCode=00
resultMsg=success
tradeNo=123456
```

---

## DGUtilityPreGetPaymentStatus

<a id="digital-service-getpaymentstatus"></a>

- **Path**: `/digital/service/getPaymentStatus`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-27 14:57:22

get payment status

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `paymentRequestId` · _String_ · **required** — paymentRequestId
- `miniappId` · _String_ · **required** — miniappId
- `signature` · _String_ · **required** — signature

**Response parameters**

- `success` · _Boolean_ · **optional** — true/false
- `resultCode` · _String_ · **optional** — resultCode
- `resultMsg` · _String_ · **optional** — resultMsg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
paymentRequestId=123456
miniappId=123456
signature=123456
```

Response sample 1:

```
success=true
resultCode=success
resultMsg=success
```

---

## DGUtilityPreUpdateFulfillemtStatus

<a id="digital-service-updatefulfillemtstatus"></a>

- **Path**: `/digital/service/updateFulfillemtStatus`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-27 14:57:21

update fulfillemt status

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `paymentRequestId` · _String_ · **required** — paymentRequestId
- `miniappId` · _String_ · **required** — miniappId
- `signature` · _String_ · **required** — signature

**Response parameters**

- `success` · _Boolean_ · **optional** — true/false
- `resultCode` · _String_ · **optional** — resultCode
- `resultMsg` · _String_ · **optional** — resultMsg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
paymentRequestId=123456
miniappId=123456
signature=123456
```

Response sample 1:

```
success=true
resultCode=success
resultMsg=success
```

---

## DigitalAlterOrderStatus

<a id="digital-order-alterstatus"></a>

- **Path**: `/digital/order/alterStatus`
- **Method**: `GET/POST`
- **Last modified**: 2024-10-04 13:26:00

Change Lazada Digital Order Status

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `requestId` · _String_ · **required** — Reuqest id.
- `transactionId` · _Number_ · **required** — Third Party's orderId.
- `sellerId` · _Number_ · **optional** — Seller id.
- `cancelCode` · _Number_ · **optional** — If not null, then will do alarm in DG.
- `cancelMsg` · _String_ · **optional** — Sent with the cancelCode.
- `userToken` · _String_ · **required** — Lazada user token.
- `serviceName` · _String_ · **required** — Lazada user token.

**Response parameters**

- `traceId` · _String_ · **optional** — Lazada traceId.
- `transactionId` · _Number_ · **optional** — Third Party's orderId.
- `orderStatus` · _String_ · **optional** — If have, then order final status.
- `paymentStatus` · _String_ · **optional** — Lazada order payment status.
- `resultCode` · _Number_ · **optional** — Result code from Lazada.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
requestId=1234
transactionId=1234
sellerId=1234
cancelCode=1234
cancelMsg=1234
userToken=6gaQ5mBV7lHiw1vI0IqhEw==
serviceName=agaming
```

Response sample 1:

```
traceId=212cd8df17270744623036160ef6c2
transactionId=1234
orderStatus=delivered
paymentStatus=orderPaid
resultCode=0
```

---

## DigitalCreateOrder

<a id="digital-order-create"></a>

- **Path**: `/digital/order/create`
- **Method**: `GET/POST`
- **Last modified**: 2024-09-26 14:06:42

Create Digital Virtual Order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `requestId` · _String_ · **required** — Request id.
- `itemPrice` · _Number_ · **required** — Item price.
- `currency` · _String_ · **required** — Currency.
- `transactionId` · _Number_ · **required** — Third party's transactionId.
- `sellerId` · _Number_ · **optional** — Seller id.
- `userToken` · _String_ · **required** — Token for Lazada User.
- `serviceName` · _String_ · **required** — Service name.
- `skuId` · _Number_ · **required** — Lazada sku id.
- `itemId` · _Number_ · **required** — Lazada item id.

**Response parameters**

- `transactionId` · _Number_ · **optional** — Third party's transactionId.
- `paymentLink` · _String_ · **optional** — PaymentLink.
- `resultCode` · _Number_ · **optional** — ResultCode.
- `tradeOrderLineId` · _String_ · **optional** — Lazada's tradeOrderLine id.
- `traceId` · _String_ · **optional** — Lazada's traceId.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
requestId=1234
itemPrice=100
currency=IDR
transactionId=1234
sellerId=1234
userToken=6gaQ5mBV7lHiw1vI0IqhEw==
serviceName=agaming
skuId=14664382001
itemId=8255386001
```

Response sample 1:

```
transactionId=1234
paymentLink=1234
resultCode=0
tradeOrderLineId=1234
traceId=1234
```

---

## DigitalQueryOrder

<a id="digital-order-getstatus"></a>

- **Path**: `/digital/order/getStatus`
- **Method**: `GET/POST`
- **Last modified**: 2024-09-27 17:31:30

Query Lazada Digital Order Status

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `requestId` · _String_ · **required** — Reuqest id.
- `transactionId` · _Number_ · **required** — Third Party's transactionId.
- `sellerId` · _Number_ · **optional** — Seller id.
- `serviceName` · _String_ · **required** — Service name.
- `userToken` · _String_ · **required** — Lazada user token.

**Response parameters**

- `transactionId` · _Number_ · **optional** — Third Party's transactionId.
- `orderStatus` · _String_ · **optional** — If have, then order final status.
- `paymentStatus` · _String_ · **optional** — Lazada order payment status.
- `resultCode` · _Number_ · **optional** — Result code from Lazada.
- `traceId` · _String_ · **optional** — Lazada traceId.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
requestId=1234
transactionId=1234
sellerId=1234
serviceName=agaming
userToken=6gaQ5mBV7lHiw1vI0IqhEw==
```

Response sample 1:

```
transactionId=1234
orderStatus=delivered
paymentStatus=orderPaid
resultCode=0
traceId=212cd8df17270744623036160ef6c2
```

---

## GetSubscriptionToFusion

<a id="insurance-subscription-getsubscription"></a>

- **Path**: `/insurance/subscription/getSubscription`
- **Method**: `GET/POST`
- **Last modified**: 2025-10-31 17:19:29

Get User Subscription To Fusion

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `userToken` · _String_ · **required** — User Id

**Response parameters**

- `subscriptionStatus` · _String_ · **optional** — Subscription Status
- `subscribeTime` · _Number_ · **optional** — Subscribe Time
- `unsubscribeTime` · _Number_ · **optional** — Unsubscribe Time

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
userToken=403421168373
```

Response sample 1:

```
subscriptionStatus=SUBSCRIBED
subscribeTime=1758858333449
unsubscribeTime=1758858333449
```

---

## InsuranceAlterOrderStatus

<a id="insurance-order-alterstatus"></a>

- **Path**: `/insurance/order/alterStatus`
- **Method**: `GET/POST`
- **Last modified**: 2024-08-20 14:30:11

Change Lazada Insurance Order Status

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `requestId` · _String_ · **required** — Reuqest id.
- `transactionId` · _Number_ · **required** — Fusion's orderId.
- `sellerId` · _Number_ · **optional** — Seller id.
- `cancelCode` · _Number_ · **optional** — If not null, then will do alarm in DG.
- `cancelMsg` · _String_ · **optional** — Sent with the cancelCode.
- `userToken` · _String_ · **required** — Lazada user token.
- `serviceName` · _String_ · **required** — Service name.

**Response parameters**

- `transactionId` · _Number_ · **optional** — Fusion's orderId.
- `orderStatus` · _String_ · **optional** — If have, then order final status.
- `paymentStatus` · _String_ · **optional** — Lazada order payment status
- `resultCode` · _Number_ · **optional** — Result code from Lazada.
- `traceId` · _String_ · **optional** — Lazada traceId.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
requestId=1234
transactionId=1234
sellerId=1234
cancelCode=1234
cancelMsg=1234
userToken=1234
serviceName=marketplace
```

Response sample 1:

```
transactionId=1234
orderStatus=delivered
paymentStatus=orderPaid
resultCode=0
traceId=212cd8df17270744623036160ef6c2
```

---

## InsuranceCreateOrder

<a id="insurance-order-create"></a>

- **Path**: `/insurance/order/create`
- **Method**: `GET/POST`
- **Last modified**: 2024-08-06 12:49:49

Lazada Insurance Create Order

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `requestId` · _String_ · **required** — Request ID, unique for each request.aRequest ID, unique for each request.Fusion's product ID.
- `productCode` · _String_ · **required** — Fusion's product ID.
- `itemPrice` · _Number_ · **required** — Price that user need to pay. (Totally price)
- `sstFee` · _Number_ · **required** — SST amount.
- `stampDuty` · _Number_ · **required** — Stamp Duty amont.
- `currency` · _String_ · **required** — Currency Type.
- `transactionId` · _Number_ · **required** — Fusion's order ID.
- `sellerId` · _Number_ · **optional** — Seller ID.
- `serviceName` · _String_ · **required** — Service name.
- `userToken` · _String_ · **required** — Token for Lazada User.
- `orderExistTime` · _String_ · **optional** — Lazada order persit time.
- `subProductCode` · _String_ · **optional** — Road tax's product code.
- `subItemPrice` · _String_ · **optional** — Road tax's item price. (Totally price)
- `subServiceFee` · _String_ · **optional** — Road tax's service fee.
- `subTransactionId` · _String_ · **optional** — Road tax's transactionId.
- `insuranceType` · _String_ · **optional** — Marketplace insurance type.
- `partnerCode` · _String_ · **optional** — Traffic source.
- `plateNo` · _String_ · **optional** — Car plate no.
- `planCode` · _String_ · **optional** — planCode
- `subPlanCode` · _String_ · **optional** — subPlanCode

**Response parameters**

- `tradeOrderLineId` · _String_ · **optional** — Lazada tradeOrderLine ID.
- `transactionId` · _Number_ · **optional** — Fusion's order ID.
- `paymentLink` · _String_ · **optional** — Lazada Independent Paymen Link.
- `resultCode` · _Number_ · **optional** — Result code from Lazada.
- `traceId` · _String_ · **optional** — Lazada traceId.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
requestId=1234
productCode=LZD202408071
itemPrice=100
sstFee=3
stampDuty=1
currency=MYR
transactionId=202408071
sellerId=1234
serviceName=marketplace
userToken=gQk/8THS7TSQlVj42JP1lg==
orderExistTime=18000000
subProductCode=LZD202408072
subItemPrice=10
subServiceFee=5
subTransactionId=202408072
insuranceType=car_insurance
partnerCode=DG_HP
plateNo=EF12345
planCode=EF12345
subPlanCode=EF12345
```

Response sample 1:

```
tradeOrderLineId=1234
transactionId=1234
paymentLink=https://www.lazada.com
resultCode=0
traceId=212cd8df17270744623036160ef6c2
```

---

## InsuranceGetPromotions

<a id="insurance-promotion-getpromotions"></a>

- **Path**: `/insurance/promotion/getPromotions`
- **Method**: `GET/POST`
- **Last modified**: 2025-05-28 14:14:19

get lazada marketplace  ump promotions

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `data` · _String_ · **required** — 主体信息
- `userToken` · _String_ · **required** — userToken
- `serviceName` · _String_ · **required** — serviceName

**Response parameters**

- `traceId` · _String_ · **optional** — traceId
- `data` · _String_ · **optional** — data
- `resultCode` · _Number_ · **optional** — resultCode
- `resultMessage` · _String_ · **optional** — message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
data="{"sdasd"}"
userToken="dedede"
serviceName="sdasdasda"
```

Response sample 1:

```
traceId=traceId
data=data
resultCode=resultCode
resultMessage=message
```

---

## InsuranceQueryOrder

<a id="insurance-order-getstatus"></a>

- **Path**: `/insurance/order/getStatus`
- **Method**: `GET/POST`
- **Last modified**: 2024-08-20 15:40:36

Query Lazada Insurance Order Status

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `requestId` · _String_ · **required** — Reuqest id.
- `transactionId` · _Number_ · **required** — Fusion's transactionId.
- `sellerId` · _Number_ · **optional** — Seller id.
- `serviceName` · _String_ · **required** — Service name.
- `userToken` · _String_ · **required** — Lazada user token.

**Response parameters**

- `transactionId` · _Number_ · **optional** — Fusion's transactionId.
- `orderStatus` · _String_ · **optional** — If have, then order final status.
- `paymentStatus` · _String_ · **optional** — Lazada order payment status
- `resultCode` · _Number_ · **optional** — Result code from Lazada.
- `traceId` · _String_ · **optional** — Lazada traceId.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
requestId=1234
transactionId=1234
sellerId=1234
serviceName=marketplace
userToken=1234
```

Response sample 1:

```
transactionId=1234
orderStatus=delivered
paymentStatus=orderPaid
resultCode=0
traceId=212cd8df17270744623036160ef6c2
```

---

## LazPayPaymentNotify

<a id="lazpay-v1-payment-notify"></a>

- **Path**: `/lazpay/v1/payment/notify`
- **Method**: `hsf`
- **Last modified**: 2022-07-18 12:08:29

Payment Notify

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `paymentRequestId` · _String_ · **required** — paymentRequestId
- `paymentId` · _String_ · **required** — paymentId
- `paymentAmount` · _String_ · **required** — paymentAmount
- `paymentStatus` · _String_ · **required** — paymentStatus
- `paymentApplyTime` · _Number_ · **required** — paymentApplyTime
- `paymentFinishTime` · _Number_ · **optional** — paymentFinishTime
- `productCode` · _String_ · **optional** — productCode
- `merchantInfo` · _String_ · **optional** — merchantInfo
- `promotionInfo` · _String_ · **optional** — promotionInfo
- `userPaymentAmount` · _String_ · **optional** — userPaymentAmount

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `resultStatus` · _String_ · **optional** — resultStatus
  - `resultCode` · _String_ · **optional** — resultCode
  - `resultMessage` · _String_ · **optional** — resultMessage

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
paymentRequestId=TEST209903900
paymentId=20990390032220209000280158010
paymentAmount={"amount": "113", "currency": "THB"     }
paymentStatus=SUCCESS
paymentApplyTime=1646665620233
paymentFinishTime=1646665620233
productCode=productCode
merchantInfo=merchantInfo
promotionInfo=promotionInfo
userPaymentAmount=userPaymentAmount
```

Response sample 1:

```
result=result
```

---

## LazadaCFOInvoiceRpaCallback

<a id="rpa-id-tax-callback"></a>

- **Path**: `/rpa/id/tax/callback`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-27 14:57:20

Call RPA and return the official invoice

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `country` · _String_ · **required** — Country
- `batch_id` · _String_ · **required** — Batch ID
- `status` · _String_ · **required** — status

**Response parameters**

- `is_success` · _Boolean_ · **optional** — true or false
- `res_code` · _String_ · **optional** — if success,it is null
- `content` · _String_ · **optional** — if success,it is null
- `res_msg` · _String_ · **optional** — Error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
country=ID
batch_id=916a7f17-21d5-48d8-b952-d6d39662649e
status=RPA_PROC_DONE
```

Response sample 1:

```
is_success=true
res_code=null
content=null
res_msg=null
```

---

## OpenServiceBalanceQuery

<a id="wallet-open-service-balance-query"></a>

- **Path**: `/wallet/open/service/balance/query`
- **Method**: `GET/POST`
- **Last modified**: 2024-08-08 15:21:58

Open Service Account Balance Info Query

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `date_time` · _Number_ · **required** — date time
- `available_amount` · _String_ · **required** — amount
- `available_amount_cent` · _Number_ · **required** — cent
- `currency` · _String_ · **required** — currency

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
date_time=1723100336000
available_amount=9.63
available_amount_cent=963
currency=PHP
```

---

## OpenServiceKycQuery

<a id="wallet-open-service-kyc-query"></a>

- **Path**: `/wallet/open/service/kyc/query`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-02 19:23:25

Open Service User KYC Info Query

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `need_cert_info` · _Boolean_ · **optional** — True means need KYC Info photo

**Response parameters**

- `phone` · _String_ · **optional** — phone number
- `prefix` · _String_ · **optional** — phone number prefix
- `userId` · _String_ · **optional** — open platform user id
- `birthday` · _String_ · **optional** — birthday, format is yyyy-MM-dd
- `full_name` · _String_ · **optional** — full name
- `cert_front_image` · _String_ · **optional** — certificate front image
- `cert_type` · _String_ · **optional** — certificate type
- `full_kyc_status` · _Boolean_ · **optional** — whether user has passed full kyc or not
- `kyc_jump_url` · _String_ · **optional** — redirect url to let user finish kyc in lazada app
- `extend_info` · _String_ · **optional** — extend infos

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
need_cert_info=true
```

Response sample 1:

```
phone=09123123156
prefix=63
userId=500101968946
birthday=1999-01-29
full_name=Bob Davis
cert_front_image=base64 string
cert_type=passport
full_kyc_status=false
kyc_jump_url=kycJumpUrl
extend_info="{\"AGE_VERIFY_PASS\":true}"
```

---

## OpenServiceWithdrawApply

<a id="wallet-open-service-withdraw"></a>

- **Path**: `/wallet/open/service/withdraw`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-02 19:23:28

Open Service Withdraw Apply

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `withdraw_request_id` · _String_ · **required** — ISV withdraw request id
- `withdrawable` · _Boolean_ · **required** — withdrawable feature
- `withdraw_amount` · _String_ · **required** — withdraw amount，precise to two decimal places.
- `user_id` · _String_ · **required** — LazOp user id
- `need_verify_full_kyc` · _Boolean_ · **optional** — whether full kyc validation is needed in lazada, default false.

**Response parameters**

- `withdraw_request_id` · _String_ · **optional** — ISV withdraw request id
- `withdraw_id` · _String_ · **optional** — Lazada withdraw id
- `withdraw_amount` · _String_ · **optional** — withdraw amount，precise to two decimal places.
- `withdrawable` · _String_ · **optional** — withdrawable feature
- `currency` · _String_ · **optional** — currency
- `partner_deposit` · _String_ · **optional** — The available balance of ISV

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
withdraw_request_id=test001
withdrawable=true
withdraw_amount=0.01
user_id=4DAGStK-mFFV8cK1h6z6gA
need_verify_full_kyc=false
```

Response sample 1:

```
withdraw_request_id=test001
withdraw_id=openDT_WD_123456_test001_id
withdraw_amount=0.01
withdrawable=true
currency=PHP
partner_deposit=8888.88
```

---

## OpenServiceWithdrawQuery

<a id="wallet-open-service-withdraw-query"></a>

- **Path**: `/wallet/open/service/withdraw/query`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-07 11:13:51

Open Service Withdraw Query

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `withdraw_request_id` · _String_ · **required** — ISV withdraw request id

**Response parameters**

- `withdraw_request_id` · _String_ · **optional** — ISV withdraw request id
- `withdraw_id` · _String_ · **optional** — Lazada withdraw id
- `withdraw_amount` · _String_ · **optional** — withdraw amount，precise to two decimal places.
- `withdrawable` · _String_ · **optional** — withdrawable feature
- `currency` · _String_ · **optional** — currency
- `partner_deposit` · _String_ · **optional** — The available balance of ISV

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
withdraw_request_id=test001
```

Response sample 1:

```
withdraw_request_id=test001
withdraw_id=openDT_WD_123456_test001_id
withdraw_amount=0.01
withdrawable=true
currency=PHP
partner_deposit=1888.88
```

---

## Reconciliation

<a id="wallet-open-service-reconciliation"></a>

- **Path**: `/wallet/open/service/reconciliation`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-02 19:22:08

Reconciliation

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `date` · _String_ · **required** — A date in the format of "yyyy-mm-dd"
- `business_type` · _String_ · **required** — withdraw

**Response parameters**

- `res` · _String_ · **optional** — The reconciliation file encoded by base64, user needs to decode it into a readable csv file.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
date=2023-02-01
business_type=withdraw
```

Response sample 1:

```
res=abcdefg
```

---

## collectBenefit

<a id="insurance-promotion-collectbenefit"></a>

- **Path**: `/insurance/promotion/collectBenefit`
- **Method**: `GET/POST`
- **Last modified**: 2025-07-26 09:19:17

collect lazada marketplace benefit

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `data` · _String_ · **required** — 主体信息
- `userToken` · _String_ · **required** — userToken
- `serviceName` · _String_ · **required** — serviceName

**Response parameters**

- `trace_id` · _String_ · **required** — trace
- `resultCode` · _Number_ · **required** — resultCode
- `resultMessage` · _String_ · **required** — resultMessage
- `data` · _String_ · **optional** — data

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
data={"appInfo":{"appKey":"23867946","appName":"lazada","country":"my","language":"my","platform":"android","ttid":"600000@lazada_android_7.77.0","userAgent":"MTOPSDK/3.1.1.7 (Android;10;vivo;vivo 1938)","utdid":"aFIq9ukFbEoDADlfH5MPHSPU"},"benefitCollectList":[{"benefitIdList":[1186054,1186053],"bizParams":{"benefit2VoucherPool":"{}","exposureId":"76746c9a680b4957abfc866c06aad28a","benefitPoolToken":"xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx"},"bizType":"VULCAN"}],"source":"INSURANCE","tagUnionId":"133924101401"}
userToken=Fz3wv11yBDtyhVK0vjHHGA==
serviceName=marketplace
```

Response sample 1:

```
trace_id=213c72e717502365733074305e39d1
resultCode=0
resultMessage=success
data=data
```

---

## insuranceRealTimeCDP

<a id="insurance-synccdp"></a>

- **Path**: `/insurance/syncCDP`
- **Method**: `GET/POST`
- **Last modified**: 2025-05-13 15:43:04

用户完成操作后，实时更新CDP人群

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `userToken` · _String_ · **required** — Token for Lazada User.
- `bizCode` · _String_ · **required** — business code
- `serviceName` · _String_ · **required** — business type

**Response parameters**

- `success` · _String_ · **optional** — 接口成功=true，接口失败=true， 系统失败=false
- `resultCode` · _String_ · **optional** — 业务成功=SUCCESS， 业务失败=SUCCESS ，系统失败=SYSTEM_ERROR
- `resultMessage` · _String_ · **optional** — 接口成功=Success ，接口失败=Success ，系统失败=System Error
- `data` · _Boolean_ · **optional** — 业务成功=true，业务失败=false，系统失败=false
- `redirectUrl` · _String_ · **optional** — 无

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
userToken=gQk/8THS7TSQlVj42JP1lg==
bizCode=NCD
serviceName=marketplace
```

Response sample 1:

```
success=true
resultCode=SUCCESS
resultMessage=Success
data=true
redirectUrl=null
```

---

## queryAddonOrder

<a id="insurance-addon-orders-query"></a>

- **Path**: `/insurance/addon/orders/query`
- **Method**: `GET/POST`
- **Last modified**: 2025-12-31 17:38:26

list user  addon order detail

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `pageNum` · _Number_ · **required** — pageNum
- `pageSize` · _Number_ · **required** — pageSize
- `userToken` · _String_ · **required** — userToken
- `orderStatus` · _String_ · **optional** — orderStatus

**Response parameters**

- `redirectUrl` · _String_ · **required** — redirectUrl
- `resultCode` · _String_ · **required** — resultCode
- `data` · _Object_ · **required** — data
  - `total` · _Number_ · **required** — total
  - `totalPages` · _Number_ · **required** — totalPages
  - `pageSize` · _Number_ · **required** — pageSize
  - `orderList` · _Object[]_ · **required** — orderList
    - `premium` · _String_ · **required** — premium
    - `expireTime` · _Number_ · **required** — expireTime
    - `effectiveTime` · _Number_ · **required** — effectiveTime
    - `insuranceName` · _String_ · **required** — insuranceName
    - `orderStatus` · _String_ · **required** — orderStatus
    - `policyLink` · _String_ · **required** — policyLink
    - `paidPremium` · _String_ · **required** — paidPremium
    - `transactionId` · _String_ · **required** — transactionId
    - `productName` · _String_ · **required** — productName
    - `insuredName` · _String_ · **optional** — insuredName
    - `zoneId` · _String_ · **optional** — zoneId
    - `orderDetailLink` · _String_ · **optional** — orderDetailLink
  - `pageNum` · _Number_ · **required** — pageNum
  - `traceId` · _String_ · **optional** — traceId
- `success` · _Boolean_ · **required** — success
- `resultMessage` · _String_ · **required** — resultMessage

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
pageNum=1
pageSize=10
userToken=gQk/8THS7TSQlVj42JP1lg==
orderStatus=ISSUED,CANCELED,EFFECTIVE,EXPIRED,CLAIMED
```

Response sample 1:

```
redirectUrl=null
resultCode=SUCCESS
data={}
success=true
resultMessage=Success
```

---

## queryBenefit

<a id="insurance-promotion-querybenefit"></a>

- **Path**: `/insurance/promotion/queryBenefit`
- **Method**: `GET/POST`
- **Last modified**: 2025-07-26 09:25:29

get lazada marketplace benefit

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `data` · _String_ · **required** — 主体信息
- `userToken` · _String_ · **required** — userToken
- `serviceName` · _String_ · **required** — serviceName

**Response parameters**

- `trace_id` · _String_ · **required** — trace
- `resultCode` · _Number_ · **required** — resultCode
- `resultMessage` · _String_ · **required** — resultMessage
- `data` · _String_ · **optional** — data

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
data={"appInfo":{"appKey":"23867946","appName":"lazada","country":"my","language":"my","platform":"android","ttid":"600000@lazada_android_7.77.0","userAgent":"MTOPSDK/3.1.1.7 (Android;10;vivo;vivo 1938)","utdid":"aFIq9ukFbEoDADlfH5MPHSPU"},"source":"INSURANCE","tagUnionId":"133924101401"}
userToken=Fz3wv11yBDtyhVK0vjHHGA==
serviceName=marketplace
```

Response sample 1:

```
trace_id=213c72e717502365733074305e39d1
resultCode=0
resultMessage=success
data=data
```

---

