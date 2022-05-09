import { ReactNode } from 'react';
import { ModalWrapper } from 'src/common/hooks';

const Settings = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ModalWrapper>{children}</ModalWrapper>
            <div id="root-modal" />
        </>
    );
};

export default Settings;
