import * as React from 'react';

export interface DataTableProps extends React.HTMLProps<any>{
    activePage: number
    changeActivePage(): any
    label: [string]
    pages: [any]
    pagesAmount: number
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
