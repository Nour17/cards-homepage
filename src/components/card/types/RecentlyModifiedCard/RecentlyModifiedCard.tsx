import Card from '../../Card'
import IconColoredApproval from '@/assets/icons/IconColoredApproval'
import { getRandomId } from '@/lib/utils/NumberUtils'
import LinkItem, { LinkItemProps } from '../../components/item/LinkItem/LinkItem'
import { formatDate } from '@/lib/utils/DateUtils'
import { CardItemProps, CardProps } from '@/lib/types/CardTypes'

export type RecentlyModifiedCardProps = CardProps & {
    items?: CardItemProps[]
}

function createLinkItem(item: CardItemProps): LinkItemProps {
    const linkItem: Partial<LinkItemProps> = {
        title: item.name,
        renderTitle: () => <div style={{ fontWeight: '500' }}>{item.name}</div>,
        id: `(${item.id || getRandomId()})`,
        date: item.date ? {
            date: item.date,
            render: formatDate,
            showDate: true
        } : undefined
    }

    if (item.link) {
        linkItem.link = {
            to: item.link.to,
            icon: item.link.icon
        }
    }
    return linkItem as LinkItemProps
}

export default function RecentlyModifiedCard(props: RecentlyModifiedCardProps): JSX.Element {
    if (!props.items || props.items.length === 0) {
        return (<></>)
    }

    const cardProps: CardProps = {
        ...props,
        header: {
            icon: <IconColoredApproval size='28px' />,
            title: props.header?.title ?? 'Default Title',
            ...props.header
        }
    }

    return (
        <Card {...cardProps} >
            {props.items.map((item) => <LinkItem key={item.id} item={createLinkItem(item)} />)}
        </Card>
    )
}

