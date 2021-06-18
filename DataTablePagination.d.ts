import * as React from 'react';

export interface DataTablePaginationProps extends React.HTMLProps<any>{
    activePage: number
    changeActivePage(): any
    label: [string]
    pages: [any]
    pagesAmount: number
}

declare class DataTablePagination extends React.Component<DataTablePaginationProps, any> {}


export default DataTablePagination
