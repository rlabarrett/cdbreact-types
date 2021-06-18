import * as React from 'react';

export interface MaskProps extends React.HTMLProps<any>{
    children: any
    className: string
    overlay: string
    pattern: string | number
    tag: string
}

declare class Mask extends React.Component<MaskProps, any> {}


export default Mask
