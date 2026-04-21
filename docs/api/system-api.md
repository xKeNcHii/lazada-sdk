# System API

## GenerateAccessToken

<a id="auth-token-create"></a>

- **Path**: `/auth/token/create`
- **Method**: `GET/POST`
- **Last modified**: 2026-04-21 10:01:19

generate access_token for call api

**Endpoints**

- **All**: https://auth.lazada.com/rest

**Request parameters**

- `code` · _String_ · **required** — oauth code, get from app callback URL
- `uuid` · _String_ · **optional** — This field is currently invalid,  do not use this field please

**Response parameters**

- `expires_in` · _Number_ · **required** — The expiring time of the access token, in seconds
- `account_id` · _String_ · **required** — Account ID，Allow null. if(account_platform=seller_center) account_id=null
- `country` · _String_ · **required** — The country ID (sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam)
- `country_user_info` · _Object[]_ · **required** — Country user details
  - `country` · _String_ · **required** — The country ID,(sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam)
  - `seller_id` · _String_ · **required** — Seller Id
  - `user_id` · _String_ · **required** — User Id
  - `short_code` · _String_ · **required** — Seller short code
- `account_platform` · _String_ · **required** — Account platform
- `access_token` · _String_ · **required** — Access token
- `account` · _String_ · **required** — User account(login user)
- `refresh_expires_in` · _String_ · **required** — The expiring time of th refresh token
- `refresh_token` · _String_ · **required** — Refresh token, used to refresh the token when “refresh_expires_in”>0.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `MissingParameter` | the input parameter “sign” that is mandatory for processing this request is not supplied | 1 |
| `IncompleteSignature` | The request signature does not conform to lazop standards | 1 |
| `InvalidCode` |  Invalid authorization code | Possible causes, incorrect authorisation url; authorisation code more than half an hour old |
| `InvalidCode` | Invalid authorization code | 1、please check if your Code is from the callback URL;2、Please check if your Code has already been used, each Code can only be used once;3、Code is valid for 30 minutes, it will expire after 30 minutes;4、Please check whether you are using the endpoints required by the API documentation;5、Please check whether the client id and the appkey of the request are the same when authorizing. |

**Example**

Request sample 1:

```
code=0_100132_2DL4DV3jcU1UOT7WGI1A4rY91
uuid=This field is currently invalid,  do not use this field please
```

Response sample 1:

```
expires_in=10
account_id=7063844
country=sg
country_user_info={     "sg": {       "seller_id": "1001",       "user_id": 10101     },     "my": {       "seller_id": "2001",       "user_id": 20101     } }
account_platform=seller_center
access_token=50000601c30atpedfgu3LVvik87Ixlsvle3mSoB7701ceb156fPunYZ43GBg
account=xxx@126.com
refresh_expires_in=60
refresh_token=500016000300bwa2WteaQyfwBMnPxurcA0mXGhQdTt18356663CfcDTYpWoi
```

---

## GenerateAccessTokenWithOpenId

<a id="auth-token-createwithopenid"></a>

- **Path**: `/auth/token/createWithOpenId`
- **Method**: `GET/POST`
- **Last modified**: 2023-02-02 11:18:07

generate access_token with openId for call api

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `code` · _String_ · **required** — oauth code, get from app callback URL
- `uuid` · _String_ · **optional** — This field is currently invalid,  do not use this field please

**Response parameters**

- `expires_in` · _Number_ · **required** — The expiring time of the access token, in seconds
- `account_id` · _String_ · **required** — Account ID，Allow null. if(account_platform=seller_center) account_id=null
- `country` · _String_ · **required** — The country ID (sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam)
- `country_user_info` · _Object[]_ · **required** — Country user details
  - `country` · _String_ · **required** — The country ID,(sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam)
  - `seller_id` · _String_ · **required** — Seller Id
  - `user_id` · _String_ · **required** — User Id
  - `short_code` · _String_ · **required** — Seller short code
- `account_platform` · _String_ · **required** — Account platform
- `access_token` · _String_ · **required** — Access token
- `account` · _String_ · **required** — User account(login user)
- `refresh_expires_in` · _String_ · **required** — The expiring time of th refresh token
- `refresh_token` · _String_ · **required** — Refresh token, used to refresh the token when “refresh_expires_in”>0.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `MissingParameter` | the input parameter “sign” that is mandatory for processing this request is not supplied | 1 |
| `IncompleteSignature` | The request signature does not conform to lazop standards | 1 |
| `InvalidCode` |  Invalid authorization code | Possible causes, incorrect authorisation url; authorisation code more than half an hour old |

**Example**

Request sample 1:

```
code=0_100132_2DL4DV3jcU1UOT7WGI1A4rY91
uuid=This field is currently invalid,  do not use this field please
```

Response sample 1:

```
expires_in=10
account_id=7063844
country=sg
country_user_info={     "sg": {       "seller_id": "1001",       "user_id": 10101     },     "my": {       "seller_id": "2001",       "user_id": 20101     } }
account_platform=seller_center
access_token=50000601c30atpedfgu3LVvik87Ixlsvle3mSoB7701ceb156fPunYZ43GBg
account=xxx@126.com
refresh_expires_in=60
refresh_token=500016000300bwa2WteaQyfwBMnPxurcA0mXGhQdTt18356663CfcDTYpWoi
```

