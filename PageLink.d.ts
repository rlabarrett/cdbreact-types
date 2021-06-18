import * as React from 'react';

export interface PageLinkProps extends React.HTMLProps<any>{
    children?: any
    disabled?: boolean
    className?: string
    tag?: () => (any | void) | string
}

declare class PageLink extends React.Component<PageLinkProps, any> {}


export default PageLink
