import * as React from 'react';

export interface PageItemProps extends React.HTMLProps<any>{
    active?: boolean
    children?: any
    className?: string
    disabled?: boolean
    tag?: () => (any | void) | string
}

declare class PageItem extends React.Component<PageItemProps, any> {}


export default PageItem
