import { ReactNode } from 'react';
import { ModalWrapper } from 'src/common/hooks';

const Settings = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ModalWrapper>{children}</ModalWrapper>
        </>
    );
};

export default Settings;
