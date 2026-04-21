# LazLive API

## HighlightProduct

<a id="lazlive-product-highlight"></a>

- **Path**: `/lazlive/product/highlight`
- **Method**: `GET/POST`
- **Last modified**: 2023-09-15 17:59:11

highlight product

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `highLightRequest` · _Object_ · **required** — Request parameters
  - `itemId` · _Number_ · **required** — item id
  - `presenterId` · _Number_ · **required** — presenter id
  - `action` · _String_ · **required** — highlight start：HIGHLIGHT_START

**Response parameters**

- `data` · _Object_ · **optional** — data
  - `success` · _Boolean_ · **optional** — true

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `BIZ_INVALID_ARGUMENT` | Please check whether the input parameter "action" is correct | 1 |
| `BIZ_USER_NOT_PERMITTED` | No permission | 1 |
| `BIZ_LIVE_NOT_FOUND` | The live room does not exist | 1 |
| `BIZ_INVALID_PRODUCT` | Invalid product | 1 |
| `BIZ_NOT_LIVE_PRODUCT` | It is not a product of the live room | 1 |
| `SYSTEM_ERROR` | We are experiencing a surge in traffic. Please try again. If you continue to get this message, try again later | 1 |

**Example**

Request sample 1:

```
highLightRequest={     "itemId":267690056,     "presenterId":500209002194,     "action":"HIGHLIGHT_START" }
```

Response sample 1:

```
data={"success":true}
```

---

