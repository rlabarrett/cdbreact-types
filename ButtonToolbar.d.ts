import * as React from 'react';

export interface ButtonToolbarProps extends React.HTMLProps<any>{
    "aria-label"?: string
    children?: any
    className?: string
    role?: string
}

declare class ButtonToolbar extends React.Component<ButtonToolbarProps, any> {}


export default ButtonToolbar