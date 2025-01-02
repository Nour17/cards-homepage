import { formatPercentage, formatPrice, getRandomId } from "../NumberUtils"

Object.defineProperty(global.crypto, 'randomUUID', {
    value: jest.fn().mockReturnValue('testuuid')
});

describe('Number utils', () => {
    it('should format price', () => {
        const price = 1234.56
        expect(formatPrice(price, 'USD', 'en-US')).toBe('$1,235')
    })

    it('should format price with default locale', () => {
        const price = 1234.56
        expect(formatPrice(price, 'USD')).toBe('$1,235')
    })

    it('should format price with locale', () => {
        const price = 1234.56
        expect(formatPrice(price, 'USD', 'de-DE')).toBe('1.235 $')
    })

    it('should format price with locale and fraction digits', () => {
        const price = 1234.56
        expect(formatPrice(price, 'USD', 'de-DE', 2)).toBe('1.234,56 $')
    })

    it('should format percentage', () => {
        const percentage = 12.123456
        expect(formatPercentage(percentage)).toBe('12%')
    })

    it('should format percentage with locale', () => {
        const percentage = 12.123456
        expect(formatPercentage(percentage, 'de-DE')).toBe('12 %')
    })

    it('should format percentage with locale and fraction digits', () => {
        const percentage = 12.123456
        expect(formatPercentage(percentage, 'de-DE', 2)).toBe('12,12 %')
    })

    it('should generate random id', () => {
        const id = getRandomId()
        expect(id).toHaveLength(8)
    })
})