import crypto from 'crypto';

export function formatPrice(price: number, currency: string, locale: string = 'en-US', digits: number = 0): string {
    return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: digits, minimumFractionDigits: digits }).format(price)
}

export function getRandomId(): string {
    return crypto.randomUUID().split('-')[0]
}

export function formatPercentage(value: number, locale: string = 'en-US', digits: number = 0): string {
    return new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: digits, minimumFractionDigits: digits }).format(value / 100)
}