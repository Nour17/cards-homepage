import CardHeader from './components/header/CardHeader'
import useWindowSizeHook from '@/lib/hooks/useWindowSizeHook'
import { CSSProperties, JSX } from 'react'
import { CardProps, CardSize } from '@/lib/types/CardTypes'
import { useStyles } from './Card.styles'

const getNumberOfColumns = (containerWidth: number, numberOfColumns: number) => {
  return Math.abs(containerWidth * (numberOfColumns / 3) - 20)
}

const getGridColumnSpan = (width: CardProps['cardSize'], containerWidth: number) => {
  switch (width) {
    case CardSize.S:
      return { span: 'col-span-1', width: getNumberOfColumns(containerWidth, 1), maxWidth: containerWidth, minWidth: 1 }
    case CardSize.M:
      return { span: 'col-span-2', width: getNumberOfColumns(containerWidth, 2), maxWidth: containerWidth, minWidth: getNumberOfColumns(containerWidth, 2) }
    case CardSize.L:
      return { span: 'col-span-3', width: containerWidth }
  }
}

export default function Card(props: CardProps): JSX.Element {
  const styles = useStyles()

  const containerSize = useWindowSizeHook(props.containerId)
  if (!props.children || !props.header) {
    return <></>
  }

  const { maxWidth, width } = getGridColumnSpan(props.cardSize, containerSize.width)

  const cardStyles: CSSProperties = {
    width: width,
    maxWidth: maxWidth,
    resize: props.isResizable ? 'both' : 'none',
    overflow: props.isResizable ? 'auto' : 'hidden',
    cursor: props.isMovable ? 'move' : 'default',
  }

  return (
    <div className={styles.root} style={cardStyles}>
      <CardHeader {...props.header} />
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}