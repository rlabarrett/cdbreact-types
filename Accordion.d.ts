import * as React from 'react';

export interface AccordionProps extends React.HTMLProps<any>{
    accordionClass?: string;
    accordionHeaderClass?: string;
    accordionBodyClass?: string;
    hideIcon?: boolean;
    tag?: string;
}

declare class Accordion extends React.Component<AccordionProps, any> {}


export default Accordion
