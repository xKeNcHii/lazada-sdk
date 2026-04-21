# Content API

## cancelTask

<a id="content-ai-canceltask"></a>

- **Path**: `/content/ai/cancelTask`
- **Method**: `post`
- **Last modified**: 2025-04-09 16:24:45

cancel tasks

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `task_ids` · _String[]_ · **required** — task_ids

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code when the operation fails
  - `result_message` · _String_ · **required** — error message when the operation fails
  - `canceled_task_count` · _Number_ · **required** — canceled  task count

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
task_ids=1234,5678
```

Response sample 1:

```
result=result
```

---

## changeFace

<a id="content-ai-changeface"></a>

- **Path**: `/content/ai/changeFace`
- **Method**: `post`
- **Last modified**: 2025-04-09 16:17:36

change face using lazada AI algorithm

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `raw_image_url` · _String_ · **required** — raw_image_url
- `model_code` · _String_ · **required** — model_code
- `batch_size` · _Number_ · **optional** — batch_size
- `ratio` · _String_ · **optional** — ratio

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code when the operation fails
  - `result_message` · _String_ · **required** — error message when the operation fails
  - `task_id` · _String_ · **required** — task_id

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
raw_image_url=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
model_code=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
batch_size=3
ratio=1:1
```

Response sample 1:

```
result=result
```

---

## changeProductBackground

<a id="content-ai-changeproductbackground"></a>

- **Path**: `/content/ai/changeProductBackground`
- **Method**: `post`
- **Last modified**: 2025-04-09 16:19:07

change product background using lazada AI algorithm

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `product_image_url` · _String_ · **required** — image url
- `background_code` · _String_ · **required** — background code
- `batch_size` · _Number_ · **required** — batch size
- `ratio` · _String_ · **optional** — ratio

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code when the operation fails
  - `result_message` · _String_ · **required** — error message when the operation fails
  - `task_id` · _String_ · **required** — task_id

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
product_image_url=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
background_code=background_code
batch_size=3
ratio=1:1
```

Response sample 1:

```
result=result
```

---

## fixHand

<a id="content-ai-fixhand"></a>

- **Path**: `/content/ai/fixHand`
- **Method**: `post`
- **Last modified**: 2025-04-09 16:11:33

fixHand using lazada AI algorithm

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `raw_image_url` · _String_ · **required** — raw_image_url
- `batch_size` · _Number_ · **optional** — batch size
- `base_ref` · _Boolean_ · **optional** — base_ref
- `model_reference_image_url` · _String_ · **required** — model_reference_image_url
- `ratio` · _String_ · **optional** — ratio

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code when the operation fails
  - `result_message` · _String_ · **required** — error message when the operation fails
  - `task_id` · _String_ · **required** — task_id

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
raw_image_url=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
batch_size=3
base_ref=false
model_reference_image_url=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
ratio=1:1
```

Response sample 1:

```
result=result
```

---

## getTaskStatus

<a id="content-ai-gettaskstatus"></a>

- **Path**: `/content/ai/getTaskStatus`
- **Method**: `get`
- **Last modified**: 2025-04-09 16:24:41

get task status

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `task_id` · _String_ · **required** — taskId

**Response parameters**

- `result` · _Object_ · **required** — result
  - `data` · _Object_ · **required** — data
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code when the operation fails
  - `result_message` · _String_ · **required** — error message when the operation fails
  - `fail_message` · _String_ · **required** — fail message
  - `status` · _String_ · **required** — task status

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
task_id=1234
```

Response sample 1:

```
result=result
```

---

## productImageMatch

<a id="content-ai-productimagematch"></a>

- **Path**: `/content/ai/productImageMatch`
- **Method**: `GET/POST`
- **Last modified**: 2025-04-09 16:19:39

match product image

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `match_num` · _Number_ · **required** — match num
- `image_url` · _String_ · **required** — image url

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code when the operation fails
  - `result_message` · _String_ · **required** — error message when the operation fails
  - `match_image_urls` · _String[]_ · **required** — match image urls

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
match_num=1
image_url=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
```

Response sample 1:

```
result=result
```

---

## tryOnCloth

<a id="content-ai-tryoncloth"></a>

- **Path**: `/content/ai/tryOnCloth`
- **Method**: `post`
- **Last modified**: 2025-04-09 16:11:29

try on cloth using lazada AI algorithm

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `keep_model` · _Boolean_ · **optional** — keep_model
- `additional_cloth_image_url` · _String_ · **optional** — additional_cloth_image_url
- `cloth_image_url` · _String_ · **required** — cloth_image_url
- `type` · _String_ · **required** — type
- `batch_size` · _Number_ · **optional** — batch_size
- `model_reference_image_url` · _String_ · **optional** — model_reference_image_url
- `ratio` · _String_ · **optional** — ratio

**Response parameters**

- `result` · _Object_ · **required** — result
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code when the operation fails
  - `result_message` · _String_ · **required** — error message when the operation fails
  - `task_id` · _String_ · **required** — task_id

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
keep_model=true
additional_cloth_image_url=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
cloth_image_url=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
type=upper
batch_size=3
model_reference_image_url=https://lzd-img-global.slatic.net/us/media/e35ea7da89a197fa2fc2432c59e13365-750-400.jpg
ratio=1:1
```

Response sample 1:

```
result=result
```

---

