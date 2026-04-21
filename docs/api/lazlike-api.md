# LazLike API

## MCNQueryTagInfoByName

<a id="content-mcn-content-querytaginfosbyname"></a>

- **Path**: `/content/mcn/content/queryTagInfosByName`
- **Method**: `GET/POST`
- **Last modified**: 2024-06-11 15:20:45

MCNQueryTagInfoByName

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `tagNames` · _String_ · **required** — The tag name you want to query, multiple tags are split according to,

**Response parameters**

- `api_result` · _Object_ · **optional** — result
  - `success` · _String_ · **optional** — whether the operation succeeds
  - `resultCode` · _String_ · **optional** — error code provided when the operation fails
  - `resultMessage` · _String_ · **optional** — error message provided when the operation fails
  - `tagDTOList` · _Object[]_ · **optional** — result

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
tagNames=Neo-Chinese,Sexy Style
```

Response sample 1:

```
api_result={   "success": false,   "resultCode": "",   "tagDTOList": [     {       "owner": "lazada_content",       "gmtModified": 1716518646000,       "creator": "343236",       "tagCode": "Neo-Chinese_1716518645925",       "effectiveTime": null,       "entityAttr": null,       "modifier": "343236",       "description": "Neo-Chinese",       "gmtCreate": 1716518646000,       "tagName": "Neo-Chinese",       "effectiveEntityCount": null,       "expireTime": null,       "parentTagId": 7697,       "isDeleted": "0",       "tagPath": "7697-7703",       "propertyTagDTOList": null,       "id": 7703,       "isSetDeadline": "0",       "class": "com.lazada.tag.client.response.TagDTO",       "parentTagCode": "Fashion Style_1716518581934",       "tagCategoryCode": "content_property",       "entityAttrVersion": "1.0",       "status": null     }   ],   "resultMessage": "",   "class": "com.lazada.lazlike.openapi.response.McnTagInfosResult" }
```

---

## McnContentCancelSchedulePublish

<a id="content-mcn-content-cancelscheduled"></a>

- **Path**: `/content/mcn/content/cancelScheduled`
- **Method**: `post`
- **Last modified**: 2024-02-22 17:02:23

McnContentCancelSchedulePublish

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `contentId` · _Number_ · **required** — Content ID that needs to be canceled scheduled release

**Response parameters**

- `api_result` · _Object_ · **optional** — result of api
  - `result` · _Boolean_ · **optional** — api result
  - `success` · _Boolean_ · **optional** — whether the operation succeeds
  - `errorMessage` · _String_ · **optional** — error code provided when the operation fails
  - `errorCode` · _Number_ · **optional** — error message provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
contentId=123456
```

Response sample 1:

```
api_result={   "result": true,   "success": true,   "errorMessage": null,   "errorCode": null,   "class": "com.lazada.social.magpie.api.Result" }
```

---

## McnContentCompleteCreateVideo

<a id="content-mcn-video-block-commit"></a>

- **Path**: `/content/mcn/video/block/commit`
- **Method**: `post`
- **Last modified**: 2023-05-18 17:29:27

After uploading all blocks of the video file, call McnContentCompleteCreateVideo to complete the video uploading process.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `uploadId` · _String_ · **required** — come from the result of McnContentInitCreateVideo
- `parts` · _String_ · **required** — a json string contains e_tag info of each block
- `title` · _String_ · **required** — the video title
- `coverUrl` · _String_ · **optional** — optional. cover Image of video，return by calling McnContentUploadImage

**Response parameters**

- `result` · _Object_ · **required** — result of api
  - `videoId` · _Number_ · **required** — return video's id for further call
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code provided when the operation fails
  - `result_message` · _String_ · **required** — error message provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
uploadId=ABCDEF
parts=[{"partNumber":1,"eTag":"AB693ADF0DF340F50637686D65CC062C"},{"partNumber":2,"eTag":"557C398778A948415C388B347509CE1C"}]
title=hello
coverUrl=http://lazada.com/cover
```

Response sample 1:

```
result={"resultCode":"OK","resultMessage":"success","success":true,"uploadId":"ABCDEFGH"}
```

---

## McnContentCreate

<a id="content-mcn-content-create"></a>

- **Path**: `/content/mcn/content/create`
- **Method**: `post`
- **Last modified**: 2023-05-18 22:47:32

create content

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `kolUserId` · _Number_ · **optional** — buyer account of kol
- `contentType` · _String_ · **required** — should be 'video' for video content
- `description` · _String_ · **required** — text part
- `imageList` · _String_ · **optional** — image urls splitted by comma
- `itemList` · _String_ · **optional** — itemId list splitted by comma
- `videoId` · _Number_ · **optional** — return by calling McnContentCompleteCreateVideo
- `categoryId` · _Number_ · **optional** — category id
- `tags` · _String_ · **optional** — contents brief tags
- `voiceLang` · _String_ · **required** — language of voice
- `subtitleLang` · _String_ · **required** — language of subtitle
- `descriptionLang` · _String_ · **optional** — language of description
- `publishTimeMillis` · _Number_ · **optional** — Content release time, if it is to be released immediately, you can not pass it or pass 0. If you want to publish it regularly, pass > a timestamp of the current time, milliseconds and must be an hour.
- `shopId` · _Number_ · **optional** — shop account
- `proxyFlag` · _Boolean_ · **optional** — proxy flag
- `title` · _String_ · **optional** — title
- `extraTagIds` · _String_ · **optional** — Additional tags that need to be added, such as fashion tags and sale tags
- `channel` · _String_ · **optional** — mcn_aigc or mcn_content

**Response parameters**

- `result` · _Object_ · **required** — result of api
  - `contentId` · _Number_ · **required** — content id
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code provided when the operation fails
  - `result_message` · _String_ · **required** — error message provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
kolUserId=123456
contentType=video
description=hello
imageList=http://a.jpg,http://b.jpg
itemList=111111,222222
videoId=123456
categoryId=9527
tags=skirt,summer
voiceLang=en
subtitleLang=en
descriptionLang=en
publishTimeMillis=0
shopId=123456
proxyFlag=false
title=this is title
extraTagIds=1234
channel=mcn_aigc
```

