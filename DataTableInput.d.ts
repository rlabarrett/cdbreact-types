import * as React from 'react';

export interface DataTableProps extends React.HTMLProps<any>{
    barReverse?: boolean
    label?: string
    materialSearch?: boolean
    onChange?(): any
    value?: string
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
