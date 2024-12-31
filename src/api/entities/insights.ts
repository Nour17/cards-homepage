export type ChartData = {
    date: string;
    metric: number;
};
  
export type ContributorValue = {
    id: number;
    name: string;
    metric: number; // The total revenue of the contributor with root level filter applied
    pct_diff: number; // The percentage difference between current and previous period of the contributor with root level filter applied
    diff: number; // The current period metric - previous period metric
    percent_contributor: number; // The contributors.abs_diff / abs_diff at root level to give the percentage of the change accounted for by this contributor. If this is >= 70% then only return one contributor at this level and provide one additional nested contributor.
 };
  
export type RootLevelCard = {
    root_level_value: string; // ID of object required
    metric: number; // revenue, imps, cpm default: revenue
    pct_diff: number; // The percentage change of the metric (current_period / previous_period) - 1
    diff: number; // The absolute difference in change for the metric current_period - previous_period
    chart: ChartData[];
    contributor_type_l1: string; // The dimension selected for the contributor. Capitalized and Pluralized for UI display.
    contributor_values_l1: ContributorValue[]; // The dimension filter value selected for the contributor
    contributor_type_l2: string; // The dimension selected for the contributor. Capitalized and Pluralized for UI display.
    contributor_values_l2: ContributorValue[]; // The dimension filter value selected for the contributor
};
  
type PerformanceSummary = {
    root_level_type: string; // The dimension selected as the focus for the card (channel, dsp, buyer, advertiser, insertion-order, ssp, publisher)
    root_level_metric: string;
    root_level_cards: RootLevelCard[];
};
  
type DebugInfo = {
    version: string;
};
  
export type FetchInsightsResponse = {
    status: string;
    dbg_info: DebugInfo;
    method: string;
    performance_summary: PerformanceSummary;
}

export type FetchPerformanceSummaryRequestParams = {
    rootLevelType: string;
    rootLevelValue: string;
    metric?: string;
    timePeriod?: string;
    contributorsLimit?: number;
    contributorsL1?: string;
    contributorsL2?: string;
    dominantContributorThreshold?: number;
  };
  