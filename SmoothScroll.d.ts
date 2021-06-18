import * as React from 'react';

export interface SmoothScrollProps extends React.HTMLProps<any>{
    className?: string
    to?: string
    smooth?: boolean
    spy?: boolean
    offset?: number
    duration?: number
    activeClass?: string
}

declare class SmoothScroll extends React.Component<SmoothScrollProps, any> {}


export default SmoothScroll