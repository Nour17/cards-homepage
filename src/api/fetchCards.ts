import { FetchCardsResponse } from "./entities/card"

export async function fetchCards() {
    const response = await fetch('/api/data/cards.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.cards as FetchCardsResponse[]
}