Response sample 1:

```
result={"resultCode":"OK","resultMessage":"success","success":true,"uploadId":"ABCDEFGH"}
```

---

## McnContentInitCreateVideo

<a id="content-mcn-video-block-create"></a>

- **Path**: `/content/mcn/video/block/create`
- **Method**: `GET/POST`
- **Last modified**: 2023-05-19 20:02:35

Initial an upload video process, this API will return the corresponding UploadID

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `kolUserId` · _Number_ · **required** — buyer account of kol
- `fileName` · _String_ · **required** — local filename, should be less than 20 chars
- `fileBytes` · _Number_ · **required** — video file's bytes, should be less than 100M

**Response parameters**

- `result` · _Object_ · **required** — result of api
  - `upload_id` · _String_ · **required** — The temporary ID used during the video uploading process corresponds to the upload of a video.
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code provided when the operation fails
  - `result_message` · _String_ · **required** — error message provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
kolUserId=123456
fileName=mountain.mp4
fileBytes=6310731
```

Response sample 1:

```
result={"resultCode":"OK","resultMessage":"success","success":true,"uploadId":"ABCDEFGH"}
```

---

## McnContentListCategory

<a id="content-mcn-category-list"></a>

- **Path**: `/content/mcn/category/list`
- **Method**: `get`
- **Last modified**: 2023-05-19 20:02:36

list mcn content categories

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `result` · _Object_ · **required** — result of api
  - `categoryList` · _Object[]_ · **required** — the URL address of the uploaded image.
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code provided when the operation fails
  - `result_message` · _String_ · **required** — error message provided when the operation fails

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
result={"resultCode":"OK","resultMessage":"success","success":true,"uploadId":"ABCDEFGH"}
```

---

## McnContentPropertyTagList

<a id="content-mcn-property-list"></a>

- **Path**: `/content/mcn/property/list`
- **Method**: `GET/POST`
- **Last modified**: 2024-06-12 20:00:06

list mcn content property tags

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `success` · _Boolean_ · **optional** — whether the operation succeeds
- `resultMessage` · _String_ · **optional** — error code provided when the operation fails
- `resultCode` · _String_ · **optional** — error message provided when the operation fails
- `tagList` · _Object[]_ · **optional** — result

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
resultMessage=error
resultCode=10001
tagList=result
```

---

## McnContentReplySchedulePublish

<a id="content-mcn-content-replyschedulepublish"></a>

- **Path**: `/content/mcn/content/replySchedulePublish`
- **Method**: `post`
- **Last modified**: 2024-02-28 19:52:30

McnContentReplySchedulePublish

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `contentId` · _Number_ · **required** — contentId
- `publishTimeMillis` · _Number_ · **required** — Resume scheduled publishing time

**Response parameters**

- `api_result` · _Object_ · **optional** — result of api
  - `result` · _Boolean_ · **optional** — api result
  - `success` · _Boolean_ · **optional** — whether the operation succeeds
  - `errorMessage` · _String_ · **optional** — error message provided when the operation fails
  - `errorCode` · _Number_ · **optional** — error code provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
contentId=123456
publishTimeMillis=1708509600000
```

Response sample 1:

```
api_result={   "result": true,   "success": true,   "errorMessage": null,   "errorCode": null,   "class": "com.lazada.social.magpie.api.Result" }
```

---

## McnContentUploadImage

<a id="content-mcn-image-upload"></a>

- **Path**: `/content/mcn/image/upload`
- **Method**: `post`
- **Last modified**: 2023-05-19 20:02:39

upload image

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `kolUserId` · _Number_ · **required** — kol user id
- `image` · _byte[]_ · **required** — file content

**Response parameters**

- `result` · _Object_ · **required** — result of api
  - `url` · _String_ · **required** — the URL address of the uploaded image.
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code provided when the operation fails
  - `result_message` · _String_ · **required** — error message provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
