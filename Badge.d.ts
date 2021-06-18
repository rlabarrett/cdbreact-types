import * as React from 'react';

export interface BadgeProps extends React.HTMLProps<any>{
    children: any,
    className: string,
    flat: boolean,
    size: string,
    borderType: string,
    colors: string
    tag: string,
}

declare class Badge extends React.Component<BadgeProps, any> {}


export default Badge
