import * as React from 'react';

export interface DataTableProps extends React.HTMLProps<any>{
    handleSearchChange(): any
    search: string
    searching: boolean
    barReverse?: boolean
    label?: string
    materialSearch?: boolean
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
