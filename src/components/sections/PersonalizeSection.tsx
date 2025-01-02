import useFetch from '../../lib/hooks/useFetchHook';
import CardsWrapper from '../wrapper/CardsWrapper';
import { fetchCards } from '../../api/fetchCards';
import { createElement } from 'react';
import { CardProps, CardTypesMap } from '@/lib/types/CardTypes';
import { FetchCardsResponse } from '@/api/entities/card';

function orderCards(cards: FetchCardsResponse[]) {
    return cards.sort((a, b) => a.order - b.order)
}

export default function PerformanceSection(): JSX.Element {
    const { value: cards } = useFetch<FetchCardsResponse[]>(fetchCards);

    const wrapperId = crypto.randomUUID().split('-')[0];

    return (
        <CardsWrapper id={wrapperId} title='For you'>
            {cards && orderCards(cards).map((cardProps, index) => {
                const cardType = CardTypesMap[cardProps.type as keyof typeof CardTypesMap]
                const cardId = crypto.randomUUID().split('-')[0];

                return createElement(cardType, { ...cardProps, key: cardId, containerId: wrapperId, id: cardId } as CardProps)
            })}
        </CardsWrapper>)
}
