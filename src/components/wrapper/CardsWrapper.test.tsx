import { render, screen } from '@testing-library/react';
import CardsWrapper from './CardsWrapper';

describe('CardsWrapper', () => {
    it('renders children correctly', () => {
        render(<CardsWrapper id="test-id">Test Content</CardsWrapper>);
        const content = screen.getByText('Test Content');
        expect(content).toBeInTheDocument();
    });

    it('renders title when provided', () => {
        render(<CardsWrapper id="test-id" title="Test Title">Test Content</CardsWrapper>);
        const title = screen.getByTestId('card-wrapper-title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Test Title');
    });

    it('does not render title when not provided', () => {
        render(<CardsWrapper id="test-id">Test Content</CardsWrapper>);
        const title = screen.queryByTestId('card-wrapper-title');
        expect(title).not.toBeInTheDocument();
    });
});