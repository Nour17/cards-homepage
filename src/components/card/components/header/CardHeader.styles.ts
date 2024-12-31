import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    borderBottom: '2px solid var(--colorNeutralBackground3)',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    overflow: 'hidden',
  },
  title: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '28px',
    color: 'var(--colorNeutralForeground2)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

export default useStyles;