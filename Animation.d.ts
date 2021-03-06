import * as React from 'react';

export interface AnimationProps extends React.HTMLProps<any>{
    children: any
    className?: string
    count?: number
    delay?: string
    duration?: string | number
    infinite?: boolean
    onAnimationEnd?: () => (any | void)
    onAnimationIteration?: () => (any | void)
    onAnimationStart?: () => (any | void)
    reveal?: boolean
    style?: any
    tag?: () => (any | void) | string
    type?: string
}

declare class Animation extends React.Component<AnimationProps, any> {}


export default Animation
