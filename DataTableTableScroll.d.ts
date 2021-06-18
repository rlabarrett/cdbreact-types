import * as React from 'react';

export interface DataTableTableScrollProps extends React.HTMLProps<any>{
    autoWidth: boolean
    bordered: boolean
    borderless: boolean
    btn: boolean
    dark: boolean
    fixed: boolean
    handleSort(): any
    handleTableBodyScroll(): any
    hover: boolean
    responsive: boolean
    responsiveLg: boolean
    responsiveMd: boolean
    responsiveSm: boolean
    responsiveXl: boolean
    small: boolean
    sortable: boolean
    sorted: boolean
    striped: boolean
    tbodyColor: string
    tbodyTextWhite: boolean
    theadColor: string
    theadTextWhite: boolean
    translateScrollHead: number
    children?: any
    columns?: [object]
    maxHeight?: string
    rows?: [object]
    scrollX?: boolean
    scrollY?: boolean
}

declare class DataTableTableScroll extends React.Component<DataTableTableScrollProps, any> {}


export default DataTableTableScroll
