import { makeStyles } from "@fluentui/react-theme-provider";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
    },
    name: {
        fontSize: "14px",
        color: "#424242",
    },
    rightSection: {
        display: "flex",
        gap: "10px",
        fontSize: "12px",
    },
    count: {
        color: "#424242",
    },
    value: {
        color: "#B10E1C",
    },
});

export default useStyles;