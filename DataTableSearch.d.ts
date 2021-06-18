import * as React from 'react';

export interface DataTableSearchProps extends React.HTMLProps<any>{
    handleSearchChange(): any
    search: string
    searching: boolean
    barReverse?: boolean
    label?: string
    materialSearch?: boolean
}

declare class DataTableSearch extends React.Component<DataTableSearchProps, any> {}


export default DataTableSearch
