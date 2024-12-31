import { render } from '@testing-library/react'
import Card from './Card'
import { CardSize } from '@/lib/types/CardTypes'

describe('Card Component', () => {
  const defaultProps = {
    id: 'test-card',
    containerId: 'test-container',
    order: 1,
    type: 'Card',
    cardSize: CardSize.M,
    isResizable: true,
    isMovable: true,
    header: { title: 'Test Header' },
    children: <div>Test Content</div>,
  }

  it('renders without crashing', () => {
    const { container } = render(<Card {...defaultProps} cardSize={CardSize.S} />)
    expect(container).toBeInTheDocument()
  })

  it('renders header and children correctly', () => {
    const { getByText } = render(<Card {...defaultProps} />)
    expect(getByText('Test Header')).toBeInTheDocument()
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies correct styles based on props', () => {
    const { container } = render(<Card {...defaultProps} cardSize={CardSize.L} />)
    const cardElement = container.firstChild as HTMLElement
    expect(cardElement.style.resize).toBe('both')
    expect(cardElement.style.cursor).toBe('move')
  })

  it('applies correct styles based on props', () => {
    const { container } = render(<Card {...defaultProps} cardSize={CardSize.L} isMovable={false} isResizable={false} />)
    const cardElement = container.firstChild as HTMLElement
    expect(cardElement.style.resize).toBe('none')
    expect(cardElement.style.cursor).toBe('default')
    expect(cardElement.style.overflow).toBe('hidden')
  })

  it('renders fragment if no children', () => {
    const { container } = render(<Card {...defaultProps} children={undefined} />)
    expect(container.innerHTML).toBe("")
  })

  it('renders fragment if no header', () => {
    const { container } = render(<Card {...defaultProps} header={undefined} />)
    expect(container.innerHTML).toBe("")
  })
})
