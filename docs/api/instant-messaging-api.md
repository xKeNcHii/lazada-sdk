# Instant Messaging API

## GetMessages

<a id="im-message-list"></a>

- **Path**: `/im/message/list`
- **Method**: `get`
- **Last modified**: 2022-07-26 11:22:06

Get message list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `session_id` · _String_ · **required** — session id
- `start_time` · _Number_ · **required** — when request the first page pls input current timestamp，get the next page pls input previous page response field  next_start_time
- `page_size` · _Number_ · **required** — page size
- `last_message_id` · _String_ · **optional** — previous page output param [last_message_id];it could be null when get the first page, get the next page pls input previous page response field  last_message_id

**Response parameters**

- `err_code` · _String_ · **required** — error code
- `data` · _Object_ · **required** — json
  - `message_list` · _Object[]_ · **required** — object list
    - `from_account_type` · _Number_ · **required** — user type 1=buyer 2=seller;sender account type, 1 represents the buyer, 2 represents the seller
    - `to_account_type` · _Number_ · **required** — user type 1=buyer 2=seller;receiver account type, 1 represents the buyer, 2 represents the seller
    - `from_account_id` · _String_ · **required** — send msg user;sender account id
    - `message_id` · _String_ · **required** — message id
    - `to_account_id` · _String_ · **required** — receiver account id
    - `site_id` · _String_ · **required** — country code ;SG/MY/TH/VN/PH/ID
    - `session_id` · _String_ · **required** — session id
    - `template_id` · _Number_ · **required** — message template;message template id, 1: normal text message   3: picture message 4: emoji message 10006: item message 10007:  order message 10008: voucher message 10010: invite buyers to follow the store 6: video message, use this API to upload video (The video duration is greater than 3s and less than 180s)
    - `type` · _Number_ · **required** — 1=userSend 2=systemSend;1: message come from user  2: message come from system
    - `content` · _String_ · **required** — template card json;session summary
    - `send_time` · _Number_ · **required** — message send time
    - `process_msg` · _String_ · **optional** — If this field is not empty, it means that this message has not passed the security interception verification, which means that this message is only visible to the seller, and the ISV needs to display this prompt information to the seller on the screen
    - `status` · _Number_ · **optional** — 0: message status normal, 1: message has been recalled by sender
    - `auto_reply` · _Boolean_ · **optional** — true: it is a auto reply message. false: it is not a auto reply message
  - `has_more` · _Boolean_ · **required** — has next page
  - `next_start_time` · _Number_ · **required** — the begin timestamp of next page，When pulling the next page, it needs to be passed in as an input parameter
  - `last_message_id` · _String_ · **optional** — The ID of the last message on this page. When pulling the next page, it needs to be passed in as an input parameter
- `success` · _Boolean_ · **required** — result true or false
- `err_message` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
session_id=100094063_2_1011822749_1_103
start_time=1623400073000
page_size=20
last_message_id=24jFlAu0BtRbP47190
```

Response sample 1:

```
err_code=0
data={}
success=true
err_message=null
```

---

## GetSessionDetail

<a id="im-session-get"></a>

- **Path**: `/im/session/get`
- **Method**: `get`
- **Last modified**: 2022-07-26 11:22:07

get session detail by sessionid

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `session_id` · _String_ · **required** — session id

**Response parameters**

- `err_code` · _String_ · **required** — error code 0=success
- `data` · _Object_ · **required** — json
  - `summary` · _String_ · **required** — the summary of session
  - `self_position` · _Number_ · **required** — self read time
  - `to_position` · _Number_ · **required** — The other party's read time
  - `head_url` · _String_ · **required** — user head picture url
  - `unread_count` · _Number_ · **required** — unread count
  - `last_message_time` · _Number_ · **required** — last message send time of session
  - `last_message_id` · _String_ · **required** — last message id of session
  - `session_id` · _String_ · **required** — session id
  - `title` · _String_ · **required** — buyer nick name
  - `buyer_id` · _Number_ · **required** — buyer user id
  - `tags` · _String[]_ · **optional** — the tag of session
  - `site_id` · _String_ · **optional** — country code
- `success` · _Boolean_ · **required** — result true or false
- `err_message` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
session_id=100094063_2_1011822749_1_103
```

Response sample 1:

```
err_code=0
data={}
success=true
err_message=SUCCESS
```

---

## GetSessionList

<a id="im-session-list"></a>

- **Path**: `/im/session/list`
- **Method**: `get`
- **Last modified**: 2022-07-26 11:22:08

query seller session list

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `last_session_id` · _String_ · **optional** — previous page output param [last_session_id];The last session id on this page, it needs to be passed in as an input parameter when pulling the next page
- `start_time` · _String_ · **required** — next page start time;when pull first page pls input current timestamp， when pull next page pls input last page response field next_start_time
- `page_size` · _String_ · **required** — page size

**Response parameters**

