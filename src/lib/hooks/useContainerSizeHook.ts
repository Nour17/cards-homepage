import { useEffect, useState, useRef } from 'react'

const useContainerSizeHook = (id: string, isEnabled: boolean = true) => {
  const containerRef = useRef<HTMLElement | null>(null)
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    containerRef.current = document.getElementById(id)

    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    }

    if (!isEnabled) {
      updateSize()

      return
    }

    const resizeObserver = new ResizeObserver(() => {
      updateSize()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    updateSize()

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current)
      }
    }
  }, [id, isEnabled])

  return containerSize
}

export default useContainerSizeHook