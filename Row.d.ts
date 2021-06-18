import * as React from 'react';

export interface RowProps extends React.HTMLProps<any>{
    around?: boolean
    between?: boolean
    bottom?: boolean
    center?: boolean
    className?: string
    end?: boolean
    middle?: boolean
    start?: boolean
    tag?: () => (any | void) | string
    top?: boolean
}

declare class Row extends React.Component<RowProps, any> {}


export default Row