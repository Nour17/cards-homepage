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
