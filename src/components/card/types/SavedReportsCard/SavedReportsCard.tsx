import Card from '../../Card'
import ActionItem from '../../components/item/ActionItem/ActionItem';
import IconColoredArrowTrending from '@/assets/icons/IconColoredArrowTrending';
import { CardItemProps, CardProps } from '@/lib/types/CardTypes';

export default function SavedReportsCard(props: CardProps): JSX.Element {
    if (!props.items || props.items.length === 0) {
        return (<></>)
    }

    const cardProps: CardProps = {
        ...props,
        header: {
            icon: <IconColoredArrowTrending />,
            title: props.header?.title ?? 'Default Title',
            ...props.header
        }
    }

    return (
        <Card {...cardProps} >
            {props.items.map((item: CardItemProps) => {
                const itemProps: CardItemProps = {
                    ...item,
                    actions: [
                        {
                            label: 'Edit',
                            onClick: () => alert(`Edit ${item.name}`),
                            type: 'secondary'
                        },
                        {
                            label: 'Run',
                            onClick: () => alert(`Run ${item.name}`),
                            type: 'primary'
                        }
                    ]
                }

                return <ActionItem key={item.id} item={itemProps} />
            })}
        </Card>
    )
}
