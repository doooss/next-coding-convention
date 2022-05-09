import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useRouterEx } from './useRouterEx';

export const useModal = (modalName = 'o') => {
    const router = useRouter();
    const routerEx = useRouterEx();

    const openModal = () => {
        routerEx.pushQuery({ modal: modalName });
    };
    const closeModal = () => {
        routerEx.removeQuery('modal');
    };
    const modalState = typeof router.query?.modal === 'string' ? true : false;

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
                <>
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
                        }}
                    >
                        <div style={{ zIndex: 1001 }}>{children}</div>
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
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                                zIndex: 1000,
                            }}
                            onClick={() => {
                                closeModal();
                            }}
                        />
                    </div>
                </>,
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
export const ModalWrapper = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    useEffect(() => {
        if (typeof router.query.modal === 'string') {
            setState(true);
        } else {
            setState(false);
        }
    }, [router]);
    if (state === true)
        return (
            <div
                style={{
                    height: '100vh',
                    width: '100vw',
                    maxWidth: '100%',
                    maxHeight: '100%',
                }}
            >
                <div
                    ref={ref}
                    style={{
                        height: '100vh',
                        width: '100vw',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        touchAction: 'none',
                        overflow: 'hidden',
                        position: 'fixed',
                    }}
                />

                {children}
            </div>
        );

    return <>{children}</>;
};
