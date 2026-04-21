# Product Review API

## GetHistoryReviewIdList

<a id="review-seller-history-list"></a>

- **Path**: `/review/seller/history/list`
- **Method**: `GET/POST`
- **Last modified**: 2022-09-28 14:39:15

Get history review id list for one seller(reviews within 3 months can be get)

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `item_id` · _String_ · **required** — Product Item ID
- `order_id` · _Number_ · **optional** — Order ID
- `start_time` · _Number_ · **required** — Start Time, timestamp in millisecond, this is the same with "create_time" in the response data of interface (/review/seller/list/v2)；The time range cannot exceed 7 days
- `end_time` · _Number_ · **required** — End Time, timestamp in millisecond, this is the same with "create_time" in the response data of interface (/review/seller/list/v2)；The time range cannot exceed 7 days
- `current` · _Number_ · **required** — The current pageNo, default value = 1, max value = 50

**Response parameters**

- `data` · _Object_ · **required** — response data
  - `current` · _Number_ · **required** — current pageNo
  - `total` · _Number_ · **required** — total number
  - `page_size` · _Number_ · **required** — page size
  - `id_list` · _Number[]_ · **required** — id list
- `success` · _Boolean_ · **required** — success or fail
- `error_code` · _String_ · **optional** — error code
- `error_msg` · _String_ · **optional** — error msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `PARAMS_VALIDATE_ERROR` | NULL_SELLERID | Cannot recognize "seller_id" |
| `PARAMS_VALIDATE_ERROR` | NULL_ITEMID | Cannot recognize "item_id" |
| `PARAMS_VALIDATE_ERROR` | NULL_CURRENT | Cannot recognize "current" |
| `PARAMS_VALIDATE_ERROR` | CURRENT_ABOVE_LIMIT | "current" is above the limit, the max value is 50 |
| `PARAMS_VALIDATE_ERROR` | NULL_STARTTIME_OR_ENDTIME | Cannot recognize "start_time" or "end_time" |
| `PARAMS_VALIDATE_ERROR` | STARTTIME_OVER_LIMIT | Only support checking 90 days of history data |
| `PARAMS_VALIDATE_ERROR` | TIMESPAN_ABOVE_LIMIT | Only support checking 7days data at one time |
| `PARAMS_VALIDATE_ERROR` | WRONG_ORDER_ID | Cannot recognize "order_id" |
| `TRAFFIC_CONTROL` | TRAFFIC_CONTROL | Traffic control |
| `PARAMS_VALIDATE_ERROR` | PARAMS_VALIDATE_ERROR | start_time&end_time range cannot exceed 7 days. |
| `PARAMS_VALIDATE_ERROR` | PARAMS_VALIDATE_ERROR | start_time&end_time range cannot exceed 7 days. |
| `Mp3SellerApiLimit` | Mp3 Seller not support the api -apipath | MP3 sellers cannot call the current API, please readthis document for a list of APIs that can be called by MP3 sellers, and you can call the GetSeller API and check the marketplaceEaseMode field to confirm that the current seller is of type MP3. |
| `PARAMS_VALIDATE_ERROR` | PARAMS_VALIDATE_ERROR | start_time&end_time range cannot exceed 7 days. |

**Example**

Request sample 1:

```
item_id=2419854443
order_id=1000000000
start_time=1662134400000
end_time=1662739200000
current=1
```

Response sample 1:

```
data={}
success=true
error_code=error
error_msg=error
```

---

## GetReviewListByIdList

<a id="review-seller-list-v2"></a>

- **Path**: `/review/seller/list/v2`
- **Method**: `get`
- **Last modified**: 2022-08-16 15:02:19

