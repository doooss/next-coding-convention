import { useEffect, useRef, useState } from 'react';

import styles from './Progress.module.css';

export const Progress = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            if (ref.current) {
                const { current } = ref;
                current.style.transition = `opacity 0.5s`;
                current.style.opacity = `0`;
            }
        }, 1500);
        setTimeout(() => {
            setState(false);
        }, 2000);
    }, [ref]);
    if (state) {
        return <div className={styles.progress} ref={ref} />;
    }
    return <></>;
};
