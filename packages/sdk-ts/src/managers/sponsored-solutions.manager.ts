import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `sponsored-solutions-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class SponsoredSolutionsManager extends BaseManager {
  getSponsorSolutionsAdgroupAddadgroupbatch(params: Q<"/sponsor/solutions/adgroup/addAdgroupBatch", "get">) {
    return this.client.GET("/sponsor/solutions/adgroup/addAdgroupBatch", { params: { query: params } });
  }

  postSponsorSolutionsAdgroupAddadgroupbatch(body: B<"/sponsor/solutions/adgroup/addAdgroupBatch", "post">) {
    return this.client.POST("/sponsor/solutions/adgroup/addAdgroupBatch", { body });
  }

  postSponsorSolutionsAddsolution(body: B<"/sponsor/solutions/addSolution", "post">) {
    return this.client.POST("/sponsor/solutions/addSolution", { body });
  }

  getGprojectAdsAidcClick(params: Q<"/gproject/ads/aidc/click", "get">) {
    return this.client.GET("/gproject/ads/aidc/click", { params: { query: params } });
  }

  postGprojectAdsAidcClick(body: B<"/gproject/ads/aidc/click", "post">) {
    return this.client.POST("/gproject/ads/aidc/click", { body });
  }

  getSponsorSolutionsAdgroupDeleteadgroupbatch(params: Q<"/sponsor/solutions/adgroup/deleteAdgroupBatch", "get">) {
    return this.client.GET("/sponsor/solutions/adgroup/deleteAdgroupBatch", { params: { query: params } });
  }

  postSponsorSolutionsAdgroupDeleteadgroupbatch(body: B<"/sponsor/solutions/adgroup/deleteAdgroupBatch", "post">) {
    return this.client.POST("/sponsor/solutions/adgroup/deleteAdgroupBatch", { body });
  }

  getSponsorSolutionsCampaignDeletecampaign(params: Q<"/sponsor/solutions/campaign/deleteCampaign", "get">) {
    return this.client.GET("/sponsor/solutions/campaign/deleteCampaign", { params: { query: params } });
  }

  postSponsorSolutionsCampaignDeletecampaign(body: B<"/sponsor/solutions/campaign/deleteCampaign", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/deleteCampaign", { body });
  }

  getSponsorSolutionsAccountGetaccountsigninfo() {
    return this.client.GET("/sponsor/solutions/account/getAccountSignInfo", {});
  }

  getSponsorSolutionsWalletGetautotopupoptiononeconfig() {
    return this.client.GET("/sponsor/solutions/wallet/getAutoTopUpOptionOneConfig", {});
  }

  postSponsorSolutionsWalletGetautotopupoptiononeconfig() {
    return this.client.POST("/sponsor/solutions/wallet/getAutoTopUpOptionOneConfig", {});
  }

  getSponsorSolutionsCampaignGetcampaign(params: Q<"/sponsor/solutions/campaign/getCampaign", "get">) {
    return this.client.GET("/sponsor/solutions/campaign/getCampaign", { params: { query: params } });
  }

  postSponsorSolutionsCampaignGetcampaign(body: B<"/sponsor/solutions/campaign/getCampaign", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/getCampaign", { body });
  }

  getSponsorSolutionsCampaignGetcampaigncount(params: Q<"/sponsor/solutions/campaign/getCampaignCount", "get">) {
    return this.client.GET("/sponsor/solutions/campaign/getCampaignCount", { params: { query: params } });
  }

  postSponsorSolutionsCampaignGetcampaigncount(body: B<"/sponsor/solutions/campaign/getCampaignCount", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/getCampaignCount", { body });
  }

  getSponsorSolutionsReportGetdiscoveryreportadgroup(params: Q<"/sponsor/solutions/report/getDiscoveryReportAdgroup", "get">) {
    return this.client.GET("/sponsor/solutions/report/getDiscoveryReportAdgroup", { params: { query: params } });
  }

  postSponsorSolutionsReportGetdiscoveryreportadgroup(body: B<"/sponsor/solutions/report/getDiscoveryReportAdgroup", "post">) {
    return this.client.POST("/sponsor/solutions/report/getDiscoveryReportAdgroup", { body });
  }

  getSponsorSolutionsReportGetdiscoveryreportaudience(params: Q<"/sponsor/solutions/report/getDiscoveryReportAudience", "get">) {
    return this.client.GET("/sponsor/solutions/report/getDiscoveryReportAudience", { params: { query: params } });
  }

  postSponsorSolutionsReportGetdiscoveryreportaudience(body: B<"/sponsor/solutions/report/getDiscoveryReportAudience", "post">) {
    return this.client.POST("/sponsor/solutions/report/getDiscoveryReportAudience", { body });
  }

  getSponsorSolutionsReportGetdiscoveryreportcampaign(params: Q<"/sponsor/solutions/report/getDiscoveryReportCampaign", "get">) {
    return this.client.GET("/sponsor/solutions/report/getDiscoveryReportCampaign", { params: { query: params } });
  }

  postSponsorSolutionsReportGetdiscoveryreportcampaign(body: B<"/sponsor/solutions/report/getDiscoveryReportCampaign", "post">) {
    return this.client.POST("/sponsor/solutions/report/getDiscoveryReportCampaign", { body });
  }

  getSponsorSolutionsReportGetdiscoveryreportkeyword(params: Q<"/sponsor/solutions/report/getDiscoveryReportKeyword", "get">) {
    return this.client.GET("/sponsor/solutions/report/getDiscoveryReportKeyword", { params: { query: params } });
  }

  postSponsorSolutionsReportGetdiscoveryreportkeyword(body: B<"/sponsor/solutions/report/getDiscoveryReportKeyword", "post">) {
    return this.client.POST("/sponsor/solutions/report/getDiscoveryReportKeyword", { body });
  }

  getSponsorSolutionsAccountGetlatestsigninfo() {
    return this.client.GET("/sponsor/solutions/account/getLatestSignInfo", {});
  }

  getSponsorSolutionsReportGetreportcampaignonpreplacement(params: Q<"/sponsor/solutions/report/getReportCampaignOnPrePlacement", "get">) {
    return this.client.GET("/sponsor/solutions/report/getReportCampaignOnPrePlacement", { params: { query: params } });
  }

  postSponsorSolutionsReportGetreportcampaignonpreplacement(body: B<"/sponsor/solutions/report/getReportCampaignOnPrePlacement", "post">) {
    return this.client.POST("/sponsor/solutions/report/getReportCampaignOnPrePlacement", { body });
  }

  getSponsorSolutionsReportGetreportoverview(params: Q<"/sponsor/solutions/report/getReportOverview", "get">) {
    return this.client.GET("/sponsor/solutions/report/getReportOverview", { params: { query: params } });
  }

  postSponsorSolutionsReportGetreportoverview(body: B<"/sponsor/solutions/report/getReportOverview", "post">) {
    return this.client.POST("/sponsor/solutions/report/getReportOverview", { body });
  }

  getSponsorSolutionsReportGetreportoverviewmetric(params: Q<"/sponsor/solutions/report/getReportOverviewMetric", "get">) {
    return this.client.GET("/sponsor/solutions/report/getReportOverviewMetric", { params: { query: params } });
  }

  postSponsorSolutionsReportGetreportoverviewmetric(body: B<"/sponsor/solutions/report/getReportOverviewMetric", "post">) {
    return this.client.POST("/sponsor/solutions/report/getReportOverviewMetric", { body });
  }

  getSponsorSolutionsCategoryListcategory(params: Q<"/sponsor/solutions/category/listCategory", "get">) {
    return this.client.GET("/sponsor/solutions/category/listCategory", { params: { query: params } });
  }

  postSponsorSolutionsCategoryListcategory(body: B<"/sponsor/solutions/category/listCategory", "post">) {
    return this.client.POST("/sponsor/solutions/category/listCategory", { body });
  }

  getSponsorSolutionsKeywordListkeywordbyadgroup(params: Q<"/sponsor/solutions/keyword/listKeywordByAdgroup", "get">) {
    return this.client.GET("/sponsor/solutions/keyword/listKeywordByAdgroup", { params: { query: params } });
  }

  postSponsorSolutionsKeywordListkeywordbyadgroup(body: B<"/sponsor/solutions/keyword/listKeywordByAdgroup", "post">) {
    return this.client.POST("/sponsor/solutions/keyword/listKeywordByAdgroup", { body });
  }

  getSponsorSolutionsKeywordListkeywordbyitem(params: Q<"/sponsor/solutions/keyword/listKeywordByItem", "get">) {
    return this.client.GET("/sponsor/solutions/keyword/listKeywordByItem", { params: { query: params } });
  }

  postSponsorSolutionsKeywordListkeywordbyitem(body: B<"/sponsor/solutions/keyword/listKeywordByItem", "post">) {
    return this.client.POST("/sponsor/solutions/keyword/listKeywordByItem", { body });
  }

  getSponsorSolutionsWalletModifyautotopupoptiononeconfig(params: Q<"/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig", "get">) {
    return this.client.GET("/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig", { params: { query: params } });
  }

  postSponsorSolutionsWalletModifyautotopupoptiononeconfig(body: B<"/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig", "post">) {
    return this.client.POST("/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig", { body });
  }

  getSponsorSolutionsAdgroupSearchadgrouplist(params: Q<"/sponsor/solutions/adgroup/searchAdgroupList", "get">) {
    return this.client.GET("/sponsor/solutions/adgroup/searchAdgroupList", { params: { query: params } });
  }

  postSponsorSolutionsAdgroupSearchadgrouplist(body: B<"/sponsor/solutions/adgroup/searchAdgroupList", "post">) {
    return this.client.POST("/sponsor/solutions/adgroup/searchAdgroupList", { body });
  }

  getSponsorSolutionsCampaignSearchcampaignlist(params: Q<"/sponsor/solutions/campaign/searchCampaignList", "get">) {
    return this.client.GET("/sponsor/solutions/campaign/searchCampaignList", { params: { query: params } });
  }

  postSponsorSolutionsCampaignSearchcampaignlist(body: B<"/sponsor/solutions/campaign/searchCampaignList", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/searchCampaignList", { body });
  }

  getSponsorSolutionsKeywordSearchkeyword(params: Q<"/sponsor/solutions/keyword/searchKeyword", "get">) {
    return this.client.GET("/sponsor/solutions/keyword/searchKeyword", { params: { query: params } });
  }

  postSponsorSolutionsKeywordSearchkeyword(body: B<"/sponsor/solutions/keyword/searchKeyword", "post">) {
    return this.client.POST("/sponsor/solutions/keyword/searchKeyword", { body });
  }

  getSponsorSolutionsProductSearchproductwithpage(params: Q<"/sponsor/solutions/product/searchProductWithPage", "get">) {
    return this.client.GET("/sponsor/solutions/product/searchProductWithPage", { params: { query: params } });
  }

  postSponsorSolutionsProductSearchproductwithpage(body: B<"/sponsor/solutions/product/searchProductWithPage", "post">) {
    return this.client.POST("/sponsor/solutions/product/searchProductWithPage", { body });
  }

  getSponsorSolutionsAccountSign() {
    return this.client.GET("/sponsor/solutions/account/sign", {});
  }

  postSponsorSolutionsAccountSign() {
    return this.client.POST("/sponsor/solutions/account/sign", {});
  }

  getSponsorSolutionsAdgroupUpdateadgroupbatch(params: Q<"/sponsor/solutions/adgroup/updateAdgroupBatch", "get">) {
    return this.client.GET("/sponsor/solutions/adgroup/updateAdgroupBatch", { params: { query: params } });
  }

  postSponsorSolutionsAdgroupUpdateadgroupbatch(body: B<"/sponsor/solutions/adgroup/updateAdgroupBatch", "post">) {
    return this.client.POST("/sponsor/solutions/adgroup/updateAdgroupBatch", { body });
  }

  getSponsorSolutionsCampaignUpdatecampaign(params: Q<"/sponsor/solutions/campaign/updateCampaign", "get">) {
    return this.client.GET("/sponsor/solutions/campaign/updateCampaign", { params: { query: params } });
  }

  postSponsorSolutionsCampaignUpdatecampaign(body: B<"/sponsor/solutions/campaign/updateCampaign", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/updateCampaign", { body });
  }

}
