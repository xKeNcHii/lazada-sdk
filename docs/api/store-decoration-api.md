# Store Decoration API

## GetStoreCustomPage

<a id="store-custom-page-get"></a>

- **Path**: `/store/custom/page/get`
- **Method**: `GET/POST`
- **Last modified**: 2022-08-02 16:33:03

GetStoreCustomPagevice

**Endpoints**

- **Vietnam**: https://api.lazada.vn/rest
- **Singapore**: https://api.lazada.sg/rest
- **Philippines**: https://api.lazada.com.ph/rest
- **Malaysia**: https://api.lazada.com.my/rest
- **Thailand**: https://api.lazada.co.th/rest
- **Indonesia**: https://api.lazada.co.id/rest

**Request parameters**

- `page` · _String_ · **required** — page
- `size` · _String_ · **required** — size
- `keyword` · _String_ · **optional** — Support keyword search

**Response parameters**

- `data` · _Object_ · **optional** — ellipsis
  - `result` · _Object_ · **optional** — Response results
    - `page_info` · _Object_ · **optional** — page info
      - `total_count` · _String_ · **optional** — Last release time
      - `current_page` · _String_ · **optional** — current page
    - `page_list` · _Object[]_ · **optional** — page list
      - `publish_time` · _String_ · **optional** — Last release time
      - `wireless_end_time` · _String_ · **optional** — Currently invalid
      - `wireless_page_preview_url` · _String_ · **optional** — Wireless page preview link
      - `pc_page_preview_url` · _String_ · **optional** — PC page preview link
      - `qr_url` · _String_ · **optional** — QR code preview link
      - `pc_end_time` · _String_ · **optional** — Currently invalid
      - `timed_publish_time` · _String_ · **optional** — Currently invalid
      - `relate_page_id` · _Number_ · **optional** — Associated page ID Return to wireless page by default This is the wireless associated PC page ID
      - `page_id` · _Number_ · **optional** — Page ID, Return to wireless page by default
      - `page_name` · _String_ · **optional** — page name
      - `path` · _String_ · **optional** — Page path
      - `client_type` · _String_ · **optional** — Page type: PC or wireless
      - `decorate_page_url` · _String_ · **optional** — Page decoration URL
      - `wireless_page_view_url` · _String_ · **optional** — Wireless page address
      - `page_view_url` · _String_ · **optional** — PC page address
      - `status_key` · _String_ · **optional** — Page status key
      - `last_edit_time` · _String_ · **optional** — Last edit time
  - `success` · _Boolean_ · **optional** — true or false
  - `error` · _String_ · **optional** — error
  - `error_message` · _String_ · **optional** — message

**Common parameters**

- `app_key` · _String_ · **required** — Unique app ID issued by LAZADA Open Platform console when you apply for an app category
- `timestamp` · _String_ · **required** — The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
- `access_token` · _String_ · **required** — API interface call credentials
- `sign_method` · _String_ · **required** — The HMAC hash algorithm you are using to calculate your signature
- `sign` · _String_ · **required** — Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068'>here</a> for details)

**Example**

Request sample 1:

```
page=1
size=10
keyword=TestMM
```

Response sample 1:

```
data=ellipsis
```

---

