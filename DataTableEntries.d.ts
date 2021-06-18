import * as React from 'react';

export interface DataTableEntriesProps extends React.HTMLProps<any>{
    displayEntries: boolean
    entries: number
    entriesArr: [number]
    handleEntriesChange(): any
    label: number | object | string
    paging: boolean
    barReverse?: boolean
    proSelect?: boolean
}

declare class DataTableEntries extends React.Component<DataTableEntriesProps, any> {}


export default DataTableEntries
