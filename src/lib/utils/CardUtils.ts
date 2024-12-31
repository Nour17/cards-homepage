import { JSX } from "react";
import { CardProps } from "../types/CardTypes";

export function updateCardIcon (card: CardProps, icon: JSX.Element): CardProps {
    return {
        ...card,
        header: {
            ...card.header,
            icon: icon,
            title: card.header?.title ?? 'Default Title',
        }
    }
}
