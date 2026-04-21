# Lazada Wallet Corporate Top-up API

## DirectTransferQuery

<a id="wallet-transfer-query"></a>

- **Path**: `/wallet/transfer/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 00:18:13

Direct Transfer - Query

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `transfer_order_id` · _String_ · **required** — ISV transfer order id, length <= 32

**Response parameters**

- `amount` · _String_ · **optional** — Transfer amount，precise to two decimal places.
- `account_number` · _String_ · **optional** — Email or phone number, accepted phone number starts with (PH: +638, +639, 08, 09, 638, 639)
- `transfer_order_id` · _String_ · **optional** — ISV transfer order id, length <= 32
- `transfer_request_id` · _String_ · **optional** — Lazada transfer order id
- `deposit` · _String_ · **optional** — The available balance of ISV

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `TRANSFER_ERROR_MSG_RESPONSED_FAILED` | Error happens when transferring，please contact lazada team | Error happens when transferring，please contact lazada team |
| `OPEN_DIRECT_TRANSFER_INTERNAL_FAIL` | Direct transfer internal error, please retry or contact lazada tech team. | Direct transfer internal error, please retry or contact lazada tech team. |
| `TRANSFER_ERROR_MSG_AMOUNT_INVALID` | Amount is invalid | Amount is invalid |
| `APP_KEY_INVALID` | App key is invalid, please contact lazada tech team. | App key is invalid, please contact lazada tech team. |
| `USER_IS_NOT_LOGGED_IN` | The user is not logged in | The user is not logged in |
| `PROCEED_TRANSFER_EXCEPTION` | Internal error, please retry or contact lazada tech team. | Internal error, please retry or contact lazada tech team. |
| `OPEN_API_CALL_EXCEED_LIMIT` | Open Api call times exceeds: apiName_limitType | Open Api call times exceeds: apiName_limitType |
| `TRANSFER_ERROR_NATION_NOT_IN_LIST` | The current user's region does not have permission to access, please contact the lazada tech team. | The current user's region does not have permission to access, please contact the lazada tech team. |
| `USER_BALANCE_NOT_ENOUGH` | The available deposit is not enough for the transfer. | The available deposit is not enough for the transfer. |
| `TRANSFER_AMOUNT_EXCEED_LIMIT` | The transfer amount has exceeded the limit. | The transfer amount has exceeded the limit. |

**Example**

Request sample 1:

```
transfer_order_id=test001
```

Response sample 1:

```
amount=0.01
account_number=09160000001
transfer_order_id=test001
transfer_request_id=open_105400_test001_id
deposit=99.99
```

---

## DirectTransferRequest

<a id="wallet-transfer-request"></a>

- **Path**: `/wallet/transfer/request`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 00:18:22

Direct Transfer - Request to transfer

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `amount` · _String_ · **required** — Transfer amount，precise to two decimal places.
- `transfer_order_id` · _String_ · **required** — ISV transfer order id，length <= 32
- `account_number` · _String_ · **required** — Phone number or email address，accepted phone number starts with (PH : +639, +638, 08, 09, 638, 639)
- `withdrawable` · _Boolean_ · **optional** — The funds type for transfers. Set true for funds that can be withdrawn and false for funds that cannot be withdrawn.

**Response parameters**

- `account_number` · _String_ · **optional** — The email or phone number of user to be transferred to
- `transfer_order_id` · _String_ · **optional** — ISV input transfer order id
- `transfer_request_id` · _String_ · **optional** — Lazada transfer order id
- `amount` · _String_ · **optional** — The amount to transfer
- `deposit` · _String_ · **optional** — The available balance of ISV
- `withdrawable` · _Boolean_ · **optional** — The funds type for transfers. Set true for funds that can be withdrawn and false for funds that cannot be withdrawn.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `OPEN_DIRECT_TRANSFER_LOCK_CONFLICT` | Direct transfer request is already being processed，please wait for a moment and check status | Direct transfer request is already being processed，please wait for a moment and check status |
| `TRANSFER_ERROR_MSG_RESPONSED_FAILED` | Error happens when transferring，please contact lazada team | Error happens when transferring, please contact lazada team |
| `TRANSFER_VALUE_UNMATCHED` | Transfer amount does not match | Transfer amount does not match, please enter same amount |
| `TRANSFER_USER_UNMATCHED` | User to be transferred not match | User to be transferred not match, please use same account |
| `TRANSFER_ERROR_ACCOUNT_NUMBER_INVALID` | Account number is invalid | Please check and re-enter your account number |
| `OPEN_DIRECT_TRANSFER_INTERNAL_FAIL` | Direct transfer internal error, please retry or contact lazada tech team. | Direct transfer internal error, please retry or contact lazada tech team. |
| `TRANSFER_ERROR_TRANSFER_ORDER_ID_INVALID` | Transfer order ID is invalid | Please check and re-enter your transfer order ID |
| `TRANSFER_ERROR_MSG_AMOUNT_INVALID` | Amount is invalid | Please check and re-enter your amount |
| `APP_KEY_INVALID` | App key is invalid, please contact lazada tech team. | App key is invalid, please contact lazada tech team. |
| `USER_IS_NOT_LOGGED_IN` | The user is not logged in | Please log in  your account  |
| `PROCEED_TRANSFER_EXCEPTION` | Internal error, please retry or contact lazada tech team. | Internal error, please retry or contact lazada tech team. |
| `OPEN_API_CALL_EXCEED_LIMIT` | Open Api call times exceeds: apiName_limitType | Open Api call times exceeds, please contact lazada tech team or retry later |
| `BIZ_DEGRADATION_ERROR` | The service is not available now | The service is not available now, please retry or contact lazada tech team |
| `TRANSFER_ERROR_MSG_WALLET_INACTIVATED` | The transfer account has not activated the wallet | The transfer account has not activated the wallet, please activate your wallet |
| `TRANSFER_ERROR_MSG_USER_NOT_FOUND` | User to be transferred not found. | User to be transferred not found, please check your account or contact the lazada tech team |
| `USER_BALANCE_NOT_ENOUGH` | The available deposit is not enough for the transfer. | The available deposit is not enough for the transfer, please top up or reduce the transfer amount |
| `TRANSFER_AMOUNT_EXCEED_LIMIT` | The transfer amount has exceeded the limit. | The transfer amount has exceeded the limit, please reduce the transfer amount |
| `TRANSFER_IS_CORPORATE_USER_ERROR` | The recipient account is corporate user. | The recipient account is corporate user, please change the recipient account |
| `TRANSFER_ERROR_NATION_NOT_IN_LIST` | The current user's region does not have permission to access, please contact the lazada tech team. | The current user's region does not have permission to access, please contact the lazada tech team |
| `RISK_REJECT` | The transfer recipient's account status is abnormal, please check | The transfer recipient's account status is abnormal, please check |
| `TRANSFER_WITHDRAWABLE_UNMATCHED` | Transfer withdrawable does not match. | Transfer withdrawable does not match. |

**Example**

Request sample 1:

```
amount=0.01
transfer_order_id=test001
account_number=09160000001
withdrawable=true
```

Response sample 1:

```
account_number=lzd_test_001@tom.com
transfer_order_id=test001
transfer_request_id=open_100100_test001_id
amount=0.01
deposit=99.99
withdrawable=true
```

---

## GiftCodeQuery

<a id="wallet-giftcode-query"></a>

- **Path**: `/wallet/giftcode/query`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 00:18:26

Gift Code - Query

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `page` · _Number_ · **required** — The page to query, page should > 0 and < the total pages, default value is 1 if this parameter is null.
- `transfer_order_id` · _String_ · **required** — Transfer order Id on the ISV side, length <= 32

**Response parameters**

- `records` · _String[]_ · **optional** — The list of gift codes, need to finish unmask verification firstly.
- `total_page` · _Number_ · **optional** — The total page number of the code list
- `current_page` · _Number_ · **optional** — The current queried page of the code list
- `page_size` · _Number_ · **optional** — The default max number of codes contained in one page.
- `transfer_order_id` · _String_ · **optional** — Transfer order Id on the ISV side, length <= 32
- `total_number` · _String_ · **optional** — The amount of created gift code, precise to two decimal places
- `create_status` · _String_ · **optional** — The create status of the gift code
- `deposit` · _String_ · **optional** — The available balance of ISV

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `GIFT_CODE_LOCK_CONFLICT` | Gift code is already being created，please wait for a moment and check the batch list | Gift code is already being created，please wait for a moment and check the batch list |
| `OPEN_API_CALL_EXCEED_LIMIT` | Open Api call times exceeds: apiName_limitType | Open Api call times exceeds: apiName_limitType |
| `PROCEED_TRANSFER_EXCEPTION` | Internal error, please retry or contact lazada tech team. | Internal error, please retry or contact lazada tech team. |
| `USER_IS_NOT_LOGGED_IN` | The user is not logged in | The user is not logged in |
| `APP_KEY_INVALID` | App key is invalid, please contact lazada tech team. | App key is invalid, please contact lazada tech team. |
| `TRANSFER_ERROR_TRANSFER_ORDER_ID_INVALID` | Transfer order ID is invalid | Transfer order ID is invalid |
| `GIFT_CODE_QUERY_EMPTY` | There are no such gift code | There are no such gift code |

**Example**

Request sample 1:

```
page=1
transfer_order_id=test001
```

Response sample 1:

```
records=List<String>
total_page=5
current_page=1
page_size=100
transfer_order_id=test001
total_number=0.01
create_status=SUCCESS
deposit=99.99
```

---

## GiftCodeRequest

<a id="wallet-giftcode-request"></a>

- **Path**: `/wallet/giftcode/request`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 14:13:04

Gift Code - Request

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `amount` · _String_ · **required** — The amount of each gift code, precise to two decimal places
- `quantity` · _Number_ · **required** — The quantity of gift codes to be created
- `transfer_order_id` · _String_ · **required** — ISV transfer order id，length <= 32
- `end_timestamp` · _Number_ · **required** — End timestamp，13 bits
- `start_timestamp` · _Number_ · **required** — Start timestamp，13 bits

**Response parameters**

- `transfer_order_id` · _String_ · **optional** — ISV transfer order id
- `total_number` · _Number_ · **optional** — Total gift code quantity
- `create_status` · _String_ · **optional** — Create status of gift code
- `deposit` · _String_ · **optional** — The available balance of ISV

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `OPEN_API_TIMESTAMP_INVALID` | The input timestamp is invalid | The input timestamp is invalid |
| `BIZ_DEGRADATION_ERROR` | The service is not available now | The service is not available now |
| `OPEN_API_CALL_EXCEED_LIMIT` | Open Api call times exceeds: apiName_limitType | Open Api call times exceeds: apiName_limitType |
| `PROCEED_TRANSFER_EXCEPTION` | Internal error, please contact lazada tech team | Internal error, please contact lazada tech team |
| `USER_IS_NOT_LOGGED_IN` | The user is not logged in | The user is not logged in |
| `APP_KEY_INVALID` | App key is invalid, please contact lazada tech team. | App key is invalid, please contact lazada tech team. |
| `TRANSFER_ERROR_TRANSFER_ORDER_ID_INVALID` | Transfer order ID is invalid | Transfer order ID is invalid |
| `TRANSFER_ERROR_MSG_AMOUNT_INVALID` | Amount is invalid | Amount is invalid |
| `TRANSFER_ERROR_MSG_QUANTITY_INVALID` | The quantity of gift code is invalid | The quantity of gift code is invalid, only under test case. |
| `GIFT_CODE_LOCK_CONFLICT` | Gift code is already being created，please wait for a moment and check the batch list. | Gift code is already being created，please wait for a moment and check the batch list. |
| `BATCH_CREATE_ERROR` | Error happens when creating gift code. Please Retry. | Error happens when creating gift code. |
| `BALANCE_ACCOUNT_NOT_ENOUGH` | Balance account is not enough. | Balance account is not enough. |
| `TRANSFER_ERROR_NATION_NOT_IN_LIST` | The current user's region does not have permission to access, please contact the lazada tech team. | The current user's region does not have permission to access, please contact the lazada tech team. |

**Example**

Request sample 1:

```
amount=0.01
quantity=1
transfer_order_id=test001
end_timestamp=1740260653001
start_timestamp=1640260000001
```

Response sample 1:

```
transfer_order_id=test001
total_number=1
create_status=SUCCESS
deposit=99.99
```

---

## Reconciliation

<a id="wallet-open-reconciliation"></a>

- **Path**: `/wallet/open/reconciliation`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 12:47:16

Corporate TopUp - Reconciliation

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `date` · _String_ · **required** — A date in the format of "yyyy-mm-dd"

**Response parameters**

- `res` · _String_ · **optional** — The reconciliation file encoded by base64, user needs to decode it into a readable csv file.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `RECONCILIATION_INPUT_DATE_INVALID` |  Invalid input format of local date. |  Invalid input format of local date. |
| `ECONCILIATION_CSV_ERROR_FAILED` | Error happens when creating reconciliation file. | Error happens when creating reconciliation file. |
| `BIZ_DEGRADATION_ERROR` | The service is not available now. | The service is not available now. |

**Example**

Request sample 1:

```
date=2022-04-01
```

Response sample 1:

```
res=abcdefg
```

---

