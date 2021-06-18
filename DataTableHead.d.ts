import * as React from 'react';

export interface DataTableProps extends React.HTMLProps<any>{
    sorted: boolean
    color?: string
    columns?: [object]
    handleSort?(): any
    scrollX?: boolean
    scrollY?: boolean
    sortable?: boolean
    textWhite?: boolean
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
