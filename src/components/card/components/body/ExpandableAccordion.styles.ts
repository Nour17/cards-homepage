import { makeStyles } from "@fluentui/react-theme-provider";

const useStyles = makeStyles({
    root: {
        width: '100%',
        paddingBottom: '16px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },
    panel: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    moreLink: {
        color: '#616161',
        fontSize: '14px',
        cursor: 'pointer',
    },
})

export default useStyles;