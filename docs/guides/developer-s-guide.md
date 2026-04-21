# Developer's Guide

## Call API with official SDK

<a id="call-api-with-official-sdk-108064"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10397&docId=108064&lang=en_US>

SDK is automatically generated for your application and includes functions like composing request, generating encryption, response interpretation, message monitoring, and other functions. Using SDK to invoke the APIs is simple and straightforward, and it is recommended to call API with official SDK.

## Environment requirements

- JAVA SDK requires Java SE/EE 1\.5 or newer version
- .Net SDK requires .NET Framework 2\.0 or newer version (Windows Phone platform not supported）
- PHP SDK requires PHP 5 or newer version
- Python requires Python 3\.0 or newer version
- For Ruby, you can install it directly [here](http://www.rubydoc.info/gems/lazop_api_client/1.1.0).

## Downloading SDK

Before you can download SDK, you need to have registered as a developer and able to login to Lazada Open Platform. 

Take the following steps to download SDK for your application:  
1\. Login Lazada Open Platform and open the **App Console** page.  
2\. In the **Testing Tools** navigation panel, click **SDK Download**.  
3\. Click the **Download** button to download the SDK for the specific programming language.

### Useful Reference

[API sample codes](https://open.lazada.com/apps/doc/doc?nodeId=10541&docId=108137)

---

## API sample codes

<a id="api-sample-codes-108137"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10397&docId=108137&lang=en_US>

Lazada Open Platform API is called based on the HTTPS protocol, so programming languages that have an HTTPS access library can be used to call the API. You can use the official SDK directly or assemble HTTP requests according to the Lazada Open Platform protocols to call the APIs.

## Using official SDK to call API

Take the “/order/get” API as example:

JAVA sample code 

```
LazopClient client = new LazopClient(url, appkey, appSecret);
LazopRequest request = new LazopRequest();
request.setApiName("/order/get");
request.setHttpMethod("GET");
request.addApiParameter("order_id", "16090");
LazopResponse response = client.execute(request, accessToken);
System.out.println(response.getBody());
Thread.sleep(10);

```

.NET sample code

```
ILazopClient client = new LazopClient(url, appkey, appSecret);
LazopRequest request = new LazopRequest();
request.SetApiName("/order/get");
request.SetHttpMethod("GET");
request.AddApiParameter("order_id", "16090");
LazopResponse response = client.Execute(request, accessToken);
Console.WriteLine(response.IsError());
Console.WriteLine(response.Body);

```

PHP sample code

```
<?php
    include "../IopSdk.php";

   $c = new LazopClient(url,appkey,appSecret);
   $request = new LazopRequest('/order/get','GET');
   $request->addApiParam('order_id','16090');
    
   var_dump($c->execute($request, $accessToken));
?>

```

Ruby sample code

```
client = LazopApiClient::Client.new(url, appkey, appSecret)
request = LazopApiClient::Request.new('/order/get','GET')
request.add_api_parameter("order_id", "16090")
response = client.execute(request, accessToken)
puts response.success?

```

Python sample code

```
client = lazop.LazopClient(url, appkey ,appSecret)
request = lazop.LazopRequest('/order/get','GET')
request.add_api_param('order_id', '16090')
response = client.execute(request, access_token)
print(response.type)

```

**Note**: Most API methods are called via GET, but some API methods have additional request data sent via POST. Therefore, you need to update your code accordingly. The request type of each API is indicated in the API reference documentation.

---

## Error messages

<a id="error-messages-108138"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10397&docId=108138&lang=en_US>

All API calls will return a response, which indicates the status of the operation (either Success or Error) and optionally provides results and/or details related to the specified action.

When an API call fails, the system returns the request ID and error codes as well. There are 3 categories of common API call errors:

- SYSTEM: API platform error
- ISV: Business data error
- ISP: Backend service error

## API platform error (ISV errors)

The API platform errors usually occur because the request from a user does not fulfill the basic verification. When encountering such errors, check the authority, frequency and other conditions of the applications. Then, check the uploaded parameters for completeness and validity based on the API documentation.

## Business data error (ISP errors)

These errors are the result of a business logic error, these errors are caused if you do not follow the certain business rules set out by the Lazada Platform (e.g. product creation rules, platform policy rules, etc).

When encountering such errors, check whether the corresponding information is uploaded based on the error information. It is recommended to try again after correcting such errors. Should you still receive the error messages, please reach out to the Lazada Partner Seller Support to find out the business 

## Backend service error

The backend service errors are usually caused by the availability of API service. Please try again after some time, if the issue persists, please contact our technical support team.

---

## Reconfigure Existing APP to Lazada Open Platform

<a id="reconfigure-existing-app-to-lazada-open-platform-108139"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10397&docId=108139&lang=en_US>

The Seller Center APIs have been migrated to Lazada Open Platform. The current applications that call the Seller Center APIs need to be reconfigured for the migration. This section aims at helping you migrate your existing applications to the new platform.

## Recommendation

We strongly recommend you to use the official SDK to call Lazada Open Platform APIs ([download link](https://open.lazada.com/app/index.htm#/sdk/download)), which saves your efforts in resolving the protocols. The official SDK will be continuously upgraded to support more programming languages and APIs. If you do not use the official SDK, you will need to understand the following API protocol updates. For more detailed information, refer to the [API Reference Documentation](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193531.0.0.60139348Fc9LnX).

## Updated API protocol

Lazada Open Platform API has updated protocol than the Seller Center API. The differences between the request URLs, parameters, and responses are shown in the table below.

| **Items** | **Seller Center API** | **Lazada Open Platform API** | **Description** |
| --- | --- | --- | --- |
| Request URL | https://api.sellercenter.lazada.{sg} | https://api.lazada.{sg}/rest | One URL for each venture |
| Parameters | ?Action\=GetBrands | /brands/get? | API name: RESTful |
| \&Timestamp\=2015\-07\-01T11:11\+0000 | \&timestamp\=2018\-01\-07\+15%3A53%3A16 | Timestamp: supporting UTC format |
| \&Version\=1\.0 | N/A |  |
| \&Signature\=01286525c2fdba61ed1f5e | \&sign\_method\=hmac\&sign\=3ECA2FD80065FB779761F75F6D09D2C6 | Signature algorithm (Lazada Open Platform supports HMAC\_SHA256\) |
| \&Format\=XML / JSON | \&format\=json | LAZOP supports json format only |
| \&UserID\=a@b.c | \&app\_key\=4272\&partner\_id\=top\-apitools\&session\=61003091b65c3d405 | Identity:- APP：non \-\> app\_key - ISV：non \-\> partner\_id - user：UserEmail \-\> log in auth seesion |
| \&Limit\=100 | \&limit\=100 | Changed to lowercase. For example, OrderId will be changed to order\_id |
| \&Offset\=0 | \&offset\=0 | Changed to lowercase |
| Post body | \<xml\>...\</xml\> | \<xml\>...\</xml\> | No change |
| Success response | Refer to the sample below | Refer to the sample below | - Removed the "SuccessResponse", "Head", and "Body" tags - The "RequestId" is on the same level with the results |
| Error response | Refer to the sample below | Refer to the sample below | - Kept the "ErrorResponse" tag - Removed the "Head" tag |
| SDK | For Java | For Java, C\#, PHP, Ruby, and Python |  |

## Seller Center API

#### Request：

[`https://api.sellercenter.lazada.sg?Action=GetBrands&Format=json&Limit=2&Offset=0&Timestamp=2018-01-07T08%3A34%3A58%2B00%3A00&UserID=test%40xxx.com&Version=1.0&Signature=8d4bdfedb8c6164430de8405cf6998f9ffeb018e26344c6d0e1ea6e6f6621652`](https://api.sellercenter.lazada.co.th/?Action=GetBrands&Format=json&Limit=2&Offset=0&Timestamp=2018-01-07T08%3A34%3A58%2B00%3A00&UserID=dapeng.zdp%40alibaba-inc.com&Version=1.0&Signature=8d4bdfedb8c6164430de8405cf6998f9ffeb018e26344c6d0e1ea6e6f6621652)

#### Response：

```
{
    "SuccessResponse": {
        "Head": {
            "RequestId": "0bb606c315153141103028143eff59",
            "RequestAction": "GetBrands",
            "ResponseType": "Brands",
            "Timestamp": "2018-01-07T08:35:10+00:00"
        },
        "Body": {
            "Brands": [
                {
                    "BrandId": 3635,
                    "Name": "3Dconnexion",
                    "GlobalIdentifier": "3dconnexion"
                },
                {
                    "BrandId": 3636,
                    "Name": "3M",
                    "GlobalIdentifier": "3m"
                }
            ]
        }
    }
}

```

#### Error Response

```
{
    "ErrorResponse": {
        "Head": {
            "RequestId": "0bb606d615153145206778830e1230",
            "RequestAction": "GetBrands",
            "ErrorType": "Sender",
            "ErrorCode": 20,
            "ErrorMessage": "E020: %s Invalid Limit,limit MaxSize 1000"
        }
    }
}

```

## Lazada Open Platform API

#### Request:

[`http://api.lazada.sg/rest/brands/get?app_key=576214&offset=0&limit=100&sign_method=hmac&sign=3ECA2FD80065FB779761F75F6D09D2C6&timestamp=1517830235276`](http://api.lazada.sg/rest/brands/get?app_key=576214&offset=0&limit=100&sign_method=hmac&sign=3ECA2FD80065FB779761F75F6D09D2C6&timestamp=1517830235276)

#### Response

```
{
  "request_id": "cwxtlxt98lvy",
  "code": "0",
  "data": [
      {
        "brand_id": 161266,
        "global_identifier": "test_carmen",
        "name": "test carmen"
      },
      {
        "brand_id": 161267,
        "global_identifier": "2k_games",
        "name": "2K Games"
      }
    ]
}

```

#### Error Response

```
{
    "request_id": "cwxtly2mw54o",
    "code": "15",
    "type":"ISV|platform|ISP",
    "message": "Remote service error"
}

```

## API name mapping

Lazada Open Platform APIs are RESTful APIs. The following table shows the mapping of the API method name and the Lazada Open Platform API path.

| API | **API path** |
| --- | --- |
| GetBrands | [/brands/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.4b42266b96HkgB#/api?cid=5&path=/brands/get) |
| GetCategoryAttributes | [/category/attributes/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.4b42266b96HkgB#/api?cid=5&path=/category/attributes/get) |
| GetCategoryTree | [/category/tree/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/category/tree/get) |
| GetPayoutStatus | [/finance/payout/status/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=9&path=/finance/payout/status/get) |
| GetTransactionDetails | [/finance/transaction/detail/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=9&path=/finance/transaction/detail/get) |
| GetDocument | [/order/document/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/order/document/get) |
| GetFailureReasons | [/order/failure\_reason/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/order/failure_reason/get) |
| GetMultipleOrderItems | [/orders/items/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/orders/items/get) |
| GetOrder | [/order/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/order/get) |
| GetOrderItems | [/order/items/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/order/items/get) |
| GetOrders | [/orders/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/orders/get) |
| GetShipmentProviders | [/shipment/providers/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=6&path=/shipment/providers/get) |
| SetInvoiceNumber | [/order/invoice\_number/set](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/order/invoice_number/set) |
| SetStatusToCanceled | [/order/cancel](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/order/cancel) |
| SetStatusToPackedByMarketplace | [/order/pack](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/order/pack) |
| SetStatusToReadyToShip | [/order/rts](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=8&path=/order/rts) |
| CreateProduct | [/product/create](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/product/create) |
| GetProducts | [/products/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/products/get) |
| GetQcStatus | [/product/qc/status/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/product/qc/status/get) |
| GetResponse | [/image/response/get](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/image/response/get) |
| MigrateImage | [/image/migrate](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/image/migrate) |
| MigrateImages | [/images/migrate](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/images/migrate) |
| RemoveProduct | [/product/remove](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/product/remove) |
| SetImages | [/images/set](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/images/set) |
| UpdatePriceQuantity | [/product/price\_quantity/update](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/product/price_quantity/update) |
| UpdateProduct | [/product/update](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/product/update) |
| UploadImage | [/image/upload](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=5&path=/image/upload) |
| SellerUpdate | [/seller/update](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=2&path=/seller/update) |
| UserUpdate | [/user/update](https://open.lazada.com/doc/api.htm?spm=a2o9m.11193494.0.0.fef1266bJUa06b#/api?cid=2&path=/user/update) |

---

## API endpoint URLs

<a id="api-endpoint-urls-108065"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10400&docId=108065&lang=en_US>

Lazada Open Platform provides an online production environment for each Lazada venture. The data under the production environment are all true online data, providing limited times and authority of interface calling. The production environment shares data with the online system, and the true data of an online shop are directly influenced by the interface for writing class, so you must operate with caution.

The following table lists the URL of the production environment for each venture.

| **Venture** | **Server URL** |
| --- | --- |
| Singapore | <https://api.lazada.sg/rest> |
| Thailand | <https://api.lazada.co.th/rest> |
| Malaysia | <https://api.lazada.com.my/rest> |
| Vietnam | <https://api.lazada.vn/rest> |
| Philippines | <https://api.lazada.com.ph/rest> |
| Indonesia | <https://api.lazada.co.id/rest> |

---

## API calling process

<a id="api-calling-process-108136"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10400&docId=108136&lang=en_US>

Lazada Open Platform APIs are called through HTTP requests. You can call the API by using the platform provided SDK (recommended), or by assembling the request with a certain format according to the Lazada Open Platform protocols (only if no official SDK is provided for a programming language). This section introduces how to assemble HTTP requests to call the Lazada APIs.

API calls require data for input and return output as the responses. The general steps for calling an API through generating HTTP requests are as follows:  
1\. Populate parameters and values  
2\. Generate signature  
3\. Assemble HTTP requests  
4\. Initiate HTTP requests  
5\. Get HTTP responses  
6\. Interpret JSON/XML responses

Refer to the sections below for detailed information about the API calling process on Lazada Open Platform.

- [API endpoints URLs](https://open.lazada.com/apps/doc/doc?nodeId=10443&docId=108065)
- [Requests and responses](https://open.lazada.com/apps/doc/doc?nodeId=10448&docId=108066)
- [Calling parameters](https://open.lazada.com/apps/doc/doc?nodeId=10449&docId=108067)
- [Signature algorithm](https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068)
- [HTTP request sample](https://open.lazada.com/apps/doc/doc?nodeId=10451&docId=108069)

---

## Signature algorithm

<a id="signature-algorithm-108068"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10400&docId=108068&lang=en_US>

Lazada Open Platform verifies the identity of each API request, and the server will also verify whether the call parameters are valid. Therefore, each HTTP request must contain the signature information. The requests with invalid signature will be rejected.

Lazada Open Platform verifies the identity of the requests by the App Key and Secret that are assigned to your application. The App Secret is used to generate the signature string in the HTTP request URL and server\-side signature string. It must be kept strictly confidential.

If you compose HTTP request manually (instead of using the official SDK), you need to understand the following signature algorithm.

The process of generating the signature is as follows:

1. Sort all request parameters (including system and application parameters, but except the “sign” and parameters with byte array type) according to the parameter name in ASCII table. For example:

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLBefore sort: foo\=1, bar\=2, foo\_bar\=3, foobar\=4After sort: bar\=2, foo\=1, foo\_bar\=3, foobar\=41. Concatenate the sorted parameters and their values into a string. For example:

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLbar2foo1foo\_bar3foobar41. Add the API name in front of the concatenated string. For example, adding the API name “/test/api”:

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL/test/apibar2foo1foo\_bar3foobar41. Encode the concatenated string in UTF\-8 format and make a digest by the signature algorithm (using HMAC\_SHA256\). For example:

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLhmac\_sha256(/test/apibar2foo1foo\_bar3foobar4\)1. Convert the digest to hexadecimal format. For example:

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLhex("helloworld".getBytes("utf\-8")) \= "68656C6C6F776F726C64"  

**Sample code for JAVA**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL/\*\* \* Sign the API request with body. \*/ public static String signApiRequest(Map\<String, String\> params, String body, String appSecret, String signMethod, String apiName) throws IOException { // first: sort all text parameters String\[] keys \= params.keySet().toArray(new String\[0]); Arrays.sort(keys);  
 // second: connect all text parameters with key and value StringBuilder query \= new StringBuilder(); query.append(apiName); for (String key : keys) { String value \= params.get(key); if (areNotEmpty(key, value)) { query.append(key).append(value); } }  
 // third：put the body to the end if (body !\= null) { query.append(body); }  
 // next : sign the whole request byte\[] bytes \= null;  if(signMethod.equals(Constants.SIGN\_METHOD\_HMAC)) { bytes \= encryptWithHmac(query.toString(), appSecret); } else if(signMethod.equals(Constants.SIGN\_METHOD\_SHA256\)) { bytes \= encryptHMACSHA256(query.toString(), appSecret); }  
 // finally : transfer sign result from binary to upper hex string return byte2hex(bytes); }  
  private static byte\[] encryptHMACSHA256(String data, String secret) throws IOException { byte\[] bytes \= null; try { SecretKey secretKey \= new SecretKeySpec(secret.getBytes(Constants.CHARSET\_UTF8\), Constants.SIGN\_METHOD\_HMAC\_SHA256\); Mac mac \= Mac.getInstance(secretKey.getAlgorithm()); mac.init(secretKey); bytes \= mac.doFinal(data.getBytes(Constants.CHARSET\_UTF8\)); } catch (GeneralSecurityException gse) { throw new IOException(gse.toString()); } return bytes; }  
 /\*\* \* Transfer binary array to HEX string. \*/ public static String byte2hex(byte\[] bytes) { StringBuilder sign \= new StringBuilder(); for (int i \= 0; i \< bytes.length; i\+\+) { String hex \= Integer.toHexString(bytes\[i] \& 0xFF); if (hex.length() \=\= 1) { sign.append("0"); } sign.append(hex.toUpperCase()); } return sign.toString(); }  

**Sample code for C\#**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL public static string SignRequest(IDictionary\<string, string\> parameters, string body, string appSecret, string signMethod, string apiName) { // first : sort all key with asci order IDictionary\<string, string\> sortedParams \= new SortedDictionary\<string, string\>(parameters, StringComparer.Ordinal);  
 // second : contact all params with key order StringBuilder query \= new StringBuilder(); query.Append(apiName); foreach (KeyValuePair\<string, string\> kv in sortedParams) { if (!string.IsNullOrEmpty(kv.Key) \&\& !string.IsNullOrEmpty(kv.Value)) { query.Append(kv.Key).Append(kv.Value); } }  
 // third : add body to last if (!string.IsNullOrEmpty(body)) { query.Append(body); }  
 // next : sign the string byte\[] bytes \= null; if (signMethod.Equals(Constants.SIGN\_METHOD\_SHA256\)) { HMACSHA256 sha256 \= new HMACSHA256(Encoding.UTF8\.GetBytes(appSecret)); bytes \= sha256\.ComputeHash(Encoding.UTF8\.GetBytes(query.ToString())); }  
 // finally : transfer binary byte to hex string StringBuilder result \= new StringBuilder(); for (int i \= 0; i \< bytes.Length; i\+\+) { result.Append(bytes\[i].ToString("X2")); }  
 return result.ToString(); }  

**Sample code for PYTHON**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLdef sign(secret,api, parameters): \#\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\= \# @param secret \# @param parameters \#\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\= sort\_dict \= sorted(parameters)  parameters\_str \= "%s%s" % (api, str().join('%s%s' % (key, parameters\[key]) for key in sort\_dict))  
 h \= hmac.new(secret.encode(encoding\="utf\-8"), parameters\_str.encode(encoding\="utf\-8"), digestmod\=hashlib.sha256\)  
 return h.hexdigest().upper()For the signature sample codes in other programming languages, refer to the source code of the official SDK.

---

## Requests and responses

<a id="requests-and-responses-108066"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10400&docId=108066&lang=en_US>

Lazada Open Platform API supports both HTTP and HTTPS communication protocol. To ensure data security, it is recommended to make API requests using HTTPS protocol. 

While most APIs are called via GET, some calls that get additional request data are sent via POST. However, sometimes the data that need to be supplied are more than what can be transported in request parameters. In those cases, additional data is sent to the server using a POST request. The request body must be in XML format. All data (including parameter names and values) must be UTF8\-encoded.

Each HTTP request URL must include the path of an API. For example, the request for the “/order/get” API should be "[https://api.lazada.sg/rest/order/get"](https://api.lazada.sg/rest/order/get). The common parameters and business parameters are included in the request or sent via post.

All API calls return a response document, which indicates the status of the operation (either Success or Error) and optionally provides results and/or details related to the specified action. The response is in JSON format.

---

## Calling parameters

<a id="calling-parameters-108067"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10400&docId=108067&lang=en_US>

Calls to the API must include system parameters in addition to the parameters associated with the application. Different application specific parameters are needed for different specific APIs.

## System parameters

System parameters are required in the HTTP request of every API call, listed in the following table:

| **Name** | **Type** | **Mandatory**? | **Description** |
| --- | --- | --- | --- |
| app\_key | String | Yes | The App Key that is assigned to the application. |
| access\_token | String | Conditional | The seller authorization token, which is mandatory for the APIs that require seller authorization. |
| timestamp | String | Yes | Time when the request is sent, in UTC or digital format, like “2017\-11\-11T12:00:00Z or 1517886554000”. Note that the difference between the timestamp and UTC time should not exceed 7200 seconds. |
| sign\_method | String | Yes | The algorithm used to generate the signature. |
| sign | String | Yes | The cryptographic signature, authenticating the request. |

## Business parameters

In addition to the system parameters that must be included in the API call request, the business parameters for the request are also required. Refer to the API documentation for details about the business parameters of each API.

---

## HTTP request sample

<a id="http-request-sample-108069"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10400&docId=108069&lang=en_US>

Taking the GetOrder (/order/get) API call as example, the steps of assembling the HTTP request is as follows:

  

**Step 1\. Populate parameters and values**

Common parameters:

- app\_key \= “123456”
- access\_token \= “test”
- timestamp \= “1517820392000”
- sign\_method \= “sha256”

Business parameters:

- order\_id \= “1234”

  

**Step 2\. Sort all parameters and values according to the parameter name in ASCII table**

- access\_token \= “test”
- app\_key \= “123456”
- order\_id \= “1234”
- sign\_method \= “sha256”
- timestamp \= “1517820392000”

  

**Step 3\. Concatenate the sorted parameters and their values into a string**

```
access_tokentestapp_key123456order_id1234sign_methodsha256timestamp1517820392000

```

  

**Step 4\. Add the API name in front of the concatenated string**

```
/order/getaccess_tokentestapp_key123456order_id1234sign_methodsha256timestamp1517820392000

```

  

**Step 5\. Generate signature**  
Assuming that the App Secret is “helloworld”, the signature is:

```
hex(sha256(/order/getaccess_tokentestapp_key123456order_id1234sign_methodsha256timestamp1517820392000))=4190D32361CFB9581350222F345CB77F3B19F0E31D162316848A2C1FFD5FAB4A

```

  

**Step 6\. Assemble HTTP request**  
Encode all the parameters and values (with the “sign” parameter) using UTF\-8 format (the order of parameters can be arbitrary).

```
http://api.lazada.com/rest/order/get?app_key=123456&access_token=test&timestamp=1517820392000&sign_method=sha256&order_id=1234&sign=4190D32361CFB9581350222F345CB77F3B19F0E31D162316848A2C1FFD5FAB4A

```

---

