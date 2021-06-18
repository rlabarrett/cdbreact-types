import * as React from 'react';

export interface NavItemProps extends React.HTMLProps<any>{
    active?: boolean
    children?: any
    className?: string
    tag?: () => (any | void) | string
}

declare class NavItem extends React.Component<NavItemProps, any> {}


export default NavItem
