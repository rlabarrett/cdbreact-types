import * as React from 'react';

export interface CarouselIndicatorProps extends React.HTMLProps<any>{
    active: boolean
    alt?: string
    children?: any
    className?: string
    img?: string
}
declare class CarouselIndicator extends React.Component<CarouselIndicatorProps, any> {}


export default CarouselIndicator
