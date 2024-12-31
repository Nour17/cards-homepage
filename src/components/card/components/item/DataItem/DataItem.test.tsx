import { render, screen } from '@testing-library/react';
import DataItem, { DataItemProps } from './DataItem';
import { formatPrice } from '@/lib/utils/NumberUtils';

jest.mock('@/lib/utils/NumberUtils', () => ({
    formatPrice: jest.fn((amount, currency) => `${currency} ${amount}`)
}));

const mockProps: DataItemProps = {
    name: 'Test Data Item',
    count: 10,
    type: 'money',
    represent: 'items',
    value: {
        amount: 100,
        currency: 'USD'
    }
};

describe('DataItem', () => {
    test('renders item name and count', () => {
        render(<DataItem {...mockProps} />);
        expect(screen.getByText('Test Data Item')).toBeInTheDocument();
        expect(screen.getByText('10 items')).toBeInTheDocument();
    });

    test('renders formatted value when value is provided', () => {
        render(<DataItem {...mockProps} />);
        expect(screen.getByText('USD 100')).toBeInTheDocument();
    });

    test('renders formatted value numarically', () => {
        render(<DataItem {...mockProps} type='numerical' />);
        expect(screen.getByText('100')).toBeInTheDocument();
    });

    test('renders value as money but default to USD', () => {
        const { value, ...propsWithoutValue } = mockProps;

        render(<DataItem {...propsWithoutValue} value={{ amount: 100 }} />);
        expect(screen.getByText('USD 100')).toBeInTheDocument();
    });

    test('does not render value when value is not provided', () => {
        const { value, ...propsWithoutValue } = mockProps;
        render(<DataItem {...propsWithoutValue} />);
        expect(screen.queryByText('USD 100')).not.toBeInTheDocument();
    });

    test('calls formatPrice with correct arguments for money type', () => {
        render(<DataItem {...mockProps} />);
        expect(formatPrice).toHaveBeenCalledWith(100, 'USD');
    });

});
