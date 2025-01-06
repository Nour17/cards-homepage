import Card from '../../Card'
import IconColoredWarning from '@/assets/icons/IconColoredWarning'
import LinkItem, { LinkItemProps } from '../../components/item/LinkItem/LinkItem'
import { formatDate } from '@/lib/utils/DateUtils'
import IconCirculerApproval from '@/assets/icons/IconCirculerApproval'
import ExpandableAccordion from '../../components/body/ExpandableAccordion'
import DataItem, { DataItemProps } from '../../components/item/DataItem/DataItem'
import { CardItemProps, CardProps } from '@/lib/types/CardTypes'
import { getRandomId } from '@/lib/utils/NumberUtils'
import { useCardStyles, useDoneStyles } from './LineItemIssuesCard.styles'
import IconClock from '@/assets/icons/IconClock'

export type LineItemIssuesCardProps = CardProps & {
    haveIssues?: boolean
}

const blockCategories: DataItemProps[] = [
    {
        name: 'Pharmaceutical',
        count: 16,
        represent: 'brands',
        type: 'money',
        value: {
            amount: 1234,
            currency: 'USD'
        }
    },
    {
        name: 'Pharmaceutical',
        count: 16,
        represent: 'brands',
        type: 'money',
        value: {
            amount: 1234,
            currency: 'USD'
        }
    }
]

function createLinkItem(item: CardItemProps): LinkItemProps {
    const linkItem: Partial<LinkItemProps> = {
        title: item.name,
        renderTitle: () => <div className='font-normal text-[14px]'>{item.name}</div>,
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

export default function LineItemIssuesCard(props: LineItemIssuesCardProps): JSX.Element {
    const styles = useCardStyles()

    if (!props.itemsGroup || props.itemsGroup.length === 0) {
        return (<></>)
    }

    const cardProps: CardProps = {
        ...props,
        header: {
            icon: <IconColoredWarning size='28px' />,
            title: props.header?.title ?? 'Default Title',
            ...props.header
        }
    }

    return (
        <Card {...cardProps} >
            {
                props.itemsGroup && props.itemsGroup.map((item) => (
                    <div key={item.title} className={styles.root}>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.linkContainer}>
                            {item.items.map((item) => <LinkItem key={item.id} item={createLinkItem(item)} />)}
                        </div>
                    </div>
                ))
            }
            {
                props.haveIssues &&
                <>
                    <LineItemIssuesDone partial />
                    <ExpandableAccordion title='Show changelog' icon={<IconClock width='24px' />} maximumItems={1} moreAnchor={{ type: 'brand', to: 'https://www.google.com' }}>
                        {blockCategories.map((item, index) => <DataItem key={index} {...item} />)}
                    </ExpandableAccordion>
                </>
            }
        </Card>
    )
}

function LineItemIssuesDone({ partial }: { partial?: boolean }): JSX.Element {
    const styles = useDoneStyles()

    return (
        <div>
            {
                partial && <hr className={styles.hr} />
            }
            <div className={styles.container}>
                <IconCirculerApproval size='48px' />
                <div className={styles.title}> Good job yesterday!</div >
                <div className={styles.description}>Under delivery was fixed for 6 LIs and 16 creatives were added to LIs that were missing them. Keep it up!</div>
            </div >
        </div>
    )
}
