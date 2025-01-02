import { fetchPerformanceSummary } from './fetchInsights';
import { FetchInsightsResponse, FetchPerformanceSummaryRequestParams } from './entities/insights';

describe('fetchPerformanceSummary', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should fetch performance fetchInsights with correct query params', async () => {
        const params: FetchPerformanceSummaryRequestParams = {
            rootLevelType: 'type1',
            rootLevelValue: 'value1',
            metric: 'revenue',
            timePeriod: 'last-7-days',
            contributorsLimit: 3,
            contributorsL1: 'l1',
            contributorsL2: 'l2',
            dominantContributorThreshold: 0.5,
        };

        const mockResponse: FetchInsightsResponse = {
            status: 'success',
            dbg_info: {
                version: '12345',
            },
            method: 'GET',
            performance_summary: {
                root_level_type: 'type1',
                root_level_metric: 'revenue',
                root_level_cards: [
                    {
                        "root_level_value": "open_exchange",
                        "metric": 42939962.4555,
                        "pct_diff": 21.2888,
                        "diff": 7536883.8042,
                        "chart": [
                          {
                            "date": "2024-10-24T00:00:00Z",
                            "metric": 1404824.8994
                          },
                          {
                            "date": "2024-10-25T00:00:00Z",
                            "metric": 1201216.2413
                          }
                        ],
                        "contributor_type_l1": "DSP",
                        "contributor_values_l1": [
                          {
                            "id": 483,
                            "name": "MSAN",
                            "metric": 18376394.6453,
                            "pct_diff": 22.4559,
                            "diff": 3369858.3308,
                            "percent_contributor": 44.71156008697009
                          }
                        ],
                        "contributor_type_l2": "Buyer",
                        "contributor_values_l2": [
                          {
                            "id": 12085,
                            "name": "MSAN - Buyer",
                            "metric": 17899028.025,
                            "pct_diff": 24.5088,
                            "diff": 3523312.1449,
                            "percent_contributor": 46.7475980316507
                          }
                        ]
                      },
                ],
            },
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse),
            })
        ) as jest.Mock;


        const result = await fetchPerformanceSummary(params);
        expect(result).toEqual(mockResponse);
        expect(global.fetch).toHaveBeenCalledWith(
            'http://localhost:8080/insights/api/performance_summary?root-level-type=type1&root-level-value=value1&metric=revenue&time-period=last-7-days&contributors-limit=3&contributors-l1=l1&contributors-l2=l2&dominant-contributor-threshold=0.5'
        );
    });

    it('should throw an error if network response is not ok', async () => {
        const params: FetchPerformanceSummaryRequestParams = {
            rootLevelType: 'type1',
            rootLevelValue: 'value1',
            metric: 'revenue',
            timePeriod: 'last-7-days',
            contributorsLimit: 3,
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.reject(),
            })
        ) as jest.Mock;

        await expect(fetchPerformanceSummary(params)).rejects.toThrow('Network response was not ok');
    });
});