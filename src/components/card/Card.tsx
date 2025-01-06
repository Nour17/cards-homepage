import CardHeader from './components/header/CardHeader'
import useWindowSizeHook from '@/lib/hooks/useWindowSizeHook'
import React, { CSSProperties } from 'react'
import { CardProps, CardSize } from '@/lib/types/CardTypes'
import { useStyles } from './Card.styles'

const getNumberOfColumns = (containerWidth: number, numberOfColumns: number, totalColumns = 3, cardGap = 11) => {
  return Math.floor(Math.abs(containerWidth * (numberOfColumns / totalColumns) - cardGap))
}

const getGridColumnSpan = (width: CardProps['cardSize'], containerWidth: number) => {
  switch (width) {
    case CardSize.S: {
      let numberOfColumns = 3
      if (containerWidth < 592) {
        numberOfColumns = 2
      }
      if (containerWidth < 551) {
        numberOfColumns = 1
      }
      return { span: 'col-span-1', width: getNumberOfColumns(containerWidth, 1, numberOfColumns), maxWidth: containerWidth, minWidth: getNumberOfColumns(containerWidth, 1, numberOfColumns) }
    }
    case CardSize.M:
      return { span: 'col-span-2', width: getNumberOfColumns(containerWidth, 2), maxWidth: containerWidth, minWidth: getNumberOfColumns(containerWidth, 2) }
    case CardSize.L:
      return { span: 'col-span-3', width: containerWidth }
  }
}

export default function Card(props: CardProps): React.JSX.Element {
  const styles = useStyles()

  // console.log('Card props', props)

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
    <div data-testId="card" className={styles.root} style={cardStyles}>
      <CardHeader {...props.header} />
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}