import * as React from 'react';

export interface ViewProps extends React.HTMLProps<any>{
    children?: any
    className?: string
    fixed?: boolean
    hover?: boolean
    rounded?: boolean
    src?: string
    tag?: string
}

declare class View extends React.Component<ViewProps, any> {}


export default View