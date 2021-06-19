import * as React from 'react';

export interface DataTableInputProps extends React.HTMLProps<any>{
    barReverse?: boolean
    label?: string
    materialSearch?: boolean
    onChange: () => (any | void)
    value?: string
}

declare class DataTableInput extends React.Component<DataTableInputProps, any> {}


export default DataTableInput
