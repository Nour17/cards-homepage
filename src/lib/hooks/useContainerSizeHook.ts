import { useEffect, useState, useRef } from 'react'
import useThrottle from './useThrottleHook'

const useContainerSizeHook = (id: string, isEnabled: boolean = true, throttle = 0) => {
  const containerRef = useRef<HTMLElement | null>(null)
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  })

  const updateSize = useThrottle(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      })
    }
  }, throttle)


  useEffect(() => {
    containerRef.current = document.getElementById(id)

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