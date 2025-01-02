import { render, screen } from '@testing-library/react';
import PerformanceSection from './PerformanceSection';
import useFetch from '@/lib/hooks/useFetchHook';
import { FetchInsightsResponse } from '@/api/entities/insights';
import { insightResponse } from '@/helpers/insightResponse';

jest.mock('@/components/charts/AreaChart', () => {
    return {
        __esModule: true,
        default: jest.fn(() => <div data-testid="area-chart" />)
    }
})

jest.mock('@/lib/hooks/useFetchHook');
jest.mock('@/api/fetchInsights');

const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

const mockInsights: FetchInsightsResponse = { ...insightResponse }

Object.defineProperty(global.crypto, 'randomUUID', {
    value: jest.fn().mockReturnValue('test-uuid')
});

describe('PerformanceSection', () => {
    beforeEach(() => {
        mockUseFetch.mockReturnValue({ value: mockInsights, loading: false });
    });

    it('renders without crashing', () => {
        render(<PerformanceSection />);
        expect(screen.getByText('Performance highlights')).toBeInTheDocument();
    });

    it('renders the correct number of PerformanceCard components', () => {
        render(<PerformanceSection />);
        const cards = screen.getAllByTestId('performance-card');
        expect(cards).toHaveLength(mockInsights.performance_summary.root_level_cards.length);
    });

    it('renders empty component when no fetched insights is undefined', () => {
        mockUseFetch.mockReturnValue({ value: undefined, loading: false });
        const { container } = render(<PerformanceSection />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders empty component when no root_level_cards', () => {
        mockUseFetch.mockReturnValue({ value: { performance_summary: { root_level_cards: [] } }, loading: false });
        const { container } = render(<PerformanceSection />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders only one contributor for Open exchange -> DSP if a contributor pct_diff > 70', () => {
        render(<PerformanceSection />);
        expect(screen.getByText('Open Exchange')).toBeInTheDocument();
        expect(screen.getByText('Taboola Native')).toBeInTheDocument();
        expect(screen.queryByText('MSAN')).not.toBeInTheDocument();
        expect(screen.queryByText('Baidu (Hong Kong) Limited')).not.toBeInTheDocument();
    });

    it('renders only one contributor for Open exchange -> Buyer if a contributor pct_diff > 70', () => {
        render(<PerformanceSection />);
        expect(screen.getByText('Open Exchange')).toBeInTheDocument();
        expect(screen.getByText('Taboola Inc. (Bidder)')).toBeInTheDocument();
        expect(screen.queryByText('MSAN - Buyer')).not.toBeInTheDocument();
        expect(screen.queryByText('Baidu (Hong Kong) Limited')).not.toBeInTheDocument();
    });

    it('renders L1s all contributors for PSP -> SSP if no contributor pct_diff > 70 ', () => {
        render(<PerformanceSection />);
        expect(screen.getByText('Psp')).toBeInTheDocument();
        expect(screen.getByText('Triplelift (PSP)')).toBeInTheDocument();
        expect(screen.getByText('Rubicon Project (PSP)')).toBeInTheDocument();
        expect(screen.getByText('Index Exchange (PSP)')).toBeInTheDocument();
    });
});