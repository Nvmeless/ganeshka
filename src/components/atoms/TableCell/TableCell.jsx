import PropTypes, { bool, func } from 'prop-types';
import {StyledTableCell} from './styles.js';
import './style.css';

export const TableCell = ({align,children,classes,component,padding,scope,size,sortDirection,changeOrder,sx,variant,...props}) => {
    classes = classes ? classes : '';
    classes += ((variant === 'head' ? 'MuiTableCell-head' : ''));
    classes += ((variant === 'body' ? 'MuiTableCell-body' : ''));
    classes += ((variant === 'footer' ? 'MuiTableCell-footer' : ''));
    classes += ((size === 'small' ? 'MuiTableCell-sizeSmall' : ''));
    classes += ((size === 'medium' ? 'MuiTableCell-sizeMedium' : ''));
    classes += ((padding === 'checkbox' ? 'MuiTableCell-paddingCheckbox' : ''));
    classes += ((padding === 'none' ? 'MuiTableCell-paddingNone' : ''));
    classes += ((align === 'left' ? 'MuiTableCell-alignLeft' : ''));
    classes += ((align === 'center' ? 'MuiTableCell-alignCenter' : ''));
    classes += ((align === 'right' ? 'MuiTableCell-alignRight' : ''));
    classes += ((align === 'justify' ? 'MuiTableCell-alignJustify' : ''));
    return (
        <StyledTableCell  {...props} scope={scope} className={['MuiTableCell-root',classes, props?.className].join(' ')} style={
            {
                ...{
                    size: size
                }
            }
        }>
            {children}
        </StyledTableCell>
        
    )
}

TableCell.propTypes = {
    align: PropTypes.oneOfType([
        'center',
        'inherit', 
        'justify', 
        'left', 
        'right'
    ]),
    children: PropTypes.node,
    classes: PropTypes.object,
    component:PropTypes.elementType,
    padding: PropTypes.oneOfType([
        'checkbox',
        'none', 
        'normal'
    ]),
    scope: String,
    size: PropTypes.oneOfType([
        'medium', 
        'small', 
        String
    ]),
    sortDirection: PropTypes.oneOfType([
        'asc', 
        'desc', 
        false
    ]),
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf([
            func,
            Object, 
            bool
        ]), 
        func, 
        Object
    ]),
    variant: PropTypes.oneOfType([
        'center',
        'inherit', 
        'justify', 
        'left', 
        'right'
    ])
}