---

## RefreshAccessToken

<a id="auth-token-refresh"></a>

- **Path**: `/auth/token/refresh`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-28 16:53:43

refresh access_token, the endpoint is https://auth.lazada.com/rest

**Endpoints**

- **All**: https://auth.lazada.com/rest

**Request parameters**

- `refresh_token` · _String_ · **required** — refresh_token

**Response parameters**

- `expires_in` · _Number_ · **required** — The expiring time of the access token, in seconds
- `account_id` · _String_ · **required** — Account ID，Allow null. if(account_platform=seller_center) account_id=null
- `country` · _String_ · **required** — The country ID (sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam)
- `country_user_info_list` · _Object[]_ · **required** — Country user details
  - `country` · _String_ · **required** — The country ID (sg:Singapore, my:Malaysia, ph:Philippines, th:Thailand, id:Indonesia, vn:Vietnam)
  - `seller_id` · _String_ · **required** — Seller ID
  - `user_id` · _String_ · **required** — User ID
  - `short_code` · _String_ · **optional** — The short code that is assigned to each seller ID by Lazada Seller Center
- `account_platform` · _String_ · **required** — Account platform
- `access_token` · _String_ · **required** — Access token
- `account` · _String_ · **required** — User account(login user)
- `refresh_expires_in` · _Number_ · **required** — The expiring time of th refresh token
- `refresh_token` · _String_ · **required** — Refresh token, used to refresh the token when “refresh_expires_in”>0.

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `IllegalRefreshToken` | "The specified refresh token is invalid or expired" | "The specified refresh token is invalid or expired" |
| `AUTH_TYPE_UNSUPPORTED` | XXX can only be authorized by market, not support refresh | The APP has been uploaded to the service market and the validity period of the access token has been bound to the service market order, no need to refresh. |
| `IllegalRefreshToken` | The specified refresh token is invalid or expired | Please have your seller re-login for authorization. |
| `AUTH_TYPE_UNSUPPORTED` | XXX can only be authorized by market, not support refresh | The APP has been uploaded to the service market and the validity period of the access token has been bound to the service market order, no need to refresh. |
| `IllegalRefreshToken` | The specified refresh token is invalid or expired | Please have your seller re-login for authorization. |
| `AUTH_TYPE_UNSUPPORTED` | XXX can only be authorized by market, not support refresh | The APP has been uploaded to the service market and the validity period of the access token has been bound to the service market order, no need to refresh. |
| `IllegalRefreshToken` | The specified refresh token is invalid or expired | Please have your seller re-login for authorization. |
| `IllegalRefreshToken` | The specified refresh token is invalid or expired | Please have your seller re-login for authorization. |
| `AUTH_TYPE_UNSUPPORTED` | appkey can only be authorized by market, not support refresh | The APP has been uploaded to the service market and the validity period of the access token has been bound to the service market order, no need to refresh. |

**Example**

Request sample 1:

```
refresh_token=50001600212wcwiOabwyjtEH11acc19aBOvQr9ZYkYDlr987D8BB88LIB8bj
```

Response sample 1:

```
expires_in=10
account_id=7063844
country=sg
country_user_info_list={     "sg": {       "seller_id": "1001",       "user_id": 10101     },     "my": {       "seller_id": "2001",       "user_id": 20101     } }
account_platform=seller_center
access_token=50000601c30atpedfgu3LVvik87Ixlsvle3mSoB7701ceb156fPunYZ43GBg
account=xxx@126.com
refresh_expires_in=60
refresh_token=500016000300bwa2WteaQyfwBMnPxurcA0mXGhQdTt18356663CfcDTYpWoi
```

---

## startExportByDataset

<a id="fbi-download-startexportbydataset"></a>

- **Path**: `/fbi/download/startExportByDataset`
- **Method**: `GET/POST`
- **Last modified**: 2025-03-26 15:45:51

Open the download operation

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `oldSystemId` · _String_ · **optional** — 222
- `useNewEngine` · _String_ · **optional** — true
- `appName` · _String_ · **required** — 1
- `secret` · _String_ · **required** — 1
- `workId` · _String_ · **required** — 1
- `datasetId` · _String_ · **required** — 1
- `fileType` · _String_ · **required** — 1
- `uploadType` · _String_ · **required** — 1
- `dispatchUserInfo` · _String[]_ · **optional** — 1

**Response parameters**

- `result` · _Object_ · **required** — 1
  - `returnCode` · _Number_ · **required** — 1
  - `returnValue` · _Object_ · **required** — 1
  - `returnErrorStackTrace` · _String_ · **required** — 1
  - `returnMessage` · _String_ · **required** — 1

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
oldSystemId=22
useNewEngine=true
appName=1
secret=1
workId=1
datasetId=1
fileType=1
uploadType=1
dispatchUserInfo=1
```

Response sample 1:

```
result=1
```

---

