# Media Center API

## CompleteCreateVideo

<a id="media-video-block-commit"></a>

- **Path**: `/media/video/block/commit`
- **Method**: `post`
- **Last modified**: 2022-07-14 15:11:31

After uploading all blocks of the video file,  call CompleteCreateVideo to complete the video uploading process.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `uploadId` · _String_ · **required** — return by calling InitCreateVideo
- `parts` · _String_ · **required** — a json string contains e_tag info of each block
- `title` · _String_ · **required** — the video title
- `coverUrl` · _String_ · **required** — the url of the video's cover image
- `videoUsage` · _String_ · **optional** — the usage of video, "pro_main_video" represent prodcut main video, "im" represent chat video

**Response parameters**

- `success` · _Boolean_ · **required** — whether the operation succeeds
- `result_code` · _String_ · **required** — error code when the operation fails
- `video_id` · _String_ · **required** — return video_id for further call
- `result_message` · _String_ · **required** — error message when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `ILLEGAL_PARAMETER` | detail message | illegal parameter |
| `FAIL_TO_BLOCK_COMPLETE` | detail message | fail to complete block upload |
| `FAIL_TO_VALIDATE` | detail message | fail to validate video |
| `FAIL_TO_ADD_VIDEO` | detail message | fail to add video |

**Example**

Request sample 1:

```
uploadId=123456ABCD
parts=[{"partNumber":1,"eTag":"AB693ADF0DF340F50637686D65CC062C"},{"partNumber":2,"eTag":"557C398778A948415C388B347509CE1C"}]
title=hello
coverUrl=https://sg-live-02.slatic.net/p/ae0f37dbf1c0ef8c560a0f0cfbaac3b6.png
videoUsage=pro_main_video
```

Response sample 1:

```
success=true
result_code=ok
video_id=30023680909
result_message=ok
```

---

## GetVideo

<a id="media-video-get"></a>

