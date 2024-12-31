import React, { JSX } from 'react'
import { Button } from '@fluentui/react-components'
import { formatDate } from '@/lib/utils/DateUtils'
import { CardItemProps } from '@/lib/types/CardTypes'
import useStyles from './ActionItem.styles';

export default function ActionItem({ item }: { item: CardItemProps }): JSX.Element {
    const styles = useStyles();

    const [isHovered, setHovered] = React.useState(false)

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    return (
        <div className={styles.root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.leftSection}>
                {/* <div className='flex flex-row items-start justify-start gap-[5px]'> */}
                <span className={styles.name}>{item.name}</span>
                {/* </div> */}
                <span className={styles.date}>Last ran: {formatDate(item.date)}</span>
            </div>
            <div className={styles.rightSection}>
                {
                    isHovered && item.actions && item.actions.map((action, index) =>
                        <Button key={index} title={action.label} appearance={action.type || 'secondary'} size='small' onClick={action.onClick}>
                            <div className={styles.iconWithLabel}>
                                {action.label} {action.icon}
                            </div>
                        </Button>
                    )
                }
            </div>
        </div>
    )
}
