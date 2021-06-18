import * as React from 'react';

export interface CarouselItemProps extends React.HTMLProps<any>{
    active?: boolean
    children?: any
    className?: string
    itemId?: any
    tag?: () => (any | void) | string
}

declare class CarouselItem extends React.Component<CarouselItemProps, any> {}


export default CarouselItem
