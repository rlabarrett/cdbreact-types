import * as React from 'react';

export interface ModalProps extends React.HTMLProps<any>{
    animation?: string
    autoFocus?: boolean
    backdrop?: boolean
    backdropClassName?: string
    backdropTransitionTimeout?: number
    cascading?: boolean
    centered?: boolean
    children?: any
    className?: string
    contentClassName?: string
    disableBackdrop?: boolean
    disableFocusTrap?: boolean
    fade?: boolean
    frame?: boolean
    fullHeight?: boolean
    hiddenModal?(): any
    hideModal?(): any
    id?: string
    inline?: boolean
    isOpen?: boolean
    keyboard?: boolean
    modalClassName?: string
    modalStyle?: string
    modalStylesWithoutBackdrop?: object
    modalTransitionTimeout?: number
    noClickableBodyWithoutBackdrop?: boolean
    overflowScroll?: boolean
    position?: string
    role?: string
    showModal?(): any
    side?: boolean
    size?: string
    tabIndex?: string
    toggle?(): any
    wrapClassName?: string
    wrapperStyles?: object
    zIndex?: number | string
}

declare class Modal extends React.Component<ModalProps, any> {}


export default Modal
