import * as React from 'react';

export interface TableHeaderProps extends React.HTMLProps<any>{
    children: any
    color: string
    columns: [object]
    textWhite: boolean
}

declare class TableHeader extends React.Component<TableHeaderProps, any> {}


export default TableHeader