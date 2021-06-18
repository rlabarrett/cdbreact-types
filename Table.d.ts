import * as React from 'react';

export interface TableProps extends React.HTMLProps<any>{
    autoWidth?: boolean
    bordered?: boolean
    borderless?: boolean
    btn?: boolean
    children?: any
    className?: string
    dark?: boolean
    fixed?: boolean
    hover?: boolean
    maxHeight?: string
    responsive?: boolean
    responsiveLg?: boolean
    responsiveMd?: boolean
    responsiveSm?: boolean
    responsiveXl?: boolean
    scrollY?: boolean
    small?: boolean
    striped?: boolean
    theadColor?: string
    wrapperClassName?: string
}

declare class Table extends React.Component<TableProps, any> {}


export default Table