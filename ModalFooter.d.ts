import * as React from 'react';

export interface ModalFooterProps extends React.HTMLProps<any>{
    children?: any
    className?: string
}

declare class ModalFooter extends React.Component<ModalFooterProps, any> {}


export default ModalFooter
