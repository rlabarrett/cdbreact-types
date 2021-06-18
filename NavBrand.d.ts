import * as React from 'react';

export interface NavBrandProps extends React.HTMLProps<any>{
    className?: string
    href?: string
}

declare class NavBrand extends React.Component<NavBrandProps, any> {}


export default NavBrand
