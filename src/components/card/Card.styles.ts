import { makeStyles } from "@fluentui/react-theme-provider";

export const useStyles = () => makeStyles({
    root: {
        border: '2px solid #f9fafb',
        borderRadius: '8px',
        boxSizing: 'border-box',
        minHeight: 'fit-content',
        height: 'fit-content',
        // minWidth: '253px',
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)',
        '&:hover': {
            boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)',
        },
        '@media (max-width: 895px)': {
            // minWidth: '253px',
        },
        '@media (max-width: 570px)': {
            // minWidth: '100%',
        }
    },
    container: {
        boxSizing: 'border-box',
        width: '100%',
        padding: '16px 0',
        minHeight: 'fit-content',
        overflow: 'hidden',
    }
})() 