get review list by id list, need get id list first

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id_list` · _Number[]_ · **required** — id list, maxLength = 10

**Response parameters**

- `data` · _Object_ · **required** — response data
  - `review_list` · _Object[]_ · **required** — review list
    - `submit_time` · _Number_ · **required** — the time when buyer submited this review
    - `can_reply` · _Boolean_ · **required** — if review can be replied by seller
    - `product_id` · _Number_ · **required** — Product Item ID
    - `order_id` · _Number_ · **required** — Order ID
    - `review_videos` · _Object[]_ · **required** — video list
      - `video_cover_url` · _String_ · **required** — cover image url
      - `video_url` · _String_ · **required** — video url
    - `review_content` · _String_ · **required** — review content in text
    - `ratings` · _Object_ · **required** — review ratings(only PRODUCT_REVIEW has ratings, FOLLOW_UP_REVIEWS doesn't have)
      - `logistics_rating` · _Number_ · **required** — subRatings - logistics rating
      - `overall_rating` · _Number_ · **required** — overall rating
      - `seller_rating` · _Number_ · **required** — subRatings - seller rating
      - `product_rating` · _Number_ · **required** — subRatings - product rating
    - `review_type` · _String_ · **required** — PRODUCT_REVIEW or FOLLOW_UP_REVIEW.
    - `id` · _Number_ · **required** — id
    - `review_images` · _String[]_ · **required** — image url list
    - `seller_reply` · _String_ · **required** — seller reply in text
    - `create_time` · _Number_ · **optional** — the time when review data created, this is the same with "start_time" and "end_time" in the request data of interface(/review/seller/history/list)
  - `outdated_reviews` · _Number[]_ · **required** — id list if review is not exist or won't show(outdated/rejected) any more
- `success` · _Boolean_ · **required** — *
- `error_code` · _String_ · **required** — *
- `error_msg` · _String_ · **required** — *

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `PARAMS_VALIDATE_ERROR` | NULL_SELLERID | Cannot recognize sellerid |
| `PARAMS_VALIDATE_ERROR` | NULL_ID | id list is null |
| `TRAFFIC_CONTROL` | TRAFFIC_CONTROL | Traffic control |
| `Mp3SellerApiLimit` | Mp3 Seller not support the api - apipath | MP3 sellers cannot call the current API, please readthis document for a list of APIs that can be called by MP3 sellers, and you can call the GetSeller API and check the marketplaceEaseMode field to confirm that the current seller is of type MP3. |

**Example**

Request sample 1:

```
id_list=[111111111111,11111111112]
```

Response sample 1:

```
data={}
success=true
error_code=null
error_msg=null
```

---

## SubmitSellerReply

<a id="review-seller-reply-add"></a>

- **Path**: `/review/seller/reply/add`
- **Method**: `get`
- **Last modified**: 2022-07-29 11:59:28

submit seller reply for customers review

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `id` · _Number_ · **required** — review id that user wants to reply to. Can be obtain from GetProductReviewList
- `content` · _String_ · **required** — reply content in text, only support reply in text.max length = 500

**Response parameters**

- `data` · _Boolean_ · **optional** — reply success or fail
- `success` · _Boolean_ · **optional** — reply success or fail
- `error_code` · _String_ · **optional** — error code
- `error_msg` · _String_ · **optional** — error msg

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `PARAMS_VALIDATE_ERROR` | NULL_SELLERID | Cannot recognize sellerid |
| `PARAMS_VALIDATE_ERROR` | NULL_ID | Cannot recognize id |
| `PARAMS_VALIDATE_ERROR` | NULL_CONTENT | Empty content |
| `PARAMS_VALIDATE_ERROR` | REPLY_ALREADY | Already replied. All reply needs go through quality control process. |
| `PARAMS_VALIDATE_ERROR` | NO_SUCH_REVIEW | No such review |
| `PARAMS_VALIDATE_ERROR` | REVIEW_STATUS_CANNOT_REPLY | Review status cannot be replied to, review's status may be changed because of being edited or reported   |
| `PARAMS_VALIDATE_ERROR` | REVIEW_TYPE_DONOT_SUPPORT_REPLY | Review type cannot be replied to, only reply to PRODUCT_REVIEW |
| `PARAMS_VALIDATE_ERROR` | REVIEW_INFO_DONOT_SUPPORT_REPLY | Review info cannot be replied to, review must have text content or images or video  |
| `PARAMS_VALIDATE_ERROR` | REVIEW_REPORTED_CANNOT_REPLY | Review been reported cannot be repied to |
| `PARAMS_VALIDATE_ERROR` | REPLY_CONTENT_TOO_LONG | Reply too long |
| `PARAMS_VALIDATE_ERROR` | BEYOND_REPLY_PERIOD | Reply over due |
| `TRAFFIC_CONTROL` | TRAFFIC_CONTROL | Traffic control |
| `PARAMS_VALIDATE_ERROR` | REPLY_ALREADY | This review has already been replied to and does not support multiple replies. |

**Example**

Request sample 1:

```
id=11111111111
content=thank you for your reply
```

Response sample 1:

```
data=true
success=true
error_code=error
error_msg=error
```

---

