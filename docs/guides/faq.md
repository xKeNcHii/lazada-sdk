# FAQ

## General questions

<a id="general-questions-108149"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10551&docId=108149&lang=en_US>

#### Q: What is API?

Application Programming Interface (API) is a set of routines, protocols, and tools for building software and applications.

#### Q: Why do I need to connect to Lazada API?

When you have a professional seller account (i.e., Seller Center) you can use API to sell products and manage your online business on Lazada.

Lazada Open Platform enables you to link your internal systems or third party applications via APIs to your Lazada store. You might use APIs to manage a variety of functions such as importing products, or migrating orders into your accounting or EPR system, etc.

#### Q: What is Lazada Open Platform?

Lazada Open Platform is an integrated open platform, which provides end\-to\-end API generation and provision services for our sellers like yourself, to build apps or connect your existing apps to Lazada. This means if you have development capabilities or use third party APPs, you can better manage your business by connecting them directly to your Lazada store via APIs.

#### Q: Why is Lazada introducing the open platform?

1. To enables developers (ISVs and sellers) to develop and manage several types of applications for Lazada sellers, such as ERP system, omni\-channel system, marketing APPs, accounting software, cataloguing tools, image enhancement tools, order management system, and warehouse management system.
2. Solid security framework like user authorization and hosting environment is deployed to protect business data.

#### Q: What are my benefits to move to Lazada Open Platform?

1. Rich API endpoints for all the areas of e\-commerce, including product, order, user, marketing, and payment management. Besides, more APIs will be open to meet the business requirements.
2. Higher concurrency and success rate of API calls, ensuring your application performance.
3. The dashboard provides view of successful and failed API calls initiated by your applications, helping your monitor the performance of your applications.
4. A migration guide is provided to ensure the smooth migration of your applications.

#### Q: I want more information. How can I get it?

