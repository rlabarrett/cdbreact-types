import * as React from 'react';

export interface SpinnerProps extends React.HTMLProps<any> {
    className?: string
    tag?: string
    size?: string
    success?: boolean
    secondary?: boolean
    dark?: boolean
    danger?: boolean
    info?: boolean
    warning?: boolean
}
declare class Spinner extends React.Component<SpinnerProps, any> {}


export default Spinner