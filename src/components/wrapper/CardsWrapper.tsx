import { ReactNode } from 'react'
import { useStyles } from './CardsWrapper.styles';
import React from 'react';

type CardsWrapperProps = {
    id: string;
    title?: string
    children: ReactNode;
}

export default function CardsWrapper(props: CardsWrapperProps): React.JSX.Element {
    const styles = useStyles()

    return (
        <div id={props.id} className={styles.root}>
            {
                props.title && (
                    <div data-testid="card-wrapper-title" className={styles.title}>
                        {props.title}
                    </div>
                )
            }
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}
