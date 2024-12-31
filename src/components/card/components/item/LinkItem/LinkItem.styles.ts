import { makeStyles } from "@fluentui/react-theme-provider";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
        boxSizing: "border-box",
        "&:hover": {
            backgroundColor: "#F5F5F5",
        },
    },
    contentSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
    },
    leftSection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "start",
        gap: "5px",
        fontSize: "16px",
        fontWeight: "semibold",
    },
    rightSection: {
        fontSize: "12px",
        color: "#A2A2A2",
    }
})

export default useStyles;