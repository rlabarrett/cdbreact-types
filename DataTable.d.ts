import * as React from 'react';

export interface DataTableProps extends React.HTMLProps<any>{
    autoWidth: boolean
    barReverse: boolean
    bordered: boolean
    borderless: boolean
    btn: boolean
    children: any
    className: string
    dark: boolean
    data: object | string
    disableRetreatAfterSorting: boolean
    displayEntries: boolean
    entries: number
    entriesLabel: string | number | object
    entriesOptions: Array<number>
    exportToCSV: boolean
    filter: string
    fixed: boolean
    hover: boolean
    info: boolean
    infoLabel: Array<any> | object | string
    materialSearch: boolean
    maxHeight: string
    noBottomColumns: boolean
    noRecordsFoundLabel: string
    onPageChange?(): any
    onSearch?(): any
    onSort?(): any
    order: Array<string>
    pagesAmount: number
    paginationLabel: Array<string>
    paging: boolean
    proSelect: boolean
    responsive: boolean
    responsiveLg: boolean
    responsiveMd: boolean
    responsiveSm: boolean
    responsiveXl: boolean
    scrollX: boolean
    scrollY: boolean
    searching: boolean
    searchLabel: string
    small: boolean
    sortable: boolean
    sortRows: Array<string>
    striped: boolean
    tbodyColor: string
    tbodyTextWhite: boolean
    theadColor: string
    theadTextWhite: boolean
}

declare class DataTable extends React.Component<DataTableProps, any> {}


export default DataTable
