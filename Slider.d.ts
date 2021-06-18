import * as React from 'react';
import {Color} from "./index";

export interface SliderProps extends React.HTMLProps<any> {
    value?: number | string
    onChange?: () => (any | void)
    onAfterChange?: () => (any | void)
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    size?: "sm" | "lg"
    variant?: Color
    inputProps?: object
    tooltip?: "auto" | "on" | "off"
    tooltipPlacement?: "top" | "bottom"
    tooltipLabel?: () => (any | void)
    tooltipStyle?: object
    tooltipProps?: object
    className?: string
    bsPrefix?: string
}

declare class Slider extends React.Component<SliderProps, any> {}

export default Slider