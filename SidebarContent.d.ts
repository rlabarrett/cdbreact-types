import * as React from 'react';

export interface SidebarContentProps extends React.HTMLProps<any>{
    className?: string
    children?: any
}

declare class SidebarContent extends React.Component<SidebarContentProps, any> {}


export default SidebarContent