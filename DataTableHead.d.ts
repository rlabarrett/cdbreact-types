import * as React from 'react';

export interface DataTableHeadProps extends React.HTMLProps<any>{
    sorted: boolean
    color?: string
    columns?: [object]
    handleSort: () => (any | void)
    scrollX?: boolean
    scrollY?: boolean
    sortable?: boolean
    textWhite?: boolean
}

declare class DataTableHead extends React.Component<DataTableHeadProps, any> {}


export default DataTableHead
