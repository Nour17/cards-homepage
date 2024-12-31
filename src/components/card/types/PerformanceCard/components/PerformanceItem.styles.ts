import { makeStyles } from "@fluentui/react-components";
import { PerformanceType } from "../PerformanceCard.types";

export const useStyles = () => makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '8px',
        alignSelf: 'stretch',
        marginBottom: '10px',
        lineHeight: '16px',
    },
    title: {
        fontSize: '14px',
        lineHeight: '20px',
        color: '#424242',
        flexGrow: '1',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    [PerformanceType.SUCCESS]: {
        fontSize: '14px',
        lineHeight: '20px',
        color: '#0E700E',
    },
    [PerformanceType.FAILURE]: {
        fontSize: '14px',
        lineHeight: '20px',
        color: '#B10E1C',
    }
})()