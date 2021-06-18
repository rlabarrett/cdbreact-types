import * as React from 'react';

export interface DataTableTableProps extends React.HTMLProps<any>{
    autoWidth: boolean
    bordered: boolean
    borderless: boolean
    btn: boolean
    dark: boolean
    fixed: boolean
    handleSort(): any
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
    children?: any
    columns?: [object]
    noBottomColumns?: boolean
    rows?: [object]
}

declare class DataTableTable extends React.Component<DataTableTableProps, any> {}


export default DataTableTable
