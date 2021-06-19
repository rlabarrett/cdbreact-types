import * as React from 'react';

export interface InputProps extends React.HTMLProps<any>{
    children?: any
    className?: string
    containerClass?: string
    dataTest?: string
    disabled?: boolean
    error?: string
    filled?: boolean
    focused?: boolean | string
    gap?: boolean
    getValue: () => (any | void)
    group?: boolean
    hint?: string
    height?: string
    icon?: string
    iconBrand?: boolean
    iconClass?: string
    iconLight?: boolean
    iconRegular?: boolean
    iconSize?: string
    id?: string
    indeterminate?: boolean
    inputRef: () => (any | void) | object
    isControlled?: boolean
    label?: string | number | object | boolean
    labelClass?: string
    labelId?: string
    labelStyles?: object
    noTag?: boolean
    onBlur: () => (any | void)
    onChange: () => (any | void)
    onFocus: () => (any | void)
    onIconClick: () => (any | void)
    onIconMouseEnter: () => (any | void)
    onIconMouseLeave: () => (any | void)
    onInput: () => (any | void)
    material?: boolean
    size?: string
    success?: string
    tag?: () => (any | void) | string
    type?: string
    validate?: boolean
    value?: number | string | boolean
    valueDefault?: number | string
    width?: string
}

declare class Input extends React.Component<InputProps, any> {}


export default Input
