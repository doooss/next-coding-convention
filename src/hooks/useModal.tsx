import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useRouterEx } from './useRouterEx';

interface IProps {
    children: ReactNode;
}

type Values = {
    [key: string]: string;
};

/*  
    기본 설정 
    1. _app.tsx 에 ModalWrapper로 components.. 를 감싸준다. 
    2. _app.tsx 에 div#root_modal 생성 (독립적인 트리로 생성)
    3. useModal import 하고 해당 컴포넌트 리턴에 독립적으로 <Portal> </Portal> 사용
*/

/*  
    파라미터 - (modalname:string, addQuery:object) - modalName은 모달창이 켜지기 위한 수단, addQuery는 넣고싶은 추가 데이터 쿼리
    openModal, closeModal, replaceModal, Portal 을 하위 속성으로 가짐.
*/
export const useModal = (modalName = 'o', addQuery = {}) => {
    const router = useRouter();
    const routerEx = useRouterEx();

    // () addQuery에 변수를 넣기 힘든경우 이용, 가급적 addQuery와 키값은 맞추길 권장.
    const openModal = (value = {}) => {
        routerEx.pushQuery({ ...addQuery, ...value, modal: modalName });
    };
    // (바꿀모달 이름, {추가할 모달 쿼리 오브젝트})
    const replaceModal = (changeModalName = 'c', value = {}) => {
        const urlQueries = router.query as Values;
        Object.keys(addQuery).map((el) => {
            delete urlQueries[el];
        });

        routerEx.pushQuery({
            ...urlQueries,
            ...value,
            modal: changeModalName,
        });
    };

    const closeModal = () => {
        router.back();
    };
    const modalState = typeof router.query?.modal === 'string' ? true : false;

    const Portal = ({ children }: IProps) => {
        const ref = useRef<Element | null>();
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
            if (document) {
                const dom = document.getElementById('root_modal');
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
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
        replaceModal,
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
                    overflow: 'hidden',
                    position: 'fixed',
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
                        position: 'fixed',
                    }}
                />

                {children}
            </div>
        );

    return <>{children}</>;
};
