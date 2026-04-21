# Push Mechanism(WebHook) Application

## 消息推送（Webhook）

<a id="webhook-120164"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29524&docId=120164&lang=en_US>

## LPM简介：

Lazada Push Mechanism 是Lazada开放平台向服务商(ISV)/卖家提供订单消息状态推送服务。目前Lazada的订单同步方式采用ISV轮询的机制，存在被限流，低效率浪费资源等问题。配置Lazada Push Mechanism后，订单状态变更会以Http报文的形式推送到ISV设置的回调URL上。

 

**说人话就是，以前是App不停的问开放平台有没有订单，有没有订单，然后有的话就给你特定时间的所有单号。 LPM接入后改成 ：App坐着等待，当有你的订单(订单状态有更新)的时候，开放平台会把你的订单送到你的回调地址上面。**

 

 

 

看到这里你有可能有的问题：

1. 什么情况下出发推送，推送的状态有哪些？

Lazada推送的状态可以参考Lazada Seller Center 的订单ASC状态。一般比较关心的状态有 ： shipped

delivered, pending, ready\_to\_ship, unpaid, canceled。 当状态有改变的时候就会推送至少一条消息。

1. 推送是实时的吗？

是的。

1. 在XXXXX的情况下会推送吗？

除了订单正常的正向推进和逆向推进之外，不要试图使用此消息捕捉其他信息 ： 比如订单信息变化，物流转包等。

如果你还有其他的问题的话，我们不妨带着问题往下看，文末的常见一定会有。

 

 

## 怎么快速接入：

这部分内容包括以下内容：

1. 准备一个Https回调接口，并了解报文示例内容，签名鉴权，以及推送成功确认与失败补偿机制。
2. 在app console 上测试回调接口，并提交接入。

### 1\. 准备一个回调接口来接消息：**准备一个Https回调URL，例如：https://www.example.com**

这里你可能有的问题是：

1. 必须是Https吗？ 答：必须是。
2. 证书有什么要求吗 ？ 答 ：请各位核对一下自己的CA证书。需要 CA 颁发的证书(自签不行)，需要OV/EV级别的证书，DV的不行。证书扫盲传送门 ：<https://zhuanlan.zhihu.com/p/84047911>
3. 关于IP白名单/网关流量过滤等需求需要提供推送机IP的：

Lazop提供了请求签名验证来防止回调接口来防止被灌数据，如仍需过滤IP等方式过滤流量，请自行联系阿里云新加坡寻找机房域名/IP, 平台不提供支持。

#### a.了解回调报文示例(这是收到的推送Http回调请求的示例。)：

下面的实例是两条消息，一条正向，一条逆向。第一条消息体从第4行到第21行，第二条消息从第25行到第44行。

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL\#Header:Header中关注Authorization的部分，具体内容下面会说  
\#1\.正向交易信息示例(下单，付款，发货，收货等正向交易行为产生)POST /example/uri HTTP/1\.1Host: www.example.comContent\-Type: application/jsonContent\-Length: 1238Authorization: 34f7b258df045d4ed9341850ca85b866f34828fd7d51862f11137216294a894c\#正向交易消息体{ "seller\_id":"1234567", \#卖家ID "message\_type":0, "data":{ "order\_status":"unpaid", \#订单状态 "trade\_order\_id":"260422900198363", \#主单Id "trade\_order\_line\_id":"260422900298363", \#子单id "status\_update\_time":1603698638 \#订单状态更新时间 时间戳 }, "timestamp":1603766859530, \#推送时间 时间戳 "site":"lazada\_vn" \# 站点信息}  
  
\#2\.逆向交易信息示例(取消，退货退款，等逆向交易行为产生)POST /example/uri HTTP/1\.1Host: www.example.comContent\-Type: application/jsonContent\-Length: 1238Authorization: 34f7b258df045d4ed9341850ca85b866f34828fd7d51862f11137216294a894c\#逆向交易消息体{ "seller\_id":"1000114855",  "message\_type":0, "data":{ "order\_status":"canceled", "reverse\_order\_id":"501977696648153", \#逆向主单id "reverse\_order\_line\_id":"502491640048153", \#逆向子单id "status\_update\_time":1603703663, "trade\_order\_id":"252883361348153", \#关联正向单id "trade\_order\_line\_id":"252883361948153" \#关联正向子单id }, "timestamp":1603715010436, "site":"lazada\_vn"}你可能会问：

1. trade\_order\_id 对应API的哪个字段 ： order\_id
2. 子单号有用吗？ 接口取数据主单号即可。

#### b. 了解签名鉴权Authorizaiton：

签名由HMAC\-SHA256算法基于AppKey，AppSecret和消息体生成。用于校验消息的来源以及消息完整性。要求接入方校验签名。

生成后进行HEX编码生成的字符串，接收方应该校验签名，确认消息的完整性：

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL/\*其中Base \= {your\_app\_key} \+ "{message\_body\_you\_receieved}"Secret \= {your\_app\_Secret};\*/Authorization \= HEX\_ENCODE(HMAC\-SHA256(Base, Secret));#### c. 签名产生Sample Code ：

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLimport org.slf4j.Logger;import org.slf4j.LoggerFactory;  
import javax.crypto.Mac;import javax.crypto.spec.SecretKeySpec;  
/\*\* \* 签名工具类 \* @author jianyan \* @date 2020/12/01 \*/public class SignatureUtil { private static final String HMAC\_SHA256 \= "HmacSHA256";  
 private static final Logger LOGGER \= LoggerFactory.getLogger(SignatureUtil.class);  
 /\*\* \* 产生基于Hmac\-SHA256，并经过16进制编码的签名。 \* @param base {AppKey} \+ {messageBody} \* @param secret {AppSecret} \* E.g.: AppKey \= 123456, AppSecret \= 3412gyo124goi3124 \* 收到的消息体Json ：{"seller\_id":"1234567", "message\_type":0, "data":{...}..} \* \* base \= "123456" \+ "{\\"seller\_id\\":\\"1234567\\", \\"message\_type\\":0, "data":{...}..}" \* secret \= 3412gyo124goi3124 \* signature \= getSignature(base, secret); \* signature \= f3d2ca947f16a50b577c036adecd18bec126ea19cadedd59816e255d3b6104ab \* @return 签名 \*/ public static String getSignature(String base, String secret) { try { Mac sha256Hmac \= Mac.getInstance(HMAC\_SHA256\); SecretKeySpec secretKey \= new SecretKeySpec(secret.getBytes(), HMAC\_SHA256\); sha256Hmac.init(secretKey); return byteArraytoHexString(sha256Hmac.doFinal(base.getBytes())); } catch (Exception e) { LOGGER.error("Failed to generate signature"); } return null;  
 }  
 /\*\* \* 十六进制Encode \* @param bytes \* @return \*/ private static String byteArraytoHexString(byte\[] bytes) { if(bytes \=\= null) { return null; } StringBuilder sb \= new StringBuilder(); String stmp; for (byte aByte : bytes) { stmp \= Integer.toHexString(aByte \& 0XFF); if (stmp.length() \=\= 1) { sb.append('0'); } sb.append(stmp); } return sb.toString().toLowerCase(); }}看到这里你可能会问 ： 

