# API Best Practice

## OMS integrate with Lazada

<a id="oms-integrate-with-lazada-121126"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10544&docId=121126&lang=en_US>

# What is OMS

An order management system (OMS) is a digital way to manage the lifecycle of an order.¹ It tracks all the information and processes, including order entry, inventory management, fulfillment and after\-sales service. An OMS offers visibility to both the business and the buyer. Organizations can have near real\-time insight into inventories and customers can check when an order will arrive.

# Why I need build an OMS to integrate with Lazada

- You have multiple stores in Lazada and other E\-commerce platform
- You want to link your own ERP with Lazadas stores.
- Have development resources, and hope to meet the needs of the company requirements through customization

# A basic OMS architecture

## System architecture

![](https://tida.alicdn.com/oss_1671004718439_null_RPOSI3Pg)

## Tech architecture

![](https://tida.alicdn.com/oss_1671004755883_null_HR1F5axL)

# How to develop OMS with Lazada OpenAPI

## Precondition

You should grant your OMS have Lazada stores access permission and a lazada open platform account.

- [Registration and Authorization process for newly registered ISVs](https://open.lazada.com/apps/doc/doc?nodeId=38138&docId=121098)
- [Seller authorization introduction](https://open.lazada.com/apps/doc/doc?spm=a1zq7z.man121098.site_detail.2.289f7c73NxrAyt&nodeId=10777&docId=108260)
- [Configure seller authorization](https://open.lazada.com/apps/doc/doc?nodeId=10434&docId=108056)

## Modules

### Product Management

Features:

- Add Product
- Edit Product
- Delete Product
- Update Product Price only
- Update Product stock only
- Active/Deactive Product

#### Basic flow of create product

![](https://tida.alicdn.com/oss_1671004819496_null_FpRmoUP9)

- [Get category attributes](https://open.lazada.com/apps/doc/doc?nodeId=30717&docId=120946)
- [Image Upload](https://open.lazada.com/apps/doc/doc?nodeId=30718&docId=120947)
- <Video Upload>
- [Create a product](https://open.lazada.com/apps/doc/doc?nodeId=30720&docId=120949)

 

 

You can also accept the Lazada message to update your product info in OMS. 

OMS can monitor the product info from Lazada to check if the product info (such as price) is different between Lazada and your OMS.

 

### Order Management

Features

- Pull Orders from Lazada
- Cancel Order
- RTS
- Print AWB
- Package Order
- Get Reverse Reasons

#### Basic flow of order management

![](https://tida.alicdn.com/oss_1671004877060_null_fq5XxaFb)

 

#### Best Practice of use Lazada order OpenAPI

- [Order Status Flow](https://open.lazada.com/apps/doc/doc?nodeId=29484&docId=120167)
- [Order management and processing](https://open.lazada.com/apps/doc/doc?nodeId=10548&docId=108143)

 

You can also accept the Lazada message to update your orders Status in OMS. OMS monitor the orders status change in Lazada such as buyers cancel the order. 

# Other features that can improve efficiency

## Integrate chat with lazada buyer within your own CRM sys

## Basic chat flow

![](https://tida.alicdn.com/oss_1671004916280_null_GtPC9LtH)

[Lazada IM Open API](https://www.yuque.com/barrieryouning/kb/oym4cz)

---

## Seller Notification

<a id="seller-notification-121735"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10544&docId=121735&lang=en_US>

# What is Seller Notification

Seller notifications refer to various types of shop related messages sent to sellers by Lazada. Such as order cancellation notifications, items sold out, etc.

# Seller Centre notification page

![](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1715650001669_V7trBKRm)

# Required API

**SellerCenterMsgList**

/sellercenter/msg/list

Note: Currently, only active enquiry is supported, no push service is provided.

## API Request Parameter Analysis

| Field name | Type | Required or not | Description |
| --- | --- | --- | --- |
| language | String | No | Set the language of API response, default response is English.ENUM: en\_US,en\_SG,th\_TH,id\_ID,vi\_VN,fil\_PH,ms\_MY.Note: If the current country or field does not support the requested language it will respond in English. |
| page | String | No | Current page number, default value: 1\. |
| pageSize | String | No | The number of messages that can be displayed on the current page. Default value: 10, Maximum value: 100\. |

## API Response Parameter Analysis

| Field name | Description |
| --- | --- |
| current | Number of current pages |
| total | Total number of notifications |
| pageSize | Current Page Size |
| appLink | Mobile link to the corresponding page in the Lazada Seller Centre |
| webLink | Link to the corresponding page in the web\-end Seller Centre |
| description | Content of the notice |
| title | Title of the notice |
| categoryName | Category name of the current messageENUM: Orders, Logistics, Store, System, Lazada Program, Learn \& Grow, Customer Care |
| picture | If the notification is accompanied by an image, a link to the image will be displayed here. |
| id | ID of the current notification |
| time | Time of publication of the notice |

## API Response Example

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "result": { "data": { "pageInfo": { "current": 1, "total": 1922, "pageSize": 2 }, "dataSource": \[ { "message\_content": { "appLink": "lazadaseller://com.sc.lazada/order/detail?orderId\=426156492043475", "webLink": "https://sellercenter.lazada.com.my/apps/order/detail?tradeOrderId\=426156492043475", "description": "Order Number: 426156492043475", "title": "You've got a new order", "categoryName": "Orders", "picture": "https://sg\-test\-11\.slatic.net/p/27d8c13365fad957be26147004b95c3c.jpg" }, "id": "6637458862986875594", "time": "10 minutes ago" }, { "message\_content": { "appLink": "lazadaseller://com.sc.lazada/order/v3/detail?orderid\=426169263243475", "webLink": "https://sellercenter.lazada.com.my/apps/order/list?oldVersion\=1\&spm\=a1zawf.23708326\.navi\_right\_sidebar.d\_combine\_my\_country.117d4edfrGPVMO\&status\=toRespond", "description": " Order Number:426169263243475", "title": "Cancellation request", "categoryName": "Logistics", "picture": "https://th\-live\-01\.slatic.net/p/d77dcd100239922b2ca1d93a52e9f2eb.png" }, "id": "6636045009145092834", "time": "32 minutes ago" } ] }, "success": true }, "code": "0", "request\_id": "2102ebef17155792298968514"}# Q\&A

## Why is the link displayed in "webLink" sometimes incomplete?

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL"message\_content": { "appLink": "lazadaseller://com.sc.lazada/lightpublish/presentSemi?productid\=4088796117", "webLink": "/apps/product/publish?productId\=4088796117\#sku", "description": "T.H.E. Short 7 NULUX Lined \- Solid ... is sold out, click to replenish or list another product.", "title": "Your product is out of stock! ", "categoryName": "Store"}Some of the modules cannot be fully linked for technical reasons, you can use the following domain names to complete the links in "webLink" according to your seller's country.

  

MY：https://sellercenter.lazada.com.my

ID：https://sellercenter.lazada.co.id

PH：https://sellercenter.lazada.com.ph

SG：https://sellercenter.lazada.sg

TH：https://sellercenter.lazada.co.th

VN：http://sellercenter.lazada.vn

---

## Lazada IM Open API

<a id="lazada-im-open-api-120971"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10544&docId=120971&lang=en_US>

## **1\. Workflow**

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误1_1721701641867__UQQr.jpg)

isv should use long\-pulling to make message push to seller realtime.

## **2 Messages**

### **2\.1 GetMessages**

PATH /im/message/list

#### **Request**

| **name** | **Type** | **Required** | **Demo Value** | **rule** | **Description** |
| --- | --- | --- | --- | --- | --- |
| session\_id | String | true | 100094063\_2\_1011822749\_1\_103 |  | session id |
| start\_time | long | true | 1555937067614 | when request the first page pls input current timestamp，get the next page pls input previous page response field`next_start_time` | begin timestamp |
| last\_message\_id | String | false | 24jFlAu0BtRbP47190 | it could be null when get the first page, get the next page pls input previous page response field`last_message_id` |  |
| page\_size | int | true | 20 | limit 20 | page size |

#### **Response**

  

| **name** | **Type** | **Demo Value** | **Description** |
| --- | --- | --- | --- |
| has\_more | Boolean | true | Identifies whether there has more page，use this field to determine whether you need to continue to pull |
| next\_start\_time | Long | 1624862839559 | the begin timestamp of next page，When pulling the next page, it needs to be passed in as an input parameter |
| last\_message\_id | String | 24jFlAu0BtRbP47190 | The ID of the last message on this page. When pulling the next page, it needs to be passed in as an input parameter |
| message\_list | Object\[] | \[] |  |
| \|\-message\_id | String | 1zYOS7N0cuIqw96026 | message id |
| \|\-content | String | {\\"txt\\":\\"你好\\",\\"translatText\\":\\"hello\\"} | message content in json format |
| \|\-from\_account\_id | String | 1891549323 | sender account id |
| \|\-from\_account\_type | Number | 1 | sender account type, 1 represents the buyer, 2 represents the seller |
| \|\-send\_time | long | 1596550789323 | message send timestamp |
| \|\-template\_id | Number | 1 | message template id,1: normal text message, 3: picture message, 4: emoji message, 10006: represents item message, 10007: represents order message 10008: represents voucher message10010: represents invite to follow message6: represents video message, use this [API](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193487.0.0.3ac413felykKHs#/api?cid=32&path=/media/video/get) to get video paly url |
| \|\-to\_account\_type | Number | 2 | receiver account type, 1 represents the buyer, 2 represents the seller |
| \|\-to\_account\_id | String | 231135951 | receiver account id |
| \|\-type | Number | 1 | 1: message come from user 2: message come from system |
| \|\-process\_msg | String | NOTE: The message has not been sent. Please be polite and aware that you are required to comply with local laws \& policies | If this field is not empty, it means that this message has not passed the security interception verification, which means that this message is only visible to the seller, and the ISV needs to display this prompt information to the seller on the screen |
| \|\-status | Number | 0 | 0: message status normal1: message has been recalled by sender |
| \|\-auto\_reply | Boolean | false | true: it is a auto reply message.false: it is not a auto reply message |
| \|\-site\_id | String | SG | country code |

  

### **2\.2 SendMessage**

  

PATH /im/message/send

#### **Request**

| **name** | **Type** | **Required** | **Demo Value** | **rule** | **Description** |
| --- | --- | --- | --- | --- | --- |
| template\_id | Number | true | 1 |  | message template id,1: normal text message 3: picture message4: emoji message10006: item message10007: order message10008: voucher message10010: invite buyers to follow the store6: video message, use this [API](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193487.0.0.3ac413felykKHs#/api?cid=32&path=/media/video/block/create) to upload video (The video duration is greater than 3s and less than 180s) |
| session\_id | String | true | 100094063\_2\_1011822749\_1\_103 |  | session id |
| txt | String | false | test message content |  |  |
| img\_url | String | false | <https://xxx.jpg> |  |  |
| width | Number | false | 10 |  |  |
| height | Number | false | 20 |  |  |
| item\_id | String | false | 1762013406 |  |  |
| ~~sku\_id~~ | ~~String~~ | ~~false~~ | ~~89123912~~ |  | not support |
| order\_id | String | false | 1762013406 |  |  |
| promotion\_id | String | false | 91471122606001 |  |  |
| video\_id | String | false | 3443534 |  |  |

1. text message example

template\_id: 1, session\_id: xxxxxx, txt: test

1. picture message example

template\_id: 3, session\_id: xxxxxx, imgUrl: [https://sg\-live.slatic.net/other/im/7e7a4185f2e3f27e071621067f321587\.png,](https://sg-live.slatic.net/other/im/7e7a4185f2e3f27e071621067f321587.png,) width: 445, height: 168

1. emoji message example

template\_id: 4, session\_id: xxxxxx, txt: \[confused]

1. item message example

template\_id: 10006, session\_id: xxxxxx, itemId: 1762013406

1. order message example

template\_id: 10007, session\_id: xxxxxx, orderId: 1762013406

1. Invite buyers to follow the store message example

Use this [API](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193495.0.0.74e8130cEbcqx4#/api?cid=2&path=/shop/follow/status/batch/query) to determine whether the buyer is a shop fan

template\_id: 10010, session\_id: xxxxxx

1. voucher message example

Use this [API](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193495.0.0.74e8130cEbcqx4#/api?cid=30&path=/promotion/vouchers/get) to get voucher list

template\_id: 10008, session\_id: xxxxxx, promotion\_id: 91471122422003

1. video message example

Use this [API](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193487.0.0.3ac413felykKHs#/api?cid=32&path=/media/video/block/create) to upload video

template\_id: 6, session\_id: xxxxxx, video\_id: 3334313, width:220, height: 720

#### **Response**

| **name** | **Type** | **Demo Value** | **Description** |
| --- | --- | --- | --- |
| message\_id | String | 21d0fLE0BtkPL79071 | message id |
| error\_code | String |  | 0 |
| error\_msg | String |  |  |

  

### **2\.3 RecallMessage**

PATH /im/message/recall

#### **Request**

| **name** | **Type** | **Required** | **Demo Value** | **rule** | **Description** |
| --- | --- | --- | --- | --- | --- |
| session\_id | String | true | 100094063\_2\_1011822749\_1\_103 |  | conversation id |
| message\_id | String | true | 21d0fLE0BtkPL79071 | 1）Cannot be recalled more than two minutes since the message has been sent2）system message could not be recalled | the id of message that need to be recalled |

#### **Response**

| **name** | **Type** | **Demo Value** | **Description** |
| --- | --- | --- | --- |
| error\_code | String |  | 0 |
| error\_msg | String |  |  |

  

## **3 Session**

  

### **3\.1 GetSessionList**

PATH /im/session/list

#### **Request**

| **name** | **Type** | **Required** | **Demo Value** | **rule** | **Description** |
| --- | --- | --- | --- | --- | --- |
| start\_time | Long | true | 1618991702208 | when pull first page pls input current timestamp，when pull next page pls input last page response field`next_start_time` | timestamp |
| last\_session\_id | String | false | 100094063\_2\_1011822321\_1\_103 | it could be null when pull first page，when pull next page pls input last page response field`last_session_id` | The id of the last conversation on the previous page |
| page\_size | Number | true | 20 | limit 20 | page size |

#### **Response**

| **name** | **Type** | **Demo Value** | **Description** |
| --- | --- | --- | --- |
| has\_more | boolean | true | Identifies whether there has more page，use this field to determine whether you need to continue to pull |
| next\_start\_time | String | 1618971891953 | the begin timestamp of next page，When pulling the next page, it needs to be passed in as an input parameter |
| last\_session\_id | String | 100094063\_2\_1011822321\_1\_103 | The last session id on this page, it needs to be passed in as an input parameter when pulling the next page |
| session\_list | Object\[] | \[] |  |
| \|\-session\_id | String | 100094063\_2\_1011822749\_1\_103 | session id |
| \|\-summary | String | test message | the summary of session |
| \|\-title | String | wangermazi | user nick name |
| \|\-head\_url | String | [https://sg\-live\-02\.slatic.net/p/0dc6fb4898f7e991bf44c45471dca9c9\.jpg](https://sg-live-02.slatic.net/p/0dc6fb4898f7e991bf44c45471dca9c9.jpg) | user head picture url |
| \|\-last\_message\_id | String | 21cZj5X0BtkHT42670 | last message id |
| \|\-last\_message\_time | Long | 1621495731445 | last message born time |
| \|\-buyer\_id | Long | 1011822749 | buyer userId |
| \|\-unread\_count | Number | 8 | unread count |
| \|\-self\_position | Long | 1621495410182 | self read time |
| \|\-to\_position | Long | 1621495410182 | The other party's read time |
| \|\-tags | List\<String\> | \["official"] | session tag |
| \|\-site\_id | String | SG | country code |

  

### **3\.2 GetSessionDetail**

  

PATH /im/session/get

#### **Request**

| **name** | **Type** | **Required** | **Sample** | **rule** | **Description** |
| --- | --- | --- | --- | --- | --- |
| session\_id | String | true | 100094063\_2\_1011822749\_1\_103 |  | session id |

#### **Response**

| **name** | **Type** | **Demo Value** | **Description** |
| --- | --- | --- | --- |
| \|\-session\_id | String | 100094063\_2\_1011822749\_1\_103 | session id |
| \|\-content | String | test message | session summary |
| \|\-title | String | wangermazi | buyer nick name |
| \|\-head\_url | String | [https://sg\-live\-02\.slatic.net/p/0dc6fb4898f7e991bf44c45471dca9c9\.jpg](https://sg-live-02.slatic.net/p/0dc6fb4898f7e991bf44c45471dca9c9.jpg) | buyer head url |
| \|\-last\_message\_id | String | 21cZj5X0BtkHT42670 | last message id of session |
| \|\-last\_message\_time | Long | 1621495731445 | last message send time of session |
| \|\-buyer\_id |  | 1011822749 | buyer user id |
| \|\-unread\_count | Number | 8 | unread count |
| \|\-self\_position | Long | 1621495410182 | self read time |
| \|\-to\_position | Long | 1621495410182 | The other party's read time |
| \|\-tags | List\<String\> | \["official"] | session tag |
| \|\-site\_id | String | SG | country code |

  

### **3\.3 ReadSession**

PATH /im/session/read

#### **Request**

| **name** | **Type** | **Required** | **Sample** | **rule** | **Description** |
| --- | --- | --- | --- | --- | --- |
| session\_id | String | true | 100094063\_2\_1011822749\_1\_103 |  | session id |
| last\_read\_message\_id | String | true | 1621498479918 |  | last message id of user readed |

#### **Response**

| **name** | **Type** | **Demo Value** | **Description** |
| --- | --- | --- | --- |
| data | Object | { "success": true, "err\_code": "0", "err\_message": "SUCCESS"} |  |

  

### **3\.4 OpenSession**

PATH /im/session/open

When the order created by the buyer in the store is not more than 7 days old, the seller can initiate a conversation. Use this API to get session\_id, and then invoke SendMessage API to send message.

#### **Request**

| **name** | **Type** | **Required** | **Sample** | **rule** | **Description** |
| --- | --- | --- | --- | --- | --- |
| order\_id | Long | true | 232432432423 |  | orderId |

#### **Response**

| **name** | **Type** | **Demo Value** | **Description** |
| --- | --- | --- | --- |
| session\_id | String | 100148681\_2\_500210868055\_1\_103 | unique id of a conversation |

## **4 Push**

### **4\.1 Message**

  

message body

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "session\_id" : "100094063\_2\_1011822749\_1\_103", "message\_id": "1zYOS7N0cuIqw96026", //messageId use to trace problem "content": "{\\"txt\\":\\"hello world!\\"}", "from\_account\_id": "1891549323",  "from\_account\_type": 1, // 2\=seller 1\=buyer "send\_time": 1596550789323,  "template\_id": 1, // 1\=txt card 2\=SystemTxt 3\=ImageCard "to\_account\_id": "231135951",  "to\_account\_type": 1, // 2\=seller 1\=buyer "type": 1, // 1\=userSend 2\=systemSend "site\_id": "SG", // country code "process\_msg": "xxxx", // If this field is not empty, it means that this message has not passed the security interception verification, which means that this message is only visible to the seller, and the ISV needs to display this prompt information to the seller on the screen "auto\_reply": false, // true: it is a auto reply message, false: it is not a auto reply message "status": 0 // 0: message status normal, 1: message has been recalled by sender}  

### **4\.2 Session Update**

  

message body

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "sync\_type": "SESSION\_UPDATE", // 事件类型 "user\_account\_id": "100094063", // 卖家账号id "user\_account\_type": 2, // 2\=seller 1\=buyer "session\_id": "100094063\_2\_1011822749\_1\_103", "unread\_count": 0, // 未读数 "to\_position": 1596550789323, // 对方已读时间 "self\_position": 1596550789323, // 己方已读时间 "site\_id": "SG"}  

## **5\. MessageConent**

  

### **templateId\=1 normal text**

normal text: {"txt":"${txt}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721702410874__NC1v.jpg)

crossborder seller normal text: 

{"translateTxt":"${translateTxt}","txt":"${txt}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721702441218__nzCg.jpg)

### **templateId\=2 system message**

{"txt":"${txt}","recallContent":"${recallContent}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706116926__WdSn.jpg)

message recall: 

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706136733__u7Ap.jpg)

### **templateId\=3 picture**

{"imgUrl":"${imgUrl}","osskey":"${osskey}","width":"${width}","height":"${height}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706153383__x3jY.jpg)

### **templateId\=4 emoji**

emoji: {"imgUrl":"${imgUrl}","smallImgUrl":"${smallImgUrl}","txt":"${txt}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706170824__BgbM.jpg)

#### **tab1**

icon：[https://sg\-live\-01\.slatic.net/other/im/dc9375aeaba4435212341c2c71bb2c52\.png](https://sg-live-01.slatic.net/other/im/dc9375aeaba4435212341c2c71bb2c52.png)

1. happy

{

 "txt": "\[happy]",

 "imgUrl": "[https://sg\-live.slatic.net/original/0e048d1c6d42835cdc386241b2a855c8\.png",](https://sg-live.slatic.net/original/0e048d1c6d42835cdc386241b2a855c8.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/30ff084a270eae973a02ec74e216ba51\.png"](https://sg-live.slatic.net/original/30ff084a270eae973a02ec74e216ba51.png")

}

1. veryhappy

{

 "txt": "\[veryhappy]",

 "imgUrl": "[https://sg\-live.slatic.net/original/bc42a3eff1a2ea9cda78e70ba85ca600\.png",](https://sg-live.slatic.net/original/bc42a3eff1a2ea9cda78e70ba85ca600.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/bfc697859931b2257f956680bff82a47\.png"](https://sg-live.slatic.net/original/bfc697859931b2257f956680bff82a47.png")

}

1. laughing

{

 "txt": "\[laughing]",

 "imgUrl": "[https://sg\-live.slatic.net/original/d66d57245a5a53bfce17c7ee9f305dea.png",](https://sg-live.slatic.net/original/d66d57245a5a53bfce17c7ee9f305dea.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/0bbb09ff7d823c4566044b615c0c214c.png"](https://sg-live.slatic.net/original/0bbb09ff7d823c4566044b615c0c214c.png")

}

1. smirking

{

 "txt": "\[smirking]",

 "imgUrl": "[https://sg\-live.slatic.net/original/35f56b5e6b4cb8cd7ece01a486990758\.png",](https://sg-live.slatic.net/original/35f56b5e6b4cb8cd7ece01a486990758.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/f62c5bdb92d703450d58733928a5e08e.png"](https://sg-live.slatic.net/original/f62c5bdb92d703450d58733928a5e08e.png")

}

1. inlove

{

 "txt": "\[inlove]",

 "imgUrl": "[https://sg\-live.slatic.net/original/c1af284b49ca2855b6250da001eb86ff.png",](https://sg-live.slatic.net/original/c1af284b49ca2855b6250da001eb86ff.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/87b1950d4a6f7e02d08065f2d2e9189c.png"](https://sg-live.slatic.net/original/87b1950d4a6f7e02d08065f2d2e9189c.png")

}

1. thumbsup

{

 "txt": "\[thumbsup]",

 "imgUrl": "[https://sg\-live.slatic.net/original/41bbcbce0b13176ad4cfa9781a935f30\.png",](https://sg-live.slatic.net/original/41bbcbce0b13176ad4cfa9781a935f30.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/f82b6725f3618cb4e9a90a35d043a75f.png"](https://sg-live.slatic.net/original/f82b6725f3618cb4e9a90a35d043a75f.png")

}

1. surprised

{

 "txt": "\[surprised]",

 "imgUrl": "[https://sg\-live.slatic.net/original/ed3e32239214313a5f88b7f5522e8009\.png",](https://sg-live.slatic.net/original/ed3e32239214313a5f88b7f5522e8009.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/81272c3b99b9ae6b719647ec68ab222d.png"](https://sg-live.slatic.net/original/81272c3b99b9ae6b719647ec68ab222d.png")

}

1. shocked

{ 

 "txt": "\[shocked]",

 "imgUrl": "[https://sg\-live.slatic.net/original/e795a481618af187f6b7df0f68feb527\.png",](https://sg-live.slatic.net/original/e795a481618af187f6b7df0f68feb527.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/b96d057d60b5d4df9471f6d021b10830\.png"](https://sg-live.slatic.net/original/b96d057d60b5d4df9471f6d021b10830.png")

}

1. sad

{ 

 "txt": "\[sad]",

 "imgUrl": "[https://sg\-live.slatic.net/original/1ba2df5142564a44966551027b9c6bbc.png",](https://sg-live.slatic.net/original/1ba2df5142564a44966551027b9c6bbc.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/a17e7b66e101f6eafff7ea27f63f31e6\.png"](https://sg-live.slatic.net/original/a17e7b66e101f6eafff7ea27f63f31e6.png")

}

1. crying

{

 "txt": "\[crying]",

 "imgUrl": "[https://sg\-live.slatic.net/original/6c7e93fd7740f72bfbccff77504a30d9\.png",](https://sg-live.slatic.net/original/6c7e93fd7740f72bfbccff77504a30d9.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/b37b721709875f5c4e245cf331da2987\.png"](https://sg-live.slatic.net/original/b37b721709875f5c4e245cf331da2987.png")

}

1. confused

{ 

 "txt": "\[confused]",

 "imgUrl": "[https://sg\-live.slatic.net/original/1eca1d0994cb93f2df2408ffa749c18d.png",](https://sg-live.slatic.net/original/1eca1d0994cb93f2df2408ffa749c18d.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/2e13c266a9e7fdd4d2a840e2a1939dd9\.png"](https://sg-live.slatic.net/original/2e13c266a9e7fdd4d2a840e2a1939dd9.png")

}

1. shy

{ 

 "txt": "\[shy]",

 "imgUrl": "[https://sg\-live.slatic.net/original/cc2b0c1db5ae9014de532155fb114a3e.png",](https://sg-live.slatic.net/original/cc2b0c1db5ae9014de532155fb114a3e.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/5986d2f2c30c09a981bf971485285aeb.png"](https://sg-live.slatic.net/original/5986d2f2c30c09a981bf971485285aeb.png")

}

1. angry

{

 "txt": "\[angry]",

 "imgUrl": "[https://sg\-live.slatic.net/original/3825aa88b59a9209053655fede4d1131\.png",](https://sg-live.slatic.net/original/3825aa88b59a9209053655fede4d1131.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/633bee4754d1e298dbf3a38053c75dd5\.png"](https://sg-live.slatic.net/original/633bee4754d1e298dbf3a38053c75dd5.png")

}

1. disgust

{

 "txt": "\[disgust]",

 "imgUrl": "[https://sg\-live.slatic.net/original/5b23d7bee1985418de4a084e72c16e47\.png",](https://sg-live.slatic.net/original/5b23d7bee1985418de4a084e72c16e47.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/e398d006343bfdf2efd665ac726604b3\.png"](https://sg-live.slatic.net/original/e398d006343bfdf2efd665ac726604b3.png")

}

1. heart

{

 "txt": "\[heart]",

 "imgUrl": "[https://sg\-live.slatic.net/original/9715a92a20bc87a07988eb4825bf15ca.png",](https://sg-live.slatic.net/original/9715a92a20bc87a07988eb4825bf15ca.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/original/012b57eeed968cf2787cd944ab733427\.png"](https://sg-live.slatic.net/original/012b57eeed968cf2787cd944ab733427.png")

}

#### **tab2**

icon：[https://sg\-live.slatic.net/other/im/edd7b121015dfc3743316c1e132cecb7\.png](https://sg-live.slatic.net/other/im/edd7b121015dfc3743316c1e132cecb7.png)

1. thank you

{ 

 "txt": "\[thank you]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/ac34173dd76c7b099064aa0859d9aeb8\.gif",](https://sg-live.slatic.net/other/im/ac34173dd76c7b099064aa0859d9aeb8.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/55db78f572521414ef5b98c1dfddf63f.png"](https://sg-live.slatic.net/other/im/55db78f572521414ef5b98c1dfddf63f.png")

}

1. cheer up

{

 "txt": "\[cheer up]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/901116c5359491b3bfe57fdb299f893f.gif",](https://sg-live.slatic.net/other/im/901116c5359491b3bfe57fdb299f893f.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/5e917d78922de317df3a25c2a3c13aa6\.png"](https://sg-live.slatic.net/other/im/5e917d78922de317df3a25c2a3c13aa6.png")

}

1. red pocket

{

 "txt": "\[red pocket]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/2ef57a7e72c344f5347da78efc704451\.gif",](https://sg-live.slatic.net/other/im/2ef57a7e72c344f5347da78efc704451.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/72c2d2a7da6b3481c9c19fe62fb17a3d.png"](https://sg-live.slatic.net/other/im/72c2d2a7da6b3481c9c19fe62fb17a3d.png")

}

1. yummy

{

 "txt": "\[yummy]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/122730d703f7ca3b27c73a97788eef9a.gif",](https://sg-live.slatic.net/other/im/122730d703f7ca3b27c73a97788eef9a.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/cb9f07cb5c7f6801ea1ce830d3397bd4\.png"](https://sg-live.slatic.net/other/im/cb9f07cb5c7f6801ea1ce830d3397bd4.png")

}

1. dance

{ 

 "txt": "\[dance]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/a87ad57918b0d593fbd97381afcbe5cf.gif",](https://sg-live.slatic.net/other/im/a87ad57918b0d593fbd97381afcbe5cf.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/c90c72a4a3f2fd71514cde42ee91a6bb.png"](https://sg-live.slatic.net/other/im/c90c72a4a3f2fd71514cde42ee91a6bb.png")

}

1. bye

{

 "txt": "\[bye]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/2a693f4624ae1491d6ba5743fd8a3ee9\.gif",](https://sg-live.slatic.net/other/im/2a693f4624ae1491d6ba5743fd8a3ee9.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/94cbeb5083a622e4d400e489371bbc14\.png"](https://sg-live.slatic.net/other/im/94cbeb5083a622e4d400e489371bbc14.png")

}

1. gift

{

 "txt": "\[gift]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/d9155fd8aff7b428d17c47d5fd8e9642\.gif",](https://sg-live.slatic.net/other/im/d9155fd8aff7b428d17c47d5fd8e9642.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/36d49a2e1eb206160f7de6a4d1000e73\.png"](https://sg-live.slatic.net/other/im/36d49a2e1eb206160f7de6a4d1000e73.png")

}

1. thirsty

{

 "txt": "\[thirsty]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/c999fa373bab823d8c3f1256d0e810cd.gif",](https://sg-live.slatic.net/other/im/c999fa373bab823d8c3f1256d0e810cd.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/6eaa18380e90d049228221d6425f8a7d.png"](https://sg-live.slatic.net/other/im/6eaa18380e90d049228221d6425f8a7d.png")

}

1. sleepy

{ 

 "txt": "\[sleepy]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/8cef0edb766d587e2cfd29c67e6a48e4\.gif",](https://sg-live.slatic.net/other/im/8cef0edb766d587e2cfd29c67e6a48e4.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/a278243d7012ae9bef524c11fc56ded6\.png"](https://sg-live.slatic.net/other/im/a278243d7012ae9bef524c11fc56ded6.png")

}

1. fountain

{ 

 "txt": "\[fountain]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/3d09b64b8fb3599e11f38602a080fc3e.gif",](https://sg-live.slatic.net/other/im/3d09b64b8fb3599e11f38602a080fc3e.gif",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/ee2d4cacb05ae9b26f56052d9bd782cc.png"](https://sg-live.slatic.net/other/im/ee2d4cacb05ae9b26f56052d9bd782cc.png")

}

#### **tab3**

icon：[https://sg\-live.slatic.net/other/im/daa33e1afebefd388e616e82a7dc2071\.png](https://sg-live.slatic.net/other/im/daa33e1afebefd388e616e82a7dc2071.png)

1. Lazzie yeah

{

 "txt": "\[Lazzie yeah]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/9506b5dfcad5de538d711dca50b379f3\.png",](https://sg-live.slatic.net/other/im/9506b5dfcad5de538d711dca50b379f3.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/f4ed96d29cbd41f16c30ec712c5cd9db.png"](https://sg-live.slatic.net/other/im/f4ed96d29cbd41f16c30ec712c5cd9db.png")

}

1. Lazzie gift

{

 "txt": "\[Lazzie gift]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/9f13596921fa5b2000a8266b557018a9\.png",](https://sg-live.slatic.net/other/im/9f13596921fa5b2000a8266b557018a9.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/b079af4db32da2e90ef8e394018958f3\.png"](https://sg-live.slatic.net/other/im/b079af4db32da2e90ef8e394018958f3.png")

}

1. Lazzie heart

{

 "txt": "\[Lazzie heart]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/b8fb565cb055897c3029b7cd011c9a6b.png",](https://sg-live.slatic.net/other/im/b8fb565cb055897c3029b7cd011c9a6b.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/dfb9e3ffcb5f9ee243276d4ad33eeb57\.png"](https://sg-live.slatic.net/other/im/dfb9e3ffcb5f9ee243276d4ad33eeb57.png")

}

1. Christmas

{

 "txt": "\[Christmas]",

 "imgUrl": "[https://sg\-live.slatic.net/other/im/1461eb044cbe81614582a83e8efa7bf7\.png",](https://sg-live.slatic.net/other/im/1461eb044cbe81614582a83e8efa7bf7.png",)

 "smallImgUrl": "[https://sg\-live.slatic.net/other/im/ca0af297239dd70e507fbd80ccc28f84\.png"](https://sg-live.slatic.net/other/im/ca0af297239dd70e507fbd80ccc28f84.png")

}

### **templateId\=10006 item message**

{"itemId":"${itemId}","price":"${price}","oldPrice":"${oldPrice}","actionUrl":"${actionUrl}","discount":"${discount}","iconUrl":"${iconUrl}","title":"${title}","skuId":"${skuId}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706218894__lQPD.jpg)

### **templateId\=10007 order message**

{"title":"${title}","content":"${content}","status":"${status}","iconUrl":"${iconUrl}","orderId":"${orderId}","actionUrl":"${actionUrl}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706235274__Shck.jpg)

  

### **templateId\=10008 coupon message**

{"period":"${period}","appBuyerUrl":"${appBuyerUrl}","sellerMasterUserId":"${sellerMasterUserId}","voucherType":"${voucherType}","discountUnit":"${discountUnit}","cardType":"${cardType}","actionUrl":"${actionUrl}","discount":"${discount}","discountAmount":"${discountAmount}","title":"${title}","pcSellerUrl":"${pcSellerUrl}","pcBuyerUrl":"${pcBuyerUrl}","sellerId":"${sellerId}","minOrderAmount":"${minOrderAmount}","voucherId":"${voucherId}","action":"${action}","appSellerUrl":"${appSellerUrl}","actionCode":"${actionCode}","currency":"${currency}","iconUrl":"${iconUrl}","currencyCode":"${currencyCode}","desc":"${desc}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706250420__fjZP.jpg)

### **templateId\= 10010 follow message**

The seller sends this message to guide the buyer to become a fan of the store

{"sellerId":"${sellerId}","mallIconUrl":"${mallIconUrl}","actionUrl":"${actionUrl}","action":"${action}","sellerUserId":"${sellerUserId}","targetUserId":"${targetUserId}","shopId":"${shopId}","iconUrl":"${iconUrl}","title":"${title}","desc":"${desc}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706265410__CG3z.jpg)

  

### **templateId\=10015 auto reply message**

{"txt":"${txt}","sellerId":"${sellerId}","sellerMasterUserId":"${sellerMasterUserId}","buyerUserId":"${buyerUserId}","actionSize":"${actionSize}","action1Txt":"${action1Txt}","action1Code":"${action1Code}","action2Txt":"${action2Txt}","action2Code":"${action2Code}","action3Txt":"${action3Txt}","action3Code":"${action3Code}","action4Txt":"${action4Txt}","action4Code":"${action4Code}","action5Txt":"${action5Txt}","action5Code":"${action5Code}","action6Txt":"${action6Txt}","action6Code":"${action6Code}","action7Txt":"${action7Txt}","action7Code":"${action7Code}","action8Txt":"${action8Txt}","action8Code":"${action8Code}","action9Txt":"${action9Txt}","action9Code":"${action9Code}","action10Txt":"${action10Txt}","action10Code":"${action10Code}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706284655__cQ0a.jpg)

  

### **templateId\=10011 Refund order card**

when buyer refun his order, seller will receive this msg card.

{ "subOrderIcon" : "${subOrderIcon}","subOrderSKU" : "${subOrderSKU}", "orderTotalCount" : "${orderTotalCount}", "orderTotalPrice" : "${orderTotalPrice}", "refundOrderDate" : "${refundOrderDate}", "viewUrl4Seller" : "${viewUrl4Seller}", "subOrderTitle" : "${subOrderTitle}", "title" : "{\\"${language}\\":\\"${title}\\"}", "subOrderPriceUnit" : "${subOrderPriceUnit}", "refundOrderReason" : "${refundOrderReason}", "viewAPPUrl4Buyer" : "${viewAPPUrl4Buyer}", "viewAPPUrl4Seller" : "${viewAPPUrl4Seller}", "refundOrderId" : "${refundOrderId}", "sellerId" : "${sellerId}", "subOrderCount" : "${subOrderCount}", "subOrderPrice" : "${subOrderPrice}", "buyerUserId" : "${buyerUserId}", "orderTotalPriceUnit" : "${orderTotalPriceUnit}", "viewUrl4Buyer" : "${viewUrl4Buyer}"}

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706301054__Lr50.jpg)

  

### **templateId\=6 Video message**

message content like this:

{"imgUrl":"[https://sg\-live.slatic.net/other/im/fff286502dddb18c004ce247ea87f387\.png","txt":"normal](https://sg-live.slatic.net/other/im/fff286502dddb18c004ce247ea87f387.png","txt":"normal) video.mp4","videoDuration":3,"videoUrl":"","width":720,"videoId":"30071484392","height":1280}

use this [API](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193487.0.0.3ac413felykKHs#/api?cid=32&path=/media/video/get) to get video play url.

  

## **6 Session validity**

1\) The conversation could be initiated by the buyer, and the seller can initiate the conversation if buyer has order within 7 days;

2\) The conversation is within the validity period. If the buyer does not reply to the message within a day, the seller can only send a maximum of 5 messages to the buyer; if the buyer has a reply, there is no limit on the number of times;

Session aging rules:![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误_1721706343565__Tt6E.jpg)

## **7 API best practices**

| /im/message/list | Please do not poll call these two interfaces, because there is a PUSH channel, the call volume of these two interfaces should be very low, if an ISV polling call is found, the API permissions will be immediately reclaimed.Best practice: After the seller successfully authorizes the ISV, it will trigger the synchronization of historical conversations and historical messages on the platform side (synchronize the conversations within one month and the total number does not exceed 3000, and each conversation synchronizes the messages within one month). It is recommended that ISV use these two interfaces to pull the seller’s historical conversations and historical messages within 10\-15 minutes after the seller’s authorization is completed. Do not call the interface after the authorization is completed, because the platform side has not yet synchronized the historical data. |
| --- | --- |
| /im/session/list |
| /im/message/send | The seller responds to the message in the ISV system, that is, the interface is called |
| /im/session/get | When the ISV receives the PUSH notification, it judges whether the session exists locally according to the session\_id field in the message body, and if it does not exist, the interface is called to synchronize the session. |
| /im/session/read | When the seller clicks on an unread conversation in the ISV system, this interface is called.The role of this interface:1\) The read status of the session is synchronized to the ASC, so that when the seller enters the ASC, the status of the session seen is consistent with the ISV system2\) Synchronize the read status of the seller session to the buyer |
| PUSH Message | After receiving the PUSH, the ISV should put the message body into its own MQ queue, and then give the pusher a response, and try to avoid synchronization after receiving the PUSH.In order to ensure the efficiency and sequence of MQ consumption, it is recommended that ISV set up multiple partions in the MQ queue and hash to different partions according to the session ID. |
| PUSH Session Update | when buyer read conversation or seller read conversation on ASC, ISV will receive the PUSH |

  

**Message recall**

1\) When seller recall the message, the ISV will receive two PUSHs, one is the message that has been recalled (status is 1\), and the other is the system message.

2\) When buyer recall the message, the ISV will receive two PUSHs, one is the message that has been recalled (status is 1\), and the other is the system message.

Therefore, the ISV needs to de\-duplicate according to the sessionId \+ messageId. After receiving the PUSH, if the messageId already exists in the database, the status of the message should be updated.

---

## Lazada大包揽收ISV_ERP接口

<a id="lazada-isv-erp-120191"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10544&docId=120191&lang=en_US>

### 一、概述

该文档只适用于中国区大陆卖家。

      先实现和对接能够满足业务基本需求的接口，然后再实现优化功能。

      为了让一些当前实操中尚没有组包流程的中小商家更容易接受，我们暂时不做小包\-大包\-交接单的三层关系，只实现小包\-大包的关联关系，也就是说可以认为，一个交接单只有一个大包，下文中提到的交接单其实基本等同于大包。

     

#### 1、大包创建

/logistics/cnpms/bigbag/commit

**（1）接口说明**

通过该接口提交大小包关系以及揽收、退货地址。

如选择集货点组包即type:pickup\_collection，则collectionInfo必填且非空，pickUpCode的取值通过集货点接口查询

菜鸟侧会对提交的小包做有效性校验，调用方应至少实现以下校验，减少以商家组包后的额外操作：

- 参加组包的小包必须已经成功RTS；
- 参加组包的小包状态不为取消状态；
- 目前大件海运包裹不提供官方揽收服务，应排除FM49的包裹。

此外，为避免揽收CP拒收，应对大包内的小包件数和大包重量作控制。

**（2）接口请求参数及响应内容**

[https://open.lazada.com/apps/doc/api?path\=%2Flogistics%2Fcnpms%2Fbigbag%2Fcommit](https://open.lazada.com/apps/doc/api?path=%2Flogistics%2Fcnpms%2Fbigbag%2Fcommit)

注：

揽收type新增选项：self\-send，如果是自行送货的商家，可以回传该类型

| **pickup type** | **组包页面可以选择的揽收方式** | **说明** |
| --- | --- | --- |
| cainiao\_pickup(菜鸟揽收) | 免费揽收 | 菜鸟揽收，包括免费揽收和付费揽收，这两种都是上门揽收 |
| 付费揽收 |
| pickup\_collection(集货) | 自送至集货点 | 集货是菜鸟在义乌，深圳，和泉州开的几个集货点，针对集货点附近的小商家，未达到免费揽收的条件，可以把货物自行送到这几个集货点，我们会从集货点统一送到当地的分拨中心 |
| self\_send（自送） | 自送至分拨中心 | 自送是商家您使用自己的工具（非第三方快递公司）将货物自行送至对应的分拨中心 |
| self\_post(自寄) | 快递至分拨中心 | 自寄是商家您这边自己找的快递，寄到我们的分拨中心 |

 

2）新增/修改字段

 

| **Name** | **Type** | **Required** | **Demo Value** | **Description** |
| --- | --- | --- | --- | --- |
| courierCompany | String | false | 申通 | 快递公司。可不回传 |
| receiverPhone | String | false | 1888888888 | 收件人手机号。 尽量回传，部分快递公司物流信息查询需要使用手机号，不回传可能会导致查询不到物流信息，自寄包裹无法上网从而影响时效 |
| fmReverseOption | String | false | 1 | 退件方式 1\-退回，2\-销毁 |
| sellerTrackingNumber | String | false | B20127000438 | 大包号/快递单号 当pickuptype\=自寄时，使用则该字段回传快递单号 |

#### 2、大包取消

/logistics/cnpms/bigbag/cancel

**（1）接口说明**

调用方通过该接口取消大包。即使商家没有取消大包，如果72小时后没有发生揽收，菜鸟系统在也会主动发起关单。

**（2）****接口请求参数及响应内容**

[https://open.lazada.com/apps/doc/api?path\=%2Flogistics%2Fcnpms%2Fbigbag%2Fcancel](https://open.lazada.com/apps/doc/api?path=%2Flogistics%2Fcnpms%2Fbigbag%2Fcancel)

#### 3、查询大包详情

/logistics/cnpms/bigbag/query

**（1）接口说明**

调用方通过该接口获取大包的履行状态，以及重量、费用等信息。

菜鸟还可以提供页面的方式展示大包的履行状态，如果需要可以与对接的同学联系。

**（2）****接口请求参数及响应内容**

[https://open.lazada.com/apps/doc/api?path\=%2Flogistics%2Fcnpms%2Faddress%2Fquery](https://open.lazada.com/apps/doc/api?path=%2Flogistics%2Fcnpms%2Faddress%2Fquery)

 

#### 4、获取面单PDF文件数据

/logistics/cnpms/bigbag/lable/getPdf

**（1）接口说明**

调用方通过该接口获取大包面单PDF数据的字节流信息

**（2）****接口请求参数及响应内容**

[https://open.lazada.com/apps/doc/api?path\=%2Flogistics%2Fcnpms%2Fbigbag%2Flable%2FgetPdf](https://open.lazada.com/apps/doc/api?path=%2Flogistics%2Fcnpms%2Fbigbag%2Flable%2FgetPdf)

 

#### 5、商家授权

/logistics/cnpms/account/bind

**（1）接口说明**

调用方通过该接口进行商家授权，实现跨店铺组包

**（2）****接口请求参数及响应内容**

[https://open.lazada.com/apps/doc/api?path\=%2Flogistics%2Fcnpms%2Faccount%2Fbind](https://open.lazada.com/apps/doc/api?path=%2Flogistics%2Fcnpms%2Faccount%2Fbind)

 

#### 6、地址查询

/logistics/cnpms/address/query

**（1）接口说明**

调用方通过该接口查询菜鸟标准地址库id，用于大包创建接口时指定地址id，对应的参数为returnInfo.addressId和pickupInfo.addressId

**（2）****接口请求参数及响应内容**

[https://open.lazada.com/apps/doc/api?path\=%2Flogistics%2Fcnpms%2Faddress%2Fquery](https://open.lazada.com/apps/doc/api?path=%2Flogistics%2Fcnpms%2Faddress%2Fquery)

 

#### 7、大包更新(暂时不要用)

/logistics/cnpms/bigbag/update

**(1\) 接口说明**

通过该接口更新实现对应大包新增小包的功能，实现大小包关系的更新绑定

**(2\) 接口请求参数及相应内容**

[https://open.lazada.com/apps/doc/api?path\=%2Flogistics%2Fcnpms%2Fbigbag%2Fupdate](https://open.lazada.com/apps/doc/api?path=%2Flogistics%2Fcnpms%2Fbigbag%2Fupdate)

注：

1、该接口，仅仅实现更新大包的大小包关系绑定功能

2、只允许在已提交、等待分配运单号，待揽收三个大包状态下进行更新操作

 

#### 8、集货点查询

/logistics/cnpms/bigbag/querycollection

**(1\) 接口说明**

通过该接口查询可用集货点信息

**(2\) 接口请求参数及相应内容**

[https://open.lazada.com/apps/doc/api?path\=%2Flogistics%2Fcnpms%2Fbigbag%2Fquerycollection](https://open.lazada.com/apps/doc/api?path=%2Flogistics%2Fcnpms%2Fbigbag%2Fquerycollection)

### 五、FAQ

#### 1、接口怎么对接？

文档中涉及的接口均通过Lazada开放平台进行对接、调用，Lazada开放平台的相关介绍及接口对接的详细方法见：

 

[https://open.lazada.com/apps/doc/doc?nodeId\=10534\&docId\=108130](https://open.lazada.com/apps/doc/doc?nodeId=10534&docId=108130)

 

#### 2、商家授权接口是做什么用的？需要在什么时候调用？

用于跨店铺组包场景，在调用大包创建接口时，系统会校验是否存在跨店铺组授权关系。

对于存量（已经授权）的商家，可在初次调用大包创建接口之前调用该接口进行批量授权，后续有新增授权时，再进行调用。

 

#### 3、appUserKey字段填什么？

接口里面的这个appUserKey并不是平台分配的，是ISV那边的一个值（这个值需要确保在ISV那里唯一，可以是商家在ISV那里的唯一ID）。

比如说有A、B、C、D四个商家。创建大包时A这个商家允许组B、C、D的包裹。那实际调用的接口逻辑为：

1、调商家授权接口，将B、C、D给A授权，appUserKey传A商家在你们那里的唯一值，我们这边记录授权关系。

2、以A商家为主体创建大包，大包中包含了A、B、C、D四个商家的包裹，调大包创建接口时，也向我们传这个appUserKey，我们在校验的时候就能知道A商家是允许组B、C、D的包裹

另：其实appUserKey也可以理解为分组的概念，表示一组授权关系

 

#### 4、client字段填什么？

接口调用方名称，不做强校验

ISV：ISV英文或拼音名称、商家ERP：SELLER\-商家英文或拼音名称

 

#### 5、我是免费Milkrun的商家，我应该怎么办？

开放平台中传递的sellerID判断是我们判断要把订单路由给免费揽收CP还是收费揽收CP的一个参数。所以如果你这边享受免费揽收服务，请在对接的时候尽量主动告知该情况，并把你们会在请求时使用到的sellerID清单提供给我们。

 

#### 6、addressID字段填什么？

addressID指的是商家地址所对应的地址库ID，我们需要根据这个ID判断揽收地址是否在揽收范围内，以及在哪个揽收CP的揽收范围内。

可通过地址查询接口进行查询（/logistics/cnpms/address/query）

#### 7、我们的实操流程中需要直接生成面单，不能调取你们的面单怎么办？

不同的揽收服务，可能解决的途径不同:

i.如果是免费揽收，可以通过把大包创建后我们返回的大包号和对应的条码展示在你们自己发货标签上明显位置，同时在单号和条码上方标注“揽收扫描条码”，方便司机扫描；也可以参考收费CP场景下的解决方案；

![](https://tida.alicdn.com/oss_1661505249799_null_3qgRfL7U)

ii.如果是收费揽收，可以先创建大包，调用面单PDF文件，然后使用更新接口更新大小包关系。

---

## Lazada Marketplace Ease Mode （MP商家半托管）API Reference

<a id="lazada-marketplace-ease-mode-mp-api-reference-121534"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10544&docId=121534&lang=en_US>

# 什么是Marketplace Ease Mode （MP商家半托管）

Marketplace Ease is a program in which merchants provide product supply prices, platform sales and order fulfilments by themselves. Orders payment are settled based on the product supply price, without any additional commissions or fees except during Mega Campaigns.

MarketPlace商家半托管模式是一个商家提供产品供货价、完成订单履约，Lazada平台制定销售价和负责营销的模式。根据产品供应价格结算，除了在Mega Campaign期间，没有额外的佣金或费用。

# MP半托管商家可调用的OpenAPI接口

| Feature Description | API Name | API Path |
| --- | --- | --- |
| Listing | CreateProduct | /product/create |
| Update Product | UpdateProduct | /product/update |
| Update Inventories | AdjustSellableQuantity | /product/stock/sellable/adjust |
| UpdateSellableQuantity | /product/stock/sellable/update |
| UpdatePriceQuantity | /product/price\_quantity/update |
| Brand | GetBrandByPages | /category/brands/query |
| Get Product Information | GetProductItem/GetProducts | /product/item/get/products/get |
| Upload Images | UploadImage | /image/upload |
| MigrateImage | /image/migrate |
| MigrateImages | /images/migrate |
| GetResponse | /image/response/get |
| Delete/Deactive Products | DeactivateProduct | /product/deactivate |
| RemoveSku | /product/sku/remove |
| RemoveProduct | /product/remove |
| Category | GetCategoryTree | /category/tree/get |
| GetCategoryAttributes | /category/attributes/get |
| GetCategorySuggestion/GetCategorySuggestionInBulk | /product/category/suggestion/get/product/category/suggestion/get/batch |
| GetQCAlertProducts | /product/qc/alert/list |
| SizeChart | GetSizeChartTemplate | /size/chart/template/get |
| BatchUpdateSizeChart | /size/chart/batch/update |
| Order | GetMultipleOrderItems | /orders/items/get |
| GetOrderItems | /order/items/get |
| GetOrder | /order/get |
| GetOrders | /orders/get |
| GetDocument | /order/document/get |
| SetInvoiceNumber | /order/invoice\_number/set |
| Fulfillment/Logistics | GetOrderTrace | /logistic/order/trace |
| Pack | /order/fulfill/pack |
| ReadyToShip | /order/package/rts |
| PrintAWB | /order/package/document/get |
| RecreatePackage | /order/package/repack |
| GetShipmentProvider | /order/shipment/providers/get |
| Seller | GetSeller | /seller/get |
| GetWarehouseBySellerId | /rc/warehouse/get |
| QueryWarehouseDetailInfoBySellerId | /rc/warehouse/detail/get |
| IM | GetMessages | /im/message/list |
| GetSessionDetail | /im/session/get |
| GetSessionList | /im/session/list |
| MessageRecall | /im/message/recall |
| OpenSession | /im/session/open |
| ReadSession | /im/session/read |
| SendMessage | /im/message/send |
| Finance | GetPayoutStatus | /finance/payout/status/get |
| QueryTransactionDetails | /finance/transaction/details/get |
| QueryAccountTransactions | /finance/transaction/accountTransactions/query |
| QueryLogisticsFeeDetail | /lbs/slb/queryLogisticsFeeDetail |

除上述接口外，其他OpenAPI接口调用均会报错

# 调用建议

## 1\. 商品管理

### 1\.1 查询可用的商品属性

创建和更新商品前，你需要知道你的商品属于哪个类目，该类目中有哪些属性可以使用。

### 1\.1\.1 查询类目树

在创建商品前，开发者需要先调用[GetCategoryTree](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Ftree%2Fget) API来获取Lazada的完整类目树

#### 字段描述

  

| 字段 | 描述 |
| --- | --- |
| children | Lazada的类目是梳妆结构的，如果当前类目存在子类目，那么将会展示在当前类目的"children"字段中。 |
| name | 类目名称。 |
| leaf | 枚举：true/false。用于检查当前类目名称是不是叶子类目，只有叶子类目(leaf \= true)才可以在创建商品或更新商品时使用。 |
| category\_id | 当前类目的ID，需要在创建或更新商品时使用此ID向Lazada声明当前商品的所属类目。 |

  

#### 响应示例

```
{
  "data": [
    {
      "children": [
        {
          "var": false,
          "name": "Smartphones",
          "leaf": true,
          "category_id": 3
        },
        {
          "var": false,
          "name": "Tablets",
          "leaf": true,
          "category_id": 7
        },
        {
          "var": false,
          "name": "Landline Phones",
          "leaf": true,
          "category_id": 49
        },
        {
          "var": false,
          "name": "Feature Phones",
          "leaf": true,
          "category_id": 42006401
        }
      ],
      "var": false,
      "name": "Mobiles & Tablets",
      "leaf": false,
      "category_id": 2
    }
    ......
  ]
}
```

**注**：不同国家的类目树和类目ID可能是不同的

### 1\.1\.2 查询类目属性

为了创建或更新产品，开发者需要依据上一步查询到的类目ID来请求[GetCategoryAttributes](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fattributes%2Fget) API，来查询完整的类目属性列表，以便于向卖家展示可编辑的属性。

#### 字段解析

  

| 字段名 | 字段描述 |
| --- | --- |
| is\_key\_prop | 当该字段值为1时，这意味着当前属性是一个商品的关键属性，填写该属性将会提高商品的评分。枚举：0/1 |
| is\_sale\_prop | 如果该字段值为1，这意味着当前属性是一个变体属性，该属性用于创建商品时区分SKU之间的规格或颜色等变体的属性。枚举：0/1 |
| name | 属性名称。当name作为属性名称出现时一定是英文。当name作为options属性枚举出现时，会根据请求时设置的language\_code来展示对应的语言。 |
| input\_type | 该字段决定了当前属性的输入限制，枚举如下：1: singleselect: 单选不可自定义；2: multiselect: 多选不可自定义（以逗号来区分多个选项）；3: enuminput: 既可以单选，也可以自定义输入；4: multienuminput: 既可以多选，也可以自定义输入；5: text: 仅支持输入文本；6: numeric: 仅支持输入数字；7: date: 仅支持输入日期；8: richText: 支持输入富文本，如HTML格式；9: img: 仅支持输入Lazada图片链接 |
| options | 当属性的input\_type是singleselect、multiselect、enuminput、multienuminput时，该字段将会以数组的形式展示所有的可选枚举。 |
| en\_name | options属性中的枚举名称，不论请求时language\_code设置任何语言，都将展示英文名称。 |
| is\_mandatory | 代表当前属性是否必填，当只为1时就是必填属性，在创建商品时不填写该属性将会报错。枚举：0/1 |
| attribute\_type | 用于描述当前属性是SKU级别还是SPU级别。当值为normal时，意味着这个属性是SPU级别的，不论当前商品有几个SKU，都只需要设置一次。当值为sku时，意味着这个属性是SKU级别的，当前商品如果有多个SKU，那么每个sku都需要设置一次。枚举：normal/sku |
| label | 前端展示给卖家的属性名称，无法在请求时作为参数使用。 |

  

#### 卖家中心展示示例

 ![](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1712717500300_V4aUM6fd)

#### 响应示例

```
{
    "data": [
        ......
        {
            "advanced": {
                "is_key_prop": 0
            },
            "is_sale_prop": 0,
            "name": "quantity",
            "input_type": "numeric",
            "is_mandatory": 0,
            "attribute_type": "sku",
            "label": "Bundle Size",
            "id": 21
        },
        {
            "advanced": {
                "is_key_prop": 0
            },
            "is_sale_prop": 0,
            "name": "price",
            "input_type": "numeric",
            "is_mandatory": 1,
            "attribute_type": "sku",
            "label": "Price",
            "id": 30106
        },
        {
            "advanced": {
                "is_key_prop": 0
            },
            "is_sale_prop": 0,
            "name": "special_price",
            "input_type": "numeric",
            "is_mandatory": 0,
            "attribute_type": "sku",
            "label": "Special Price",
            "id": 30047
        },
        {
            "advanced": {
                "is_key_prop": 0
            },
            "is_sale_prop": 0,
            "name": "description_en",
            "input_type": "richText",
            "is_mandatory": 0,
            "attribute_type": "normal",
            "label": "English Long Description (optional)",
            "id": 40036
        },
        {
            "advanced": {
                "is_key_prop": 0
            },
            "is_sale_prop": 0,
            "name": "name_en",
            "input_type": "text",
            "is_mandatory": 0,
            "attribute_type": "normal",
            "label": "Name in English language",
            "id": 40039
        }
    ],
    "code": "0",
    "request_id": "21222aec17066029964048645"
}
```

**注**

- 由于单个类目属性较多，这里就不全部展示了，开发者可以使用[API测试工具](https://isvconsole.lazada.com/apps/console/test_api?spm=a1zq7z.man.api_detail.2.11547c73m3JwXF#/category/attributes/get)来主动测试。
- 由于类目属性API不区分卖家类型，因此响应的将会是不同卖家的属性，半托管卖家无法使用其中的部分属性，具体为：price、special\_price、special\_from\_date、special\_to\_date；这些字段应修改为supply\_price，具体使用示例会在创建商品时展示。

### 1\.2 图片上传

Lazada商品使用的图片都必须是Lazada内链，因此在创建和更新商品前，开发者需要将卖家的本地图片或者外部图片链接使用API转换为Lazada内链。详情请参考[此文档](https://open.lazada.com/apps/doc/doc?nodeId=30718&docId=120947)。

### 1\.3 创建商品

根据前几步，我们得到了创建商品所需要的必要信息，将所有必要的信息组合为一个JSON payload并请求[Createproduc](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fcreate) API成功就完成了一个商品的创建。

#### Payload 示例

```
{
  "Request": {
    "Product": {
      "PrimaryCategory": "10002019",
      "Images": {
        "Image": [
          "https://my-live-02.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg"
        ]
      },
      "Attributes": {
        "name": "test 2022 02",
        "description": "TEST",
        "brand": "No Brand", //如果商品没有品牌，请填写No Brand。如需使用品牌，请先调用GetBrandByPages API检查对应品牌是否存在于Lazada品牌库。
        "model": "test",
        "warranty_type": "Local seller warranty",
        "warranty": "1 Month",
        "short_description": "cm x 1efgtecm<br /><brfwefgtek",
        "Hazmat": "None",
      },
      "Skus": {
        "Sku": [
          {
            "SellerSku": "test2022 02",
            "saleProp":{
                    "color_family":"Green",
                    "size":"10"
                    },
            "quantity": "3",
            "supply_price": "35",
            "package_height": "10",
            "package_length": "10",
            "package_width": "10",
            "package_weight": "0.5",
            "package_content": "laptop bag",
            "Status": "active",
            "Images": {
              "Image": [
                 "https://my-live-02.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg"
              ]
            }
          }
        ]
      }
    }
  }
}
```

#### 响应示例

```
{
    "data": {
        "item_id": 3069252927,
        "sku_list": [
            {
                "shop_sku": "3069252927_MY-15298395971",
                "seller_sku": "test2022 02",
                "sku_id": 15298395971
            }
        ]
    },
    "code": "0",
    "request_id": "2101554016564826049331260"
}
```

#### Payload参数解析

 ![](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1712717500846_W2SpAGtQ)

#### 字段解析

  

| 字段名 | 是否必填 | 字段描述 |
| --- | --- | --- |
| Images | Optional | 用于上传商品主图以及SKU图片。Images字段下一定要添加Image字段且值必须是字符串数组类型。将Images字段加入Sku参数中将会为当前SKU添加SKU图片。将Images字段加入Product参数中，将会为当前商品添加主图。每个Images字段仅能传入八张图片，并且不能重复。 |
| name | Mandatory | 商品名称。最大可输入255个字符。 |
| description | Optional | 最大可输入25000个字符。支持HTML格式富文本。仅支持Lazada内链，不允许其他外部链接。 |
| short\_description | Optional | 仅支持文本以及\<ul\> \<li\> 和 \<ol\> \<li\>标签。其他HTML标签不允许使用，将会被忽略。 |
| brand | 使用该字段则brand\_id选填 | 商品品牌名，可调用[GetBrandByPages API](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fbrands%2Fquery)查询。 |
| brand\_id | 使用该字段则brand选填 | 商品品牌对应Lazada品牌库的ID，可调用[GetBrandByPages API](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fbrands%2Fquery)查询。 |
| SellerSku | Mandatory | 卖家自定义的SKU编码，同一个商品的SKU质检不能重复。禁止以下特殊字符： \\"\*^\~\<\>/\|\\ |
| supply\_price | Mandatory | 商品供货价。 |
| package\_height | Mandatory | 最大支持小数点后三位。Unit:cm |
| package\_length | Mandatory | 最大支持小数点后三位。Unit:cm |
| package\_width | Mandatory | 最大支持小数点后三位。Unit:cm |
| package\_weight | Mandatory | 最大支持小数点后三位。Unit:kg |
| package\_content | Optional | 包裹内容 |
| saleProp | Optional | SKU的变体属性集合，如果一个商品需要有多个SKU，那么必须在这个字段中依据查询到的类目属性来定义变体属性或者自定义变体属性。如果不定义变体属性，那么一个商品只允许存在一个SKU。 |
| color\_family | Optional | 这是一个标准变体属性的示例，但是并不是通用的变体属性。不同的类目可能会有不同的变体属性如果当前类目没有标准变体属性或者没有你想要使用的标准变体属性，那么你可以使用自定义变体属性，详情请参考[此文档](https://open.lazada.com/apps/doc/doc?nodeId=30712&docId=120259)。 |

  

### 1\.4 更新商品

更新商品需要调用[UpdateProduct API](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fupdate)，API的参数与1\.3部分创建商品的Payload是相同的，但是大部分商品属性变更为非必填，不填不更新。只是在更新商品时，需要填入目标商品的sku id。

#### payload示例

```
{
  "Request": {
    "Product": {
      "Attributes": {
        "name": "test 2022 02",
      },
      "Skus": {
        "Sku": [
          {
            "SkuId": "15298395971",
            "quantity": "3",
            "package_content": "laptop bag",
            "Status": "active",
          }
        ]
      }
    }
  }
}
```

### 1\.5 库存管理

在更新库存前，建议前阅读[此文档](https://open.lazada.com/apps/doc/doc?nodeId=42714&docId=121233)理解Lazada的库存逻辑以及库存种类。

#### API请求示例

（除示例中的两个API外，其他API均不可更新半托管卖家的库存）

##### UpdateProduct API

```
{
  "Request": {
    "Product": {
      "Attributes": {},
      "Skus": {
        "Sku": [
          {
            "SkuId": "2351235125",
            "quantity": "3"
          }
        ]
      }
    }
  }
}
```

1. 在这里UpdateProduct API仅用于更新库存，因此删除了其他非库存相关的可更新字段；
2. UpdateProduct API不支持在一个请求中更新多个不同商品的SKU库存，单个请求中的所有SKU都应该属于同一个商品；
3. 数量不能是负数。

##### AdjustSellableQuantity API

```
<Request>
  <Product>
    <Skus>
      <Sku>
        <SkuId>234</SkuId>
        <SellableQuantity>-20</SellableQuantity>
      </Sku>
      <Sku>
        <SkuId>234</SkuId>
        <SellableQuantity>-20</SellableQuantity>
      </Sku>
    </Skus>
  </Product>
</Request>
```

1. 如果一个SKU的原始可售库存为20，那么在请求中将SellableQuantity设置为1时，最终该SKU的可售库存数量将被更新为21(20\+1\)；
2. 如果一个SKU的原始可售库存为20，那么在请求中将SellableQuantity设置为\-1时，最终该SKU的可售库存数量将被更新为19(20\+(\-1\))；
3. 更新后的最终可售库存结果必须大于或等于0；
4. 支持在一个请求中加入多个属于不同商品的SKU；
5. 单条请求最大可更新50个SKU，超过50个SKU将会报错，推荐单次更新20个SKU。

  

  

### 1\.6 尺码表

请参考[此文档](https://open.lazada.com/apps/announcement/detail?spm=a1zq7z.27201188.search_panel.3.13e47c73oEyNkc&docId=1951)

  

## 2\. 订单管理和履约

### 2\.1\. [Get Order](https://open.lazada.com/apps/doc/doc?nodeId=43452&docId=121327)

### 2\.2\. [Order Status Flow](https://open.lazada.com/apps/doc/doc?nodeId=29484&docId=120167)

### 2\.3\. Fulfillment orders

 ![](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1712717501354_irI8EwvB)

[Detail Document](https://open.lazada.com/apps/doc/doc?nodeId=43453&docId=121328)

---

## Lazada Marketplace Ease Mode API Reference

<a id="lazada-marketplace-ease-mode-api-reference-121541"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10544&docId=121541&lang=en_US>

# What is the Market Ease Model

Marketplace Ease is a program in which merchants provide product supply prices, platform sales and order fulfilments by themselves. Orders payment are settled based on the product supply price, without any additional commissions or fees except during Mega Campaigns.

# Market Ease Model OpenAPI List

| Feature Description | API Name | API Path |
| --- | --- | --- |
| Listing | CreateProduct | /product/create |
| Update Product | UpdateProduct | /product/update |
| Update Inventories | AdjustSellableQuantity | /product/stock/sellable/adjust |
| UpdateSellableQuantity | /product/stock/sellable/update |
| UpdatePriceQuantity | /product/price\_quantity/update |
| Brand | GetBrandByPages | /category/brands/query |
| Get Product Information | GetProductItem/GetProducts | /product/item/get/products/get |
| Upload Images | UploadImage | /image/upload |
| MigrateImage | /image/migrate |
| MigrateImages | /images/migrate |
| GetResponse | /image/response/get |
| Delete/Deactive Products | DeactivateProduct | /product/deactivate |
| RemoveSku | /product/sku/remove |
| RemoveProduct | /product/remove |
| Category | GetCategoryTree | /category/tree/get |
| GetCategoryAttributes | /category/attributes/get |
| GetCategorySuggestion/GetCategorySuggestionInBulk | /product/category/suggestion/get/product/category/suggestion/get/batch |
| GetQCAlertProducts | /product/qc/alert/list |
| SizeChart | GetSizeChartTemplate | /size/chart/template/get |
| BatchUpdateSizeChart | /size/chart/batch/update |
| Order | GetMultipleOrderItems | /orders/items/get |
| GetOrderItems | /order/items/get |
| GetOrder | /order/get |
| GetOrders | /orders/get |
| GetDocument | /order/document/get |
| SetInvoiceNumber | /order/invoice\_number/set |
| Fulfillment/Logistics | GetOrderTrace | /logistic/order/trace |
| Pack | /order/fulfill/pack |
| ReadyToShip | /order/package/rts |
| PrintAWB | /order/package/document/get |
| RecreatePackage | /order/package/repack |
| GetShipmentProvider | /order/shipment/providers/get |
| Seller | GetSeller | /seller/get |
| GetWarehouseBySellerId | /rc/warehouse/get |
| QueryWarehouseDetailInfoBySellerId | /rc/warehouse/detail/get |
| IM | GetMessages | /im/message/list |
| GetSessionDetail | /im/session/get |
| GetSessionList | /im/session/list |
| MessageRecall | /im/message/recall |
| OpenSession | /im/session/open |
| ReadSession | /im/session/read |
| SendMessage | /im/message/send |
| Finance | GetPayoutStatus | /finance/payout/status/get |
| QueryTransactionDetails | /finance/transaction/details/get |
| QueryAccountTransactions | /finance/transaction/accountTransactions/query |
| QueryLogisticsFeeDetail | /lbs/slb/queryLogisticsFeeDetail |

Other than the above APIs, all other OpenAPI interfaces report errors when called.

# Calling suggestions

## 1\. Product Management

### 1\.1 Query available product attributes

Before creating and updating items, you need to know which category your item belongs to and what attributes are available in that category.

### 1\.1\.1 Query Category Tree

Before creating a product, developers need to call the [GetCategoryTree API](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Ftree%2Fget) to get Lazada's full category tree first.

#### Field Description

  

| Field | Description |
| --- | --- |
| children | Lazada's categories are tree\-structured, and if there are children in the current category, they will be displayed in the "children" field of the current category. |
| name | Category Name. |
| leaf | Enum: true/false.Used to check if the current category name is a leaf category, only leaf categories (leaf \= true) can be used when creating a product or updating a product. |
| category\_id | The ID of the current category, you need to use this ID to declare to Lazada the category to which the current item belongs when you create or update the item. |

  

#### Response Example

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": \[ { "children": \[ { "var": false, "name": "Smartphones", "leaf": true, "category\_id": 3 }, { "var": false, "name": "Tablets", "leaf": true, "category\_id": 7 }, { "var": false, "name": "Landline Phones", "leaf": true, "category\_id": 49 }, { "var": false, "name": "Feature Phones", "leaf": true, "category\_id": 42006401 } ....... ], "var": false, "name": "Mobiles \& Tablets", "leaf": false, "category\_id": 2 } ]}**Note**：Category tree and category IDs may be different in different countries.

### 1\.1\.2 Query Category Attributes

In order to create or update a product, the developer needs to request the [GetCategoryAttributes API](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fattributes%2Fget) based on the category ID queried in the previous step to query the complete list of category attributes in order to display editable attributes to sellers.

#### Field Description

  

| Field | Description |
| --- | --- |
| is\_key\_prop | When the value of this field is 1, it means that the current attribute is a key attribute of an item and filling it in will increase the rating of the item.Enum: 0/1 |
| is\_sale\_prop | If the value of this field is 1, this means that the current attribute is a variant attribute, which is used to differentiate between SKUs when creating items with variants such as specification or color.ENUM: 0/1 |
| name | Attribute name.When name appears as an attribute name it must be English.When name appears as the options attribute enumeration, the corresponding language is displayed according to the language\_code set at the time of the request. |
| input\_type | This field determines the input restrictions for the current attribute, enumerated below:1: singleselect: single\-select is not customizable;2: multiselect: multiselect is not customizable (commas are used to separate multiple options);3: enuminput: both single\-select and customizable inputs;4: multienuminput: can be both multi\-selected and customized;5: text: only text input is supported;6: numeric: Supports only numeric input;7: date: only supports date input;8: richText: support input rich text, such as HTML format;9: img: only supports inputting Lazada image link. |
| options | When the attribute's input\_type is singleselect, multiselect, enuminput, multienuminput, the field will display all optional enumerations as an array. |
| en\_name | The name of the enumeration in the options attribute will be displayed in English regardless of the language\_code setting at the time of the request. |
| is\_mandatory | Indicates whether the current attribute is required or not, when it is 1, it is a required attribute, if you don't fill in the attribute when creating the product, it will report an error.Enum: 0/1 |
| attribute\_type | Used to describe whether the current attribute is SKU level or SPU level.When the value is normal, it means this attribute is SPU level, no matter how many SKUs the current product has, it only needs to be set once.When the value is sku, it means this attribute is SKU level, if the current product has more than one SKU, then each SKU needs to be set once.Enum：normal/sku |
| label | The name of the attribute that the front\-end displays to the seller cannot be used as a parameter in the request. |

  

#### Seller Center Display Example

![](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1712717533577_jiM0MW75)

#### Response Example

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": \[ ...... { "advanced": { "is\_key\_prop": 0 }, "is\_sale\_prop": 0, "name": "quantity", "input\_type": "numeric", "is\_mandatory": 0, "attribute\_type": "sku", "label": "Bundle Size", "id": 21 }, { "advanced": { "is\_key\_prop": 0 }, "is\_sale\_prop": 0, "name": "price", "input\_type": "numeric", "is\_mandatory": 1, "attribute\_type": "sku", "label": "Price", "id": 30106 }, { "advanced": { "is\_key\_prop": 0 }, "is\_sale\_prop": 0, "name": "special\_price", "input\_type": "numeric", "is\_mandatory": 0, "attribute\_type": "sku", "label": "Special Price", "id": 30047 }, { "advanced": { "is\_key\_prop": 0 }, "is\_sale\_prop": 0, "name": "description\_en", "input\_type": "richText", "is\_mandatory": 0, "attribute\_type": "normal", "label": "English Long Description (optional)", "id": 40036 }, { "advanced": { "is\_key\_prop": 0 }, "is\_sale\_prop": 0, "name": "name\_en", "input\_type": "text", "is\_mandatory": 0, "attribute\_type": "normal", "label": "Name in English language", "id": 40039 } ], "code": "0", "request\_id": "21222aec17066029964048645"}**Note**

1. Due to the large number of individual category attributes, not all of them are shown here, and developers can use the [API testing tool](https://isvconsole.lazada.com/apps/console/test_api?spm=a1zq7z.man.api_detail.2.11547c73m3JwXF#/category/attributes/get) to test them proactively.
2. Since the category attribute API does not distinguish between seller types, the response will be attributes of different sellers, and semi\-managed sellers cannot use some of these attributes, specifically: price, special\_price, special\_from\_date, special\_to\_date; these fields should be modified to supply\_price, the Specific usage examples will be shown when creating products.

### 1\.2 Image Upload

All images used in Lazada products must be Lazada inlinks, so before creating and updating products, developers need to convert sellers' local images or external image links to Lazada inlinks using the API. Please refer to [this document](https://open.lazada.com/apps/doc/doc?nodeId=30718&docId=120947) for more details.

### 1\.3 Create a product

According to the previous steps, we get the necessary information needed to create a product, combine all the necessary information into a JSON payload and request the [Createproduct API](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fcreate) successfully to complete the creation of a product.

#### Payload Example

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "Request": { "Product": { "PrimaryCategory": "10002019", "Images": { "Image": \[ "https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg" ] }, "Attributes": { "name": "test 2022 02", "description": "TEST", "brand": "No Brand", //If the product does not have a brand, please fill in No Brand //If you want to use a brand, please call GetBrandByPages API first to check whether the corresponding brand exists in Lazada brand library. "model": "test", "warranty\_type": "Local seller warranty", "warranty": "1 Month", "short\_description": "cm x 1efgtecm\<br /\>\<brfwefgtek", "Hazmat": "None" }, "Skus": { "Sku": \[ { "SellerSku": "test2022 02", "saleProp": { "color\_family": "Green", "size": "10" }, "quantity": "3", "supply\_price": "35", "package\_height": "10", "package\_length": "10", "package\_width": "10", "package\_weight": "0\.5", "package\_content": "laptop bag", "Status": "active", "Images": { "Image": \[ "https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg" ] } } ] } } }}#### Response Example

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": { "item\_id": 3069252927, "sku\_list": \[ { "shop\_sku": "3069252927\_MY\-15298395971", "seller\_sku": "test2022 02", "sku\_id": 15298395971 } ] }, "code": "0", "request\_id": "2101554016564826049331260"}#### Payload Parameter Analysis

![](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1712717534071_tMU9QidN)

#### Field Description

  

| Field | Mandatory | Description |
| --- | --- | --- |
| Images | Optional | Used to upload the main image of the product and SKU images.The Image field must be added under the Images field and the value must be of string array type.Adding Images field to Sku parameter will add SKU image for current SKU.Adding Images field to Product parameter will add main image for current product.Only eight images can be passed into each Images field, and they cannot be duplicated. |
| name | Mandatory | Trade Name.A maximum of 255 characters can be entered. |
| description | Optional | Maximum input of 25000 characters.Supports rich text in HTML format.Only Lazada internal links are supported, no other external links are allowed. |
| short\_description | Optional | Only text and \<ul\> \<li\> and \<ol\> \<li\> tags are supported.Other HTML tags are not allowed and will be ignored. |
| brand | Brand\_id is optional if this field is used. | The brand name of the product, which can be queried by calling the [GetBrandByPages API](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fbrands%2Fquery). |
| brand\_id | If this field is used, the brand field is optional. | The product brand corresponds to the ID of the Lazada brand library, which can be queried by calling the [GetBrandByPages API](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fbrands%2Fquery). |
| SellerSku | Mandatory | Seller's customized SKU code cannot be repeated for different SKUs of the same item.The following special characters are prohibited: \\"\*^\~\<\>/\|\\ |
| supply\_price | Mandatory | Product supply price. |
| package\_height | Mandatory | Maximum support for three decimal places.Unit:cm |
| package\_length | Mandatory | Maximum support for three decimal places.Unit:cm |
| package\_width | Mandatory | Maximum support for three decimal places.Unit:cm |
| package\_weight | Mandatory | Maximum support for three decimal places.Unit:kg |
| package\_content | Optional | Package Contents |
| saleProp | Optional | A collection of variant attributes for SKUs. If an item needs to have more than one SKU, then variant attributes must be defined or customized in this field based on the queried class attributes.If no variant attribute is defined, then only one SKU is allowed for an item. |
| color\_family | Optional | This is an example of a standard variant attribute, but not a generic variant attribute.Different categories may have different variant attributes.If the current category does not have a standard variant attribute or does not have a standard variant attribute that you want to use, then you can use a custom variant attribute, please refer to [this document](https://open.lazada.com/apps/doc/doc?nodeId=30712&docId=120259) for details. |

  

  

### 1\.4 Updated product

To update a product, you need to call [UpdateProduct API](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fupdate), the parameters of the API are the same as the 1\.3 part of the Payload for creating a product, but most of the product attributes are changed to non\-required, not filled in and not updated. When updating a product, you need to fill in the sku id of the target product.

#### Payload example

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "Request": { "Product": { "Attributes": { "name": "test 2022 02" }, "Skus": { "Sku": \[ { "SkuId": "15298395971", "quantity": "3", "package\_content": "laptop bag", "Status": "active" } ] } } }}### 1\.5 Inventory management

Before updating your inventory, it is recommended to read [this document](https://open.lazada.com/apps/doc/doc?nodeId=42714&docId=121233) to understand Lazada's inventory logic and the types of inventory.

#### API Request Example

(No other APIs can update the inventory of a Market Ease Model seller except the two in the example)

##### UpdateProduct API

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "Request": { "Product": { "Attributes": {}, "Skus": { "Sku": \[ { "SkuId": "2351235125", "quantity": "3" } ] } } }}1. In this example the UpdateProduct API is only used to update inventory, so other non\-inventory related updatable fields are removed;
2. The UpdateProduct API does not support updating SKU inventory for multiple different products in a single request; all SKUs in a single request should belong to the same product;
3. The quantity cannot be negative.

##### AdjustSellableQuantity API

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<Request\> \<Product\> \<Skus\> \<Sku\> \<SkuId\>234\</SkuId\> \<SellableQuantity\>20\</SellableQuantity\> \</Sku\> \<Sku\> \<SkuId\>234\</SkuId\> \<SellableQuantity\>\-20\</SellableQuantity\> \</Sku\> \</Skus\> \</Product\>\</Request\>1. If a SKU has an original SellableQuantity of 20, then when the SellableQuantity is set to 1 in the request, the final SellableQuantity for that SKU will be updated to 21(20\+1\);
2. If a SKU has an original SellableQuantity of 20, then when the SellableQuantity is set to \-1 in the request, the final SellableQuantity for that SKU will be updated to 19 (20\+(\-1\));
3. The updated final saleable inventory result must be greater than or equal to zero;
4. Supports adding multiple SKUs belonging to different products in a single request;
5. The maximum number of SKUs that can be updated in a single request is 50, more than 50 SKUs will report an error, it is recommended to update 20 SKUs in a single request.

### 1\.6 Size Chart

Please refer to [this document](https://open.lazada.com/apps/announcement/detail?spm=a1zq7z.27201188.search_panel.3.13e47c73oEyNkc&docId=1951).

## 2\. Order management and fulfillment

### 2\.1\. [Get Order](https://open.lazada.com/apps/doc/doc?nodeId=43452&docId=121327)

### 2\.2\. [Order Status Flow](https://open.lazada.com/apps/doc/doc?nodeId=29484&docId=120167)

### 2\.3\. [Fulfillment orders](https://open.lazada.com/apps/doc/doc?nodeId=43453&docId=121328)

![](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1712717534517_rSE14tnG)

---

## Product API Overview

<a id="product-api-overview-120945"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29614&docId=120945&lang=en_US>

# Product API Overview

This document is used to describe the classification and specific use of the product API

# 1、Category Attributes API

[API usage guide](https://open.lazada.com/apps/doc/doc?nodeId=10557&docId=108146)

## GetCategorySuggestion

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fcategory%2Fsuggestion%2Fget)

The category will be automatically recommended according to the product name

## GetCategoryTree

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Ftree%2Fget)

Use this API to get the complete category tree of lazada

## GetCategoryAttributes

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fattributes%2Fget)

Use this API to get available, required, and variant attributes in the target category.

## GetUnfilledAttributeItem(For cross boarder sellers Only)

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Funfilled%2Fattribute%2Fget)

Get the key attributes not filled in the attributes of the specified cross\-border product

# 2、Product Management API

## CreateProduct

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fcreate)

Use this API to create products or add new SKUs to existing product

## UpdateProduct

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fupdate)

Use this API to update product information (seller SKU cannot be changed)

## UpdatePriceQuantity

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fprice_quantity%2Fupdate)

Use this API to update SKU prices and total inventory

## UpdateSellableQuantity

[API Document](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193531.0.0.74596bbewLzLDk#/api?cid=5&path=/product/stock/sellable/update)

Use this API to update the sellable inventory of the sku in an overriding manner

## AdjustSellableQuantity

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fstock%2Fsellable%2Fadjust)

Use this API to update the sellable inventory of a sku in an additive or subtractive way

## RemoveProduct

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fremove)

Use this API to delete a product or sku

## DeactivateProduct

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fdeactivate)

Use this API to set the product or sku to deactive state

## SetImages

[API Documen](https://open.lazada.com/apps/doc/api?path=%2Fimages%2Fset)

Use this API to update images for variant SKUs

# 3、Image Upload

## MigrateImage

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fimage%2Fmigrate)

Use this API to convert an external image URL to a Lazada image URL

## MigrateImages

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fimages%2Fmigrate)

Use this API to upload up to eight external image URLs to Lazada for conversion

## GetResponse

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fimage%2Fresponse%2Fget)

Use this API to get the conversion results of the MigrateImages API

## UploadImage

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fimage%2Fupload)

Use this API to upload local images to generate lazada image URL

# 4、Video Upload

# GetVideoQuota

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fmedia%2Fvideo%2Fquota%2Fget)

Use this API to get the video space capacity available to sellers

## InitCreateVideo

[API Document](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.f1ae266bioXXeR#/api?cid=32&path=/media/video/block/create)

Use this API to set the filename and video size for local uploads

## UploadVideoBlock

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fmedia%2Fvideo%2Fblock%2Fcreate)

Use this API to upload videos in binary chunks

## CompleteCreateVideo

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fmedia%2Fvideo%2Fblock%2Fcommit)

Add video information to complete the video creation

## GetVideo

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fmedia%2Fvideo%2Fget)

Use video id to get the information of the successfully uploaded video

---

## JSON format DEMO

<a id="json-format-demo-120759"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29614&docId=120759&lang=en_US>

# APP Grayscale Time Schedule List:

| batch | Starting time | gray scale（%） |
| --- | --- | --- |
| first batch | 2022\.4\.13 | 5 |
| second batch | 2022\.4\.18 | 20 |
| The third batch | 2022\.4\.20 | 50 |
| fourth batch | 2022\.4\.25 | 100 |

  

# The list of supported APIs is as follows：

| API Titel | API Path |
| --- | --- |
| [CreateProduct](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fcreate) | /product/create |
| [UpdateProduct](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fupdate) | /product/update |
| [UpdatePriceQuantity](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fprice_quantity%2Fupdate) | /product/price\_quantity/update |
| [SetImages](https://open.lazada.com/apps/doc/api?path=%2Fimages%2Fset) | /images/set |
| [DeactivateProduct](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fdeactivate) | /product/deactivate |

  

# 1、CreateProduct API payload demo

```
{
    "Request": {
        "Product": {
            "PrimaryCategory": "10002019",
            "Images": {
              //must be in array type
                "Image": [
                    "https://sg-live-02.slatic.net/p/357*****ee06.jpg",
                    "https://sg-live-02.slatic.net/p/f16*****b0.png",
                    "https://sg-live-02.slatic.net/p/17559****ded4.jpg",
                    "https://sg-live-02.slatic.net/p/33a7*****8fb.jpg",
                    "https://sg-live-02.slatic.net/p/04****f6dd0.jpg",
                    "https://sg-live-02.slatic.net/p/f39****c8d48.jpg",
                    "https://sg-live-02.slatic.net/p/c4b****e43e.jpg",
                    "https://sg-live-02.slatic.net/p/5d42****d7.jpg"
                ]
            },
            "Attributes": {
                "name": "test product",
                "description": "test description",         
                "brand": "No Brand",
                "model": "test",
                "waterproof": "Waterproof",
                "warranty_type": "Local seller warranty",
                "warranty": "1 Month",
                "short_description": "",
                "Hazmat": "None",
                "material": "Leather",
                "laptop_size": "11 - 12 inches",
                "delivery_option_express": "Yes",
                "Delivery_Option_Instant": "Yes",
                "delivery_option_economy": "Yes",
                "delivery_option_standard": "YES",
                "delivery_option_sof": "No"
            },
            "Skus": {
              //must be in array type
                "Sku": [
                    {
                        "SkuId": "234523151512",
                        "quantity": "3",
                        "price": "35",
                        "package_height": "10",
                        "package_length": "10",
                        "package_width": "10",
                        "package_weight": "0.5",
                        "package_content": "laptop bag",
                        "Images": {
                          //must be in array type
                            "Image": [
                                "https://sg-live-02.slatic.net/p/3d****e.jpg"
                            ]
                        }
                    }
                ]
            }
        }
    }
}
```

# 2、UpdateProduct API payload demo

```
{
    "Request": {
        "Product": {
            "PrimaryCategory": "10002019",
            "ItemId": "2096962270",
            "Images": {
              //must be in array type
                "Image": [
                    "https://sg-live-02.slatic.net/p/35****06.jpg",
                    "https://sg-live-02.slatic.net/p/f16*****7b0.png"
                ]
            },
            "Attributes": {
                "name": "test product",
                "description": "test description",
                "brand": "No Brand",
                "model": "test",
                "waterproof": "Waterproof",
                "warranty_type": "Local seller warranty",
                "warranty": "1 Month",
                "short_description": "test description",
                "Hazmat": "None",
                "material": "Leather",
                "laptop_size": "11 - 12 inches",
                "delivery_option_express": "Yes",
                "Delivery_Option_Instant": "Yes",
                "delivery_option_economy": "Yes",
                "delivery_option_standard": "YES",
                "delivery_option_sof": "No"
            },
            "Skus": {
              //must be in array type
                "Sku": [
                    {
                        "SkuId": "234523151512",
                        "quantity": "3",
                        "price": "35",
                        "package_height": "10",
                        "package_length": "10",
                        "package_width": "10",
                        "package_weight": "0.5",
                        "package_content": "laptop bag",
                        "Images": {
                            "Image": [
                                "https://sg-live-02.slatic.net/p/3d93****8f52e.jpg"
                            ]
                        }
                    }
                ]
            }
        }
    }
}
```

# 3、UpdatePriceQuantity API payload demo

## 3\.1、single warehouse seller

```
{
    "Request": {
        "Product": {
            "Skus": {
              //If you need to update multiple SKUs, the attribute must be an array type
                "Sku": {
                    "ItemId": "1742512445",
                    "SkuId": "11781189655",
                    "SellerSku": "4240kyfd",
                    "Price": "878.00",
                    "SalePrice": "666.00",
                    "SaleStartDate": "2021-11-11",
                    "SaleEndDate": "2021-12-12"
                }
            }
        }
    }
}
```

## 3\.2、Multiple warehouse sellers

```
{
    "Request": {
        "Product": {
            "Skus": {
              //If you need to update multiple SKUs, the attribute must be an array type
                "Sku": {
                    "ItemId": "2053125344",
                    "SkuId": "11260762907",
                    "SellerSku": "61f951testdcdc",
                    "Price": "1099.00",
                    "SalePrice": "900.00",
                    "SaleStartDate": "2017-08-08",
                    "SaleEndDate": "2021-08-31",
                    "MultiWarehouseInventories": {
                        "MultiWarehouseInventory": [
                            {
                                "WarehouseCode": "123456",
                                "Quantity": "20"
                            },
                            {
                                "WarehouseCode": "789",
                                "Quantity": "30"
                            }
                        ]
                    }
                }
            }
        }
    }
}
```

# 4、SetImages API payload demo

```
{
    "Request": {
        "Product": {
            "Skus": {
                //must be an array type
                "Sku": [
                    {
                        "SkuId": "234523151512",
                        "Images": {
                            //must be an array type
                            "Image": [
                                "https://sg-live-02.slatic.net/p/e72c0a29206032ea64fced6eb566084f.jpg"
                            ]
                        }
                    }
                ]
            }
        }
    }
}
```

# 5、DeactivateProduct API payload demo

```
{
  "Request": {
    "Product": {
      "ItemId": 3865707451,
      "Skus": {
        "SkuId": [
          22332218421,
          22332218422
        ]
      }
    }
  }
}
```

---

## Custom sales attributes

<a id="custom-sales-attributes-120259"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29614&docId=120259&lang=en_US>

# 1、GetProductItemupgrade

PATH: /product/item/get

## 1\.1 Request Parameters

No change

## 1\.2 Response Parameters

### 1\.2\.1 Explain

| Level1 | Level2 | Level3 | Level4 | Description |
| --- | --- | --- | --- | --- |
| data | variation | Variation1 | name | Sales attribute names, such as color family, size, etc.Form a ref relationship with "color\_family" in the sku below. |
|  |  |  | hasImage | Sales attribute image settings, Only Variation1 Can set hasImage to true |
|  |  |  | customize | Whether to customize sales attributes |
|  |  |  | options | List of sales attribute value names |
|  |  | Variation2 | name |  |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |
|  |  | Variation3 | name | Very few cases will set this property. This attribute is not available for most categories |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |
|  |  | Variation4 | name | Very few cases will set this property. This attribute is not available for most categories |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |

  

### 1\.2\.2 DEMO

#### CASE1

Custom sales attributes (1\) \+ Standard sales attributes (1\) \+ SKU pictures

```
{
  "data": {
    "created_time": "1626242071000",
    "updated_time": "1626763060000",
    "images": [
      "https://sg-live-02.slatic.net/p/0ef9e15ad696adfc43333c646eec2ec4.jpg"
    ],
    "skus": [
      {
        "Status": "active",
        "quantity": 1,
        "Images": [
          "https://sg-live-02.slatic.net/p/42447e6aea05ea21f49f4f608b20b656.jpg"
        ],
        "SellerSku": "1884392091-1626242071365-0",
        "ShopSku": "1884392091_SGAMZ-10044238042",
        "Url": "https://www.lazada.sg/-i1884392091-s10044238042.html",
        "multiWarehouseInventories": [
          {
            "occupyQuantity": 0,
            "quantity": 1,
            "totalQuantity": 1,
            "withholdQuantity": 0,
            "warehouseCode": "dropshipping",
            "sellableQuantity": 1
          }
        ],
        "package_width": "1.00",
        "saleProp":{
          "color_family": "Maroon"
        },
        "package_height": "1.00",
        "fblWarehouseInventories": [],
        "special_price": 0.0,
        "price": 1000.0,
        "package_length": "1.00",
        "EditableQuantity": 1,
        "package_weight": "1",
        "Available": 1,
        "SkuId": 10044238042,
        "CustomProp1": "CustomOption1"
      },
      {
        "Status": "active",
        "quantity": 1,
        "Images": [
          "https://sg-live-02.slatic.net/p/0ef9e15ad696adfc43333c646eec2ec4.jpg"
        ],
        "SellerSku": "1884392091-1626242071365-1",
        "ShopSku": "1884392091_SGAMZ-10044238043",
        "Url": "https://www.lazada.sg/-i1884392091-s10044238043.html",
        "multiWarehouseInventories": [
          {
            "occupyQuantity": 0,
            "quantity": 1,
            "totalQuantity": 1,
            "withholdQuantity": 0,
            "warehouseCode": "dropshipping",
            "sellableQuantity": 1
          }
        ],
        "package_width": "1.00",
        "saleProp":{
          "color_family": "Maroon"
        },
        "package_height": "1.00",
        "fblWarehouseInventories": [],
        "special_price": 0.0,
        "price": 1000.0,
        "package_length": "1.00",
        "EditableQuantity": 1,
        "package_weight": "1",
        "Available": 1,
        "SkuId": 10044238043,
        "CustomProp1": "CustomOption2"
      }
    ],
    "item_id": 1884392091,
    "primary_category": 6583,
    "attributes": {
      "name": "Test Api Self Define Attributes By Boyan 0714001",
      "description": "<p style=\"margin: 0;\"><span style=\"font-family: none;\"></span></p>",
      "brand": "No Brand",
      "source": "asc",
      "delivery_option_sof": "0"
    },
    "variation": {
      "Variation1": {
        "name": "CustomProp1",
        "label": "CustomProp1",
        "hasImage": true,
        "customize": true,
        "options": [
          "CustomOption2",
          "CustomOption1"
        ]
      },
      "Variation2": {
        "name": "color_family",
        "label": "Color Family",
        "hasImage": false,
        "customize": false,
        "options": [
          "Maroon"
        ]
      }
    }
  },
  "code": "0",
  "request_id": "0be6f58116276233235264430"
}
```

  

#### CASE2

All standard sales attributes (2\)

```
{
  "data": {
    "created_time": "1626764445000",
    "updated_time": "1626869157000",
    "images": [
      "https://sg-live.slatic.net/p/42447e6aea05ea21f49f4f608b20b656.jpg"
    ],
    "skus": [
      {
        "Status": "active",
        "quantity": 1,
        "Images": [],
        "SellerSku": "1901875545-1626764445757-0",
        "ShopSku": "1901875545_SGAMZ-10164106501",
        "Url": "https://www.lazada.sg/-i1901875545-s10164106501.html",
        "multiWarehouseInventories": [
          {
            "occupyQuantity": 0,
            "quantity": 1,
            "totalQuantity": 1,
            "withholdQuantity": 0,
            "warehouseCode": "dropshipping",
            "sellableQuantity": 1
          }
        ],
        "package_width": "1.00",
        "saleProp":{
          "size": "34",
          "color_family": "red"
        },
        "package_height": "1.00",
        "fblWarehouseInventories": [],
        "special_price": 0.0,
        "price": 1000.0,
        "package_length": "1.00",
        "EditableQuantity": 1,
        "package_weight": "1",
        "Available": 1,
        "SkuId": 10164106501
      },
      {
        "Status": "active",
        "quantity": 2,
        "Images": [],
        "SellerSku": "1901875545-1626764445757-2",
        "ShopSku": "1901875545_SGAMZ-10164106503",
        "Url": "https://www.lazada.sg/-i1901875545-s10164106503.html",
        "multiWarehouseInventories": [
          {
            "occupyQuantity": 0,
            "quantity": 2,
            "totalQuantity": 2,
            "withholdQuantity": 0,
            "warehouseCode": "dropshipping",
            "sellableQuantity": 2
          }
        ],
        "package_width": "1.00",
        "saleProp":{
          "size": "34",
          "color_family": "Blue"
        },
        "package_height": "1.00",
        "fblWarehouseInventories": [],
        "special_price": 0.0,
        "price": 1000.0,
        "package_length": "1.00",
        "EditableQuantity": 2,
        "package_weight": "1",
        "Available": 2,
        "SkuId": 10164106503
      },
      {
        "Status": "active",
        "quantity": 1,
        "Images": [],
        "SellerSku": "1901875545-1626764445757-1",
        "ShopSku": "1901875545_SGAMZ-10164106502",
        "Url": "https://www.lazada.sg/-i1901875545-s10164106502.html",
        "multiWarehouseInventories": [
          {
            "occupyQuantity": 0,
            "quantity": 1,
            "totalQuantity": 1,
            "withholdQuantity": 0,
            "warehouseCode": "dropshipping",
            "sellableQuantity": 1
          }
        ],
        "package_width": "1.00",
        "saleProp":{
          "size": "38",
          "color_family": "Red"
        },
        "package_height": "1.00",
        "fblWarehouseInventories": [],
        "special_price": 0.0,
        "price": 1000.0,
        "package_length": "1.00",
        "EditableQuantity": 1,
        "package_weight": "1",
        "Available": 1,
        "SkuId": 10164106502
      },
      {
        "Status": "active",
        "quantity": 1,
        "Images": [],
        "SellerSku": "1901875545-1626764445757-3",
        "ShopSku": "1901875545_SGAMZ-10164106504",
        "Url": "https://www.lazada.sg/-i1901875545-s10164106504.html",
        "multiWarehouseInventories": [
          {
            "occupyQuantity": 0,
            "quantity": 1,
            "totalQuantity": 1,
            "withholdQuantity": 0,
            "warehouseCode": "dropshipping",
            "sellableQuantity": 1
          }
        ],
        "package_width": "1.00",
        "saleProp":{
          "size": "38",
          "color_family": "Blue"
        },
        "package_height": "1.00",
        "fblWarehouseInventories": [],
        "special_price": 0.0,
        "price": 1000.0,
        "package_length": "1.00",
        "EditableQuantity": 1,
        "package_weight": "1",
        "Available": 1,
        "SkuId": 10164106504
      }
    ],
    "item_id": 1901875545,
    "primary_category": 6583,
    "attributes": {
      "name": "Test API Self Define Attributes By Boyan 002",
      "description": "<p style=\"margin: 0;\"><span style=\"font-family: none;\"></span></p>",
      "brand": "No Brand",
      "source": "asc",
      "delivery_option_sof": "0"
    },
    "variation": {
      "Variation1": {
        "name": "color_family",
        "label": "Color Family",
        "hasImage": false,
        "customize": false,
        "options": [
          "Red",
          "Blue"
        ]
      },
      "Variation2": {
        "name": "Size",
        "label": "size",
        "hasImage": false,
        "customize": false,
        "options": [
          "34",
          "38"
        ]
      }
    }
  },
  "code": "0",
  "request_id": "0be6f58116276233682554431"
}
```

# 2\.CreateProduct

PATH: /product/create

  

## 2\.1 Request Parameters

### 2\.1\.1 Explain

| Level1 | Level2 | Level3 | Level4 | Description |
| --- | --- | --- | --- | --- |
| data | variation | Variation1 | name | Sales attribute names, such as color family, size, etc.Form a ref relationship with "color\_family" in the sku below. |
|  |  |  | hasImage | Sales attribute image settings, Only Variation1 Can set hasImage to true |
|  |  |  | customize | Whether to customize sales attributes |
|  |  |  | options | List of sales attribute value names |
|  |  | Variation2 | name |  |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |
|  |  | Variation3 | name | Very few cases will set this property. This attribute is not available for most categories |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |
|  |  | Variation4 | name | Very few cases will set this property. This attribute is not available for most categories |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |
|  | skus | Variation1\-name | Variation1\-options\[i] | Reference the name and option of the variation declaration as the sales attribute and sales attribute valueThe name field of Variation1/Variation2/Variation3/Variation4An option element of Variation1/Variation2Variation3/Variation4 |

### 2\.1\.2 Error

| Error Code | Error Message |
| --- | --- |
| VARIATION\_CATEGORY\_PROHIBITION | The category is banned from using variation function. |
| REMOVE\_SKU\_PROHIBITION | The seller is prohibited from using the remove SKU function. |
| VARIATION\_SELLER\_PROHIBITION | The seller is prohibited from using the variation function. |
| VARIATION\_EMPTY | The Variation is Empty |
| VARIATION\_SIZE\_LIMIT | The Variations Size Exceeds Maximum Size Limit, The Size Limit is: 2. |
| VARIATION\_CONTENT\_EMPTY | The Variation Content is Empty, The Variation Node is: *VariationX* |
| VARIATION\_NAME\_EMPTY | The Variation Name is Empty, The Variation Node is: *VariationX* |
| VARIATION\_IMAGE\_MUST\_SET\_VARIATION1 | Only Variation1 Can set hasImage to true, The Variation Node is: *VariationX* |
| VARIATION\_NAME\_DUPLICATE | The Variation Name Is Duplicate, The Variation Node is: *VariationX*, The Duplicate Name is: *nameX* |
| VARIATION\_NAME\_LENGTH\_LIMIT | The Variation Name's Content Exceeds Maximum Length Limit, The Variation Node is: *VariationX*, The Length Limit is: 15, The Name is:  *nameX* |
| VARIATION\_OPTIONS\_EMPTY | The Variation Options Is Empty, The Variation Node is: *VariationX* |
| OPTIONS\_SIZE\_LIMIT | The Variation Options Exceeds Maximum Size Limit, The Variation Node is: *VariationX*, The Size Limit is: 50, The Name is: *nameX* |
| VARIATION\_OPTION\_EMPTY | The Variation Option Is Empty, The Variation Node is: *VariationX* |
| VARIATION\_OPTION\_LENGTH\_LIMIT | The Variation Name's Content Exceeds Maximum Length Limit, The Variation Node is: *VariationX*, The Length Limit is: 20, The Option is: optionX; |
| VARIATION\_OPTION\_DUPLICATE | The Variation Option Is Duplicate, The Variation Node is: *VariationX*, The Duplicate Option is: *optionX, optionX* |
| VARIATION\_IMAGE\_SETTING\_ERROR | There is No HasImage Set In The *VariationX*, But Images Are Found In The SKU: " \+ sellerSKU |
| SKU\_VARIATION\_OPTION\_NOT\_EXIST | The SKU Variation Option is Not Exist, The SellerSKU is：*SellerSkuX*, The SKU Variation Name is: *nameX*, The SKU Variation Option is: *optionX* |
| SKU\_VARIATION\_NAME\_MISSING | The SKU Variation Name is Missing, The SellerSKU is：is：*SellerSkuX*, The Missing SKU Variation Name is: *nameX* |
| SKU\_VARIATION\_IMAGES\_MISSING | The Variation set hasImage true, But The SKU Not Found Images. The SellerSKU is: *SellerSkuX*, The Variation Name is: *nameX* |
| VARIATION\_CATEGORY\_SIZE\_IMAGE | When size is passed in as a standard category attribute, it is not allowed to set hasImage true. |
| VARIATION\_CATEGORY\_ATTRIBUTE\_INVALID | This attribute *nameX* is not found in the category attribute library. |

  

### 2\.1\.3 DEMO

#### CASE1

Create products with standard sales attributes

  

```
{
    "Request": {
        "Product": {
            "PrimaryCategory": "10002019",
            "Images": {
                "Image": [
                    "https://test.jpg",
                    "https://test1.jpg"
                ]
            },
            "variation": {
                "variation1": {
                    "name": "color_family",
                    "hasImage": true,
                    "customize": false,
                    "options": {
                        "option": [
                            "test"
                        ]
                    }
                }
            },
            "Attributes": {
                "name": "test product",
                "description": "test description",
                "brand": "No Brand",
                "model": "test",
                "warranty_type": "Local seller warranty",
                "warranty": "1 Month",
                "short_description": "test short description",
                "Hazmat": "None",
                "material": "Leather",
                "laptop_size": "11 - 12 inches",
                "delivery_option_sof": "No"
            },
            "Skus": {
                "Sku": [
                    {
                        "SellerSku": "chase test 8",
                        "quantity": "3",
                        "price": "35",
                        "saleProp":{
                                        "color_family": "test"
                                        },
                        "package_height": "10",
                        "package_length": "10",
                        "package_width": "10",
                        "package_weight": "0.5",
                        "package_content": "laptop bag",
                        "Images": {
                            "Image": [
                                "https://test.jpg"
                            ]
                        }
                    }
                ]
            }
        }
    }
}
```

  

#### CASE2

Standard sales attributes (1\) \+ custom sales attributes (1\)

```
{
    "Request": {
        "Product": {
            "PrimaryCategory": "10002019",
            "Images": {
                "Image": [
                    "https://test1.jpg",
                    "https://test2.jpg"
                ]
            },
            "variation": {
                "variation1": {
                    "name": "color_family",
                    "hasImage": true,
                    "customize": false,
                    "options": {
                        "option": [
                            "test"
                        ]
                    }
                },
                "variation2": {
                    "name": "test prop",
                    "hasImage": false,
                    "customize": true,
                    "options": {
                        "option": [
                            "test custom"
                        ]
                    }
                }
            },
            "Attributes": {
                "name": "test product",
                "description": "test description",
                "brand": "No Brand",
                "model": "test",
                "warranty_type": "Local seller warranty",
                "warranty": "1 Month",
                "short_description": "test short description",
                "Hazmat": "None",
                "material": "Leather",
                "laptop_size": "11 - 12 inches",
                "delivery_option_sof": "No"
            },
            "Skus": {
                "Sku": [
                    {
                        "SellerSku": "chase test 81",
                        "quantity": "3",
                        "price": "35",
                        "saleProp":{
                                        "color_family": "test",
                          "test prop": "test custom"
                                        },
                        "package_height": "10",
                        "package_length": "10",
                        "package_width": "10",
                        "package_weight": "0.5",
                        "package_content": "laptop bag",
                        "Images": {
                            "Image": [
                                "https://test.jpg"
                            ]
                        }
                    }
                ]
            }
        }
    }
}
```

  

## 2\.2 Response Parameters

No change

  

  

# 3\. UpdateProduct

PATH: /product/update

  

## 3\.1 Request Parameters

### 3\.1\.1Explain

| Level1 | Level2 | Level3 | Level4 | Description |
| --- | --- | --- | --- | --- |
| data | variation | Variation1 | name | Sales attribute names, such as color family, size, etc.Form a ref relationship with "color\_family" in the sku below. |
|  |  |  | hasImage | Sales attribute image settings, Only Variation1 Can set hasImage to true |
|  |  |  | customize | Whether to customize sales attributes |
|  |  |  | options | List of sales attribute value names |
|  |  | Variation2 | name |  |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |
|  |  | Variation3 | name | Very few cases will set this property. This attribute is not available for most categories |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |
|  |  | Variation4 | name | Very few cases will set this property. This attribute is not available for most categories |
|  |  |  | hasImage |  |
|  |  |  | customize |  |
|  |  |  | options |  |
|  | skus | Variation1\-name | Variation1\-options\[i] | Reference the name and option of the variation declaration as the sales attribute and sales attribute valueThe name field of Variation1/Variation2/Variation3/Variation4An option element of Variation1/Variation2Variation3/Variation4 |

### 3\.1\.2 Error

| Error Code | Error Message |
| --- | --- |
| VARIATION\_CATEGORY\_PROHIBITION | The category is banned from using variation function. |
| REMOVE\_SKU\_PROHIBITION | The seller is prohibited from using the remove SKU function. |
| VARIATION\_SELLER\_PROHIBITION | The seller is prohibited from using the variation function. |
| VARIATION\_EMPTY | The Variation is Empty |
| VARIATION\_SIZE\_LIMIT | The Variations Size Exceeds Maximum Size Limit, The Size Limit is: *2*. |
| VARIATION\_CONTENT\_EMPTY | The Variation Content is Empty, The Variation Node is: *VariationX* |
| VARIATION\_NAME\_EMPTY | The Variation Name is Empty, The Variation Node is: *VariationX* |
| VARIATION\_IMAGE\_MUST\_SET\_VARIATION1 | Only Variation1 Can set hasImage to true, The Variation Node is: *VariationX* |
| VARIATION\_NAME\_DUPLICATE | The Variation Name Is Duplicate, The Variation Node is: *VariationX*, The Duplicate Name is: *nameX* |
| VARIATION\_NAME\_LENGTH\_LIMIT | The Variation Name's Content Exceeds Maximum Length Limit, The Variation Node is: *VariationX*, The Length Limit is: 15, The Name is:  *nameX* |
| VARIATION\_OPTIONS\_EMPTY | The Variation Options Is Empty, The Variation Node is: *VariationX* |
| OPTIONS\_SIZE\_LIMIT | The Variation Options Exceeds Maximum Size Limit, The Variation Node is: *VariationX*, The Size Limit is: 50, The Name is: *nameX* |
| VARIATION\_OPTION\_EMPTY | The Variation Option Is Empty, The Variation Node is: *VariationX* |
| VARIATION\_OPTION\_LENGTH\_LIMIT | The Variation Name's Content Exceeds Maximum Length Limit, The Variation Node is: *VariationX*, The Length Limit is: 20, The Option is: optionX; |
| VARIATION\_OPTION\_DUPLICATE | The Variation Option Is Duplicate, The Variation Node is: *VariationX*, The Duplicate Option is: *optionX, optionX* |
| VARIATION\_IMAGE\_SETTING\_ERROR | There is No HasImage Set In The *VariationX*, But Images Are Found In The SKU: " \+ sellerSKU |
| SKU\_VARIATION\_OPTION\_NOT\_EXIST | The SKU Variation Option is Not Exist, The SellerSKU is：*SellerSkuX*, The SKU Variation Name is: *nameX*, The SKU Variation Option is: *optionX* |
| SKU\_VARIATION\_NAME\_MISSING | The SKU Variation Name is Missing, The SellerSKU is：is：*SellerSkuX*, The Missing SKU Variation Name is: *nameX* |
| SKU\_VARIATION\_IMAGES\_MISSING | The Variation set hasImage true, But The SKU Not Found Images. The SellerSKU is: *SellerSkuX*, The Variation Name is: *nameX* |
| VARIATION\_CATEGORY\_SIZE\_IMAGE | When size is passed in as a standard category attribute, it is not allowed to set hasImage true. |
| VARIATION\_CATEGORY\_ATTRIBUTE\_INVALID | This attribute *nameX* is not found in the category attribute library. |

  

### 3\.1\.3 DEMO

#### CASE1

No declaration of Variation \+ new SKU \+ no SKU picture (except for products containing custom sales attributes);

If you want to add a seller SKU to an existing product, you can refer to the example below；

AssociatedSku: One of the seller SKUs in the target product.

For Example:

If you want to add a C sku to product B, then the value of AssociatedSKU should be filled with A, and A is the seller SKU of product B.

```
{
    "Request": {
        "Product": {
            "ItemId": "2378974109",
            "AssociatedSku": "chase test 8",
            "Attributes":"",
            "Skus": {
                "Sku": [
                    {
                        "SkuId": "32523532543",
                        "quantity": "3",
                        "price": "35",
                        "saleProp":{
                                        "color_family": "test"
                                        },
                        "package_height": "10",
                        "package_length": "10",
                        "package_width": "10",
                        "package_weight": "0.5",
                        "package_content": "laptop bag"
                    }
                ]
            }
        }
    }
}
```

#### CASE2

No declaration of Variation \+ modification of standard sales attribute value \+ no SKU picture, Red \-\> Green

  

```
{
    "Request": {
        "Product": {
            "ItemId": "2378974109",
            "Attributes": "",
            "Skus": {
                "Sku": [
                    {
                        "SkuId": "32523532543",
                        "quantity": "3",
                        "price": "35",
                        "saleProp":{
                                        "color_family": "green"
                                        },
                        "package_height": "10",
                        "package_length": "10",
                        "package_width": "10",
                        "package_weight": "0.5",
                        "package_content": "laptop bag"
                    }
                ]
            }
        }
    }
}
```

  

#### CASE3

Declare Variation \+ Add custom sales attributes \+ No SKU image

```
{
    "Request": {
        "Product": {
            "ItemId": "2378974109",
            "Attributes": "",
            "variation": {
                "variation1": {
                    "name": "color_family",
                    "hasImage": false,
                    "customize": false,
                    "options": {
                        "option": ["red"]
                    }
                },
                "variation2": {
                    "name": "customProp1",
                    "hasImage": false,
                    "customize": true,
                    "options": {
                        "option": ["customOption1"]
                    }
                }
            },
            "Skus": {
                "Sku": [
                    {
                        "SkuId": "32523532543",
                        "quantity": "3",
                        "price": "35",
                        "saleProp":{
                                        "customProp1": "customOption1",
                          "color_family": "red"
                                        },
                        "package_height": "10",
                        "package_length": "10",
                        "package_width": "10",
                        "package_weight": "0.5",
                        "package_content": "laptop bag"
                    }
                ]
            }
        }
    }
}
```

## 3\.2 Response Parameters

No change

  

  

# 4\. RemoveSKU

PATH: /product/sku/remove

  

## 4\.1 Request Parameters

### 4\.1\.1 Explain

| Level1 | Level2 | Level3 | Level4 | Description |
| --- | --- | --- | --- | --- |
|  | ItemId |  |  | Product ID that needs to be deleted |
| data | variation | Variation1 | name | Sales attributes that need to be deleted |
|  |  | Variation2 | name | Sales attributes that need to be deleted |
|  |  | Variation3 | name | Sales attributes that need to be deleted |
|  |  | Variation4 | name | Sales attributes that need to be deleted |
|  |  | SellerSku |  | Sellersku that need to be deleted |

  

### 4\.1\.2 DEMO

#### CASE1

Delete SKU

```
<Request>
    <Product>
        <ItemId>2369252345</ItemId>
        <Skus>
            <Sku>
                <SkuId>1655712716757</SkuId>
            </Sku>
        </Skus>
    </Product>
</Request>
```

  

#### CASE2

Delete standard sales attributes

```
<Request>
    <Product>
        <ItemId>2378950489</ItemId>
        <variation>
            <variation1>
                <name>color_family</name>
            </variation1>
        </variation>
        <Skus>
            <Sku>
            </Sku>
        </Skus>
    </Product>
</Request>
```

#### CASE3

Delete custom sales attributes

```
<Request>
    <Product>
        <ItemId>1911687838</ItemId>
        <variation>
            <variation1>
                <name>CustomProp1</name>
            </variation1>
        </variation>
        <Skus>
            <Sku></Sku>
        </Skus>
    </Product>
</Request>
```

#### CASE4

Delete sales attributes \& delete SKU

```
<Request>
    <Product>
        <ItemId>1911687838</ItemId>
        <variation>
            <variation1>
                <name>color_family</name>
            </variation1>
        </variation>
        <Skus>
            <Sku>
                <SkuId>1655712716757</SkuId>
            </Sku>
        </Skus>
    </Product>
</Request>
```

  

## 4\.2 Response Parameters

### 4\.2\.1 ERROR

| Error Code | Error Message |
| --- | --- |
| REMOVE\_SKU\_PROHIBITION | The seller is prohibited from using the remove SKU function. |
| SALE\_PROPS\_DUPLICATE | Sale props is duplicate between sellerSku: *sellerSku1* and sellerSku: *sellerSku2* |
| SALE\_PROPS\_EMPTY | Sale props can not be set empty when remove sale props |
| SALE\_PROPS\_EMPTY | Sale props of the product id: *9999999* is 0, can not remove |
| CAN\_NOT\_REMOVE\_ALL\_SKU | Can not remove all sku |
| SELLER\_SKU\_NOT\_FOUND | sellerSku: *SellerSkuX* not found |

### 4\.2\.3 DEMO

```
{
  "code": "0",
  "request_id": "21411c9216560609727832359"
}
```

---

## Get category attributes

<a id="get-category-attributes-120946"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=120946&lang=en_US>

This document is used to introduce the getting, API usage and considerations related to product categories

# 1、GetCategoryTree

This API is used to get the complete category tree of Lazada

## Field Description

| Field Name | Field Description |
| --- | --- |
| children | List of subcategories of the current category ID |
| name | Category Name |
| leaf | Determine if the category is a leaf category, only leaf categories can be used to create products |
| category\_id | The ID of the current category, used when creating products or getting category attributes |

## Sample response

```
{
    "data": [
        {
            "children": [
                {
                    "var": false,
                    "name": "Smartphones",
                    "leaf": true,
                    "category_id": 3
                },
                {
                    "var": false,
                    "name": "Tablets",
                    "leaf": true,
                    "category_id": 7
                },
                {
                    "var": false,
                    "name": "Landline Phones",
                    "leaf": true,
                    "category_id": 49
                },
                {
                    "var": false,
                    "name": "Feature Phones",
                    "leaf": true,
                    "category_id": 42006401
                }
            ],
            "var": false,
            "name": "Mobiles & Tablets",
            "leaf": false,
            "category_id": 2
        }
      ......
    ]
}
```
  

## Sample Analysis

Lazada's product categories are tree\-structured, and only leaf nodes can be used to create products. You cannot use branch nodes to create products.

In the sample "leaf \= false" means a branch node, a children represents a branch, and a category may have multiple branches.

![image](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/18857002/1655882736301-837d3606-d84a-4ca1-b243-a36f2931aaa4.png "image")

# 2、GetCategoryAttributes

Use the category ID obtained in the GetCategoryTree API to find the available or required attributes of the target category.

## Field Description

| Field Name | Field Description |
| --- | --- |
| is\_key\_prop | If it is 1, it means that this attribute is a key attribute, and the product score will be improved after filling in |
| is\_sale\_prop | If it is 1, it indicates that this attribute is a standard sales/variant attribute |
| name | Attribute name.As an attribute name, it must be in English.As an option name, it may respond to the local language depending on the "language\_code" of the request. |
| input\_type | The type of value that can be entered for this attribute1: singleselect: single selection does not support customization2: multiselect: multiselect does not support customization3: enuminput: single choice supports customization4: multienuminput: multi selection supports customization5: text: text can be customized6: numeric: the value can be customized7: date: date can be customized8: richText: rich text can be customized9: img: pictures can be customized |
| options | Available options for enumerating attributes of type |
| en\_name | Option name, this field must be in English, if you need to fill in the enumeration when creating a product please use the value of this field |
| is\_mandatory | If it is 1, it means that this attribute is required |
| attribute\_type | If the value is "normal", this attribute should be filled in the "Attribute" field when creating or updating the product.If the value is "sku", this attribute should be filled in the "Sku" field when creating or updating the product. |
| label | Name of the field displayed in the seller center (this field cannot be used when creating or updating) |

## Example of seller center display

![image](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/18857002/1656311216964-c5ec31cf-f247-48aa-a8ea-16fea3ba6635.png "image")

## Sample response

```
{
  "data": [
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "description",
      "input_type": "richText",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Long Description (Lorikeet)",
      "id": 100005530
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "short_description",
      "input_type": "richText",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Short Description",
      "id": 100005505
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "name",
      "input_type": "text",
      "options": [],
      "is_mandatory": 1,
      "attribute_type": "normal",
      "label": "Name",
      "id": 100005571
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "video",
      "input_type": "text",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Video URL",
      "id": 100005577
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "__images__",
      "input_type": "img",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "Images",
      "id": 40000
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "color_thumbnail",
      "input_type": "img",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "Color Thumbnail",
      "id": 100007607
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "phone_type",
      "input_type": "enumInput",
      "options": [
        {
          "name": "Smartphone",
          "en_name": "Smartphone",
          "id": 21416
        },
        {
          "name": "feature phone",
          "en_name": "feature phone",
          "id": 106474
        }
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Phone Type",
      "id": 100007542
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "Plug_Type",
      "input_type": "enumInput",
      "options": [
        {
          "name": "Universal",
          "en_name": "Universal",
          "id": 1488
        },
        .......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Plug Type",
      "id": 120013475
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 1,
      "name": "color_family",
      "input_type": "multiEnumInput",
      "options": [
        {
          "name": "Olive",
          "en_name": "Olive",
          "id": 330
        },
        .......
      ],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "Color",
      "id": 100005683
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 1,
      "name": "storage_capacity_new",
      "input_type": "enumInput",
      "options": [
        {
          "name": "Not Specified",
          "en_name": "Not Specified",
          "id": 20884
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "Storage Capacity",
      "id": 100005939
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "sim_slots",
      "input_type": "singleSelect",
      "options": [
        {
          "name": "2",
          "en_name": "2",
          "id": 53248
        },
        .......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "SIM card Slots",
      "id": 100005874
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "power_consumption",
      "input_type": "enumInput",
      "options": [
        {
          "name": "5000 and Up",
          "en_name": "5000 and Up",
          "id": 72010
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Power Consumption",
      "id": 100005948
    },
    {
      "advanced": {
        "is_key_prop": 1
      },
      "is_sale_prop": 0,
      "name": "resolution",
      "input_type": "enumInput",
      "options": [
        {
          "name": "HD",
          "en_name": "HD",
          "id": 6896
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Resolution",
      "id": 100005887
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "warranty",
      "input_type": "enumInput",
      "options": [
        {
          "name": "4 Years",
          "en_name": "4 Years",
          "id": 54716
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Warranty",
      "id": 100005502
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "pixel_ppi",
      "input_type": "enumInput",
      "options": [
        {
          "name": "200-300 PPI",
          "en_name": "200-300 PPI",
          "id": 73907
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "PPI",
      "id": 100006073
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "package_content",
      "input_type": "text",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "What's in the box",
      "id": 100005496
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "camera_back",
      "input_type": "enumInput",
      "options": [
        {
          "name": "No Camera",
          "en_name": "No Camera",
          "id": 65634
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Primary(Back) Camera Resolution",
      "id": 100005944
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "network_connections",
      "input_type": "multiEnumInput",
      "options": [
        {
          "name": "3G",
          "en_name": "3G",
          "id": 55014
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Network Connections",
      "id": 100005819
    },
    {
      "advanced": {
        "is_key_prop": 1
      },
      "is_sale_prop": 0,
      "name": "display_size_mobile",
      "input_type": "enumInput",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Screen Size (inches)",
      "id": 100006049
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "phone_features",
      "input_type": "multiEnumInput",
      "options": [
        {
          "name": "Gyro",
          "en_name": "Gyro",
          "id": 20388
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Phone Features",
      "id": 100006060
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "brand",
      "input_type": "singleSelect",
      "options": [],
      "is_mandatory": 1,
      "attribute_type": "normal",
      "label": "Brand",
      "id": 20000
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "video_resolution",
      "input_type": "enumInput",
      "options": [
        {
          "name": "1080p",
          "en_name": "1080p",
          "id": 65341
        },
        ....
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Video Resolution",
      "id": 100006033
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "model",
      "input_type": "text",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Model",
      "id": 100005650
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "type_of_battery",
      "input_type": "enumInput",
      "options": [
        {
          "name": "Lithium polymer battery",
          "en_name": "Lithium polymer battery",
          "id": 55425
        },
        ....
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Type of Battery",
      "id": 100005788
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "camera_front",
      "input_type": "enumInput",
      "options": [
        {
          "name": "No Camera",
          "en_name": "No Camera",
          "id": 65634
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Camera Front",
      "id": 100005919
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "processor_type",
      "input_type": "enumInput",
      "options": [
        {
          "name": "NVIDIA",
          "en_name": "NVIDIA",
          "id": 1219
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Processor Type",
      "id": 100006040
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "input_voltage",
      "input_type": "enumInput",
      "options": [
        {
          "name": "Other",
          "en_name": "Other",
          "id": 53135
        },
        .......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Input Voltage",
      "id": 100005787
    },
    {
      "advanced": {
        "is_key_prop": 1
      },
      "is_sale_prop": 0,
      "name": "Number_of_Camera",
      "input_type": "enumInput",
      "options": [
        {
          "name": "Dual",
          "en_name": "Dual",
          "id": 780
        },
        .......
        {
          "name": "Single",
          "en_name": "Single",
          "id": 122942014
        }
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Number_of_Camera",
      "id": 120080601
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 1,
      "name": "Variation",
      "input_type": "text",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "Variation",
      "id": 120122201
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "screen_type",
      "input_type": "enumInput",
      "options": [
        {
          "name": "LCD",
          "en_name": "LCD",
          "id": 42547
        },
        {
          "name": "VGA",
          "en_name": "VGA",
          "id": 49297
        },
        {
          "name": "AMOLED",
          "en_name": "AMOLED",
          "id": 55012
        },
        {
          "name": "OLED",
          "en_name": "OLED",
          "id": 65324
        },
        {
          "name": "TFT LCD",
          "en_name": "TFT LCD",
          "id": 73760
        },
        {
          "name": "IPS LCD",
          "en_name": "IPS LCD",
          "id": 73761
        },
        {
          "name": "QVGA",
          "en_name": "QVGA",
          "id": 89540
        },
        {
          "name": "Super AMOLED HD",
          "en_name": "Super AMOLED HD",
          "id": 115235
        }
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Screen Type",
      "id": 100006086
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "condition",
      "input_type": "singleSelect",
      "options": [
        {
          "name": "NEW",
          "en_name": "NEW",
          "id": 12055
        },
        {
          "name": "Refurbish",
          "en_name": "Refurbish",
          "id": 65550
        },
        {
          "name": "Export",
          "en_name": "Export",
          "id": 65569
        },
        {
          "name": "Telco Set",
          "en_name": "Telco Set",
          "id": 65577
        }
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Condition",
      "id": 100005888
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "operating_system",
      "input_type": "enumInput",
      "options": [
        {
          "name": "Android",
          "en_name": "Android",
          "id": 3816
        },
        {
          "name": "iOS",
          "en_name": "iOS",
          "id": 54798
        },
        {
          "name": "Blackberry OS",
          "en_name": "Blackberry OS",
          "id": 54810
        },
        {
          "name": "Windows Mobile",
          "en_name": "Windows Mobile",
          "id": 123994292
        }
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Operating System",
      "id": 100005762
    },
    {
      "advanced": {
        "is_key_prop": 1
      },
      "is_sale_prop": 0,
      "name": "battery_capacity",
      "input_type": "enumInput",
      "options": [
        {
          "name": "Under 1000 mAh",
          "en_name": "Under 1000 mAh",
          "id": 106374
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Battery Capacity",
      "id": 100005965
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "mpn",
      "input_type": "text",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "MPN",
      "id": 100007628
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "ram_memory",
      "input_type": "enumInput",
      "options": [
        {
          "name": "1GB",
          "en_name": "1GB",
          "id": 54758
        },
        ......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "RAM memory",
      "id": 100005768
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "gtin",
      "input_type": "text",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "GTIN",
      "id": 100007627
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "warranty_type",
      "input_type": "singleSelect",
      "options": [
        {
          "name": "International Manufacturer Warranty",
          "en_name": "International Manufacturer Warranty",
          "id": 75172
        },
        ......
      ],
      "is_mandatory": 1,
      "attribute_type": "normal",
      "label": "Warranty Type",
      "id": 100005515
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "Name_CN",
      "input_type": "richText",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Name_CN",
      "id": 120188201
    },
    ......
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "product_warranty_en",
      "input_type": "text",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Warranty Policy (English)",
      "id": 100005503
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "package_length",
      "input_type": "numeric",
      "options": [],
      "is_mandatory": 1,
      "attribute_type": "sku",
      "label": "Package Length (cm)",
      "id": 100005497
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "Delivery_Option_Instant",
      "input_type": "singleSelect",
      "options": [
        {
          "name": "Yes",
          "en_name": "Yes",
          "id": 14800
        },
        {
          "name": "No",
          "en_name": "No",
          "id": 20776
        }
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Delivery Option",
      "id": 120074405
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "product_warranty",
      "input_type": "text",
      "options": [
        {
          "name": "Not Specified",
          "en_name": "Not Specified",
          "id": 20884
        },
        ......
        {
          "name": "Skinny",
          "en_name": "Skinny",
          "id": 72829
        }
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Warranty Policy",
      "id": 100005563
    },
    ......
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "SellerSku",
      "input_type": "text",
      "options": [],
      "is_mandatory": 1,
      "attribute_type": "sku",
      "label": "SellerSKU",
      "id": 100005546
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "Hazmat",
      "input_type": "multiSelect",
      "options": [
        {
          "name": "Liquid",
          "en_name": "Liquid",
          "id": 6026
        },
        .......
      ],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Dangerous Goods",
      "id": 100007127
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "special_from_date",
      "input_type": "date",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "Start date of promotion",
      "id": 100005523
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "special_price",
      "input_type": "numeric",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "sku",
      "label": "Special Price",
      "id": 100005528
    },
    {
      "advanced": {
        "is_key_prop": 0
      },
      "is_sale_prop": 0,
      "name": "name_ms",
      "input_type": "text",
      "options": [],
      "is_mandatory": 0,
      "attribute_type": "normal",
      "label": "Name (Malay)",
      "id": 100005573
    },
    .......
    }
  ],
  "code": "0",
  "request_id": "2101554016563075653198457"
}
```

---

## Create a product

<a id="create-a-product-120949"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=120949&lang=en_US>

# **Create Product Workflow**

![](https://alidocs.dingtalk.com/core/api/resources/img/5eecdaf48460cde52ef312c6b880d85132f96f361e0e04c975b8339e1c4c24831b75b38faadcd24bec177c308ebd53046e523c78283d930d194cfedeed0c6f7fb9da14a435a0ecd67b26e5584327e15a07e88bb89e35541d4fb4c8ed7016461c?tmpCode=c2245063-7b90-4daf-88e2-b107fd8f6406)

# **Create Product Example**

The category used in this example is the Smartphones category in Malaysia ("category\_id": 3\)

Note: The API request method is POST, so the request parameters other than the request URL need to be placed in the body to avoid the URL being too long and causing an error.

## **Json Request Example**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "Request": { "Product": { "PrimaryCategory": "10002019", "AssociatedSku":"Existing SkuId in seller center",  //When adding some SKUs to existing product,need to use this label "Images": { "Image": \[ "https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg" ] }, "disableAutoFillAttribute": false, "Attributes": { "propCascade": { "26": "120013644:162,100006867:160387" },  "name": "test 2022 02",  "description": "TEST", "brand": "No Brand", // "brand" will be deprecated please use "brand\_ id" "brand\_id":"30768",  "model": "test", "waterproof": "Waterproof", "warranty\_type": "Local seller warranty", "warranty": "1 Month", "short\_description": "cm x 1efgtecm\<br /\>\<brfwefgtek", "Hazmat": "None", "material": "Leather", "laptop\_size": "11 \- 12 inches", "delivery\_option\_sof": "No", "gift\_wrapping": "Yes", "name\_engravement": "Yes",  "preorder\_enable":"Yes",  "preorder\_days":"25" }, "Skus": { "Sku": \[ { "SellerSku": "test2022 02", "saleProp":{ "color\_family":"Green", "size":"10" }, "quantity": "3", "price": "35", "special\_price": "33", "special\_from\_date": "2022\-06\-20 17:18:31", "special\_to\_date": "2025\-03\-15 17:18:31", "package\_height": "10", "package\_length": "10", "package\_width": "10", "package\_weight": "0\.5", "package\_content": "laptop bag", "Images": { "Image": \[ "https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg" ] }, { "SellerSku": "test2022 02 \- 1", "saleProp":{ "color\_family":"Gree \- 1n", "size":"10 \- 1" }, ...... } ] } } }}## **XML Request Example**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<?xml version\="1\.0" encoding\="UTF\-8" ?\>\<Request\> \<Product\> \<PrimaryCategory\>3\</PrimaryCategory\> \<AssociatedSku\>Existing SKUID in seller center\</AssociatedSku\> \<!\-\-When adding some SKUs to existing product,need to use this label\-\-\> \<Images\> \<Image\>https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg\</Image\> \<Image\>https://my\-live\-02\.slatic.net/p/c905f479d04a3be36da4300ffd0abd87\.jpg\</Image\> \</Images\> \<Attributes\> \<name\>test 2022 026 29\</name\> \<description\>TEST Long Description\</description\> \<short\_description\>Test Short Description\</short\_description\> \<brand\>No Brand\</brand\> \<!\-\-"brand" will be deprecated please use "brand\_ id"\-\-\> \<brand\_id\>40516\</brand\_id\> \<disableAttributeAutoFill\>false\</disableAttributeAutoFill\> \<model\>N/A\</model\> \<video\>30073704787\</video\> \<phone\_type\>Smartphone\</phone\_type\> \<warranty\_type\>Local Manufacturer Warranty\</warranty\_type\> \<Hazmat\>None\</Hazmat\> \<gift\_wrapping\>Yes\</gift\_wrapping\> \<name\_engravement\>Yes\</name\_engravement\> \<preorder\_enable\>Yes\</preorder\_enable\> \<preorder\_days\>25\</preorder\_days\> \</Attributes\> \<Skus\> \<Sku\> \<SellerSku\>test2022 06 29 01\</SellerSku\> \<quantity\>3\</quantity\> \<price\>35\</price\> \<saleProp\> \<color\_family\>Green\</color\_family\> \<size\>10\</size\> \</saleProp\> \<special\_price\>33\</special\_price\> \<special\_from\_date\>2022\-06\-30 17:00:00\</special\_from\_date\> \<special\_to\_date\>2025\-03\-15 17:00:00\</special\_to\_date\> \<package\_height\>10\</package\_height\> \<package\_length\>10\</package\_length\> \<package\_width\>10\</package\_width\> \<package\_weight\>0\.5\</package\_weight\> \<package\_content\>laptop bag\</package\_content\> \<Images\> \<Image\>https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg\</Image\> \<Image\>https://my\-live\-02\.slatic.net/p/c905f479d04a3be36da4300ffd0abd87\.jpg\</Image\> \</Images\> \</Sku\> \<Sku\> \<SellerSku\>test2022 06 29 02\</SellerSku\> \<quantity\>3\</quantity\> \<price\>35\</price\> \<saleProp\> \<color\_family\>Green\</color\_family\> \<size\>11\</size\> \</saleProp\> \<special\_from\_date\>2022\-06\-30 17:00:00\</special\_from\_date\> \<special\_to\_date\>2025\-03\-15 17:00:00\</special\_to\_date\> \<package\_height\>10\</package\_height\> \<package\_length\>10\</package\_length\> \<package\_width\>10\</package\_width\> \<package\_weight\>0\.5\</package\_weight\> \<package\_content\>laptop bag\</package\_content\> \<Images\> \<Image\>https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg\</Image\> \<Image\>https://my\-live\-02\.slatic.net/p/c905f479d04a3be36da4300ffd0abd87\.jpg\</Image\> \</Images\> \</Sku\> \</Skus\> \</Product\>\<Request\>## **Response Example**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": { "item\_id": 3069252927, "sku\_list": \[ { "shop\_sku": "3069252927\_MY\-15298395971", "seller\_sku": "test2022 06 29 02", "sku\_id": 15298395971 }, { "shop\_sku": "3069252927\_MY\-15298395970", "seller\_sku": "test2022 06 29 01", "sku\_id": 15298395970 } ] }, "code": "0", "request\_id": "2101554016564826049331260"}## **Create Product Parameter Analysis**

### **Payload structure analysis image**

![](https://alidocs.dingtalk.com/core/api/resources/img/5eecdaf48460cde52ef312c6b880d85132f96f361e0e04c975b8339e1c4c24831b75b38faadcd24bec177c308ebd5304b57e81504c2e629228c7a407460cc9dbd563b7126b670881121cbf50ff84728ff7f93a30c7f6356e4fb4c8ed7016461c?tmpCode=c2245063-7b90-4daf-88e2-b107fd8f6406)

### **Partial field descriptions**

| Field Name | Require | Field Description |
| --- | --- | --- |
| Images | Optional | The Images property is used to upload images for this product.The Image field in the Images property must be of the array type, with a maximum of 8 images passed into each Image field.Putting Images in the sku attribute indicates that the image is a variant image, and putting it outside indicates an SPU image. |
| name | Mandatory | Product name.Maximum 255 characters. |
| AssociatedSku | Optional | In existing product,add some SKUs, this label is required for association.Note: the associated SKU must be displayed in the seller center normally |
| description | Optional | Maximum 25000 characters.HTML tags are allowed.Only Lazada image URLs are allowed, no external URLs. |
| short\_description | Optional | Only text.images and URLs will be automatically filtered;Short descriptions can only use \<ul\> \<li\> or \<ol\> \<li\> |
| brand | Mandatory | "brand" will be deprecated please use "brand\_ id" |
| brand\_id | Mandatory | Use the "brand\_id" field of the GetBrandByPages API as the value |
| video | Optional | After uploading the video, fill in the video id of the GetVideo or CompleteCreateVideo response, and the video status must be AUDIT\_SUCCESS |
| gift\_wrapping | Optional | Note: Whitelist function, if you need this function please contact PSC for more information.Enum: Yes/No |
| name\_engravement | Optional | Note: Whitelist function, if you need this function please contact PSC for more information.Enum: Yes/No |
| preorder\_enable | Optional | PreOrder switch for turning on or off products. ENUM: Yes/No |
| preorder\_days | Optional | When PreOrder is on, it is used to enter the estimated number of processing days. The maximum and minimum values will change with the seller. This range is configured by Lazada operations staff, please contact PSC if you need to change it. |
| disableAutoFillAttribute | Optional | When the field value is true, the auto\-fill feature will not be enabled.When creating products via the Open API endpoint, an auto\-fill mechanism (enabled by default) may automatically populate unused product attributes in the payload based on algorithmic recommendations.Enum: true/false(default) |
| SellerSku | Mandatory | Customizable by the seller, unique in the same item. |
| price | Mandatory | The retail price of the product, which will be displayed if the "special price" field is not filled or expired |
| special\_price | Optional | The actual sales price of the product, if the "special\_from\_date" and "special\_to\_date" fields are not filled in, then the validity time is Long Time(Permanent validity). |
| special\_from\_date | Optional | Special price start time.If this parameter is passed, then "special\_price" is mandatory. |
| special\_to\_date | Optional | Special price end time.If this parameter is passed, then "special\_price" is mandatory. |
| package\_height | Mandatory | Maximum two decimal places.Unit:cm |
| package\_length | Mandatory | Maximum two decimal places.Unit:cm |
| package\_width | Mandatory | Maximum two decimal places.Unit:cm |
| package\_weight | Mandatory | Maximum two decimal places.Unit:kg |
| package\_content | Optional | Package details |
| saleProp | Optional | Sales attributes are divided into "saleProp" fields under SKU, used to distinguish sales attributes or non sales attributes |
| color\_family | Optional | This is a standard variant attribute of this category, which is Optional when only one sku is created, but required when multiple sku are created.The standard variant property is different for each category, it may be "size" or something else, see [this document](https://open.lazada.com/apps/doc/doc?nodeId=30717&docId=120946) for an explanation of the "is\_sale\_prop" property.If the current category does not have a standard variant property, please refer to [this document](https://open.lazada.com/apps/doc/doc?nodeId=30712&docId=120259) to create a custom variant. |
| color\_thumbnail | Optional | Variant thumbnail tags, only available when the SKU variant is a standard sales attribute. |

 

## **What else needs to be done before creating a product？**

Get the category tree

Use this API to obtain the catalog library information of each country.

[API Usage Documentation](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Ftree%2Fget)

### **1、GetCategorySuggestion**

Get product's category suggestion by product title.

We strongly recommend you to include this step for the following reasons:

a. This feature helps you identify the most suitable categories of your listings from Lazada's category tree

b. Mis\-categorized products are subject to deactivation according to Lazada's policy

[API Usage Documentation](https://open.lazada.com/apps/doc/api?spm=a1zq7z.man120945.site_detail.2.21107c73zwPD8A&path=%2Fproduct%2Fcategory%2Fsuggestion%2Fget)

### **2、Get the attributes available for the target category**

After getting the category ID, use the category ID to call the GetCategoryAttributes API to get the attributes that can be filled in a category.

[API Usage Documentation](https://open.lazada.com/apps/doc/doc?nodeId=30717&docId=120946)

### **3、Get the brand id (if not, ignore)**

Call the GetBrandByPages API to get the list of lazada brands and extract the "brand\_id" field of the brand to be used and use it when creating the product.

Note: The brand list is different from country to country.

### **4、Upload images**

External image URLs or local images cannot be used directly when creating or updating products, please refer to this document to convert images to Lazada image URLs.

[API Usage Documentation](https://open.lazada.com/apps/doc/doc?nodeId=30718&docId=120947)

### **5、Upload video (if no video, please ignore)**

Please refer to this document to upload a video and get the video id.

[API Usage Documentation](https://open.lazada.com/apps/doc/doc?nodeId=30719&docId=120948)

---

## Image Upload

<a id="image-upload-120947"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=120947&lang=en_US>

Convert external image URLs to Lazada image URLs using local upload or URL upload

Note: Only Lazada image Urls can be used when products are created or updated

# Image requirements

Image size maxOriginalMediaByteSize: 3145728;

Maximum Image height maxOriginalImageHeight: 5000;

Maximum Image width maxOriginalImageWidth：5000;

Minimum image height minOriginalImageHeight：330;

Minimum image width minOriginalImageWidth：330;

Maximum image download time limit downloadMediaTimeoutMilliSec：5000；

Supported image formats：jpg、png;

Whether ip Image links are supported：false;

# URL verification requirements

1\. Only ports 80 and 443 are supported.

2\. Perform SSRF verification on the url

3\. Domain blacklist：

"^(http://)?10\.\*",

"^(http://)?11\.\*",

"^(http://)?192\.\*",

"^\*.sg94",

"^\*.id35"

# Usage examples

## Single image upload

### MigrateImage (Url migration)

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fimage%2Fmigrate)

#### Example of request

```
<?xml version="1.0" encoding="UTF-8"?>
<Request>     
  <Image>         
    <Url>http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg</Url>     
  </Image> 
</Request>
```
#### Example of response

```
{
  "data": {
    "image": {
      "url": "https://vn-live-02.slatic.net/original/bfee8ea9c4797ad704ff2b20323bc92c.jpg"
    }
  },
  "code": "0",
  "request_id": "2101554016563124475412756"
}
```
### UploadImage（Local Upload）

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fimage%2Fupload)

#### Example of request

Parse the image to be uploaded as "byte\[]" and put it in the body

#### Example of response

```
{
  "data": {
    "image": {
      "hash_code": "9d06c8f1b19c16231757dae10ab97673",
      "url": "https://id-live-02.slatic.net/p/9d06c8f1b19c16231757dae10ab97673.jpg"
    }
  },
  "code": "0",
  "request_id": "212237bd16563140630542742"
}
```
## Batch image migration

Batch image migration is done by a combination of MigrateImages API and GetResponse API calls.

1、The MigrateImages API is called first to upload the URL of the image to be migrated to Lazada and get the "batch\_id" in the response.

2、Then call GetResponse API with "batch\_id" to get the migration result and the migrated URL.

### MigrateImages

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fimages%2Fmigrate)

Note: up to eight pictures can be migrated each time

#### Example of request

```
<?xml version="1.0" encoding="UTF-8" ?>
<Request>
  <Images>
    <Url>https://img.alicdn.com/imgextra/i2/O1CN016gf7Y02129uqj6A8a_!!6000000006926-0-tps-846-512.jpg</Url>
    <Url>https://img.alicdn.com/imgextra/i3/O1CN01QkEL7m1XNk6kf1PNx_!!6000000002912-0-tps-790-469.jpg</Url>
  </Images>
</Request>
```
#### Example of response

```
{
  "batch_id": "2122317116563149177325379d074f",
  "code": "0",
  "request_id": "2122317116563149177322306"
}
```
### GetResponse

Do not call this API immediately after calling MigrateImages API, wait for half a second or so before calling this API to get the migrated URL.

#### Example of request

https://api.lazada.co.id/rest/image/response/get?batch\_id\=2122317116563149177325379d074f\&app\_key\=1\*\*\*\*2\&sign\_method\=sha256\&access\_token\=50000300c23r\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*U9RFEZ2\&timestamp\=1656315445286\&sign\=A77170123D8904CBB452FDE069FB22ADC60DE479A58B6C5E901223E81762233B

#### Example of response

```
{
  "data": {
    "images": [
      {
        "hash_code": "d85ac36cd40368715f9de77146c636f5",
        "url": "https://id-live-02.slatic.net/p/d85ac36cd40368715f9de77146c636f5.jpg"
      },
      {
        "hash_code": "83008ad9816428e14732200072f6f6e4",
        "url": "https://id-live-02.slatic.net/p/83008ad9816428e14732200072f6f6e4.jpg"
      }
    ]
  },
  "code": "0",
  "request_id": "2122317116563154453228884"
}
```

---

## Video Upload

<a id="video-upload-120948"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=120948&lang=en_US>

Use these API to upload video content into Lazada Media Center through this API and get the corresponding VideoID. After that, user can attach the videoID on CreateProduct or UpdateProduct step when listing products on Lazada.

![image](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/18857002/1656318126013-519041ca-bb62-48a1-8e65-884a87edaa61.png?x-oss-process=image%2Fresize%2Cw_1500 "image")

# API call example

## 1、InitCreateVideo

Initiate a create video task, response the upload ID. (Max video size: 100mb)

### Example of request

https://api.lazada.com.my/rest/media/video/block/create?fileName\=VID\_20220627\_173223\.mp4\&fileBytes\=794969\&app\_key\=100132\&sign\_method\=sha256\&access\_token\=500002000230jwavWuhdy\*\*\*\*\*\*\*\*\*\*\*\*\*\*AyXEEjj\&timestamp\=1656396886224\&sign\=C86D63CD8037FDF9286EF6E6279A2FF633DD8FCF92454E4980E2085A2ED941A6

![image](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/18857002/1656397079378-b7c166df-5b09-4ddc-8498-3e1d8f3106c2.png "image")

### Example of response

```
{
  "upload_id": "670A237D27694CFDA74CDE6EC1A99FA5",
  "result_message": "",
  "success": true,
  "result_code": "",
  "code": "0",
  "request_id": "21411dbe16563968862437448"
}
```
## 2、UploadVideoBlock

This API is used to upload video files, if the video file is large then it needs to be uploaded in binary chunks.

For example, an 8MB video file needs to be split into chunks of size 3MB, 3MB and 2MB in binary cut, and then requested in three times.

### Example of request

https://api.lazada.com.my/rest/media/video/block/upload?blockCount\=1\&uploadId\=6F963A22F0124EBC8B079638357DA012\&blockNo\=0\&app\_key\=100132\&sign\_method\=sha256\&access\_token\=50000201609zpuehtgzrl103de538ZdCwhpTxeHeJnwjr0oh1AsqCtxPJ8c2\&timestamp\=1656323464114\&sign\=27B1F421503C03C2A1933D897AAA3474AC61E7F2DF589BD3D1F96060E33946E3

![image](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/18857002/1656397257606-2e83c07a-6ab7-4a9b-86ef-e07095c8cfa8.png "image")

### Example of response

```
{
  "result_message": "",
  "success": true,
  "result_code": "",
  "e_tag": "61F4949269F20AF4D1025F5825552FC3",
  "code": "0",
  "request_id": "2102ebef16563971593057981"
}
```
## 3、**CompleteCreateVideo**

Calling this API will combine the binary blocks uploaded when calling the uploadvideoblock API and generate a complete video.

### Example of request

Note: the value of "partNumber" starts from 1

https://api.lazada.com.my/rest/media/video/block/commit?coverUrl\=https://sg\-live\-02\.slatic.net/p/ae0f37dbf1c0ef8c560a0f0cfbaac3b6\.png\&access\_token\=500002000230jwavWuhdyNfSDLEPzoRaY5g1f874bbbzdpUewqgYDAyXEEjj\&videoUsage\=pro\_main\_video\&app\_key\=100132\&uploadId\=670A237D27694CFDA74CDE6EC1A99FA5\&parts\=\[{"partNumber": 1,"eTag": "61F4949269F20AF4D1025F5825552FC3"}]\&sign\_method\=sha256\&sign\=A067FA6D2AE4474802FB1780B0568EE5C71297E2E759E312F339A5C449466491\&title\=hello\&timestamp\=1656397346312

![image](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/18857002/1656397527396-fb4637af-d5f1-478f-91fc-298fe8169bc1.png "image")

### Example of response

```
{
  "result_message": "",
  "success": true,
  "result_code": "",
  "video_id": "30073704787",
  "code": "0",
  "request_id": "2140d3fa16563973463281042"
}
```
## 4、GetVideo

Call this API to get video information and video status.

Note: only when the video status is "audit\_success" can it be used when creating or updating products.

### Example of request

```
{
  "cover_url": "https://sg-live-02.slatic.net/p/ae0f3*****ac3b6.png",
  "video_url": "http://lazvideo.alicdn.com/psp/20220628/7ae02a32-****-****-****-15*******mp4?auth_key=16****39-0-0-5ca4b3db1*******9ad7",
  "result_message": "",
  "success": true,
  "result_code": "",
  "state": "AUDIT_SUCCESS",
  "title": "hello",
  "code": "0",
  "request_id": "2101554016563981396453606"
}
```

---

## Update a product

<a id="update-a-product-121228"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121228&lang=en_US>

# Updateproduct overview

Updateproduct API needs to be called to update products, the payload format used by Updateproduct API is the same as Createproduct API, but most of the fields are optional. And the Updateproduct API cannot delete all product attributes, only some of the product attributes are supported to be deleted using the Updateproduct API.

# Updateproduct API

## [API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fupdate)

## Updateproduct API Common Fields Description

  

| Field Name | Require | Removable | Field Description |
| --- | --- | --- | --- |
| PrimaryCategory | Optional | No | Fill in this field when calling the API to update the category of the product |
| AssociatedSku | Optional | N/A | This field is not a product attribute, but a Key attribute. When you want to add a new SKU to an existing product using the Updateproduct API, you need to fill in this field with a sku id that already exists for the target product. |
| Images | Optional | No | The Images attribute is used to update images for this product.The Image field in the Images property must be of the array type, with a maximum of 8 images passed into each Image field.Putting Images in the sku attribute indicates that the image is a variant image, and putting it outside indicates an SPU image.Images field cannot delete the image, only replace the old one with the new one.Must use lazada URL images, external URLs are not supported.Please refer to this document for [image migration](https://open.lazada.com/apps/doc/doc?nodeId=30718&docId=120947). |
| name | Optional | No | Product Title |
| description | Optional | Yes | Maximum 25000 charactersHTML tags are allowed.Only Lazada image URLs are allowed, no external URLs. |
| d\_description | Optional | N/A | Delete long description. |
| d\_description\_ms | Optional | N/A | Delete long description of existing Malay version. |
| d\_description\_en | Optional | N/A | Delete the long description of the English version that already exists. |
| short\_description | Optional | Yes | Only text.images and URLs will be automatically filtered;Short descriptions can only use \<ul\> \<li\> or \<ol\> \<li\> |
| d\_short\_description\_en | Optional | N/A | Delete the short description of the English version that already exists. |
| gift\_wrapping | Optional | No | Note: Whitelist function, if you need this function please contact PSC for more information.Enum: Yes/No |
| name\_engravement | Optional | No | Note: Whitelist function, if you need this function please contact PSC for more information.Enum: Yes/No |
| brand | Optional | No | The name obtained by calling the GetBrandByPages API |
| brand\_id | Optional | No | The brand id obtained by calling the GetBrandByPages API |
| video | Optional | Yes | After [uploading the video](https://open.lazada.com/apps/doc/doc?nodeId=30719&docId=120948), fill in the video id of the GetVideo or CompleteCreateVideo response, and the video status must be AUDIT\_SUCCESS.Add ["remove\_video": "Yes"](https://open.lazada.com/apps/announcement/detail?spm=a1zq7z.27201188.search_panel.1.3aed7c73wjj9R9&docId=1692) to the payload to remove the product video |
| SkuId | Mandatory | No | Sku id created by Lazada at the time of product creation and used to locate the Sku or product that needs to be updated when the product is updated. |
| SellerSku | Optional | No | Customizable by the seller, unique in the store.Does not support using Updateproduct API to modify seller sku((before 15 November 2023\)). |
| price | Optional | No | The retail price of the product, which will be displayed if the "special price" field is not filled or expired |
| special\_price | Optional | No | The actual sales price of the product, if the "special\_from\_date" and "special\_to\_date" fields are not filled in, then the validity time is Long Time(Permanent validity). |
| special\_from\_date | Optional | No | Special price start time.If this parameter is passed, then "special\_price" is mandatory. |
| special\_to\_date | Optional | No | Special price end time.If this parameter is passed, then "special\_price" is mandatory. |
| Status | Optional | No | One of the following values: 'active','inactive' or 'deleted'. Optional. The default value is 'active' |
| package\_height | Mandatory | No | Maximum two decimal places.Unit:cm |
| package\_length | Mandatory | No | Maximum two decimal places.Unit:cm |
| package\_width | Mandatory | No | Maximum two decimal places.Unit:cm |
| package\_weight | Mandatory | No | Maximum two decimal places.Unit:kg |
| saleProp | Optional | No | Updateproduct can update the option of a variant or add a new variant.If you need to delete the variant, you need to call the [Removesku api](https://open.lazada.com/apps/doc/doc?nodeId=30712&docId=120259) |
| color\_thumbnail | Optional | No | Variant thumbnail tags, only available when the SKU variant is a standard sales attribute(Except size). |

  

### Notes

1. The list is only part of the general attributes, each category of goods may have different product attributes can be used, the product available attributes to obtain please refer to [this document](https://open.lazada.com/apps/doc/doc?nodeId=30717&docId=120946).
2. Please make sure the SKU variant attributes are the same when updating products.
3. SKU images do not support partial additions. If a SKU adds a SKU image, then other SKUs of this item also need to add images, and vice versa.

# Updateproduct API payload demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "Request": { "Product": { "PrimaryCategory": "10002019", "AssociatedSku":"Existing SKU ID in seller center",  //When adding some SKUs to existing product,need to use this label  "Images": { "Image": \[ "https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg" ] }, "Attributes": { "propCascade": { "26": "120013644:162,100006867:160387" },  "name": "test 2022 02", "description": "TEST", "brand": "No Brand", //"brand" will be deprecated please use "brand\_ id" "brand\_id":"30768",  "model": "test", "d\_description": "Yes", "d\_short\_description": "Yes", "d\_short\_description\_en": "Yes", "waterproof": "Waterproof", "warranty\_type": "Local seller warranty", "warranty": "1 Month", "short\_description": "cm x 1efgtecm\<br /\>\<brfwefgtek", "Hazmat": "None", "material": "Leather", "laptop\_size": "11 \- 12 inches", "delivery\_option\_sof": "No", "remove\_video": "Yes", "gift\_wrapping": "Yes", "name\_engravement": "Yes" }, "Skus": { "Sku": \[ { "SkuId": "20091437762", "saleProp":{ "color\_family":"Green", "size":"10" }, "quantity": "3", "price": "35", "special\_price": "33", "special\_from\_date": "2022\-06\-20 17:18:31", "special\_to\_date": "2025\-03\-15 17:18:31", "package\_height": "10", "package\_length": "10", "package\_width": "10", "package\_weight": "0\.5", "package\_content": "laptop bag", "Status": "active", "Images": { "Image": \[ "https://my\-live\-02\.slatic.net/p/47b6cb07bd8f80aa3cc34b180b902f3e.jpg" ] } } ] } } }}Notes

●Except for Sku Id, all other product attributes are not mandatory.

●Attributes must be preserved but can be left out of any field.

●Updateproduct API can only add variants and modify options, not delete variant attributes.

●The Updateproduct api needs to be requested using the POST method, so please put the parameters in the http body, otherwise the request may fail because the URL is too long.

---

## Create/Update Product Q&A

<a id="create-update-product-q-a-121320"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121320&lang=en_US>

This document will list common problems and solutions encountered when creating products, and QA will add to it from time to time.

# Error Response Analysis

![1.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1686294876413_rJWVV0h9 "1.jpg")

- Please refer to the Error Code section of the API reference document for open platform business code enumeration.
- When the value of the Open Platform error code is 500 or 501, check the error response and business error code. 500 or 501 indicates a generic error code.
- Some errors may not have business error code.

# Q\&A

In this section, I will indicate in each QA the open platform error code and the business error code for that issue. You can use the Web Find (Ctrl \+ F) function to find the issue you are experiencing.

  

**Q1:**The parameters are not in JSON format

**Code**:1001

**A1**:This error means that the JSON format you requested does not match the format required by the API.

For example the Images.Image field must be of array type and the Image field must be present. the same requirement applies to the Skus.Sku field.

![2.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1686294876679_uxilHlzT "2.jpg")

  

**Q2:**This variation attribute size is not found in the variation label,please make sure that this attribute is declared

**Open Platform Error Code** : 4143

**Business Error Code** : BIZ\_CHECK\_SALEPROP\_ATTRIBUTE\_INVALID

**A2**:This error means that the variant property you set is not a standard variant attribute of the current class or does not match the name of the custom variant property you set.

**Q3**:The message field value is 4142 when the product is created

**Open Platform Error Code** : 500 

**A3**:Please check if the brand or brand ID in your request exists in the current country. Brand names or brand IDs are not common to different countries.

Brand ID of "No Brand" in different countries：

![3.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1686294876883_TYXYfxx0 "3.jpg")

  

**Q4**:This sale prop attribute xxx is not support thumbnail image

**Open Platform Error Code** : 4146

**Business Error Code** : BIZ\_CHECK\_SALEPROP\_NOT\_SUPPORT\_THUMBNAIL 

**A4**:Thumbnail tags are not available for custom variants and some standard variants.

**Q5**:Sku edit was blocked by tag/ This product is under campaign participation and cannot be edited during campaign period. 

**Open Platform Error Code** : 501

**Business Error Code** : THD\_IC\_ERR\_F\_IC\_ABILITY\_PG\_004:THD\_IC\_ERR\_F\_IC\_ABILITY\_PG\_004/THD\_IC\_ERR\_F\_IC\_ABILITY\_PG\_003

**A5**:The product or SKU is in a campaign and is locked by the campaign with product information that cannot be edited until the campaign ends.

**Q6**:Insert sku outer id relation failed, outerId already exists, sell ID:xxxxx,sku ID:xxxxxx,outer ID:xxxxxx,serverIP:xxxxx

**Open Platform Error Code** : 4135

**Business Error Code** : THD\_IC\_ERR\_F\_IC\_INFRA\_PRODUCT\_036

**A6**:There is a used seller sku in the SKU you created, please check the outer id field in the response to see which seller sku is duplicated and make changes.

**Q7**:To ensure stability of service, this API service is disabled, please get more information from Notice.

**Open Platform Error Code** : 998

**A7**:This error is a traffic restriction, usually this error occurs at the beginning of Mega Campaign, please refer to the downgrade announcement before the Campaign starts for details.

**Sample Announcement**:[LAZADA D6 Campaign Downgrade Plan](https://open.lazada.com/apps/announcement/detail?spm=a1zq7z.27201205.0.0.20377c73haBza3&docId=1849)

  

**Q8**:negative sellable on channel inventory

**Open Platform Error Code** : 501

**A8**:This SKU signed up for Campaign and was partially locked out of saleable inventory by Campaign. This error occurs when you update the available inventory to be less than the available inventory locked by the Campaign.

[Lazada Inventory Analysis](https://open.lazada.com/apps/doc/doc?nodeId=42714&docId=121233)

**Q9**:Call to GetBrandByPages API is successful but response is empty

**GetBrandByPages API Total QPS** : 30

**A9**:This is in the API stability considerations set QPS, when the interface QPS reached the upper limit will intercept the request.

**Q10**: Api access frequency exceeds the limit. this ban will last 1 seconds. 

**Open Platform Error Code** : ApiCallLimit

**A10**:API level traffic limit, each API will have a different traffic limit, if the current API receives too much traffic in one second, then this error will occur. Please wait for the next second to retry.

**Q11**: Total sale prop more than maxItems 2\. 

**Open Platform Error Code** : 500 

**Business Error Code** : BIZ\_CHECK\_TOTAL\_SALE\_PROP\_MAX\_ITEMS 

**A11**:The number of variant attributes that can be used is different for each category. If this problem occurs when calling the CreateProduct API, check the number of variant properties you set. If you get this error when calling UpdateProduct API, please check if you have added variant attributes that are not used by the original SKU. UpdateProduct API cannot delete variant attributes, you need to call Remove Sku API to delete old variant attributes to add new variant attributes.

**Q11**: Total sale prop more than maxItems 2\. 

**Open Platform Error Code** : ServiceTimeout 

**A11**:A small number of timeout errors are normal, this may be caused by a high number of current requests or a large amount of data, please try again later.

If this error occurs in the product update/create API, please check if your request contains too many SKUs, if a single request contains more than 50 SKUs then it will time out. Please reduce the number of SKUs and request in batches, recommended 20 at a time.

If you encounter this error when using the GetProducts API, please first check in Seller Central to see if the seller has more than 10 variant SKUs for a single product. if so, please reduce the limit to ensure that the data in a single request is not too large to cause a timeout error.

**Q12**: How to add a new variant SKU to an existing product

A12: Add the "AssociatedSku" tag to the payload, and add one of the existing Seller Sku in the target product to the "AssociatedSku" tag and request it, so that the sku in your payload will not be published as a new product, but will be added to the existing product as a SKU.

![4.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1686294877101_Q7TWTrGW "4.jpg")

Notes:

Please make sure the original product has used variant attributes, if the original product does not use variant attributes, you cannot add a new SKU

  

**Q13**: Seller's online product count 1000 has reach limit 1000

**Open Platform Error Code** : 500 

**Business Error Code** : THD\_APPROVAL\_RULE\_CENTER\_ERR\_PRE\_QC\_LISTING\_LIMIT\_ERROR 

A13: There is a cap on the number of items in active status in each seller's store. When the number reaches the upper limit, you will not be able to create new items in the active state, otherwise you will get this error.

![5.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1686294877334_M05RLWaC "5.jpg")

**Q14**: How to modify seller sku

A14: API does not support modifying Seller Sku

---

## CreateGlobalProduct payload and parameter description

<a id="createglobalproduct-payload-and-parameter-description-121751"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30715&docId=121751&lang=en_US>

## Payload sample

**Note**: The attribute name is case sensitive.

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<?xml version\="1\.0" encoding\="utf\-8"?\>\<Request\> \<Product\> \<PrimaryCategory\>3238\</PrimaryCategory\> \<SPUId/\> \<AssociatedSku/\> \<AutoAllocateStock\>false\</AutoAllocateStock\> \<Ventures\> \<Venture\>MY\</Venture\> \<Venture\>SG\</Venture\> \<Venture\>TH\</Venture\> \</Ventures\> \<SemiUpgradeVentures\> \<Venture\>MY\</Venture\> \<Venture\>SG\</Venture\> \</SemiUpgradeVentures\> //创建GlobalPlus商品时，必填 \<Images\> \<Image\>https://sg\-test\-11\.slatic.net/p/58eabcc6fe1526e622e451898f7a6819\.jpg\</Image\> \</Images\> \<Attributes\> \<propCascades\> \<propCascade\> \<cascadeId\>26\</cascadeId\> \<path\>120013644:162,100006867:160387\</path\> \</propCascade\>//行业属性库，语雀文档：https://www.yuque.com/alipay2088702898225450/kb/pk1np0?singleDoc\# 《Product API \-行业属性库API》 \</propCascades\> \<name\>api create product test sample\</name\> \<video\>video id\</video\> \<short\_description\>This is a nice product\</short\_description\> \<description\>This is a nice product description\</description\> \<brand\>Remark\</brand\> \<model\>Test\</model\> \<kid\_years\>Kids (6\-10yrs)\</kid\_years\> \<package\_length\>11\</package\_length\> \<package\_height\>22\</package\_height\> \<package\_weight\>0\.1\</package\_weight\> \<package\_width\>44\</package\_width\> \<package\_content\>this is what's in the box\</package\_content\> \<light\_item\_abs\>  \<my\>1\.11\</my\> \<sg\>1\.11\</sg\> \</light\_item\_abs\> //订单中平均包含商品数量设置；重量小于0\.01kg的轻小件商品需要设置此参数，选填 \</Attributes\> \<variation\> \<variation1\> \<name\>color\_family\</name\> \<hasImage\>true\</hasImage\> \<customize\>false\</customize\> \<options\> \<option\>Green\</option\> \</options\> \</variation1\> \<variation2\> \<name\>size\</name\> \<hasImage\>false\</hasImage\> \<customize\>false\</customize\> \<options\> \<option\>40\</option\> \</options\> \</variation2\> \</variation\> //创建多个sku时，必填 \<Skus\> \<Sku\> \<SellerSku\>17ssapi\-create\-test1\-11\</SellerSku\> \<color\_family\>Green\</color\_family\> \<size\>40\</size\> \<quantity\>120\</quantity\> \<sg\_retail\_price\>388\.50\</sg\_retail\_price\> \<sg\_sales\_price\>308\.50\</sg\_sales\_price\> \<retail\_price\>388\.50\</retail\_price\> \<sales\_price\>308\.50\</sales\_price\> \<sg\_no\_fee\_price\>308\.50\</sg\_no\_fee\_price\> \<no\_fee\_price\>308\.50\</no\_fee\_price\> //创建GlobalPlus商品时，必填 \<tax\_class\>default\</tax\_class\> \<Images\> \<Image\>https://sg\-test\-11\.slatic.net/p/58eabcc6fe1526e622e451898f7a6819\.jpg\</Image\> \</Images\> \</Sku\> \</Skus\> \</Product\>\</Request\>## Parameter description

The following table lists the parameters that are required for creating a global product.

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| Product | subsection | The product data node. Mandatory |
| PrimaryCategory | integer | The ID of the primary category for the product. To get the ID for each of the system’s categories, call GetCategoryTree. Mandatory. It’s optional if ‘AssociatedSku’ is provided. |
| SPUId | integer | The ID of the SPU. Optional |
| AssociatedSku | subsection | The unique identifier of a product that is already in the system, with which this product should be associated. Optional |
| Images | string | Spu level product image.Contains most 8 images URL. Optional |
| AutoAllocateStock | string | Support automatical stock allocation between sites when the stock of a site is 0\. The stock allocation rule is transferring 1/2 stock from the one with the most stock quantity. |
| ventures | subsection | The target site to create the product, with MY as mandatory option. Optional values are SG, TH, PH, ID, and VN. If no value is specified, the prdocut will be created to all sites that the seller has permission. |
| SemiUpgradeVentures | subsection | The target site to upgrade the product to global plus Optional values are MY, SG, TH, PH, ID, and VN. If no value is specified, the prdocut will be created as normal product. |
| Attributes | subsection | All common attributes of products. Mandatory. It’s optional if ‘AssociatedSku’ is provided. |
| Skus | subsection | An array contains at least one SKU. Mandatory |

  

﻿The content of the ’Attributes" fields are dynamic. To view all available attributes, call the GetCategoryAttributes API. The following table provides some examples.

---

## Inventory Management API

<a id="inventory-management-api-121234"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=42713&docId=121234&lang=en_US>

This document will introduce the API related to product inventory management and show usage examples.

If you need to understand the inventory logic of Lazada products, [check this document](https://open.lazada.com/apps/doc/doc?spm=a1zq7z.man121234.site_detail.1.7dee7c73pHnf38&nodeId=42714&docId=121233).

# **UpdatePriceQuantity**

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fprice_quantity%2Fupdate)

Use this API to update the total inventory of the corresponding warehouse for an product.

## **Request Example**

### **Single\-warehouse format (used by single\-warehouse sellers, only updates dropshipping warehouse).**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<Request\> \<Product\> \<Skus\> \<Sku\> \<ItemId\>6718170187\</ItemId\> \<SkuId\>12761620980\</SkuId\> \<Quantity\>200\</Quantity\> \<!\-\-Negative numbers cannot be used\-\-\> \</Sku\> \</Skus\> \</Product\>\</Request\>#### **Note**

1. Since this document is used to introduce inventory management, all other optional fields are omitted.
2. Supports batch update of total inventory of dropshipping warehouse for different sku's under different products in one request.
3. The updated inventory quantity must be greater than or equal to the inventory locked by the withhold \+ occupy \+ campaign (channelInventories), otherwise an error will be reported.
4. A maximum of 50 SKUs can be added per request, adding more SKUs will result in a timeout error.
5. Each seller can only call the inventory API 50 times per second, more than 50 may cause the request to fail due to traffic limitation.
6. Quantity cannot be negative.

### **Multi\-warehouse format (used by multi\-warehouse sellers, can update dropshipping and multi\-warehouse warehouses at the same time).**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<Request\> \<Product\> \<Skus\> \<Sku\> \<ItemId\>234234234\</ItemId\> \<SkuId\>234\</SkuId\> \<MultiWarehouseInventories\> \<MultiWarehouseInventory\> \<WarehouseCode\>Dropshipping\</WarehouseCode\> \<Quantity\>20\</Quantity\> \</MultiWarehouseInventory\> \<MultiWarehouseInventory\> \<WarehouseCode\>warehouseTest2\</WarehouseCode\> \<Quantity\>30\</Quantity\> \</MultiWarehouseInventory\> \</MultiWarehouseInventories\> \</Sku\> \</Skus\> \</Product\>\</Request\>#### **Note**

1. Since this document is used to introduce inventory management, all other optional fields are omitted.
2. Single\-warehouse sellers should not use the multi\-warehouse format, otherwise an error may be reported.
3. The updated inventory quantity must be greater than or equal to the inventory locked by the withhold \+ occupy \+ campaign (channelInventories), otherwise an error will be reported.
4. A maximum of 50 SKUs can be added per request, adding more SKUs will result in a timeout error.
5. Each seller can only call the inventory API 50 times per second, more than 50 may cause the request to fail due to traffic limitation.
6. Quantity cannot be negative.

# **UpdateProduct**

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fupdate)

Use this API to update product information and product sellable inventory in the dropshipping warehouse.

## **Request Example**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "Request": { "Product": { "ItemId": "6718170187", "Attributes": {}, "Skus": { "Sku": \[ { "SkuId": "123456", "quantity": "1" //Negative numbers cannot be used } ] } } }## }**Note**

1. Since this document is used to introduce inventory management, all other optional fields are omitted.
2. The sku inventory updated by this API must belong to the same product, and does not support updating the inventory of multiple different products.
3. The updated inventory quantity must be greater than or equal to the inventory locked by the campaign (channelInventories), otherwise an error will be reported.
4. Quantity cannot be negative.

# **UpdateSellableQuantity**

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fstock%2Fsellable%2Fupdate)

Use this API to update the sellable inventroy of SKUs in an overriding manner.

## **Request Example**

### **Single\-warehouse format (used by single\-warehouse sellers, only updates dropshipping warehouse).**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<Request\> \<Product\> \<Skus\> \<Sku\> \<ItemId\>234234234\</ItemId\> \<SkuId\>234\</SkuId\> \<SellableQuantity\>20\</SellableQuantity\> \</Sku\> \</Skus\> \</Product\>\</Request\>#### **Note**

1. Supports batch update of total inventory of dropshipping warehouse for different sku's under different products in one request.
2. The updated sellable inventory quantity must be greater than or equal to the inventory locked by the campaign (channelInventories), otherwise an error will be reported.
3. A maximum of 50 SKUs can be added per request, adding more SKUs will result in a timeout error.
4. Each seller can only call the inventory API 50 times per second, more than 50 may cause the request to fail due to traffic limitation.
5. Quantity cannot be negative.

### **Multi\-warehouse format (used by multi\-warehouse sellers, can update dropshipping and multi\-warehouse warehouses at the same time).**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<Request\> \<Product\> \<Skus\> \<Sku\> \<ItemId\>234234234\</ItemId\> \<SkuId\>234\</SkuId\> \<MultiWarehouseInventories\> \<MultiWarehouseInventory\> \<WarehouseCode\>warehouseTest1\</WarehouseCode\> \<SellableQuantity\>20\</SellableQuantity\> \</MultiWarehouseInventory\> \<MultiWarehouseInventory\> \<WarehouseCode\>warehouseTest2\</WarehouseCode\> \<SellableQuantity\>30\</SellableQuantity\> \</MultiWarehouseInventory\> \</MultiWarehouseInventories\> \</Sku\> \</Skus\> \</Product\>\</Request\>#### **Note**

1. Single\-warehouse sellers should not use the multi\-warehouse format, otherwise an error may be reported.
2. The updated sellable inventory quantity must be greater than or equal to the inventory locked by the campaign (channelInventories), otherwise an error will be reported.
3. A maximum of 50 SKUs can be added per request, adding more SKUs will result in a timeout error.
4. Each seller can only call the inventory API 50 times per second, more than 50 may cause the request to fail due to traffic limitation.
5. Quantity cannot be negative.

# **AdjustSellableQuantity**

[API Document](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fstock%2Fsellable%2Fadjust)

Use this API to update the sellable inventory of SKUs by summing positive and negative numbers.(A positive number is an increase in inventory and a negative number is a decrease in inventory)

## **Request Example**

### **Single\-warehouse format (used by single\-warehouse sellers, only updates dropshipping warehouse).**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<Request\> \<Product\> \<Skus\> \<Sku\> \<ItemId\>234234234\</ItemId\> \<SkuId\>234\</SkuId\> \<SellableQuantity\>\-20\</SellableQuantity\> \</Sku\> \</Skus\> \</Product\>\</Request\>#### **Note**

1. The SellableQuantity field can be set to a negative number.
2. If the original inventory is 1 and the SellableQuantity field is passed in at 20, then the sellable inventory for this SKU will be updated to 21 (20 \+ 1\).
3. If the original inventory is 20 and the SellableQuantity field is passed in at \-1, then the sellable inventory for this SKU will be updated to 19 (20 \+ (\-1\)).
4. The updated final saleable inventory must be greater than or equal to 0, otherwise an error will be reported.
5. Supports batch update of total inventory of dropshipping warehouse for different sku's under different products in one request.
6. The updated sellable inventory quantity must be greater than or equal to the inventory locked by the campaign (channelInventories), otherwise an error will be reported.
7. A maximum of 50 SKUs can be added per request, adding more SKUs will result in a timeout error.
8. Each seller can only call the inventory API 50 times per second, more than 50 may cause the request to fail due to traffic limitation.

### **Multi\-warehouse format (used by multi\-warehouse sellers, can update dropshipping and multi\-warehouse warehouses at the same time).**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\<Request\> \<Product\> \<Skus\> \<Sku\> \<ItemId\>234234234\</ItemId\> \<SkuId\>234\</SkuId\> \<MultiWarehouseInventories\> \<MultiWarehouseInventory\> \<WarehouseCode\>warehouseTest1\</WarehouseCode\> \<SellableQuantity\>20\</SellableQuantity\> \</MultiWarehouseInventory\> \<MultiWarehouseInventory\> \<WarehouseCode\>warehouseTest2\</WarehouseCode\> \<SellableQuantity\>\-30\</SellableQuantity\> \</MultiWarehouseInventory\> \</MultiWarehouseInventories\> \</Sku\> \</Skus\> \</Product\>\</Request\>#### **Note**

1. The SellableQuantity field can be set to a negative number.
2. If the original inventory is 1 and the SellableQuantity field is passed in at 20, then the sellable inventory for this SKU will be updated to 21 (20 \+ 1\).
3. If the original inventory is 20 and the SellableQuantity field is passed in at \-1, then the sellable inventory for this SKU will be updated to 19 (20 \+ (\-1\)).
4. The updated final saleable inventory must be greater than or equal to 0, otherwise an error will be reported.
5. Single\-warehouse sellers should not use the multi\-warehouse format, otherwise an error may be reported.
6. The updated sellable inventory quantity must be greater than or equal to the inventory locked by the campaign (channelInventories), otherwise an error will be reported.
7. A maximum of 50 SKUs can be added per request, adding more SKUs will result in a timeout error.
8. Each seller can only call the inventory API 50 times per second, more than 50 may cause the request to fail due to traffic limitation.
9. Quantity cannot be negative.

---

## Inventory calculation logic

<a id="inventory-calculation-logic-121233"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=42713&docId=121233&lang=en_US>

This tutorial will explain lazada's inventory calculation logic so that you can better manage your inventory using the API.

# Stock types

| Inventory name | Order Status | Description |
| --- | --- | --- |
| WithholdQuantity | Unpaid | The quantity of inventory that is locked when a buyer submits an order but has not yet paid for it. Seller Center does not show. This quantity will move from SellableQuantity to WithholdQuantity when the order is submitted. When the payment is made, the stock will be moved to OccupyQuantity. After the order remains unpaid for 30 minutes, the inventory will be moved to SellableQuantity. Sellers cannot manually modify. |
| OccupyQuantity | Pending \~ Packed | When an order is cancelled, the inventory will be moved from OccupyQuantity to SellableQuantity. Seller Center does not show. When the order is updated to RTS status, the inventory will be moved out of OccupyQuantity. Sellers cannot manually modify. |
| SellableQuantity | N/A | The quantity of stock that can be purchased by buyers. Seller Central shows this inventory This inventory quantity includes the inventory locked by the campaign. The inventory cannot be modified with less than the inventory locked by the campaign. This inventory can be modified using the following API: AdjustSellableQuantity UpdateProduct UpdateSellableQuantity |
| totalQuantity | N/A | Combination of the above inventory. Seller Center does not show. The inventory cannot be less than WithholdQuantity\+OccupyQuantity\+channelInventories when the inventory is modified. This inventory can be modified using the following API: UpdatePriceQuantity |
| channelInventories | N/A | The amount of inventory locked by the campaign after participating in the campaign. This inventory will be removed at the end of the event and will become a modifiable SellableQuantity. |

# Flow chart of inventory change after placing an order

![](https://tida.alicdn.com/oss_1680155071963_null_8k3WK14U)

# Multi\-warehouse

Usually a seller can only configure one Warehouse Address, which is a single\-warehouse seller. However, by applying to the seller's customer service, the seller can set up multiple Warehouse Addresses, which is a multi\-warehouse seller.

## Impact of multiple warehouses on products

When a multi\-warehouse seller creates multiple warehouses, a new warehouse inventory setting will be added for all items in that store. The inventory of different warehouses is independent.

### Seller Center Demo

![](https://tida.alicdn.com/oss_1680155098705_null_S1BhwlVz)

### GetProducts/GetProductItem API Demo

```
{
    "data": {
        "skus": [
            {
                ......
                "multiWarehouseInventories": [
                    {
                        "occupyQuantity": 0,
                        "quantity": 100,
                        "totalQuantity": 100,
                        "withholdQuantity": 0,
                        "warehouseCode": "dropshipping",
                        "sellableQuantity": 100
                    },
                    {
                        "occupyQuantity": 0,
                        "quantity": 1,
                        "totalQuantity": 1,
                        "withholdQuantity": 0,
                        "warehouseCode": "MY10RV7-WH-10002",
                        "sellableQuantity": 1
                    },
                    .......
                ]
            }
        ],
        ......
    },
    "code": "0",
    "request_id": "2141276616801444715421373"
}
```

#### Note

- The inventory locked by channelInventories is not warehouse dependent, as long as the remaining available inventory for the SKU is an integer greater than or equal to the inventory locked by channelInventories.
- The multiWarehouseInventories field cannot be used to determine if a seller is a multiwarehouse seller because the field does not respond to information from other warehouses when those warehouses are not in stock.

## How to determine if a seller is a multi\-warehouse seller

### Determine in seller center

Please open “My Account \- Settings \- Warehouse” in Seller Central to check the Warehouse Address section.

If the Warehouse Address field has a warehouse address other than dropshipping, then this is a multi\-warehouse seller.

![](https://tida.alicdn.com/oss_1680155121095_null_dGg9rEhj)

### Determine by API

You need to call the [GetMultiWarehouseBySeller API](https://open.lazada.com/apps/doc/api?path=%2Fseller%2Fwarehouse%2Fget) to get the warehouse information of the corresponding seller. If the GetMultiWarehouseBySeller API responds with an array of modules with more than 1 elements, then this means that it is a multiwarehouse seller.

```
{
    "result": {
        "success": true,
        "module": [
            {
                "code": "dropshipping",
                "name": "MultiWH",
                "detailAddress": "20230308 test0011",
                "needToUpdate": false,
                "defaultAddress": true,
                "status": "ACTIVE"
            },
            {
                "code": "MY10RV7-WH-10002",
                "name": "ceshis ",
                "detailAddress": "Kp. Bojong Se.............ndung",
                "needToUpdate": false,
                "defaultAddress": false,
                "status": "ACTIVE"
            }
        ],
        "error_code": {}
    },
    "code": "0",
    "request_id": "2101069616800787642261910"
}
```

#### Note

When calling the GetMultiWarehouseBySeller API, please make sure the addressTypes field is filled with "\["warehouse"]", this is a required field and failure to fill in this field may result in inaccurate results.

---

## Get Order

<a id="get-order-121327"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29616&docId=121327&lang=en_US>

This tutorial will introduce the API and fields related to getting orders.

# **Get order list**

Once a new store has authorized your app, you can call the GetOrders API to get all the orders for the open store.

## **API used**

[GetOrders API](https://open.lazada.com/apps/doc/api?path=%2Forders%2Fget)

## **1\.Request parameter setting**

| Parameter Name | Parameter Type | Value | Field Description |
| --- | --- | --- | --- |
| created\_after | String | 2018\-02\-10T16:00:00\+08:00 | The time condition for querying orders, if you neet to get all orders in the store you can set this time to the store creation time or the time when the first order is generated. |
| status | String | all | Filter orders by order status, fill all will get all status of orders. |
| limit | String | 100 | Number of orders that can be responded to per request.Maximum value: 100 |
| offset | String | 0 | The number of skipped data. If limit is set to 100, then offset should be set to 0/100/200/300 ......Maximum value: 5000 |
| The rest of the parameters can be configured according to your needs | | | |

Common Parameters will not be introduced

## **2\. Recurring request and get order information**

Based on the request in the first step, the value of offset is cyclically increased to get more orders.

You can use the countTotal field to determine how many orders there were in total during the time period you requested.

You can determine how many orders there were in total during the time period you requested based on the countTotal field in the GetOrders API response.

When offest is set to the maximum value, if you need to get subsequent orders. Please set the time of create\_at to the creation time of the last order you fetched and set offset to 0 to continue the loop call.

## **3\.Get new orders**

After getting old orders from the store, you need to get new orders, in this case we don't recommend you to keep calling GetOrders API in a loop to monitor new order generation, because it will lead to waste of resources and unstable service, so we may disable your app when we monitor a large number of exception calls.

### **Order push**

Lazada Open Platform has a push mechanism. If you complete the verification of the push URL and subscribe to the order push, you will receive a push when the order is generated or the status is updated. Then you can get the order information and status update according to the order id and order item id in the push by [GetOrder API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fget).

<Lazada Push Mechanism>

[Webhook API Trade Order Notifications](https://open.lazada.com/apps/doc/doc?nodeId=29538&docId=120196)

## **4\.GetOrder/GetOrders API field analysis**

### **order\_id**

The identification number of the order, unique to the current store only.

If a buyer buys products from both stores, then both stores will generate orders with the same order id.

### **address\_shipping**

This field is the shipping address, where the address consists of address1\~5\.

address1 Detailed address

address2 Not used for now

address3 State name

address4 city

address5 Post Code

### **shipping\_fee**

The actual shipping cost paid by the seller, including the shipping fee discount.

### **statuses**

Lazada has no order status, each item in the order has a separate status. So this field is a collection that will show the status of the order items that the order currently contains. The same status is displayed only once.

### **price**

Total order price (excluding product discounts and order discounts)

If you want to use the GetOrder/GetOrders API to calculate the actual amount paid for an order, please refer to this formula：buyer paid price \= price \- voucher \+ shipping\_fee.

## **5\.Get order item details**

To get order details, you need to call [GetOrderItems](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fitems%2Fget)/[GetMultipleOrderItems](https://open.lazada.com/apps/doc/api?path=%2Forders%2Fitems%2Fget) API, please check if the order id exists in the requested store before calling.

When getting the order item details, please note that lazada does not count the number of items in the order, but rather responds to the order items as separate objects. If an order is placed for two identical items, it will still be responded to as two different objects with unique order item ids.

---

## Order Status Flow

<a id="order-status-flow-120167"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29616&docId=120167&lang=en_US>

## **Please find below the updated order status flow**

**Note****:** Please call API \- [GetOrderItems](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fitems%2Fget) before packing and ready\_to\_ship:

  

      Only "pending" and "repacked" order item id can call API \- [/order/fulfill/pack](https://open.lazada.com/apps/doc/api?path=%2Forder%2Ffulfill%2Fpack)

      Only "packed" order item id can call API \- [/order/package/rts](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Frts)[![](https://tida.alicdn.com/oss_1673492542466_null_WOkaxWKx.png)](https://open.lazada.com/apps/doc/api?path=%2Forder%2Frts)

## **Failed Delivered related Order Status Flow Chart配送失败状态流转图**

## 

## **API call flow**

 ![](https://tida.alicdn.com/oss_1683276528975_null_uFmHVZOn)

---

## Order Cancellation

<a id="order-cancellation-121329"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29616&docId=121329&lang=en_US>

This tutorial will describe which APIs to call to cancel unshipped orders for seller reasons.

Note: Cancellation of orders for seller's reason will affect store rating, high cancellation rate may lead to daily order volume limit (ovl), please use with caution.

 ![](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1716883000837_BZFqxIWc)

# Step 1 Call the GetOrderItems API

Call the GetOrderItems API to get all order item ids for the order you need.

Lazada cancels orders not by order level, but by order item level.

# Step 2 Call the OrderCancelValidate API

[API Document](https://open.lazada.com/apps/doc/api?path=%2Forder%2Freverse%2Fcancel%2Fvalidate)

Before canceling an order, you also need to confirm whether the current order can be cancelled and what are the available reasons for cancellation, so you need to call the OrderCancelValidate API.

If the status of the order item you need to cancel is not Pending\\Packed\\ReadyToShip, then you cannot cancel the order item.

## Response Demo

{

  "data": {

    "tip\_content": "SKU stock may be set to 0\* after cancellation due to reasons: ‘out of stock’ or ‘incorrect pricing’, to prevent new orders while you adjust your stock/pricing. You can adjust your stock back up at any time. This adjustment will not impact existing orders. Note that cancellations can impact your ability to sell on Lazada if not managed carefully.\\n\\n\*For more information, please view Seller Cancellation Policy page",

    "reason\_options": \[

      {

        "reason\_name": "Sourcing Delay",

        "reason\_id": "10000019"

      },

      {

        "reason\_name": "Out of Stock",

        "reason\_id": "10000021"

      },

      {

        "reason\_name": "Wrong Price or Pricing Error",

        "reason\_id": "10000023"

      }

    ],

    "tip\_type": "warning"

  },

  "code": "0",

  "request\_id": "2101069616872400092505868"

}

### Notes

1. Not all orders can be cancelled. Orders that do not meet the criteria will report an error, and the specific reason will be displayed in the tip\_content field.
2. If you select "Out of Stock" or "Wrong Price or Pricing Error" as the reason for cancellation, the stock of the corresponding item will be adjusted to 0 to prevent further incorrect orders.
3. The reason\_id may be different for each country.
4. Only order items with the Pending \~ Ready To Ship status can be cancelled.

# Step 3 Call the InitReverseOrderCancel API

[API Document](https://open.lazada.com/apps/doc/api?path=%2Forder%2Freverse%2Fcancel%2Fcreate)

Call this API and add the order id and order item id you need to cancel, as well as one of the reason\_id in the second step of the response, so that it can be successfully cancelled.

## Response Demo

{

  "data": {

    "tip\_content": "The order has been cancelled and SKU stock may have been set to 0\. Please ensure you check your stock/pricing under “Manage Products”. Your customer has also been informed of the cancellation and will receive a customer experience survey.\\nPlease reach out to your customer if you would like to provide service recovery.",

    "tip\_type": "success"

  },

  "code": "0",

  "request\_id": "2140c3e616872414077912824"

}

1. Only order items with the Pending \~ Ready To Ship status can be cancelled.
2. If the order is in pending status, then you can cancel any item in the order using the order item id without canceling the whole order.
3. If the order is in the packaged state, other order items in the same package will also be cancelled when the order item is cancelled. So if you don't want this, please call the [RecreatePackage API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Frepack) to cancel the package first.

---

## Fulfillment orders

<a id="fulfillment-orders-121328"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29616&docId=121328&lang=en_US>

This tutorial will explain how to call the API to update the order status for various types of orders and their considerations.

# **1\.Normal order (local store/Marketplace Ease Mode seller) fulfillment process**

![1.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1707104047355_p6Kx4jP6)

## **Step 1: Call GetOrderItems API**

[GetOrderItems API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fitems%2Fget)

Before packing, you need to call GetOrderItems API to confirm the order to be packed and the corresponding order item id, and check the status of the order item id, if it is cancelled or unpaid status, then it is not allowed to be packed.

## **Step 2: Call Pack API**

[Pack API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Ffulfill%2Fpack)

After completing the first step, you need to call the Pack API to pack these order items. the payload for the packReq field is as follows:

### **Request Demo**

{

 "pack\_order\_list": \[

 {

 "order\_item\_list": \[

 560694402292001

 ],

 "order\_id": 560694402192001

 }

 ],

 "delivery\_type": "dropship",

 "shipping\_allocate\_type": "TFS"

}

#### **Field Analysis**

##### **pack\_order\_list**

Each objce in this field represents an order, and a maximum of 20 orders are supported to be entered.

##### **order\_item\_list**

For example, if there are 3 order item ids in an order, and only 2 are entered in the request, then only 2 order items will be updated to packaged status, and the other one will remain in pending status.

##### **delivery\_type**

The field value must be dropship, entering any other value will result in an error.

Note: The first kilometer collection type is pickup or dropship is not determined by this field.

##### **shipping\_allocate\_type**

The value of this field can be queried by calling the [GetShipmentProvider API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fshipment%2Fproviders%2Fget), but in the normal case the local store is always of type TFS and the cross\-border store is always of type NTFS.

### **Response Demo**

{

  "result": {

    "data": {

      "pack\_order\_list": \[

        {

          "order\_item\_list": \[

            {

              "order\_item\_id": 711433089764242,

              "msg": "success",

              "item\_err\_code": "0",

              "tracking\_number": "LEXDO0069388114",

              "shipment\_provider": "LEX TH",

              "package\_id": "FP094612143977611",

              "retry": false

            }

          ],

          "order\_id": 711433089564242

        }

      ]

    },

    "success": true

  },

  "code": "0",

  "request\_id": "210140e316868082290745715"

}

#### **Field Analysis**

##### **msg**

If the package is successful, this field will respond with "success". If the package fails, the field will respond with a specific error message.

##### **item\_err\_code**

Used to determine whether the request is successful or not, when the response value is 0, it means the package is successful.

##### **tracking\_number**

Package tracking number, generated by Lazada, is not customizable.

##### **package\_id**

Parameters to be used when the package needs to be updated to Ready To Ship status or repacked.

## **Step 3: Call PrintAWB API**

[PrintAWB API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fdocument%2Fget)

After the order is successfully updated to packed status, you can call the PrintAWB API to print the AWB shipping label for the package.

### **Request Demo**

{

  "doc\_type": "PDF",

  "packages": \[

    {

      "package\_id": "FP038541022"

    },

   ......

  ]

}

#### **Field Analysis**

##### **doc\_type**

This field can set the value to PDF or HTML.

##### **package\_id**

Enter the package ids you need to print, up to 20 package ids are supported for one request.

Each package id should be placed in a separate object.

#### **Response Demo**

##### **PDF Version**

{

  "result": {

    "data": {

      "file": "PGlmcmFtZSBzcmM9Ii9vc3MvcHJveHkvd2F5YmlsbHByaW50YnVja2V0Lm9zcy1hcC1zb3V0aGVhc3QtMS5hbGl5dW5jcy5jb20vUERGLzQyODgxMmU1LTY5NmYtNDQ1Yi05Y2IyLTYwYmVkMmYyMmU5MT9FeHBpcmVzPTE2ODY4ODEwNDAmT1NTQWNjZXNzS2V5SWQ9VE1QLjNLakxTVndYV3F0dlhKaFh1REh6dmlGOWVXamlqSzFvNDVpcnhUSDhTeW5malRIdm1DQ2NRYmQzeW15ZWZtbjVyZWlybjZGUm1KQlR5ZGZLMzhmNXJKV0d0NW1Nb0wmU2lnbmF0dXJlPWlCUzhVTTF2M28yJTJGS3F6clpsWHBBczBiYU40JTNEIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7bWluLWhlaWdodDogOTkwcHg7Ij48L2lmcmFtZT4\=",

      "pdf\_url": "https://sellercenter.lazada.com.my/oss/proxy/waybillprintbucket.oss\-ap\-southeast\-1\.aliyuncs.com/PDF/428812e5\-696f\-445b\-9cb2\-60bed2f22e91?Expires\=1686881040\&OSSAccessKeyId\=TMP.3KjLSVwXWqtvXJhXuDHzviF9eWjijK1o45irxTH8SynfjTHvmCCcQbd3ymyefmn5reirn6FRmJBTydfK38f5rJWGt5mMoL\&Signature\=iBS8UM1v3o2%2FKqzrZlXpAs0baN4%3D",

      "doc\_type": "PDF"

    },

    "success": true

  },

  "code": "0",

  "request\_id": "2141276616868804407747137"

}

##### **HTML version**

{

  "result": {

    "data": {

      "file": "PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiIC8\+PHNjcmlwdCBzcmM9Imh0dHBzOi8vZy5hbGljZG4uY29tL2NuLWdsb2JhbC9jbi1odG1sLXByaW50LXJlbmRlci8wLjAuNS9jb21tb24uanMiPjwvc2NyaXB0PjxzY3JpcHQgZGVmZXIgc3JjPSJodHRwczovL2cuYWxpY2RuLmNvbS9jbi1nbG9iYWwvY24taHRtbC1wcmludC1yZW5kZXIvMC4wLjUvbGF5b3V0UHJpbnRSdWxlLmpzIj48L3NjcmlwdD48ZGl2IGlkPSJCTURVNG4yVlZZIiBjbGFzcz0iY24taHRtbC1ib2R5IiBzdHlsZT0iaGVpZ2h0OiAxNDhtbTsgd2lkdGg6IDEwNW1tOyBvdmVyZmxvdzpoaWRkZW47CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtmb250LXNpemU6OXB0O2NvbG9yOiAjMDAwOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDsKICAgICI\+PGRpdiBjbGFzcz0iY24taHRtbC1pbm5lciIgc3R5bGU9IiI\+PGRpdiBzdHlsZT0iCiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHBhZGRpbmc6MDsKICAgICAgICBtYXJnaW46MDsKICAgICAgICB3aWR0aDogOTdtbTsKICAgICAgICBsZWZ0OiAzLjhtbTsKICAgICAgICB0b3A6IDMuNW1tOwogICAgICAgIHpJbmRleDozO292ZXJmbG93OmhpZGRlbjsKICAgICAgICB6LWluZGV4OiAzOwogICAgICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgIzMzMzsgYm94LXNpemluZzogYm9yZGVyLWJveDsiPjx0YWJsZSBkYXRhLWJvcmRlcldpZHRoPSJ1bmRlZmluZWQiIHN0eWxlPSIKICAgICAgICB3aWR0aDoxMDAlOyBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym94LXNpemluZzogYm9yZGVyLWJveDsiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCI\+PHRyIHN0eWxlPSJwYWRkaW5nOjA7bWFyZ2luOjA7cGFnZS1icmVhay1pbnNpZGU6YXZvaWQ7Ij48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO3dpZHRoOjI0LjA4bW07aGVpZ2h0OjE1Ljg3bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDE1Ljg3bW07d2lkdGg6IDI0LjA4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO3dpZHRoOjI0LjA4bW07aGVpZ2h0OjE1Ljg3bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDE1Ljg3bW07d2lkdGg6IDI0LjA4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO3dpZHRoOjI0LjA4bW07aGVpZ2h0OjE1Ljg3bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDE1Ljg3bW07d2lkdGg6IDI0LjA4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO3dpZHRoOjI0LjA4bW07aGVpZ2h0OjE1Ljg3bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDE1Ljg3bW07d2lkdGg6IDI0LjA4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48L3RyPiA8dHIgc3R5bGU9InBhZGRpbmc6MDttYXJnaW46MDtwYWdlLWJyZWFrLWluc2lkZTphdm9pZDsiPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjIyLjc1bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgY29sc3Bhbj0iNCI\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj48ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHRvcDowOyB3aWR0aDoxMDAlOyBib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImhlaWdodDogMjIuNzVtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjwvdHI\+IDx0ciBzdHlsZT0icGFkZGluZzowO21hcmdpbjowO3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyI\+PHRkIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luOjA7IHBhZGRpbmc6MDtoZWlnaHQ6MjAuMTFtbTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MDsgIiBjb2xzcGFuPSIzIj4KICAgICAgICAgICAgPGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGhlaWdodDoxMDAlOyBib3JkZXItbGVmdDoxcHggc29saWQgIzMzMzsiPjwvZGl2PjxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyB0b3A6MDsgdG9wOjA7IHdpZHRoOjEwMCU7IGJvcmRlci10b3A6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj4KICAgICAgICAgICAgPGRpdiBzdHlsZT0iaGVpZ2h0OiAyMC4xMW1tOyBvdmVyZmxvdzpoaWRkZW47ICI\+CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgPC9kaXY\+CiAgICAgICAgICAgIDwvdGQ\+PHRkIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luOjA7IHBhZGRpbmc6MDtoZWlnaHQ6MjAuMTFtbTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MDsgIiA\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj48ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHRvcDowOyB3aWR0aDoxMDAlOyBib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImhlaWdodDogMjAuMTFtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjwvdHI\+IDx0ciBzdHlsZT0icGFkZGluZzowO21hcmdpbjowO3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyI\+PHRkIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luOjA7IHBhZGRpbmc6MDtoZWlnaHQ6NS4wM21tOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlcjowOyAiIGNvbHNwYW49IjMiPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDUuMDNtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjEwLjMybW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMCAhaW1wb3J0YW50OyAiIHJvd3NwYW49IjIiPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDEwLjMybW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48L3RyPiA8dHIgc3R5bGU9InBhZGRpbmc6MDttYXJnaW46MDtwYWdlLWJyZWFrLWluc2lkZTphdm9pZDsiPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjUuMjltbTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MDsgIiBjb2xzcGFuPSIzIj4KICAgICAgICAgICAgPGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGhlaWdodDoxMDAlOyBib3JkZXItbGVmdDoxcHggc29saWQgIzMzMzsiPjwvZGl2PjxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyB0b3A6MDsgdG9wOjA7IHdpZHRoOjEwMCU7IGJvcmRlci10b3A6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj4KICAgICAgICAgICAgPGRpdiBzdHlsZT0iaGVpZ2h0OiA1LjI5bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO2hlaWdodDo1LjI5bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDUuMjltbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjwvdHI\+IDx0ciBzdHlsZT0icGFkZGluZzowO21hcmdpbjowO3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyI\+PHRkIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luOjA7IHBhZGRpbmc6MDtoZWlnaHQ6NS4wM21tOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlcjowOyAiIGNvbHNwYW49IjMiPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDUuMDNtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjUuMDNtbTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MDsgIiA\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj48ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHRvcDowOyB3aWR0aDoxMDAlOyBib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImhlaWdodDogNS4wM21tOyBvdmVyZmxvdzpoaWRkZW47ICI\+CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgPC9kaXY\+CiAgICAgICAgICAgIDwvdGQ\+PC90cj4gPHRyIHN0eWxlPSJwYWRkaW5nOjA7bWFyZ2luOjA7cGFnZS1icmVhay1pbnNpZGU6YXZvaWQ7Ij48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO2hlaWdodDo2NS44OG1tOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlcjowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDsgIiA\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj48ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHRvcDowOyB3aWR0aDoxMDAlOyBib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImhlaWdodDogNjUuODhtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjY1Ljg4bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMCAhaW1wb3J0YW50OyAiIGNvbHNwYW49IjMiPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDY1Ljg4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48L3RyPiA8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAyLjVtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo0OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAzbW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNDsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDozMS42NDE0Mjg1NzE0Mjg1N21tOyBoZWlnaHQ6Mi41bW07IHRvcDowLjVtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMi41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMjcuNjFtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA1OwogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgIHdpZHRoOjMxLjY0MTQyODU3MTQyODU3bW07IGhlaWdodDoyLjVtbTsgdG9wOjAuNW1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAyLjVtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo2OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1Mi4ybW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNjsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDozMS42NDE0Mjg1NzE0Mjg1N21tOyBoZWlnaHQ6Mi41bW07IHRvcDowLjVtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMi41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NzsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzYuOG1tOwogICAgZm9udC1zaXplOjlwdDsKICAgIHotaW5kZXg6IDc7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzEuNjQxNDI4NTcxNDI4NTdtbTsgaGVpZ2h0OjIuNW1tOyB0b3A6MC41bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGltZyBzdHlsZT0iCiAgICAgICAgCiAgICAKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIGxlZnQ6IDQuNzVtbTsKICAgIHRvcDogN21tOyAKICAgIHpJbmRleDo4OwogICAgei1pbmRleDogODsKICAgIHdpZHRoOiAyMm1tOwogICAgaGVpZ2h0OiAxMW1tOwogICAgIiBzcmM9Imh0dHBzOi8vY2RuLWNsb3VkcHJpbnQuY2Fpbmlhby5jb20vd2F5YmlsbC1wcmludC9jbG91ZHByaW50LWltZ3MvM2UyOWE3YzVhYTRiNDBlOGIyMDhlOGQ3M2ZhNmYzNzJfZ2xvYmFsLWxjZi13YXliaWxsdGVtcGxhdGUucG5nIi8\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDMuMDJtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo5OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1LjIybW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogOTsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDoyNS41NzI4NTcxNDI4NTcxNDJtbTsgaGVpZ2h0OjMuMDJtbTsgdG9wOjQuNTVtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj5Ecm9wLW9mZjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAzLjAybW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6MTA7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDI5LjE4bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogMTA7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MjguNzI3NzQ4MjU2MTI5NDY2bW07IGhlaWdodDozLjAybW07IHRvcDo0LjU1bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjY5MjM2MTk1NjkwMTkzNjgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+REVMSVZFUlkgQlk8L2Rpdj48L2Rpdj48aW1nIHN0eWxlPSIKICAgICAgICAKICAgIAogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgbGVmdDogMjltbTsKICAgIHRvcDogN21tOyAKICAgIHpJbmRleDoxMTsKICAgIHotaW5kZXg6IDExOwogICAgd2lkdGg6IDIybW07CiAgICBoZWlnaHQ6IDExbW07CiAgICAiIHNyYz0iaHR0cHM6Ly9jZG4tY2xvdWRwcmludC5jYWluaWFvLmNvbS93YXliaWxsLXByaW50L2Nsb3VkcHJpbnQtaW1ncy84NGJkNTllOTNlMjA0Y2Y5YjA4YWU2NWVmMjVhOGFiNV9nbG9iYWwtbGNmLXdheWJpbGx0ZW1wbGF0ZSIvPjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAzLjAybW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6MTM7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDU0LjdtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAxMzsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIHRleHQtYWxpZ246Y2VudGVyOwogICAgCiAgICAKICAgICB3aWR0aDoyNS41NzI4NTcxNDI4NTcxNDJtbTsgaGVpZ2h0OjMuMDJtbTsgdG9wOjEzLjM0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+U1RBTkRBUkQ8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPSIKICAgIAogICAgCiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBsZWZ0OiA5LjE3bW07CiAgICB0b3A6IDI0LjQ3bW07IAogICAgd2lkdGg6IDg3LjY4bW07CiAgICBoZWlnaHQ6IDE3LjVtbTsKICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOwogICAgIiAKICAgIGRhdGEtd2lkdGg9Ijg3LjY4IgogICAgZGF0YS1oZWlnaHQ9IjE3LjUiCiAgICBkYXRhLWxlZnQ9IjkuMTciCiAgICBkYXRhLXRvcD0iMjQuNDciCiAgICBkYXRhLXR5cGVDb2RlPSJjb2RlMTI4IgogICAgZGF0YS10cmFuc2Zvcm09IjAiCiAgICBkYXRhLXRleHQ9dHJ1ZQogICAgZGF0YS12YWx1ZT0iNjQ5MDU0Mjk2MzY3IgogICAgY2xhc3M9ImNuLXByaW50LWltZ2JhcmNvZGUiPjxpbWcgc3JjPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lqOCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNjdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0d0x5OUZUaWNLSUNBZ0lDQWdJQ0FnSUNkb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5VVVpOHlNREF4TDFKRlF5MVRWa2N0TWpBd01UQTVNRFF2UkZSRUwzTjJaekV3TG1SMFpDYytDanh6ZG1jZ1ptbHNiQzF2Y0dGamFYUjVQU0l4SWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnWTI5c2IzSXRjbVZ1WkdWeWFXNW5QU0poZFhSdklpQmpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVQU0poZFhSdklpQjBaWGgwTFhKbGJtUmxjbWx1WnowaVlYVjBieUlnYzNSeWIydGxQU0ppYkdGamF5SWdjM1J5YjJ0bExXeHBibVZqWVhBOUluTnhkV0Z5WlNJZ2QybGtkR2c5SWpnM0lpQnpkSEp2YTJVdGJXbDBaWEpzYVcxcGREMGlNVEFpSUhOb1lYQmxMWEpsYm1SbGNtbHVaejBpWVhWMGJ5SWdjM1J5YjJ0bExXOXdZV05wZEhrOUlqRWlJR1pwYkd3OUltSnNZV05ySWlCemRISnZhMlV0WkdGemFHRnljbUY1UFNKdWIyNWxJaUJtYjI1MExYZGxhV2RvZEQwaWJtOXliV0ZzSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdobGFXZG9kRDBpTVRjaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1ptOXVkQzFtWVcxcGJIazlJaWRFYVdGc2IyY25JaUJtYjI1MExYTjBlV3hsUFNKdWIzSnRZV3dpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpYldsMFpYSWlJR1p2Ym5RdGMybDZaVDBpTVRKd2VDSWdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTlJakFpSUdsdFlXZGxMWEpsYm1SbGNtbHVaejBpWVhWMGJ5SUtQandoTFMxSFpXNWxjbUYwWldRZ1lua2dkR2hsSUVKaGRHbHJJRWR5WVhCb2FXTnpNa1FnVTFaSElFZGxibVZ5WVhSdmNpMHRQanhrWldaeklHbGtQU0puWlc1bGNtbGpSR1ZtY3lJS0lDQXZQanhuQ2lBZ1BqeGtaV1p6SUdsa1BTSmtaV1p6TVNJS0lDQWdJRDQ4WTJ4cGNGQmhkR2dnWTJ4cGNGQmhkR2hWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaUlHbGtQU0pqYkdsd1VHRjBhREVpQ2lBZ0lDQWdJRDQ4Y0dGMGFDQmtQU0pOTUNBd0lFdzROeUF3SUV3NE55QXhOeUJNTUNBeE55Qk1NQ0F3SUZvaUNpQWdJQ0FnSUM4K1BDOWpiR2x3VUdGMGFBb2dJQ0FnUGp3dlpHVm1jd29nSUNBZ1BqeG5JR1pwYkd3OUluZG9hWFJsSWlCemRISnZhMlU5SW5kb2FYUmxJZ29nSUNBZ1BqeHlaV04wSUhnOUlqQWlJSGRwWkhSb1BTSTROeUlnYUdWcFoyaDBQU0l4TnlJZ2VUMGlNQ0lnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnTHo0OEwyY0tJQ0FnSUQ0OFp5Qm1hV3hzUFNKM2FHbDBaU0lnYzNSeWIydGxQU0ozYUdsMFpTSUtJQ0FnSUQ0OGNtVmpkQ0I0UFNJd0lpQjNhV1IwYUQwaU9EY2lJR2hsYVdkb2REMGlNVGNpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1DSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNUzQzTWlJZ2FHVnBaMmgwUFNJeE55SWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpJdU5UZ2lJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakF1T0RZaUlHaGxhV2RvZEQwaU1UY2lJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJMUxqRTNJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l5TGpVNElpQm9aV2xuYUhROUlqRTNJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU9TNDBPQ0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTUM0NE5pSWdhR1ZwWjJoMFBTSXhOeUlnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqRXhMaklpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9EWWlJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSXhOUzQxSWlCNVBTSXdJaUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0ZCaGRHZ3hLU0lnWm1sc2JEMGlZbXhoWTJzaUlIZHBaSFJvUFNJeExqY3lJaUJvWldsbmFIUTlJakUzSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlNVGd1T1RVaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqRXVOeklpSUdobGFXZG9kRDBpTVRjaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0l5TVM0MU15SWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNeTQwTlNJZ2FHVnBaMmgwUFNJeE55SWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpJMUxqZzBJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l4TGpjeUlpQm9aV2xuYUhROUlqRTNJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1qZ3VORE1pSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpJdU5UZ2lJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSXpNUzQ0TnlJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1DNDROaUlnYUdWcFoyaDBQU0l4TnlJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJak16TGpVNUlpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXhMamN5SWlCb1pXbG5hSFE5SWpFM0lpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpTXpjdU9TSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNaTQxT0NJZ2FHVnBaMmgwUFNJeE55SWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpReUxqSXhJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l4TGpjeUlpQm9aV2xuYUhROUlqRTNJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU5EVXVOalVpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9EWWlJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSTBOeTR6T0NJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1DNDROaUlnYUdWcFoyaDBQU0l4TnlJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJalE1TGpFaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqQXVPRFlpSUdobGFXZG9kRDBpTVRjaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0kxTVM0Mk9DSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNUzQzTWlJZ2FHVnBaMmgwUFNJeE55SWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpVMkxqZzFJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpnMklpQm9aV2xuYUhROUlqRTNJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU5qRXVNVFlpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9EWWlJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSTJNaTQ0T0NJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1TNDNNaUlnYUdWcFoyaDBQU0l4TnlJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJalkyTGpNeklpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMamcySWlCb1pXbG5hSFE5SWpFM0lpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpTmprdU56Y2lJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakF1T0RZaUlHaGxhV2RvZEQwaU1UY2lJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJM01pNHpOaUlnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTVM0M01pSWdhR1ZwWjJoMFBTSXhOeUlnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqYzFMamdpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpFdU56SWlJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSTRNQzR4TVNJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1pNDFPQ0lnYUdWcFoyaDBQU0l4TnlJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJamd6TGpVMUlpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMamcySWlCb1pXbG5hSFE5SWpFM0lpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpT0RVdU1qZ2lJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakV1TnpJaUlHaGxhV2RvZEQwaU1UY2lJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQzgrUEM5bkNpQWdQand2WndvK1BDOXpkbWNLUGdvPSIgc3R5bGU9IndpZHRoOjg3LjY4bW07aGVpZ2h0OjE3LjVtbTsiLz48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249Im1pZGRsZSIgc3R5bGU9ImhlaWdodDogMTYuOTFtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDoyMTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzdtbTsKICAgIGZvbnQtc2l6ZToxM3B0OwogICAgei1pbmRleDogMjE7CiAgICAKICAgIGZvbnQtd2VpZ2h0OmJvbGQ7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIHRleHQtYWxpZ246Y2VudGVyOwogICAgCiAgICAKICAgIGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7IHRvcDo0Mi44Nm1tO3dpZHRoOiAyM21tO2xpbmUtaGVpZ2h0OjEzcHQ7Ij48ZGl2PktVTC1LVUwzMTAtMDI3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDVtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDoyMjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNC45NzAwMDAwMDAwMDAwMDFtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAyMjsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB0b3A6NDIuMzRtbTt3aWR0aDogNzEuMDRtbTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PkN1c3RvbWVyOiBOaXZlazwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAxMS4wOG1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjI3OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1LjIzbW07CiAgICBmb250LXNpemU6MTBwdDsKICAgIHotaW5kZXg6IDI3OwogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgIHRvcDo1MC4wMW1tO3dpZHRoOiA3MS4wNG1tO2xpbmUtaGVpZ2h0OjEwcHQ7Ij48ZGl2Pkh1YSBhbGFsYWxhbGEgZGZkZGZkLCBXcCBLdWFsYSBMdW1wdXIsIEt1YWxhIEx1bXB1ciwgNTAyMDA8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249Im1pZGRsZSIgc3R5bGU9ImhlaWdodDogNC40N21tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjI5OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1LjVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAyOTsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgIGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyB3aWR0aDo2NC4yODU3MTQyODU3MTQyOG1tOyBoZWlnaHQ6NC40N21tOyB0b3A6NjIuNzFtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj5TZWxsZXI6IFBCR19TdG9yZSA4ODwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiA0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6MzE7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDUuMjRtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAzMTsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDozNy42NDk3MDExOTQwMzM0bW07IGhlaWdodDo0bW07IHRvcDo2OG1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43OTY4MTkwNzI4ODk1OTU3KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PlBhY2thZ2UgV2VpZ2h0OiAxIGtnPC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDozMjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMzVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAzMjsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIHRleHQtYWxpZ246cmlnaHQ7CiAgICAKICAgIAogICAgIHdpZHRoOjUwLjE5OTYwMTU5MjA0NDUzbW07IGhlaWdodDo0bW07IHRvcDo2OG1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43OTY4MTkwNzI4ODk1OTU3KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2Pk9yZGVyIGNyZWF0aW9uIHRpbWU6IDMxIE1heSAyMDIzPC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDNtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDozNDsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNS41bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogMzQ7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzUuODY0MzI3NjgwODU4NTk0bW07IGhlaWdodDozbW07IHRvcDo3NG1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC45NzU5MDAwNzI5NDg1MzMyKTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2Pk8vTjogMzgwODIyNzAyNjQzNDc1PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDNtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDozNTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNDAuMzFtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAzNTsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDoyNi4wODQ0NzgxNDMxNDA5ODhtbTsgaGVpZ2h0OjNtbTsgdG9wOjc0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjY5MDA2NTU1OTM0MjM1NDMpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+Tm8uIEl0ZW0gMTwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iCiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6MzY7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDYwbW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogMzY7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICB0ZXh0LWFsaWduOnJpZ2h0OwogICAgCiAgICAKICAgICB0b3A6NzRtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7d2lkdGg6MTkuMjg1NzE0Mjg1NzE0Mjg1bW07bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogNC41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6Mzc7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc3LjA2bW07CiAgICBmb250LXNpemU6MTJwdDsKICAgIHotaW5kZXg6IDM3OwogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsIEJsYWNrOwogICAgdGV4dC1hbGlnbjpjZW50ZXI7CiAgICAKICAgIAogICAgIHRvcDo3M21tO3dpZHRoOiAyM21tO2xpbmUtaGVpZ2h0OjEycHQ7Ij48ZGl2Pk5vbi1DT0Q8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPSIKICAgIAogICAgCiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBsZWZ0OiAtNS4wM21tOwogICAgdG9wOiAxMDMuODhtbTsgCiAgICB3aWR0aDogNDkuMjZtbTsKICAgIGhlaWdodDogMTUuNDhtbTsKICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsKICAgICIgCiAgICBkYXRhLXdpZHRoPSI0OS4yNiIKICAgIGRhdGEtaGVpZ2h0PSIxNS40OCIKICAgIGRhdGEtbGVmdD0iLTUuMDMiCiAgICBkYXRhLXRvcD0iMTAzLjg4IgogICAgZGF0YS10eXBlQ29kZT0iY29kZTEyOCIKICAgIGRhdGEtdHJhbnNmb3JtPSI5MCIKICAgIGRhdGEtdGV4dD10cnVlCiAgICBkYXRhLXZhbHVlPSIzLUpOVC0wMCIKICAgIGNsYXNzPSJjbi1wcmludC1pbWdiYXJjb2RlIj48aW1nIHNyYz0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJajgrQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDY3RMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHdMeTlGVGljS0lDQWdJQ0FnSUNBZ0lDZG9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OVVVaTh5TURBeEwxSkZReTFUVmtjdE1qQXdNVEE1TURRdlJGUkVMM04yWnpFd0xtUjBaQ2MrQ2p4emRtY2dabWxzYkMxdmNHRmphWFI1UFNJeElpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ1kyOXNiM0l0Y21WdVpHVnlhVzVuUFNKaGRYUnZJaUJqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1UFNKaGRYUnZJaUIwWlhoMExYSmxibVJsY21sdVp6MGlZWFYwYnlJZ2MzUnliMnRsUFNKaWJHRmpheUlnYzNSeWIydGxMV3hwYm1WallYQTlJbk54ZFdGeVpTSWdkMmxrZEdnOUlqUTVJaUJ6ZEhKdmEyVXRiV2wwWlhKc2FXMXBkRDBpTVRBaUlITm9ZWEJsTFhKbGJtUmxjbWx1WnowaVlYVjBieUlnYzNSeWIydGxMVzl3WVdOcGRIazlJakVpSUdacGJHdzlJbUpzWVdOcklpQnpkSEp2YTJVdFpHRnphR0Z5Y21GNVBTSnViMjVsSWlCbWIyNTBMWGRsYVdkb2REMGlibTl5YldGc0lpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHaGxhV2RvZEQwaU1UVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdabTl1ZEMxbVlXMXBiSGs5SWlkRWFXRnNiMmNuSWlCbWIyNTBMWE4wZVd4bFBTSnViM0p0WVd3aUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWJXbDBaWElpSUdadmJuUXRjMmw2WlQwaU1USndlQ0lnYzNSeWIydGxMV1JoYzJodlptWnpaWFE5SWpBaUlHbHRZV2RsTFhKbGJtUmxjbWx1WnowaVlYVjBieUlLUGp3aExTMUhaVzVsY21GMFpXUWdZbmtnZEdobElFSmhkR2xySUVkeVlYQm9hV056TWtRZ1UxWkhJRWRsYm1WeVlYUnZjaTB0UGp4a1pXWnpJR2xrUFNKblpXNWxjbWxqUkdWbWN5SUtJQ0F2UGp4bkNpQWdQanhrWldaeklHbGtQU0prWldaek1TSUtJQ0FnSUQ0OFkyeHBjRkJoZEdnZ1kyeHBjRkJoZEdoVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlJR2xrUFNKamJHbHdVR0YwYURFaUNpQWdJQ0FnSUQ0OGNHRjBhQ0JrUFNKTk1DQXdJRXcwT1NBd0lFdzBPU0F4TlNCTU1DQXhOU0JNTUNBd0lGb2lDaUFnSUNBZ0lDOCtQQzlqYkdsd1VHRjBhQW9nSUNBZ1Bqd3ZaR1ZtY3dvZ0lDQWdQanhuSUdacGJHdzlJbmRvYVhSbElpQnpkSEp2YTJVOUluZG9hWFJsSWdvZ0lDQWdQanh5WldOMElIZzlJakFpSUhkcFpIUm9QU0kwT1NJZ2FHVnBaMmgwUFNJeE5TSWdlVDBpTUNJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0x6NDhMMmNLSUNBZ0lENDhaeUJtYVd4c1BTSjNhR2wwWlNJZ2MzUnliMnRsUFNKM2FHbDBaU0lLSUNBZ0lENDhjbVZqZENCNFBTSXdJaUIzYVdSMGFEMGlORGtpSUdobGFXZG9kRDBpTVRVaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlNQ0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTUM0NElpQm9aV2xuYUhROUlqRTFJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1TNHlJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJeUxqTTVJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJMExqTTRJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpnaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJMUxqazRJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJMkxqYzNJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l4TGpJaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJNExqYzJJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJNUxqazJJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpnaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJeE1TNHhOU0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTVM0eUlpQm9aV2xuYUhROUlqRTFJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1UTXVNVFVpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU5DSWdhR1ZwWjJoMFBTSXhOU0lnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqRXpMamswSWlCNVBTSXdJaUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0ZCaGRHZ3hLU0lnWm1sc2JEMGlZbXhoWTJzaUlIZHBaSFJvUFNJd0xqZ2lJR2hsYVdkb2REMGlNVFVpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSXhOUzR4TkNJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1TNHlJaUJvWldsbmFIUTlJakUxSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlNVGN1TlRNaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqQXVOQ0lnYUdWcFoyaDBQU0l4TlNJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJakU0TGpNeklpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXhMaklpSUdobGFXZG9kRDBpTVRVaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0l5TUM0M01pSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNQzQ0SWlCb1pXbG5hSFE5SWpFMUlpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpTWpFdU9URWlJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakF1T0NJZ2FHVnBaMmgwUFNJeE5TSWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpJekxqRXhJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l4TGpJaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJeU5TNDFJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJeU5pNHlPU0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTUM0MElpQm9aV2xuYUhROUlqRTFJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1qY3VORGtpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9DSWdhR1ZwWjJoMFBTSXhOU0lnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqSTRMalk0SWlCNVBTSXdJaUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0ZCaGRHZ3hLU0lnWm1sc2JEMGlZbXhoWTJzaUlIZHBaSFJvUFNJeExqSWlJR2hsYVdkb2REMGlNVFVpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSXpNQzQyTnlJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1DNDBJaUJvWldsbmFIUTlJakUxSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlNekV1T0RjaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqRXVNaUlnYUdWcFoyaDBQU0l4TlNJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJak16TGpRMklpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMamdpSUdobGFXZG9kRDBpTVRVaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0l6TlM0d05pSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNQzQwSWlCb1pXbG5hSFE5SWpFMUlpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpTXpZdU1qVWlJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakV1TWlJZ2FHVnBaMmgwUFNJeE5TSWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpNM0xqZzFJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpnaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJek9TNDBOQ0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTUM0MElpQm9aV2xuYUhROUlqRTFJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU5EQXVOak1pSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9DSWdhR1ZwWjJoMFBTSXhOU0lnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqUXlMall6SWlCNVBTSXdJaUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0ZCaGRHZ3hLU0lnWm1sc2JEMGlZbXhoWTJzaUlIZHBaSFJvUFNJd0xqUWlJR2hsYVdkb2REMGlNVFVpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSTBNeTQ0TWlJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1DNDRJaUJvWldsbmFIUTlJakUxSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlORFV1T0RFaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqRXVNaUlnYUdWcFoyaDBQU0l4TlNJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJalEzTGpReElpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMalFpSUdobGFXZG9kRDBpTVRVaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0kwT0M0eUlpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMamdpSUdobGFXZG9kRDBpTVRVaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDOCtQQzluQ2lBZ1Bqd3Zad28rUEM5emRtY0tQZ289IiBzdHlsZT0id2lkdGg6NDkuMjZtbTtoZWlnaHQ6MTUuNDhtbTsiLz48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJDdXN0b20iCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDM0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NDg7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDEwMC41bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNDg7CiAgICAKICAgIAogICAgCiAgICB0ZXh0LW9yaWVudGF0aW9uOnZlcnRpY2FsOwogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgIHdyaXRpbmctbW9kZTp0Yi1ybDtkaXNwbGF5OmZsZXg7anVzdGlmeS1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6ZmxleC1zdGFydDsgd2lkdGg6My4yMTQyODU3MTQyODU3MTQ0bW07IGhlaWdodDozNG1tOyB0b3A6My41OW1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IkN1c3RvbSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMzRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo0OTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTAwLjVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA0OTsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB3aWR0aDozLjIxNDI4NTcxNDI4NTcxNDRtbTsgaGVpZ2h0OjM0bW07IHRvcDozNi45M21tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IkN1c3RvbSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMzRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo1MTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTAwLjVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA1MTsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB3aWR0aDozLjIxNDI4NTcxNDI4NTcxNDRtbTsgaGVpZ2h0OjM0bW07IHRvcDo3My4xN21tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IkN1c3RvbSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMzRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo1MzsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTAwLjVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA1MzsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB3aWR0aDozLjIxNDI4NTcxNDI4NTcxNDRtbTsgaGVpZ2h0OjM0bW07IHRvcDoxMTEuNTRtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMi41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NTQ7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDNtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA1NDsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDozMS42NDE0Mjg1NzE0Mjg1N21tOyBoZWlnaHQ6Mi41bW07IHRvcDoxNDMuOTRtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMi41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NTY7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDI3LjYxbW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNTY7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzEuNjQxNDI4NTcxNDI4NTdtbTsgaGVpZ2h0OjIuNW1tOyB0b3A6MTQzLjk0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDIuNW1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjU3OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1Mi4ybW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNTc7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzEuNjQxNDI4NTcxNDI4NTdtbTsgaGVpZ2h0OjIuNW1tOyB0b3A6MTQzLjk0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDIuNW1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjU4OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3Ni44bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNTg7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzEuNjQxNDI4NTcxNDI4NTdtbTsgaGVpZ2h0OjIuNW1tOyB0b3A6MTQzLjk0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iQ3VzdG9tIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAzNG1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjU5OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwLjg5bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNTk7CiAgICAKICAgIAogICAgCiAgICB0ZXh0LW9yaWVudGF0aW9uOnZlcnRpY2FsOwogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgIHdyaXRpbmctbW9kZTp0Yi1ybDtkaXNwbGF5OmZsZXg7anVzdGlmeS1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6ZmxleC1zdGFydDsgd2lkdGg6My4yMTQyODU3MTQyODU3MTQ0bW07IGhlaWdodDozNG1tOyB0b3A6MTExLjU0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iQ3VzdG9tIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAzNG1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjYwOwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwLjg5bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNjA7CiAgICAKICAgIAogICAgCiAgICB0ZXh0LW9yaWVudGF0aW9uOnZlcnRpY2FsOwogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgIHdyaXRpbmctbW9kZTp0Yi1ybDtkaXNwbGF5OmZsZXg7anVzdGlmeS1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6ZmxleC1zdGFydDsgd2lkdGg6My4yMTQyODU3MTQyODU3MTQ0bW07IGhlaWdodDozNG1tOyB0b3A6NzMuMTdtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJDdXN0b20iCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDM0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NjE7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAuODltbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA2MTsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB3aWR0aDozLjIxNDI4NTcxNDI4NTcxNDRtbTsgaGVpZ2h0OjM0bW07IHRvcDozNi45M21tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IkN1c3RvbSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMzRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo2MjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMC44OW1tOwogICAgZm9udC1zaXplOjlwdDsKICAgIHotaW5kZXg6IDYyOwogICAgCiAgICAKICAgIAogICAgdGV4dC1vcmllbnRhdGlvbjp2ZXJ0aWNhbDsKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICB3cml0aW5nLW1vZGU6dGItcmw7ZGlzcGxheTpmbGV4O2p1c3RpZnktaXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7IHdpZHRoOjMuMjE0Mjg1NzE0Mjg1NzE0NG1tOyBoZWlnaHQ6MzRtbTsgdG9wOjMuNTltbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJDdXN0b20iCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDUzLjg0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NjM7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDYuOTdtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA2MzsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgdGV4dC1hbGlnbjpjZW50ZXI7CiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB0b3A6ODUuODJtbTt3aWR0aDogMy4wOW1tO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+UG9ydCBDb2RlOiAzLUpOVC0wMDwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiA0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NjU7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDltbTsKICAgIGZvbnQtc2l6ZToxMnB0OwogICAgei1pbmRleDogNjU7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICB0ZXh0LWFsaWduOmNlbnRlcjsKICAgIAogICAgCiAgICAgd2lkdGg6OTAuMTczMTY2NzQwNDQ0NDZtbTsgaGVpZ2h0OjRtbTsgdG9wOjIwbW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjk3NTkwMDA3Mjk0ODUzMzMpO2xpbmUtaGVpZ2h0OjEycHQ7Ij48ZGl2PlRSQUNLSU5HIE5VTUJFUjogNjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSIKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo2NjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNTUuNzdtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA2NjsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB0b3A6NjIuNzFtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7d2lkdGg6MjUuNzE0Mjg1NzE0Mjg1NzE1bW07bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj48L2Rpdj48L2Rpdj48aW1nIHN0eWxlPSIKICAgICAgICAKICAgIAogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgbGVmdDogNTMuNDRtbTsKICAgIHRvcDogNC41bW07IAogICAgekluZGV4OjY4OwogICAgei1pbmRleDogNjg7CiAgICB3aWR0aDogMjEuNjFtbTsKICAgIGhlaWdodDogNy40MW1tOwogICAgIiBzcmM9Imh0dHBzOi8vY2RuLWNsb3VkcHJpbnQuY2Fpbmlhby5jb20vd2F5YmlsbC1wcmludC9jbG91ZHByaW50LWltZ3MvZTdlMzEwMmI3OWNjNDUyZWJlNjdlNzA0ODI1NzIwYTFfZ2xvYmFsLWxjZi13YXliaWxsdGVtcGxhdGUucG5nIi8\+PGltZyBzdHlsZT0iCiAgICAgICAgCiAgICAKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIGxlZnQ6IDc2LjNtbTsKICAgIHRvcDogNjIuNG1tOyAKICAgIHpJbmRleDo2OTsKICAgIHotaW5kZXg6IDY5OwogICAgd2lkdGg6IDI0LjRtbTsKICAgIGhlaWdodDogMTAuNW1tOwogICAgIiBzcmM9Imh0dHBzOi8vY2RuLWNsb3VkcHJpbnQuY2Fpbmlhby5jb20vd2F5YmlsbC1wcmludC9jbG91ZHByaW50LWltZ3MvZGYyN2UyNDVjYmI4NGRhZGJlODBkYmE5YjVkMTNiMzVfZ2xvYmFsLWxjZi13YXliaWxsdGVtcGxhdGUuanBnIi8\+PC9kaXY\+PC9kaXY\+",

      "doc\_type": "HTML"

    },

    "success": true

  },

  "code": "0",

  "request\_id": "2102ebef16868804790416770"

}

#### **Field Analysis**

##### **file**

This field will respond to strings that are encrypted with base64, and you will need to decrypt them using base64\. After decryption you will get the HTML text. For the PDF version, you need to access the src link in the text tag to get the PDF file. For the HTML version, you will need to render the fetched HTML text to show the seller the full AWB shipping label.

Note: The PDF link is valid for ten minutes, so please download it as soon as possible.

##### **pdf\_url**

This field will only respond if the value of the request parameter doc\_type is set to PDF. You can access the link directly to get the PDF file.

Note: The PDF link is valid for ten minutes, so please download it as soon as possible.

## **Step 4: Call ReadyToShip API**

After the order is updated to packed status, you can call ReadyToShip API to update the order to Ready to ship status. When updated to this status, for pick up type of parcels, the system will automatically notify the courier to pick up the parcels, for dropoff type of parcels, the seller needs to deliver the parcels to the specified location within SLA time.

### **Request Demo**

{

  "packages": \[

    {

      "package\_id": "FP038524014"

    }，

   ......

  ]

}

#### **Response Demo**

{

 "result": {

  "data": {

   "packages": \[

    {

     "msg": "success",

     "item\_err\_code": "0",

     "package\_id": "FP021111326834107",

     "retry": false

    }

   ]

  },

  "success": true

 },

 "code": "0",

 "request\_id": "2102ebef16868868897153546"

}

# **2\.DBS/SOF order fulfillment**

The full name of DBS/SOF is Delivery By Seller/Seller Own Fleet, which is a third\-party fulfillment order initiated by the seller to contact non\-lazada logistics, which has a long SLA and cannot use the Print AWB API to print the shipping label.

## **How to determine if order item is of DBS type**

You need to call GetOrderItems API to check the "delivery\_option\_sof" field in each object, when the value of the field is 1, it means the order item is of DBS type. Only order items of the same shipping type can be packed in the same package, otherwise the system will automatically split the package.

## **DBS/SOF order fulfillment API call flow chart**

![2.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1707104047575_cKzL7TQz)

## **Order Practice**

Since the request from GetOrderItem API \~ ReadyToShip API does not change, this section will omit this part of the request. Please refer to the first step, second step and fourth step of the first part of the normal order (local store) fulfillment process if needed.

### **Update package status to delivered or failed delivery**

Once the DBS order is updated to RTS status, the seller needs to send the package and deliver it within the local country policy and update the order status to delivered or failed delivery.

[ConfirmDeliveryForDBS](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fsof%2Fdelivered)

You can use the ConfirmDeliveryForDBS API to update the status of a DBS order from RTS to Delivered.

[FailedDeliveryForDBS](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fsof%2Ffailed_delivery)

You can use the FailedDeliveryForDBS API to update the status of a DBS order from RTS to Failed Delivery.

# **3\.Digital Order**

Digital orders are items that do not require physical delivery. For example, CDkeys or redemption codes are items that need to be sent to the buyer's email or cell phone.

![3.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1707104047789_ttcjp4WL)

## **How to determine if order item is of Digital type**

You need to call GetOrderItems API to check the "is\_digital" field in each object, when the value of the field is 1, it means the order item is of Digital type. Only order items of the same shipping type can be packed in the same package, otherwise the system will automatically split the package.

## **Order Practice**

When you have completed a Digital order, you need to call the [DeliverDigital API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fdigital%2Fdelivered) to set the corresponding order item to delivered status.

---

## Payment method options

<a id="payment-method-options-121753"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29616&docId=121753&lang=en_US>

| Country | payment\_method |
| --- | --- |
| SG | MIXEDCARD |
| DBS\_IPP |
| OCBC\_IPP |
| PAYMENT\_ACCOUNT |
| PAYPAL |
| WALLET\_DBSPAYLAH |
| VIRTUAL\_ACCOUNT\_PAYNOW |
| PH | MIXEDCARD |
| COD |
| BDO\_IPP |
| PAYMENT\_ACCOUNT |
| PAYPAL |
| GCASH\_PP |
| PAY\_LATER |
| MY | MIXEDCARD |
| COD |
| MAYBANK\_IPP |
| MOLPAY\_AM\_BANK\_ONLINE |
| MOLPAY\_CIMB\_BANK\_ONLINE |
| MOLPAY\_HL\_BANK\_ONLINE |
| MOLPAY\_ISLAM\_BANK\_ONLINE |
| MOLPAY\_MAYBANK\_ONLINE |
| MOLPAY\_PUBLIC\_BANK\_ONLINE |
| MOLPAY\_RHB\_BANK\_ONLINE |
| MOLPAY\_OTHER\_BANK\_ONLINE |
| MOLPAY\_SEVENELEVEN\_OTC |
| PAYMENT\_ACCOUNT |
| PAYPAL |
| GN\_TNG\_EBANK |
| AC\_WALLET\_BOOST |
| AC\_WALLET\_BOOST\_DIRECT\_DEBIT |
| TH | MIXEDCARD |
| COD |
| CCPP\_KTC\_IPP |
| CCPP\_BAY\_IPP |
| CCPP\_BBL\_IPP |
| CCPP\_KFC\_IPP |
| CCPP\_CITI\_IPP |
| CCPP\_SCB\_IPP |
| CCPP\_TBANK\_IPP |
| CCPP\_UOB\_IPP |
| SIAM\_COMMERCIAL\_BANK\_ONLINE |
| KRUNG\_THAI\_BANK\_ONLINE |
| TMB\_BANK\_ONLINE |
| THANACHART\_BANK\_ONLINE |
| BANGKOK\_BANK\_ONLINE |
| UNITED\_OVERSEAS\_BANK\_ONLINE |
| KASIKORN\_BANK\_ONLINE |
| AYUTTHAYA\_BANK\_ONLINE |
| KASIKORN\_BANK\_VA |
| BANGKOK\_BANK\_VA |
| AYUTTHAYA\_BANK\_VA |
| SIAM\_COMMERCIAL\_BANK\_VA |
| KRUNG\_THAI\_BANK\_VA |
| SEVENELEVEN\_OTC |
| CCPP\_FREE\_OTC |
| PAYMENT\_ACCOUNT |
| PAYPAL |
| TMN\_EXPRESS |
| AC\_WALLET\_RABBIT\_LINE\_PAY |
| VIRTUAL\_ACCOUNT\_DEEPLINK\_BKKBTH |
| VIRTUAL\_ACCOUNT\_DEEPLINK\_SICOTH |
| VIRTUAL\_ACCOUNT\_DEEPLINK\_AYUDTH |
| VIRTUAL\_ACCOUNT\_DEEPLINK\_KRTHTH |
| VN | MIXEDCARD |
| COD |
| PAYMENT\_ACCOUNT |
| CITIBANK\_MANUAL\_IPP |
| EXIMBANK\_MANUAL\_IPP |
| HSBC\_MANUAL\_IPP |
| MARITIMEBANK\_MANUAL\_IPP |
| SACOMBANK\_MANUAL\_IPP |
| SCB\_MANUAL\_IPP |
| SHINHANBANK\_MANUAL\_IPP |
| STANDARDCHARTERED\_MANUAL\_IPP |
| TPBANK\_MANUAL\_IPP |
| VIB\_MANUAL\_IPP |
| VIETINBANK\_MANUAL\_IPP |
| VPBANK\_MANUAL\_IPP |
| NAPAS\_ONLINE |
| SACOMBANK\_DL |
| AKULAKU\_IPP |
| MOMO\_WALLET |
| ZALOPAY\_WALLET |
| WALLET\_ZALOPAY\_CASHIER |
| EM\_WALLET |
| VTPVN |
| ID | MIXEDCARD |
| COD |
| BCA\_IPP |
| DOKU\_BNI\_IPP |
| DOKU\_BRI\_IPP |
| DOKU\_BUKOPIN\_IPP |
| DOKU\_CIMBNIAGA\_IPP |
| DOKU\_CITIBANK\_IPP |
| DOKU\_DANAMON\_IPP |
| DOKU\_HSBC\_IPP |
| DOKU\_MANDIRI\_IPP |
| DOKU\_MAYBANK\_IPP |
| DOKU\_MNC\_IPP |
| DOKU\_OCBC\_IPP |
| DOKU\_PANIN\_IPP |
| DOKU\_PERMATA\_IPP |
| DOKU\_STANDARDCHARTERED\_IPP |
| DOKU\_UOB\_IPP |
| BNI\_VA |
| BCA\_VA |
| MANDIRIMANDIRI\_VA |
| ALFAMART\_OTC |
| INDOMARET\_OTC |
| KLIKBCA\_VA |
| PAYMENT\_ACCOUNT |
| ID\_PAYMENT\_ACCOUNT |
| DANA\_EBANK |
| KREDIVO\_ONLINE |
| BRI\_DEBITCARD |
| BNI\_DEBITCARD |
| BCA\_DEBITCARD |
| MANDIRI\_DEBITCARD |
| AKULAKU\_IPP |
| PAY\_LATER |
| WALLET\_OVO |
| CREDITPAY\_KREDIVO |

---

## New Fulfillment API  Details

<a id="new-fulfillment-api-details-120984"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30764&docId=120984&lang=en_US>

# API Link:

**GetOrders**

[https://open.lazada.com/apps/doc/api?path\=%2Forders%2Fget](https://open.lazada.com/apps/doc/api?path=%2Forders%2Fget)

Description:Use this API to get the list of items for a range of orders1\..

**GetOrderitems**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Fitems%2Fget](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fitems%2Fget)

Description:Use this API to get the item information of an order.

**GetShipmentProvider**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Fshipment%2Fproviders%2Fget](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fshipment%2Fproviders%2Fget)

Description:Use this API to get the list of all active shipping providers, which is needed when working with the Pack API.

**Pack**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Ffulfill%2Fpack](https://open.lazada.com/apps/doc/api?path=%2Forder%2Ffulfill%2Fpack)

Description:Use this API to mark an order item as being packed.

**RecreatePackage**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Fpackage%2Frepack](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Frepack)

Description:Use this API to mark a package item as being repack.

**PrintAWB**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Fpackage%2Fdocument%2Fget](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fdocument%2Fget)

Description:Use this API to retrieve order\-related documents, only for shipping labels.

**ReadyToShip**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Fpackage%2Frts](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Frts)

*Description:*Use this API to mark an order item as being ready to ship.

**ConfirmDeliveryForDBS**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Fpackage%2Fsof%2Fdelivered](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fsof%2Fdelivered)

*Des**cription:*Use this API to mark an sof order item as being delivered.

**FailedDeliveryForDBS**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Fpackage%2Fsof%2Ffailed\_delivery](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fsof%2Ffailed_delivery)

*Des**cription:*Use this API to mark an sof order item as being delivered failed

**DeliverDigital**

[https://open.lazada.com/apps/doc/api?path\=%2Forder%2Fdigital%2Fdelivered](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fdigital%2Fdelivered)

*Des**cription:*Use this API to mark a digital order item as being delivered.

  

  

![image](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/18456689/1660559427898-a59bb5d6-5f60-4027-9565-c9a1512bc912.png "image")

## 2\.2 API details

#### 2\.2\.1 GetShipmentProvider

Common Parameters

**Service Endpoints**

| **Region** | **Endpoint** |
| --- | --- |
| Philippines | <https://api.lazada.com.ph/rest> |
| Vietnam | <https://api.lazada.vn/rest> |
| Indonesia | <https://api.lazada.co.id/rest> |
| Thailand | <https://api.lazada.co.th/rest> |
| Singapore | <https://api.lazada.sg/rest> |
| Malaysia | <https://api.lazada.com.my/rest> |

**Common Request Parameters**

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| app\_key | String | true | Unique app ID issued by LAZOP console when you apply for an app category |
| timestamp | String | true | The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32\) with less than 7200s difference from UTC time |
| access\_token | String | true | API interface call credentials |
| sign\_method | String | true | The HMAC hash algorithm you are using to calculate your signature |
| sign | String | true | Part of the authentication process that is used for identifying and verifying who is sending a request (click [here](https://open.lazada.com/doc/doc.htm#?nodeId=10450&docId=108068) for details) |

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **orders** | **list** | true | **\[****{"orderId":"3423","orderItemIds":\["23423","234234"]},{"orderId":"3423","orderItemIds":\["23423","234234"]}****]** |
| **\-order\_id** | **string** | true |  |
| **\-order\_item\_ids** | **list** | true |  |
| shipping\_allocate\_type | string | true | NTFS/TFS TFS available to Local only, NTFS available to CB only |

Common Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
|  |  |  |  |

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-platform\_default** | **int** | true | **1\=platform allocation 0/other\=need seller choose** |
| **\-shipment\_providers** | **list** | **optional** |  |
| **\-\-name** | **string** | true |  |
| \-shipping\_allocate\_type | string | true | TFS/NTFS |

Request Example

Response Example

Error Example

Error Codes

  

#### 2\.2\.2 Pack

  

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **shipment\_provider\_id** | **string** | **optional** | **depend on getShipmentProvider API, if platform\_default!\=1 , field is M** |
| **delivery\_type** | **string** | true | **dropship** |
| **pack\_order\_list** | **list** | true | **{"pack\_order\_list":\[{"order\_id":23432,"order\_item\_id":****\["23423","3243"]}]}** |
| \-order\_id | string | true |  |
| \-order\_item\_list | list | true |  |
| \-\-order\_item\_id | string |  |  |

  

  

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-pack\_order\_list** | **list** | **optional** |  |
| **\-\-order\_id** | **string** | true |  |
| \-\-order\_item\_list | list |  |  |
| **\-\-\-package\_id** | **string** | **optional** | **when item\_error\_code\=\=0 exist** |
| **\-\-\-shipment\_provider** | **string** | **optional** | **when item\_error\_code\=\=0 exist** |
| **\-\-\-tracking\_number** | **string** | **optional** | **when item\_error\_code\=\=0 exist** |
| **\-\-\-item\_err\_code** | **string** | true | **0 \=success other\=fail** |
| **\-\-\-msg** | **string** | **optional** | **when item\_error\_code !\=0 exist** |

  

  

#### 2\.2\.3 RecreatePackage

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **packages** | **list** | true | **\[{"package\_id":"FP23423"},{"package\_id":"FP23423"}]** |
| \-package\_id | string | true |  |

  

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-packages** | **list** | **optional** |  |
| **\-\-package\_id** | **string** | true |  |
| **\-\-item\_err\_code** | **string** | true | **0 \=success other\=fail** |
| **\-\-msg** | **string** | **optional** | **when item\_error\_code !\=0 exist** |

  

#### 2\.2\.4 PrintAWB

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| pacakges | list | true | **\[{"package\_id":"FP23423"},{"package\_id":"FP23423"}]** |
| \-package\_id | string | true |  |
| **doc\_type** | **string** | true | **HTML/PDF** |
|  |  |  | Support AWB with Full item list and AWB without Item list |

Common Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
|  |  |  |  |

Response Parameters

All parcels Awb will be combined in one file，To improve performance and maintain the original experience, Separate each package if required，need request one by one

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-file** | **string** | **optional** |  |
| **\-doc\_type** | **string** | **optional** | **PDF/HTML** |
| \-pdf\_url | string | optional | exist when doc\_type is PDF |

#### 2\.2\.5 ReadyToShip

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **packages** | **list** | true | **\[{"package\_id":"FP23423"},{"package\_id":"FP23423"}]** |
| \-package\_id |  |  |  |

  

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-packages** | **list** | **optional** |  |
| **\-\-package\_id** | **string** | true |  |
| **\-\-item\_err\_code** | **string** | true | **0 \=success other\=fail** |
| **\-\-msg** | **string** | **optional** | **when item\_error\_code !\=0 exist** |

#### 2\.2\.6 ConfirmDeliveryForDBS

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **packages** | **list** | true | **\[{"package\_id":"FP23423"},{"package\_id":"FP23423"}]** |
| \-pacakge\_id | string | true |  |

  

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-packages** | **list** | **optional** |  |
| **\-\-package\_id** | **string** | true |  |
| **\-\-**item\_err\_code | **string** | true | **0 \=success other\=fail** |
| **\-\-msg** | **string** | **optional** | **when item\_error\_code !\=0 exist** |

#### 2\.2\.7 FailedDeliveryForDBS

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **packages** | **list** | true | **\[{"package\_id":"FP23423"},{"package\_id":"FP23423"}]** |
| \-package\_id | string | true |  |

  

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-packages** | **list** | **optional** |  |
| **\-\-package\_id** | **string** | true |  |
| **\-\-**item\_err\_code | **string** | true | **0 \=success other\=fail** |
| **\-\-msg** | **string** | **optional** | **when item\_error\_code !\=0 exist** |

  

#### 2\.2\.8 DeliverDigital

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **orders** | **list** | true | **\[{"order\_id":"32423","**order\_item\_list**":\["23423","342342"]}]** |
| \-order\_id | string | true |  |
| \-order\_item\_list | list | true |  |

  

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-**orders | **list** | **optional** |  |
| **\-\-order\_id** | **string** | true |  |
| **\-\-order\_id\_list** | **string** | true |  |
| **\-\-\-msg** | **string** | **optional** | **when item\_error\_code !\=0 exist** |
| \-\-\-item\_err\_code | string | true | **0 \=success other\=fail** |
| \-\-\-order\_item\_id | string | true |  |

#### 2\.2\.9 GetPackageInfo \[Not Available Right Now]

Request Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **order\_item\_ids** | **list** | true | **\["23423","3243"]** |

  

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **order\_item\_ids** | **list** | true | **\["23423","3243"]** |

  

Response Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **errorCode** | **string** | true |  |
| **errorMsg** | **string** | **optional** |  |
| **success** | **bool** | true |  |
| **data** | **Object** |  |  |
| **\-order\_items** | **list** | **optional** |  |
| **\-\-order\_item\_id** | **string** | true |  |
| **\-\-package\_id** | **string** | **optional** | **when item\_error\_code \=\=0 exist** |
| **\-\-code** | **string** | true | **0 \=success other\=fail** |
| **\-\-msg** | **string** | **optional** | **when item\_error\_code !\=0 exist** |

---

## New Fulfillment API Announcement

<a id="new-fulfillment-api-announcement-120985"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=30764&docId=120985&lang=en_US>

# Background

Because Current Fulfillment API got below issues:

1. There is no a clear education Document to ISV developer;
2. Current all API's?Request Parameters is trade order item id, except Repack, that is not align with Fulfillment system logic, need to change RTS, Print AWB and SOF API's Request Parameters to Fulfillment package ID;
3. Too many back up logic for Open API, like RTS when no package in here, will auto trigger pack process, that is increasing fulfillment system and API?complexity; need to change to Pack at first and then request Print/ RTS based on Pack API?Response Parameters;
4. Optimize Get shipment provider API, Response Parameters based on fulfillment system: 3PL list or default;
5. Provide Tracking number checking;

 

We will Revamp Fulfillment API, and Provide Totally New Fulfillment to ERP Seller;

Old Fulfillment API will be offlined in **30th April 2023**;

# Overview

**Note**:For a complete flow chart, please refer to：[New Fulfillment API Flow Chart](https://www.yuque.com/docs/share/da1d477f-7f20-4acb-8217-082a5747106e#%20%E3%80%8ANew%20Fulfillment%20API%20Flow%20Chart%E3%80%8B)

## 1\.1 Order Status Flow Chart

## 

![](https://tida.alicdn.com/oss_1670397362524_null_9JvQBJ5Q)

![](https://id-live-02.slatic.net/p/a2c0b58f524e144cfba08deef772c3b0.jpg)

## 1\.2 Order API Call Flow

 ![](https://tida.alicdn.com/oss_1683276528975_null_uFmHVZOn)

 

![](https://id-live-02.slatic.net/p/76eb613c4fe167218d0347c5aacc1a8b.jpg)

## 1\.3 Scnarios List

![](https://id-live-02.slatic.net/p/176a81d137913b8a93960b88cb7c99bd.jpg) 
 
**You may also be interested in the following topics:**
 
Click here to view [New Fulfillment API Details](https://open.lazada.com/apps/doc/doc?nodeId=30765&docId=120984)

---

## Finance analysis

<a id="finance-analysis-108144"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29617&docId=108144&lang=en_US>

Use the following finance APIs to view and analyze the finance statistics and transaction details of the store.

1. Use **GetPayoutStatus** to retrieve payout amount and status in a specified period. Returned payout information includes opening balance, item revenue, shipping fee, shipping fee credit, refunds, closing balance, and guarantee deposit. The payout status is 1 (paid) or 0 (not paid).

  

1. Use **queryTransactionDetails** to retrieve transaction or fee details in a specified period. Transaction details include transaction date, type, number, amount, statement, payment status, order number, order item number, shipment type, shipment provider, and reference ID.

---

## GetPayoutStatus response field resolution

<a id="getpayoutstatus-response-field-resolution-120249"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29617&docId=120249&lang=en_US>

This table shows the calculation logic of some fields in GetPayoutStatus API and the fees covered.

  

| **response key** | **value** |
| --- | --- |
| item\_revenue | Item Price Credit |
| other\_revenue\_total | Shipping Fee (Paid By Customer)Seller CreditSeller Credit ItemLost or Damaged \- Sales Order ItemLost or Damaged \- Product |
| fees\_total | Monthly SubscriptionPayment FeeFulfillment by Lazada Handling Fee \- AutomaticHandling FeeCommissionOther FeeSeller Debit ItemShipping Fee (Charged by Lazada)Automatic Shipping FeeStorage FeeCancellation FeeReturn Delivery FeeReturned QC FeeReturn to Seller FeeDropshipping Delivery FeeRefund FeeLazada Shipping Service CostPick FeePack FeeDropshipping Delivery FeePromotional Charges BundlesPromotional Charges Vouchers |
| refunds | Reversal Item Price |
| fees\_on\_refunds\_total | Reversal Item PriceReversal CommissionReversal Promotional Charges BundlesReversal Promotional Charges Vouchers |
| shipment\_fee | Shipping Fee (Charged by Lazada) |
| shipment\_fee\_credit | Shipping Fee (Paid By Customer) |
| subtotal1 | item\_revenue \+ other\_revenue\_total \- fees\_total |
| subtotal2 | subtotal1 \- refunds |

---

## queryTransactionDetails "fee_type" field enum list

<a id="querytransactiondetails-fee-type-field-enum-list-120956"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29617&docId=120956&lang=en_US>

| transaction\_type | fee\_name | fee\_type |
| --- | --- | --- |
| Orders\-Sales | Item Price Credit | 13 |
| Orders\-Sales | Item Price Subsidy | 59 |
| 3P Services\-Logistics | Shipping Fee (Charged By 3P) | 21 |
| Orders\-Lazada Fees | Payment Fee | 3 |
| Orders\-Lazada Fees | Commission | 16 |
| Refunds\-Lazada Fees | Payment fee \- correction for undercharge | 84 |
| Orders\-Lazada Fees | Other Fee | 20 |
| Refunds\-Sales | Reversal Item Price | 14 |
| Refunds\-Lazada Fees | Reversal Commission | 15 |
| 3P Services\-Logistics | Crossbroder shipping fee refund \- correction for overcharge | 129 |
| 3P Services\-Logistics | Pick Up Fee | 127 |
| Refunds\-Lazada Fees | Payment Fee Credit | 4 |
| Orders\-Logistics | Shipping Fee Paid by Seller | 7 |
| Orders\-Logistics | Shipping Fee (Paid By Customer) | 8 |
| 3P Services\-Logistics | FBL Handling Fee | 130 |
| Other Services\-Lazada Fees | Other Services Fee | 109 |
| 3P Services\-Logistics | FBL Inbound Fee | 132 |
| 3P Services\-Lazada Fees | Failed Delivery Fee | 128 |
| 3P Services\-Lazada Fees | Returned QC Fee | 25 |
| Orders\-Logistics | Return To Seller Fee | 26 |
| Orders\-Logistics | Customer Item Shipping Fee | 42 |
| Orders\-Lazada Fees | Other Credit \- Taxable | 63 |
| Other Services\-Sales | Seller Incentive | 107 |
| Orders\-Claims | Lost Or Damaged \- Product | 47 |
| Orders\-Lazada Fees | Commission Rebate | 65 |
| Orders\-Lazada Fees | Payment fee refund \- correction for overcharge | 67 |
| Orders\-Lazada Fees | Re\-Selling Of Goods Purchased From Lazada | 68 |
| Orders\-Lazada Fees | Seller Contacts Customer For No\-Verification | 69 |
| Orders\-Lazada Fees | Seller Own Fleet Order Cancelled Without Delivery Attempt | 70 |
| Orders\-Lazada Fees | Fake RTS | 71 |
| Orders\-Lazada Fees | Invalid Tracking Number Provided(Repeat Offenders) | 72 |
| Orders\-Lazada Fees | Wrong Way Bill | 73 |
| Orders\-Lazada Fees | Using Non Approved 3PL(Repeat Offenders) | 74 |
| Orders\-Lazada Fees | Wrong Shipment Provider | 75 |
| Orders\-Lazada Fees | Infringed Content | 76 |
| Orders\-Lazada Fees | Wrong Picture (Not As Advertised) | 77 |
| Orders\-Lazada Fees | Buying Own Product Through Any Sort Of Scheme | 78 |
| Orders\-Lazada Fees | Direct Sell | 79 |
| Orders\-Lazada Fees | Penalty Charges | 80 |
| Orders\-Lazada Fees | Adjustments Penalty | 81 |
| Orders\-Sales | Adjustments Item Charge | 62 |
| Orders\-Marketing Fees | Promotional Charges Bundles | 117 |
| Orders\-Marketing Fees | Promotional Charges Vouchers | 118 |
| Orders\-Marketing Fees | Promotional Charge General | 119 |
| Orders\-Lazada Fees | Penalty \& Payment Claims | 60 |
| Orders\-Claims | Adjustments Claims | 61 |
| Orders\-Lazada Fees | Other Credit \- Non Taxable | 64 |
| Orders\-Lazada Fees | Other Debit \- Taxable | 82 |
| Refunds\-Sales | Adjustments Item Charge | 83 |
| Refunds\-Marketing Fees | Reversal Promotional Charges Bundles | 120 |
| Refunds\-Marketing Fees | Reversal Promotional Charges Vouchers | 121 |
| Refunds\-Marketing Fees | Reversal Promotional Charges General | 122 |
| Refunds\-Claims | Lost Claim | 85 |
| Refunds\-Claims | Other Claims \- Returns | 125 |
| Refunds\-Claims | Adjustments Claim | 126 |
| Refunds\-Lazada Fees | Commission fee \- correction for undercharge | 123 |
| Refunds\-Logistics | Shipping fee \- correction for undercharge | 124 |
| Refunds\-Lazada Fees | Cancellation Due To OOS | 87 |
| Refunds\-Lazada Fees | Cancellation Due To Wrong Pricing | 88 |
| Refunds\-Lazada Fees | Defective Goods | 89 |
| Refunds\-Lazada Fees | Wrong Goods Delivered | 90 |
| Refunds\-Lazada Fees | Wrong Content | 91 |
| Refunds\-Lazada Fees | Product Manual Missing | 92 |
| Refunds\-Lazada Fees | Cancellation Due To Late Fulfilment | 93 |
| Refunds\-Lazada Fees | Wrong Packaging | 94 |
| Refunds\-Lazada Fees | Forbidden/Infringed Goods | 95 |
| Refunds\-Lazada Fees | Fake RTS | 96 |
| Refunds\-Lazada Fees | Expired Goods | 97 |
| Refunds\-Lazada Fees | Used Item | 98 |
| Refunds\-Lazada Fees | Returned Goods Rejection | 99 |
| Refunds\-Lazada Fees | Missing Item Or Parts | 100 |
| Refunds\-Lazada Fees | Misleading Description | 101 |
| Refunds\-Lazada Fees | Not As Advertised | 102 |
| Refunds\-Lazada Fees | Adjustments Penalty | 103 |
| Refunds\-Lazada Fees | Adjustments Others | 104 |
| 3P Services\-Logistics | FBL Handling fee refund \- correction for overcharge | 134 |
| 3P Services\-Logistics | COD Fee | 135 |
| Other Services\-Sales | Adjustments Seller Incentive | 108 |
| Other Services\-Lazada Fees | Other Debits (non taxable) | 111 |
| Other Services\-Lazada Fees | Sponsored Product Fee | 112 |
| Other Services\-Lazada Fees | Order Verification Charge | 114 |
| Other Services\-Lazada Fees | Adjustments Others | 115 |
| Other Services\-Lazada Fees | Other Debits | 116 |
| Orders\-Claims | Shipping Fee Claims | 140 |
| 3P Services\-Claims | Reversal \- Shipping Fee Claims | 24 |
| Orders\-Logistics | Shipping fee refund \- correction for overcharge | 141 |
| Orders\-Logistics | Shipping Cost | 28 |
| Refunds\-Logistics | Reversal shipping Fee (Paid by Customer) | 142 |
| Refunds\-Logistics | Reversal Shipping Fee Paid by Seller | 143 |
| Orders\-Lazada Fees | Commission fee refund \- correction for overcharge | 66 |
| Orders\-Lazada Fees | Other Debit \- Non Taxable | 144 |
| Refunds\-Lazada Fees | Other Debits (Returns) | 145 |
| Other Services\-Sales | Seller Credit | 19 |
| Other Services\-Sales | Subsidy | 44 |
| Orders\-Lazada Fees | Cancellation Fee | 23 |
| Orders\-Logistics | Dropshipping Delivery Fee | 27 |
| Orders\-Logistics | Pick Fee | 34 |
| Orders\-Logistics | Pack Fee | 35 |
| Orders\-Lazada Fees | Seller Debit Item | 37 |
| Orders\-Logistics | Dropshipping Item Delivery Fee | 46 |
| Orders\-Logistics | Shipping Fee (Order Level) | 49 |
| Orders\-Logistics | Pack Fee Credit | 52 |
| Orders\-Logistics | Pick Fee Credit | 53 |
| Orders\-Lazada Fees | Penalty | 54 |
| Refunds\-Lazada Fees | Refund Fee | 29 |
| Refunds\-Lazada Fees | Penalty Credit | 55 |
| Orders\-Sales | Seller Credit Item | 36 |
| Orders\-Logistics | Customer Item Shipping Fee Credit | 43 |
| Orders\-Claims | Lost Or Damaged \- Sales Order Item | 48 |
| Other Services\-Sales | Subsidy Refund | 45 |
| 3P Services\-Logistics | Fulfillment by Lazada Handling Fee \- Automatic | 22 |
| Orders\-Logistics | Shipping Fee (Surcharge) | 159 |
| Orders\-Logistics | Shipping Fee (Extra Handling) | 160 |
| Orders\-Logistics | Shipping Fee (Insurance) | 161 |
| Refunds\-Logistics | Return Shipping Fees | 200 |
| Other Services\-Sales | Reimbursements Withholding tax | 201 |
| Orders\-Marketing Fees | Seller Funded Marketing Voucher | 202 |
| Refunds\-Marketing Fees | Reversal Seller Funded Marketing Voucher | 203 |
| Refunds\-Claims | Damaged Claim | 206 |
| Refunds\-Claims | Lost \& Damaged FBL Inventories | 207 |
| Orders\-Logistics | Shipping Fee Voucher (by Lazada) | 211 |
| Orders\-Logistics | Auto. Shipping fee subsidy (by Lazada) | 157 |
| Refunds\-Logistics | Reversal automated shipping subsidy | 158 |
| Orders\-Marketing Fees | Promotional Charges Flexi\-Combo | 209 |
| Refunds\-Marketing Fees | Reversal Promotional Charges Flexi\-Combo | 210 |
| Orders\-Sales | Presale Deposit | 212 |
| Refunds\-Sales | Reversal Presale Deposit | 213 |
| Refunds\-Claims | Sponsored Product Fee Claim | 214 |
| Refunds\-Claims | Installment Fee Claim | 215 |
| Refunds\-Claims | Lost Claim(Lazada) | 216 |
| Refunds\-Claims | Damaged Claim(Lazada) | 217 |
| Orders\-Lazada Fees | Utility Payment Commission | 218 |
| Refunds\-Lazada Fees | Reversal Utility Payment Commission | 219 |
| Other Services\-Lazada Fees | Installment fee | 221 |
| Orders\-Sales | Utility Service Fee (Paid by Customer) | 220 |
| Refunds\-Lazada Fees | Reversal Installment Fee | 222 |
| Refunds\-Claims | Damaged Claims \- First Mile | 223 |
| Refunds\-Claims | Reversal \- Damaged Claims \- First Mile | 224 |
| Refunds\-Claims | Lost Claims \- First Mile | 225 |
| Refunds\-Claims | Reversal \- Lost Claims \- First Mile | 226 |
| Other Services\-Lazada Fees | Bank Verification Fee | 227 |
| Refunds\-Claims | Voucher Claims | 228 |
| Refunds\-Claims | CB Shipping Fee Claim | 229 |
| Refunds\-Claims | Shipping Fee Subsidy Claim | 230 |
| Refunds\-Claims | Customer Shipping Fee Claim | 231 |
| Refunds\-Claims | Reversal \- Lost Claims | 232 |
| Refunds\-Claims | Reversal \- Damaged Claims | 233 |
| Refunds\-Claims | Postal Fee Claims | 234 |
| Orders\-Sales | Seller balance adjustments \- Debit | 235 |
| Orders\-Sales | Seller balance adjustments \- Credit | 236 |
| Other Services\-Lazada Fees | Seller Training Fee | 237 |
| 3P Services\-Logistics | FBL Bundling Fee | 238 |
| Other Services\-Marketing Fees | Sponsored Affiliates | 239 |
| Other Services\-Marketing Fees | Sponsored Affiliates Refund | 240 |
| Other Services\-Marketing Fees | Sponsored Solutions Top\-up | 249 |
| Refunds\-Marketing Fees | Sponsored Discovery \- Top up (credit) | 250 |
| Other Services\-Sales | Reimbursements Withholding tax (LEL) | 251 |
| Refunds\-Claims | Wrong Status Claims | 252 |
| Refunds\-Claims | Shipping Fee Correction | 253 |
| 3P Services\-Logistics | Storage Fee | 254 |
| 3P Services\-Logistics | Disposal Charge | 255 |
| 3P Services\-Logistics | Pullout Charge | 256 |
| Other Services\-Marketing Fees | Marketing Revenue \- Brand Sponsorship | 248 |
| Other Services\-Marketing Fees | Marketing solution /social media advertising | 208 |
| Other Services\-Marketing Fees | Sponsored Discovery \- Lazada credit balance | 259 |
| Other Services\-Marketing Fees | Sponsored Discovery \- Consumption credit | 260 |
| Other Services\-Marketing Fees | Sponsored Discovery \- Voucher | 262 |
| Refunds\-Claims | Sponsored Discovery \- Top up claim | 263 |
| Other Services\-Marketing Fees | Sponsored Discovery \- Top up Credit (Balance) | 264 |
| Refunds\-Claims | Sponsored Discovery \- Voucher claim | 265 |
| Refunds\-Claims | Sponsored Affiliates Claims | 261 |
| 3P Services\-Lazada Fees | Paylater Interest Fee (Paid by Seller) | 267 |
| Other Services\-Lazada Fees | Reversal of PayLater Interest Fee (Paid by Seller) | 268 |
| Refunds\-Sales | PayLater Repayment (Paid by Customer) | 269 |
| Other Services\-Sales | Paylater Interest Settlement (Paid by Seller) | 270 |
| Refunds\-Sales | Reversal of PayLater Interest Settlement (Paid by Seller) | 271 |
| Other Services\-Lazada Fees | Paylater Interest Fee Settlement (Subsidized by Lazada) | 272 |
| Refunds\-Sales | Reversal of PayLater Interest Fee Settlement (Laz\-Subsidy) | 273 |
| Orders\-Lazada Fees | Seller Picks Commission | 274 |
| Refunds\-Lazada Fees | Reversal of Seller Picks Commission | 275 |
| Other Services\-Marketing Fees | Seller Value Added Services | 276 |
| Orders\-Lazada Fees | LazChoice Commission | 277 |
| Refunds\-Lazada Fees | Reversal of LazChoice Commission | 278 |
| 3P Services\-Logistics | Pick Up Fee Reversal | 279 |
| Orders\-Sales | Offline Refund Adjustment DRTM | 280 |
| Refunds\-Claims | Fraud Returns Compensation | 281 |
| Other Services\-Marketing Fees | Sponsored Discovery \- Top\-up (cashier) | 285 |
| Orders\-Lazada Fees | SOD\-COD charge | 286 |
| Other Services\-Lazada Fees | Kakak Asuh Commission Reimbursement | 287 |
| Other Services\-Lazada Fees | Kakak Asuh Commission Deduction | 288 |
| Refunds\-Marketing Fees | Reversal of Promotional Charges | 289 |
| Other Services\-Marketing Fees | Sponsored Discovery \- Top up refund | 290 |
| 3P Services\-Logistics | B2B Shipping Fees | 291 |
| 3P Services\-Logistics | B2B Import Duties | 292 |
| 3P Services\-Logistics | B2B Import Income Tax | 293 |
| 3P Services\-Logistics | B2B VAT | 294 |
| 3P Services\-Claims | B2B Fee Claim | 295 |
| 3P Services\-Marketing Fees | Value Added Services | 296 |
| 3P Services\-Logistics | Inventory Storage Fees | 297 |
| 3P Services\-Logistics | DPP Service Fee | 1023 |
| Refunds\-Lazada Fees | Reversal of DPP Service Fee | 1024 |
| Refunds\-Sales | Reversal of DPP Service Fee Settlement | 1025 |
| Other Services\-Sales | DPP Service Fee Settlement | 1026 |
| Orders\-Marketing Fees | LCP Fee | 304 |
| Refunds\-Marketing Fees | Reversal LCP Fee | 305 |
| Orders\-Marketing Fees | Lazcoin discount | 306 |
| Refunds\-Marketing Fees | Reversal Lazcoin discount | 307 |
| Orders\-Marketing Fees | Free Shipping Max Fee | 298 |
| Refunds\-Marketing Fees | Reversal of Free Shipping Max Fee | 299 |
| 3P Services\-Logistics | International Shipping fees (Charged by 3P) | 308 |
| 3P Services\-Logistics | Domestic Shipping fees (Charged by 3P) | 309 |
| Orders\-Logistics | Shipping Fee Subsidy by Lazada | 500 |
| Orders\-Sales | Item Price | 501 |
| Orders\-Sales | Lazada Subsidy on Item Price | 502 |
| Refunds\-Logistics | Reversal Shipping Fee Subsidy by Lazada | 503 |
| Refunds\-Sales | Reversal Lazada Subsidy on Item Price | 504 |
| Refunds\-Sales | Reversal Item Price | 505 |
| 3P Services\-Logistics | FBL Relabeling Fee | 310 |
| 3P Services\-Logistics | FBL Outbound Fee | 311 |
| 3P Services\-Logistics | XB \- FBL WH Handling Fee | 312 |
| 3P Services\-Logistics | FBL Relabelling service | 313 |
| 3P Services\-Logistics | XB \- FBL Repacking Service | 314 |
| 3P Services\-Logistics | XB \- Return to Merchant | 315 |
| 3P Services\-Logistics | XB \- WH Pullout service | 316 |
| Refunds\-Logistics | Shipping Fee Cashback | 317 |
| Other Services\-Marketing Fees | Universal Shopping Campaign | 318 |
| Other Services\-Marketing Fees | Adjustment Universal Shopping Campaign (undercharge) | 319 |
| Refunds\-Marketing Fees | Universal Shopping Campaign Refund | 320 |
| Other Services\-Marketing Fees | Adjustment Universal Shopping Campaign (overcharge) | 321 |
| Other Services\-Marketing Fees | Co\-Funded Marketing Solution | 322 |
| Orders\-Marketing Fees | Seller Incentive Offline Marketing | 323 |
| Refunds\-Logistics | Reversal Shipping Fee Voucher (by Lazada) | 512 |
| Other Services\-Sales | SOD COD Deposit Deduction | 324 |
| Other Services\-Sales | SOD COD Deposit Utilization | 325 |
| Refunds\-Sales | DRTM Offline Refund Adjustment | 326 |
| Refunds\-Claims | Sponsored Product Rebate | 327 |
| Other Services\-Marketing Fees | Reversal Marketing Solution \- Social Media Advertising | 328 |
| 3P Services\-Logistics | CB FBL Deduction | 282 |
| 3P Services\-Logistics | CB FBL Reimbursement | 283 |
| Other Services\-Sales | Item Price Correction Credit | 329 |
| Other Services\-Sales | Item Price Correction Debit | 330 |
| Refunds\-Lazada Fees | Reversal Shipping Fee Cashback | 331 |
| Orders\-Lazada Fees | Lazada Bonus \- LZD co\-fund Extra | 1061 |
| Orders\-Lazada Fees | Lazada Bonus | 1063 |
| Orders\-Lazada Fees | Lazada Bonus \- LZD co\-fund | 1065 |
| Refunds\-Lazada Fees | Lazada Bonus \- LZD co\-fund Extra \- Reversal | 1081 |
| Refunds\-Lazada Fees | Lazada Bonus \- Reversal | 1083 |
| Refunds\-Lazada Fees | Lazada Bonus \- LZD co\-fund \- Reversal | 1085 |
| Orders\-Lazada Fees | SOD \- COD charge | 513 |
| Orders\-Lazada Fees | Payment fee refund \- correction for SOD\-COD | 514 |
| Orders\-Lazada Fees | Reversal shipping fee paid by customer SOD\-COD | 518 |
| Orders\-Logistics | Wrong Weight Adjustment | 1027 |
| Orders\-Logistics | Shipping Fee Subsidy(By Seller) | 1028 |
| Orders\-Logistics | International Shipping fees | 1029 |
| Orders\-Logistics | Adjustments International Shipping Fee Debit | 1030 |
| Orders\-Logistics | Adjustments International Shipping Fee Credit | 1031 |
| Orders\-Logistics | Domestic Shipping fees | 1032 |
| Orders\-Logistics | Adjustments Shipping Fee (Surcharge) Debit | 1033 |
| Orders\-Logistics | Adjustments Shipping Fee (Surcharge) Credit | 1034 |
| Orders\-Logistics | Adjustments Shipping Fee (Extra Handling) Debit | 1035 |
| Orders\-Logistics | Adjustments Shipping Fee (Extra Handling) Credit | 1036 |
| Orders\-Logistics | Adjustments Shipping Fee (Insurance) Debit | 1037 |
| Orders\-Logistics | Adjustments Shipping Fee (Insurance) Credit | 1038 |
| 3P Services\-Logistics | XB FBL WH Handling fee (Direct) | 332 |
| 3P Services\-Logistics | XB FBL Relabelling Service (Direct) | 333 |
| 3P Services\-Logistics | XB FBL Repacking Service (Direct) | 334 |
| 3P Services\-Logistics | XB FBL Return to Merchant (Direct) | 335 |
| 3P Services\-Logistics | XB FBL WH Pull out (Direct) | 336 |
| 3P Services\-Logistics | XB FBL Value Added Service (Direct) | 337 |
| 3P Services\-Logistics | XB FBL Storage Fee (Direct) | 338 |
| 3P Services\-Logistics | XB FBL Logistics Mgt Service Fee (Agent) | 339 |
| 3P Services\-Logistics | XB FBL Distribution Margin (Agent) | 340 |
| Orders\-Lazada Fees | Commission Discount/Rebate | 341 |
| Other Services\-Marketing Fees | LSS credit issuance | 342 |
| Refunds\-Marketing Fees | LCP Fee \- Adjustment | 343 |
| Other Services\-Services | External Traffic\-LSS credit Issuance | 350 |
| Other Services\-Services | External Traffic\-LSS credit consumption | 351 |
| Other Services\-Services | External Traffic\-LSS credit consumption\-Adjustment | 352 |
| Other Services\-Services | External Traffic\-Expired LSS Credit | 353 |
| Refunds\-Others | Sponsored Discovery\-Consumption LSS rebate credit | 354 |
| Refunds\-Others | Sponsored Display\-Consumption LSS rebate credit | 355 |
| Refunds\-Others | Sponsored Solution\-Expired LSS Credit | 356 |
| Refunds\-Lazada Fees | Adjustments Campaign Fee | 344 |
| 3P Services\-Others | XB FBL Discount/Rebate | 345 |
| 3P Services\-Others | XB FBL Discount/Rebate (Direct) | 346 |
| Refunds\-Logistics | Shipping Fee Refund to Customer | 519 |
| Refunds\-Logistics | Shipping Fee Voucher Refund to Laz | 520 |
| Refunds\-Logistics | jiuxi\_test | 620 |
| 3P Services\-Logistics | CB FBL Deduction \- Payment Fee | 347 |
| 3P Services\-Logistics | CB FBL Reimbursement \- Payment Fee | 348 |
| 3P Services\-Logistics | CB FBL Deduction \- Commission Fee | 349 |
| 3P Services\-Logistics | CB FBL Reimbursement \- Commission Fee | 360 |
| 3P Services\-Logistics | CB FBL Deduction \- Marketing Solution | 361 |
| 3P Services\-Logistics | CB FBL Reimbursement \- Marketing Solution | 362 |
| 3P Services\-Logistics | CB FBL Deduction \- Shipping Fee | 363 |
| 3P Services\-Logistics | CB FBL Reimbursement \- Shipping Fee | 364 |
| Orders\-Lazada Fees | Penalty Charges (International) | 365 |
| Orders\-Lazada Fees | Adjustment Penalty Charges (International) | 366 |
| 3P Services\-Logistics | CB FBL Deduction \- Shipping Fee Subsidy | 367 |
| 3P Services\-Logistics | CB FBL Reimbursement \- Shipping Fee Subsidy | 368 |
| Orders\-Lazada Fees | LazSubsidy | 1071 |
| Refunds\-Lazada Fees | LazSubsidy \- reversal | 1072 |
| Other Services\-Marketing Fees | Marketing Service Deduction \- Marketing Fee | 369 |
| Other Services\-Marketing Fees | Marketing Service Reimbursement \- Marketing Fee | 370 |
| Other Services\-Services | New Product Launcher\-credit consumption | 111266 |
| Other Services\-Services | New Product Launcher\-voucher consumption | 111267 |
| Orders\-Sales | Lazpick commission \- Adjustment Debit | 371 |
| Orders\-Sales | Lazpick commission \- Adjustment Credit | 372 |
| Orders\-Sales | Lazpick/LazTop commission \- Reversal | 1041 |
| Orders\-Sales | Lazpick/LazTop commission | 1040 |
| Other Services\-Marketing Fees | Sponsored Media \- Top up (credit) | 373 |
| Other Services\-Marketing Fees | Sponsored Media \- Top up (cashier) | 374 |
| Other Services\-Marketing Fees | Sponsored Media \- Consumption credit | 375 |
| Other Services\-Marketing Fees | Sponsored Media \- Consumption voucher | 376 |
| Other Services\-Marketing Fees | Sponsored Media \- Top up (refund) | 377 |
| Other Services\-Lazada Fees | Review Incentive Fee | 700 |

---

## Lazada Sponsored Solutions (LSS) Open API Introduction

<a id="lazada-sponsored-solutions-lss-open-api-introduction-121250"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=43225&docId=121250&lang=en_US>

# 1\. Introduction

The Lazada Sponsored Solutions API provides developers with a programmatic interface to directly interact with the Lazada Sponsored Solutions platform, streamlining the management of complex or large Lazada Sponsored Solutions accounts and campaigns

Here are some common use cases:

- Automated account management:
- Lazada Sponsored Solutions API has made it possible to automate routine account management tasks, such as creating new campaigns, set daily budgets, and set start and end date for campaign. This saves time and reduces the need for manual input
- Customized reporting
- The Lazada Sponsored Solutions API supports a wide range of data points and metrics, allowing developers to create custom reports that meet their specific needs.
- Sponsored Solutions campaign management based on inventory
- The Lazada Sponsored Solutions API allows developers to integrate inventory data from their eCommerce platform with their Lazada Sponsored Solutions campaigns
- Integration of Lazada Sponsored Solutions by ERP\* software into respective system
- Brands, agency and sellers can manage their campaigns more easily and monitor their Sponsored Solutions campaign performance, without having to switch between different platforms

Note: 

ERP stands for Enterprise Resource Planning, which is a software system designed to manage and automate end\-to\-end business processes across a company.

The use of LSS Open API is subject to Lazada Open Platform Developer Agreement and Terms of Services.

  

## Lazada Sponsored Solutions API can be useful for:

By leveraging the Lazada Sponsored Solutions API, software can be built to manage accounts at the granular level of customers and keywords, offering the same capabilities as the Lazada Marketing Solutions UI, but programmatically. The API is beneficial for various types of companies, including:

- Media agencies
- Enterprise Resource Planning (ERP) software system
- Big brands managing a large number of accounts, with needs beyond the capabilities of the Lazada Sponsored Solutions UI

  

## Open API Phase 1 Overview:

Phase 1 includes Sponsored Discovery solution scope of Lazada Sponsored Solutions. Discover the benefits of Sponsored Solutions API Phase 1 as below \-

| Campaign management | - Get campaign information - - Campaign Name, Campaign ID, Budget, Duration. 	- Sync up the Campaign list - Search campaign - - Search the campaign by keywords - Create campaign - - Set a name for the campaign 	- Set Daily budget 	- Set start and end dates of the campaign (The default Campaign objective is sales\-oriented, and the Campaign type is automated) - Delete campaign - Product management - - Show Product information (Product name, Product quality score, Units sold, quantity, retail price, PDP PV, CVR) 	- Update products status (You can set campaign product status on or off) 	- Search products - - - Search the product by keywords 		- Product Category filtering  Developers can refer to this [API documentation](https://open.lazada.com/apps/doc/api?path=%2Fsponsor%2Fsolutions%2Fcampaign%2FgetCampaign) for further details |
| --- | --- |
| Sponsored Solutions campaign tools and setting | - Auto top up setting - - API will provide you with suggestions for both the auto top\-up threshold and the amount to top up 	- Auto top up setting on and off - Sign up to the Sponsored discovery terms and conditions  Developers can refer to this [API documentation](https://open.lazada.com/apps/doc/api?path=%2Fsponsor%2Fsolutions%2Fwallet%2FmodifyAutoTopUpOptionOneConfig) for further details |
| Reports and Insights | - Get report overview - - You can see 'product' information in the report (Product name, Product quality score, Units sold, quantity, retail price, PDP PV, CVR) 	- You can see insights from the campaign (Spend, impressions, Clicks, Store units sold, Store Revenue, CPC, Store ROI) - Get report trend chart - - You can draw trend chart by getting x\-axis (time) and y\-axis (spend and impressions) data from API  Developers can refer to this [API documentation](https://open.lazada.com/apps/doc/api?path=%2Fsponsor%2Fsolutions%2Freport%2FgetReportOverviewMetric) for further details |

## It is important to note that the Lazada Sponsored Solutions API Phase 1 does not support:

- Other Solutions besides Sponsored Discovery
- Manual top up
- Sponsored Discovery key words editing
- Managing bid price

# 2\. Getting Started

## How to get started with Lazada Sponsored Solutions API:

Follow these steps to get started with Lazada API:

- [Become a developer](https://open.lazada.com/apps/doc/doc?nodeId=10396&docId=108001) \- Register a UAC (unified account center) account and sign up as a Lazada developer.
- [Register your application](https://open.lazada.com/apps/doc/doc?nodeId=10398&docId=108002) in one of the application categories \- Submit the request and Lazada admins will review and approve your request.
- [Retrieve App Key and App Secret](https://open.lazada.com/apps/doc/doc?nodeId=10433&docId=108055) of your application \- The unique identity of your application on the Lazada Open Platform.
- [Request API permission](https://open.lazada.com/apps/doc/doc?nodeId=10535&docId=108131) for your application, so that your application can initiate calls to Lazada APIs.
- [Start development of your application](https://open.lazada.com/apps/doc/doc?nodeId=10536&docId=108132) \- Learn how to interact with Lazada API. You could find more technical details from the Developer’s Guide section.

## How to get started with Lazada Sponsored Solutions API:

- [Lazada Sponsored Solutions API List](https://open.lazada.com/apps/doc/api?path=%2Fsponsor%2Fsolutions%2FaddSolution) \- Scroll down to the bottom to see the list of API that we provide for this version
- [Sponsored solution API best practice](https://open.lazada.com/apps/announcement/detail?spm=a1zq7z.27201205.0.0.5a707c737yI8Po&docId=1816) 《Sponsored Solutions API best practice》

  

# 3\. Endpoints

Here are a list of service endpoints by country:

| **Region** | **Endpoint** |
| --- | --- |
| Vietnam | <https://api.lazada.vn/rest> |
| Singapore | <https://api.lazada.sg/rest> |
| Philippines | <https://api.lazada.com.ph/rest> |
| Malaysia | <https://api.lazada.com.my/rest> |
| Thailand | <https://api.lazada.co.th/rest> |
| Indonesia | <https://api.lazada.co.id/rest> |

Please visit this link for a comprehensive list of addSolution end\-points: [https://open.lazada.com/apps/doc/api?path\=%2Fsponsor%2FSolutions%2FaddSolutions](https://open.lazada.com/apps/doc/api?path=%2Fsponsor%2Fsolutions%2FaddSolution)

# 4\. Typical use cases and Tips

1. **Notification**  
Access the DingTalk or other instant messaging app notification system, and notify the stakeholders in real time, thus Ops can minimize the need to constantly monitor ad performance data.
2. **Monitoring**  
According to real\-time reports and defined monitoring indicators, such as cost/roi/pv/uv, etc., real\-time notification to Sponsored Solutions campaign operations , or intelligent Sponsored Solutions campaign management. For example, if the ROI of a particular campaign falls below the threshold set previously, the Sponsored Solutions campaign can be automatically stopped or the Sponsored Solutions campaign of a specific product can be stopped via the API. This allows you to optimize your marketing spend and increase ROI without having to constantly monitor performance data. With the Lazada Sponsored Solutions API, you can streamline your marketing management process and achieve greater efficiency and effectiveness in your campaigns.
3. **Report**
1. Cross\-store and multi\-dimensional data analysis
2. Analyze data in a more comprehensive and tailored manner

This allows for a more customized approach to your marketing strategies, resulting in better performance and higher ROI. Instead of relying on general analysis, you can drill down into specific areas of your campaign and identify opportunities for optimization.

4. **Creative (In phase 2\)**  
The feature can automatically filter out low\-efficiency creatives and replace them on a regular basis, saving time and effort for the user. This ensures that the creatives are always optimized for the best performance.
5. **Delivery (Bid management in phase 2\)**  
Batch operations of campaigns/units, such as creating, pausing, enabling, and adjusting bids in batches through excel. Making campaign management more efficient and saving you valuable time.

# 5\. Technical support resources

- If you have any tech\-related queries, our dedicated tech support team is here to help.
- To connect with our technical support, please download and register for [DingTalk](https://www.dingtalk.com/en) app
- You can reach out to them on Dingtalk by searching for the tech support group using the group ID 21783515

# 6\. Conclusion

The Lazada Sponsored Solutions API provides programmatic access to the Lazada Sponsored Solutions platform, enabling developers to manage large or complex Lazada Sponsored Solutions accounts and campaigns more efficiently.

With the API, you can build software that manages accounts from the customer level down to the keyword level, automate tasks such as filtering out low\-efficiency creatives and replacing them, and perform cross\-store and multi\-dimensional data analysis.

The API also allows for batch operations of campaigns/units, such as creating, pausing, enabling, and adjusting bids in batches through excel, and offers customized data analysis to help you make informed decisions.

Using our API can save you time, increase efficiency, and help you optimize your Sponsored Solutions campaign campaigns more effectively.

**Next Steps:**

If you're interested in using Lazada Sponsored Solutions API, please review the documentation to get started.

Explore additional features such as our advanced data analysis tools and automated creative filtering.

For agencies, consider participating in our [Preferred Partner Program](https://www.lazadasolutions.com/student/activity/1516331-lazada-sponsored-solutions-preferred-partner-program) for added benefits and support.

Contact our customer support team if you have any questions or need assistance getting started.

---

## Sponsored Solutions API Detail

<a id="sponsored-solutions-api-detail-121355"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=43225&docId=121355&lang=en_US>

# sign

**Description:** Do sign for seller. Seller or agencies can use this api to sign up the t\&c.

**Timeout Period：** the api timeout is 10s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

此接口无入参

  

# modifyAutoTopUpOptionOneConfig

**Description:** Modify auto top up option one config.

**Timeout Period：**the api timeout is 3s, max qps is 100, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

| venture | min top up | max top up |
| --- | --- | --- |
| SG | 5 | 8,333,333,330 |
| PH | 100 | 17,895,600 |
| TH | 100 | 8,333,333,300 |
| VN | 50,000 | 833,333,300,000 |
| MY | 10 | 8,333,333,330 |
| ID | 25,000 | 8,333,333,000 |

## Tax Rate

  

| venture | seller type | Taxable |
| --- | --- | --- |
| SG | Local | 8% |
| CB | 0% |
| PH | ALL | 12% |
| CB | 0% |
| TH | ALL | 7% |
| CB | 0% |
| VN | ALL | 10% |
| MY | ALL | 6% |
| CB | 0% |
| ID | ALL | 11% |
| CB | 0% |

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| status | Number | Yes | The option one status.1:ON;0:OFF. |
| limitAmount | String | Yes | If balance is lower than this value, auto topUp operation will be done. |
| topupAmount | String | Yes | The amount of topUp for each auto topUp. |

# addSolution

**Description:** Add sponsor solution.

**Timeout Period：**the api timeout is 3s, max qps is 10, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

**Notes:** For discovery campaign, the max count is 50, make sure do not over this num.Before you invoke this api, make sure the seller is already signed T\&C.

There is some business valid you need to know.

You could use this api to add standard or smart campaign, about the autoItemSelect, phase 1 only support manual.The dayBudget \& bidPrice \& maxBid should meet the standard below.

If the campaign type is smart, make sure your budget is not \-1, and if the campaign type is standard, the budget will be \-1 or specific value.

The campaign "Start date" and campaign"end date" represent the period during which a campaign will running. For example, if a campaign has a start date of June 1st, 2023 and an end date of June 30th, 2023, it means that the campaign will running from June 1st to June 30th, 2023, provided that the campaign has a valid budget, promoted products, and the seller has sufficient balance.

"minBudgetMap":{

 "SG":10,

 "PH":100,

 "TH":100,

 "VN":50000,

 "MY":4,

 "ID":25000

 },

"maxBudgetMap":{

 "SG":10000,

 "PH":1000000,

 "TH":1000000,

 "VN":200000000,

 "MY":100000,

 "ID":100000000

 },

"minMaxBidMap":{

 "SG":0\.05,

 "PH":0\.48,

 "TH":1,

 "VN":400,

 "MY":0\.06,

 "ID":250

 },

 "maxMaxBidMap":{

 "SG":20,

 "PH":750,

 "TH":450,

 "VN":330000,

 "MY":60,

 "ID":200000

 },

"minBidPriceMap":{

 "SG":0\.05,

 "PH":0\.48,

 "TH":1,

 "VN":400,

 "MY":0\.06,

 "ID":150

 },

 "maxBidPriceMap":{

 "SG":20,

 "PH":750,

 "TH":450,

 "VN":330000,

 "MY":60,

 "ID":200000

 }

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| endDate | String | Yes | Campaign end date.Make sure end date is later than  or equal to start date and current time. |
| platform | Number\[] | Yes | Placements determine where shoppers will see your promoted products.3:Search Result Page;4:Just For You Page |
| autoCreative | Number | Yes | Lazada automatically set creatives for your products.1:ON;0:OFF. |
| autoKeyWord | Number | Yes | Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimiz the keywords relating to your products in real time to maximize the campaigns' performance) |
| campaignObjective | Number | Yes | Your campaign objective helps detemine your bidding strategy \- coordinating wiht the upgrading of Sponsored Discovery,we highly recommend to choose '2\.Sales' as your campaign type,to helps increase your store sales efficiently.Please be noticed that hte '1\.Traffic' will be stop optimized by the end of Aug.\[Updated Aug 8th] |
| campaignType | Number | Yes | Unlock different ways to bids, select products, and keywords with campaign types.1:Standard;2:Smart.Please noted that this parameter might will be updated since Mid of July， 2023 |
| campaignModel | Number | Yes | Fine granularity to distinguish solutions.Phase 1, this field is 99\. |
| maxBid | String | Yes | Max bid determines the highest amount that you're willing to pay for a click on your promoted product.String type, \-1 means automated bid setting |
| autoItemSelect | Number | Yes | The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real\-time to maximize the campaigns' performance).Phase 1, we only support manual. |
| dayBudget | String | Yes | Budget indicates the maximum amount you’re willing to pay each day.\-1 means no limit budget |
| campaignName | String | Yes | Campaign name.Less than 200 char. |
| startDate | String | Yes | Campaign start date. |
| adgroupViewDTOlistWithFeed | Object\[] | Yes | Adgroup list. |
| adgroupName | String | Yes | Adgroup name, normally is product name, |
| bidPrice | String | Yes | This is the maximum bid price that you have set for your campaign.Please make sure this field is meeted the standard above. |
| autoKeyword | Number | Yes | Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance).This must be the same as the campaign |
| audienceViewDTOList | Object\[] | No | This setting allows you to bid higher on premium audiences that are more likely to convert in your store.This field will work for sponsor recommend. |
| adCrowdTag | Number | No | 1:on store visitors in the past 15 days;2:on in\-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience |
| discount | Number | No | The discount you want to give.eg:10 means 10% discount. |
| itemId | Number | Yes | Product id. |
| bidwordViewDTOList | Object\[] | No | Bid word list.This field will work for sponsor search. |
| keyword | String | No | The specific keyword.eg:shoe. |
| bidPrice | String | No | This is the maximum bid price that you have set for your campaign.Please make sure this field is meeted the standard above. |
| autoItemSelect | Number | Yes | The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real\-time to maximize the campaigns' performance).This field need to be same as campaign's autoItemSelect. |
| autoCreative | Number | Yes | Let Lazada automatically set creatives for your products.1:ON;0:OFF.This must be the same as the campaign. |

  

# addAdgroupBatch

**Description:** Do add adgroup for one campaign.

**Timeout Period：** the api timeout is 3s, max qps is 100, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

**Notes:** There is some basic valid for param, including campaignId,adgroupViewDTOList and the itemId \& bidPrice in adgroupViewDTOList is necessary, and the campaignId should be a real one, ortherwise you will receive an error.

Max count of adgroup of one campaign is 100, please do not add more than 100 adgroup. And also be affirmed, this api only support those mannual select product campaign, do not support auto select product campaign.

There is also some business valid, the bidPrice should between max and min of standard by venture,you could refer the table below.

  

"minBudgetMap":{

 "SG":5,

 "PH":50,

 "TH":100,

 "VN":25000,

 "MY":4,

 "ID":25000

 },

"maxBudgetMap":{

 "SG":10000,

 "PH":1000000,

 "TH":1000000,

 "VN":200000000,

 "MY":100000,

 "ID":100000000

 },

"minBidPriceMap":{

 "SG":0\.05,

 "PH":0\.48,

 "TH":1,

 "VN":400,

 "MY":0\.06,

 "ID":150

 },

 "maxBidPriceMap":{

 "SG":20,

 "PH":750,

 "TH":450,

 "VN":330000,

 "MY":60,

 "ID":200000

 }

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| campaignId | Number | Yes | Campaign id which you want to add into. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| adgroupViewDTOList | Object\[] | Yes | Adgroup list |
| adgroupName | String | Yes | The adgroup name, normanlly is the product name. |
| autoItemSelect | String | Yes | The way the product be selected.1:manual(I want to select products manually from my store.);2:auto(Let Lazada optimize the products within the campaigns in real\-time to maximize the campaigns' performance).This must be the same as the campaign. |
| bidPrice | String | Yes | Let Lazada automatically set cost\-effective bid prices for your products.Please make sure this field is meeted the standard above. |
| itemId | Number | Yes | Product id. |
| autoCreative | Number | Yes | Let Lazada automatically set creatives for your products.1:ON;0:OFF.This must be the same as the campaign. |
| autoKeyword | Number | Yes | Let Lazada automatically set keyword for your products.1:manual(I want to select keywords manually for my product selection.);2:auto(Let Lazada optimize the keywords relating to your products in real time to maximize the campaigns' performance).This must be the same as the campaign. |
| bidwordViewDTOList | Object\[] | No | Bid word list.This field work when the scene is sponsor search. |
| keyword | String | No | The specific keyword.eg:shoe.Max count of keyword of one adgroup is 100\. |
| bidPrice | String | No | Let Lazada automatically set cost\-effective bid prices for your products.Please make sure this field is meeted the standard above. |
| audienceViewDTOList | Object\[] | No | This setting allows you to bid higher on premium audiences that are more likely to convert in your store.This field work when the scene is sponsor recommend. |
| adCrowdTag | Number | No | 1:on store visitors in the past 15 days;2:on in\-market audiences for similar products;3:Store Awareness Audience;4:Store Interest Audience |
| discount | Number | No | The discount you want to give.eg:10 means 10% discount. |

# deleteCampaign

**Description:**Delete campaign.

**Timeout Period：**the api timeout is 3s, max qps is 100, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| campaignIdList | Number\[] | Yes | Campaign id list.Make sure all the campaign id is real and valid. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |

# deleteAdgroupBatch

**Description:**Delete adgroup batch.

**Timeout Period：**the api timeout is 3s, max qps is 100, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| adgroupIdList | Number\[] | Yes | Adgroup id list. Make sure all the adgorup id is real and valid. |

  
  

# getAccountSignInfo

**Description:**Get seller account sign status. This api is to check wheather the seller sign the T\&C or not.

**Timeout Period：** the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

此接口无入参

  

# getAutoTopUpOptionOneConfig

**Description:**Get auto top up option one config.

**Timeout Period：** the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

此接口无入参

  

  

# getCampaign

**Description:**Get campaign list with bizCode by seller.

**Timeout Period：**the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| bizCode | String | Yes | Discovery:sponsoredSearch.Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| campaignId | Number | Yes | The campaign id, make sure this id is real and valid. |

# getCampaignCount

**Description:**Get campaign count with bizCode for each solution type.

**Timeout Period：** the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

  

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |

# getLatestSignInfo

**Description:**Get the latest url of sign(T\&C).

**Timeout Period：** the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

此接口无入参

  

  

# getReportOverview

**Description:**Get report overview for the bizCode.

**Timeout Period：**the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| lastStartDate | String | Yes | The data window "last start date" and data window "last end date" represent the last period based on the current period with the same duration , and it shows the campaign's performance during that period. For example, if a seller chooses a data window "start date" and " end date" from June 1st to June 30th, 2023, then the data window "last start date" and "last end date" is from May 2nd to May31th,the it means that the performance of the campaign will be calculated for the period between those dates. |
| endDate | String | Yes | The data window "start date" and data window "end date" represent the period during which the campaign's performance is calculated. For example, if a seller chooses a data window from June 1st to June 30th, 2023, it means that the performance of the campaign will be calculated for the period between those dates.End date, make sure later than or equal to startDate. |
| useRtTable | Boolean | Yes | If you need to search data for today, then use true, otherwise false. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch. |
| lastEndDate | String | Yes | The data window "last start date" and data window "last end date" represent the last period based on the current period with the same duration , and it shows the campaign's performance during that period. For example, if a seller chooses a data window "start date" and " end date" from June 1st to June 30th, 2023, then the data window "last start date" and "last end date" is from May 2nd to May31th,the it means that the performance of the campaign will be calculated for the period between those dates. |
| startDate | String | Yes | The data window "start date" and data window "end date" represent the period during which the campaign's performance is calculated. For example, if a seller chooses a data window from June 1st to June 30th, 2023, it means that the performance of the campaign will be calculated for the period between those dates. |

  

  

# getReportOverviewMetric

**Description:**get report overview metric

The data window "start date" and data window "end date" represent the period during which the campaign's performance is calculated. For example, if a seller chooses a data window from June 1st to June 30th, 2023, it means that the performance of the campaign will be calculated for the period between those dates.

**Timeout Period：**the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| metricType | Number | Yes | The type pf metric.1:spend;2:impressions;3:clicks;4:ctr;5:units sold;6:revenue;7:cpc;8:roi;9:store order;10:store a2c;11:product order. |
| endDate | String | Yes | End date. |
| useRtTable | Boolean | Yes | If you need to search data for today, then use true, otherwise false. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch. |
| startDate | String | Yes | Start date. |

  

  

# listCategory

**Description:** List category that you have in your shop. It usually displayed within the Product selection module

**Timeout Period：**the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| parentId | Number | No | The category parent id. |

# listKeywordByAdgroup

**Description:** List keyword by adgroup. It usually displayed within the keyword selection module for adding keyword for existing campaign

**Timeout Period：** the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| campaignObjective | Number | Yes | Your campaign objective helps determine your bidding strategy \- Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales.Please noted that this parameter might will be updated since Mid of July ，2023 |
| campaignType | Number | Yes | Unlock different ways to bids, select products, and keywords with campaign types. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| itemId | Number | Yes | Product id.Please make sure the item id is real and valid. |
| adgroupId | Number | Yes | Adgroup id.Please make sure the adgroup id is real and valid. |

# listKeywordByItem

**Description:**List keyword by item.It usually displayed within the keyword selection module for adding keyword during new campaign creation

**Timeout Period：**the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

  

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| campaignObjective | Number | Yes | Your campaign objective helps determine your bidding strategy \- Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales. |
| campaignType | Number | Yes | Unlock different ways to bids, select products, and keywords with campaign types. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| itemId | Number | Yes | Product id.Please make sure the item id is real and valid. |

# searchAdgroupList

**Description:**Search adgroup with bizCode by seller. It can be shown on camapaign detail page

**Note:** The startDate and endDate below is use to query data indicators of these campaign, not use to to query by campaign duration.

The data window "start date" and data window "end date" represent the period during which the adgroup's performance is calculated. For example, if a seller chooses a data window from June 1st to June 30th, 2023, it means that the performance of the adgroup will be calculated for the period between those dates.

**Timeout Period：** the api timeout is 3s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| pageSize | Number | Yes | Page size.No more than 200\. |
| endDate | String | Yes | Campaign end date.Make sure this is later than startDate. |
| campaignId | Number | Yes | Campaign id.Make sure this is real and valid. |
| pageNo | Number | Yes | Page number. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| adgroupName | String | No | Adgroup name for fuzzy search. |
| startDate | String | Yes | Campaign start date. |
| onlineStatus | Number | No | The campaign online status.1:Online;0:Offline;9:deleted.Please do not use other num. |

# searchCampaignList

**Description:**Search campaign list with bizCode for sellers. The data window "start date" and data window "end date" represent the period during which the campaign's performance is calculated. For example, if a seller chooses a data window from June 1st to June 30th, 2023, it means that the performance of the campaign will be calculated for the period between those dates.

**Timeout Period：** the api timeout is 10s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

**Notes:** The startDate and endDate below is use to query data indicators of these campaign, not use to to query by campaign duration.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| startDate | String | Yes | Campaign start date. |
| endDate | String | Yes | Campaign end date.Make sure this is later than startDate. |
| pageNo | String | Yes | Page number. |
| pageSize | String | Yes | Page size.No more than 200\. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| onlineStatus | Number | No | The campaign online status.1:Online;0:Offline;9:deleted.Please do not use other num. |

# searchKeyword

**Description:** Search keyword with specific word on keyword selection module

**Timeout Period：** the api timeout is 10s, max qps is 300, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| campaignObjective | Number | Yes | Your campaign objective helps determine your bidding strategy \- Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales. |
| campaignType | Number | Yes | Unlock different ways to bids, select products, and keywords with campaign types. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| itemQuery | String | Yes | The word you do not want to put in the result. |
| itemId | Number | Yes | Product id.Make sure this item is real and valid. |
| searchWord | String | Yes | The specific word.eg:shoe |

# searchProductWithPage

**Description:**  Search product on Product Selection Module for Campaign Creation and Adding Products to Existing Campaigns

**Timeout Period：** the api timeout is 10s, max qps is 100, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

**Notes:** This api should be invoked before you do add a campaign/solution.Some of the params below is you clicked In the previous step, like campaignObjectLive,maxCpc,campaignType.And we will search product with some algo indicator(bidPrice) using your campaignObjectLive,maxCpc,campaignType.

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| brandName | String | No | Prodct brand name. |
| campaignType | Number | Yes | Unlock different ways to bids, select products, and keywords with campaign types.Please noted that this parameter might will be updated since Mid of July，2023 |
| pageSize | Number | Yes | Page size.No more than 200\. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| placementList | Number\[] | Yes | Placements determine where shoppers will see your promoted products.3:Search Result Page;4:Just For You Page |
| productName | String | No | Product name to fuzzy search. |
| campaignObjectLive | Number | Yes | Your campaign objective helps determine your bidding strategy \- Traffic objective helps you to increase the number of clicks to your store, while sales objective helps to increase your store’s sales.1:Traffic;2:Sales.Please noted that this parameter might will be updated since Mid of July，2023 |
| eligible | Number | Yes | Only search product which is eligible\|ineligible.1:eligible;0:ineligible. |
| pageNo | Number | Yes | Page number. |
| sellerSku | String | No | Product sellerSku. |
| maxCpc | String | Yes | Max bid determines the highest amount that you're willing to pay for a click on your promoted product.\-1 means automated bidding setting |
| categoryId | Number | No | Input category id to exact search. |
| itemIdBlackList | Number\[] | No | Input item id which you do not want put into result. |

  

# updateAdgroupBatch

**Description:**Update adgroup batch.

**Timeout Period：** the api timeout is 10s, max qps is 100, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

**Notes:** You could invoke this api to update your adgroup status for phase 1\.The adgroup will only be *advertised when campaign \& adgroup status is online.*

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| adgroupViewDTOList | Object\[] | Yes | Adgroup list |
| adgroupId | Number | Yes | Adgroup id. |
| switchStatus | String | Yes | Is the adgroup online rightnow.1:ON:0:OFF.Please do not use other num. |

# updateCampaign

**Description:**Update campaign with status field.

**Timeout Period：** the api timeout is 10s, max qps is 100, make sure do not over these num, especially qps, otherwise you may be blacklisted or limited request count for a while.

**Notes:** You could invoke this api to update your campaign duration,name,budget and status.

The campaign "Start date" and campaign"end date" represent the period during which a campaign will running. For example, if a campaign has a start date of June 1st, 2023 and an end date of June 30th, 2023, it means that the campaign will running from June 1st to June 30th, 2023, provided that the campaign has a valid budget, promoted products, and the seller has sufficient balance.

  

"minBudgetMap":{

 "SG":10

 "PH":100,

 "TH":100,

 "VN":50000,

 "MY":4,

 "ID":25000

 },

"maxBudgetMap":{

 "SG":10000,

 "PH":1000000,

 "TH":1000000,

 "VN":200000000,

 "MY":100000,

 "ID":100000000

 },

## Parameters

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| campaignId | Number | Yes | Campaign id.Make sure the id is real and valid. |
| campaignName | String | No | Campaign name.No more than 200 char. |
| startDate | String | No | Campaign start date. |
| endDate | String | No | Campaign end date.Make sure end date is later than or equal to start date and current time. |
| dayBudget | String | No | Budget indicates the maximum amount you’re willing to pay each day.This field need to meet the standard above. |
| bizCode | String | Yes | Decided to choose which advertisement solution.SD:sponsoredSearch.Phase 1 only support sponsoredSearch as bizCode which is shown as Sponsor Discovery in ASC. |
| switchStatus | Number | No | Campaign swtich status.1:Online;0:Offline.Please do not use other num. |

---

## Reverse Order Overview

<a id="reverse-order-overview-121370"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45496&docId=121370&lang=en_US>

A reverse order is an order that is generated when a refund or return request is initiated by the buyer after the order is updated to "Delivered". Reverse orders are not generated if the order is cancelled before shipping or if the status is updated to "Failed Delivery".

# When a buyer can initiate a return

The buyer can initiate the order within the time limit after receiving the order or before updating the order to "Confirm" status (which is not common to all countries).

# Return order type

Returns will be made by two different types of reverse orders:

**RTM type**：Full name Return to Merchant,This type will have the seller manually review within the SLA whether the return is uniform and check the goods and operate on their own whether to refund.

**RTW type**：Full name Return to Lazada Warehouse,This type is only available to some sellers and will be handled by Lazada for returns, without the seller having to do it manually.

# Return Type

**Return**：The buyer needs to send the goods back to the seller.

**Only Refund：**Buyers do not need to send back the goods can be directly refunded (only a few categories have this option such as fresh categories, etc.).

---

## Reverse order status flow chart

<a id="reverse-order-status-flow-chart-121371"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45496&docId=121371&lang=en_US>

![逆向123_1985x2548.jpg](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1690766400610_c8p2eLS0 "逆向123_1985x2548.jpg")

---

## Reverse order processing process

<a id="reverse-order-processing-process-121372"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45496&docId=121372&lang=en_US>

![2.png](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1690765962788_rDNMgmCm)

# Auto Pass Feature Introduction for Open APl:

 Auto Pass is belonging Reverse Bot, Which is A Reverse Tool Lazada Providing to Seller, Help Seller Handle Reverse Order Automatically and Improve Reverse Efficiency;

## Auto Pass Function:

 Auto Pass Help Seller Automatical Review and Approve Return Requests or/and Quality Check(QC) Process, Including:

Auto Approved New Return Requests, Which is Auto Review and Approve New Return Requests to Return or Refund;

Auto Approved Quality Check(QC) process, Which is Auto Review and Approve QC Process to Refund.

## Seller Control \& Automated Activation Rules:

 Sellers can manually enable or disable this feature.

 Note: The feature maybe automatically activated if the seller triggers the following scenarios

 i. Return Request Approve: Automatically enabled if all return request approve breached SLA in the past 30 days.

 ii. Return QC Approve: Automatically enabled if all return QC approve breached SLA in the past 30 days.

Violation Handling

 i. Sellers may manually disable the feature after automatic activation for the first three violations.

 ii. After the third violation, the feature remains active for 30 days before manual disablement is available.

# **Type of return**

## **Step 1 Call API to get reverse order information**

**request\_type**: RETURN

You need to call the [GetReverseOrderDetail API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Freverse%2Freturn%2Fdetail%2Flist) or the GetReverseOrdersForSeller API to get the list of returned orders along with the details and to pick out the ones that are in the REQUEST\_INITIATE state.

## **Step 2 Calling the API to Process Reverse Orders**

**Available Actions**:instantRefund、agreeReturn、refuesReturn

![image.png](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1690765963144_PhkGgOsw)

Orders that are normally in the REQUEST\_INITIATE state have three options for the seller to actively choose how to handle them within the SLA timeframe.

You need to call the ReverseOrderReturnUpdate API to manipulate this option. To do so, enter "instantRefund", "agreeReturn" or "refuesReturn" in the action field. These three first choices correspond to the "Refund Only", "Return \& refund" and "Reject" options in the screenshot.

When you use "instantRefund" or "agreeReturn", you only need to enter the action, reverse\_order\_id and reverse\_order\_item\_ids fields.

But if you want to use "refuseReturn", then you have to call GetReverseOrderReasonList API first to get the available reasion ids to be entered in the reason\-id field, and the comment and fields as well mandatory.

If you select refuseReturn, the process will end at this step.

## **Step 3 Confirm receipt of item(s)**

**Available Actions**: confirmDelivery

When the seller chooses agreeReturn(Return \& refund) in the second step, the buyer needs to choose the transportation method and send out the goods, after the seller receives the goods, he needs to call ReverseOrderReturnUpdate API to input "confirmDelivery" to confirm.

![image.png](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1690765963464_kNnVzxbr)

## **image.pngStep 4 Decide whether or not to make a refund after inspecting the items**

**Available Actions**: agreeRefund、refuseRefund

![image.png](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1690765964133_Sc1kOf8Q)

When the seller confirms the receipt of the goods, they need to check the goods within the SLA time limit and call the API or select "Process Refund" or "Reject the Request" in the seller center to confirm whether to refund or not.

Corresponds to the "agreeRefund" and "refuseRefund" enumerations in the action field of the ReverseOrderReturnUpdate API. When you use the "refuseRefund" enumeration "reason\_id", "comment" and " image\_info" fields are required.

# **Type of refund only**

**Note**: This type of reverse order is limited to specific categories can apply, specific categories, please consult the local national customer service.

## **Step 1 Call API to get reverse order information**

**request\_type**: ONLY\_ REFUND

You need to call the [GetReverseOrderDetail API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Freverse%2Freturn%2Fdetail%2Flist) or the GetReverseOrdersForSeller API to get the list of returned orders along with the details and to pick out the ones that are in the REQUEST\_INITIATE state.

## **Step 2 Calling the [ReverseOrderOnlyRefundDecide API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Freverse%2Fonlyrefund%2Fseller%2Fdecide) to Process Reverse Orders**

**Available Actions**: agreeRefund, startDispute

Upon receipt of this type of reverse order, you will need to confirm weather your agreement to the refund within the SLA timeframe.

If you agree, you need to enter "agreeRefund".

When you use the "startDispute" enumeration,then "comment" and " image\_info" fields are required.

---

## 获取可升级 Global Plus 商品列表

<a id="global-plus-121584"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45692&docId=121584&lang=en_US>

API：[/product/global/semi/avaible/get](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fglobal%2Fsemi%2Favaible%2Fget)

  

每次升级成功后，商品状态会准实时同步更新到列表，也就是重新再拉是拉不到升级成功的品。（这里会影响到传输的页数）

**请求参数**

| **参数** | **类型** | **描述** |
| --- | --- | --- |
| type | String | 商品发布类型，global/single分别对应使用gsp或asc发布的商品；选择global商品忽略下面country参数 |
| country | String | 查询的国家，MY/SG/PH/VN/TH |
| pageNo | Integer | 页数, 首页传1 |
| pageSize | Integer | 每页数目，type\=global：pageSize传参最大为100 type\=single：pageSize传参最大为20 |
| currentIndex | Long | 每次请求返回的currentIndex, 首次传0 |

**响应参数**

```
{
  "code": "0",
  "data": {
    "total_products": 120,
    "current_page":1,
    "page_size": 10,
    "current_index":0,
    "type": "global",
    "products": [
      {
        "global_item_id": "180226526", //查询asc时此字段为空
        "item_id": 13243454, //查询global时此字段为空
        "skus": [
          {
            "item_id": 13243454, //查询global时此字段为空
            "sku_id": 314525867, //查询global时此字段为空
            "seller_sku": "ctf-a",
            "package_width": "10.00",
            "package_height": "4.00",
            "package_length": "10.00",
            "package_weight": "0.04",
            "country_info": [
              {
                "market": "LAZADA_MY",
                "quantity": 10, // global场景quantity字段都为null 
                "special_price": "9", //零售价
                "price": "32", //原价 划线价
                "currency":"MYD",
                "item_id":123456, //查询global时，对应国家的itemId
                "sku_id":123456879//查询global时，对应国家的skuId
              },
              {
                "market": "LAZADA_VN",
                "quantity": 5, // global场景quantity字段都为null 
                "special_price": "3800", //零售价
                "price": "7500", //原价 划线价
                "currency":"VND",
                "item_id":123456,//查询global时，对应国家的itemId
                "sku_id":123456879//查询global时，对应国家的skuId
              },
              { // 2024-03-13开始不再返回这个信息
                "market": "GLOBAL_CB",
                "quantity": null, // global场景quantity字段都为null 
                "special_price": "5", //零售价
                "price": "8", //原价 划线价
                "currency":"CNY"
              }
            ]
          }
        ]
      }
    ]
  },
  "request_id": "0ba2887315178178017221014"
}
```

---

## 获取商品不含邮价格

<a id="121585"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45692&docId=121585&lang=en_US>

API：[/product/global/semi/recommend/price/get](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fglobal%2Fsemi%2Frecommend%2Fprice%2Fget)

**请求参数：**

| **参数** | **类型** | **描述** |
| --- | --- | --- |
| payload | Payload | 请求内容json，全局商品则返回所有国家；非全局商品只返回传入的国家。 |

```
{
   "global_item_id": "180226526", //查询asc时此字段为空
   "item_id": 13243454, //查询global时此字段为空
   "abs":"2.0",//订单中平均包含商品数量设置；重量小于0.01kg的轻小件商品需要设置此参数
   "skus": [
      {
            "item_id": 13243454,
            "seller_sku": "test2022 02",
            "sku_id": 314525867,
            "package_height": "10",
            "package_length": "10",
            "package_width": "10",
            "package_weight": "0.5",
            
       }
   ]
}
```

**返回参数：**

```
{
  "code": "0",
  "data": {
    "global_item_id": "180226526", //查询asc时此字段为空
    "item_id": 13243454, //查询global时此字段为空
    "skus": [
        {
          "seller_sku": "test2022 02",
          "sku_id": 314525867,
          "country_price": [
            {
              "market": "LAZADA_MY",
              "no_postage_price": "10",
              "currency":"MYR"
            },
            {
              "market": "LAZADA_VN",
              "no_postage_price": "3000",
              "currency":"VND"
            }
          ]
      }
    ]
  },
  "success": "true",
  "error_code": "10002",
  "error_msg": "get SKU failed",
  "request_id": "0ba2887315178178017221014"
}
```

---

## 升级商品为Global Plus

<a id="global-plus-121586"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45692&docId=121586&lang=en_US>

API：[/product/global/semi/upgrade](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fglobal%2Fsemi%2Fupgrade)

**请求参数：**

| **参数** | **类型** | **描述** |
| --- | --- | --- |
| payload | Payload | 请求内容json，全局商品则返回所有国家；非全局商品只返回传入的国家。 |

```
{
      "global_item_id": 180226526, //查询asc时此字段为空
      "item_id": 13243454, //查询global时此字段为空
      "abs":"2.0",//订单中平均包含商品数量设置；重量小于0.01kg的轻小件商品需要设置此参数
      "country":["SG","MY"],
      "skus": [
          {
            "item_id": 13243454, //查询global时此字段为空
            "seller_sku": "test2022 02",
            "sku_id": 314525867, //查询global时此字段为空        
            "package_height": "10",
            "package_length": "10",
            "package_width": "10",
            "package_weight": "0.5",
            "country_info": [
              {
              "market": "LAZADA_MY",
              "quantity": 10, //库存数量，非必填，为null 则不同步更新库存
              "no_postage_price": "9", //不含邮价
              "price": "32", //原价 划线价
              "currency","MYR"
              },
              {
              "market": "LAZADA_VN",
              "quantity": 5,//库存数量，非必填，为null 则不同步更新库存
              "no_postage_price": "3800", //不含邮价
              "price": "7500", //原价 划线价
              "currency","VND"
              }
            ]
            
          }
        ]
}
```

**响应参数：**

```
{
  "error_msg": "null",
  "code": "0",
  "data": {
     "product_id": "10002019"
  },
  "success": "true",
  "error_code": "null",
  "request_id": "0ba2887315178178017221014"
}
```

**错误码：**

| **错误码** | **错误描述** |
| --- | --- |
| **10001** | **Illegal parameters****参数不合法** |
| **10002** | **System error** **系统异常** |
| **10003** | **Item not found****商品未找到** |
| **10004** | **price need to be lower than the original price****价格需低于零售价** |
| **10005** | **商品已升级** |
| **10006** | **商品校验失败，无法升级** |

---

## 更新 Global Plus 商品价格及物流属性信息

<a id="global-plus-121587"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45692&docId=121587&lang=en_US>

API：[/product/global/semi/udpate](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fglobal%2Fsemi%2Fupdate)

?

**请求参数：**

| **参数** | **类型** | **描述** |
| --- | --- | --- |
| payload | Payload | 请求内容json，全局商品则返回所有国家；非全局商品只返回传入的国家。 |

```
{
      "global_item_id": 180226526, //查询itemIds时,如果能查到globalItem,则返回
      "item_id": 13243454, //查询global时此字段为空
      "abs":"2.0",//订单中平均包含商品数量设置；重量小于0.01kg的轻小件商品需要设置此参数
      "country":["SG","MY"],
      "skus": [
          {
            "item_id": 13243454, //查询global时此字段为空
            "seller_sku": "test2022 02",
            "sku_id": 314525867, //查询global时此字段为空        
            "package_height": "10",
            "package_length": "10",
            "package_width": "10",
            "package_weight": "0.5",
            "country_info": [
              {
              "market": "LAZADA_MY",
              "quantity": 10, //库存数量，非必填，为null 则不同步更新库存
              "no_postage_price": "9", //不含邮价
              "price": "32", //原价 划线价
              "currency","MYR"
              },
              {
              "market": "LAZADA_VN",
              "quantity": 5,//库存数量，非必填，为null 则不同步更新库存
              "no_postage_price": "3800", //不含邮价
              "price": "7500", //原价 划线价
              "currency","VND"
              },
              { //gsp发布的商品才有这一条信息
              "market": "GLOBAL_CB",
              "quantity": 15,//库存数量，非必填，为null 则不同步更新库存
              "no_postage_price": "5", //不含邮价
              "price": "8", //原价 划线价
              "currency","CNY"
              }
            ]
            
          }
        ]
}
```

  

**响应参数：**

```
{
  "error_msg": "null",
  "code": "0",
  "data": {
     "product_id": "10002019"
  },
  "success": "true",
  "error_code": "null",
  "request_id": "0ba2887315178178017221014"
}
```

  

**错误码：**

| **错误码** | **错误描述** |
| --- | --- |
| 10001 | Illegal parameters参数不合法 |
| 10002 | System error 系统异常 |
| 10003 | Item not found商品未找到 |
| 10004 | price need to be lower than the original price价格需低于零售价 |
| 10005 | 商品已升级 |
| 10006 | 商品校验失败，无法升级 |

---

## 获取商品半托管商品信息

<a id="121588"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45692&docId=121588&lang=en_US>

API：[/product/global/extension](https://open.lazada.com/apps/doc/api?cid=18&path=%2Fproduct%2Fglobal%2Fextension)

 

**请求参数：**

| **参数** | **类型** | **描述** |
| --- | --- | --- |
| global\_item\_ids | List\<Long\> | 根据globalId查询，返回所有国家的商品 // 优先使用这个进行查询 // 最多50个 |
| item\_ids | List\<Long\> | //global\_item\_ids 为空时查询，必须与country一起查询 // 最多50个 |
| country | String | //global\_item\_ids 为空时查询，必须与item\_ids一起查询 |

```
"global_item_ids": [180226526], // 优先使用这个进行查询
"item_ids": [13243454], //查询global时此字段为空
"country": "SG" //查询global时此字段为空
```

 

**响应参数：**

```
{
  "code": "0",
  "data": {
    "global_item_id": "180226526", // 查询country item时这个字段为空
    "item_id": 13243454, // 查询global时这个字段为空  
    "abs": "1.4",//订单中平均包含商品数量设置；重量小于0.01kg的轻小件商品将返回此参数
    "products": [
      {
        "market": "LAZADA_VN",
        "item_id": 1234234,
        "semi_status": 1, // 1 则为半托管商品
        "skus": [
          {
            "sku_id":123412,
            "seller_sku": "ctf-a",
            "no_postage_fee": {
              "amount": 3500,
              "currency": "VND"
            },
            "special_price": {
              "amount": 3800,
              "currency": "VND"
            },
            "price": {
              "amount": 7500,
              "currency": "VND"
            }
          }
        ]
      }
    ]
  },
  "success": "true",
  "error_code": "10002",
  "error_msg": "get SKU failed",
  "request_id": "0ba2887315178178017221014"
}
```

---

## Choice Seller Authorization Process

<a id="choice-seller-authorization-process-121782"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45695&docId=121782&lang=en_US>

## Service address

| **Environment** | **Service address** |
| --- | --- |
| Central: for all countries (SG/MY/TH/VN/ID/PH) | <https://auth.lazada.com/rest> |

## Authorization steps

The figure below shows the authorization steps:

### 1\.  Concatenate authorization URL

**Sample link for authorization:**

https://auth.lazada.com/oauth/authorize?response\_type\=code\&force\_auth\=true\&redirect\_uri\=${app call back url}\&client\_id\=${appkey}

Note that the “client\_id” and “redirect\_uri” should be replaced with the ones of your own application.

The following table lists the parameters and their description.![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误1_1728886354584__yXpG.jpg)

| **Parameter** | **Required?** | **Value** | **Parameter** |
| --- | --- | --- | --- |
| client\_id | Yes |  | The App Key of your application, assigned by Lazada Open Platform. |
| redirect\_uri | Yes | The callback URL you provided when creating the application. | The “redirect\_uri” is used for receiving the code when a seller completes the authorization. It must be the same with the callback URL you provided when creating the application on Lazada Open Platform. |
| response\_type | Yes | code | The authorization type, with the value of “code”. |
| force\_auth | No | true | Refresh the web browser cookie for a new authorization session. |

### 2\. Guide sellers to authorize

Guide a seller to open the above authorization URL through the web browser. The following window with the login panel is displayed. The permissions to be granted to the application after the authorization are listed on the left. The seller selects the country, enters seller account and password, and clicks the “Sign in And Authorize” button to complete the authorization of the application.

  

Note:

For Cross Border sellers, you only need to authorize once for all the 6 ventures. Take the following steps to complete the authorization:

1\. Select Lazada Choice \- xx” from the Country dropdown list.

2\. Authorize using the seller account and password.

3\. Use the code returned to the callback URL to get the access token. This access token can be used for authorized venture.

  

See the screen capture below.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误2_1728886483245__DHVo.jpg)

### 3\. Retrieve authorization code

After the seller completes the authorization, Lazada Open Platform will return the authorization code to the callback URL address. Your application can retrieve the code and use it to get the Access Token. The sample authorization code is shown below.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误3_1728886529681__USEG.jpg)

Note: Note: The authorization code is valid for half an hour and can only be used once. Once it expires, it needs to be re\-authorized

### 4\. Get the access\_token

Use the **/auth/token/create** API to get the Access Token (access\_token).

**Code sample:**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLLazopClient client \= new LazopClient("https://auth.lazada.com/rest", "${appkey}", "${app\_secret}");LazopRequest request \= new LazopRequest("/auth/token/create");request.addApiParam("code", "0\_100132\_zQh27YbbE1AH32NY3xqxCAMQ10175");LazopResponse response \= client.execute(request);System.out.println(response.getBody());### 5\. Save the token

The access token will expire in a specific period (expires\_in). Before it expires, the seller does not need to authorize the application again. You need to save the latest token properly.

### 6\. Sample of the token

**Notes:**

1\. The “access\_token” and “refresh\_token” in this sample are for reference only.

2\. For cross border sellers, the returned access token can be used for multiple sites. Therefore, the “country\_user\_info” section contains multiple country values.

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "access\_token": "50000201b01qj1ef00869sqCageT3NTwdoDuGVHQSIe3jwPENwVulOwDguQwgl", "country": "my", "refresh\_token": "50001200701ak1d2fc8c3qMDuBlnnYOsahYGTCLP90qj7jBT7sRycHebI1SWyF", "account\_platform": "seller\_center", "refresh\_expires\_in": 4320000, "country\_user\_info": \[ { "country": "my", "user\_id": "300253344022", "seller\_id": "300253344022", "short\_code": "MY4NBRIFM2" } ], "expires\_in": 864000, "account": "choice\_virtual\_testcbshop1803@gmail.com", "code": "0", "request\_id": "212a6f1317090164028607735"}The following table lists the parameters in the token and their description.

| **Key** | **Type** | **Sample** | **Description** |
| --- | --- | --- | --- |
| access\_token | string | 50000601c30atpedfgu3LVvik87Ixlsvle3mSoB7701ceb156fPunYZ43GBg | Access token. |
| refresh\_token | string | 500016000300bwa2WteaQyfwBMnPxurcA0mXGhQdTt18356663CfcDTYpWoi | Refresh token, used to refresh the token when “refresh\_expires\_in”\>0\. |
| expires\_in | number | 25920 (expires in 25920 seconds) | The expiring time of the access token, in seconds. For APPs in "Test" status, the value is 7 days. For APPs in "Online" status, the value is 30 days. |
| refresh\_expires\_in | number | 25920 (expires in 25920 seconds) | The expiring time of the refresh token. For APPs in "Test" status, the value is 30 days. For APPs in "Online" status, the value is 180 days. |
| country | string | sg | The country ID (sg: Singapore, my: Malaysia, ph: Philippines, th: Thailand, id: Indonesia, vn: Vietnam). |
| account\_id | string | 706388888 | User ID, which can be ignored when “account\_platform” \= “seller\_center”. |
| account | string | [xxx@126\.com](mailto:xxx@126.com) | User account. |
| account\_platform | string | seller\_center | User platform, supporting multiple platforms. |

## Refresh authorization steps

### 1\. Use “/auth/token/refresh” to refresh the access token

See the following code sample.

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLLazopClient client \= new LazopClient("https://auht.lazada.com/rest", "${appkey}", "${app\_secret}");LazopRequest request \= new LazopRequest("/auth/token/refresh");request.addApiParam("refresh\_token", "50000601c30atpedfgu3LVvik87Ixlsvle3mSoB7701ceb156fPunYZ43GBg");LazopResponse response \= client.execute(request);System.out.println(response.getBody());The returned data structure by “/auth/token/refresh” is the same with that by getting the access token with authorization code. You will get new “access\_token” and “refresh\_token”. You must save the latest “refresh\_token” for getting the new “access\_token”. Note that the duration of the access token will be reset, but the duration of the refresh token will not be reset. After the refresh token expires, sellers need to re\-authorize your application to generate new access token and refresh token.

**Usage notes**

1Sellers do not need to authorize again before the token expires.

2If “refresh\_expires\_in” \= 0, the access token cannot be refreshed. Only when “refresh\_expires\_in” \> 0, you can call the /auth/token/refresh API to refresh the access token.

3If token needs to be refreshed, it is recommended to refresh it 30 minutes before the token expires.

---

## Product Management

<a id="product-management-121783"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45695&docId=121783&lang=en_US>

The APIs required for Choice sellers to get their items are different from regular sellers. And currently Choice sellers are not supported to use the API to rack your Choice items.

# Get Products

Developers can use the GetChoiceProducts and GetChoiceProductItem APIs to get the latest information about the products in the choice store and synchronize it to display in their own system.

## API List

| API Name | API Path | Description |
| --- | --- | --- |
| GetChoiceProducts | /choice/products/get | Batch query eligible products based on time, status and other conditions. |
| GetChoiceProductItem | /choice/product/item/get | Queries information about a single product based on item id. |

## Response Example

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": { "created\_time": "1703644237397", "updated\_time": "1721167453427", "images": \[ "https://id\-live.slatic.net/p/a794dcee12e2da315f217ab429194898\.jpg" ], "skus": \[ { "Status": "active", "quantity": 119, "Images": \[ "https://id\-live.slatic.net/p/5a2a43ff78fb57a192d5e4f04a3dbefe.png" ], "SellerSku": "12312312", "ShopSku": "7940514630\_ID\-14353516624", "special\_time\_format": "yyyy\-MM\-dd HH:mm:ss", "currency\_unit": "IDR", "saleProp": { "color\_family": "Olive" }, "multiWarehouseInventories": \[ { "occupyQuantity": 0, "quantity": 0, "totalQuantity": 0, "withholdQuantity": 0, "warehouseCode": "dropshipping", "sellableQuantity": 0 } ], "package\_width": "1\.00", "special\_to\_time": "2028\-12\-27 10:11:53", "sku\_supply\_price": "12\.00", "color\_family": "Olive", "special\_from\_time": "2023\-12\-27 10:11:53", "package\_height": "1\.00", "fblWarehouseInventories": \[ { "occupyQuantity": 1, "quantity": 119, "totalQuantity": 120, "withholdQuantity": 0, "warehouseCode": "AChoice\-ID\-V\-JIT", "sellableQuantity": 119 } ], "channelInventories": \[ ], "package\_length": "1\.00", "special\_from\_date": "2023\-12\-27", "Available": 119, "package\_weight": "1", "SkuId": 14353516624, "special\_to\_date": "2028\-12\-27" } ], "item\_id": 7940514630, "bizSupplement": { "item\_type": "4" }, "variation": { "Variation1": { "name": "color\_family", "options": \[ "Olive" ], "hasImage": true, "label": "Color Family", "customize": false } }, "trialProduct": false, "primary\_category": 10100234, "marketImages": \[], "attributes": { "description\_en": "\<article class\=\\"lzd\-article\\"\>\<p style\=\\"line\-height:1\.7;text\-align:left;text\-indent:0;margin\-left:0;margin\-top:0;margin\-bottom:0\\"\>\<span\>1\</span\>\</p\>\</article\>", "name": "localjit testlocaljit test", "description": "\<article class\=\\"lzd\-article\\"\>\<p style\=\\"line\-height:1\.7;text\-align:left;text\-indent:0;margin\-left:0;margin\-top:0;margin\-bottom:0\\"\>\<span\>1\</span\>\</p\>\</article\>", "source": "gsp", "brand": "No Brand" }, "status": "Active" }, "code": "0", "request\_id": "210030a417255167682538883"}**Field Analysis**

| Field Name | Field Description |
| --- | --- |
| Images | The Images property is used to upload images for this product.The Image field in the Images property must be of the array type, with a maximum of 8 images passed into each Image field.Putting Images in the sku attribute indicates that the image is a variant image, and putting it outside indicates an SPU image. |
| name | Product Title. |
| brand | Product Brand |
| primary\_category | Product category ID, call [GetCategoryTree API](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Ftree%2Fget) to view the full category tree. |
| item\_id | The id generated after the product is created.Current country unique.An item id can be associated with multiple sku ids. |
| created\_time | The time when the product was created. |
| updated\_time | The time when the product was updated. |
| Status | The current status of the SKU.Enum:active、inactive、deleted |
| skus | A list of SKUs for the current product. |
| skus.Status | The current status of the SKU.Enum:active、inactive、deleted |
| quantity | The total inventory of the current SKU. |
| SellerSku | Customizable by the seller, unique in the store. |
| SkuId | Sku id created by Lazada at the time of product creation. |
| multiWarehouseInventories | A seller may have multiple warehouses, and the inventory of each warehouse for the current SKU will be displayed in this list. |
| occupyQuantity | This inventory will be increased when the item is purchased and payment is successful. |
| withholdQuantity | This inventory will increase when an item is purchased but not yet paid for. |
| SellableQuantity | The quantity of stock that can be purchased by buyers. |
| totalQuantity | Total inventory(SellableQuantity\+WithholdQuantity\+OccupyQuantity). |
| item\_type | Inventory management model for products.JIT (platform\-controlled Virtual inventory) : Inventory is managed by the seller.VMI (Platform\-controlled physical inventory) : The platform manages inventory with local physical stock.Enum: cn vmi ：1local vmi ：2cn jit：3local jit：4 |

  

  

**Inventory Management**

| API Name | API Path | Description |
| --- | --- | --- |
| EditChoiceSkuStock | /choice/stock/edit | This API can be called to update the sellable inventory of a Choice Sku. |

---

## Choic Order Overview

<a id="choic-order-overview-121784"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45697&docId=121784&lang=en_US>

Choice stores have two types of orders, purchase orders and general orders. Purchase orders are initiated by Lazada to the seller, who provides the supply price and ships to the specified location. Ordinary orders are orders that are generated after a buyer has made a purchase.

# Normal Orders

Ordinary orders are generated by the buyer after the order is placed and are of two types. One is orders that are fulfilled by Lazada and the other is orders that are shipped directly from the seller.

Both types of orders can be fetched using the [GetOrders API](https://open.lazada.com/apps/doc/api?path=%2Forders%2Fget) and viewed in order details using the [GetOrderItems](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fitems%2Fget)/<GetMultipleOrderItems> API.

## How to distinguish which orders need to be shipped directly by sellers

After calling GetOrderItems/GetMultipleOrderItems API, check the biz\_group field in the response. When the value of this field is 70100, it means that the order item needs to be shipped according to the process of the JIT Fulfillment by Seller document.

When the value of this field is 70020/70000, it means that the order does not need to be fulfilled manually by the seller, but is shipped from the Lazada warehouse.

### API Response Demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": \[ { ...... "biz\_group": 70100, "product\_id": "7940514630", "voucher\_code\_platform": "", "purchase\_order\_number": "", "sku": "12312312", "order\_type": "Normal", "order\_item\_id": 1381129206425020, "shop\_id": "testnidzds", "order\_flag": "NORMAL", "is\_fbl": 1, "name": "localjit testlocaljit test", "delivery\_option\_sof": 0, "order\_id": 1381129206325020, "fulfillment\_sla": "Kirim secepat mungkin\_null\_null", "status": "pending", "paid\_price": 10471, "warehouse\_code": "RMCW\-CHOICEJIT\-ID\-001", "shipping\_type": "Own Warehouse", "created\_at": "2024\-02\-29 14:59:56 \+0700", "supply\_price": 12, "voucher\_seller\_lpi": 0, ...... } ], "code": "0", "request\_id": "210030a417104845773924739"}# Purchase orders(PO)

PO is an order with lazada sourcing, which is sourced by lazada after the seller provides the supply price. Seller needs to send PO to specified warehouse within specified SLA.

You can call the [QueryListJitPurchaseOrder API](https://open.lazada.com/apps/doc/api?path=%2Fjit%2Fpurchase_order%2Fquery_list) to query the PO list.

---

## JIT PO management

<a id="jit-po-management-121785"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45697&docId=121785&lang=en_US>

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误1_1728887611580__whyy.jpg)

# 1\. Query PO List

## 1\.1\. path

[/jit/purchase\_order/query\_list](https://open.lazada.com/apps/doc/api?path=%2Fjit%2Fpurchase_order%2Fquery_list)

## 1\.2\. request

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| gmt\_create\_begin | String | Yes | PO creation start time, the time range (i.e. end\-begin) needs to be within 90 days. {yyyy\-MM\-dd HH:mm:ss} |
| gmt\_create\_end | String | Yes | The PO creates the end time, and the time range (i.e. end\-begin) needs to be within 90 days. {yyyy\-MM\-dd HH:mm:ss} |
| purchase\_order\_no\_list | String\[] | No | Purchase Order (PO) list, 20 max.{\["POJ1001","POJ1002"]} |
| logistics\_no\_list | String\[] | No | List of logistics orders, maximum 10\.{\["LBX1001","LBX1002"]} |
| order\_status | String | No | PO Status 10:To Pack; 20:Ready To Ship; 22:To Put Away; 25:Arrive ata Warehouse; 40:Completed; \-100610:Timeout cancellation; \-100:Buyer Cancellation;Without this parameter the API will respond to all state POs by default. |
| page\_index | Number | No | Current page, default 1\. |
| page\_size | Number | No | Pagination size, maximum 50, default 20\. |

## 1\.3\. response

| result |  |  | Object |  |
| --- | --- | --- | --- | --- |
|  | data |  | Object |  |
|  |  | gmt\_modified | Number | Updated time |
|  |  | supplier\_id | Number | Supplier ID |
|  |  | delivery\_method | String | Shipping method:parcel: express; truck: truck delivery or other; pickup: door\-to\-door; |
|  |  | store\_contact\_name | String | Warehouse contact name |
|  |  | supplier\_code | String | Supplier Code |
|  |  | purchase\_order\_no | String | Purchase Order No |
|  |  | gmt\_arrive\_time | Number | Actual arrival time at the warehouse |
|  |  | seller\_id | String | Seller id |
|  |  | total\_quantity | Number | Purchase quantity |
|  |  | total\_sku\_count | Number | SKU quantity |
|  |  | store\_name | String | Store name |
|  |  | biz\_status | String | PO status |
|  |  | supplier\_name | String | Supplier name |
|  |  | creator | String | creator id |
|  |  | gmt\_create | Number | Created time |
|  |  | gmt\_except\_arrive\_time | Number | Expected time of arrival |
|  |  | trade\_order\_id\_list | String\[] | order id |
|  |  | pickup\_order\_no | String | Pick up order number(PUO) |
|  |  | store\_contact\_phone | String | Store Contact Phone Number |
|  |  | logistics\_no\_list | String | List of logistics order numbers |
|  |  | store\_address | String | Store Address |
|  |  | site\_id | String | Recipient's country |
|  |  | store\_code | String | Warehouse Code |
|  | page\_index |  | Number | Current page number |
|  | page\_size |  | Number | Page size |
|  | total\_page |  | Number | Total pages |
|  | total\_count |  | Number | Total number of records |
|  | success |  | Boolean | isSuccess |
|  | error\_message |  | String | error msg |
|  | error\_code |  | String | error code |

## 1\.4\. demo

### 1\.4\.1\. Normal Situation

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "current\_page\_count": 0, "data": \[ { "supplier\_name": "yuyin test company123", "gmt\_modified": 1697772940000, "creator": "500403648032", "supplier\_id": 1000000000351423, "delivery\_method": null, "store\_contact\_name": "test11", "supplier\_code": "12981579", "gmt\_create": 1697772919000, "gmt\_except\_arrive\_time": 1697945719000, "purchase\_order\_no": "POJ2310202023123807", "gmt\_arrive\_time": null, "trade\_order\_id\_list": \[ "726365100368364" ], "pickup\_order\_no": null, "store\_contact\_phone": null, "logistics\_no\_list": \[], "seller\_id": "500403648032", "total\_quantity": 3, "store\_address": "Dummy, Fuyuan 1 Road, Tangwei Street, Fuyong Town", "total\_sku\_count": 1, "site\_id": "PH", "store\_name": "Lazada Vmi Test", "biz\_status": "10", "store\_code": "RMCW\-CHOICE\-CN\-TEST\-1" }, { "supplier\_name": "yuyin test company123", "gmt\_modified": 1698228047000, "creator": "500403648032", "supplier\_id": 1000000000351423, "delivery\_method": "parcel", "store\_contact\_name": "test11", "supplier\_code": "12981579", "gmt\_create": 1697772919000, "gmt\_except\_arrive\_time": 1697945719000, "purchase\_order\_no": "POJ2310202023132402", "gmt\_arrive\_time": 1698228047000, "trade\_order\_id\_list": \[ "721516401568364" ], "pickup\_order\_no": null, "store\_contact\_phone": null, "logistics\_no\_list": \[ "LBX0040984508297" ], "seller\_id": "500403648032", "total\_quantity": 2, "store\_address": "Dummy, Fuyuan 1 Road, Tangwei Street, Fuyong Town", "total\_sku\_count": 1, "site\_id": "PH", "store\_name": "Lazada Vmi Test", "biz\_status": "25", "store\_code": "RMCW\-CHOICE\-CN\-TEST\-1" } ], "page\_index": 1, "need\_pagination": true, "total\_page": 1, "success": true, "error\_message": null, "page\_size": 20, "error\_code": null, "total\_count": 96}### 1\.4\.2\. Abnormal Situation1

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "current\_page\_count": 0, "data": null, "need\_pagination": true, "page\_index": 1, "total\_page": 0, "success": false, "error\_message": "the input param gmt\_create\_begin '2023\-10\-01 00:00:00:00', can not format to {yyyy\-MM\-dd HH:mm:ss} lzd\_trace:2104c51616993671384778760ea687", "page\_size": 50, "error\_code": "INVALID\_PARAM", "total\_count": 0}### 1\.4\.3\. Abnormal Situation2

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "current\_page\_count": 0, "data": null, "need\_pagination": true, "page\_index": 1, "total\_page": 0, "success": false, "error\_message": "CG\_CC\_ILLEGAL\_ARGUMENT:gmtCreateLeft和gmtCreateRight的时间间隔不能超过90天 lzd\_trace:2104c51616993671864004557ea687", "page\_size": 50, "error\_code": null, "total\_count": 0}# 2\. Query the list of PO items

## 2\.1\. path

[/jit/purchase\_order/query\_list\_purchase\_item](https://open.lazada.com/apps/doc/api?path=/jit/purchase_order/query_list_purchase_item)

## 2\.2\. request

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| purchase\_order\_no | String | Yes | JIT purchase order number |
| page\_index | Number | No | Current page, default 1\. |
| page\_size | Number | No | Pagination size, maximum 200, default 20\. |

## 2\.3\. response

| result |  |  | Object |  |
| --- | --- | --- | --- | --- |
|  | data |  | Object |  |
|  |  | product\_id | String | Product id |
|  |  | sc\_item\_code | String | Product code |
|  |  | buyer\_qty | Number | Number of purchases |
|  |  | sc\_item\_id | Number | sc\_item\_id |
|  |  | barcodes | String\[] | barcodes |
|  |  | received\_normal\_qty | Number | Number of products received in good condition |
|  |  | img\_url | String | Product preview image |
|  |  | product\_title | String | Product name |
|  |  | sc\_item\_name | String | 货品名称 |
|  |  | seller\_sku | String | sellerSku |
|  |  | sku\_id | String | sku id |
|  |  | received\_defective\_qty | Number | Number of damaged items received |
|  | page\_index |  | Number | Current page number |
|  | page\_size |  | Number | Page size |
|  | total\_page |  | Number | Total pages |
|  | total\_count |  | Number | Total number of records |
|  | success |  | Boolean | is success |
|  | error\_message |  | String | error msg |
|  | error\_code |  | String | error code |

## 2\.4\. demo

### 2\.4\.1\. Normal Situation

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "current\_page\_count": 0, "data": \[ { "product\_id": "2413692053", "sc\_item\_code": "1694487877029", "buyer\_qty": 2, "sc\_item\_id": 722815306851, "barcodes": \[ "408405000606005" ], "received\_normal\_qty": 2, "product\_title": "UVCUVCUVC", "img\_url": "https://my\-live\-01\.slatic.net/p/4269a91e90549471277b82e1fcee8d03\.jpg", "sc\_item\_name": "bala test 234", "seller\_sku": "test1234", "sku\_id": "11853722049", "received\_defective\_qty": null } ], "page\_index": 1, "need\_pagination": true, "total\_page": 1, "success": true, "error\_message": null, "page\_size": 50, "error\_code": null, "total\_count": 1}### 2\.4\.2\. Abnormal Situation

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "current\_page\_count": 0, "data": null, "need\_pagination": true, "page\_index": 1, "total\_page": 0, "success": false, "error\_message": "the input param page\_size is : 2000, max support 200 lzd\_trace:2104c51616993672904545557ea687", "page\_size": 50, "error\_code": "INVALID\_PARAM", "total\_count": 0}# 3\. Pack

## 3\.1\. path

[/jit/purchase\_order/package](https://open.lazada.com/apps/doc/api?path=%2Fjit%2Fpurchase_order%2Fpackage)

## 3\.2\. request

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| purchase\_order\_no\_list | String\[] | Yes | Purchase order list, max 100\.{\["POJ1001","POJ1002"]} |

## 3\.3\. response

| result |  |  | Object |  |
| --- | --- | --- | --- | --- |
|  | data |  | Object |  |
|  |  | status | String | 'success' |
|  | success |  | Boolean | is success |
|  | error\_message |  | String | errror msg |
|  | error\_code |  | String | error code |

## 3\.4\. demo

### 3\.4\.1\. Normal Situation

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": { "status": "success" }, "success": true, "error\_message": null, "error\_code": null}### 3\.4\.2\. Abnormal Situation

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": null, "success": false, "error\_message": "Has packed. Plz refresh lzd\_trace:212b4c3b16993554806748351eb42d", "error\_code": null}# 4\. Shipment

## 4\.1\. path

[/jit/purchase\_order/batch\_pickup\_deliver](https://open.lazada.com/apps/doc/api?cid=52&path=%2Fjit%2Fpurchase_order%2Fbatch_pickup_deliver)

## 4\.2\. Pre\-conditions for successful API call

When calling this API, the PO state must be 20 (to pack).

The API checks that the JIT PO's current status is 20\.

  

Call \[3\.Pack] first, then \[4\.Shipment].

\[3\.Pack] is an asynchronous update, the current state may not be 20, and the call to \[4\.Shipment] will fail. You must confirm that the current state is 20 before calling \[4\.Shipment]. Otherwise it will increase the flow limit value and cause subsequent calls to limit the flow.

  

NOTE: Currently the asynchronous processing time is 5\~10 seconds.

Under normal condition, call \[3\.Pack] n(5\~10\) seconds and then call \[4\.Shipment], it can be called normally. Otherwise, it can be considered as a stuck order.

## 4\.3\. How to determine if the current PO status is 20?

Method 1 (Synchronization):

  

1\. Query the current PO list status through the Query API.

Rely on: \[1\. Query PO List] to query the PO list.

  

Method 2 (asynchronous):

Wait for JIT PO status to push pack\_completed. 

This interface is called when the push state, pack\_completed, has been packaged.

Dependency: \[6\. Push] Push JIT PO status.

## 4\.4\. request

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| purchaseOrderNoList | String\[] | Yes | The purchase order list, maximum input of 500\.{\["POJ1001","POJ1002"]}*No cross\-warehouse or cross\-store allowed.* |
| shipperAreaCode | String | Yes | Address area for pickup contact .ENUM: CN，VN，TH，PH，ID，MY |
| shipperAddressId | Number | Yes | Address id of pickup contact.It is necessary to check the Division ID of the corresponding country according to the excel sheet (it must be the last level).[📎TH\_Divisions.xlsx](https://www.yuque.com/attachments/yuque/0/2024/xlsx/22221212/1728455909495-c0dfe307-37e0-4910-bc90-edfc8655ff6d.xlsx)[📎VN\_Divisions.xlsx](https://www.yuque.com/attachments/yuque/0/2024/xlsx/22221212/1728455504368-b5d180a2-d69b-486f-8490-dac702a1a75e.xlsx)[📎MY\_Divisions.xlsx](https://www.yuque.com/attachments/yuque/0/2024/xlsx/22221212/1728455406609-f8b19c5f-5342-4f40-935c-8b84cb61a475.xlsx)[📎ph\_Divisions.xlsx](https://www.yuque.com/attachments/yuque/0/2024/xlsx/22221212/1728455408491-56c2b310-351a-4939-8ed9-cb7846511268.xlsx)[📎ID\_Divisions.xlsx](https://www.yuque.com/attachments/yuque/0/2024/xlsx/22221212/1728455409011-49ea8912-05f6-4444-a692-4ffb7aa8af56.xlsx)If you are unable to download excel using this method, please submit a ticket inquiry on the open platform to get excel from another source. |
| shipperAddressDetail | String | Yes | Detailed address for pickup. |
| shipperMobilePhone | String | Yes | Contact phone number for pickup. |
| shipperName | String | Yes | Name of the contact person for the pickup. |
| estimatedPickupDate | String | No | Appointment Pickup Date {yyyy\-MM\-dd}, Mandatory if shipperAreaCode value is CN. |

## 4\.5\. response

| API Param Name | Param Type | Description | API Param Name |
| --- | --- | --- | --- |
| result | Object | result | result |
| data | Object\[] | data | data |
| status | String | success | status |
| error\_message | String | error msg for single purchase order | error\_message |
| pickup\_no | String | pickup number | pickup\_no |
| purchase\_order\_no | String | purchase order number | purchase\_order\_no |
| allow\_date\_range | String\[] | Range of allowable collection dates | The format is {yyyy\-MM\-dd} |
| success | Boolean | true |  |
| error\_message | String | error msg |  |
| error\_code | String | error code |  |

# 5\. Print PO and product barcodes

## 5\.1\. path

[/jit/purchase\_order/print](https://open.lazada.com/apps/doc/api?path=/jit/purchase_order/print)

## 5\.2\. request

| **Name** | **Type** | **Required or not** | **Description** |
| --- | --- | --- | --- |
| pdf\_size | String | Yes | pdf style.{A4/6030/100150} |
| purchase\_order\_no\_list | String\[] | Yes | List of purchase order numbers, max 20\.{\["POJ1001","POJ1002"]} |
| print\_order | Boolean | Yes | Whether or not to print the PO.{true/false} |
| print\_barcode | String | Yes | Whether to print the product barcode.{true/false} |

## 5\.3\. response

| result |  |  | Object |  |
| --- | --- | --- | --- | --- |
|  | data |  | Object |  |
|  |  | file | String | Pdf file download path. {file download url has an expiration time, after the expiration of the need to re\-call the generated file url} |
|  | success |  | Boolean | is success |
|  | error\_message |  | String | errror msg |
|  | error\_code |  | String | error code |

## 5\.4\. demo

### 5\.4\.1\. Normal Situation

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": { "file": "https://ascp\-choice.oss\-accelerate.aliyuncs.com/ACHOICE\_JIT\_PO\_BARCODE\_POJ2310012009218603\.pdf?Expires\=1699370145\&OSSAccessKeyId\=LTAI5tPJA5BtV4TJQJ2NZ55U\&Signature\=jNEEqfT2utnB5SzjIqRR6ETKleg%3D" }, "success": true, "error\_message": null, "error\_code": null}### 5\.4\.2\. Abnormal Situation

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": null, "success": false, "error\_message": "not support print\_barcode when pdf\_size is A4\. lzd\_trace:2104c51616993664761641592ea687", "error\_code": "INVALID\_PARAM"}# 6\. PO status update push

Please read this document to learn about the Webhook standard for the Lazada Open Platform and subscribe to the messages you need in the specified locations.

[Lazada Push Mechanism](https://open.lazada.com/apps/doc/doc?nodeId=29526&docId=120168)

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误2_1728887669807__t0PI.jpg)

## 6\.1\. State list

| State Enumeration | Description |
| --- | --- |
| created | PO creation completed |
| pack\_completed | PO Packaging Completed |
| arrived | PO has arrived at the warehouse |
| closed | PO has been closed |
| cancel\_by\_trade | PO transaction canceled |
| cancel\_by\_timeout | PO timeout canceled |

## 6\.2\. demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "seller\_id":"1234567", "message\_type":35, "data":{ "orderStatus":"arrived", "purchaseOrderNo":"POJX11111111111", "sellerId":"1234567", "statusUpdateTime":"1709012975923" }, "timestamp":1603766859530, "site":"lazada\_vn"}

---

## JIT Fulfillment by Seller

<a id="jit-fulfillment-by-seller-121786"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=45697&docId=121786&lang=en_US>

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误3_1728890256123__LSVD.jpg)

  

## Step 1: Call GetOrderItems API

[GetOrderItems API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fitems%2Fget)

Before packing, you need to call GetOrderItems API to confirm the order to be packed and the corresponding order item id, and check the status of the order item id, if it is cancelled or unpaid status, then it is not allowed to be packed.

## How to distinguish which orders need to be shipped directly by sellers

After calling GetOrderItems/GetMultipleOrderItems API, check the biz\_group field in the response. When the value of this field is 70100, it means that the order item needs to be shipped according to the process of the JIT Fulfillment by Seller document.

When the value of this field is 70020/70000, it means that the order does not need to be fulfilled manually by the seller, but is shipped from the Lazada warehouse.

### API Response Demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "data": \[ { ...... "biz\_group": 70100, "product\_id": "7940514630", "voucher\_code\_platform": "", "purchase\_order\_number": "", "sku": "12312312", "order\_type": "Normal", "order\_item\_id": 1381129206425020, "shop\_id": "testnidzds", "order\_flag": "NORMAL", "is\_fbl": 1, "name": "localjit testlocaljit test", "delivery\_option\_sof": 0, "order\_id": 1381129206325020, "fulfillment\_sla": "Kirim secepat mungkin\_null\_null", "status": "pending", "paid\_price": 10471, "warehouse\_code": "RMCW\-CHOICEJIT\-ID\-001", "shipping\_type": "Own Warehouse", "created\_at": "2024\-02\-29 14:59:56 \+0700", "supply\_price": 12, "voucher\_seller\_lpi": 0, ...... } ], "code": "0", "request\_id": "210030a417104845773924739"}## Step 2: Call Pack API

[Pack API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Ffulfill%2Fpack)

After completing the first step, you need to call the Pack API to pack these order items. the payload for the packReq field is as follows:

### Request Demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "pack\_order\_list": \[ { "order\_item\_list": \[ 560694402292001 ], "order\_id": 560694402192001 } ...... ], "delivery\_type": "dropship", "shipping\_allocate\_type": "TFS"}#### Field Analysis

##### pack\_order\_list

Each objce in this field represents an order, and a maximum of 20 orders are supported to be entered.

##### order\_item\_list

For example, if there are 3 order item ids in an order, and only 2 are entered in the request, then only 2 order items will be updated to packaged status, and the other one will remain in pending status.

##### delivery\_type

The field value must be dropship, entering any other value will result in an error.

Note: The first kilometer collection type is pickup or dropship is not determined by this field.

##### shipping\_allocate\_type

The value of this field can be queried by calling the [GetShipmentProvider API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fshipment%2Fproviders%2Fget), but in the normal case the local store is always of type TFS.

### Response Demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "result": { "data": { "pack\_order\_list": \[ { "order\_item\_list": \[ { "order\_item\_id": 711433089764242, "msg": "success", "item\_err\_code": "0", "tracking\_number": "LEXDO0069388114", "shipment\_provider": "LEX TH", "package\_id": "FP094612143977611", "retry": false } ], "order\_id": 711433089564242 } ] }, "success": true }, "code": "0", "request\_id": "210140e316868082290745715"}#### Field Analysis

##### msg

If the package is successful, this field will respond with "success". If the package fails, the field will respond with a specific error message.

##### item\_err\_code

Used to determine whether the request is successful or not, when the response value is 0, it means the package is successful.

##### tracking\_number

Package tracking number, generated by Lazada, is not customizable.

##### package\_id

Parameters to be used when the package needs to be updated to Ready To Ship status or repacked.

## Step 3: Call PrintAWB API

[PrintAWB API](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fdocument%2Fget)

After the order is successfully updated to packed status, you can call the PrintAWB API to print the AWB shipping label for the package.

### Request Demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "doc\_type": "PDF", "packages": \[ { "package\_id": "FP038541022" }, ...... ]}#### Field Analysis

##### doc\_type

This field can set the value to PDF or HTML.

##### package\_id

Enter the package ids you need to print, up to 20 package ids are supported for one request.

Each package id should be placed in a separate object.

#### Response Demo

##### PDF Version

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "result": { "data": { "file": "PGlmcmFtZSBzcmM9Ii9vc3MvcHJveHkvd2F5YmlsbHByaW50YnVja2V0Lm9zcy1hcC1zb3V0aGVhc3QtMS5hbGl5dW5jcy5jb20vUERGLzQyODgxMmU1LTY5NmYtNDQ1Yi05Y2IyLTYwYmVkMmYyMmU5MT9FeHBpcmVzPTE2ODY4ODEwNDAmT1NTQWNjZXNzS2V5SWQ9VE1QLjNLakxTVndYV3F0dlhKaFh1REh6dmlGOWVXamlqSzFvNDVpcnhUSDhTeW5malRIdm1DQ2NRYmQzeW15ZWZtbjVyZWlybjZGUm1KQlR5ZGZLMzhmNXJKV0d0NW1Nb0wmU2lnbmF0dXJlPWlCUzhVTTF2M28yJTJGS3F6clpsWHBBczBiYU40JTNEIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7bWluLWhlaWdodDogOTkwcHg7Ij48L2lmcmFtZT4\=", "pdf\_url": "https://sellercenter.lazada.com.my/oss/proxy/waybillprintbucket.oss\-ap\-southeast\-1\.aliyuncs.com/PDF/428812e5\-696f\-445b\-9cb2\-60bed2f22e91?Expires\=1686881040\&OSSAccessKeyId\=TMP.3KjLSVwXWqtvXJhXuDHzviF9eWjijK1o45irxTH8SynfjTHvmCCcQbd3ymyefmn5reirn6FRmJBTydfK38f5rJWGt5mMoL\&Signature\=iBS8UM1v3o2%2FKqzrZlXpAs0baN4%3D", "doc\_type": "PDF" }, "success": true }, "code": "0", "request\_id": "2141276616868804407747137"}##### HTML version

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "result": { "data": { "file": "PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiIC8\+PHNjcmlwdCBzcmM9Imh0dHBzOi8vZy5hbGljZG4uY29tL2NuLWdsb2JhbC9jbi1odG1sLXByaW50LXJlbmRlci8wLjAuNS9jb21tb24uanMiPjwvc2NyaXB0PjxzY3JpcHQgZGVmZXIgc3JjPSJodHRwczovL2cuYWxpY2RuLmNvbS9jbi1nbG9iYWwvY24taHRtbC1wcmludC1yZW5kZXIvMC4wLjUvbGF5b3V0UHJpbnRSdWxlLmpzIj48L3NjcmlwdD48ZGl2IGlkPSJCTURVNG4yVlZZIiBjbGFzcz0iY24taHRtbC1ib2R5IiBzdHlsZT0iaGVpZ2h0OiAxNDhtbTsgd2lkdGg6IDEwNW1tOyBvdmVyZmxvdzpoaWRkZW47CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtmb250LXNpemU6OXB0O2NvbG9yOiAjMDAwOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDsKICAgICI\+PGRpdiBjbGFzcz0iY24taHRtbC1pbm5lciIgc3R5bGU9IiI\+PGRpdiBzdHlsZT0iCiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHBhZGRpbmc6MDsKICAgICAgICBtYXJnaW46MDsKICAgICAgICB3aWR0aDogOTdtbTsKICAgICAgICBsZWZ0OiAzLjhtbTsKICAgICAgICB0b3A6IDMuNW1tOwogICAgICAgIHpJbmRleDozO292ZXJmbG93OmhpZGRlbjsKICAgICAgICB6LWluZGV4OiAzOwogICAgICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgIzMzMzsgYm94LXNpemluZzogYm9yZGVyLWJveDsiPjx0YWJsZSBkYXRhLWJvcmRlcldpZHRoPSJ1bmRlZmluZWQiIHN0eWxlPSIKICAgICAgICB3aWR0aDoxMDAlOyBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym94LXNpemluZzogYm9yZGVyLWJveDsiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCI\+PHRyIHN0eWxlPSJwYWRkaW5nOjA7bWFyZ2luOjA7cGFnZS1icmVhay1pbnNpZGU6YXZvaWQ7Ij48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO3dpZHRoOjI0LjA4bW07aGVpZ2h0OjE1Ljg3bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDE1Ljg3bW07d2lkdGg6IDI0LjA4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO3dpZHRoOjI0LjA4bW07aGVpZ2h0OjE1Ljg3bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDE1Ljg3bW07d2lkdGg6IDI0LjA4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO3dpZHRoOjI0LjA4bW07aGVpZ2h0OjE1Ljg3bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDE1Ljg3bW07d2lkdGg6IDI0LjA4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO3dpZHRoOjI0LjA4bW07aGVpZ2h0OjE1Ljg3bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDE1Ljg3bW07d2lkdGg6IDI0LjA4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48L3RyPiA8dHIgc3R5bGU9InBhZGRpbmc6MDttYXJnaW46MDtwYWdlLWJyZWFrLWluc2lkZTphdm9pZDsiPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjIyLjc1bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgY29sc3Bhbj0iNCI\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj48ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHRvcDowOyB3aWR0aDoxMDAlOyBib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImhlaWdodDogMjIuNzVtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjwvdHI\+IDx0ciBzdHlsZT0icGFkZGluZzowO21hcmdpbjowO3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyI\+PHRkIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luOjA7IHBhZGRpbmc6MDtoZWlnaHQ6MjAuMTFtbTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MDsgIiBjb2xzcGFuPSIzIj4KICAgICAgICAgICAgPGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGhlaWdodDoxMDAlOyBib3JkZXItbGVmdDoxcHggc29saWQgIzMzMzsiPjwvZGl2PjxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyB0b3A6MDsgdG9wOjA7IHdpZHRoOjEwMCU7IGJvcmRlci10b3A6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj4KICAgICAgICAgICAgPGRpdiBzdHlsZT0iaGVpZ2h0OiAyMC4xMW1tOyBvdmVyZmxvdzpoaWRkZW47ICI\+CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgPC9kaXY\+CiAgICAgICAgICAgIDwvdGQ\+PHRkIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luOjA7IHBhZGRpbmc6MDtoZWlnaHQ6MjAuMTFtbTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MDsgIiA\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj48ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHRvcDowOyB3aWR0aDoxMDAlOyBib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImhlaWdodDogMjAuMTFtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjwvdHI\+IDx0ciBzdHlsZT0icGFkZGluZzowO21hcmdpbjowO3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyI\+PHRkIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luOjA7IHBhZGRpbmc6MDtoZWlnaHQ6NS4wM21tOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlcjowOyAiIGNvbHNwYW49IjMiPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDUuMDNtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjEwLjMybW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMCAhaW1wb3J0YW50OyAiIHJvd3NwYW49IjIiPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDEwLjMybW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48L3RyPiA8dHIgc3R5bGU9InBhZGRpbmc6MDttYXJnaW46MDtwYWdlLWJyZWFrLWluc2lkZTphdm9pZDsiPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjUuMjltbTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MDsgIiBjb2xzcGFuPSIzIj4KICAgICAgICAgICAgPGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGhlaWdodDoxMDAlOyBib3JkZXItbGVmdDoxcHggc29saWQgIzMzMzsiPjwvZGl2PjxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyB0b3A6MDsgdG9wOjA7IHdpZHRoOjEwMCU7IGJvcmRlci10b3A6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj4KICAgICAgICAgICAgPGRpdiBzdHlsZT0iaGVpZ2h0OiA1LjI5bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO2hlaWdodDo1LjI5bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7ICIgPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDUuMjltbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjwvdHI\+IDx0ciBzdHlsZT0icGFkZGluZzowO21hcmdpbjowO3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyI\+PHRkIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luOjA7IHBhZGRpbmc6MDtoZWlnaHQ6NS4wM21tOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlcjowOyAiIGNvbHNwYW49IjMiPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDUuMDNtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjUuMDNtbTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXI6MDsgIiA\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj48ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHRvcDowOyB3aWR0aDoxMDAlOyBib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImhlaWdodDogNS4wM21tOyBvdmVyZmxvdzpoaWRkZW47ICI\+CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgPC9kaXY\+CiAgICAgICAgICAgIDwvdGQ\+PC90cj4gPHRyIHN0eWxlPSJwYWRkaW5nOjA7bWFyZ2luOjA7cGFnZS1icmVhay1pbnNpZGU6YXZvaWQ7Ij48dGQgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyBtYXJnaW46MDsgcGFkZGluZzowO2hlaWdodDo2NS44OG1tOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlcjowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDsgIiA\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBoZWlnaHQ6MTAwJTsgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMzMzM7Ij48L2Rpdj48ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHRvcDowOyB3aWR0aDoxMDAlOyBib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+CiAgICAgICAgICAgIDxkaXYgc3R5bGU9ImhlaWdodDogNjUuODhtbTsgb3ZlcmZsb3c6aGlkZGVuOyAiPgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L3RkPjx0ZCBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7IG1hcmdpbjowOyBwYWRkaW5nOjA7aGVpZ2h0OjY1Ljg4bW07IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMCAhaW1wb3J0YW50OyAiIGNvbHNwYW49IjMiPgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMzMzOyI\+PC9kaXY\+PGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyB0b3A6MDsgd2lkdGg6MTAwJTsgYm9yZGVyLXRvcDoxcHggc29saWQgIzMzMzsiPjwvZGl2PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDY1Ljg4bW07IG92ZXJmbG93OmhpZGRlbjsgIj4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC90ZD48L3RyPiA8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAyLjVtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo0OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAzbW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNDsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDozMS42NDE0Mjg1NzE0Mjg1N21tOyBoZWlnaHQ6Mi41bW07IHRvcDowLjVtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMi41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMjcuNjFtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA1OwogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgIHdpZHRoOjMxLjY0MTQyODU3MTQyODU3bW07IGhlaWdodDoyLjVtbTsgdG9wOjAuNW1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAyLjVtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo2OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1Mi4ybW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNjsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDozMS42NDE0Mjg1NzE0Mjg1N21tOyBoZWlnaHQ6Mi41bW07IHRvcDowLjVtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMi41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NzsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzYuOG1tOwogICAgZm9udC1zaXplOjlwdDsKICAgIHotaW5kZXg6IDc7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzEuNjQxNDI4NTcxNDI4NTdtbTsgaGVpZ2h0OjIuNW1tOyB0b3A6MC41bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGltZyBzdHlsZT0iCiAgICAgICAgCiAgICAKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIGxlZnQ6IDQuNzVtbTsKICAgIHRvcDogN21tOyAKICAgIHpJbmRleDo4OwogICAgei1pbmRleDogODsKICAgIHdpZHRoOiAyMm1tOwogICAgaGVpZ2h0OiAxMW1tOwogICAgIiBzcmM9Imh0dHBzOi8vY2RuLWNsb3VkcHJpbnQuY2Fpbmlhby5jb20vd2F5YmlsbC1wcmludC9jbG91ZHByaW50LWltZ3MvM2UyOWE3YzVhYTRiNDBlOGIyMDhlOGQ3M2ZhNmYzNzJfZ2xvYmFsLWxjZi13YXliaWxsdGVtcGxhdGUucG5nIi8\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDMuMDJtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo5OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1LjIybW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogOTsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDoyNS41NzI4NTcxNDI4NTcxNDJtbTsgaGVpZ2h0OjMuMDJtbTsgdG9wOjQuNTVtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj5Ecm9wLW9mZjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAzLjAybW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6MTA7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDI5LjE4bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogMTA7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MjguNzI3NzQ4MjU2MTI5NDY2bW07IGhlaWdodDozLjAybW07IHRvcDo0LjU1bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjY5MjM2MTk1NjkwMTkzNjgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+REVMSVZFUlkgQlk8L2Rpdj48L2Rpdj48aW1nIHN0eWxlPSIKICAgICAgICAKICAgIAogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgbGVmdDogMjltbTsKICAgIHRvcDogN21tOyAKICAgIHpJbmRleDoxMTsKICAgIHotaW5kZXg6IDExOwogICAgd2lkdGg6IDIybW07CiAgICBoZWlnaHQ6IDExbW07CiAgICAiIHNyYz0iaHR0cHM6Ly9jZG4tY2xvdWRwcmludC5jYWluaWFvLmNvbS93YXliaWxsLXByaW50L2Nsb3VkcHJpbnQtaW1ncy84NGJkNTllOTNlMjA0Y2Y5YjA4YWU2NWVmMjVhOGFiNV9nbG9iYWwtbGNmLXdheWJpbGx0ZW1wbGF0ZSIvPjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAzLjAybW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6MTM7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDU0LjdtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAxMzsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIHRleHQtYWxpZ246Y2VudGVyOwogICAgCiAgICAKICAgICB3aWR0aDoyNS41NzI4NTcxNDI4NTcxNDJtbTsgaGVpZ2h0OjMuMDJtbTsgdG9wOjEzLjM0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+U1RBTkRBUkQ8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPSIKICAgIAogICAgCiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBsZWZ0OiA5LjE3bW07CiAgICB0b3A6IDI0LjQ3bW07IAogICAgd2lkdGg6IDg3LjY4bW07CiAgICBoZWlnaHQ6IDE3LjVtbTsKICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOwogICAgIiAKICAgIGRhdGEtd2lkdGg9Ijg3LjY4IgogICAgZGF0YS1oZWlnaHQ9IjE3LjUiCiAgICBkYXRhLWxlZnQ9IjkuMTciCiAgICBkYXRhLXRvcD0iMjQuNDciCiAgICBkYXRhLXR5cGVDb2RlPSJjb2RlMTI4IgogICAgZGF0YS10cmFuc2Zvcm09IjAiCiAgICBkYXRhLXRleHQ9dHJ1ZQogICAgZGF0YS12YWx1ZT0iNjQ5MDU0Mjk2MzY3IgogICAgY2xhc3M9ImNuLXByaW50LWltZ2JhcmNvZGUiPjxpbWcgc3JjPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lqOCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNjdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0d0x5OUZUaWNLSUNBZ0lDQWdJQ0FnSUNkb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5VVVpOHlNREF4TDFKRlF5MVRWa2N0TWpBd01UQTVNRFF2UkZSRUwzTjJaekV3TG1SMFpDYytDanh6ZG1jZ1ptbHNiQzF2Y0dGamFYUjVQU0l4SWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnWTI5c2IzSXRjbVZ1WkdWeWFXNW5QU0poZFhSdklpQmpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVQU0poZFhSdklpQjBaWGgwTFhKbGJtUmxjbWx1WnowaVlYVjBieUlnYzNSeWIydGxQU0ppYkdGamF5SWdjM1J5YjJ0bExXeHBibVZqWVhBOUluTnhkV0Z5WlNJZ2QybGtkR2c5SWpnM0lpQnpkSEp2YTJVdGJXbDBaWEpzYVcxcGREMGlNVEFpSUhOb1lYQmxMWEpsYm1SbGNtbHVaejBpWVhWMGJ5SWdjM1J5YjJ0bExXOXdZV05wZEhrOUlqRWlJR1pwYkd3OUltSnNZV05ySWlCemRISnZhMlV0WkdGemFHRnljbUY1UFNKdWIyNWxJaUJtYjI1MExYZGxhV2RvZEQwaWJtOXliV0ZzSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdobGFXZG9kRDBpTVRjaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1ptOXVkQzFtWVcxcGJIazlJaWRFYVdGc2IyY25JaUJtYjI1MExYTjBlV3hsUFNKdWIzSnRZV3dpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpYldsMFpYSWlJR1p2Ym5RdGMybDZaVDBpTVRKd2VDSWdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTlJakFpSUdsdFlXZGxMWEpsYm1SbGNtbHVaejBpWVhWMGJ5SUtQandoTFMxSFpXNWxjbUYwWldRZ1lua2dkR2hsSUVKaGRHbHJJRWR5WVhCb2FXTnpNa1FnVTFaSElFZGxibVZ5WVhSdmNpMHRQanhrWldaeklHbGtQU0puWlc1bGNtbGpSR1ZtY3lJS0lDQXZQanhuQ2lBZ1BqeGtaV1p6SUdsa1BTSmtaV1p6TVNJS0lDQWdJRDQ4WTJ4cGNGQmhkR2dnWTJ4cGNGQmhkR2hWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaUlHbGtQU0pqYkdsd1VHRjBhREVpQ2lBZ0lDQWdJRDQ4Y0dGMGFDQmtQU0pOTUNBd0lFdzROeUF3SUV3NE55QXhOeUJNTUNBeE55Qk1NQ0F3SUZvaUNpQWdJQ0FnSUM4K1BDOWpiR2x3VUdGMGFBb2dJQ0FnUGp3dlpHVm1jd29nSUNBZ1BqeG5JR1pwYkd3OUluZG9hWFJsSWlCemRISnZhMlU5SW5kb2FYUmxJZ29nSUNBZ1BqeHlaV04wSUhnOUlqQWlJSGRwWkhSb1BTSTROeUlnYUdWcFoyaDBQU0l4TnlJZ2VUMGlNQ0lnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnTHo0OEwyY0tJQ0FnSUQ0OFp5Qm1hV3hzUFNKM2FHbDBaU0lnYzNSeWIydGxQU0ozYUdsMFpTSUtJQ0FnSUQ0OGNtVmpkQ0I0UFNJd0lpQjNhV1IwYUQwaU9EY2lJR2hsYVdkb2REMGlNVGNpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1DSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNUzQzTWlJZ2FHVnBaMmgwUFNJeE55SWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpJdU5UZ2lJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakF1T0RZaUlHaGxhV2RvZEQwaU1UY2lJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJMUxqRTNJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l5TGpVNElpQm9aV2xuYUhROUlqRTNJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU9TNDBPQ0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTUM0NE5pSWdhR1ZwWjJoMFBTSXhOeUlnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqRXhMaklpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9EWWlJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSXhOUzQxSWlCNVBTSXdJaUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0ZCaGRHZ3hLU0lnWm1sc2JEMGlZbXhoWTJzaUlIZHBaSFJvUFNJeExqY3lJaUJvWldsbmFIUTlJakUzSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlNVGd1T1RVaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqRXVOeklpSUdobGFXZG9kRDBpTVRjaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0l5TVM0MU15SWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNeTQwTlNJZ2FHVnBaMmgwUFNJeE55SWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpJMUxqZzBJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l4TGpjeUlpQm9aV2xuYUhROUlqRTNJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1qZ3VORE1pSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpJdU5UZ2lJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSXpNUzQ0TnlJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1DNDROaUlnYUdWcFoyaDBQU0l4TnlJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJak16TGpVNUlpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXhMamN5SWlCb1pXbG5hSFE5SWpFM0lpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpTXpjdU9TSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNaTQxT0NJZ2FHVnBaMmgwUFNJeE55SWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpReUxqSXhJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l4TGpjeUlpQm9aV2xuYUhROUlqRTNJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU5EVXVOalVpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9EWWlJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSTBOeTR6T0NJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1DNDROaUlnYUdWcFoyaDBQU0l4TnlJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJalE1TGpFaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqQXVPRFlpSUdobGFXZG9kRDBpTVRjaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0kxTVM0Mk9DSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNUzQzTWlJZ2FHVnBaMmgwUFNJeE55SWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpVMkxqZzFJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpnMklpQm9aV2xuYUhROUlqRTNJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU5qRXVNVFlpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9EWWlJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSTJNaTQ0T0NJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1TNDNNaUlnYUdWcFoyaDBQU0l4TnlJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJalkyTGpNeklpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMamcySWlCb1pXbG5hSFE5SWpFM0lpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpTmprdU56Y2lJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakF1T0RZaUlHaGxhV2RvZEQwaU1UY2lJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJM01pNHpOaUlnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTVM0M01pSWdhR1ZwWjJoMFBTSXhOeUlnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqYzFMamdpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpFdU56SWlJR2hsYVdkb2REMGlNVGNpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSTRNQzR4TVNJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1pNDFPQ0lnYUdWcFoyaDBQU0l4TnlJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJamd6TGpVMUlpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMamcySWlCb1pXbG5hSFE5SWpFM0lpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpT0RVdU1qZ2lJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakV1TnpJaUlHaGxhV2RvZEQwaU1UY2lJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQzgrUEM5bkNpQWdQand2WndvK1BDOXpkbWNLUGdvPSIgc3R5bGU9IndpZHRoOjg3LjY4bW07aGVpZ2h0OjE3LjVtbTsiLz48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249Im1pZGRsZSIgc3R5bGU9ImhlaWdodDogMTYuOTFtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDoyMTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzdtbTsKICAgIGZvbnQtc2l6ZToxM3B0OwogICAgei1pbmRleDogMjE7CiAgICAKICAgIGZvbnQtd2VpZ2h0OmJvbGQ7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIHRleHQtYWxpZ246Y2VudGVyOwogICAgCiAgICAKICAgIGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7IHRvcDo0Mi44Nm1tO3dpZHRoOiAyM21tO2xpbmUtaGVpZ2h0OjEzcHQ7Ij48ZGl2PktVTC1LVUwzMTAtMDI3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDVtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDoyMjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNC45NzAwMDAwMDAwMDAwMDFtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAyMjsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB0b3A6NDIuMzRtbTt3aWR0aDogNzEuMDRtbTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PkN1c3RvbWVyOiBOaXZlazwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAxMS4wOG1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjI3OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1LjIzbW07CiAgICBmb250LXNpemU6MTBwdDsKICAgIHotaW5kZXg6IDI3OwogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgIHRvcDo1MC4wMW1tO3dpZHRoOiA3MS4wNG1tO2xpbmUtaGVpZ2h0OjEwcHQ7Ij48ZGl2Pkh1YSBhbGFsYWxhbGEgZGZkZGZkLCBXcCBLdWFsYSBMdW1wdXIsIEt1YWxhIEx1bXB1ciwgNTAyMDA8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249Im1pZGRsZSIgc3R5bGU9ImhlaWdodDogNC40N21tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjI5OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1LjVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAyOTsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgIGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyB3aWR0aDo2NC4yODU3MTQyODU3MTQyOG1tOyBoZWlnaHQ6NC40N21tOyB0b3A6NjIuNzFtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj5TZWxsZXI6IFBCR19TdG9yZSA4ODwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiA0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6MzE7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDUuMjRtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAzMTsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDozNy42NDk3MDExOTQwMzM0bW07IGhlaWdodDo0bW07IHRvcDo2OG1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43OTY4MTkwNzI4ODk1OTU3KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PlBhY2thZ2UgV2VpZ2h0OiAxIGtnPC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDozMjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMzVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAzMjsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIHRleHQtYWxpZ246cmlnaHQ7CiAgICAKICAgIAogICAgIHdpZHRoOjUwLjE5OTYwMTU5MjA0NDUzbW07IGhlaWdodDo0bW07IHRvcDo2OG1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43OTY4MTkwNzI4ODk1OTU3KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2Pk9yZGVyIGNyZWF0aW9uIHRpbWU6IDMxIE1heSAyMDIzPC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDNtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDozNDsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNS41bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogMzQ7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzUuODY0MzI3NjgwODU4NTk0bW07IGhlaWdodDozbW07IHRvcDo3NG1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC45NzU5MDAwNzI5NDg1MzMyKTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2Pk8vTjogMzgwODIyNzAyNjQzNDc1PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDNtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDozNTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNDAuMzFtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiAzNTsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDoyNi4wODQ0NzgxNDMxNDA5ODhtbTsgaGVpZ2h0OjNtbTsgdG9wOjc0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjY5MDA2NTU1OTM0MjM1NDMpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+Tm8uIEl0ZW0gMTwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iCiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6MzY7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDYwbW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogMzY7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICB0ZXh0LWFsaWduOnJpZ2h0OwogICAgCiAgICAKICAgICB0b3A6NzRtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7d2lkdGg6MTkuMjg1NzE0Mjg1NzE0Mjg1bW07bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogNC41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6Mzc7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc3LjA2bW07CiAgICBmb250LXNpemU6MTJwdDsKICAgIHotaW5kZXg6IDM3OwogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsIEJsYWNrOwogICAgdGV4dC1hbGlnbjpjZW50ZXI7CiAgICAKICAgIAogICAgIHRvcDo3M21tO3dpZHRoOiAyM21tO2xpbmUtaGVpZ2h0OjEycHQ7Ij48ZGl2Pk5vbi1DT0Q8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPSIKICAgIAogICAgCiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBsZWZ0OiAtNS4wM21tOwogICAgdG9wOiAxMDMuODhtbTsgCiAgICB3aWR0aDogNDkuMjZtbTsKICAgIGhlaWdodDogMTUuNDhtbTsKICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsKICAgICIgCiAgICBkYXRhLXdpZHRoPSI0OS4yNiIKICAgIGRhdGEtaGVpZ2h0PSIxNS40OCIKICAgIGRhdGEtbGVmdD0iLTUuMDMiCiAgICBkYXRhLXRvcD0iMTAzLjg4IgogICAgZGF0YS10eXBlQ29kZT0iY29kZTEyOCIKICAgIGRhdGEtdHJhbnNmb3JtPSI5MCIKICAgIGRhdGEtdGV4dD10cnVlCiAgICBkYXRhLXZhbHVlPSIzLUpOVC0wMCIKICAgIGNsYXNzPSJjbi1wcmludC1pbWdiYXJjb2RlIj48aW1nIHNyYz0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJajgrQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDY3RMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHdMeTlGVGljS0lDQWdJQ0FnSUNBZ0lDZG9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OVVVaTh5TURBeEwxSkZReTFUVmtjdE1qQXdNVEE1TURRdlJGUkVMM04yWnpFd0xtUjBaQ2MrQ2p4emRtY2dabWxzYkMxdmNHRmphWFI1UFNJeElpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ1kyOXNiM0l0Y21WdVpHVnlhVzVuUFNKaGRYUnZJaUJqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1UFNKaGRYUnZJaUIwWlhoMExYSmxibVJsY21sdVp6MGlZWFYwYnlJZ2MzUnliMnRsUFNKaWJHRmpheUlnYzNSeWIydGxMV3hwYm1WallYQTlJbk54ZFdGeVpTSWdkMmxrZEdnOUlqUTVJaUJ6ZEhKdmEyVXRiV2wwWlhKc2FXMXBkRDBpTVRBaUlITm9ZWEJsTFhKbGJtUmxjbWx1WnowaVlYVjBieUlnYzNSeWIydGxMVzl3WVdOcGRIazlJakVpSUdacGJHdzlJbUpzWVdOcklpQnpkSEp2YTJVdFpHRnphR0Z5Y21GNVBTSnViMjVsSWlCbWIyNTBMWGRsYVdkb2REMGlibTl5YldGc0lpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHaGxhV2RvZEQwaU1UVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdabTl1ZEMxbVlXMXBiSGs5SWlkRWFXRnNiMmNuSWlCbWIyNTBMWE4wZVd4bFBTSnViM0p0WVd3aUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWJXbDBaWElpSUdadmJuUXRjMmw2WlQwaU1USndlQ0lnYzNSeWIydGxMV1JoYzJodlptWnpaWFE5SWpBaUlHbHRZV2RsTFhKbGJtUmxjbWx1WnowaVlYVjBieUlLUGp3aExTMUhaVzVsY21GMFpXUWdZbmtnZEdobElFSmhkR2xySUVkeVlYQm9hV056TWtRZ1UxWkhJRWRsYm1WeVlYUnZjaTB0UGp4a1pXWnpJR2xrUFNKblpXNWxjbWxqUkdWbWN5SUtJQ0F2UGp4bkNpQWdQanhrWldaeklHbGtQU0prWldaek1TSUtJQ0FnSUQ0OFkyeHBjRkJoZEdnZ1kyeHBjRkJoZEdoVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlJR2xrUFNKamJHbHdVR0YwYURFaUNpQWdJQ0FnSUQ0OGNHRjBhQ0JrUFNKTk1DQXdJRXcwT1NBd0lFdzBPU0F4TlNCTU1DQXhOU0JNTUNBd0lGb2lDaUFnSUNBZ0lDOCtQQzlqYkdsd1VHRjBhQW9nSUNBZ1Bqd3ZaR1ZtY3dvZ0lDQWdQanhuSUdacGJHdzlJbmRvYVhSbElpQnpkSEp2YTJVOUluZG9hWFJsSWdvZ0lDQWdQanh5WldOMElIZzlJakFpSUhkcFpIUm9QU0kwT1NJZ2FHVnBaMmgwUFNJeE5TSWdlVDBpTUNJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0x6NDhMMmNLSUNBZ0lENDhaeUJtYVd4c1BTSjNhR2wwWlNJZ2MzUnliMnRsUFNKM2FHbDBaU0lLSUNBZ0lENDhjbVZqZENCNFBTSXdJaUIzYVdSMGFEMGlORGtpSUdobGFXZG9kRDBpTVRVaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlNQ0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTUM0NElpQm9aV2xuYUhROUlqRTFJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1TNHlJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJeUxqTTVJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJMExqTTRJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpnaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJMUxqazRJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJMkxqYzNJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l4TGpJaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJNExqYzJJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJNUxqazJJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpnaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJeE1TNHhOU0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTVM0eUlpQm9aV2xuYUhROUlqRTFJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1UTXVNVFVpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU5DSWdhR1ZwWjJoMFBTSXhOU0lnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqRXpMamswSWlCNVBTSXdJaUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0ZCaGRHZ3hLU0lnWm1sc2JEMGlZbXhoWTJzaUlIZHBaSFJvUFNJd0xqZ2lJR2hsYVdkb2REMGlNVFVpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSXhOUzR4TkNJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1TNHlJaUJvWldsbmFIUTlJakUxSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlNVGN1TlRNaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqQXVOQ0lnYUdWcFoyaDBQU0l4TlNJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJakU0TGpNeklpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXhMaklpSUdobGFXZG9kRDBpTVRVaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0l5TUM0M01pSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNQzQ0SWlCb1pXbG5hSFE5SWpFMUlpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpTWpFdU9URWlJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakF1T0NJZ2FHVnBaMmgwUFNJeE5TSWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpJekxqRXhJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l4TGpJaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJeU5TNDFJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpRaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJeU5pNHlPU0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTUM0MElpQm9aV2xuYUhROUlqRTFJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU1qY3VORGtpSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9DSWdhR1ZwWjJoMFBTSXhOU0lnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqSTRMalk0SWlCNVBTSXdJaUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0ZCaGRHZ3hLU0lnWm1sc2JEMGlZbXhoWTJzaUlIZHBaSFJvUFNJeExqSWlJR2hsYVdkb2REMGlNVFVpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSXpNQzQyTnlJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1DNDBJaUJvWldsbmFIUTlJakUxSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlNekV1T0RjaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqRXVNaUlnYUdWcFoyaDBQU0l4TlNJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJak16TGpRMklpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMamdpSUdobGFXZG9kRDBpTVRVaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0l6TlM0d05pSWdlVDBpTUNJZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVNraUlHWnBiR3c5SW1Kc1lXTnJJaUIzYVdSMGFEMGlNQzQwSWlCb1pXbG5hSFE5SWpFMUlpQnpkSEp2YTJVOUltNXZibVVpQ2lBZ0lDQWdJQzgrUEhKbFkzUWdlRDBpTXpZdU1qVWlJSGs5SWpBaUlHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdVR0YwYURFcElpQm1hV3hzUFNKaWJHRmpheUlnZDJsa2RHZzlJakV1TWlJZ2FHVnBaMmgwUFNJeE5TSWdjM1J5YjJ0bFBTSnViMjVsSWdvZ0lDQWdJQ0F2UGp4eVpXTjBJSGc5SWpNM0xqZzFJaUI1UFNJd0lpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjRkJoZEdneEtTSWdabWxzYkQwaVlteGhZMnNpSUhkcFpIUm9QU0l3TGpnaUlHaGxhV2RvZEQwaU1UVWlJSE4wY205clpUMGlibTl1WlNJS0lDQWdJQ0FnTHo0OGNtVmpkQ0I0UFNJek9TNDBOQ0lnZVQwaU1DSWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01Ta2lJR1pwYkd3OUltSnNZV05ySWlCM2FXUjBhRDBpTUM0MElpQm9aV2xuYUhROUlqRTFJaUJ6ZEhKdmEyVTlJbTV2Ym1VaUNpQWdJQ0FnSUM4K1BISmxZM1FnZUQwaU5EQXVOak1pSUhrOUlqQWlJR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3VUdGMGFERXBJaUJtYVd4c1BTSmliR0ZqYXlJZ2QybGtkR2c5SWpBdU9DSWdhR1ZwWjJoMFBTSXhOU0lnYzNSeWIydGxQU0p1YjI1bElnb2dJQ0FnSUNBdlBqeHlaV04wSUhnOUlqUXlMall6SWlCNVBTSXdJaUJqYkdsd0xYQmhkR2c5SW5WeWJDZ2pZMnhwY0ZCaGRHZ3hLU0lnWm1sc2JEMGlZbXhoWTJzaUlIZHBaSFJvUFNJd0xqUWlJR2hsYVdkb2REMGlNVFVpSUhOMGNtOXJaVDBpYm05dVpTSUtJQ0FnSUNBZ0x6NDhjbVZqZENCNFBTSTBNeTQ0TWlJZ2VUMGlNQ0lnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NU2tpSUdacGJHdzlJbUpzWVdOcklpQjNhV1IwYUQwaU1DNDRJaUJvWldsbmFIUTlJakUxSWlCemRISnZhMlU5SW01dmJtVWlDaUFnSUNBZ0lDOCtQSEpsWTNRZ2VEMGlORFV1T0RFaUlIazlJakFpSUdOc2FYQXRjR0YwYUQwaWRYSnNLQ05qYkdsd1VHRjBhREVwSWlCbWFXeHNQU0ppYkdGamF5SWdkMmxrZEdnOUlqRXVNaUlnYUdWcFoyaDBQU0l4TlNJZ2MzUnliMnRsUFNKdWIyNWxJZ29nSUNBZ0lDQXZQanh5WldOMElIZzlJalEzTGpReElpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMalFpSUdobGFXZG9kRDBpTVRVaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDQWdMejQ4Y21WamRDQjRQU0kwT0M0eUlpQjVQU0l3SWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNGQmhkR2d4S1NJZ1ptbHNiRDBpWW14aFkyc2lJSGRwWkhSb1BTSXdMamdpSUdobGFXZG9kRDBpTVRVaUlITjBjbTlyWlQwaWJtOXVaU0lLSUNBZ0lDOCtQQzluQ2lBZ1Bqd3Zad28rUEM5emRtY0tQZ289IiBzdHlsZT0id2lkdGg6NDkuMjZtbTtoZWlnaHQ6MTUuNDhtbTsiLz48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJDdXN0b20iCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDM0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NDg7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDEwMC41bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNDg7CiAgICAKICAgIAogICAgCiAgICB0ZXh0LW9yaWVudGF0aW9uOnZlcnRpY2FsOwogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgIHdyaXRpbmctbW9kZTp0Yi1ybDtkaXNwbGF5OmZsZXg7anVzdGlmeS1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6ZmxleC1zdGFydDsgd2lkdGg6My4yMTQyODU3MTQyODU3MTQ0bW07IGhlaWdodDozNG1tOyB0b3A6My41OW1tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IkN1c3RvbSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMzRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo0OTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTAwLjVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA0OTsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB3aWR0aDozLjIxNDI4NTcxNDI4NTcxNDRtbTsgaGVpZ2h0OjM0bW07IHRvcDozNi45M21tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IkN1c3RvbSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMzRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo1MTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTAwLjVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA1MTsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB3aWR0aDozLjIxNDI4NTcxNDI4NTcxNDRtbTsgaGVpZ2h0OjM0bW07IHRvcDo3My4xN21tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IkN1c3RvbSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMzRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo1MzsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTAwLjVtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA1MzsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB3aWR0aDozLjIxNDI4NTcxNDI4NTcxNDRtbTsgaGVpZ2h0OjM0bW07IHRvcDoxMTEuNTRtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMi41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NTQ7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDNtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA1NDsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB3aWR0aDozMS42NDE0Mjg1NzE0Mjg1N21tOyBoZWlnaHQ6Mi41bW07IHRvcDoxNDMuOTRtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJWYXJpYWJsZSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMi41bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NTY7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDI3LjYxbW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNTY7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzEuNjQxNDI4NTcxNDI4NTdtbTsgaGVpZ2h0OjIuNW1tOyB0b3A6MTQzLjk0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDIuNW1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjU3OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA1Mi4ybW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNTc7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzEuNjQxNDI4NTcxNDI4NTdtbTsgaGVpZ2h0OjIuNW1tOyB0b3A6MTQzLjk0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDIuNW1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjU4OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3Ni44bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNTg7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICAgd2lkdGg6MzEuNjQxNDI4NTcxNDI4NTdtbTsgaGVpZ2h0OjIuNW1tOyB0b3A6MTQzLjk0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iQ3VzdG9tIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAzNG1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjU5OwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwLjg5bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNTk7CiAgICAKICAgIAogICAgCiAgICB0ZXh0LW9yaWVudGF0aW9uOnZlcnRpY2FsOwogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgIHdyaXRpbmctbW9kZTp0Yi1ybDtkaXNwbGF5OmZsZXg7anVzdGlmeS1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6ZmxleC1zdGFydDsgd2lkdGg6My4yMTQyODU3MTQyODU3MTQ0bW07IGhlaWdodDozNG1tOyB0b3A6MTExLjU0bW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjc3Nzc3Nzc3Nzc3Nzc3NzgpO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+NjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iQ3VzdG9tIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiAzNG1tOwogICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsOwogICAgekluZGV4OjYwOwogICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwLjg5bW07CiAgICBmb250LXNpemU6OXB0OwogICAgei1pbmRleDogNjA7CiAgICAKICAgIAogICAgCiAgICB0ZXh0LW9yaWVudGF0aW9uOnZlcnRpY2FsOwogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgIHdyaXRpbmctbW9kZTp0Yi1ybDtkaXNwbGF5OmZsZXg7anVzdGlmeS1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6ZmxleC1zdGFydDsgd2lkdGg6My4yMTQyODU3MTQyODU3MTQ0bW07IGhlaWdodDozNG1tOyB0b3A6NzMuMTdtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJDdXN0b20iCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDM0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NjE7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAuODltbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA2MTsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgCiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB3aWR0aDozLjIxNDI4NTcxNDI4NTcxNDRtbTsgaGVpZ2h0OjM0bW07IHRvcDozNi45M21tOyB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybTogc2NhbGUoMC43Nzc3Nzc3Nzc3Nzc3Nzc4KTtsaW5lLWhlaWdodDo5cHQ7Ij48ZGl2PjY0OTA1NDI5NjM2NzwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IkN1c3RvbSIKICAgIGRhdGEtYWxpZ249InVuZGVmaW5lZCIgc3R5bGU9ImhlaWdodDogMzRtbTsKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo2MjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMC44OW1tOwogICAgZm9udC1zaXplOjlwdDsKICAgIHotaW5kZXg6IDYyOwogICAgCiAgICAKICAgIAogICAgdGV4dC1vcmllbnRhdGlvbjp2ZXJ0aWNhbDsKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAKICAgIAogICAgCiAgICB3cml0aW5nLW1vZGU6dGItcmw7ZGlzcGxheTpmbGV4O2p1c3RpZnktaXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7IHdpZHRoOjMuMjE0Mjg1NzE0Mjg1NzE0NG1tOyBoZWlnaHQ6MzRtbTsgdG9wOjMuNTltbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj42NDkwNTQyOTYzNjc8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJicm90aGVyLWRpdiAiIGRhdGEtY3VzdG9tPSJDdXN0b20iCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSJoZWlnaHQ6IDUzLjg0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NjM7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDYuOTdtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA2MzsKICAgIAogICAgCiAgICAKICAgIHRleHQtb3JpZW50YXRpb246dmVydGljYWw7CiAgICAKICAgIAogICAgCiAgICAKICAgIGZvbnQtZmFtaWx5OkFyaWFsOwogICAgdGV4dC1hbGlnbjpjZW50ZXI7CiAgICAKICAgIAogICAgd3JpdGluZy1tb2RlOnRiLXJsO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyB0b3A6ODUuODJtbTt3aWR0aDogMy4wOW1tO2xpbmUtaGVpZ2h0OjlwdDsiPjxkaXY\+UG9ydCBDb2RlOiAzLUpOVC0wMDwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImJyb3RoZXItZGl2ICIgZGF0YS1jdXN0b209IlZhcmlhYmxlIgogICAgZGF0YS1hbGlnbj0idW5kZWZpbmVkIiBzdHlsZT0iaGVpZ2h0OiA0bW07CiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7CiAgICB6SW5kZXg6NjU7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDltbTsKICAgIGZvbnQtc2l6ZToxMnB0OwogICAgei1pbmRleDogNjU7CiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICB0ZXh0LWFsaWduOmNlbnRlcjsKICAgIAogICAgCiAgICAgd2lkdGg6OTAuMTczMTY2NzQwNDQ0NDZtbTsgaGVpZ2h0OjRtbTsgdG9wOjIwbW07IHRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtOiBzY2FsZSgwLjk3NTkwMDA3Mjk0ODUzMzMpO2xpbmUtaGVpZ2h0OjEycHQ7Ij48ZGl2PlRSQUNLSU5HIE5VTUJFUjogNjQ5MDU0Mjk2MzY3PC9kaXY\+PC9kaXY\+PGRpdiBjbGFzcz0iYnJvdGhlci1kaXYgIiBkYXRhLWN1c3RvbT0iVmFyaWFibGUiCiAgICBkYXRhLWFsaWduPSJ1bmRlZmluZWQiIHN0eWxlPSIKICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDsKICAgIHpJbmRleDo2NjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNTUuNzdtbTsKICAgIGZvbnQtc2l6ZTo5cHQ7CiAgICB6LWluZGV4OiA2NjsKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICAKICAgIAogICAgCiAgICBmb250LWZhbWlseTpBcmlhbDsKICAgIAogICAgCiAgICAKICAgICB0b3A6NjIuNzFtbTsgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm06IHNjYWxlKDAuNzc3Nzc3Nzc3Nzc3Nzc3OCk7d2lkdGg6MjUuNzE0Mjg1NzE0Mjg1NzE1bW07bGluZS1oZWlnaHQ6OXB0OyI\+PGRpdj48L2Rpdj48L2Rpdj48aW1nIHN0eWxlPSIKICAgICAgICAKICAgIAogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgbGVmdDogNTMuNDRtbTsKICAgIHRvcDogNC41bW07IAogICAgekluZGV4OjY4OwogICAgei1pbmRleDogNjg7CiAgICB3aWR0aDogMjEuNjFtbTsKICAgIGhlaWdodDogNy40MW1tOwogICAgIiBzcmM9Imh0dHBzOi8vY2RuLWNsb3VkcHJpbnQuY2Fpbmlhby5jb20vd2F5YmlsbC1wcmludC9jbG91ZHByaW50LWltZ3MvZTdlMzEwMmI3OWNjNDUyZWJlNjdlNzA0ODI1NzIwYTFfZ2xvYmFsLWxjZi13YXliaWxsdGVtcGxhdGUucG5nIi8\+PGltZyBzdHlsZT0iCiAgICAgICAgCiAgICAKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIGxlZnQ6IDc2LjNtbTsKICAgIHRvcDogNjIuNG1tOyAKICAgIHpJbmRleDo2OTsKICAgIHotaW5kZXg6IDY5OwogICAgd2lkdGg6IDI0LjRtbTsKICAgIGhlaWdodDogMTAuNW1tOwogICAgIiBzcmM9Imh0dHBzOi8vY2RuLWNsb3VkcHJpbnQuY2Fpbmlhby5jb20vd2F5YmlsbC1wcmludC9jbG91ZHByaW50LWltZ3MvZGYyN2UyNDVjYmI4NGRhZGJlODBkYmE5YjVkMTNiMzVfZ2xvYmFsLWxjZi13YXliaWxsdGVtcGxhdGUuanBnIi8\+PC9kaXY\+PC9kaXY\+", "doc\_type": "HTML" }, "success": true }, "code": "0", "request\_id": "2102ebef16868804790416770"}#### Field Analysis

##### file

This field will respond to strings that are encrypted with base64, and you will need to decrypt them using base64\. After decryption you will get the HTML text. For the PDF version, you need to access the src link in the text tag to get the PDF file. For the HTML version, you will need to render the fetched HTML text to show the seller the full AWB shipping label.

Note: The PDF link is valid for ten minutes, so please download it as soon as possible.

##### pdf\_url

This field will only respond if the value of the request parameter doc\_type is set to PDF. You can access the link directly to get the PDF file.

Note: The PDF link is valid for ten minutes, so please download it as soon as possible.

## Step 4: Call ReadyToShip API

After the order is updated to packed status, you can call ReadyToShip API to update the order to Ready to ship status. When updated to this status, for pick up type of parcels, the system will automatically notify the courier to pick up the parcels, for dropoff type of parcels, the seller needs to deliver the parcels to the specified location within SLA time.

### Request Demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "packages": \[ { "package\_id": "FP038524014" }， ...... ]}#### Response Demo

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "result": { "error\_message": "error msg", "data": \[ { "error\_message": "error msg", "pickup\_no": "FO1001", "allow\_date\_range": \[], "purchase\_order\_no": "FO1001", "status": "success" } ], "success": "true", "error\_code": "error code" }, "code": "0", "request\_id": "0ba2887315178178017221014"}

---

