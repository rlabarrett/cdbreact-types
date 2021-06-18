import * as React from 'react';

export interface CarouselProps extends React.HTMLProps<any>{
    activeItem?: number
    children?: any
    className?: string
    interval?: number | boolean
    length?: number
    mobileGesture?: boolean
    multiItem?: boolean
    onHoverStop?: boolean
    showControls?: boolean
    showIndicators?: boolean
    slide?: boolean
    tag?: () => (any | void) | string
    testimonial?: boolean
    thumbnails?: boolean
}

declare class Carousel extends React.Component<CarouselProps, any> {}


export default Carousel
