import * as React from 'react';

export interface TableFooterProps extends React.HTMLProps<any>{
    children?: any
    color?: string
    columns?: [object]
    textWhite?: boolean
}

declare class TableFooter extends React.Component<TableFooterProps, any> {}


export default TableFooter