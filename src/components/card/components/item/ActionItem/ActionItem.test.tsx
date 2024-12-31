import { render, screen, fireEvent } from '@testing-library/react';
import ActionItem from './ActionItem';
import { CardItemProps } from '@/lib/types/CardTypes';

const mockItem: CardItemProps = {
    id: '1',
    name: 'Test Item',
    date: new Date().toDateString(),
    actions: [
        {
            label: 'Action 1',
            type: 'primary',
            onClick: jest.fn(),
            icon: <span>Icon1</span>
        },
        {
            label: 'Action 2',
            onClick: jest.fn(),
            icon: <span>Icon2</span>
        }
    ]
};

describe('ActionItem', () => {
    test('renders item name and date', () => {
        render(<ActionItem item={mockItem} />);
        expect(screen.getByText('Test Item')).toBeInTheDocument();
        expect(screen.getByText(/Last ran:/)).toBeInTheDocument();
    });

    test('shows actions on hover and hides actions when not hovered', () => {
        render(<ActionItem item={mockItem} />);
        const actionItemDiv = screen.getByText('Test Item').closest('div');
        if (actionItemDiv) {
            fireEvent.mouseEnter(actionItemDiv);
        }
        expect(screen.getByText('Action 1')).toBeInTheDocument();
        expect(screen.getByText('Action 2')).toBeInTheDocument();

        if (actionItemDiv) {
            fireEvent.mouseLeave(actionItemDiv);
        }
        expect(screen.queryByText('Action 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Action 2')).not.toBeInTheDocument();
    });

    test('calls action onClick when action button is clicked', () => {
        render(<ActionItem item={mockItem} />);
        const actionItemDiv = screen.getByText('Test Item').closest('div');
        if (actionItemDiv) {
            fireEvent.mouseEnter(actionItemDiv);
        }
        const actionButton = screen.getByText('Action 1').closest('button');
        if (actionButton) {
            fireEvent.click(actionButton);
        }
        expect(mockItem.actions?.[0].onClick).toHaveBeenCalled();
    });
});
