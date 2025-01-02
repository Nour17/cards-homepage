import { CardItemProps, CardSize } from "@/lib/types/CardTypes"

export type CardFooterProps = {
    isExpandable: boolean,
}

export interface FetchCardsResponse {
    id: string,
    order: number,
    type: string, // 'RecentlyModifiedCard' | 'PerformanceCard' | 'SavedReportsCard' | 'Card'
    isResizable?: boolean,
    isMovable?: boolean,
    isRemovable?: boolean,
    items?: CardItemProps[] 
    cardSize: CardSize
}