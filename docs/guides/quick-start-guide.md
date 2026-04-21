# Quick Start Guide

## Getting started

<a id="getting-started-108130"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=108130&lang=en_US>

If you are new to Lazada Open Platform, this guide would help you step by step how to onboard the platform, start the development of your application with Lazada API, deploy your application online, and share your application with Lazada sellers.

1. **[Become a developer](https://open.lazada.com/apps/doc/doc?nodeId=10396&docId=108001)** \- Register a UAC (unified account center) account and sign up as a Lazada developer.
2. **[Register your application](https://open.lazada.com/apps/doc/doc?nodeId=10398&docId=108002)** in one of the application categories \- Submit the request and Lazada admins will review and approve your request.
3. **[Retrieve App Key and App Secret](https://open.lazada.com/apps/doc/doc?nodeId=10433&docId=108055)** of your application \- The unique identity of your application on the Lazada Open Platform.
4. **[Request API permission](https://open.lazada.com/apps/doc/doc?nodeId=10535&docId=108131)** for your application, so that your application can initiate calls to Lazada APIs.
5. **[Start development of your application](https://open.lazada.com/apps/doc/doc?nodeId=10536&docId=108132)** \- Learn how to interact with Lazada API. You could find more technical details from the Developer’s Guide section.

  

You may also be interested in the following topics:

1. [Test your application](https://open.lazada.com/apps/doc/doc?nodeId=11102&docId=108444) \- Request or create test accounts for your application
2. [Configure seller authorization](https://open.lazada.com/apps/doc/doc?nodeId=10777&docId=108260) \- Manage a list of sellers who can authorize your application to access their business data in Lazada marketplace
3. [Call API with official SDK](https://open.lazada.com/apps/doc/doc?nodeId=10442&docId=108064) \- Download official SDK for multiple programming languages
4. [Call API with HTTP requests](https://open.lazada.com/apps/doc/doc?nodeId=10540&docId=108136) \- Instructions on how to assemble HTTP requests to call API
5. [API sample codes](https://open.lazada.com/apps/doc/doc?nodeId=10541&docId=108137) \- JAVA, .Net, and PHP sample codes for calling Lazada API

Official DingTalk group:

  

Local store API Q\&A

\[Official Q\&A] Lazada Open Platform:24655026315

\[Official Q\&A 2nd] Lazada Open Platform:116000006208

  

Crossborder store API Q\&A

1群\-Lazada开放平台API \- 跨境卖家/服务商官方技术支持:21909623

2群\-Lazada开放平台API \- 跨境卖家/服务商官方技术支持:21991711

LazGlobal (non\-CN mainland) API Support Group:31545516

Note: Please note “API issue” in your request to join.

---

## Registration and Authorization process for newly registered ISVs

<a id="registration-and-authorization-process-for-newly-registered-isvs-121098"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=121098&lang=en_US>

## 1\. First register an open platform account

### 1\.1 Registration link

[https://open.lazada.com/apps/user/register?spm\=a1zq7z.27197301\.login\_form.1\.1db47c73kmujqv](https://open.lazada.com/apps/user/register?spm=a1zq7z.27197301.login_form.1.1db47c73kmujqv)

### 1\.2 Precautions for account registration

#### 1\.2\.1 Registered Email and Password Conditions

a. The password needs English\+number\+symbol, and the symbol cannot use "!" "\<" 、"\>"；

b. The registered mailbox should not have a "\+".

![](https://tida.alicdn.com/oss_1668756768989_null_eGLhAoaM)

#### 1\.2\.2 After registration, you need to fill in profile information first, and wait for review after submission

![](https://tida.alicdn.com/oss_1668756793006_null_XDgCybaC)

#### 1\.2\.3 After the profile information is approved, the app can be created

a. There are two steps to create an app.

 First, click Apply and wait for the approval before clicking Create App. After the approval, an app in test status will be automatically obtained; 

Step 2: Click Create APP.

![](https://tida.alicdn.com/oss_1668756813338_null_v0InGDZp)

b. It is recommended to select ERP System or Seller in house APP. Their differences are as follows:

The number of authorized sellers is different: the default number of authorized sellers in the ERP system is 300, and can be increased according to the needs of the project;

The number of authorized sellers of the Seller in house APP is 20 by default, and the maximum number is 60;

Different authorization methods:

ERP System: for users who do not need to add white list of sellers;

Seller in house APP: for sellers who need to add white list.

You can find more details below

[https://open.lazada.com/apps/community/detail?id\=208](https://open.lazada.com/apps/community/detail?id=208)

![](https://tida.alicdn.com/oss_1668756834045_null_8Z4oR8RI)

c. If the app of type seller in house  is not whitelisted, the following error messages will appear

![](https://tida.alicdn.com/oss_1668756849213_null_ACjjiIap)

#### 1\.2\.4 The newly created app is in test status

a. The APP is in the test status: the maximum call amount is ten thousand per days; The validity of the token is 7 days, and the validity of the refresh token is 14 days;

b. Online status: the maximum call volume is 10 million per day; The validity of the token is 30 days, and the validity of the refresh token is 180 days;

If you can ensure that the success rate of app calls is above 85%, you can apply for the app to go online.

![](https://tida.alicdn.com/oss_1668756867050_null_xsmKzq90)

![](https://tida.alicdn.com/oss_1668756879347_null_KbiU03mp)

C.offline: If you want to Offine the app, you can click manage\>Apply offine on the app console

![](https://tida.alicdn.com/oss_1668756893418_null_Me1AmmNp)

d. Delete: If you want to delete an app, you can only delete it in test status.

### 1\.2\.5 Retrieve App Key and App Secret

App Key is the unique identity of an application on Lazada Open Platform. The App Key is one of the parameters that must be included in the request of API calls, and the application will be identified with the App Key by Lazada Open Platform.

App Secret is the key that is assigned to an application by Lazada Open Platform, which ensures the security and reliability of the application source. You must keep the App Secret properly and should not share it with any third party.

Once your application is registered, the App Key and App Secret are assigned to the application automatically. You can view the App Key and App Secret or reset the App Key on the application overview page.

1\. Open the home page of the open platform, click **App Console**, and enter **App Management.**  
2\. From the list of your applications, click **Manage** to open the overview page of an application.  
3\. Under the **Advanced Information** section, click **View** to view the App Secret of your application.  
4\. Click **Reset** to reset the App Secret of your application. For the **Old Secret Expires In** field, select the time (in hours) for the old App Secret to expire.After resetting the App Secret, you must update the related information in your application.

![](https://tida.alicdn.com/oss_1668756972069_null_FLY6ZM3h)

![](https://tida.alicdn.com/oss_1668757024311_null_uY4XWgm1)

![](https://tida.alicdn.com/oss_1668757000158_null_z47BI8KV)

## 2\. app authorization

### 2\.1 Seller authorization introduction

[https://open.lazada.com/apps/doc/doc?nodeId\=10777\&docId\=108260](https://open.lazada.com/apps/doc/doc?nodeId=10777&docId=108260)

#### 2\.1\.1 Concatenate authorization URL

Sample link for authorization:

[https://auth.lazada.com/oauth/authorize?response\_type\=code\&force\_auth\=true\&redirect\_uri\=${app](https://auth.lazada.com/oauth/authorize?response_type=code&force_auth=true&redirect_uri=${app) call back url}\&client\_id\=${appkey}

Demo:

Authorization links need to be spliced by yourself. Using the above example of authorization links, replace "${appkey}" with app key, and replace "${app call back url}" with callback URL

[https://auth.lazada.com/oauth/authorize?response\_type\=code\&force\_auth\=true\&redirect\_uri\=https://www.lazada.com\&client\_id\=102802](https://auth.lazada.com/oauth/authorize?response_type=code&force_auth=true&redirect_uri=https://www.lazada.com&client_id=102802)

![](https://tida.alicdn.com/oss_1668757055132_null_YHHcqAqT)

![](https://tida.alicdn.com/oss_1668757067178_null_UGASHB5y)

#### 2\.1\.2 uuid optional

If the **uuid** is not used during authorization, then the next step to generate access\_ token, no uuid needs to be passed in the request parameters

[https://auth.lazada.com/oauth/authorize?response\_type\=code\&force\_auth\=true\&redirect\_uri\=https://www.lazada.com\&client\_id\=102802\&**uuid\=123**](https://auth.lazada.com/oauth/authorize?response_type=code&force_auth=true&redirect_uri=https://www.lazada.com&client_id=102802&uuid=123)

#### 2\.1\.4 Cross border authorization description

a. The authorization page Crossborder represents the authorized cross\-border stores, and the tokens can call the APIs of six sites;  
b. When you select Crossborder authorization, you need to ensure that stores in the six sub sites can log in; Otherwise, you can only use single site authorization.

![](https://tida.alicdn.com/oss_1668757102950_null_mqOVe1nS)

#### 2\.1\.5 Generate Token with Generated Code

![](https://tida.alicdn.com/oss_1668757123667_null_XwacWa4i)

Note: The code can only be used once. You need to call the [GenerateAccessToken](https://open.lazada.com/apps/doc/api?path=%2Fauth%2Ftoken%2Fcreate) API to generate a token within half an hour of code generation

The following is an example of a test tool:

a. Click API Testing Tool

![](https://tida.alicdn.com/oss_1668757147197_null_H8WpeICx)

b.For users using the test tool, Malaysia can be selected as the region. No matter which country is selected when generating the authorization code in the previous step, Malaysia is selected as the region 

Select Malaysia as the region (because there is only one service address of the GenerateAccessToken API <https://auth.lazada.com/rest> ）

 

![](https://tida.alicdn.com/oss_1668757169596_null_wKWDL5E6)

c. Pass in the code and uuid (if the uuid is not set in the authorization link, it will not should be filled in, otherwise an error will be reported)

![](https://tida.alicdn.com/oss_1668757187160_null_QJQWR2YB)

d. Response Field Description

Country: on behalf of the authorized country;

refresh\_ expires\_ In: The expiration time of "refresh\_token", in seconds (it will be refreshed when refreshing). If "refresh\_token" expires, you need to re authorize the generation of a new token;

expires\_ In: "access\_token" expiration time, in seconds (when the token is refreshed, it will not be refreshed).

When the "access\_token" fails, you can call the RefreshAccessToken API to refresh the token (it is recommended to refresh the token 48 hours in advance)

![](https://tida.alicdn.com/oss_1668757204653_null_omsHEuzA)

---

## Become a developer

<a id="become-a-developer-108001"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=108001&lang=en_US>

If you are a third party developer or Lazada seller, and you want to develop applications that integrate with the Lazada systems via APIs, you can register as a developer on Lazada Open Platform. To get started, you need to register a developer account and sign up the developer agreement on the platform.

## Register a developer account

Take the following steps to register a developer account on Lazada Open Platform:  
1\. Open the Lazada Open Platform home page at [<https://open.lazada.com/>](https://open.lazada.com/), and click **Create Account**.  
2\. On the page that is open, enter your email ID and the verification code, and then click the **Send email** button for verification.  
3\. Open the verification email in your mailbox, click the verification link to open the account registration page. Note that the verification email might be in the junk mailbox.  
4\. On the account registration page, enter your password, read the [Lazada Open Platform Developer Agreement](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/agreements/LAZOP_developer_agreement.htm), and accept it as appropriate.  
5\. Click **Complete**.

Your developer account is created successfully, and you can log in Lazada Open Platform to start your application development.

After logging in Lazada Open Platform, complete your profile information and upload related documents in the **User ID** \-\> **Profile** menu. Your profile information will be reviewed and approved by Lazada operations team. Approved profile information and documents are required for deploying your application online. 

### Next step:

[Register an application](https://open.lazada.com/apps/doc/doc?nodeId=10398&docId=108002)

---

## Register an application

<a id="register-an-application-108002"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=108002&lang=en_US>

After creating your developer account, you can start registering your applicationon Lazada Open Platform.

## Apply for application category

Application category is used for initializing data configuration when the application is created. It is a template that defines the APP’s authorization strategy, authorization duration, API group permission, API call limit strategy and other information. An application can belong to only one application category.

Currently, Lazada Open Platform provides the following application categories:

- Seller In\-house APP \- Application developed by Lazada sellers for own usage
- ERP System \- Integrated system for the management of core business processes
- Account Management \- Application for account management and services
- Content Management \- Application for product content management
- Business Intelligence \- Application for business intelligence
- Accounting and Finance \- Application for accounting and finance management
- Logistics \- Application for logistics management
- Marketing \- Application for marketing and promotion management
- Customer Service \- Application for customer service management

  

Take the following steps to apply for the application category:  
1\. Log in Lazada Open Platform and open the APP Console.  

The status of the application category is changed to **Pending**. The request of the application category will be reviewed and approved by the admin. If you cannot find a matching category for your application, contact the Lazada operations team to apply for a new category. Note that you can request to create only 1 application for a category.

## Submit application details

Once the application category request is approved, the status of the application category is changed to **Active**. You can then submit detailed information about your application.  
1\. On the requested category page, click the **Create App** button.  
2\. Enter information about your application, including the application name, callback URL (the redirect URL used for seller authorization), and the application logo (Optional. If no logo file is provided, the default logo will be used).  
3\. Click the **Submit** button.

When the application is created successfully, click the **APP Overview** button to view the list of your applications, including the App name, App Key, App category, and status of each application. 

### Next steps

[Retrieve App Key and App Secret](https://open.lazada.com/apps/doc/doc?nodeId=10433&docId=108055)  
[Request API permission](https://open.lazada.com/apps/doc/doc?nodeId=10535&docId=108131)  
[Start development](https://open.lazada.com/apps/doc/doc?nodeId=10536&docId=108132)

---

## Retrieve App Key and App Secret

<a id="retrieve-app-key-and-app-secret-108055"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=108055&lang=en_US>

App Key is the unique identity of an application on Lazada Open Platform. The App Key is one of the parameters that must be included in the request of API calls, and the application will be identified with the App Key by Lazada Open Platform.

App Secret is the key that is assigned to an application by Lazada Open Platform, which ensures the security and reliability of the application source. You must keep the App Secret properly and should not share it with any third party.

Once your application is registered, the App Key and App Secret are assigned to the application automatically. You can view the App Key and App Secret or reset the App Key on the application overview page.  
1\. From the list of your applications, click **Manage** to open the overview page of an application.  
2\. On the **App Overview** page, the App Key is displayed directly.  
3\. Under the **Basic Information** section, click **View** to view the App Secret of your application.  
4\. Click **Reset** to reset the App Secret of your application. For the **Old Secret Expires In** field, select the time (in hours) for the old App Secret to expire.

After resetting the App Secret, you must update the related information in your application.

---

## Request API permission

<a id="request-api-permission-108131"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=108131&lang=en_US>

On Lazada Open Platform, an API permission group defines a collection of APIs that can be invoked by specific applications. Without API permission, the API calls initiated by the application will be denied by the gateway.

An application category can contain multiple API permission groups. When an application is created, some API permission groups are granted immediately, but others need to be applied for separately. The status of the API permission groups is as follows:

- **Active** \- The API permission group is available for the application by default or has been applied.
- **Inactive** \- The API permission group needs to be applied for separately.

  

Take the following steps to request API permission for your application:  
1\. Open the **App Overview** page and navigate to the **API Permission Group** section.

---

## Seller authorization introduction

<a id="seller-authorization-introduction-108260"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=108260&lang=en_US>

If your application needs to access the business data of Lazada sellers (like product and order information) through Lazada Open Platform, you need to get the authorization from sellers, that is, the “Access Token” required for accessing the sellers’ data. You need to guide the sellers to complete the flow of “using Lazada seller account to log in and authorize the application”. This process uses the international OAuth2\.0 standard protocol for user authentication and authorization.

Lazada Open Platform operates on a “code\-for\-token” model and employs three distinct authorization policies.

Note: Before attempting the authorization process, please ensure you have completed the creation of your app.

# **Service address**

| Country | Service address |
| --- | --- |
| all countries (SG/MY/TH/VN/ID/PH) | https://auth.lazada.com/ |

  

# **Authorization URL**

https://auth.lazada.com/oauth/authorize?response\_type\=code\&force\_auth\=true\&redirect\_uri\=${app call back url}\&client\_id\=${appkey}

This link is used to initiate the seller authorization process.

Developers need to replace “${app callback url}” in the URL with the callback address used to receive the authorization code. After successful authorization, the seller's browser will be redirected and access your callback address using the GET method. Please note that this callback address must exactly match the callback address configured in your app. Otherwise, the error “Redirect uri does not match the callback URL of the app” will occur.

Then, developers need to replace “${appkey}” with the APP KEY of the app you created. Ensure that the APP KEY you replace matches the callback URL; otherwise, the error “Redirect uri does not match the callback URL of the APP” will occur.

## **Parameters**

| Parameter name | Required | Demo | Description |
| --- | --- | --- | --- |
| client\_id | Yes | 101406 | The APPKEY created in the [APP console](https://isvconsole.lazada.com/apps/console/apps). |
| redirect\_uri | Yes | https://lazada.com | This redirect URL is used to receive the authorization code. The redirect will be initiated after the seller completes the authorization process. |
| response\_type | Yes | code | Authorization type, fixed value “code”. |
| state | No | Custom value,123456 | This field is a custom field. Its value will be sent to the redirect URL along with the authorization code upon successful authorization. |

  

# **Overview of Authorization Policies**

The open platform offers three distinct authorization strategies, each adding an additional step to the standard “code for token” process.

After creating your app, navigate to the App Console \-\> Development \-\> App Management page. Click “Manage” to access the details page for further information.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (15)_1772502765397__DDkA.png)

  

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (16)_1772502808754__BriC.png)

## **Allow binding user to authorize（search key: ABA）**

This authorization policy typically appears in apps created by accounts with a partner type of “Self\-Developed.” This policy indicates that the developer's app is exclusively for use within the enterprise/group's internal Lazada stores or designated partner stores (not exceeding 60\), subject to whitelist restrictions.

Please use your browser's search function (CTRL \+ F) to search for “ABA” to view the complete authorization process.

## **Allow login user to authorize（search key: ALA）**

This authorization policy typically appears in apps created by developer accounts with a business\-to\-business partner type. This policy indicates that your app can proceed directly with the seller authorization process without any prerequisites.

Please use your browser's search function (CTRL \+ F) to search for “ALA” to view the complete authorization process.

Note: Under the current policy (12\.25\.2025\), this authorization policy will only appear in apps in test status. Once your app applies for release, this policy may be updated to “Allow subscribers to authorize” and will not support rollback.

## **Allow subscribers to authorize（search key: ASA）**

This authorization policy typically appears after an app created by a developer account with a “Enterprise Commercial” partner type goes online. This policy indicates that your app has been switched to subscription authorization. Details are as follows:

**Local stores**: Sellers must subscribe to the corresponding service for the app in the Lazada Service Market before completing authorization.

**Cross\-border stores**: Please refer to the authorization process for “Allow login user to authorize”. Currently, the Lazada Service Marketplace has not yet enabled subscription functionality for cross\-border stores.

Please use your browser's search function (CTRL \+ F) to search for “ASA” to view the complete authorization process.

# Basic Authorization Process (ALA/ASA \- Cross\-Border Sellers Only)

This process will introduce the basic authorization flow (corresponding to the policy “Allow login user to authorize”). The other two authorization policies are based on this flow with additional prerequisite configuration requirements.

## Authorization Flowchart

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_______________________________________________________________________Seller authorization introduction - 英文-流程图_1772502919980__TzyZ.jpg)

## **Authorization Process Example**

1. Applicable Authorization Policies: Allow login user to authorize, Allow subscribers to authorize (Cross\-border sellers only)
2. Sample test information: APP KEY \- 100132 Callback URL \- https://www.lazada.com

### **1、**Visit the authorized URL

Replace the placeholder in the authorization URL with the APP information from the test data as shown in the example. This will generate the following URL, which can then be accessed:

https://auth.lazada.com/oauth/authorize?response\_type\=code\&force\_auth\=true\&redirect\_uri\=https://www.lazada.com\&client\_id\=100132

### Select Store Site

After accessing the first\-step concatenated authorization URL, the seller will be directed to the authorization page.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (17)_1772503002231__aWPV.png)

On the authorization page, sellers must select the appropriate Site based on their store type and country, then click "Use Seller Login".

Local stores or cross\-border stores wishing to authorize only a single site can choose from the following options: Singapore, Malaysia, Indonesia, Philippines, Thailand, Vietnam;

For cross\-border stores seeking a single authorization applicable to all sites, select Crossborder;

Choice sellers, please select these options: Lazada Choice \- SG\\MY\\ID\\PH\\TH\\VN

### **2、**Seller Center Login

After clicking “User Seller Login” in the second step, the system will redirect to the corresponding seller center login page based on the seller's selected site. Sellers must complete the login process on this page. Upon successful login, the page will redirect again to the authorization page.

Note: 

QR code login is currently unavailable for authorization.

If sellers cannot log in on this page, they should verify that their password is correct or reset it. The login verification on this page is unrelated to the Open Platform.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (18)_1772503029396__8MIY.png)

### **3、**Complete the authorization

After completing the third step of logging in, the seller's browser will be redirected back to the authorization page. Please have the seller verify that the email address listed under My Account matches the login email for the store requiring authorization.

If the account is incorrect, please have the seller click Switch to return to Seller Center and log out there, or open a new incognito mode tab and restart the authorization process from the beginning.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (19)_1772503066899__CeiO.png)

### **4、**Receive the authorization code and generate an access token

After the seller clicks “Authorize” on the fourth step page, their browser will be redirected to the URL specified in the redirect\_uri field, along with the code parameter.

https://www.lazada.com/?code\=0\_100132\_Cl3VmMr6W6YC6cx6swxFAZ0l825

After receiving the authorization code, developers must call the [GenerateAccessToken API](https://open.lazada.com/apps/doc/api?path=%2Fauth%2Ftoken%2Fcreate) within half an hour to exchange the authorization code for an Access Token used to call the Lazada Open API.

#### **Request Demo**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQLhttps://auth.lazada.com/rest/auth/token/create?code\=0\_100132\_Cl3VmMr6W6YC6cx6swxFAZ0l825\&app\_key\=100132\&sign\_method\=sha256\&timestamp\=1767595695482\&sign\=3F178EC4420269D66298A662551246D7669E84314A38E00D278A584EBF5EA079#### **Response Demo**

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL{ "access\_token": "50000201f12dgccvfLzTimgL1c1c4dd8h0irs9DWCORDQqXRlsvWgpDt5x4Fwy", "country": "sg", "refresh\_token": "50001201e12pmXdgResRzjif112e3a46Kl0eqskC0iRRhLQXprmWX5QElsqQOK", "account\_platform": "seller\_center", "refresh\_expires\_in": 4320000, "country\_user\_info": \[ { "country": "sg", "user\_id": "1152180742", "seller\_id": "1152180742", "short\_code": "SGLYT0OS" } ], "expires\_in": 864000, "account": "LzdOp\_SG\_test@163\.com", "code": "0", "request\_id": "212a6a5a17675956955215662", "\_trace\_id\_": "213bd36917675956955192683e1e39"}### **5、**Manage Access Token and Refresh Token

After successfully calling the GenerateAccessToken API, developers will receive the following response information:

| Parameter name | Demo | Enum | Description |
| --- | --- | --- | --- |
| access\_token | 50000201f12dgccvfLzTimgL1c1c4dd8h0irs9DWCORDQqXRlsvWgpDt5x4Fwy | N/A | The token used to call the Lazada Open API; each access token corresponds to a single store and can only query or update information for that specific store.Note: Access tokens generated by different APPKEYS cannot be used interchangeably. |
| expires\_in | 864000 | N/A | The number of seconds remaining until the current access token expires. For example, 86,400 seconds equates to 10 days. |
| refresh\_token | 50001201e12pmXdgResRzjif112e3a46Kl0eqskC0iRRhLQXprmWX5QElsqQOK | N/A | When the corresponding access token expires, developers can use the refresh token to call the [RefreshAccessToken API](https://open.lazada.com/apps/doc/api?path=%2Fauth%2Ftoken%2Frefresh) to obtain a new access token. |
| refresh\_expires\_in | 4320000 | N/A | The remaining seconds until the current refresh token expires. For example, 4320000 seconds equates to 50 days. After 50 days, the refresh token will expire, and a new refresh token can only be obtained by completing the authorization process again.Note: The refresh token cannot be refreshed using the RefreshAccessToken API. |
| country | sg | sg: Singaporemy: Malaysiaph: Philippinesth: Thailandid: Indonesiavn: Vietnamcb: Cross\-border | The store country type selected by the seller during authorization. |
| account\_platform | seller\_center | seller\_center | N/A |
| country\_user\_info | object arry | N/A | Specific details of the authorized seller store, including the countries where the access token granted in this authorization is valid, the seller ID, and the seller short code.Note: Cross\-border sellers may have stores in multiple countries. If a cross\-border seller selects “Cross\-border” during authorization, the generated access token can be used across all country stores under that object without needing to generate it multiple times. |
| country\_user\_info.country | sg | sg: Singaporemy: Malaysiaph: Philippinesth: Thailandid: Indonesiavn: Vietnam | The country corresponding to the current object's store. |
| country\_user\_info.user\_id | 1152180742 | N/A | Authorized account ID for the current country store (not visible in Seller Center). |
| country\_user\_info.seller\_id | 1152180742 | N/A | The seller ID of the store in the current country. |
| country\_user\_info.short\_code | SGLYT0OS | N/A | The store's short code in the current country. |
| account | LzdOp\_SG\_test@163\.com | N/A | The email address used by the seller during authorization. |

Developers must retain the above information and use the [RefreshAccessToken API](https://open.lazada.com/apps/doc/api?path=%2Fauth%2Ftoken%2Frefresh) to obtain a new access token before the old access token expires.

Remind sellers to repeat the authorization process before the old refresh\_token expires to obtain a new refresh\_token and access token.

# Seller Authorization Whitelist Type App Authorization Process (ABA)

## **1、**Add Authorized Seller Whitelist

This seller authorization process applies to apps created by developer accounts where the partner type was selected as “Enterprise/Individual Self\-Developed” during basic information setup. Apps created by such developer accounts predominantly follow the “Allow binding user to authorize” authorization strategy. An “Authorized Seller Whitelist” option will be added at the very bottom of the app's details page in the [App Console](https://isvconsole.lazada.com/apps/console/apps).

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (21)_1772503228598__DqmY.png)

Click “Add” to enter the addition module and fill in the seller's relevant information.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (22)_1772503247564__TjXS.png)

1. Seller ID

Please enter the ID found in the “short code” field at the top left of the Seller Center \-\> Settings page.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (23)_1772503268517__Ygpq.png)

1. Seller Email \& Password

Please enter the email address and password used to log in to the corresponding store in Seller Center.

1. Country

For cross\-border stores, please select China or add all six sites to the whitelist. Non\-cross\-border stores should select the option corresponding to their store's country of origin.

## **2、**Complete the authorization process

After adding the seller to the whitelist, the seller can access the app's authorization URL and complete the authorization process following the basic authorization flow.

  

# Subscription Authorization App Authorization Process**（ASA）**

This authorization type will only appear in online apps created by developer accounts with the partner type set to Enterprise Commercial.

## Notes

1. The authorization policy for apps in testing state created by enterprises commercial developer accounts is "Allow login user to authorize", which will only be updated to "Allow subscribers to authorize" after the app goes online;
2. After the app is updated to the online status, please refer to Step 4 of [this document](https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=121773) to begin publishing the app on the service market.
3. For the authorization process of cross\-border stores, please refer to the “Basic Authorization Process.” Subscription authorization is currently only available to local sellers.
4. Refresh tokens generated from subscription authorizations by local sellers are unusable because the access token's validity period will be tied to the subscription's validity period in the service marketplace, rather than expiring after a fixed time.

## Subscription Process

### **1、**Visit the Service Market Subscription Page

After developers complete the qualification verification for the service marketplace and successfully publish their service offerings in the corresponding countries, they can access each country's service marketplace and conduct searches.

#### Service Market URL

Vietnam

<https://marketplace.lazada.vn>

Singapore

<https://marketplace.lazada.sg>

Philippines

<https://marketplace.lazada.com.ph>

Malaysia

<https://marketplace.lazada.com.my>

Thailand

<https://marketplace.lazada.co.th>

Indonesia

<https://marketplace.lazada.co.id>

### **2、**Search and enter the details page to subscribe

After entering the page, select the service version and validity period, then click “Authorized use” or “Buy it now” to subscribe.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (24)_1772503310560__OlDI.png)

  

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (25)_1772503326356__s6PR.png)

Click “Confirm” to complete subscription.

Note: If the seller has selected the paid version, payment must be made before subscribing.

### **3、**Complete the authorization

After clicking “Confirm” or completing payment, you will be directed to this page. Sellers can follow the prompts here to click “Authorized use of services” and proceed to the service page for authorization.

Alternatively, authorization can be completed through the basic authorization process.

Note: If a local store seller attempts the basic authorization process without subscribing, they will be intercepted at the final authorization step and redirected to your service subscription page. If your app has not yet been listed on the service marketplace, an error will occur.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (26)_1772503349467__gZm2.png)

# **FAQ**

**Q1、**After logging into Seller Center, a “Missing parameter” error appears.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (27)_1772503478074__Z1k8.png)

A1、This error typically occurs in the browser during the initial authorization process. If this error appears, please instruct the seller not to close the browser. Instead, have them revisit the authorization link “auth.lazada......” to complete the authorization process by re\-authorizing.

**Q2、**Encountered a seller whitelist error during authorization.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (28)_1772503499481__5tbG.png)

A2、This error occurs because the currently authorized seller store is not included in the corresponding app's seller whitelist. Please navigate to the App Management page in the App Console and add your seller to the authorized seller whitelist at the bottom of the page.

**Q3、**After authorizing the login in Seller Center, the system did not return to the authorization page but instead proceeded directly to Seller Center.

A3、This issue typically occurs when sellers have already logged into Seller Center before authorization or used QR code scanning instead of credentials for login. Therefore, the quickest solution is to have the seller open a new incognito browser window and complete authorization using their account credentials.

**Q4、Redirect uri does not match the callback url of the APP**

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_image (29)_1772503521056__SMPR.png)

﻿﻿﻿﻿A4、This error occurs because the redirect\_uri in the authorization link does not match the callback URL configured for the app in the client\_id. Correcting the redirect\_uri will resolve this issue.

---

## Configure seller authorization

<a id="configure-seller-authorization-108056"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=108056&lang=en_US>

If your application needs to access Lazada sellers’ business data, your application needs to get the authorization from sellers, and you need to guide them to complete the flow of “using Lazada seller account to log in and authorize”.

## Authorization strategy

Lazada Open Platform uses OAuth 2\.0 protocol for user authentication and provides different authorization strategies for different application categories, which are pre\-defined for the application category that your application belongs to. You can view the detailed authorization strategy for your application on the top section of the **Auth Management** page, including the following information:

- Authorized Policy: The overall strategy for your application
- Access Token Duration: The validity duration of the access token for your application
- Refresh Token Duration: The validity duration of the refresh token (for details, refer to the [OAuth Documentation](https://auth0.com/learn/refresh-tokens/))
- Authorized Page: Whether the authorization page is displayed (Show Auth Page by default)
- Authorized Agreement: The OAuth2\.0 authorization type
- Authorized User Limit: The maximum number of sellers who can authorize the application

  

**Important**  
The following 3 kinds of authorization policy are applied to different APP categories:

- **Allow subscribers to authorize**: This authorization policy applies to the “ERP Syetem” 、 “ERP IM Chat” and some other commercial categories. For this policy, you need to first release your app to the Lazada Service MarketPlace, and sellers need to order before authorization. The authorization duration will be the same as the subscription duration. For example, if the seller orders for one month, the authorization duration is one month.
- **Allow binding user to authorize**: This authorization policy applies to the “Seller In\-house APP” 、 “In\-house IM Chat” categories. For this policy, only sellers who have been configured in the “Authorized Seller Whitelist” field can authorize your application. Refer to the section below for details.The number of authorized users is limited to 30\.
- **Allow login users to authorize**: This authorization policy applies to other categories such as “Lazrive”. For this policy, any Lazada sellers can authorize your application, so you do not need to configure the seller whitelist. You can just send your authorization URL to your sellers for authorization.

## Specify seller whitelist

If you develop an application for specific sellers, you can limit the authorization scope by specifying the seller whitelist on Lazada Open Platform, then only these sellers can authorize your application to access their business data in Lazada marketplace. After your application is deployed online, you need to provide the authorization URL to the sellers. When the sellers log in your application for the first time, they will be prompted to complete the authorization process.

Take the following steps to specify the short code of sellers who can authorize your application to access their business data.  
1\. Open the **APP Console** and click **App Management** \-\> **Auth Management.**  
2\. In the **Authorization Information** section, view the description of the authorization strategy for your application.  
3\. In the **Authorized Seller Whitelist** section, enter the seller account in the authorization field. Multiple seller accounts can be separated by semicolons.  
4\. Click **Submit**.

Note: If you are a third party developer and your application is open to all Lazada sellers, you only need to provide the URL of your application to the sellers when the application is deployed online. The sellers can follow the URL to complete the authorization process.

### Next step

Follow the instructions in this documentation to complete seller authorization: [Seller Authorization Introduction](https://open.lazada.com/apps/doc/doc?nodeId=10777&docId=108260).

---

## Start development

<a id="start-development-108132"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=108132&lang=en_US>

After registering your application on Lazada Open Platform, you can start developing your application. 

It is recommended that you download the official SDK to facilitate your development. You may need the following information during the application development:

- [Call API with official SDK](https://open.lazada.com/apps/doc/doc?nodeId=10442&docId=108064) \- Environment requirements for each SDK and how to download
- [Call API with HTTP requests](https://open.lazada.com/apps/doc/doc?nodeId=10540&docId=108136) \- Instructions on assembling HTTP requests to call the API
- [Calling API tutorials](https://open.lazada.com/apps/doc/doc?nodeId=30714&docId=120945) \- How Lazada sellers call API to manage products, images, orders, and business data
- [API reference](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fdocument%2Fawb%2Fhtml%2Fget) \- Complete reference documentation for each API

---

## Redmart api interface guide

<a id="redmart-api-interface-guide-121567"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=121567&lang=en_US>

This document will guide Redmart developers on how to use the Open Platform to request the new version of the Redmart API.

# Register for an open platform account

## Registration link

<https://open.lazada.com/apps/user/register>

## Registered Email and Password Conditions

a. The password needs English\+number\+symbol, and the symbol cannot use "!" "\<" 、"\>"；

b. The registered mailbox should not have a "\+".

![image](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1710829696683_h0V2ygpP "image")

#### After registration, you need to fill in profile information first, and wait for review after submission

![image](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1710829697497_Ut6bMBAs "image")

**After completing the profile submission according to your actual situation, your profile will be reviewed and completed within 1\~3 working days, and the registration process of the open platform will be finished after the review.**

# Redmart APP Creation

Before calling the API you need to create the Redmart APP.

1. Select the Redmart category and click "Apply".
2. Fill in the reason for your application.
3. Wait for the application to be approved (this will usually be done within 1 to 3 business days).
4. Click "Create APP".
5. Fill in the app information to complete the creation of the app.

![](https://tida.alicdn.com/oss_1710830814052_null_SCp6DiKD)

## APP Parameter Introduction

![](https://tida.alicdn.com/oss_1711691072531_null_3x869hU8)

1. It is used for the developer's system to receive the authorization code after the seller's authorization, and the detailed process of the seller's authorization will be introduced in the next section;
2. Each app has a unique APPKEY, which is a necessary parameter when sending requests to the Open api, and is used to distinguish the accounts to which different requests belong;
3. Used to generate a signature to ensure the security of the request parameters, the specific use will be introduced in the "Call Open API" section;
4. The current status of the app is categorized into "Testing", "Onlice" and "Offline". The testing status will limit the number of sellers that can be authorized by the app, the access token validity and the daily API call traffic. If your app has completed the test, you can click "Apply Online" in the upper right corner to apply for online.
5. The maximum number of API calls each app can make in a 24\-hour period, beyond which all requests will be blocked until the total number of calls in a 24\-hour period is reduced to within the maximum number;
6. APP's authorization method, Redmart category authorization method is "AAllow login users to authorize", This means that sellers can log in for authorization directly from the document in the "Seller Authorization" section.
7. The validity time of the Access token (the Access token needs to receive an authorization code using the callback address in point 1, and then use the authorization code to redeem it for an Access token);
8. The validity time of Refresh token. When the Access token expires, but the Refresh token is still valid, the developer can call the API to use the Refresh token to get a new Access token.The Refresh token itself can not be refreshed, when the Refresh token expires, you can only re\-authorize to get a new Refresh Refresh token cannot be refreshed by itself.
9. There is a limit to the number of sellers that can be authorized for each app, and different categories have different quantity limits;
10. Categories of APIs that can be called by the current APP, APIs outside of the categories cannot be called;

# Seller Authorization

## Service endpoint

   | **Environment** | **Service address** |
| --- | --- |
| Central: for all countries (SG/MY/TH/VN/ID/PH) | <https://auth.lazada.com/rest> |

## Authorization steps

![image](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1710829699165_2gVeOnF8 "image")

[Detailed authorization steps](https://open.lazada.com/apps/doc/doc?nodeId=10777&docId=108260)

# Call Open API

## Service endpoint

   | **Region** | **Service address** |
| --- | --- |
| Singapore | <https://api.lazada.sg/rest> |

The Open API needs to be linked via an HTTP request, requiring a TLS version of no less than 1\.1 or it may not be requested.

## Call API with official SDK

The open platform provides SDKs for some programming languages, which developers can download from APP Console \- Development \- Testing Toos \- SDK Download section.

![image](https://wirelsee-weex-tasp-public-oss.oss-cn-hangzhou.aliyuncs.com/oss_1710829699544_bgdtmHHE "image")

### Environment requirements

- JAVA SDK requires Java SE/EE 1\.5 or newer version
- .Net SDK requires .NET Framework 2\.0 or newer version (Windows Phone platform not supported）
- PHP SDK requires PHP 5 or newer version
- Python requires Python 3\.0 or newer version
- For Ruby, you can install it directly [here](http://www.rubydoc.info/gems/lazop_api_client/1.1.0?spm=a1zq7z.man108064.site_detail.1.4cce7c73cojift&file=1.1.0).

### [SDK sample codes](https://open.lazada.com/apps/doc/doc?nodeId=10541&docId=108137)

## Call API with HTTP requests

Before initiating an HTTP request, you need to understand the Open Platform's signature parameters as well as the signature algorithm so that your request can pass the Open Platform's checksum.

### sign method

sha256

### [signature algorithm](https://open.lazada.com/apps/doc/doc?nodeId=10450&docId=108068)

### [HTTP request sample](https://open.lazada.com/apps/doc/doc?nodeId=10451&docId=108069)

# How to get store id

1, Login to Seller Center

2, Switch Store page will show all your Store IDs

![](https://tida.alicdn.com/oss_1716365607750_null_n4ppcCLD)

# Old Redmart API Migration Guide

     | Old Redmart API | API Path | New Redmart API | API Path |
| --- | --- | --- | --- |
| Get all Products | /v1/products | [RssGetProducts](https://open.lazada.com/apps/doc/api?path=/rss/products/get) | /rss/products/get |
| Get one Product | /v1/products/{productId} | [RssGetProduct](https://open.lazada.com/apps/doc/api?path=%2Frss%2Fproduct%2Fget) | /rss/product/get |
| Get all Pickup Locations | /v1/pickup\-locations | <RssGetPickupLocations> | /rss/pickupLocations/get |
| Get one Pickup Location | /v1/pickup\-locations/{pickupLocationId} | [RssGetPickUpLocation](https://open.lazada.com/apps/doc/api?path=%2Frss%2FpickupLocation%2Fget) | /rss/pickupLocation/get |
| Get all Stock Lots | /v1/products/{productId}/pickup\-locations/{pickupLocationId}/stock\-lots | [RssGetStockLots](https://open.lazada.com/apps/doc/api?path=%2Frss%2FstockLots%2Fget) | /rss/stockLots/get |
| Get one Stock Lot | /v1/products/{productId}/pickup\-locations/{pickupLocationId}/stock\-lots/0 | [RssGetStockLot](https://open.lazada.com/apps/doc/api?path=%2Frss%2FstockLot%2Fget) | /rss/stockLot/get |
| Update one Stock Lot | /v1/products/{productId}/pickup\-locations/{pickupLocationId}/stock\-lots/0 | [RssUpdateStockLot](https://open.lazada.com/apps/doc/api?path=%2Frss%2FstockLot%2Fupdate) | /rss/stockLot/update |
| Get Pickup Jobs | /v1/pickup\-jobs | [RssGetPickupJobs](https://open.lazada.com/apps/doc/api?path=%2Frss%2Fpickup-jobs%2Fget) | /rss/pickup\-jobs/get |
| Get Pickup Job | /v1/pickup\-jobs/{pickupJobId} | [RssGetOnePickupJob](https://open.lazada.com/apps/doc/api?path=%2Frss%2Fpickup-job%2Fget) | /rss/pickup\-job/get |

---

## The Process of Creating Test Order

<a id="the-process-of-creating-test-order-121061"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=121061&lang=en_US>

## 1\. First, you need to have an open platform account and an app key

### 1\.1 Link to Register Lazop Account

[https://open.lazada.com/apps/user/register?spm\=a1zq7z.27197301\.login\_form.1\.21fd7c73o7cUsS](https://open.lazada.com/apps/user/register?spm=a1zq7z.27197301.login_form.1.21fd7c73o7cUsS)

### 1\.2 Precautions

a. Do not use the password used to register your account "!" Symbol, otherwise an error may be reported

b. After the account is registered, the profile information needs to be filled in before the app key is created. The next step can be carried out only after the account is approved

c. It is suggested that the created app type is seller in house or ERP. The API call permissions of these two types of APPs are relatively comprehensive, so as to avoid the need to apply for permissions again later

![](https://tida.alicdn.com/oss_1667555436123_null_qBbAyBJA)

 

## 2\. Create a test order

### 2\.1 Borrow a test account

If you want to create a test order, select an area other than SG and CB; At present, CB belongs to the cross border account and cannot create a test order. SG belongs to the test account in Singapore. Due to the national policy of Singapore, the order does not support the COD delivery method. For the test order in the sandbox system, only the COD payment method can directly create a test order; So if you want to create a test order, you can select the accounts in five other regions except SG or CB.

The payment method of the test order created in the sandbox system by default is COD.

![](https://tida.alicdn.com/oss_1667555532954_null_o5wpfBml)

#### 2\.1\.1 Introduction to the page of successful borrowing

![](https://tida.alicdn.com/oss_1667555595587_null_PpkXDkah)

### 2\.2 Create Test Case

#### 2\.2\.1 Test Case Page Description

Each app key can create 10 cases every day. After reaching the upper limit, you can release the account and re borrow it

![](https://tida.alicdn.com/oss_1667555728859_null_nB2J0uPh)

#### 2\.2\.2 How to find items in the seller center\_ id

a. Click the login button to enter the Seller Center

**![](https://tida.alicdn.com/oss_1667555799261_null_bPj6SXbU)**

b. Find the Manage Products column, select a product at random, click Edit, and enter the background of the Seller Center

**![](https://tida.alicdn.com/oss_1667555819212_null_YtzaQMgG)**

c. The number in front of "Shop\_SKU" is "item\_id"

**![](https://tida.alicdn.com/oss_1667555852607_null_lXyav21k)**

d. If you want to test the quick and proper delivery of the order, you can change the transportation mode of the goods to shipped By Seller

![](https://tida.alicdn.com/oss_1667555875843_null_cyGq9rrz)

### 2\.3 Log in to the Test Seller Account and the Test Buyer Account at the same time and find the test order just created

![](https://tida.alicdn.com/oss_1667555937879_null_8dW0jtvx)

![](https://tida.alicdn.com/oss_1667555955051_null_DI6ftPjE)

### 2\.4 Change the status of the test order in the seller center

#### 2\.4\.1 Step 1 pending\>packed

First, click the To Pack column to find the order in pending status, click print only, and then the order will change to packed status

![](https://tida.alicdn.com/oss_1667556031323_null_hRUJLq9l)

#### 2\.4\.2 Step 2: Packed\>Ready to ship

Then click the Ready To Ship button to set the order status to RTS

![](https://tida.alicdn.com/oss_1667556083659_null_EP1Gd4pl)

#### 2\.4\.3 Step 3 Ready to ship\>successful delivery

In order to facilitate testing, it is recommended that all test orders use goods that support self delivery. Test orders created by such goods can be directly set to delivery status in the seller's center to facilitate the reverse process of testing orders later

![](https://tida.alicdn.com/oss_1667556113869_null_SM0LDsHB)

#### 2\.4\.4 The order has been delivered

![](https://tida.alicdn.com/oss_1667556145783_null_zR1tbG0O)

![](https://tida.alicdn.com/oss_1667556155522_null_ckQ1pZD5)

## 3\. The following is the reverse process of the test order

### 3\.1 Refund only

#### 3\.1\.1 First find the order that has been properly placed on the test buyer account page and click RETURN

![](https://tida.alicdn.com/oss_1667556240022_null_6l1Npo71)

![](https://tida.alicdn.com/oss_1667556253970_null_WLpLFPLj)

#### 

#### 3\.1\.2 Find this order in the Return Orders column of the seller's shop, and select the corresponding refund method. Here, select the first return only

![](https://tida.alicdn.com/oss_1667556448872_null_7lpjeduA)

![](https://tida.alicdn.com/oss_1667556465080_null_ac9934Id)

![](https://tida.alicdn.com/oss_1667556480098_null_DGlSio7E)

### 

### 3\.2 Return refund

#### 3\.2\.1 The seller selects the return\&return method

![](https://tida.alicdn.com/oss_1667556592211_null_yy72BiGS)

![](https://tida.alicdn.com/oss_1667556610681_null_EDWKz62c)

**3\.2\.2 The buyer chooses the logistics method of return**

![](https://tida.alicdn.com/oss_1667556667265_null_U3gKNJw6)

#### 

#### 

#### 3\.2\.3 The seller waits to receive the buyer's package

![](https://tida.alicdn.com/oss_1667556706372_null_qkyXNwD5)

#### 3\.2\.4 The seller receives the buyer's package

![](https://tida.alicdn.com/oss_1667556761215_null_23A7KvJb)

![](https://tida.alicdn.com/oss_1667556780103_null_VXLYfF2D)

![](https://tida.alicdn.com/oss_1667556796987_null_XubVWc8F)

#### 3\.2\.5 The seller verifies the package and chooses to agree to refund or refuse to refund. This example chooses to agree

![](https://tida.alicdn.com/oss_1667556894452_null_niGSrjNp)

![](https://tida.alicdn.com/oss_1667556907566_null_TCQt2qQ0)

#### 3\.2\.6 Wait for Lazada to complete the refund

![](https://tida.alicdn.com/oss_1667556982040_null_pKFIgYGC)

![](https://tida.alicdn.com/oss_1667556998142_null_Utc38SgC)

![](https://tida.alicdn.com/oss_1667557010373_null_Qww4zY8y)

---

## Service market entry operation guidelines

<a id="service-market-entry-operation-guidelines-121772"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=121772&lang=en_US>

**Lazada Service Market**

**It is an online trading platform officially launched by Lazada. Service providers need to publish open platform applications (non\-self\-developed) and services to the service market to obtain Lazada's super\-million merchant traffic and demand, provide merchants with ordering and authorization, and merchants enjoy service providers' applications and various services.**

**The lazada service market is divided into 5 country sites by country:**

**Malaysia Service Marketplace, Indonesia Service Marketplace, Thailand Service Marketplace, Philippines Service Marketplace, Singapore Service Marketplace (click on the corresponding country to view the details of the service marketplace), (Vietnam is on\-line)**

  

### Developer Identity: Introduction to Enterprise Commercial

To join as an enterprise, you need to publish the Apps to the Lazada service marketplace, or publish services such as eCommerce Enablers to the service marketplace for sellers to order.. To view the steps for other developer types to join: [https://www.yuque.com/lazadasellerservicemarket/hoafmn/kmllg0z085biq75q?singleDoc\#](https://www.yuque.com/lazadasellerservicemarket/hoafmn/kmllg0z085biq75q?singleDoc) 

  

# Overview

**Overall onboading steps:**

1. Sign up/in
2. Fill in the basic information
3. Select the user type
4. Apply for qualification
5. Bind the bank card
6. Create application(only for software developer)
7. Publish Service

  

**Notice:****All application information should be filled in English(If using Chinese, the application may be rejected.)**

  

**Contact us:**

**If have any problems with the Lazada NEW service market onboarding, feel free to contact us:**

**Email：**lazadasellerservicemarket@report.lazada.com

**ISV Ding Group:**

https://h5\.dingtalk.com/ecologicalOrg/index.html?code\=v1%2Ck1%2CwNRBUaxiN8F3ePD3Yhv%2FFpjTdezf6WXeQHRHVutCrTOdR7ksupjDEA%3D%3D\&origin\=11\&dd\_darkmode\=true\&dd\_mini\_app\_id\=5000000005018615\&dtaction\=os\#/inviteOutsideJoin

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_钉钉群_1766628472173__jS1b.jpg)

***🌟Tips:*** 

*ISVs can easily track the process or quickly access the corresponding page at the 'Settlement guidance' on the right side of the homepage.*

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误2_1727161591699__FFgm.jpg)

# Step 1: Sign up/in

#### 1\) Enter the Registration Page

Open Platform URL: <https://isvconsole.lazada.com/>

#### 2\) Create Account（If already have account,skip this part)

1. Click to register and create an account
2. Fill in email address, company name, set password, and view terms and agreements
3. Fill in the email verification code

  

#### 3\) Log in to your account

  

# Step 2: Basic Information

When finish the sign up/in,you will enter the basic information page below:

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误3_1727161628174__UJbA.jpg)

#### 1）Select country

1. Only ID 🇮🇩; MY 🇲🇾; PH 🇵🇭; TH 🇹🇭 ; SG 🇸🇬 One of the business licenses can publish priced services in the service marketplace, while other countries can only publish free versions of services. [View details](https://www.yuque.com/lazadasellerservicemarket/hoafmn/xezwqo2atq424tvc?singleDoc# 《Service Version Description-Free&Paid》)
2. The following information (such as: phone number;business license;address;bank account)must all **be consistent with** the country you select here.

#### 2）Partner type (please select a partner type)

1. Enterprises Commercial: It is necessary to publish the app to the Lazada service marketplace, or publish services such as eCommerce Enablers to the service marketplace for sellers to order.
2. Enterprise self\-developed/Personal Self\-Developed: Please click [here](https://www.yuque.com/lazadasellerservicemarket/hoafmn/gzkgt6glciycqo3g?singleDoc# 《Onboarding Guide for Enterprise Self-Developed and Personal Self-Developed》) for the registration process of self\-developed developers. This document is for the registration process of enterprise commercial developers.

#### 3）Is seller(Yes or No)

1. Select according to the fact. If you're not only a service provider but also **a Lazada seller**, then select 'Yes' and enter your **seller id**. If not,then select 'No'.

#### 4）Enterprise Name

1. Fill in the company name, which must be consistent with the name on the business license

#### 5）Business license number and owner information

1. Fill in the number and legal representative/person in charge information on the business license

#### 6\) Business license photo

1. Upload a photo of the business license, and the enterprise information on the business license must be consistent with the enterprise name filled in above

#### 7\)Mobile number\&Email

1. The phone number here must be a number that **never be registered on Lazada all platform.**Also the email address here must be an email that **never be registered on Lazada all platform**

*(If prompt ‘Operation Failed:phone or email was occupied by seller' at this stage,it means your number or email was ever used o Lazada.Then pls use* *alternative phone number or email address.)*

1. Pay attention to select correct area code of the phone number
2. Phone number need to be **verified** by code sent to the phone.Also Email address need to be **verified** by code sent to the mailbox.

*(If cannot receive verification code,first need to check it is not occupied as said above,or need to try again after waiting a few minutes.)*

  

#### Under Review

1. After filling out all the information, click submit. The review is expected to be completed within 1\-3 working days. Please be patient and wait. You can check the review status on the homepage.

# Step 3: Select the user type

When review of Step2 is approved,you will enter this page,then you need to select the user type:

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误4_1727161651604__h4Wq.jpg)

1. If you are a software developer for ERP, IM, or other software and sell the software to the service marketplace, please apply for "[Software Developer](https://isvconsole.lazada.com/web/isv/basic-info-isv.html) " first, and then apply for "[Service Provider](https://isvconsole.lazada.com/web/isv/basic-info-isv.html) "
2. If you are a service provider for eCommerce Enablers , content production, etc., please apply for "[service provider](https://isvconsole.lazada.com/web/isv/basic-info-isv.html)" directly

  

# Step 4: Apply for Qualification

#### 1\) Service Marketplace Qualification Application

1. According to the published service categories, go to the [qualification application page](https://isvconsole.lazada.com/web/isv/qualification-apply.html) to apply for the corresponding qualifications ([view the mapping relationship between the appkey category and the service market category](https://www.yuque.com/lazadasellerservicemarket/hoafmn/lu8ek0wwskf81ck3?singleDoc# 《Mapping relationship between open platforms and Service MarketPlace categories》))
2. After submitting the qualification, it is expected to take 1\-3 working days to complete the review

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误5_1727161678346__T224.png)

  

#### 2\)My Qualification

1. You can check all applied qualifications and their approval status in [my qualifications page](https://isvconsole.lazada.com/web/isv/qualification-list.html)
2. You can cancel the application or modify the qualification content here.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误6_1727161696042__dBRL.png)

  

# Step 5: Bind the bank card

To publish paid services in the service market, it is necessary to bind a bank account for payment. Only Indonesia, Thailand, Malaysia, the Philippines, and Singapore can publish paid services in the service market. Business licenses for other countries or individual developers can only publish free SKU services in the service marketplace. [Priced and free service instructions](https://www.yuque.com/lazadasellerservicemarket/hoafmn/xezwqo2atq424tvc?singleDoc# 《Service Version Description-Free&Paid》)

#### 1\) Bind the bank account of the country where the business license is located

1. Enter the detail page through the right side of the homepage
2. Bank information file: it can be the photo of the bankcard; it also can be any supporting material's picture that may prove the bank account information filled in below.
3. The bank account must be consistent with the registered country(for example:if onboading in MY,then the bank account must be a MY account)
4. Note that the information must be filled in correctly. Cause this account is the collection account.
5. After submitting the bank information, the review will be completed within 1 working day
6. List of supported bank cards：[📎ServiceMarketBankList.xlsx](https://www.yuque.com/attachments/yuque/0/2023/xlsx/34925429/1702441460885-e28fe400-d13e-4959-9d41-23d7394eef7d.xlsx)

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误6_1727161736911__tmbU.png)

  

#### 2\) Bind cross\-border bank account

Lazada Service Marketplace has launched in five countries:Singapore, Malaysia, Indonesia, Thailand and Philippines.According to the laws,regulations and policies of each country,selling on Lazada Service Marketplace requires at least one of the following countries' business license(ID 🇮🇩; MY 🇲🇾; PH 🇵🇭; TH 🇹🇭 ; SG 🇸🇬). But considering the difficulty of license application,Lazada supports the service providers to publish services cross\-border. [Please refer to the announcement](https://open.lazada.com/apps/announcement/detail?spm=a1zq7z.27201205.0.0.2f5a7c73rOI6Yh&docId=1988)

| *Developer bound business license* | *Countries that can release paid services* | *Countries that can release Only the free SKU services* |
| --- | --- | --- |
| *MY（Malaysia）* | *MY、TH、PH* | *ID、SG、VN* |
| *TH（Thailand）* | *MY、TH、PH* | *ID、SG、VN* |
| *PH（Philippines）* | *MY、TH、PH* | *ID、SG、VN* |
| *SG（Singapore）* | *SG、MY、TH、PH* | *ID、VN* |
| *ID（Indonesia）* | *ID、MY、TH、PH* | *SG、VN* |
| *VN（Vietnam）* | *Non* | *MY、TH、PH、ID、SG、VN（Vietnam currently does not have temporary online trading capabilities and can only release free sku services）* |
| *China and other countries* | *Non* | *MY、TH、PH、ID、SG、VN* |
| *Individual developer* | *Non* | *MY、TH、PH、ID、SG、VN* |

*For example, when the subject of the business license is Malaysia, paid services can be published in the service marketplace of Malaysia, Thailand, and the Philippines, and linked to the receiving accounts of banks in Thailand and the Philippines .*

1. Enter the binding PSP account page through the workbench homepage (Payoneer, Lazada cross\-border payment cooperation service provider, can receive payments through Payoneerwithout applying for bank accounts in various countries)
2. Jump to the Payoneer page to register enterprise information. After registration is completed, it will automatically bind to the Lazada cross\-border account. Payoneer is expected to complete the review within 3\-7 working days

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误7_1727161785574__ph9d.jpg)

  

# Step 6: Create the application（only for software developer)

If you are going to publish software service(like ERP etc.), then you need to follow next steps to apply for the application to obtain the **appkey**.(Meanwhile make sure that you are already a software developer\-\-refer to step3\). 

#### 1\) Apply for APPKEY creation permission

1. On the Service Provider Workstation \- [Application Management page](https://isvconsole.lazada.com/apps/console/apps), to apply for the creation of an appkey, corresponding documents need to be submitted for application, and it is expected to be reviewed within one working day. ([Check which category of the service market the appkey can be published to](https://www.yuque.com/lazadasellerservicemarket/hoafmn/lu8ek0wwskf81ck3?singleDoc# 《Mapping relationship between open platforms and Service MarketPlace categories》))
2. Can check the status in the list,if the review approved,then the status logo should turn from 'Pending' to 'Active'

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误9_1727161840830__cuxN.jpg)

#### 2\)Create App

1. When the status is 'Active',then can create App under this category
2. Create an APPKEY and fill in the app callback address (if the seller orders your service in the service marketplace and clicks to use it, it will jump to the page), logo, and other information

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误10_1727161866650__7cSE.jpg)

  

#### 2\) Application development and launch

1. View the API permissions that can be called by the application on the application management page and proceed with development
2. After the development is completed, click on the application launch application, and the review is expected to be completed within 1 working day

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误11_1727162027157__9Kg7.jpg)

  

# Step 7: Publish Service in the Service Marketplace

Notice: Please ensure that the service details have at least an English version, otherwise the review will be rejected.

#### 1\) Choose to publish software services or non software services

1. Software Service Release: Select "Publish Software Services" on the [service release page](https://isvconsole.lazada.com/web/service/publish.html) to publish the launched appkey as a service in the service marketplace. Please click [here](https://www.yuque.com/lazadasellerservicemarket/hoafmn/lu8ek0wwskf81ck3?singleDoc# 《Mapping relationship between open platforms and Service MarketPlace categories》) to view the categories where appkey can be published in the service marketplace.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误12_1727162049505__p94Z.jpg)

  

1. Non Software Services: Select "Publish Non Software Services" on the [service release page](https://isvconsole.lazada.com/web/service/publish.html) to publish services such as design service.

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误13_1727162065858__cpHN.jpg)

#### 2）Edit service details

According to the laws,regulations and policies of each country,publishing a priced service on Lazada Service Marketplace requires a business license of one country.And we can also publish cross\-border services to those supported sites.For those service providers who don't have any business license of the above countries,our platform provides them with the ability to release free SKU,which can ensure third\-party apps be normally used by sellers.

View paid and free service release rules ([view the instructions for the free and paid versions](https://www.yuque.com/lazadasellerservicemarket/hoafmn/xezwqo2atq424tvc?singleDoc# 《Service Version Description-Free&Paid》))

**2\.1\) For software services, you can check "paid versions can pe published to" and " Can only publish free versions to"**

1. **paid versions can pe published to：It indicates that you have a business license in that country or that the country supports cross\-border publishing. In the service market of that country, you can publish services with prices and free SKU**
2. **Can only publish free versions to：This indicates that you are not eligible to publish priced SKU services in that country, and can only publish free SKU services**

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误14_1727162088501__8K5e.jpg)

  

  

The countries that can be checked above include Malaysia, Indonesia, Thailand, the Philippines, Singapore, and Vietnam. If there are fewer than 6 countries, Possible reasons include:

1. please check if only some countries are checked in the [service provider information](https://isvconsole.lazada.com/web/isv/basic-info-operator.html).

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误15_1727162105460__MM17.jpg)

1. Your account can publish paid SKUs in that country, and you need to complete the [qualification application](https://isvconsole.lazada.com/web/isv/qualification-apply.html) and [payment account binding](https://isvconsole.lazada.com/web/isv/basic-info-operator.html) in that country

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误16_1727162132654__XnnF.jpg)

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误17_1727162146211__0Vd9.jpg)

  

**2\.2\) Software service editing fee items**

1. Publish price SKUs: Prices can be set in different currencies according to the country

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误18_1727162230679__pUEl.jpg)

  

  

1. Publish a free SKU: Select "Add Free Version" to add a free SKU. Note that a free SKU will not be displayed in the service marketplace (normal search, guide display, and can only be displayed through the service provider distributing specific links to sellers separately. [Please see detailed instructions](https://www.yuque.com/lazadasellerservicemarket/hoafmn/xezwqo2atq424tvc?singleDoc# 《Service Version Description-Free&Paid》))

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误19_1727162260512__WRqv.jpg)

  

**2\.3\) Non software service editing details page**

Non software services do not support publishing free SKUs, so it is necessary to follow the principle of having a business license in that country or supporting cross\-border publishing in that country.

**2\.4\) More Service Editing Standards**

Please review：[https://www.yuque.com/lazadasellerservicemarket/hoafmn/gwywh6vb8qsydidq?singleDoc\#](https://www.yuque.com/lazadasellerservicemarket/hoafmn/gwywh6vb8qsydidq?singleDoc) 

**2\.5\) Submit for review after service editing**

Expected to complete audit within 1 working day

#### 3\) View service details

After the service is approved, it will be displayed in the service marketplace. You can view your service by searching in the service marketplace or by clicking on various countries in the [service list](https://isvconsole.lazada.com/web/service/list.html)

1. Select country \- service preview link: The link displayed in the service market normally, excluding free SKUs , can be seen by sellers in the service marketplace normally.
2. Select country \- Free SKU link: includes links for both free SKU and paid SKU, which sellers cannot see in the service marketplace and require service providers to distribute on their own

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误20_1727162282516__tBce.jpg)

---

## Lazada服务市场入驻操作指引

<a id="lazada-121773"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10533&docId=121773&lang=en_US>

Lazada服务市场

是由Lazada官方推出的线上交易平台，服务商需要将开放平台应用（非自研类）和服务发布至服务市场，获取Lazada超百万级的商家流量和需求，提供给商家进行订购和授权，商家享受服务商的应用和各类服务。

lazada服务市场按国家分为5个国家站点：

[马来西亚服务市场](https://marketplace.lazada.com.my/web/home.html)、[印度尼西亚服务市场](https://marketplace.lazada.co.id/web/home.html)、[泰国服务市场](https://marketplace.lazada.co.th/web/home.html)、[菲律宾服务市场](https://marketplace.lazada.com.ph/web/home.html)、[新加坡服务市场](https://marketplace.lazada.sg/web/home.html)（点击对应国家可查看服务市场详情），（越南上线中）

  

  

**中文版操作指引**

所有申请信息均需使用英文填写（如使用中文，申请可能会被拒绝）

需以企业身份入驻，需将开发的应用发布到lazada服务市场，或将代运营等服务发布到服务市场供卖家订购，钉钉查看其他开发者类型入驻步骤：[https://aliyuque.antfin.com/gy328525/sppxsq/zgfvw7zk0fc1l3yy?singleDoc\#](https://aliyuque.antfin.com/gy328525/sppxsq/zgfvw7zk0fc1l3yy?singleDoc)

  

**概述：**

**总体入驻步骤：**

1、注册/登录

2、填写基本信息

3、选择服务商身份

4、申请服务市场资质

5、绑定银行账户

6、申请APPKEY并进行应用开发（仅适用于软件开发者）

7、在服务市场发布服务

注意：所有申请信息均需使用英文填写（如使用中文，申请可能会被拒绝）

**联系我们：**

如果在Lazada服务市场上线有任何问题，请随时联系我们：

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误1_1727167621432__g1OT.jpg)

*服务商可以通过服务商后台主页右侧的“入驻引导”快速完成入驻。*

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误2_1727167629667__TTB4.jpg)

# 第 1 步 ：注册/登录

#### 1）进入注册页面

服务商工作台地址: <https://isvconsole.lazada.com/>

#### 2）创建账户（若已创建，请跳过此部分）

1. 点击注册创建账户
2. 填写邮箱地址、公司名称、设置密码，并查看条款协议
3. 填写邮箱验证码

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误30_1727167717419__Q7ed.png)

#### 3）登录账户，进入服务商后台

# 第 2 步 ：填写基本信息

完成注册/登录后，您将进入基本信息填写页面

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误3_1727167727620__VUea.jpg)

#### 1）选择国家

1. 只有ID🇮🇩;MY🇲🇾;PH🇵🇭;TH🇹🇭 ;SG🇸🇬之一的营业执照可以在服务市场发布有价格服务，其他国家仅能发布免费版服务，[查看详情](https://www.yuque.com/lazadasellerservicemarket/hoafmn/bufz158kqrdr8khh?singleDoc# 《免费版和付费版说明》)
2. 后面填写的信息（如手机号、营业执照、银行账户等）都必须符合您选择的国家

#### 2）合作伙伴类型（请选择一种合作伙伴类型）

1. 企业商用：需将开发的应用发布到lazada服务市场，或将代运营等服务发布到服务市场供卖家订购。
2. 企业自研/个人自研：自研开发者入驻流程请[点这里](https://aliyuque.antfin.com/gy328525/sppxsq/dimgax6aq285trgg?singleDoc# 《企业-自研/个人-自研入驻步骤》)，此文档为企业商用开发者入驻流程。

#### 3）是否为卖家

1. 根据实际情况选择，如果您为卖家，请选择是，并填写卖家信息

#### 4）企业名称

1. 填写企业名称，企业名称需与营业执照上名称保持一致

#### 5）营业执照编号、法人信息

1. 填写营业执照上编号和法人/负责人信息

#### 6）营业执照照片

1. 上传营业执照照片，营业执照上企业信息需与上方填写的企业名称保持一致

#### 7）手机号和邮箱验证

1. 这里的手机号码和电子邮箱必须是**未在Lazada全平台注册过**的。（如出现“操作失败：电话或邮箱被卖家占用”，则说明该手机号或者邮箱曾注册过lazada账户，请使用其他手机号或者邮箱。
2. 手机号的区号需要和营业执照所在国家区号保持一致。

  

#### 审核中

1. 填写所有信息后，点击提交，审核预计在1\-3个工作日完成，请耐心等待，您可以在首页查看审核状态。

# 第 3 步 ：选择服务商身份

当第2步审核通过后，您将进入此页面，然后您需要选择服务商身份：

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误4_1727167739820__OfY5.jpg)

1. 如果您是ERP、IM等软件开发者，并将软件售卖到服务市场，请先申请“[软件开发者身份](https://isvconsole.lazada.com/web/isv/basic-info-isv.html)”，然后再申请“[服务提供者身份](https://isvconsole.lazada.com/web/isv/basic-info-operator.html)”
2. 如果您是代运营、内容制作等服务提供商，请直接申请“[服务提供者身份](https://isvconsole.lazada.com/web/isv/basic-info-operator.html)”

# 第 4 步 ：申请服务市场资质

#### 1）服务市场资质申请

1. 根据发布的服务类目，前往[资质申请页面](https://isvconsole.lazada.com/web/isv/qualification-apply.html)申请对应的资质（[查看appkey类目与服务市场类目映射关系](https://www.yuque.com/lazadasellerservicemarket/hoafmn/xwtumktc43grm79t?singleDoc)）
2. 资质提交后，预计1\-3个工作日完成审核

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误5_1727167772898__PhEg.png)

#### 2）查看已申请资质

1. 在[我的资质](https://isvconsole.lazada.com/web/isv/qualification-list.html)页面，查看已申请资质及审批状态
2. 可取消申请货修改资质申请内容

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误31_1727167841056__3x4R.png)

  

# 第 5 步 ：绑定银行账户

在服务市场发布付费服务需要绑定银行账户进行收款，仅印尼、泰国、马来、菲律宾、新加坡可在服务市场发布付费服务，营业执照为其他国家或个人开发者仅能在服务市场发布免费SKU服务，[付费与免费服务说明](https://www.yuque.com/lazadasellerservicemarket/hoafmn/xezwqo2atq424tvc?singleDoc# 《Service Version Description-Free&Paid》)

#### 1）绑定营业执照所在国家银行账户

1. 通过工作台首页进入绑定银行账户页面
2. 绑定银行账户主体需要与营业执照主体一致，且需和营业执照所在国家一致
3. 请正确填写，该账户为收款账户
4. 银行信息提交后，将在1个工作日内完成审核

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误6_1727167880391__w8Nt.png)

#### 2）绑定跨境收款账户

lazada服务市场分为5个国家站点：[马来西亚服务市场](https://marketplace.lazada.com.my/web/home.html)、[印度尼西亚服务市场](https://marketplace.lazada.co.id/web/home.html)、[泰国服务市场](https://marketplace.lazada.co.th/web/home.html)、[菲律宾服务市场](https://marketplace.lazada.com.ph/web/home.html)、[新加坡服务市场](https://marketplace.lazada.sg/web/home.html)，基于各国政府合规的要求，服务商在服务市场发布有价格SKU需要有该国家的营业执照。但考虑到执照申请问题，经沟通，lazada在合规的前提下支持了服务商跨境发布服务的能力，具体[点此可看公告](https://open.lazada.com/apps/announcement/detail?spm=a1zq7z.27201205.0.0.2f5a7c73rOI6Yh&docId=1988)。

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误33_1727168074657__FeRV.png)

1. 通过工作台首页进入绑定PSP账户页面（派安盈，lazada跨境收款合作服务商，无需申请各国银行账户即可实现通过派安盈收款）
2. 跳转到派安盈页面以企业信息注册，注册完成后将自动绑定lazada跨境账户，派安盈预计3\-7个工作日内完成审核

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误34_1727168240443__369m.png)

  

# 第 6 步 ：申请APPKEY并进行应用开发（仅适用于软件开发者）

如果您要发布软件服务（如ERP等），那么您需要完成此步骤同时确保您已经申请了软件开发者身份——请参考步骤3

#### 1）申请APPKEY创建权限

1. 在服务商工作台\-[应用管理](https://isvconsole.lazada.com/apps/console/apps)页面，申请创建APP，需要提交相应资料进行申请，预计1个工作日完成审核。（[查看appkey可发布到服务市场哪个类目中](https://www.yuque.com/lazadasellerservicemarket/hoafmn/lu8ek0wwskf81ck3?singleDoc# 《Mapping relationship between open platforms and Service MarketPlace categories》)）
2. 查看列表中状态，如果审核通过，状态将从'Pending' 变成 'Active'

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误9_1727168252514__8J1p.jpg)

#### 2）创建APPKEY

1. 当类目状态为“Active”时，可在此类目下创建APPKEY
2. 创建APPKEY，并填写应用回调地址（卖家在服务市场订购您的服务并点击使用会跳到该页面）、logo等信息

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误10_1727168263669__ySA8.jpg)

#### 2）应用开发及上线

1. 在应用管理页面查看应用可调用API权限并进行开发
2. 开发完毕后点击应用上线申请，预计1个工作日完成审核

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误11_1727168272404__YfD7.jpg)

# 第 7 步 ：在服务市场发布服务

注意：请确保服务详情至少有英文版本，否则审核将被拒绝。

#### 1）选择发布软件服务或非软件服务

1. 软件类服务发布：在[服务发布](https://isvconsole.lazada.com/web/service/publish.html)页面选择“发布软件类服务”，将上线的appkey在服务市场发布为服务。appkey可发布到服务市场的类目请[点此查看](https://www.yuque.com/lazadasellerservicemarket/hoafmn/lu8ek0wwskf81ck3?singleDoc# 《Mapping relationship between open platforms and Service MarketPlace categories》)。

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误12_1727168281925__7Dud.jpg)

1. 非软件类服务：在[服务发布](https://isvconsole.lazada.com/web/service/publish.html)页面选择“发布非软件类服务”，发布代运营、设计等服务。

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误13_1727168293320__eAoE.jpg)

#### 2）编辑服务详情

基于各国政府合规方面的要求，在Lazada服务市场的某个国家站点发布有价格的服务需要该国家的营业执照或该国家支持其他国家跨境发布服务，平台考虑到部分服务商无法获得服务市场所在国家的营业执照，故开放了可发布0元SKU的产品能力（仅针对软件类服务生效，非软件类服务仅能发布付费版且需要服务商拥有该国家营业执照或该国家支持跨境发布服务），保障三方应用可继续给商家进行使用。

查看付费版服务和免费服务发布规则（[查看免费版与付费版说明](https://www.yuque.com/lazadasellerservicemarket/hoafmn/bufz158kqrdr8khh?singleDoc# 《免费版和付费版说明》)）

**2\.1）软件类服务可勾选“可发布付费版至”和“仅可发布免费版至”**

1. 可发布付费版至：说明您拥有该国家营业执照或该国家支持跨境发布，在该国家服务市场可发布有价格和0元SKU服务
2. 仅可发布免费版至：说明您不符合在该国家发布有价格SKU服务，只能发布0元SKU服务

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误14_1727168304906__5MYR.jpg)

以上可勾选国家包含：马来、印尼、泰国、菲律宾、新加坡、越南6国，若国家少于6国，可能的原因有：

1. 在[服务提供者信息](https://isvconsole.lazada.com/web/isv/basic-info-operator.html)中是否只勾选了部分国家。

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误15_1727168313903__LEJF.jpg)

1. 您的账号在该国家可发布付费SKU，需完成该国家[资质申请](https://isvconsole.lazada.com/web/isv/qualification-apply.html)和[收款账号](https://isvconsole.lazada.com/web/isv/basic-info-operator.html)绑定

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误16_1727168321736__tmtz.jpg)

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误17_1727168331879__B0PT.jpg)

**2\.2）软件类服务编辑收费项目**

1. 发布有价格SKU：可根据国家设置不同币种价格

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误18_1727168340051__DMT7.jpg)

1. 发布0元SKU：选择“添加免费版本”来添加0元SKU，注意：0元SKU不会在服务市场上展示（正常搜索、导购展示，仅能通过服务商单独分发特定链接给卖家才会展示，[查看详细说明](https://www.yuque.com/lazadasellerservicemarket/hoafmn/bufz158kqrdr8khh)）

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误19_1727168353203__Jv7v.jpg)

**2\.3）非软件类服务编辑详情页**

非软件类服务不支持发布0元SKU，故需要遵循拥有该国家营业执照或该国家支持跨境发布的原则。

#### 3）查看服务详情

服务通过审核后，将在服务市场展示，可通过在服务市场搜索或在[服务列表](https://isvconsole.lazada.com/web/service/list.html)\-点击各个国家查看您的服务

1. 选择国家\-服务预览链接：正常在服务市场展示的链接，不含0元SKU，卖家可在服务市场正常看到
2. 选择国家\-免费SKU链接：包含0元SKU和付费SKU的链接，卖家无法在服务市场正常看到，需要服务商自行分发

![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_错误20_1727168366748__KHms.jpg)

---

