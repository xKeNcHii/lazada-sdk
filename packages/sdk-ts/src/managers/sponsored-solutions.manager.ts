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
  postSponsorSolutionsAdgroupAddadgroupbatch(body: B<"/sponsor/solutions/adgroup/addAdgroupBatch", "post">) {
    return this.client.POST("/sponsor/solutions/adgroup/addAdgroupBatch", { body });
  }

  postSponsorSolutionsAddsolution(body: B<"/sponsor/solutions/addSolution", "post">) {
    return this.client.POST("/sponsor/solutions/addSolution", { body });
  }

  postGprojectAdsAidcClick(body: B<"/gproject/ads/aidc/click", "post">) {
    return this.client.POST("/gproject/ads/aidc/click", { body });
  }

  postSponsorSolutionsAdgroupDeleteadgroupbatch(body: B<"/sponsor/solutions/adgroup/deleteAdgroupBatch", "post">) {
    return this.client.POST("/sponsor/solutions/adgroup/deleteAdgroupBatch", { body });
  }

  postSponsorSolutionsCampaignDeletecampaign(body: B<"/sponsor/solutions/campaign/deleteCampaign", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/deleteCampaign", { body });
  }

  getSponsorSolutionsAccountGetaccountsigninfo() {
    return this.client.GET("/sponsor/solutions/account/getAccountSignInfo", {});
  }

  postSponsorSolutionsWalletGetautotopupoptiononeconfig() {
    return this.client.POST("/sponsor/solutions/wallet/getAutoTopUpOptionOneConfig", {});
  }

  postSponsorSolutionsCampaignGetcampaign(body: B<"/sponsor/solutions/campaign/getCampaign", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/getCampaign", { body });
  }

  postSponsorSolutionsCampaignGetcampaigncount(body: B<"/sponsor/solutions/campaign/getCampaignCount", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/getCampaignCount", { body });
  }

  postSponsorSolutionsReportGetdiscoveryreportadgroup(body: B<"/sponsor/solutions/report/getDiscoveryReportAdgroup", "post">) {
    return this.client.POST("/sponsor/solutions/report/getDiscoveryReportAdgroup", { body });
  }

  postSponsorSolutionsReportGetdiscoveryreportaudience(body: B<"/sponsor/solutions/report/getDiscoveryReportAudience", "post">) {
    return this.client.POST("/sponsor/solutions/report/getDiscoveryReportAudience", { body });
  }

  postSponsorSolutionsReportGetdiscoveryreportcampaign(body: B<"/sponsor/solutions/report/getDiscoveryReportCampaign", "post">) {
    return this.client.POST("/sponsor/solutions/report/getDiscoveryReportCampaign", { body });
  }

  postSponsorSolutionsReportGetdiscoveryreportkeyword(body: B<"/sponsor/solutions/report/getDiscoveryReportKeyword", "post">) {
    return this.client.POST("/sponsor/solutions/report/getDiscoveryReportKeyword", { body });
  }

  getSponsorSolutionsAccountGetlatestsigninfo() {
    return this.client.GET("/sponsor/solutions/account/getLatestSignInfo", {});
  }

  postSponsorSolutionsReportGetreportcampaignonpreplacement(body: B<"/sponsor/solutions/report/getReportCampaignOnPrePlacement", "post">) {
    return this.client.POST("/sponsor/solutions/report/getReportCampaignOnPrePlacement", { body });
  }

  postSponsorSolutionsReportGetreportoverview(body: B<"/sponsor/solutions/report/getReportOverview", "post">) {
    return this.client.POST("/sponsor/solutions/report/getReportOverview", { body });
  }

  postSponsorSolutionsReportGetreportoverviewmetric(body: B<"/sponsor/solutions/report/getReportOverviewMetric", "post">) {
    return this.client.POST("/sponsor/solutions/report/getReportOverviewMetric", { body });
  }

  postSponsorSolutionsCategoryListcategory(body: B<"/sponsor/solutions/category/listCategory", "post">) {
    return this.client.POST("/sponsor/solutions/category/listCategory", { body });
  }

  postSponsorSolutionsKeywordListkeywordbyadgroup(body: B<"/sponsor/solutions/keyword/listKeywordByAdgroup", "post">) {
    return this.client.POST("/sponsor/solutions/keyword/listKeywordByAdgroup", { body });
  }

  postSponsorSolutionsKeywordListkeywordbyitem(body: B<"/sponsor/solutions/keyword/listKeywordByItem", "post">) {
    return this.client.POST("/sponsor/solutions/keyword/listKeywordByItem", { body });
  }

  postSponsorSolutionsWalletModifyautotopupoptiononeconfig(body: B<"/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig", "post">) {
    return this.client.POST("/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig", { body });
  }

  postSponsorSolutionsAdgroupSearchadgrouplist(body: B<"/sponsor/solutions/adgroup/searchAdgroupList", "post">) {
    return this.client.POST("/sponsor/solutions/adgroup/searchAdgroupList", { body });
  }

  postSponsorSolutionsCampaignSearchcampaignlist(body: B<"/sponsor/solutions/campaign/searchCampaignList", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/searchCampaignList", { body });
  }

  postSponsorSolutionsKeywordSearchkeyword(body: B<"/sponsor/solutions/keyword/searchKeyword", "post">) {
    return this.client.POST("/sponsor/solutions/keyword/searchKeyword", { body });
  }

  postSponsorSolutionsProductSearchproductwithpage(body: B<"/sponsor/solutions/product/searchProductWithPage", "post">) {
    return this.client.POST("/sponsor/solutions/product/searchProductWithPage", { body });
  }

  postSponsorSolutionsAccountSign() {
    return this.client.POST("/sponsor/solutions/account/sign", {});
  }

  postSponsorSolutionsAdgroupUpdateadgroupbatch(body: B<"/sponsor/solutions/adgroup/updateAdgroupBatch", "post">) {
    return this.client.POST("/sponsor/solutions/adgroup/updateAdgroupBatch", { body });
  }

  postSponsorSolutionsCampaignUpdatecampaign(body: B<"/sponsor/solutions/campaign/updateCampaign", "post">) {
    return this.client.POST("/sponsor/solutions/campaign/updateCampaign", { body });
  }

}
