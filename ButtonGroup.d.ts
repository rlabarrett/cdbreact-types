import * as React from 'react';

export interface ButtonGroupProps extends React.HTMLProps<any>{
    "aria-label"?: string
    children?: any
    className?: string
    role?: string
    size?: string
    vertical?: boolean

}

declare class ButtonGroup extends React.Component<ButtonGroupProps, any> {}


export default ButtonGroup
