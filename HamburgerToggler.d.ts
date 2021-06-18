import * as React from 'react';

export interface HamburgerTogglerProps extends React.HTMLProps<any>{
    className: string
    color: string
    id: string
}

declare class HamburgerToggler extends React.Component<HamburgerTogglerProps, any> {}


export default HamburgerToggler
