import useFetch from '@/lib/hooks/useFetchHook';
import { ContributorValue, FetchInsightsResponse, RootLevelCard } from '@/api/entities/insights';
import { fetchInsights } from '@/api/fetchInsights';
import PerformanceCard from '../card/types/PerformanceCard/PerformanceCard';
import CardsWrapper from '../wrapper/CardsWrapper';
import { PerformanceType } from '../card/types/PerformanceCard/PerformanceCard.types';
import { CardSize } from '@/lib/types/CardTypes';
import React from 'react';

function capitalizeFirstChar(value: string): string {
    return value
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function getPerformanceType(value: number): PerformanceType {
    return value > 0 ? PerformanceType.SUCCESS : PerformanceType.FAILURE;
}

function getContributorPerLevel(values: ContributorValue[]): ContributorValue[] {
    // Find the first contributor with a percent_contributor >= 70%, if any exists then return only that contributor else return all contributors
    const contributorAbove70pctContibution = values.findIndex(value => value.pct_diff >= 70);
    return contributorAbove70pctContibution !== -1 ? [values[contributorAbove70pctContibution]] : values;
}

function getContributors(card: RootLevelCard): Record<string, ContributorValue[]> {
    // if there is only one contributor at level 1 then return the contributors at level 2
    // else return the contributors at level 1
    const l1Contributors = getContributorPerLevel(card.contributor_values_l1);
    const contributors: Record<string, ContributorValue[]> = {
        [card.contributor_type_l1]: l1Contributors,
    }

    if (l1Contributors.length === 1) {
        contributors[card.contributor_type_l2] = getContributorPerLevel(card.contributor_values_l2);
    }

    return contributors;
}

export default function PerformanceSection(): React.JSX.Element {
    const { value: insights } = useFetch<FetchInsightsResponse>(fetchInsights);
    const root_level_cards = insights?.performance_summary.root_level_cards;

    if (!root_level_cards || root_level_cards.length === 0) {
        return <></>
    }

    const wrapperId = crypto.randomUUID().split('-')[0];

    return (
        <CardsWrapper id={wrapperId} title='Performance highlights'>
            {root_level_cards.map((card, index) =>
                <PerformanceCard
                    key={index}
                    order={index}
                    id={crypto.randomUUID().split('-')[0]}
                    containerId={wrapperId}
                    header={{ title: capitalizeFirstChar(card.root_level_value) }}
                    data={card.chart}
                    dimensions={getContributors(card)}
                    percentage={card.pct_diff}
                    amount={card.metric}
                    type="PerformanceCard"
                    isResizable={true}
                    performanceType={getPerformanceType(card.pct_diff)}
                    cardSize={CardSize.S} />)}
        </CardsWrapper>)
}
