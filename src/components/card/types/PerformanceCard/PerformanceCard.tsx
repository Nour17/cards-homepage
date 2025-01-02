import Card from '../../Card'
import PerformanceItem from './components/PerformanceItem'
import Tag from '../../components/tag/Tag'
import { usePerformanceSummaryStyles, usePerformanceCardStyles } from './PerformanceCard.styles'
import { PerformanceCardProps, PerformanceSummaryProps, PerformanceType } from './PerformanceCard.types'
import { formatPercentage, formatPrice } from '../../../../lib/utils/NumberUtils'
import { CardProps } from '@/lib/types/CardTypes'
import AreaChartComponent from '@/components/charts/AreaChart'
import React from 'react'

function priceSign(type: PerformanceType): string {
    return type === PerformanceType.FAILURE ? '-' : ''
}

function PerformanceSummary({ type, amount, percentage, isTagFill }: PerformanceSummaryProps): React.JSX.Element {
    const performanceSummaryStyles = usePerformanceSummaryStyles()

    return (
        <div data-testId="performance-summary" className={performanceSummaryStyles.root}>
            {
                amount &&
                <div className={performanceSummaryStyles.amount}>
                    {priceSign(type)}{formatPrice(amount, 'USD', 'en-US')}
                </div>
            }
            {
                percentage &&
                <Tag type={type} data={formatPercentage(percentage)} fill={isTagFill} />
            }
        </div >
    )
}

export default function PerformanceCard(props: PerformanceCardProps): React.JSX.Element {
    const performanceCardStyles = usePerformanceCardStyles()
    const { performanceType, amount, percentage } = props

    const cardProps: CardProps = {
        ...props,
        header: {
            ...props.header,
            title: props.header?.title ?? 'Default Title',
            children: <PerformanceSummary type={performanceType!} amount={amount} percentage={percentage} isTagFill />
        }
    }

    return (
        <Card {...cardProps} >
            <div data-testId="performance-card" className={performanceCardStyles.root}>
                <div id={`chart-${props.id}`} className={performanceCardStyles.chartContainer}>
                    <AreaChartComponent containerId={`chart-${props.id}`} data={props.data} performanceType={performanceType} />
                </div>
                <div className={performanceCardStyles.dimensionsContainer}>
                    {
                        props.dimensions && Object.keys(props.dimensions).map((dimension, index) => (
                            <div key={index}>
                                <div className={performanceCardStyles.dimensionTitle}>
                                    Top contributing {dimension}
                                </div>
                                {
                                    props.dimensions![dimension].map((contributor, index) => (
                                        <PerformanceItem
                                            key={index}
                                            percentage={formatPercentage(contributor?.percent_contributor)}
                                            title={contributor.name}
                                            amount={priceSign(performanceType) + formatPrice(contributor.metric, 'USD', 'en-US')}
                                            type={performanceType!} />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </Card>
    )
}
