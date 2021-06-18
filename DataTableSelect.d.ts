import * as React from 'react';

export interface DataTableSelectProps extends React.HTMLProps<any>{
    entries: [number]
    label: string | number | object
    onChange(): any
    value: number
}

declare class DataTableSelect extends React.Component<DataTableSelectProps, any> {}


export default DataTableSelect
