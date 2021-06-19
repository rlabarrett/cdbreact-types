import * as React from 'react';

export interface IframeProps extends React.HTMLProps<any>{
    src: string
    allowFullScreen?: boolean
    className?: string
    height?: number
    id?: string
    name?: string
    onLoad: () => (any | void)
    onMouseOut: () => (any | void)
    onMouseOver: () => (any | void)
    ratio?: string
    sandbox?: string
    styles?: object
    title?: string
    width?: number
}

declare class Iframe extends React.Component<IframeProps, any> {}


export default Iframe
