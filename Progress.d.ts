import * as React from 'react';
import {Color} from "./index";

export interface ProgressProps extends React.HTMLProps<any>{
    barClassName?: string
    children?: any
    className?: string
    colors?: Color
    height?: number
    max?: number
    min?: number
    value?: number
    wrapperStyle?: object
}

declare class Progress extends React.Component<ProgressProps, any> {}


export default Progress
