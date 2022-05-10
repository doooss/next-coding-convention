import { ReactNode } from 'react';

export const Paper = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div>{children}</div>
        </>
    );
};