1. 签名强制吗 ？ 答 ： 不强制，但是墙裂推荐。
2. 这是干啥的 ？ 我该怎么用这段代码？ 答： 这是一种生成一段字符串的算法，收到消息之后，客户端通过使用相同的算法可以重新生成出一样的字符串，与服务器发来的字符串进行对比即可验证消息的完整性和发出端的身份。

如果你是Java 的话，直接复制代码收到请求后，用这个代码按照说明生成签名，与Header中的Authorization进行比较。

#### d. 了解成功接收与失败重试

**要求客户端接收到数据返回200\.OK(HTTP状态码，不是Body内容)确认消息收到**。 如果超过500ms服务端未收到200确认，服务端则认为消息推送失败。失败后消息会在半个小时后重试推送，一直重试12次直到彻底失败放弃推送。

由于失败重试会放大消息量消耗更多的系统资源，请接入的APP在接收后做好buffer，不要直接处理，减少失败。如果一个APP推送失败率超过50%，推送机会停止对该地址的推送。

看到这里你可能问：

1. 成功了还会再推吗？ 不会。
2. 失败了过了半个小时，推过来的状态是最新的吗？ 是的，重试之前会先查一下最新状态。

 

### 2\.App Console 自主测试，自主接入

登入open.lazada.com, 登录后进入Push Mechanism选项卡。

#### 

1\.填入回调地址，点击Verify。 Verify会自动发送一条测试消息到填入的地址，如果返回符合预期则提示成功。

注：接入人请手动进入后台确认:测试消息，包括确认测试内容，确认签名等，此处的签名是真实的。

2\.验证成功后，选择订阅的消息类型，并单击右上角的保存。

 

## 接入之后如何使用，最佳实践(必看)：

某ERP 服务商，现有的订单同步方式是通过每一个小时对服务的所有卖家进行一次/orders/get接口获取订单信息，然后再调用/order/items/get获取订单item详情。效率低，API接口经常被限流，API返回有时候还是空，莫名其妙调用失败， 失败重试又被限流， 陷入绝望。

 

配置回调联调上线之后，现已形成：

 

先消费消息，获取订单号后，对订单调用/order/get 接口查询订单详情，后用订单号调用/order/items/get获取item详情后，再进行业务处理。 每隔6小时进行一次补拉，调用/orders/get接口获取全量订单，比对有消息已经处理过的，将消息中的漏单，进行统一处理。

 

回顾整个过程，该ERP服务商采取的是逐步放量策略 ： 现有拉取频率不降，把消息消费融入业务逻辑中。 即消费消息，也进行拉取。

之后再逐步将补拉时间下降： 从1小时一拉，变成2小时一拉，逐步减少拉取频率。

 

另一ERP服务商听说后，也火速接入了推送，采取了不同的灰度策略 ： 选取部分店铺，他们的订单直接采取消费推送\+低频补拉的方式。观察一段时间没有问题后，再进行灰度店铺的不断放量最终到全量店铺。

## 接入常见问题：

### 某个SellerId没有接到推送：

 

 推送机在推送前会检查该SellerId 和APPKey在平台的授权关系是否有效，如果出现某个SellerId 没有收到推送的情况，验证一下该Seller和App的Token的有效性。

 

### 是否支持多端推送：

 

 单一AppKey只能绑定一个推送地址。 如果Seller订阅了不止一个APP，并且都持有有效授权的话，所有App都可以收到该商家的订单。

 

### 推送只会有订单消息吗？

 

 目前上线的只有订单消息，未来几月内会陆续上线，商品审核消息，履约消息，库存更新消息，商家增长消息等。

 

### 你们推送重试12次都失败了，我们如何获取失败的单子？ 有查询接口吗？

 

 首先推送对于国内主流云服务器99\.8%的单子在1次推送成功，100%的单子在3次内推送成功。没有12次失败的极端情况，由于十二次推送跨越6个小时的时间，及时是突然的网络抖动，也有足够的时间进行恢复，所以12次推送全部都失败的几率非常低。

 要是万一呢？ 对于这种方式，我们仍然提供拉取接口给到App，可以进行定时补拉校对。但是对于其QPS的限制要比之前纯拉的时候更加严格。总而言之，我们推荐的消费方式是：以推为主，以拉兜底。

 

### 500ms是如何计算的，网络不好的时候经常超过500Ms怎么办 ？

 

不要同步消费订单消息，存入buffer中再消费。

基于目前观察，国内主流云服务器RT在200ms以内。对于抖动情况，有12次重试补偿机制。 

 

### 后续会对orders/get/限流吗，什么时候限流？

 

会，目前初定时间在春节后。

 

### 子订单Id有用吗？ 目前只用主单id可以吗？

 

是可以的，目前查询接口以及item查询接口都是用主单id

 

### 回调地址配置之后可以改吗？ 需要测试回调和生产回调区分吗？

 

首先回调地址可以改。测试回调的必要性不大，因为你们订单现有链路是以拉取的方式进行，与这个回调完全隔离，可以直接使用一个回调地址。

 

### 推送有重复 ？

如果你发现了大量重复，请核对一下重复消息中的trade\_order\_line\_id字段是否一致。因为推送是以子单维度区分的。

推送服务是：至少一次投递 的，少量重复属于正常，请幂等消费。

 

