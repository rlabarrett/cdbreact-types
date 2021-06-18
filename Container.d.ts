import * as React from 'react';
import {SizeAbbreviations} from "./index";

export interface ContainerProps extends React.HTMLProps<any>{
    className: string
    fluid: boolean
    size: SizeAbbreviations
    tag?: () => (any | void) | string
}

declare class Container extends React.Component<ContainerProps, any> {}


export default Container
