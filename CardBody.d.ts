import * as React from 'react';

export interface CardBodyProps extends React.HTMLProps<any> {
    cascade?: boolean
    className?: string
    tag?():any | string
}
declare class CardBody extends React.Component<CardBodyProps, any> {}


export default CardBody
