import * as React from 'react';

export interface SidebarMenuItemProps extends React.HTMLProps<any>{
    className?: string
    children?: any
    icon?: string
    iconClassName?: string
    active?: boolean
    firstchild?: number
    popperarrow?: number
}

declare class SidebarMenuItem extends React.Component<SidebarMenuItemProps, any> {}


export default SidebarMenuItem