import * as React from 'react';

export interface PopoverBodyProps extends React.HTMLProps<any>{
    children?: any
    className?: string,
    tag?: () => (any | void) | string
}

declare class PopoverBody extends React.Component<PopoverBodyProps, any> {}


export default PopoverBody
