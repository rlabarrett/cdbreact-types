import * as React from 'react';

export interface DropDownProps extends React.HTMLProps<any>{
    className?: string
    dropleft?: boolean
    dropright?: boolean
    dropup?: boolean
    isOpen?: boolean
    toogle?(): any
    tag?: string
}

declare class DropDown extends React.Component<DropDownProps, any> {}


export default DropDown
