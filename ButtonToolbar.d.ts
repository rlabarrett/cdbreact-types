import * as React from 'react';

export interface DataTableProps extends React.HTMLProps<any>{
    "aria-label"?: string
    children?: any
    className?: string
    role?: string
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
