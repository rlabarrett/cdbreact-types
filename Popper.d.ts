import * as React from 'react';

export interface PopperProps extends React.HTMLProps<any>{
    children?: any
    clickable?: boolean
    domElement?: boolean
    email?: boolean
    id?: string,
    isVisible?: boolean
    material?: boolean
    modifiers?: object,
    placement?: string,
    popover?: boolean
    sm?: boolean
    style?: { string }
    tag?: string
}

declare class Popper extends React.Component<PopperProps, any> {}


export default Popper
