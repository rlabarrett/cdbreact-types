import * as React from 'react';
import {Color} from './index'

export interface ListGroupItemProps extends React.HTMLProps<any>{
    active: boolean
    children: any
    className: string
    color: Color
    disabled: boolean
    hover: boolean
    tag?: () => (any | void) | string
}

declare class ListGroupItem extends React.Component<ListGroupItemProps, any> {}


export default ListGroupItem
