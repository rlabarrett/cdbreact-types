import * as React from 'react';

export interface AlertProps extends React.HTMLProps<any>{
    className?: string
    color?: string
    onClose?(): any
    onClosed?(): any
    tag?: string
}

declare class Alert extends React.Component<AlertProps, any> {}


export default Alert
