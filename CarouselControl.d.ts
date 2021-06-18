import * as React from 'react';

export interface CarouselControlProps extends React.HTMLProps<any>{
    className?: string
    direction?: string
    iconLeft?: boolean
    iconRight?: boolean
    multiItem?: boolean
    onClick?: any
    tag?: () => (any | void) | string
    testimonial?: boolean
}

declare class CarouselControl extends React.Component<CarouselControlProps, any> {}


export default CarouselControl
