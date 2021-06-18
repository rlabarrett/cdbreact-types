import * as React from 'react';

export interface NavbarNavProps extends React.HTMLProps<any>{
    children?: any
    className?: string
    left?: boolean
    right?: boolean
    tag?: () => (any | void) | string
}

declare class NavbarNav extends React.Component<NavbarNavProps, any> {}


export default NavbarNav
