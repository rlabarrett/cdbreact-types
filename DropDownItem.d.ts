import * as React from 'react';

export interface DropDownItemProps extends React.HTMLProps<any>{
    active?: boolean
    children?: any
    className: string
    disabled?: boolean
    divider?: boolean
    header?: boolean
    onClick?(): any
    tag?: () => (any | void) | string
    toggle?: boolean
}

declare class DropDownItem extends React.Component<DropDownItemProps, any> {}


export default DropDownItem
