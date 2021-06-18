import * as React from 'react';
import {Color} from "./index";

export interface PaginationProps extends React.HTMLProps<any>{
    children?: any
    circle?: boolean
    className?: string,
    colors?: Color
    size?: string
    tag?: () => (any | void) | string
    sm?: boolean
}

declare class Pagination extends React.Component<PaginationProps, any> {}


export default Pagination
