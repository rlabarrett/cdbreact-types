import * as React from 'react';

export interface ModalBodyProps extends React.HTMLProps<any>{
    children?: any
    className?: string
}

declare class ModalBody extends React.Component<ModalBodyProps, any> {}


export default ModalBody
