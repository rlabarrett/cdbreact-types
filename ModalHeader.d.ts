import * as React from 'react';

export interface ModalHeaderProps extends React.HTMLProps<any>{
    children?: any
    className?: string
    closeAriaLabel?: string
    tag?: () => (any | void) | string
    toggle: () => (any | void)
}

declare class ModalHeader extends React.Component<ModalHeaderProps, any> {}


export default ModalHeader
