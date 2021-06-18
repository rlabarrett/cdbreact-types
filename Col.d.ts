import * as React from 'react';

export interface ColProps extends React.HTMLProps<any>{
    bottom: boolean
    className: string
    lg: string
    md: string
    middle: boolean
    size: string
    sm: string
    tag?: () => (any | void) | string
    top: boolean
    xl: string
    xs: string
}

declare class Col extends React.Component<ColProps, any> {}


export default Col
