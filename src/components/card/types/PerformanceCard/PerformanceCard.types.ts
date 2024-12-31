import { CardItemGroupProps, CardItemProps, CardProps } from "@/lib/types/CardTypes"
import { ChartData, ContributorValue } from "@/api/entities/insights"

export enum PerformanceType {
    SUCCESS = 'success',
    FAILURE = 'failure'
}

export type CardItemLinksGroupProps = {
    title: string,
    links: CardItemProps[]
}

export interface PerformanceCardProps extends CardProps {
    performanceType: PerformanceType,
    amount?: number,
    percentage?: number,
    items?: CardItemProps[],
    data: ChartData[],
    itemsGroup?: CardItemGroupProps[],
    dimensions?: Record<string, ContributorValue[]>
}

export type PerformanceSummaryProps = { 
    type: PerformanceType, 
    isTagFill?: boolean,
    amount?: number, 
    percentage?: number 
}