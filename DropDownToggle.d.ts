import * as React from 'react';
import {Color} from "./index";

export interface DropDownToggleProps extends React.HTMLProps<any>{
    className?: string
    colors?: Color
    dropleft?: boolean
    dropright?: boolean
    dropup?: boolean
    dropdown?: boolean
    position?: string
    children?: any
    caret?: boolean
    size?: string
    nav?: boolean
    tag?: () => (any | void) | string
}

declare class DropDownToggle extends React.Component<DropDownToggleProps, any> {}


export default DropDownToggle
