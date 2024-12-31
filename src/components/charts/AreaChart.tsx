import { AreaChart, IChartProps, ILineChartPoints, ILineChartDataPoint, ICartesianChartStyles } from '@fluentui/react-charting'
import { ThemeProvider } from '@fluentui/react-theme-provider'
import useContainerSizeHook from '@/lib/hooks/useContainerSizeHook'
import { ChartData } from "@/api/entities/insights"
import { formatPrice } from '@/lib/utils/NumberUtils'
import { PerformanceType } from '../card/types/PerformanceCard/PerformanceCard.types'
import { JSX } from 'react'

const chartStyles: ICartesianChartStyles = {
    chartWrapper: { overflow: 'hidden' },
    xAxis: { display: 'none' },
    yAxis: { display: 'none' },
}

export const convertChartDataToLineChartDataPoints = (chartData: ChartData[]): ILineChartDataPoint[] => {
    return chartData.map(data => ({
        x: new Date(data.date),
        y: data.metric,
        xAxisCalloutData: new Date(data.date).toDateString(),
        yAxisCalloutData: formatPrice(data.metric, 'USD', 'en-US'),
        hideCallout: true,
    }));
};

type AreaChartComponentProps = {
    containerId: string,
    data: ChartData[],
    isResizable?: boolean,
    parentRef?: HTMLElement,
    performanceType?: PerformanceType,
}

export default function AreaChartComponent(props: AreaChartComponentProps): JSX.Element {
    const containerSize = useContainerSizeHook(props.containerId, props.isResizable || true)

    const chartPoints: ILineChartPoints[] = [{
        legend: '',
        data: convertChartDataToLineChartDataPoints(props.data),
        color: props.performanceType === PerformanceType.SUCCESS ? '#5EC75A' : '#C50F1F',
        opacity: 0.19,
        lineOptions: {
            strokeWidth: 1,
        },
    }]

    const chart: IChartProps = { chartTitle: 'Area chart', lineChartData: chartPoints }

    return (
        <ThemeProvider>
            <div
                data-testid="area-chart"
                style={{
                    width: `${containerSize.width}px`,
                    height: `${containerSize.height}px`,
                }}>
                <AreaChart
                    culture={window.navigator.language}
                    height={containerSize.height}
                    width={containerSize.width}
                    data={chart}
                    enableGradient={true}
                    enablePerfOptimization={true}
                    optimizeLargeData
                    hideLegend={true}
                    styles={chartStyles}
                    margins={{ left: 15, right: 0, top: 0, bottom: 0 }}
                    calloutProps={{ onDismiss: () => { console.log('123') } }}
                />
            </div>
        </ThemeProvider>
    )
}