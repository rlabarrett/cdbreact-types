import * as React from 'react';

export interface CloseIconProps extends React.HTMLProps<any>{
    ariaLabel?: string
    className?: string
    onClick?: () => (any | void)
}

declare class CloseIcon extends React.Component<CloseIconProps, any> {}


export default CloseIcon
