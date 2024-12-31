import { FetchInsightsResponse, FetchPerformanceSummaryRequestParams } from "./entities/insights"

export async function fetchInsights() {
    const response = await fetch('/api/data/insights.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: FetchInsightsResponse = await response.json()
    return data
}

export async function fetchPerformanceSummary(params: FetchPerformanceSummaryRequestParams): Promise<FetchInsightsResponse> {
  const {
    rootLevelType,
    rootLevelValue,
    metric = "revenue",
    timePeriod = "last-7-days",
    contributorsLimit = 3,
    contributorsL1,
    contributorsL2,
    dominantContributorThreshold,
  } = params;

  const queryParams = new URLSearchParams({
    "root-level-type": rootLevelType,
    "root-level-value": rootLevelValue,
    metric,
    "time-period": timePeriod,
    "contributors-limit": contributorsLimit.toString(),
  });

  if (contributorsL1) {
    queryParams.append("contributors-l1", contributorsL1);
  }
  if (contributorsL2) {
    queryParams.append("contributors-l2", contributorsL2);
  }
  if (dominantContributorThreshold) {
    queryParams.append("dominant-contributor-threshold", dominantContributorThreshold.toString());
  }

  const response = await fetch(`http://localhost:8080/insights/api/performance_summary?${queryParams.toString()}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data as FetchInsightsResponse;
}