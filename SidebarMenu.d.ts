import * as React from 'react';

export interface SidebarMenuProps extends React.HTMLProps<any>{
    className?: string
    children?: any
    popperArrow?: boolean
}

declare class SidebarMenu extends React.Component<SidebarMenuProps, any> {}


export default SidebarMenu