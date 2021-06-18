import * as React from 'react';

export interface AccordionItemProps extends React.HTMLProps<any>{
    className?: string
    onClick?(): any
}

declare class AccordionItem extends React.Component<AccordionItemProps, any> {}


export default AccordionItem
