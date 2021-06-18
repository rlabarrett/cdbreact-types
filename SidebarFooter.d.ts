import * as React from 'react';

export interface SidebarFooterProps extends React.HTMLProps<any>{
    className?: string
    children?: any
}

declare class SidebarFooter extends React.Component<SidebarFooterProps, any> {}


export default SidebarFooter