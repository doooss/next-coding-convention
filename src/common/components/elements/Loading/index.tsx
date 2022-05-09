import { ReactNode } from 'react';

import styles from './Loading.module.css';

export const Loading = ({ state }: { state: ReactNode }) => {
    if (state) return <div className={styles.loader} />;
    return <></>;
};
