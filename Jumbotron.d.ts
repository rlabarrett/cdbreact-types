import * as React from 'react';

export interface JumbotronProps extends React.HTMLProps<any>{
    children?: any
    className?: string
    fluid?: boolean
}

declare class Jumbotron extends React.Component<JumbotronProps, any> {}


export default Jumbotron