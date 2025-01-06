import { mockCard, mockedCardItems } from '@/helpers/testingHelpers'
import RecentlyModifiedCard from './RecentlyModifiedCard';
import { render } from '@testing-library/react';

jest.mock('../../components/item/LinkItem/LinkItem', () => ({
    __esModule: true,
    default: jest.fn((props) => <div data-testid="link-item" {...props} />),
    LinkItemProps: jest.fn(),
}))

describe('createLinkItem', () => {
    it('should create a LinkItem with the correct title and id', () => {
        const card = mockCard
        card.items = mockedCardItems

        const { container } = render(<RecentlyModifiedCard {...card} />);

        const linkItems = container.querySelectorAll('[data-testid="link-item"]');

        expect(linkItems.length).toBe(2)
    })

    // it('should create a LinkItem with a random id if id is not provided', () => {
    //     const item: CardItemProps = { name: 'Test Item' }
    //     const linkItem = createLinkItem(item)

    //     expect(linkItem.id).toMatch(/\(\d+\)/)
    // })

    // it('should create a LinkItem with the correct date if date is provided', () => {
    //     const item: CardItemProps = { name: 'Test Item', date: new Date('2023-01-01') }
    //     const linkItem = createLinkItem(item)

    //     expect(linkItem.date).toEqual({
    //         date: new Date('2023-01-01'),
    //         render: formatDate,
    //         showDate: true
    //     })
    // })

    // it('should create a LinkItem without date if date is not provided', () => {
    //     const item: CardItemProps = { name: 'Test Item' }
    //     const linkItem = createLinkItem(item)

    //     expect(linkItem.date).toBeUndefined()
    // })

    // it('should create a LinkItem with the correct link if link is provided', () => {
    //     const item: CardItemProps = { name: 'Test Item', link: { to: '/test', icon: <div>Icon</div> } }
    //     const linkItem = createLinkItem(item)

    //     expect(linkItem.link).toEqual({
    //         to: '/test',
    //         icon: <div>Icon</div>
    //     })
    // })

    // it('should create a LinkItem without link if link is not provided', () => {
    //     const item: CardItemProps = { name: 'Test Item' }
    //     const linkItem = createLinkItem(item)

    //     expect(linkItem.link).toBeUndefined()
    // })
})