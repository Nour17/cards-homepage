import React, { JSX, ReactNode } from 'react'
import IconsLink from '@/assets/icons/IconLink'
import useStyles from './LinkItem.styles'

export type DateProps = {
    date?: string | Date,
    showDate?: boolean
    render?: (date: string) => string,
}

export type LinkProps = {
    to: string,
    icon?: ReactNode
}

export type LinkItemProps = {
    title: string,
    id?: string,
    date?: DateProps,
    link: LinkProps,
    renderTitle?: () => ReactNode,
}

export default function LinkItem({ item }: { item: LinkItemProps }): JSX.Element {
    const styles = useStyles()

    const [isHovered, setHovered] = React.useState(false)
    const showDate = item.date && !!item.date.showDate

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    return (
        <a href={item.link.to} target='_blank' rel="noopener noreferrer" className={styles.root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.contentSection}>
                <div className={styles.leftSection}>
                    <span>{item.renderTitle ? item.renderTitle() : item.title}</span>
                    <span>{item.id}</span>
                </div>
                {
                    showDate && (<span className={styles.rightSection}>{item.date?.render?.(item.date.date?.toString() || '') || item.date?.date?.toString()}</span>)
                }
            </div>
            {
                isHovered && item.link.to && <div data-testid="linkIcon" ><IconsLink size='20px' /></div>
            }
        </a>
    )
}
