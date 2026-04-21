# API Reference

## Product API

<a id="product-api-108146"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10556&docId=108146&lang=en_US>

The table below lists APIs that can be used for product management.

| **API name** | **Description** |
| --- | --- |
| [GetBrandByPages](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fbrands%2Fquery) | Retrieve all product brands in the system. |
| [GetCategoryTree](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Ftree%2Fget) | Retrieve the list of all product categories in the system. |
| [GetCategoryAttributes](https://open.lazada.com/apps/doc/api?path=%2Fcategory%2Fattributes%2Fget) | Get a list of attributes with options for a given category. |
| [GetCategorySuggestion](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fcategory%2Fsuggestion%2Fget) | Get product’s category suggestion by inputting the product title. |
| [UploadImage](https://open.lazada.com/apps/doc/api?path=%2Fimage%2Fupload) | Upload an image to the Lazada server from local workstation. |
| [MigrateImage](https://open.lazada.com/apps/doc/api?path=%2Fimage%2Fmigrate) | Migration an image to the Lazada server from external sites. |
| [MigrateImages](https://open.lazada.com/apps/doc/api?path=%2Fimages%2Fmigrate) | Migration multiple images to the Lazada server from external sites. |
| [GetResponse](https://open.lazada.com/apps/doc/api?path=%2Fimage%2Fresponse%2Fget) | Get the returned information from the system for the UploadImages and MigrateImages API. |
| [CreateProduct](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fcreate) | Create a new product using the prepared information. |
| [GetQcStatus](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fqc%2Fstatus%2Fget) | Get the quality control status of items being created. |
| [GetProducts](https://open.lazada.com/apps/doc/api?path=%2Fproducts%2Fget) | Get all or a range of products that meets the specified conditions. |
| [GetProductItem](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fitem%2Fget) | Get all SKUs under one single product by ItemId or SellerSku |
| [SetImages](https://open.lazada.com/apps/doc/api?path=%2Fimages%2Fset) | Set the images for an existing product by associating one or more image URLs with it. |
| [UpdateProduct](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fupdate) | Update attributes or SKUs of an existing product. |
| [UpdatePriceQuantity](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fprice_quantity%2Fupdate) | Update the price and quantity of one or more existing products. |
| [RemoveProduct](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fremove) | Remove an existing product from the system. |
| [AdjustSellableQuantity](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fstock%2Fsellable%2Fadjust) | Use this API to increase or decrease sellable quantity of one or more existing products. |
| [UpdateSellableQuantity](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fstock%2Fsellable%2Fupdate) | Use this API to update sellable quantity of one or more existing products. |
| [GetSellerItemLimit](https://open.lazada.com/apps/doc/api?path=%2Fproduct%2Fseller%2Fitem%2Flimit) | The platform will provide the product quantity limit information by this interface. |

---

## Order API

<a id="order-api-108147"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10556&docId=108147&lang=en_US>

The table below lists APIs that can be used for order management.

| **API name** | **Description** |
| --- | --- |
| [GetOrder](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fget) | Get the list of items for a single order. |
| [GetOrders](https://open.lazada.com/apps/doc/api?path=%2Forders%2Fget) | Get the customer details for a range of orders. |
| [GetOrderItems](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fitems%2Fget) | Get the item information of an order. |
| [GetMultipleOrderItems](https://open.lazada.com/apps/doc/api?path=%2Forders%2Fitems%2Fget) | Get the item information of one or more orders. |
| [GetDocument](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fdocument%2Fget) | Retrieve order\-related documents, including invoices, shipping labels, and shipping parcels. |
| [SetInvoiceNumber](https://open.lazada.com/apps/doc/api?path=%2Forder%2Finvoice_number%2Fset) | Set the invoice access key of an order. |

---

## Fulfillment API

<a id="fulfillment-api-121473"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10556&docId=121473&lang=en_US>

The table below lists APIs that can be used for Order Fulfillment.

| **API name** | **Description** |
| --- | --- |
| [Pack](https://open.lazada.com/apps/doc/api?path=%2Forder%2Ffulfill%2Fpack) | Use this API to mark an order item as being packed. |
| [PrintAWB](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fdocument%2Fget) | Use this API to retrieve order\-related documents, only for shipping labels. |
| [ReadyToShip](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Frts) | Use this API to mark an order item as being ready to ship. |
| [RecreatePackage](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Frepack) | Use this API to mark a package item as being repack. |
| GetShipmentProvider | Use this API to get the list of all active shipping providers, which is needed when working with the Pack API. |
| [ConfirmDeliveryForDBS](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fsof%2Fdelivered) | Use this API to mark an sof order item as being delivered. |
| [FailedDeliveryForDBS](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fpackage%2Fsof%2Ffailed_delivery) | Use this API to mark an sof order item as being delivered failed |
| [DeliverDigital](https://open.lazada.com/apps/doc/api?path=%2Forder%2Fdigital%2Fdelivered) | Use this API to mark a digital order item as being delivered. |

---

## Finance API

<a id="finance-api-108249"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10556&docId=108249&lang=en_US>

The table below lists APIs that can be used for viewing and analyzing seller finance data.

| **API name** | **Description** |
| --- | --- |
| [GetPayoutStatus](https://open.lazada.com/apps/doc/api?path=%2Ffinance%2Fpayout%2Fstatus%2Fget) | Get the payout status of the seller in a specified period. |
| [queryTransactionDetails](https://open.lazada.com/apps/doc/api?path=%2Ffinance%2Ftransaction%2Fdetails%2Fget) | API to query seller transaction details within specific date range. |
| [QueryAccountTransactions](https://open.lazada.com/apps/doc/api?path=%2Ffinance%2Ftransaction%2FaccountTransactions%2Fquery) | API to query account transactions. |

---

## Logistics API

<a id="logistics-api-108250"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10556&docId=108250&lang=en_US>

The table below lists APIs that can be used for logistics management.

| **API name** | **Description** |
| --- | --- |
| [GetShipmentProviders](https://open.lazada.com/apps/doc/api?path=%2Fshipment%2Fproviders%2Fget) | Get the list of all active shipping providers, which is needed when working with the SetStatusToPackedByMarketplace call. |
| [GetOrderTrace](https://open.lazada.com/apps/doc/api?path=%2Flogistic%2Forder%2Ftrace) | Query logistic detail for seller erp with seller id, order id and locale info. This api is only available in the state after ready to ship. |

---

## Seller API

<a id="seller-api-108148"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10556&docId=108148&lang=en_US>

The table below lists APIs that can be used for seller information (email address) management.

| **API name** | **Description** |
| --- | --- |
| [GetSeller](https://open.lazada.com/apps/doc/api?path=%2Fseller%2Fget) | Get seller information by current seller ID. |
| [GetSellerMetricsById](https://open.lazada.com/apps/doc/api?path=%2Fseller%2Fmetrics%2Fget) | Get seller metrics data of the specific seller, like positive seller rating, ship on time rate and etc. |
| [SellerUpdate](https://open.lazada.com/apps/doc/api?path=%2Fseller%2Fupdate) | Update the email address of the seller who makes the call. |
| [UserUpdate](https://open.lazada.com/apps/doc/api?path=%2Fuser%2Fupdate) | Update the email address of a user under the seller account. |

---

## System API

<a id="system-api-108520"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10556&docId=108520&lang=en_US>

The table below lists APIs that are provided by the Open Platform.

| **API name** | **Description** |
| --- | --- |
| [generate access\_token](https://open.lazada.com/apps/doc/api?path=%2Fauth%2Ftoken%2Fcreate) | Get access token with the authorization code that is received from the callback URL when sellers complete APP authorization. |
| [refresh access\_token](https://open.lazada.com/apps/doc/api?path=%2Fauth%2Ftoken%2Frefresh) | Refresh the access token before it expires. |

---

