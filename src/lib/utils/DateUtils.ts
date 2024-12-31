export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    const now = new Date()
    const yesterday = new Date(now)
    yesterday.setDate(now.getDate() - 1)
    const lastWeek = new Date(now)
    lastWeek.setDate(now.getDate() - 7)
  
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
  
    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
  
    const isLastWeek = date > lastWeek && date < yesterday
  
    if (isToday) {
      return 'Today'
    } else if (isYesterday) {
      return 'Yesterday'
    } else if (isLastWeek) {
      return 'Last week'
    } else {
      return date.toLocaleDateString()
    }
  }