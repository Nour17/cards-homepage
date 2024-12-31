import { formatPrice } from '@/lib/utils/NumberUtils'
import { JSX } from 'react';
import useStyles from './DataItem.styles';

export type DataItemType = 'numerical' | 'money'

export type DataItemValue = {
    amount: number;
    currency?: string;
};

export type DataItemProps = {
    name: string,
    count: number,
    type: DataItemType,
    represent?: string,
    value?: DataItemValue,
}

function formatValue(type: DataItemType, value: DataItemValue) {
    switch (type) {
        case 'numerical':
            return value.amount
        case 'money':
            return formatPrice(value.amount, value.currency || 'USD')
    }
}

export default function DataItem(props: DataItemProps): JSX.Element {
    const styles = useStyles()

    return (
        <div className={styles.root}>
            <div className={styles.name}>
                {props.name}
            </div>
            <div className={styles.rightSection}>
                <div className={styles.count}>
                    {props.count} {props.represent}
                </div>
                {
                    props.value &&
                    <div className={styles.value}>
                        {formatValue(props.type, props.value)}
                    </div>
                }
            </div>
        </div>
    )
}
