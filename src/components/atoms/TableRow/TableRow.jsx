import React from "react";
import PropTypes, { arrayOf, bool, func, object } from 'prop-types';
import {StyledTableRow} from './styles.js';

export const TableRow = ({children, classes, component, hover, selected, sx, ...props}) => {

    classes = (classes ? classes:'');
    classes += (hover ? 'MuiTableRow-hover' : '');
    classes += (selected ? 'Mui-selected' : '');

    return( 
        <StyledTableRow {...props} className={['MuiTableRow-root', props?.className].join(" ")}>
            {children}
        </StyledTableRow>
    );
}

TableRow.propTypes ={ 

    children: PropTypes.node,

    classes: PropTypes.object,

    component: PropTypes.elementType,

    hover: PropTypes.bool,
    selected: PropTypes.bool,
    sx: PropTypes.oneOfType(
        arrayOf([
            func,
            object,
            bool
        ]),
        func,
        object
    )
}