1. Please direct any further questions to the Partner Support Center, or through the Lazada Open Platform [Contact Us](https://open.lazada.com/apps/home/contact_us?spm=a1zq7z.27197287.droot_normal_ticket_system.droot_normal_raise_ticket.53a67c73VMwhWl
) menu.
2. You can also get more support through the community. For details, see [Community](https://open.lazada.com/apps/community/index?spm=a1zq7z.man108149.0.droot_normal_community.65837c73K6Hiv9).

## Working with Lazada Open Platform

#### Q: How to become a developer on Lazada Open Platform.

1. On the home page of Lazada Open Platform, click the **Create Account** button, and then follow the registration process to verify your email ID and sign up the developer agreement to become a developer on the platform.
2. After logging in Lazada Open Platform, complete your profile information and upload related documents in the **User ID** \-\> **Profile** menu.
3. For detailed instructions, see [Become a developer](https://open.lazada.com/apps/doc/doc?nodeId=10396&docId=108001).

#### Q: How to register my application?

1. Firstly, apply for the APP category of your application. You will need to provide business justification and related documents (such as description of functions and features of your APP, design documentation, data flow diagrams, etc) to get the approval because the category defines the API groups that your application can access.
2. After the category is approved, register your application by providing some basic information, like APP name, APP logo, and the callback URL.
3. Download the official SDK for your application and start the development.
4. For detailed instructions, see [Register an application](https://open.lazada.com/apps/doc/doc?nodeId=10398&docId=108002).

#### Q: How does it take to approve my APP category request?

It usually takes 1\-2 working days. Please do provide detailed description of your application when submitting the APP category request.

#### Q: Which programming languages does Lazada Open Platform support?

Lazada Open Platform provides official SDK packages for Java, C\#, and PHP. Ruby and Python will also be supported (by the end of March, 2018\). For details about the SDK packages, see [Call API with official SDK](https://open.lazada.com/apps/doc/doc?spm=a1zq7z.man108132.site_detail.1.7eab7c73YenK9E&nodeId=10442&docId=108064).

## API protocol changes

#### Q: What are the technical changes to the APIs?

The API protocol is changed to RESTful API. For technical details, see [Reconfigure Existing APP](https://open.lazada.com/apps/doc/doc?nodeId=10543&docId=108139).

#### Q: Where can I find the full list of API changes?

Refer to the following topics in the documentation:

[Summary of changes](https://open.lazada.com/apps/announcement/index?spm=a1zq7z.man108139.0.droot_normal_announcement.5b487c73qZE70t)

---

## API related questions

<a id="api-related-questions-108150"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10551&docId=108150&lang=en_US>

This section lists frequently asked questions about the Lazada APIs and recommended resolution.

  

**Q:** How to list product variations with the **CreateProduct** API?**A:** The product variations must be listed with a single request. That is, in the request body of the **CreateProduct** API, list the product variations in the tags. You can use ‘AssociatedSku’ tag if you want to add some SKUs to an existing product.

  

**Q:** Why is the total number of products shown on the Seller Center portal different from that returned by the **GetProduct** API?**A:** The total number of products shown on the Seller Center portal is the number of SKUs, but the number of products returned by the **GetProduct** API is the number of items. That is, SKUs include variations of items.Please also note that the returned results by API calls are determined by the specified parameters like Filter, Limit, Offset, and time conditions. The maximum number of products returned by a single **GetProduct** call is 500\. If no limit value is specified, the **GetProduct** call returns 20 products by default.

  

**Q:** Why does the **GetDocument** API fail to return the needed documents?**A:** Make sure that the status of the specified order item is “RTS” (by calling **SetStatusToReadyToShip**) before calling the **GetDocument** API. Otherwise, the error message E034 will be returned.

  

**Q:** Why does the **GetBrands** API fail to return a known brand?**A:** Check whether the specified parameters filter out some brands. The maximum number of brands that can be returned by a single request is 1,000\. If the brand cannot be found in the Seller Center portal either, contact the service team.

  

**Q:** What does the “liverejected” QC status (returned by the **GetQcStatus API**) mean?**A:** The “liverejected” QC status means that online SKUs are made offline by the QC team because of qualification reasons.

  

**Q:** What do the mangrove errors mean? Who should I reach out to?**A:** These errors are caused by a failure to comply to our platform product content rules. These rules are set by the Lazada Content team, please reach out to the Partner Seller Support (<https://sellercenter.lazada.sg/seller/helpcenter>) to find out more about the rules and what you should do. 

We have compiled some frequently encoutered mangrove errors below for your reference.

![image](https://img.alicdn.com/top/i1/LB1rQsceL5G3KVjSZPxXXbI3XXa)

  

**Q:** If I have other technical questions about API, whom shall I contact for technical support?**A:** You can get technical support through DingTalk group ID 24655026315 for English Support, and DingTalk group ID 21909623 for Chinese Support ([Link to download and install DingTalk](https://tms.dingtalk.com/markets/dingtalk/download)).

---

## Training materials

<a id="training-materials-108367"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10551&docId=108367&lang=en_US>

If you need more information about Lazada Open Platform, you can download the videos and decks in multiple languages.

 

### Video for Lazada Open Platform

1. [Video in English](https://youtu.be/EPT7KvId8Io)
2. [Video in Thai](https://www.youtube.com/watch?v=If5eJDivhLs)

 
### Training decks

1. [Training deck in English](https://university.lazada.com/course/learn?spm=aelc-pagecourseindex.aelc-pagecourseindex-b.courseTable_row0_column12_item1.1.8a63MRVrMRVrsx&id=4888&type=article&login=skip)
2. [Training deck in Chinese (for seller in\-house APP only)](http://image.info.lazada.com/lib/fe9313727267057a74/m/9/0c10f37f-0fde-4d6a-97f6-b572193934dd.pdf)
3. [Training deck in Thai](https://university.lazada.co.th/course/learn?spm=aelct-pagecourseindex.aelct-pagecourseindex-b.courseTable_row0_column12_item1.1.55ack3ovk3ovuY&id=4967&type=article&login=skip)

---

## Glossary

<a id="glossary-108151"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10551&docId=108151&lang=en_US>

### App Key

The unique identity of an application on Lazada Open Platform, which is generated when the application is created. The App Key is one of the parameters that must be included in the request of API calls, and the application will be identified with the App Key by Lazada Open Platform. 

### App Secret

The key that is assigned to an application by Lazada Open Platform when the application is created. The App Secret ensures the security and reliability of the application source. Developers must keep the App Secret properly and should not share it with any third party.

### Developer

ISVs or individuals developer who have completed registration and are ready to develop applications on Lazada Open Platform. Developers can also be called “Lazada partner”.

### Application

Software tools or service that are developed by ISVs or individuals on Lazada Open Platform. Applications can be in\-house software or commercial software.

### Product

In ecommerce, a product is an exchangeable item, including goods, service, or virtual data products.

### Category

Classification of items. It is a structural description of item information for easy item management and shopping guide.

### Property

Property, also known as attribute, is the name of a collection of attribute values. Properties represent the attributes of items, like brand, color, volume, style, and model.

### SPU

SPU stands for “Standard Product Unit” and is a collection of reusable and retrievable standard information that describes the attributes of a product. Items belonging to the same SKU can be considered the same product to the consumers.

### Key property

Once the value of a key property is specified, the values of other  
properties of the item are also determined. A group of key properties can define an SPU. Key properties can be specified only on level 1 categories. For example, under the category “mobile phone”, “brand” and “model” are both key properties.

### Sale property

Sale properties define all the usable properties of SKU. For example, the “color” and “size” properties of the “apparel” category.

### SKU

SKU stands for “Standard Keeping Unit” and consists of sale properties and property values. Sellers need to select specific SKUs for the items to be created and posted. For example, under the “Men’s Shoes” category, the collection of sale properties “color” \+ “size” and property values “white” \+ “39” is an SKU.

---

