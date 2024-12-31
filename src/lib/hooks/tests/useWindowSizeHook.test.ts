import { act, renderHook } from "@testing-library/react"
import useWindowSizeHook from '../useWindowSizeHook'

describe('useWindowSizeHook', () => {
  let mockElement = {
    clientWidth: 100,
    clientHeight: 100,
    offsetWidth: 100,
  } as HTMLElement

  beforeEach(() => {
    Object.defineProperties(mockElement, {
      clientWidth: { value: 100, configurable: true },
      clientHeight: { value: 100, configurable: true },
    })
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return initial size of 0,0 if the element is not found', () => {
    jest.spyOn(document, 'getElementById').mockReturnValue(null)

    const { result } = renderHook(() => useWindowSizeHook('non-existent-id'))

    expect(result.current).toEqual({ width: 0, height: 0 })
  })

  it('should return initial container size', () => {
    const { result } = renderHook(() => useWindowSizeHook('test-id'))

    expect(result.current).toEqual({ width: 100, height: 100 })
  })

  it('should update container size on window resize', () => {
    const { result } = renderHook(() => useWindowSizeHook('test-id'))

    Object.defineProperty(mockElement, 'clientWidth', { value: 300, configurable: true })
    Object.defineProperty(mockElement, 'clientHeight', { value: 150, configurable: true })

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toEqual({ width: 300, height: 150 })
  })

  it('should clean up resize listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useWindowSizeHook('test-id'))

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
  })
})