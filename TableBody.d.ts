import * as React from 'react';

export interface TableBodyProps extends React.HTMLProps<any>{
    children?: any
    color?: string
    rows?: [object]
    textWhite?: boolean
}

declare class TableBody extends React.Component<TableBodyProps, any> {}


export default TableBody