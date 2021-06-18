import * as React from 'react';

export interface NavbarProps extends React.HTMLProps<any>{
    className?: string
    color?: string
    dark?: boolean
    double?: boolean
    expand?: boolean | string
    fixed?: string
    light?: boolean
    scrolling?: boolean
    scrollingNavbarOffset?: number
    sticky?: string
    tag?: () => (any | void) | string
    transparent?: boolean
}

declare class Navbar extends React.Component<NavbarProps, any> {}


export default Navbar
