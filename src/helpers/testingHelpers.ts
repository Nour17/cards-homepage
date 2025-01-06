import { CardItemProps, CardProps, CardSize } from "@/lib/types/CardTypes";

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

export const mockedCardItems: CardItemProps[] = [
    {
      id: "1",
      name: "5 ending today",
      link: {
        to: "/brand-blocks/1"
      }
    },
    {
      id: "2",
      name: "12 ending within 3 days",
      link: {
        to: "/brand-blocks/1"
      }
    }
  ]