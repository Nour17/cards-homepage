import { renderHook, waitFor } from "@testing-library/react"
import useFetchHook from "../useFetchHook"

describe('useFetchHook', () => {
    it('should return initial state', async () => {
        const { result } = renderHook(() => useFetchHook(() => new Promise((resolve) => resolve('result'))))

        await waitFor(() => 
            expect(result.current).toEqual({
                value: undefined,
                loading: true,
            })
        )
    })
    
    it('should fetch data and update state', async () => {
        const mockData = { key: 'result' }
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => mockData,
        })
    
        const { result } = renderHook(() => useFetchHook(() => new Promise((resolve) => resolve(mockData))))
    
        await waitFor(() => {
            expect(result.current.loading).toBe(false)
            expect(result.current).toEqual({
                value: mockData,
                loading: false,
            })
        })
    })
    
    it('should handle fetch error', async () => {
        global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'))
    
        const { result } = renderHook(() => useFetchHook(() => new Promise((_, reject) => reject(new Error('Fetch error')))))
    
        await waitFor(() => {
            expect(result.current.loading).toBe(false)
            expect(result.current).toEqual({
                value: undefined,
                loading: false,
            })
        })
    })
})