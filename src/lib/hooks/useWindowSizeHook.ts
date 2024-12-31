import { useEffect, useState, useRef } from 'react'

const useWindowSizeHook = (id: string) => {
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

    updateSize()

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [id])

  return containerSize
}

export default useWindowSizeHook