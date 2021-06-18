import * as React from 'react';

export interface RatingProps extends React.HTMLProps<any>{
    containerClassName?: string
    data?: [object]
    feedback?: boolean
    fillClassName?: string
    fillColors?: boolean | [string]
    getValue?: () => (any | void)
    iconClassName?: string,
    iconFaces?: boolean
    iconRegular?: boolean
    iconSize?: string
    submitHandler?: () => (any | void)
    tag?: string
}

declare class Rating extends React.Component<RatingProps, any> {}


export default Rating
