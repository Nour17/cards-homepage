import { JSX } from "react";
import Tag from "../../../components/tag/Tag";
import { PerformanceType } from "../PerformanceCard.types";
import { useStyles } from "./PerformanceItem.styles";

export type PerformanceItemProps = {
    percentage: string;
    title: string;
    amount: string;
    type: PerformanceType;
};

export default function PerformanceItem(props: PerformanceItemProps): JSX.Element {
    const styles = useStyles()

    return (
        <div className={styles.root}>
            <Tag type={props.type} data={props.percentage} />
            <div className={styles.title} title={props.title}>
                {props.title}
            </div>
            <div className={styles[props.type]}>
                {props.amount}
            </div>
        </div>
    );
}