- **Path**: `/media/video/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 14:06:26

You call this action to get video info after uploading.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `videoId` · _Number_ · **required** — the previous return value by calling CompleteCreateVideo

**Response parameters**

- `cover_url` · _String_ · **required** — cover url of the video
- `video_url` · _String_ · **required** — url of the video
- `success` · _Boolean_ · **required** — whether the operation succeeds
- `result_code` · _String_ · **required** — error code when the operation fails
- `state` · _String_ · **required** — possible values: READY_FOR_TRANSCODE, TRANSCODING, TRANSCODE_FAILED, READY_FOR_AUDIT, AUDIT_FAILED, AUDIT_SUCCESS, DELETED
- `title` · _String_ · **required** — title of the video
- `result_message` · _String_ · **required** — error message when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `ILLEGAL_PARAMETER` | detail message | illegal parameter |
| `FAIL_TO_GET_SHOP_INFO` | detail message | fail to get shop info |
| `FAIL_TO_GET_VIDEO` | detail message | fail to get video |

**Example**

Request sample 1:

```
videoId=123456
```

Response sample 1:

```
cover_url=https://sg-live-02.slatic.net/p/9e134745d2bd9b3eba1cf5d5b47d4b0b.jpg
video_url=http://lazvideo.alicdn.com/psp/20210725/49d480d9-9b15-40f2-8b9f-2a3905132e47@@ld.mp4?auth_key=1627649365-0-0-b5e6a1e67df8bfbf0a6bcb071b92841d
success=true
result_code=ok
state=AUDIT_SUCCESS
title=hello
result_message=ok
```

---

## GetVideoQuota

<a id="media-video-quota-get"></a>

- **Path**: `/media/video/quota/get`
- **Method**: `get`
- **Last modified**: 2022-07-29 14:06:28

You call this api to get the capacity quota of seller.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Response parameters**

- `capacity_size` · _Number_ · **required** — the max space of all video files
- `used_size` · _Number_ · **required** — current space taken
- `success` · _Boolean_ · **required** — whether the operation succeeds
- `result_code` · _String_ · **required** — error code when the operation fails
- `result_message` · _String_ · **required** — error message when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `ILLEGAL_PARAMETER` | more detail | illegal parameter |
| `FAIL_TO_GET_SHOP_INFO` | more detail | fail to get shop info |
| `FAIL_TO_GET_USER_CAPACITY` | more detail | fail to get capacity |

**Example**

Request sample 1:

```
```

Response sample 1:

```
capacity_size=1024000000
used_size=1000000000
success=true
result_code=ok
result_message=ok
```

---

## InitCreateVideo

<a id="media-video-block-create"></a>

- **Path**: `/media/video/block/create`
- **Method**: `post`
- **Last modified**: 2022-07-29 14:03:30

A seller starts to upload a video file

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `fileName` · _String_ · **required** — local file name of vedio file
- `fileBytes` · _Number_ · **required** — video file's bytes, should be less than 100M

**Response parameters**

- `upload_id` · _String_ · **required** — return upload_id for further operation
- `success` · _Boolean_ · **required** — whether the operation succeeds
- `result_code` · _String_ · **required** — error code when the operation fails
- `result_message` · _String_ · **required** — error message when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `ILLEGAL_PARAMETER` | detail message | illegal parameter |
| `FAIL_TO_GET_SHOP_INFO` | detail message | fail to get shop info |
| `FAIL_TO_BLOCK_INIT` | detail message | fail to create block upload |

**Example**

Request sample 1:

```
fileName=show.mp4
fileBytes=123456
```

Response sample 1:

```
upload_id=123456ABCD
success=true
result_code=ok
result_message=file size is too big
```

---

## RemoveVideo

<a id="media-video-remove"></a>

- **Path**: `/media/video/remove`
- **Method**: `post`
- **Last modified**: 2022-07-29 15:34:34

You can this api to delete a video file permanently.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `videoId` · _Number_ · **required** — the previous return value by calling CompleteCreateVideo

**Response parameters**

- `success` · _Boolean_ · **required** — whether the operation succeeds
- `result_code` · _String_ · **required** — error code when the operation fails
- `result_message` · _String_ · **required** — error message when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `ILLEGAL_PARAMETER` | detail message | illegal parameter |
| `FAIL_TO_GET_SHOP_INFO` | detail message | fail to get shop info |
| `FAIL_TO_GET_VIDEO` | detail message | fail to get video |
| `FAIL_TO_DELETE_VIDEO` | detail message | fail to delete video |

**Example**

Request sample 1:

```
videoId=123456
```

Response sample 1:

```
success=true
result_code=ok
result_message=ok
```

---

## UploadVideoBlock

<a id="media-video-block-upload"></a>

- **Path**: `/media/video/block/upload`
- **Method**: `post`
- **Last modified**: 2022-07-29 15:34:44

The API is used to upload one block of origin video file. The video file can split into multiple files. For example, a 8MB video file can be split into three blocks. 3MB, 3MB and 2MB. These three blocks can be uploaded by calling UploadVideoBlock three times.

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `uploadId` · _String_ · **required** — return by calling InitCreateVideo
- `blockNo` · _String_ · **required** — the current block number, from 0 to N-1
- `blockCount` · _String_ · **required** — total block count of file
- `file` · _byte[]_ · **required** — binary content of the current block

**Response parameters**

- `success` · _Boolean_ · **required** — whether the operation succeeds
- `result_code` · _String_ · **required** — error code when the operation fails
- `e_tag` · _String_ · **required** — return e_tag for using in commit operation
- `result_message` · _String_ · **required** — error message when the operation fails

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Error codes**

| Code | Description | Solution |
| --- | --- | --- |
| `ILLEGAL_PARAMETER` | detail message | illegal parameter |
| `FAIL_TO_UPLOAD_BLOCK` | detail message | fail to upload block |

**Example**

Request sample 1:

```
uploadId=123456ABCD
blockNo=0
blockCount=3
file=binary
```

Response sample 1:

```
success=true
result_code=ok
e_tag=FF123456FF
result_message=ok
```

---

