import { render, screen, fireEvent } from '@testing-library/react'
import LinkItem, { LinkItemProps } from './LinkItem'
import IconsLink from '@/assets/icons/IconLink'

const mockItem: LinkItemProps = {
    title: 'Test Title',
    id: '123',
    date: {
        date: '2023-10-10',
        showDate: true,
        render: (date: string) => `Rendered: ${date}`,
    },
    link: {
        to: 'https://example.com',
        icon: <IconsLink size='20px' />,
    },
    renderTitle: () => <span>Rendered Title</span>,
}

describe('LinkItem', () => {
    it('renders the LinkItem component', () => {
        render(<LinkItem item={mockItem} />)
        expect(screen.getByText('Rendered Title')).toBeInTheDocument()
        expect(screen.getByText('123')).toBeInTheDocument()
        expect(screen.getByText('Rendered: 2023-10-10')).toBeInTheDocument()
    })

    it('shows the link icon on hover', () => {
        render(<LinkItem item={mockItem} />)
        const linkElement = screen.getByRole('link')
        fireEvent.mouseEnter(linkElement)
        expect(screen.queryByTestId('linkIcon')).toBeInTheDocument()
        fireEvent.mouseLeave(linkElement)
        expect(screen.queryByTestId('linkIcon')).not.toBeInTheDocument()
    })

    it('does not show the date if showDate is false', () => {
        const itemWithoutDate = { ...mockItem, date: { ...mockItem.date, showDate: false } }
        render(<LinkItem item={itemWithoutDate} />)
        expect(screen.queryByText('Rendered: 2023-10-10')).not.toBeInTheDocument()
    })
})
