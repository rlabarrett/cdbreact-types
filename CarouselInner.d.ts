import * as React from 'react';

export interface CarouselInnerProps extends React.HTMLProps<any>{
    active: boolean
    children: any
    className: string
    tag?: () => (any | void) | string
}

declare class CarouselInner extends React.Component<CarouselInnerProps, any> {}


export default CarouselInner
