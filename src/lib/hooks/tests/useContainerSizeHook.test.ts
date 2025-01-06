import { act, renderHook } from "@testing-library/react"
import useContainerSizeHook from "../useContainerSizeHook"

const observe = jest.fn()
const unobserve = jest.fn()

jest.mock('../useThrottleHook', () => ({
  __esModule: true,
  default: (fn: any) => fn,
}))


describe('useContainerSizeHook', () => {
    let mockElement = {
      clientWidth: 100,
      clientHeight: 100,
      offsetWidth: 100,
    } as HTMLElement
    let mockResizeObserverCallback = jest.fn()

    beforeEach(() => {
        Object.defineProperties(mockElement, {
          clientWidth: { value: 100, configurable: true },
          clientHeight: { value: 100, configurable: true },
        })

        jest.spyOn(document, 'getElementById').mockReturnValue(mockElement)
        mockResizeObserverCallback = jest.fn()
        global.ResizeObserver = jest.fn().mockImplementation((callback) => {
          mockResizeObserverCallback = callback
          return { observe, unobserve }
        })
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('should initialize with default size', () => {
        const { result } = renderHook(() => useContainerSizeHook('test-id'))
        expect(result.current).toEqual({ width: 100, height: 100 })
    })

    it('should update size when container is resized', () => {
        const { result } = renderHook(() => useContainerSizeHook('test-id', true))

        expect(result.current).toEqual({ width: 100, height: 100 })

        Object.defineProperty(mockElement, 'clientWidth', { value: 300, configurable: true })
        Object.defineProperty(mockElement, 'clientHeight', { value: 150, configurable: true })

        act(() => {
          mockResizeObserverCallback()
        })
    
        expect(result.current).toEqual({ width: 300, height: 150 })
        expect(observe).toHaveBeenCalled()
      })

    it('should not update size when isEnabled is false', () => {
        const { result } = renderHook(() => useContainerSizeHook('test-id', false))

        expect(result.current).toEqual({ width: 100, height: 100 })

        Object.defineProperty(mockElement, 'clientWidth', { value: 300, configurable: true })
        Object.defineProperty(mockElement, 'clientHeight', { value: 150, configurable: true })

        act(() => {
          mockResizeObserverCallback()
        })

        expect(result.current).toEqual({ width: 100, height: 100 })
        expect(observe).not.toHaveBeenCalled()
      })

    it('should clean up resize observer on unmount', () => {
        const { unmount } = renderHook(() => useContainerSizeHook('test-id', true))

        unmount()

        expect(unobserve).toHaveBeenCalled()
      })

    it('should not observe if container is not found', () => {
        jest.spyOn(document, 'getElementById').mockReturnValue(null)

        const { unmount } = renderHook(() => useContainerSizeHook('test-id', true))

        expect(observe).not.toHaveBeenCalled()

        unmount()
        expect(unobserve).not.toHaveBeenCalled()
      })
})