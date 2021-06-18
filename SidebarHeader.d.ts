import * as React from 'react';

export interface SidebarHeaderProps extends React.HTMLProps<any>{
    className?: string
    children?: any
}

declare class SidebarHeader extends React.Component<SidebarHeaderProps, any> {}


export default SidebarHeader