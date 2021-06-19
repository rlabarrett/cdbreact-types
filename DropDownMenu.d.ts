import * as React from 'react';
import {Color} from "./index";

export interface DropDownMenuProps extends React.HTMLProps<any>{
    className?: string
    colors?: Color
    onClose?: () => (any | void)
    onClosed?: () => (any | void)
    tag?: string
    dropleft?: boolean
    dropright?: boolean
    dropup?: boolean
    dropdown?: boolean
}

declare class DropDownMenu extends React.Component<DropDownMenuProps, any> {}


export default DropDownMenu