import * as React from 'react';

export interface PopoverHeaderProps extends React.HTMLProps<any>{
    children?: any
    className?: string
    tag?: () => (any | void) | string
}

declare class PopoverHeader extends React.Component<PopoverHeaderProps, any> {}


export default PopoverHeader
