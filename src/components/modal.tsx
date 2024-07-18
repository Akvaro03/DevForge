import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    children: React.ReactNode,
    isOpen?: boolean,
    handleClose?: () => void
}
function ModalComponent({ children, handleClose, isOpen }: Props) {
    const [portalElement, setPortalElement] = useState<HTMLDivElement>()
    useEffect(() => {
        setPortalElement(createWrapperAndAppendToBody("modal"))
    }, [])

    if (portalElement) return createPortal(children, portalElement)
}

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    wrapperElement.setAttribute("class", "fixed absolute inset-0 -z-50");
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

export default ModalComponent;