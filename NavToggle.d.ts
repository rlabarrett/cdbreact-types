import * as React from 'react';

export interface NavToggleProps extends React.HTMLProps<any>{
    children?: any
    className?: string
    image?: string
    left?: boolean
    right?: boolean
    tag?: () => (any | void) | string
    type?: string
}

declare class NavToggle extends React.Component<NavToggleProps, any> {}


export default NavToggle
