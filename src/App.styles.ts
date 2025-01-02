import { makeStyles } from "@fluentui/react-theme-provider";

const useStyles = () => makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '48px',
        '@media (max-width: 895px)': {
            padding: '24px',
        },
        '@media (max-width: 796px)': {
            padding: '24px',
        },
        p: {
            margin: 0,
        }
    },
})()

export default useStyles