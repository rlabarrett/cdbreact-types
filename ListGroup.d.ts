import * as React from 'react';

export interface ListGroupProps extends React.HTMLProps<any>{
    children?: any
    className?: string
    tag?: () => (any | void) | string
}

declare class ListGroup extends React.Component<ListGroupProps, any> {}


export default ListGroup
