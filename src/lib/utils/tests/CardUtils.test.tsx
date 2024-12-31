import { updateCardIcon } from '../CardUtils';
import { mockCard } from '@/helpers/testingHelpers';
import { CardProps } from '@/lib/types/CardTypes';
import React from 'react';

describe('Card utils', () => {
    it('should update card icon', () => {
        const card = { ...mockCard }
        const icon = React.createElement('div', null, 'Test Icon');

        const updatedCard = updateCardIcon(card, icon);

        expect(updatedCard.header?.icon).toBe(icon);
        expect(updatedCard.header?.title).toBe(mockCard.header?.title);
    });

    it('should update card icon: no title', () => {
        const card: CardProps = { ...mockCard, header: undefined }
        const icon = React.createElement('div', null, 'Test Icon');

        const updatedCard = updateCardIcon(card, icon);

        expect(updatedCard.header?.icon).toBe(icon);
        expect(updatedCard.header?.title).toBe('Default Title');
    });
});