### 我们签名用的你们提供的例子，但是签名就是对不上

很多童鞋都反应我们给的sample code有问题。如果下面所有的方式你都自查过了，仍然有问题的再来和我们交流。

1. 不要将签名校验逻辑和业务逻辑耦合，我们推荐的签名校验设计方式可以采用责任链模式，签名校验作为责任链中的一环。很多童鞋，是用类库已经将body中的字段进行映射形成对象之后，再去序列化对象解析的方式，这种方式会依赖对象解析顺序，而且这种解析因解析的三方库而异，容易出现问题。 并且，这种写法将签名逻辑与业务逻辑，消息体深度耦合，当消息有更新迭代的时候，比较麻烦。
2. 1没问题的话关注一下取到的AppSec，如果还有问题，重置一下AppSect.

 

### 我们收到了很久之前的订单/订单数据延迟

这种情况有可能是接口延迟造成的失败，数据大量补偿丢失实时性的情况。部分国内部署的服务器存在这种问题，可以考虑转发。

## 

## 商品相关Push消息??：

## 商品新增:

 

| 属性 | 值 | 解释 |
| --- | --- | --- |
| msg\_type | 3 | 消息体中用于区分消息类型的字段 |
| 重试次数 | 12 | 推送失败后重试的次数 |
| 重试间隔 | 30分钟 | 每次重试的间隔 |

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ seller\_id : "1234567", //卖家id message\_type : 3, //消息类型  data :{ "item\_id": "232611001", //product id "sku\_list": \[ { "shop\_sku": "232611001\_SGAMZ\-356805001",  "seller\_sku": "api\-create\-test\-111",  "sku\_id": "356805001"  }, { "shop\_sku": "232611001\_SGAMZ\-356805001", "seller\_sku": "api\-create\-test\-111", "sku\_id": "356805001" } ]}, "action":"EDITED\_UPDATED", //操作类型 PUBLISHED(商品发布), EDITED\_INSERTED(已有商品增加SKU) "status\_update\_time":1623238942696, "timestamp" : 1606130634, "site" : "lazada\-sg"}\#：action字段是指本次新增的渠道标记。 在商品新增中一共有两种渠道标分别是 : PUBLISHED （商品发布渠道）,EDITED\_INSERTED (已有商品新增SKU)

 

## 商品删除：

