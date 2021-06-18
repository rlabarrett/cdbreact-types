import * as React from 'react';

export interface SwitchProps extends React.HTMLProps<any>{
    checked?: boolean
    tag?: string
}

declare class Switch extends React.Component<SwitchProps, any> {}


export default Switch