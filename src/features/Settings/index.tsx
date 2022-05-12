import { ReactNode } from 'react';
import { ModalWrapper } from 'src/hooks';

const Settings = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ModalWrapper>{children}</ModalWrapper>
        </>
    );
};

export default Settings;
