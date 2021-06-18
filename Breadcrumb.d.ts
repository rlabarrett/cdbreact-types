import * as React from 'react';

export interface BreadcrumbProps extends React.HTMLProps<any>{
    bold?: boolean
    children?: any
    className?: string
    light?: boolean
    uppercase?: boolean
}

declare class Breadcrumb extends React.Component<BreadcrumbProps, any> {}


export default Breadcrumb
