import { useCallback, useRef } from 'react';

function useThrottle(func: (...args: any[]) => void, limit: number) {
    const inThrottle = useRef(false);

    return useCallback(function (...args: any[]) {
        if (!inThrottle.current) {
            func.apply(args);
            inThrottle.current = true;
            setTimeout(() => {
                inThrottle.current = false;
            }, limit);
        }
    }, [func, limit]);
}

export default useThrottle;