kolUserId=1234
image=0x00FF
```

Response sample 1:

```
result={"resultCode":"OK","resultMessage":"success","success":true,"uploadId":"ABCDEFGH"}
```

---

## McnContentUploadVideoBlock

<a id="content-mcn-video-block-upload"></a>

- **Path**: `/content/mcn/video/block/upload`
- **Method**: `post`
- **Last modified**: 2023-05-19 20:02:40

upload one block of video file

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `uploadId` · _String_ · **required** — upload id
- `blockNo` · _Number_ · **required** — block number
- `blockCount` · _Number_ · **required** — block count
- `file` · _byte[]_ · **required** — block content

**Response parameters**

- `result` · _Object_ · **required** — result of api
  - `eTag` · _String_ · **required** — return e_tag for using in commit operation
  - `success` · _Boolean_ · **required** — whether the operation succeeds
  - `result_code` · _String_ · **required** — error code provided when the operation fails
  - `result_message` · _String_ · **required** — error message provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
uploadId=ABCD
blockNo=0
blockCount=1
file=0x00FF
```

Response sample 1:

```
result={"resultCode":"OK","resultMessage":"success","success":true,"uploadId":"ABCDEFGH"}
```

---

## McnProductValidator

<a id="content-mcn-product-validate"></a>

- **Path**: `/content/mcn/product/validate`
- **Method**: `get`
- **Last modified**: 2023-12-09 21:09:25

Identify high risk products

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `lazOpAppKey` · _String_ · **optional** — appKey
- `itemIdList` · _String_ · **required** — 商品id，多个用英文逗号隔开

**Response parameters**

- `result` · _Object_ · **optional** — result of api
  - `normalItemList` · _Number[]_ · **optional** — 正常商品id列表
  - `highRiskItemList` · _Number[]_ · **optional** — 危险商品id列表
  - `success` · _Boolean_ · **optional** — whether the operation succeeds
  - `result_code` · _String_ · **optional** — error code provided when the operation fails
  - `result_message` · _String_ · **optional** — error message provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
lazOpAppKey=123456
itemIdList=4078878428,4234217729
```

Response sample 1:

```
result={"resultCode":"OK","resultMessage":"success","success":true,"normalItemList":[4078878428,4234217729],"highRiskItemList":[]}
```

---

## McnSimilarProductSearch

<a id="content-mcn-similar-product-search"></a>

- **Path**: `/content/mcn/similar/product/search`
- **Method**: `GET/POST`
- **Last modified**: 2023-12-23 17:54:58

相似商品搜索接口

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `kolUserId` · _Number_ · **optional** — user id
- `imageUrlList` · _String_ · **optional** — image url list
- `shopId` · _Number_ · **optional** — shop id

**Response parameters**

- `productList` · _Object[]_ · **optional** — product info
- `confidentialityStatement` · _String_ · **optional** — confidentiality statement
- `success` · _Boolean_ · **optional** — whether the operation succeeds
- `result_code` · _String_ · **optional** — error code provided when the operation fails
- `result_message` · _String_ · **optional** — error message provided when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
kolUserId=12345
imageUrlList=https://123.jpg
shopId=12345
```

Response sample 1:

```
productList=[{"imageUrl":"https://","productId":12123,"productLink":"https://","mainPicture":"https://","skuId":21213,"confidentialityStatement":"By accessing this API, you agree to treat the data with confidential"}]
confidentialityStatement=By accessing this API, you agree to treat the data with confidential
success=true
result_code=OK
result_message=success
```

---

## queryContentReviewRecords

<a id="content-mcn-content-queryreviewrecords"></a>

- **Path**: `/content/mcn/content/queryReviewRecords`
- **Method**: `GET/POST`
- **Last modified**: 2025-06-02 10:29:44

Query content audit records. Currently, querying records with audit results of low (block) is supported.The number of query contents is limited to 500 (adjustable).

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `contentIds` · _String_ · **required** — 内容id

**Response parameters**

- `result` · _Object_ · **optional** — result
  - `success` · _Boolean_ · **optional** — success
  - `resultCode` · _String_ · **optional** — resultCode
  - `resultMessage` · _String_ · **optional** — resultMessage
  - `reviewRecords` · _Object[]_ · **optional** — reviewRecords
    - `reviewedType` · _String_ · **optional** — reviewedType
    - `reason` · _String_ · **optional** — reason
    - `reviewedTime` · _Number_ · **optional** — reviewedTime
    - `contentId` · _Number_ · **optional** — contentId
    - `currentContentBaseState` · _Number_ · **optional** — currentContentBaseState

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **optional** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
contentIds=59519659,59519679
```

Response sample 1:

```
result={   "success": true,   "resultCode": "",   "resultMessage": "",   "class": "com.lazada.lazlike.openapi.response.McnContentReviewResult",   "reviewRecords": [     {       "reviewedType": "AUDIT_FAILED",       "reason": "impolite behaviour",       "reviewedTime": 1747880084145,       "contentId": 64570814,       "class": "com.lazada.lazlike.openapi.response.McnContentReviewRecord",       "currentContentBaseState": 2     }   ] }
```

---

