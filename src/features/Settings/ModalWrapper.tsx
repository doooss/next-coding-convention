import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useRouterEx } from 'src/common/hooks';

import styles from './ModalWrapper.module.css';
const ModalWrapper = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const { removeQuery } = useRouterEx();
    useEffect(() => {
        if (typeof router.query.modal === 'string') {
            setState(true);
        } else {
            setState(false);
        }
    }, [router]);
    const onClickDivButton = () => {
        removeQuery('modal');
    };
    if (state === true)
        return (
            <div
                className={styles.wrapper}
                ref={ref}
                onClick={onClickDivButton}
            >
                {children}
            </div>
        );

    return <>{children}</>;
};

export default ModalWrapper;
