import { useState, useEffect } from "react"

function useFetch<T>(fetchFn: () => Promise<T>) {
    const [value, setValue] = useState<T>()
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const fetchedValues = await fetchFn()
                setValue(fetchedValues)
            } catch (error) {
                console.error(`Failed to fetch:`, error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [fetchFn])

    return { value, loading }
}

export default useFetch