import * as React from 'react';

export interface DataTableInfoProps extends React.HTMLProps<any>{
    activePage: number
    entries: number
    filteredRows: [any]
    info: boolean
    noRecordsFoundLabel: string
    pages: [any]
    label?: [string]
}

declare class DataTableInfo extends React.Component<DataTableInfoProps, any> {}


export default DataTableInfo
