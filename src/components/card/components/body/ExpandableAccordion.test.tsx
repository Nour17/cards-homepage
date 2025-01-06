import { render, screen, fireEvent } from '@testing-library/react';
import ExpandableAccordion from './ExpandableAccordion';
import '@testing-library/jest-dom';

describe('ExpandableAccordion', () => {
  const children = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
    <div key="4">Item 4</div>,
  ];

  it('renders all items when maximumItems is not specified', () => {
    render(<ExpandableAccordion title='Show changelog' children={children} />);

    const header = screen.getByText('Show changelog');
    fireEvent.click(header);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('Item 4')).toBeInTheDocument();
  });

  it('renders only the maximum number of items and a "show more" link when maximumItems is specified', () => {
    render(
      <ExpandableAccordion
        title='Show changelog'
        children={children}
        maximumItems={2}
        moreAnchor={{ type: 'categories', to: '/more-categories' }}
      />
    );

    const header = screen.getByText('Show changelog');
    fireEvent.click(header);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
    expect(screen.queryByText('Item 4')).not.toBeInTheDocument();
    expect(screen.getByText('+2 more categories')).toBeInTheDocument();
  });

  it('renders a clickable "show more" link with correct href', () => {
    render(
      <ExpandableAccordion
        title='Show changelog'
        children={children}
        maximumItems={2}
        moreAnchor={{ type: 'categories', to: '/more-categories' }}
      />
    );

    const header = screen.getByText('Show changelog');
    fireEvent.click(header);

    const showMoreLink = screen.getByText('+2 more categories');
    expect(showMoreLink).toBeInTheDocument();
    expect(showMoreLink).toHaveAttribute('href', '/more-categories');
    expect(showMoreLink).toHaveAttribute('target', '_blank');
    expect(showMoreLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not render "show more" link when maximumItems is greater than or equal to the number of children', () => {
    render(
      <ExpandableAccordion
        title='Show changelog'
        children={children}
        maximumItems={4}
        moreAnchor={{ type: 'categories', to: '/more-categories' }}
      />
    );

    const header = screen.getByText('Show changelog');
    fireEvent.click(header);

    expect(screen.queryByText('more categories')).not.toBeInTheDocument();
  });
});
