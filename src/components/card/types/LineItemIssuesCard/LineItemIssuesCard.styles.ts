import { makeStyles } from "@fluentui/react-theme-provider";

export const useCardStyles = makeStyles({
    root: {
        marginBottom: '8px',
    },
    title: {
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '8px',
        padding: '0 16px'
    },
    linkContainer: {
        padding: '0 8px'
    },
})

export const useDoneStyles = makeStyles({
    hr: {
        width: '90%',
        margin: '5px auto 4px auto',
        padding: '0px 10px',
        border: '1px solid #F0F0F0',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '0 16px',
        maxWidth: '400px',
        width: '256px',
        margin: '0 auto',
    },
    title: {
        fontSize: '20px',
        fontWeight: '600',
    },
    description: {
        fontSize: '14px',
        color: '#616161'
    },
})
