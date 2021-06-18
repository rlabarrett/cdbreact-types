import * as React from 'react';
import {Color} from "./index";

export interface DataTableProps extends React.HTMLProps<any>{
    className?: string
    colors?: Color
    onClose?(): any
    onClosed?(): any
    tag?: string
    dropleft?: boolean
    dropright?: boolean
    dropup?: boolean
    dropdown?: boolean
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
