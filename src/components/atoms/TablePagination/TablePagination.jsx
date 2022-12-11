import React from "react";
import { arrayOf, bool, elementType, func, number, object, oneOfType, string} from 'prop-types';
import { useState } from "react";
import { BiArrowToLeft,BiRightArrowAlt,BiLeftArrowAlt,BiArrowToRight } from 'react-icons/bi';


export const TablePagination = ({
    count,
    page = 1,
    onPageChange, 
    rowsPerPage = 10,ActionsComponent,
    backIconButtonProps,
    classes,
    compononent,
    getItemAriaLabel,
    labelDisplayedRows,
    labelRowsPerPage,
    nextIconButtonProps,
    onRowsPerPageChange,
    rowsPerPageOptions,
    SelectProps,
    showFirstButton,
    showLastButton,
    sx,
    ...props
    }) => {

    const maxpage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

    const handleFirstPageButtonClick = (event) => {
        onPageChange(1);
      };
    
      const handleBackButtonClick = (event) => {
        if(page-1 > 0)
            onPageChange(page - 1);
      };
    
      const handleNextButtonClick = (event) => {
        if(page < maxpage)
            onPageChange(page + 1);
      };
    
      const handleLastPageButtonClick = (event) => {
        onPageChange(maxpage);
      };

    return (
        <div className={['MuiTablePagination-root', props?.className].join(' ')} >
            {showFirstButton && (
                <span
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                // aria-label={getItemAriaLabel('first', page)}
                // title={getItemAriaLabel('first', page)}
                >
                <BiArrowToLeft />
                </span>
            )}
            <span
                onClick={handleBackButtonClick}
                disabled={page === 0}
                color="inherit"
                // aria-label={getItemAriaLabel('previous', page)}
                // title={getItemAriaLabel('previous', page)}
                {...backIconButtonProps}
            >
                <BiLeftArrowAlt></BiLeftArrowAlt>
            </span>
            <span>{page}/{maxpage}</span>
            <span
                onClick={handleNextButtonClick}
                disabled={count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false}
                color="inherit"
                // aria-label={getItemAriaLabel('next', page)}
                // title={getItemAriaLabel('next', page)}
                {...nextIconButtonProps}
            >
                <BiRightArrowAlt></BiRightArrowAlt>
            </span>
            {showLastButton && (
                <span
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                // aria-label={getItemAriaLabel('last', page)}
                // title={getItemAriaLabel('last', page)}
                >
                <BiArrowToRight />
                </span>
            )}
        </div>
    )
}

TablePagination.propTypes ={ 
    count: number.isRequired,
    onPageChange: func,
    page: number,
    rowsPerPage:number.isRequired,
    ActionsComponent: elementType,
    backIconButtonProps: object,
    classes: object,
    compononent:  elementType,
    getItemAriaLabel: func,
    labelDisplayedRows: func,
    labelRowsPerPage: func,
    nextIconButtonProps: object,
    onRowsPerPageChange: func,
    rowsPerPageOptions: arrayOf([number, {label:string, value: number}]),
    SelectProps: object,
    showFirstButton: bool,
    showLastButton: bool,
    sx: oneOfType(arrayOf([func, object, bool]), func, object)

}
