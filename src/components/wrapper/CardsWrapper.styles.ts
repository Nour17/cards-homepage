import { makeStyles } from "@fluentui/react-theme-provider";

export const useStyles = () => makeStyles({
    root: {
        maxWidth: '1480px',
        width: '100%'
    },
    title: {
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '32px',
        marginBottom: '20px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        boxSizing: 'border-box',
        width: '100%',
        justifyContent: 'center',
        '@media (max-width: 895px)': {
            justifyContent: 'center',
        }
    }
})()