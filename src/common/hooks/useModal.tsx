import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useRouterEx } from './useRouterEx';

export const useModal = () => {
    const router = useRouter();
    const routerEx = useRouterEx();

    const openModal = () => {
        routerEx.pushQuery({ modal: 'o' });
    };
    const closeModal = () => {
        routerEx.pushQuery({ modal: 'c' });
    };
    const modalState = router.query?.modal === 'o' ? true : false;

    interface IProps {
        children: ReactNode;
    }

    const Portal = ({ children }: IProps) => {
        const ref = useRef<Element | null>();
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
            if (document) {
                const dom = document.getElementById('root-modal');
                ref.current = dom;
            }
        }, []);

        if (ref.current && mounted && modalState) {
            return createPortal(
                <div
                    style={{
                        width: '100%',
                        maxWidth: '100vw',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 10000,
                    }}
                >
                    {children}
                </div>,
                ref.current,
            );
        }
        return null;
    };
    return {
        openModal,
        closeModal,
        Portal,
    };
};
