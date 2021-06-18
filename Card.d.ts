import * as React from 'react';

export interface CardProps extends React.HTMLProps<any>{
    className?: string
    color?: string
    tag?: string
    border?: boolean
}

declare class Card extends React.Component<CardProps, any> {}


export default Card
