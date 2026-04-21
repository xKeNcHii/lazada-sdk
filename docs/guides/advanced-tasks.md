# Advanced Tasks

## Request sensitive data access

<a id="request-sensitive-data-access-108297"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10432&docId=108297&lang=en_US>

Lazada Open Platform provides a security framework to protect the sensitive business data of sellers. By default, these business data are masked according to security evaluation. Sensitive business data include:

- Product information, such as price, stock, and promotion details.
- Order and order item details
- Customer name and contact information
- Financial and transaction statements

  

To request access to the sensitive business data, you need to go through a review process for your application on Lazada DataMoat, a security module that is integrated with Lazada Open Platform. 

Take the following steps to request sensitive data access:  
1\. From the list of your applications, click **Manage** to open the overview page of your application.  

### Reference

For detailed introduction to functions and security review process of Lazada DataMoat, see [Lazada DataMoat Documentation](https://open.lazada.com/apps/doc/doc?nodeId=26165&docId=118077).

---

## Set IP whitelist

<a id="set-ip-whitelist-108134"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10432&docId=108134&lang=en_US>

The IP whitelist is a security policy that protects your application and seller data. You can choose to specify the IP address of the server that hosts your application. If the IP whitelist is enabled, API calls can only be initiated from the application hosted on the bound IP server. If no IP address is specified, the IP whitelist feature is disabled by default.

Take the following steps to enable the IP whitelist feature.  
1\. Click **Manage** in the App list to open the **App Overview** page.  
2\. In the **App Management** navigation panel, click **IP Whitelist**.  
3\. On the page that is open, enter the IP address of your hosting server in the field. Supported formats include “10\.10\.10\.\*” and “10\.10\.10\.0/24”.  
4\. Click **Submit**.

---

## API Explorer

<a id="api-explorer-108328"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10432&docId=108328&lang=en_US>

Lazada Open Platform provides an API testing tool named “API Explorer” for you to test the APIs on the platform. 

Take the following steps to start the API Explorer:  
1\. Open the **APP Console** and click **Manage** for your application.  
2\. On the **App Management** page, click **API Explorer** from the left navigation panel.  
3\. On the API Explorer page, enter the marketplace and API name, and specify the parameters to test APIs.

Please note that the API Explorer uses online data from the production environment.

## Parameter description

Description of the API Explorer parameters is as follows:

| **Name** | **Description** | **Sample value** |
| --- | --- | --- |
| Region | Name of the marketplace (6 Lazada Ventures). For details about the URL of the production environment for each venture, see [API endpoint URLs](https://open.lazada.com/apps/doc/doc?nodeId=10443&docId=108065). | Singapore |
| API Path | Path of the API to be tested. For the list of API path, see [API name mapping](https://open.lazada.com/apps/doc/doc?nodeId=10557&docId=108146). | /brands/get |
| HTTP Method | Most APIs are called via GET, some calls that get additional request data are sent via POST. | GET or POST |
| App Key | The unique identity of your application on Lazada Open Platform, which is generated when the application is created. | 100126 |
| Access Token | The token that is required for your application to access sensitive data of sellers. For details, see [Configure seller authorization](https://open.lazada.com/apps/doc/doc?nodeId=10777&docId=108260). |  |
| Business parameters | The business parameters for the API that is to be tested. |  |
| Request | When the parameters are specified, click the **Start Test** button, the request URL is generated and displayed in the **Request** field. | For the "/brands/get" API, the request URL can be:   ``` https://api.lazada.sg/rest/brands/get?offset=100&limit=1&app_key=100126&sign_method=hmac&timestamp=1520045034634&sign=0CBC5F17611DB5B3A9D66926A3D1C3CF ``` |
| Response | The API response body for the specified parameters. | For the "/brands/get" API, the response can be:   ``` {   "data": [     {       "name": "Cold Mountain",       "brand_id": 23980,       "global_identifier": "cold_mountain"     }   ],   "code": "0",   "request_id": "0be6fdce15200450346451004" } ``` |

---

## Deploy your application

<a id="deploy-your-application-108135"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10432&docId=108135&lang=en_US>

When your application development and test is completed, you can deploy your application online to the hosting environment.

Take the following steps to complete the deployment process:  
1\. From the list of your applications, click **Manage** to open the overview page of your application.  
2\. On the **App Overview** page, you can find the **App Status** field under the **Basic Information** section.  
3\. Click **Apply Online**.  
4\. Enter the description of your application for deploying it online in the **Reason** field of the **Apply** dialog.  
5\. (Optional) Attach a document file for the request as needed. The document can be the test reports of your application.  
6\. Click **OK**.

Once the online deployment request is approved, the status of your application is changed to **Online**. You can then deploy your application to the requested or planned hosting environment.

---

## Test your application

<a id="test-your-application-108444"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10432&docId=108444&lang=en_US>

# Test your application

After completing the configuration of your application, you can start testing your application with a Lazada seller account. You need a seller account to complete the seller authorization process, create SKUs and orders for testing purpose.

If you do not have test accounts, Lazada Open Platform provides some test accounts for you to test your application. Take the following steps to get a test account:

1\. Open the **APP Console** and click **Test Tools** \-\>**Test Account** \-\>**Loan New Account**.  
2\. On the**Test Account Application** page, select a country for the test account, enter your business requirements, and click Submit. A test account will be assigned.  
3\. Click the **Sandbox Test**\-\> **Test Case**, create an test orders, you can click**API Call** and test API.

**Important**:  
During API testing, in a sandbox environment,  
You can click "Get Token " to generate access token directly.

When you complete testing your application with the test account, you can release it on the Test Account \-\>Release.

**Note** :  
In order to successfully complete the testing of your application, you should make more than 1000 calls to Lazada platform daily with a success rate of at least 95%, for a period of two weeks. You will not be able to reply your application without sufficient test API call record.

---

## Monitor application data

<a id="monitor-application-data-108061"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10432&docId=108061&lang=en_US>

After the application is published online, you can monitor the statistics of API calls initiated by your application through the **Data Dashboard** page.

The **Data Dashboard** provides statistics of the following categories:

  

**App Statistics** \- API calling statistics by region within a period

- Date
- Region
- Total API calls by the application
- Total successful calls
- Total failed calls
- Average QPS (queries per second)

  

**Seller Statistics** \- API calling statistics by region and sellers within a period

- Date
- Region
- Seller
- Total API calls by the seller
- Average QPS (queries per second)

  

**Error Code Statistics** \- Error codes by API and region within a period

- Region
- API name
- Error type
- Error code
- Error message
- Total number of each error

---

