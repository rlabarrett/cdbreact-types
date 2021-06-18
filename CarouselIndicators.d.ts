import * as React from 'react';

export interface CarouselIndicatorsProps extends React.HTMLProps<any>{
    children?: any
    className?: string,
}

declare class CarouselIndicators extends React.Component<CarouselIndicatorsProps, any> {}


export default CarouselIndicators
