import { CardProps, CardSize } from "@/lib/types/CardTypes";

export const mockCard: CardProps = {
    id: '1',
    containerId: 'container-1',
    order: 1,
    type: 'default',
    cardSize: CardSize.S,
    header: {
        title: 'Test Card',
    },
};
