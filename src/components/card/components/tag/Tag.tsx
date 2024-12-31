import { JSX } from "react";
import { PerformanceType } from "../../types/PerformanceCard/PerformanceCard.types";
import { useStyles } from "./Tag.styles";

export type TagProps = {
    type: PerformanceType,
    data: string,
    fill?: boolean,
    hidePie?: boolean,
};

export default function Tag(props: TagProps): JSX.Element {
    const styles = useStyles(props.fill, parseFloat(props.data), props.type);

    return (
        <div className={`${styles.root} ${styles[props.type]}`}>
            {!props.hidePie && <div data-testid="percentage-pie" className={styles.pie} />}
            {props.data}
        </div>
    );
}