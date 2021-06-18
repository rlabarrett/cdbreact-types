import * as React from 'react';

export interface LinkProps extends React.HTMLProps<any>{
    active?: boolean
    children?: any
    className?: string
    disabled?: boolean
    to?: string
    onMouseUp?(): any
    onTouchStart?(): any
}

declare class Link extends React.Component<LinkProps, any> {}


export default Link
