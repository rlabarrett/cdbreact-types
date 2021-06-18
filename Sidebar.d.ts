import * as React from 'react';

export interface SidebarProps extends React.HTMLProps<any>{
    className?: string
    children?: any
    textColor?: string
    backgroundColor?: string
}

declare class Sidebar extends React.Component<SidebarProps, any> {}


export default Sidebar