import { formatDate } from "../DateUtils"

describe('Date utils', () => {
    const now = new Date()
    const yesterday = new Date(now).setDate(now.getDate() - 1)
    const lastWeek = new Date(now).setDate(now.getDate() - 6)
    const lastMonth = new Date(now).setMonth(now.getMonth() - 1)

    it('should format date as Today', () => {
        const date = new Date()
        expect(formatDate(date.toISOString())).toBe('Today')
    })

    it('should format date as Yesterday', () => {
        const date = new Date(yesterday)
        expect(formatDate(date.toISOString())).toBe('Yesterday')
    })

    it('should format date as Last week', () => {
        const date = new Date(lastWeek)
        expect(formatDate(date.toISOString())).toBe('Last week')
    })

    it('should format date as locale date string', () => {
        const date = new Date(lastMonth)
        expect(formatDate(date.toISOString())).toBe(date.toLocaleDateString())
    })
})