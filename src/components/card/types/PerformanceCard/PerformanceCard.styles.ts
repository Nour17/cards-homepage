import { makeStyles } from "@fluentui/react-components";

export const usePerformanceSummaryStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
    },
    amount: {
        color: '#B10E1C',
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '600',
    }
})

export const usePerformanceCardStyles = makeStyles({
    root: {
        minHeight: 'fit-content',
        width: '100%',
    },
    chartContainer: {
        height: '150px',
    },
    dimensionsContainer: {
        padding: '0 16px',
    },
    dimensionTitle: {
        fontSize: '12px',
        lineHeight: '16px',
        marginBottom: '8px',
        padding: '3px 0',
    },
})

