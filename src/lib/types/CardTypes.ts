import Card from "@/components/card/Card";
import { CardHeaderProps } from "@/components/card/components/header/CardHeader";
import LineItemIssuesCard from "@/components/card/types/LineItemIssuesCard/LineItemIssuesCard";
import RecentlyModifiedCard from "@/components/card/types/RecentlyModifiedCard/RecentlyModifiedCard";
import SavedReportsCard from "@/components/card/types/SavedReportsCard/SavedReportsCard";
// import ReviewBrandBlocksCard from "@/components/card/types/ReviewBrandBlocksCard";
import { ReactNode } from "react";

export enum CardSize {
    'S' = 'S',
    'M' = 'M',
    'L' = 'L'
}

export enum CardType {
    'RecentlyModifiedCard'= 'RecentlyModifiedCard',
    'Card'= 'Card'
}

export const CardTypesMap = {
    "Card": Card,
    "SavedReportsCard": SavedReportsCard,
    "RecentlyModifiedCard": RecentlyModifiedCard,
    // "ReviewBrandBlocksCard": ReviewBrandBlocksCard,
    "LineItemIssuesCard": LineItemIssuesCard,
}

export type CardFooterProps = {
    isExpandable: boolean,
}

export type CardProps = {
    id: string,
    containerId: string,
    order: number,
    type: string, // 'RecentlyModifiedCard' | 'Card' -> Need to figure this out
    isResizable?: boolean,
    isMovable?: boolean,
    isRemovable?: boolean,
    cardSize: CardSize
    header?: CardHeaderProps,
    footer?: CardFooterProps,
    items?: CardItemProps[] 
    itemsGroup?: CardItemGroupProps[] 
    children?: ReactNode
}

export type CardItemGroupProps = {
    title: string,
    items: CardItemProps[]
}

export type CardItemProps = {
    name: string,
    id: string,
    date?: string,
    link?: CardItemLinkProps,
    actions?: ActionProps[]
}

export type CardItemLinkProps = {
    to: string,
    icon?: ReactNode
}

export type ActionProps = {
    label: string,
    onClick: () => void,
    disabled?: boolean,
    icon?: ReactNode,
    type?: "secondary" | "primary" | "outline" | "subtle" | "transparent"
}

// export type SavedReportsCardProps = CardProps & {
//     items: CardItemActionProps[]
// }

// export type ReviewBrandsCardProps = CardProps & {
//     items: CardItemProps[]
// }