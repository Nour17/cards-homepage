import { render } from '@testing-library/react';
import Tag, { TagProps } from './Tag';
import { PerformanceType } from '../../types/PerformanceCard/PerformanceCard.types';

describe('Tag component', () => {
    const defaultProps: TagProps = {
        type: PerformanceType.SUCCESS,
        data: '75',
        fill: false,
        hidePie: false,
    };

    it('renders without crashing', () => {
        const { container } = render(<Tag {...defaultProps} />);
        expect(container).toBeInTheDocument();

        const innerDiv = container.querySelector('[data-testid="percentage-pie"]');
        expect(innerDiv).toBeInTheDocument();
    });

    it('displays the correct data', () => {
        const { getByText } = render(<Tag {...defaultProps} />);
        expect(getByText('75')).toBeInTheDocument();
    });

    it('displays the tag without chart', () => {
        const { container } = render(<Tag {...defaultProps} hidePie={true} />);
        expect(container).toBeInTheDocument();

        const innerDiv = container.querySelector('[data-testid="percentage-pie"]');
        expect(innerDiv).not.toBeInTheDocument();
    });
});