import * as React from 'react';

export interface DataTableProps extends React.HTMLProps<any>{
    displayEntries: boolean
    entries: number
    entriesArr: [number]
    handleEntriesChange(): any
    label: number | object | string
    paging: boolean
    barReverse?: boolean
    proSelect?: boolean
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
