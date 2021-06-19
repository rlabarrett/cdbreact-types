import * as React from 'react';

export interface CollapseProps extends React.HTMLProps<any>{
    children: any
    className: string
    delay: number | object
    id: string
    isOpen: string | boolean
    navbar: boolean
    onClosed?: () => (any | void)
    onOpened?: () => (any | void)
}

declare class Collapse extends React.Component<CollapseProps, any> {}


export default Collapse
