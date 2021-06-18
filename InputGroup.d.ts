import * as React from 'react';

export interface InputGroupProps extends React.HTMLProps<any>{
    append: any | string
    appendClassNames: string
    ariaLabel: string
    background: boolean
    children: any
    className: string
    containerClassName: string
    containerId: string
    getValue?(): any
    hint: string
    id: string
    inputs: any
    label: string
    labelClassName: string
    material: boolean
    onChange?(): any
    onIconClick?(): any
    prepend: any
    prependClassName: string
    size: string
    tag?: () => (any | void) | string
    textClassName: string
    type: string
    value: string
    valueDefault: string
}

declare class InputGroup extends React.Component<InputGroupProps, any> {}


export default InputGroup
