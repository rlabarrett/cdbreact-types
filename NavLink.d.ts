import * as React from 'react';

export interface NavLinkProps extends React.HTMLProps<any>{
    active?: boolean
    children?: any
    className?: string
    disabled?: boolean
    link?: boolean
    to?: string
}

declare class NavLink extends React.Component<NavLinkProps, any> {}


export default NavLink
