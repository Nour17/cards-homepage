import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 16px",
        gap: "10px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "#f5f5f5",
        },
    },
    leftSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    rightSection: {
        display: "flex",
        gap: "5px",
    },
    name: {
        fontSize: "16px",
        fontWeight: "600",
    },
    date: {
        fontSize: "12px",
        color: "#a2a2a2",
    },
    iconWithLabel: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
    }
});

export default useStyles;
