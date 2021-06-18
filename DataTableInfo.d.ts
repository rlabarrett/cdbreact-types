import * as React from 'react';

export interface DataTableProps extends React.HTMLProps<any>{
    activePage: number
    entries: number
    filteredRows: [any]
    info: boolean
    noRecordsFoundLabel: string
    pages: [any]
    label?: [string]
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
