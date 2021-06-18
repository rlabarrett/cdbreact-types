import * as React from 'react';

export interface ButtonProps extends React.HTMLProps<any>{
    action?: boolean;
    active?: boolean;
    block?: boolean;
    circle?: boolean;
    className?: string;
    color?: string;
    disabled?: boolean;
    download?: string;
    endingText?: string;
    flat?: boolean;
    innerRef?: () => (any | void) | string;
    label?: string;
    onClick?: () => (any | void) | string;
    role?: string;
    size?: string;
    social?: string;
    tag?: string;
    target?: string;
    type?: string;
}

declare class Button extends React.Component<ButtonProps, any> {}


export default Button
