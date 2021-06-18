import * as React from 'react';

export interface BoxProps extends React.HTMLProps<any>{
    alignContent?: string
    alignItems?: string
    alignSelf?: string
    bgColor?: string
    children?: any
    className?: string
    color?: string
    display?: string
    flex?: string
    justifyContent?: string
    m?: number | string
    mb?: number | string
    ml?: number | string
    mr?: number | string
    mt?: number | string
    mx?: number | string
    my?: number | string
    p?: number | string
    pb?: number | string
    pl?: number | string
    pr?: number | string
    pt?: number | string
    px?: number | string
    py?: number | string
    tag?: string

}

declare class Box extends React.Component<BoxProps, any> {}


export default Box
