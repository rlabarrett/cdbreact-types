import * as React from 'react';

export interface CarouselCaptionProps extends React.HTMLProps<any>{
    children?: any,
    className?: string,
    tag?(): any | string,
}

declare class CarouselCaption extends React.Component<CarouselCaptionProps, any> {}


export default CarouselCaption
