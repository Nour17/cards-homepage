import { render, screen } from '@testing-library/react'
import PerformanceCard from './PerformanceCard'
import { PerformanceType } from './PerformanceCard.types'
import { CardSize } from '@/lib/types/CardTypes'

jest.mock('@/components/charts/AreaChart', () => {
    return {
        __esModule: true,
        default: jest.fn(() => <div data-testid="area-chart" />)
    }
})

jest.mock('../../components/tag/Tag', () => {
    return {
        __esModule: true,
        default: jest.fn(() => <div data-testid="performance-summary-tag" />)
    }
})

jest.mock('./components/PerformanceItem', () => {
    return {
        __esModule: true,
        default: jest.fn(() => <div data-testid="performance-item" />)
    }
})

describe('PerformanceCard', () => {
    const defaultProps = {
        id: '1',
        performanceType: PerformanceType.SUCCESS,
        amount: 1000,
        percentage: 1,
        data: [],
        dimensions: {
            dimension1: [
                { id: 1, name: 'Contributor 1', percent_contributor: 0.5, metric: 500, pct_diff: 0, diff: 0 },
                { id: 2, name: 'Contributor 2', percent_contributor: 0.3, metric: 300, pct_diff: 0, diff: 0 }
            ]
        },
        header: {
            title: 'Test Title'
        },
        containerId: 'container-1',
        order: 1,
        type: 'performance',
        cardSize: CardSize.M
    }

    it('should render without crashing', () => {
        render(<PerformanceCard {...defaultProps} />)
        expect(screen.getByTestId('performance-card')).toBeInTheDocument()
    })

    it('should render Card component', () => {
        render(<PerformanceCard {...defaultProps} />)
        expect(screen.getByTestId('card')).toBeInTheDocument()
    })

    it('should render PerformanceSummary', () => {
        render(<PerformanceCard {...defaultProps} />)
        expect(screen.getByTestId('performance-summary')).toBeInTheDocument()
        expect(screen.getByText('$1,000')).toBeInTheDocument()
        expect(screen.getAllByTestId('performance-summary-tag')[0]).toBeInTheDocument()
    })

    it('should render PerformanceSummary', () => {
        render(<PerformanceCard {...defaultProps} performanceType={PerformanceType.FAILURE} />)
        expect(screen.getByTestId('performance-summary')).toBeInTheDocument()
        expect(screen.getByText('-$1,000')).toBeInTheDocument()
        expect(screen.getAllByTestId('performance-summary-tag')[0]).toBeInTheDocument()
    })

    it('should render AreaChartComponent', () => {
        render(<PerformanceCard {...defaultProps} />)
        const areaChartComponent = screen.getByTestId('area-chart')
        expect(areaChartComponent).toBeInTheDocument()
    })

    it('should render PerformanceItem for each contributor', () => {
        render(<PerformanceCard {...defaultProps} />)
        const performanceItems = screen.getAllByTestId('performance-item')
        expect(performanceItems.length).toBe(2)
    })
})