| 属性 | 值 | 解释 |
| --- | --- | --- |
| msg\_type | 5 | 消息体中用于区分消息类型的字段 |
| 重试次数 | 12 | 推送失败后重试的次数 |
| 重试间隔 | 30分钟 | 每次重试的间隔 |

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "seller\_id": "100056775", "message\_type": 5, "data": { "item\_id": 1807508328, "sku\_list": \[{ "shop\_sku": "1807508328\_SGAMZ\-9541954106", "seller\_sku": "11111111", "sku\_id": 9541954106 }, { "shop\_sku": "1807508328\_SGAMZ\-9542176118", "seller\_sku": "22222223", "sku\_id": 9542176118 }, { "shop\_sku": "1807508328\_SGAMZ\-9542176119", "seller\_sku": "33333333", "sku\_id": 9542176119 }], "action": "EDITED\_DELETED", //操作类型 DELETED(商品删除) EDITED\_DELETED(已有商品删除sku) "status\_update\_time": 1623230820094 }, "timestamp": 1623230820, "site": "LAZADA\_SG"}\#：action字段是指本次新增的渠道标记。 在商品新增中一共有两种渠道标分别是 : DELETED （商品删除）,EDITED\_DELETED (已有商品删除SKU)

 

## 商品编辑:

| 属性 | 值 | 解释 |
| --- | --- | --- |
| msg\_type | 5 | 消息体中用于区分消息类型的字段 |
| 重试次数 | 12 | 推送失败后重试的次数 |
| 重试间隔 | 30分钟 | 每次重试的间隔 |

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "seller\_id": "100072361", "message\_type": 4, "data": { "item\_id": 1760954113, "sku\_list": \[{ "shop\_sku": "1760954113\_SGAMZ\-8975502010", "seller\_sku": "1760954113\-1621404701289\-0", "sku\_id": 8975502010 }], "action": "EDITED\_UPDATED",//除sku新增删除之外的一切变更 "status\_update\_time": 1623232569146 }, "timestamp": 1623232569, "site": "LAZADA\_SG"}\#action只有一种

\#除商品新增和商品删除之外的所有商品更新都会触发此消息

---

## Lazada Push Mechanism

<a id="lazada-push-mechanism-120168"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29524&docId=120168&lang=en_US>

# What is Lazada Push Mechanism(LPM) and Why we need it.

Consider a situation that you are fetching new orders, before LPM, you are calling GetOrders API thousand times an hour(You may get throttled if your step over the limit.). Even you do that, you are not able to get your order once it occurred. 

  

Now with LPM, lazop will send you a notification once new order is created, which enables you get your new orders in milliseconds.

  

Sounds good ? onboard today !

# Getting started with Lazada Push Mechanism

Step1 : Prepare your callback url to receive notifications from Lazop.

Step2: Understand push mechanism details include authorization, retry, etc.. and finish your coding.

Step3: Fill your url in and verify it.

Step4: Subscribe the messages.

  

This work\-through document will take order notification as example.

## Step1 : Prepare your callback url to receive notifications from Lazop.

It **must be a https** with CA certs. 

1. Certification muse be authorized by CA. Self\-signed certs are not acceptable.
2. Certs must be OV or EV. DV is not working.(know more about certs level : [https://www.digicert.com/difference\-between\-dv\-ov\-and\-ev\-ssl\-certificates](https://www.digicert.com/difference-between-dv-ov-and-ev-ssl-certificates)).

## Step2 : Understand push mechanism details include authorization, retry, etc.. and finish your coding.

After have your call back url, you need to know what a notification looks like. For example, order msg have two types of messages : trade order message and reverse order message. Trade order message triggered when trade order actions happens. trade order actions includes all you can do to a order except return and refund. When customer decide to return, refund, a reverse order message will be sent.

  

```
#Header:Only you need to know is the 'Authorization' tag since that is the signature. 
#More details about it will be covered later.

#1.trade order message sample(trade order actions includes order create，paid，shipped..etc)
POST /example/uri HTTP/1.1
Host: www.example.com
Content-Type: application/json
Content-Length: 1238
Authorization: 34f7b258df045d4ed9341850ca85b866f34828fd7d51862f11137216294a894c
#body
{
   "seller_id":"1234567",  #seller id
 "message_type":0,
   "data":{
      "order_status":"unpaid", #Order status
      "status_update_time":1603698638, #timestamp of the order status update
      "trade_order_id":"260422900198363", #trade order id which mapping to the order_id in API
      "trade_order_line_id":"260422900298363" #sub order id.
   },
   "timestamp":1603766859530, #timestamp of push
   "site":"lazada_vn" # site info
}

#2.reverse order message sample (reverse order actions includes return, refund etc..)
POST /example/uri HTTP/1.1
Host: www.example.com
Content-Type: application/json
Content-Length: 1238
Authorization: 34f7b258df045d4ed9341850ca85b866f34828fd7d51862f11137216294a894c
#body
{
   "seller_id":"1000114855", 
   "message_type":0,
   "data":{
      "order_status":"canceled",
      "reverse_order_id":"501977696648153",    #reverse order id
      "reverse_order_line_id":"502491640048153", #reverse sub-order id
      "status_update_time":1603703663,
      "trade_order_id":"252883361348153", #related trade order id
      "trade_order_line_id":"252883361948153" #related trade order sub id
   },
   "timestamp":1603715010436,
   "site":"lazada_vn"
}
```
Questions you may have :

1. Is trade\_order\_id mapping to order\_id ? Yes
2. What is a sub\-order id ? Use trade order id to query the api.

### Authorization:

To make sure the request is sent from Lazop and the request data is complete, Lazop will generate a signature and put it into request header. Client can reproduce the signature and compare it to the one receieved in message before consuming. 

  

Signature is generated by Hex\-encoded HMAC\-SHA256\.

```
/*
Base = {your_app_key} + "{message_body_you_receieved}"
Secret = {your_app_Secret};
*/
Authorization = HEX_ENCODE(HMAC-SHA256(Base, Secret));
```
Sample Java Code to reproduce the signature :

  

```

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

/**
 * 签名工具类
 * @author Jeremy
 * @date 2020/12/01
 */
public class SignatureUtil {
    private static final String HMAC_SHA256 = "HmacSHA256";

    private static final Logger LOGGER = LoggerFactory.getLogger(SignatureUtil.class);

    /**
     * Hmac-SHA256
     * @param base {AppKey} + {messageBody}
     * @param secret {AppSecret}
     * E.g.: AppKey = 123456, AppSecret = 3412gyo124goi3124
     * messageBody ：{"seller_id":"1234567", "message_type":0, "data":{...}..}
     *
     * base = "123456" + "{\"seller_id\":\"1234567\", \"message_type\":0, "data":{...}..}"
     * secret = 3412gyo124goi3124
     * signature = getSignature(base, secret);
     * signature =  f3d2ca947f16a50b577c036adecd18bec126ea19cadedd59816e255d3b6104ab
     * @return 签名
     */
    public static String getSignature(String base, String secret) {
        try {
            Mac sha256Hmac = Mac.getInstance(HMAC_SHA256);
            SecretKeySpec secretKey = new SecretKeySpec(secret.getBytes(), HMAC_SHA256);
            sha256Hmac.init(secretKey);
            return byteArraytoHexString(sha256Hmac.doFinal(base.getBytes()));
        } catch (Exception e) {
            LOGGER.error("Failed to generate signature");
        }
        return null;

    }

    /**
     * Hex Encode
     * @param bytes
     * @return
     */
    private static String byteArraytoHexString(byte[] bytes) {
        if(bytes == null) {
            return null;
        }
        StringBuilder sb = new StringBuilder();
        String stmp;
        for (byte aByte : bytes) {
            stmp = Integer.toHexString(aByte & 0XFF);
            if (stmp.length() == 1) {
                sb.append('0');
            }
            sb.append(stmp);
        }
        return sb.toString().toLowerCase();
    }
}
```
  

### Sucess acknowledage and retry :

1. You need to ack with Http status code 200 with in 500ms
2. If you fail to do 1, server will retry sending the message after 30 mins.
3. If retry fails again, server will retry in another 30 mins.
4. if you fail more than 12 times or you sucessfuly do 1 before 12 times, server will stop retrying.

## Step3: App Console self\-test, self\-access.

Log in to **open.lazada.com**, and enter the **Message Service** tab after logging in.

![image](https://cdn.nlark.com/yuque/0/2021/png/12685098/1615806301562-b225f7a8-61d7-4c4a-9ea9-dab5de4153dc.png "image")

1\. Fill in the callback address and click Verify. Verify will automatically send a test message to the filled address, if the return meets expectations, it will prompt success.

Note: The access person should manually enter the background to confirm the test message, including confirming the test content, confirming the signature, etc. The signature here is true.

2\. After the verification is successful, select the message type to subscribe, and click Save in the upper right corner.

  

**Note**: The data of all ISVs that have been manually accessed before will be automatically synchronized here, and you do not need to perform the above automatic access operations.

The following actions will not take effect immediately before **March 15th** and will be delayed until March 15th:

1\. The newly connected ISV uses automatic access to save the online address.

2\. The ISV that was previously manually accessed uses automatic access to change the online address.

## Step4: Go production and best practice

After onboarded, below is a recommend way of consuming the message. 

A way of consuming push message is :

OrderMessage \-\-\-\-\-\-\-\-\-\-\-\> /order/get \-\-\-\-\-\-\-\-\-\-\-\-\>/order/items/get \-\> business logic 

 trade\_order\_id trade\_order\_id

How to switch the consuming pattern from \`pulling only\` to \`consume push, but pull with low frequency to protect from missing\` ?

Strategy 1 :

Keep pulling frequency unchanged, but add consuming push logic. And gradually lowing the frequency of pulling. 

Strategy 2:

Whitelisting some sellers, use the new startegy. And gradually adding sellers to whitelist.

# FAQ:

### I need the IPs of push servers to do ip white\-listing, can you guys provide the ips ?

Lazop recommends to use signature on authorization header to check the origin of pushes. No further supports on IPs from lazop.

  

### Some sellers message are missing.

Server will check the authorization between sellerId and appkey. If the auth is revoked or expired, server will abort the pushing. You can verify the authorization by checking the token that you use for calling the API.

  

### Would there be more message types beside order message ?

Only order message is online now. Product, promotions, stock message is under developing.

  

### How to get the orders if all retries failed ?

You need to use /orders/get API to get them. The recommend way of consuming the message is : Consume the order messages, and pull the orders periodically to check if there is any missing. So called "consume push, but pull with low frequency to protect from missing"

  

### Duplicate message pushed for same order?

Firstly, small amount of duplicate message is normal. Message design is 'at least once push'. Idempotently consuming is required. 

Secondly, if you got huge amount duplicate, please pay attention to the field 'trade\_order\_line\_id'. If two messages have same trade\_order\_id but different trade\_order\_line\_id, server will treat it as different messages.

---

## Webhook API Trade Order Notifications

<a id="webhook-api-trade-order-notifications-120196"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120196&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 0 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

Triggered when a order status change except return and refund.

```
{
 "seller_id":"1234567",  //seller Id
 "message_type":0,
   "data":{
      "order_status":"unpaid", //Order Status
      "trade_order_id":"260422900198363", //trade order Id
      "trade_order_line_id":"260422900298363", //sub order Id
      "status_update_time":1603698638 //update time (seconds)
   },
   "timestamp":1603766859530, //time when notify(seconds)
   "site":"lazada_vn" //site
}
```
  

Triggered when a order status change to return and refund.

```
{
   "seller_id":"1000114855", 
   "message_type":0,
   "data":{
      "order_status":"returned",
      "reverse_order_id":"501977696648153",    //reverse order id
      "reverse_order_line_id":"502491640048153", //reverse order line id
      "status_update_time":1603703663,  //status update time
      "trade_order_id":"252883361348153", // order id
      "trade_order_line_id":"252883361948153" //order line id
   },
   "timestamp":1603715010436,
   "site":"lazada_vn"
}
```

---

## Webhook API Product Quality Control Notification

<a id="webhook-api-product-quality-control-notification-120205"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120205&lang=en_US>

Triggered when product quality control status is updated. 

  

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 1 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

  

```
{
    "seller_id": "500176629136",
    "message_type": 1,
    "data": {
        "date": 1627451616614,
        "itemId": 2202832065, //product item id
        "reason": "You have violated the Prohibited and Controlled Products Policy - ${riskcategory}. As a result, your product has been locked. For more information, please refer to  https://sellercenter.lazada.com.ph/seller/helpcenter/what-is-prohibited-and-controlled-products-policy.html. To appeal, please click on the appeal button.<br/>\u0001\u0001",
        "seller_id": 500176629136,
        "status": "Lock" //status enumeration
    },
    "timestamp": 1627451616,
    "site": "lazada_ph"
}
```
Status Enumeration : 

PENDING : Pending for approval

APPROVED : Live approved

REJECTED : Rejected. Refer to "reason"

LIVE\_REJECTED : A sanction happend on live product. The product would be offline and editable.

LOCK : A sanction happend on live product. The product would be uneditable.

---

## Webhook API Product Update Notificaton

<a id="webhook-api-product-update-notificaton-120197"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120197&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 3 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30min | delay between two retries |
| Auth Required | true | This notification need authorization |

  

Triggered when new product/sku is added(includes publish and edit)

  

```
{
  seller_id : "1234567", 
  message_type : 3, 
  
  data :{
    "item_id": "232611001", //product id
    "sku_list": [
      {
        "shop_sku": "232611001_SGAMZ-356805001", 
        "seller_sku": "api-create-test-111", 
        "sku_id": "356805001" 
      },
      {
        "shop_sku": "232611001_SGAMZ-356805001",
        "seller_sku": "api-create-test-111",
        "sku_id": "356805001"
      }
    ]},
    "action":"EDITED_UPDATED",  //operation type : PUBLISHED(product publish), EDITED_INSERTED(edit)
    "status_update_time":1623238942696,
  "timestamp" : 1606130634,
  "site" : "lazada-sg"
}
```

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 4 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30min | delay between two retries |
| Auth Required | true | This notification need authorization |

Triggered when a product is edited()

```
{
  "seller_id": "100072361",
  "message_type": 4,
  "data": {
    "item_id": 1760954113,
    "sku_list": [{
      "shop_sku": "1760954113_SGAMZ-8975502010",
      "seller_sku": "1760954113-1621404701289-0",
      "sku_id": 8975502010
    }],
    "action": "EDITED_UPDATED",//edit except insert and delete
    "status_update_time": 1623232569146
  },
  "timestamp": 1623232569,
  "site": "LAZADA_SG"
}
```
  

  

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 5 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30min | delay between two retries |
| Auth Required | true | This notification need authorization |

Triggered when a product is deleted or a sku is deleted

```
{
  "seller_id": "100056775",
  "message_type": 5,
  "data": {
    "item_id": 1807508328,
    "sku_list": [{
      "shop_sku": "1807508328_SGAMZ-9541954106",
      "seller_sku": "11111111",
      "sku_id": 9541954106
    }, {
      "shop_sku": "1807508328_SGAMZ-9542176118",
      "seller_sku": "22222223",
      "sku_id": 9542176118
    }, {
      "shop_sku": "1807508328_SGAMZ-9542176119",
      "seller_sku": "33333333",
      "sku_id": 9542176119
    }],
    "action": "EDITED_DELETED", //operation type DELETED(delete product) EDITED_DELETED(delte sku)
    "status_update_time": 1623230820094
  },
  "timestamp": 1623230820,
  "site": "LAZADA_SG"
}
```

---

## Webhook API Shallow Stock Notification

<a id="webhook-api-shallow-stock-notification-120206"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120206&lang=en_US>

## Notification

Triggered when warehouse sellable stock number below certain thresh hold(5 for now).

 

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 6 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

 

 

```
{
    "seller_id": "1000008313", //sellerId
    "message_type": 6,  //message type
    "data": {
        "seller_sku":"test-Lazada-sku",//sku name
        "withhold_quantity": 0,  //withold quantity 
        "sku_id": 1173310888,  //skuId
        "real_quantity": 5,  //total quantity
        "warehouse": "dropshipping", //warehouse identifier
        "occupy_quantity": 5, //occupied quantity
        "pre_order_quantity": 0 //pre_order quantity
    },
    "timestamp": 1626164321,  //时间戳
    "site": "lazada_sg" //站点
}
```

 

Sellable \= real\_quantity \- withold\_quantity \- occupy\_quantity.

 

## \-\-\-stock knowledage\-\-

 

A example to help you understand real\_quantity, withold\_quantity and occupy\_quantity

 

### Normal order flow

 

|  | entity\_id | sellable\_qty | real\_qty | withhold\_qty | occupy\_qty |
| --- | --- | --- | --- | --- | --- |
| init | 1 | 10 | 10 | 0 | 0 |
| order\_pending | 1 | 9 | 10 | 1 | 0 |
| order\_unpaid | 1 | 9 | 10 | 1 | 0 |
| order\_paid | 1 | 9 | 10 | 0 | 1 |
| RTS | 1 | 9 | 9 | 0 | 0 |

 

### Order is paid and canceled

 

|  | entity\_id | sellable\_qty | real\_qty | withhold\_qty | occupy\_qty |
| --- | --- | --- | --- | --- | --- |
| init | 1 | 10 | 10 | 0 | 0 |
| order\_pending | 1 | 9 | 10 | 1 | 0 |
| order\_unpaid | 1 | 9 | 10 | 1 | 0 |
| order\_paid | 1 | 9 | 10 | 0 | 1 |
| order\_canceld | 1 | 10 | 10 | 0 | 0 |

 

### Order peding expired and repaid.

 

|  | entity\_id | sellable\_qty | real\_qty | withhold\_qty | occupy\_qty |
| --- | --- | --- | --- | --- | --- |
| init | 1 | 10 | 10 | 0 | 0 |
| order\_pending | 1 | 9 | 10 | 1 | 0 |
| order\_pending\_expired | 1 | 10 | 10 | 0 | 0 |
| order\_unpaid | 1 | 9 | 10 | 1 | 0 |
| order\_paid | 1 | 9 | 10 | 0 | 1 |
| RTS | 1 | 9 | 9 | 0 | 0 |

---

## Webhook API Short Video State Update Notification

<a id="webhook-api-short-video-state-update-notification-120207"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120207&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 7 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

Triggered when a short vdeio status is updated. 

Use this notification to track the video you uploaded for a product. 

```
{
    "seller_id": "213",
    "message_type": 7,
    "data": {
        "state": "AUDIT_SUCCESS", //State Enumeration 
        "timestamp": 1626763154,
        "videoId": 30023210009
    },
    "timestamp": 1626763154,
    "site": "lazada_sg"
}
```
State Enumeration :

READY\_FOR\_TRANSCODE,

TRANSCODING,

TRANSCODE\_FAILED,

READY\_FOR\_AUDIT,

AUDIT\_FAILED,

AUDIT\_SUCCESS,

DELETED.

---

## Webhook API Authorization Token Expiration Alert

<a id="webhook-api-authorization-token-expiration-alert-120208"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120208&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 8 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

This notification is triggered if ：

1. The app subscribed this notificaiton.
2. The token is still valid and will expired in 48 hours.

  

Note that this notificaton is a off\-line notification which means that it would only occur once a day. 

```
{
    "seller_id": "null",
    "message_type": 8,
    "data": {
        "app_key": "115527",
        "auth_expiry_time": 1627542238,  //expiry time
        "seller_id": "1000165972"
    },
    "timestamp": 1627416758,
    "site": "lazada_ph"
}
```

---

## Webhook API Product Category Update Notification

<a id="webhook-api-product-category-update-notification-120209"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120209&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 12 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | false | This notification DOES NOT need authorization |

Triggered when the product category tree were updated. 

Note :

1\.This is a broad cast notification which does not require seller authorization.

2\.There is no seller\_id inside message body since all sellers share the same categories.

3\.The site would only be lazada\_sg since all sites share the same cateogries.

```
{
    "message_type": 12,
    "data": {
        "status": "finish",
        "status_update_time": 1627203600000
    },
    "timestamp": 1627203600,
    "site": "lazada_sg"
}
```

---

## Webhook API Seller Status Update Notification

<a id="webhook-api-seller-status-update-notification-120210"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120210&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 13 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

Triggered when Seller status is change. 

```
{
    "seller_id": "100053528",
    "message_type": 13,
    "data": {
        "status": "normal" //status enumration
    },
    "timestamp": 1627038397,
    "site": "lazada_sg"
}
```
Status Enumration :

normal 

close : Seller is closed. Most of the daily operation are banned.

---

## Webhook API Fulfillment Order Update Notification

<a id="webhook-api-fulfillment-order-update-notification-120211"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120211&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 14 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

Triggered when fulfillment order is updated.

```
{
    "seller_id": "100056775",
    "message_type": 14,
    "data": {
        "trade_order_id": "57244869716603",
        "buyer_id": "1001916603", 
        "fulfillment_package_id": "FP018711048499663",
        "status": "DELIVERED",  //status enumeration
        "status_update_time": 1627440482
    },
    "timestamp": 1627441249,
    "site": "lazada_sg"
}
```
  

STATUS :

  

CANCELLED  
READY\_TO\_SHIP  
TRANSIT\_TO\_SHIP  
INFO\_ST\_DOMESTIC\_SC\_SIGN\_IN\_SUCCESS  
INFO\_ST\_DOMESTIC\_PICKUP\_SIGN\_IN\_SUCCESS  

INFO\_ST\_DOMESTIC\_PICKUP\_SIGN\_IN\_FAILURE

INFO\_ST\_DOMESTIC\_IB\_SUCCESS\_FIRST\_MILE\_HUB

INFO\_ST\_DOMESTIC\_OB\_SUCCESS\_FIRST\_MILE\_HUB

INFO\_ST\_DOMESTIC\_IB\_SUCCESS\_IN\_SORT\_CENTER

INFO\_ST\_DOMESTIC\_OB\_SUCCESS\_IN\_SORT\_CENTER

INFO\_ST\_DOMESTIC\_PACKAGE\_STATIONED\_IN

INFO\_ST\_DOMESTIC\_PACKAGE\_STATIONED\_OUT

INFO\_ST\_DOMESTIC\_ON\_HOLD

INFO\_ST\_DOMESTIC\_LAST\_MILE\_CUSTOMER\_STATION\_INBOUND

DELIVERED

INFO\_ST\_DOMESTIC\_LAST\_MILE\_STATION\_CUSTOMER\_FAILED\_PICKUP

INFO\_ST\_DOMESTIC\_LAST\_MILE\_3PL\_SHIPPED\_TO\_STATION

INFO\_ST\_DOMESTIC\_OUT\_FOR\_DELIVERY

INFO\_ST\_REQUESTING\_DRIVER

INFO\_ST\_NEED\_REVIEW

INFO\_ST\_DRIVER\_ASSIGNED

INFO\_ST\_DOMESTIC\_1ST\_ATTEMPT\_FAILED

INFO\_ST\_DOMESTIC\_REDELIVERY

INFO\_ST\_DOMESTIC\_REATTEMPTS\_FAILED

INFO\_ST\_DOMESTIC\_DELIVERY\_FAILED

INFO\_ST\_DOMESTIC\_RETURN\_AT\_TRANSIT\_HUB

ON\_THE\_WAY\_BACK\_TO\_SHIPPER

INFO\_ST\_DOMESTIC\_BACK\_TO\_SHIPPER

INFO\_ST\_DOMESTIC\_WAREHOUSE\_RETURNED

DELIVER\_FAILED

INFO\_ST\_DOMESTIC\_PACKAGE\_RETURNED\_FAILED

INFO\_ST\_DOMESTIC\_PACKAGE\_RETURN\_ATTEMPT\_FAILED

INFO\_ST\_DOMESTIC\_PACKAGE\_RETURN\_FAILED\_PICKUP\_PENDING

LOST\_BY\_3PL

DAMAGE\_BY\_3PL

INFO\_ST\_CB\_PICKUP\_SUCCESS

INFO\_ST\_CB\_HANDOVER\_TO\_LAST\_MILE

INFO\_ST\_PACKAGE\_INTERCEPTED

READY\_TO\_SHIP\_PENDING

INFO\_ST\_CB\_IB\_SUCCESS\_IN\_SORT\_CENTER

INFO\_ST\_CB\_HANDOVER

INFO\_ST\_CB\_UPLIFTED

INFO\_ST\_CB\_LINEHAUL\_ARRIVAL\_SUCCESS

INFO\_ST\_CB\_CUSTOMS\_CLEARANCE\_SUCCESS

INFO\_ST\_CB\_RECEIVED\_BY\_LAST\_MILE

PACKAGE\_SCRAPPED

INFO\_ST\_CB\_PICKUP\_IN\_BAG\_LEVEL

INFO\_ST\_CB\_RECEIVED\_IN\_BAG\_LEVEL

---

## Webhook API Product Review Notification

<a id="webhook-api-product-review-notification-120982"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120982&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 21 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

  

Triggered when an item has a comment

```
{
    "seller_id":"1000042284",
    "message_type":21,
    "data":{
        "item_id":2306372942, // Product Id
        "id":122598400472942, // Review Id
        "order_id":83314300176414 // Order Id
        },
    "timestamp":1660705811, //time when notify(seconds)
    "site":"lazada_sg" //site
}
```

---

## Webhook API Reverse Order

<a id="webhook-api-reverse-order-120232"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120232&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 10 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30min | delay between two retries |
| Auth Required | true | This notification need authorization |

 

Triggered when Reverse order status is updated

```
{
    "seller_id": "12345",
    "message_type": 10,
    "data": {
        "reverse_order_id": 658960600102006,
        "reverse_status": "RTM_INIT",
        "trade_order_id": 416557324702006,
        "extraParams": {},
        "trade_order_line_id": 416557324802006,
        "buyer_id": 100112802006,
        "seller_id": 1000143772,
        "reverse_order_line_id": 663790000102006,
        "status_update_time": 1626767698
    },
    "timestamp": 1627889609,
    "site": "lazada_sg"
}
```

"reverse\_status" enumeration value

 

Please note that this push does not push all states of the reverse order. You will only receive a push of this type if the reverse order type and status meet the corresponding reverse\-type and key.

 

For example, the REFUND\_SUCCESS status will only be pushed if the reverse order is of type ONLY\_REFUND, if your reverse order type is RTM, then you will not receive the REFUND\_SUCCESS status.

 

| reverse\-type | key | title | content |
| --- | --- | --- | --- |
| CANCEL(Buyer Cancellation Trade Order) | CANCEL\_INIT | Cancellation Initiated | Sorry this item didn't meet your expectations. Your request is being processed. You can track the status of  your return request |
| CANCEL(Buyer Cancellation Trade Order) | CANCEL\_SUCCESS | Cancellation Approved | Your refund of has been issued by the seller |
| CANCEL(Buyer Cancellation Trade Order) | CANCEL\_REFUND\_ISSUED | Cancellation Refund Issued | Your return request has been cancelled by our customer support team as another solution has been applied |
| RTM(Return to Merchant), MIX\-RETURN | RTM\_INIT | Return Initiated | Sorry this item didn't meet your expectations. Your request is being processed. You can track the status of  your return request |
| RTM(Return to Merchant), MIX\-RETURN | RTM\_CANCELED | Return Request Cancelled | Your return was automatically cancelled. Please contact customer support if there is has been an issue |
| RTM(Return to Merchant) | RTM\_SHIPPING\_BACK | Return Collected | Our team have picked up your return item and are on their way back to our warehouse for inspection |
| RTM(Return to Merchant) | RTM\_RECEIVE\_ITEM | Return Processing | Your item has been received at seller and is being prepared for inspection |
| RTW(Return to Lazada Warehouse) | RTW\_INIT | Return Initiated | Sorry this item didn't meet your expectations. Your request is being processed. You can track the status of   your return request |
| RTW(Return to Lazada Warehouse) | RTW\_CANCELED | Return Request Cancelled | Your return was automatically cancelled. Please contact customer support if there is has been an issue |
| RTW(Return to Lazada Warehouse), MIX\-RETURN | RTW\_SHIPPING\_BACK | Return Collected | Our team have picked up your return item and are on their way back to our warehouse for inspection |
| RTW(Return to Lazada Warehouse), MIX\-RETURN | RTW\_REJECT | Return Processed | Sorry, your return goods did not pass inspection. |
| RTW(Return to Lazada Warehouse), MIX\-RETURN | RTW\_REFUND\_PENDING | Return Processed | Your refund is on the way |
| ONLY\_REFUND(Buyer initiated refund for Fresh Food or Redmart type orders) | REFUND\_INIT | Refund Initiated | Sorry this item didn't meet your expectations. Your request is being processed. You can track the status of   your return request |
| ONLY\_REFUND(Buyer initiated refund for Fresh Food or Redmart type orders) | REFUND\_PENDING | Refund Approved | Your refund of has been approved by our customer support team |
| ONLY\_REFUND(Buyer initiated refund for Fresh Food or Redmart type orders) | REFUND\_SUCCESS | Refund Issued | Your refund of has been issued |
| ONLY\_REFUND(Buyer initiated refund for Fresh Food or Redmart type orders) | REFUND\_REJECTED | Refund Rejected | Your refund has been rejected by our customer support team |

---

## Webhook API Promotion

<a id="webhook-api-promotion-120255"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=120255&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 11 | field to determine message type. |
| Retry times | 3 | Retry times when client failed to response |
| Retry Interval | 5 min | delay between two retries |
| Auth Required | true | This notification need authorization |

  

Triggered 72 hours before the end of the voucher

```
{
    "expireTime": 1628079408927, // Expiration timestamp
    "notifyTime": 1628153676218, // Notification timestamp
    "promotionId": 900000001107894,  // Promotion ID
    "promotionType": "SELLER_VOUCHER",  // Promotion type:SELLER_VOUCHER、FLEXI_COMBO、FREE_SHIPPING
    "sellerId": 100191757  // Seller ID
}
```
  

Seller Voucher Stock Notification

```
{
    "left": "100",  // Remaining total amount of promotion budget
    "notifyTime": 1628158481068, // Notification timestamp
    "promotionId": 900000001107894,  // Promotion ID
    "promotionType": "SELLER_VOUCHER",  // Promotion type:SELLER_VOUCHER、FLEXI_COMBO、FREE_SHIPPING
    "sellerId": 100191757,  // Seller ID
    "total": "1000", // Total promotion budget
    "used": "900" // Promotion budget used total
}
```

---

## Webhook API JIT PO Status Update Notification

<a id="webhook-api-jit-po-status-update-notification-121531"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=121531&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 35 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "seller\_id":"123", "message\_type":35, "data": { "orderStatus": "closed", "purchaseOrderNo": "POJ2310202013", "sellerId": "500100", "statusUpdateTime": 1697800663966 }, "timestamp":1706515141, //time when notify(seconds) "site":"lazada\_vn" //site}

| 状态值 | 状态说明 |
| --- | --- |
| created | 采购单已创建 |
| pack\_completed | 打包完成 |
| arrived | 已到仓 |
| cancel\_by\_trade | 买家取消 |
| closed | 已完结 |
| （空，即为NULL） | SLA更新 等场景 |

---

## Webhook API IM Send Message Notifications

<a id="webhook-api-im-send-message-notifications-121553"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=121553&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 2 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

  

```
{
    "data": {
       {
  "session_id" : "100094063_2_1011822749_1_103",
  "message_id": "1zYOS7N0cuIqw96026",  //messageId use to trace problem
  "content": "{\"txt\":\"hello world!\"}",
  "from_account_id": "1891549323", 
  "from_account_type": 1,     //  2=seller 1=buyer
  "send_time": 1596550789323, 
  "template_id": 1,         // 1=txt card  2=SystemTxt 3=ImageCard
  "to_account_id": "231135951", 
  "to_account_type": 1,     // 2=seller 1=buyer
  "type": 1, // 1=userSend 2=systemSend
  "site_id": "SG", // 站点ID
  "process_msg": "xxxx", // 该字段不为空的情况下，代表本条消息没有通过安全拦截校验，
                                             // 意味着本条消息只有卖家自己可见，ISV需要把这个提示信息上屏展示给卖家
  "auto_reply": false,   // true: 这是一条自动回复消息，false: 这不是一条自动回复消息                       
  "status": 0            // 0：正常，1：消息已撤回
}
    },
  "seller_id":20240305, 
 "message_type":2
}
```

---

## Webhook API IM Session Update Notifications

<a id="webhook-api-im-session-update-notifications-121554"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=121554&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 19 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

  

```
{
    "data": {
       {
    "sync_type": "SESSION_UPDATE",          // 事件类型
    "user_account_id": "100094063",         // 卖家账号id
    "user_account_type": 2,                 // 2=seller 1=buyer
    "session_id": "100094063_2_1011822749_1_103",
    "unread_count": 0,                      // 未读数
    "to_position": 1596550789323,           // 对方已读时间
    "self_position": 1596550789323,         // 己方已读时间
    "site_id": "SG"
}
    },
   "seller_id":20240305, 
   "message_type":19
}
```

---

## Webhook API JIT Pickup Order Notification

<a id="webhook-api-jit-pickup-order-notification-121816"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=29537&docId=121816&lang=en_US>

| Property | Value | Comment |
| --- | --- | --- |
| msg\_type | 46 | field to determine message type. |
| Retry times | 12 | Retry times when client failed to response |
| Retry Interval | 30 min | delay between two retries |
| Auth Required | true | This notification need authorization |

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "seller\_id": "123", "message\_type": 46, "data": { "pickUpOrderNo": "PUO0001", "purchaseOrderNoList": \[ "POJ1001", "POJ1002" ], "orderStatus": "PICKED\_UP", "sellerId": "1001" }, "timestamp": 1706515141, //time when notify(seconds) "site": "lazada\_vn" //site}

| 状态值 | **状态说明** |
| --- | --- |
| 10 | 待揽收/PENDING\_PICKUP |
| 20 | 已派车/DISPATCHED\_CAR |
| \-20 | 揽收失败/PICKUP\_FAILED |
| 30 | 已揽收/PICKED\_UP |
| 40 | 已送达/RECEIVED |
| \-10 | 已取消/CANCELLED |

---

