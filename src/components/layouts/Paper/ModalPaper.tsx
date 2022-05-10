import { ReactNode } from 'react';

import styles from './ModalPaper.module.css';

export const ModalPaper = ({ children }: { children: ReactNode }) => {
    return <div className={styles.modal_paper}>{children}</div>;
};