- `success` · _Boolean_ · **required** — result true or false
- `err_message` · _String_ · **required** — error message
- `err_code` · _String_ · **required** — error code, 0=success
- `data` · _Object_ · **required** — json
  - `has_more` · _Boolean_ · **required** — has next page
  - `next_start_time` · _Number_ · **required** — the begin timestamp of next page，When pulling the next page, it needs to be passed in as an input parameter
  - `last_session_id` · _String_ · **optional** — it could be null when pull first page，when pull next page pls input last page response field last_session_id
  - `session_list` · _Object[]_ · **required** — object list
    - `buyer_id` · _Number_ · **required** — buyerUserId
    - `tags` · _String[]_ · **optional** — the tag of session
    - `site_id` · _String_ · **optional** — country code
    - `summary` · _String_ · **required** — the summary of session
    - `self_position` · _String_ · **required** — self read position
    - `to_position` · _String_ · **required** — The other party's read time
    - `head_url` · _String_ · **required** — buyer head url
    - `unread_count` · _Number_ · **required** — unread count
    - `last_message_time` · _Number_ · **required** — last message time
    - `last_message_id` · _String_ · **required** — last message id
    - `session_id` · _String_ · **required** — session id
    - `title` · _String_ · **required** — buyer nick name

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
last_session_id=100094063_2_1011822749_1_103
start_time=1623313363102
page_size=20
```

Response sample 1:

```
success=true
err_message=SUCCESS
err_code=0
data={}
```

---

## MessageRecall

<a id="im-message-recall"></a>

- **Path**: `/im/message/recall`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-26 11:22:09

message recall

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `session_id` · _String_ · **required** — session id;conversation id
- `message_id` · _String_ · **required** — the id of message that need to be recalled;1）Cannot be recalled more than two minutes since the message has been sent 2）system message could not be  recalled

**Response parameters**

- `err_code` · _String_ · **optional** — error code 0=success
- `success` · _Boolean_ · **optional** — true or false
- `err_message` · _String_ · **optional** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
session_id=100094063_2_1011822749_1_103
message_id=23Fp7TJ0BtmwA00132
```

Response sample 1:

```
err_code=0
success=true
err_message=SUCCESS
```

---

## OpenSession

<a id="im-session-open"></a>

- **Path**: `/im/session/open`
- **Method**: `GET/POST`
- **Last modified**: 2022-07-29 12:36:15

open a new conversation

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `order_id` · _Number_ · **required** — orderId

**Response parameters**

- `session_id` · _String_ · **optional** — unique id of conversation

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `-22` | order out of day limit: 30 | Order timeout, only order IDs created within 30 days can be used to create a session |

**Example**

Request sample 1:

```
order_id=465423342423
```

Response sample 1:

```
session_id=100094063_2_1011822749_1_103
```

---

## ReadSession

<a id="im-session-read"></a>

- **Path**: `/im/session/read`
- **Method**: `post`
- **Last modified**: 2022-07-26 11:22:10

session read

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `session_id` · _String_ · **required** — session id;unique id of a conversation
- `last_read_message_id` · _String_ · **required** — last message id of user readed

**Response parameters**

- `err_code` · _String_ · **required** — error code 0=success
- `success` · _Boolean_ · **required** — true or false
- `err_message` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
session_id=100094063_2_1011822749_1_103
last_read_message_id=23Fp7TJ0BtmwA00132
```

Response sample 1:

```
err_code=0
success=true
err_message=SUCCESS
```

---

## SendMessage

<a id="im-message-send"></a>

- **Path**: `/im/message/send`
- **Method**: `post`
- **Last modified**: 2022-07-26 11:22:10

send message

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `session_id` · _String_ · **required** — conversation id
- `template_id` · _String_ · **required** — message template id, 1: normal text message   3: picture message 4: emoji message 10006: item message 10007:  order message 10008: voucher message 10010: invite buyers to follow the store 6: video message, use this API to upload video (The video duration is greater than 3s and less than 180s)
- `txt` · _String_ · **optional** — template_id=1 required
- `img_url` · _String_ · **optional** — template_id=3 required
- `width` · _Number_ · **optional** — template_id=3/6 required
- `height` · _Number_ · **optional** — template_id=3/6 required
- `item_id` · _String_ · **optional** — template_id=10006 required
- `order_id` · _String_ · **optional** — template_id=10007 required
- `promotion_id` · _String_ · **optional** — template_id=10008 required
- `video_id` · _String_ · **optional** — template_id=6 required

**Response parameters**

- `err_code` · _String_ · **required** — error code 0=success
- `data` · _Object_ · **required** — json
  - `current_time` · _Number_ · **required** — send time
  - `message_id` · _String_ · **required** — message id
  - `template_id` · _Number_ · **required** — message template id, 1: normal text message   3: picture message 4: emoji message 10006: item message 10007:  order message 10008: voucher message 10010: invite buyers to follow the store 6: video message, use this API to upload video (The video duration is greater than 3s and less than 180s)
- `success` · _Boolean_ · **required** — true or false
- `err_message` · _String_ · **required** — error message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
session_id=100094063_2_1011822749_1_103
template_id=1
txt=test message
img_url=https://sg-live-02.slatic.net/p/0dc6fb4898f7e991bf44c45471dca9c9.jpg
width=100
height=100
item_id=1762013406
order_id=1762013406
promotion_id=91471122422003
video_id=3678332
```

Response sample 1:

```
err_code=0
data={}
success=true
err_message=SUCCESS
```

---

