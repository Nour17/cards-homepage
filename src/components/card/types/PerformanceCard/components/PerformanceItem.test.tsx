import { render, screen } from '@testing-library/react';
import PerformanceItem, { PerformanceItemProps } from './PerformanceItem';
import { PerformanceType } from '../PerformanceCard.types';

jest.mock('../../../components/tag/Tag', () => {
    return {
        __esModule: true,
        default: jest.fn(() => <div data-testid="tag" />)
    }
})

describe('PerformanceItem', () => {
    const defaultProps: PerformanceItemProps = {
        percentage: '75%',
        title: 'Performance Title',
        amount: '$1000',
        type: PerformanceType.SUCCESS,
    };

    const setup = (props = defaultProps) => render(<PerformanceItem {...props} />);

    it('should render without crashing', () => {
        setup();
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    });

    it('should render the Tag component', () => {
        setup();
        expect(screen.getAllByTestId('tag')[0]).toBeInTheDocument()
    });

    it('should render the title and amount', () => {
        setup();
        const titleDiv = screen.getByText(defaultProps.title);
        expect(titleDiv).toBeInTheDocument();
        const amountDiv = screen.getByText(defaultProps.amount);
        expect(amountDiv).toBeInTheDocument();
    });
});