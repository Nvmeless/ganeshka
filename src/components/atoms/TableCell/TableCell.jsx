import PropTypes, { bool, func } from 'prop-types';

export const TableCell = ({align,children,classes,component,padding,scope,size,sortDirection,sx,variant,...props}) => {
    
    let temp_classes = [];
    temp_classes.push((variant === 'head' ? 'MuiTableCell-head' : ''));
    temp_classes.push((variant === 'body' ? 'MuiTableCell-body' : ''));
    temp_classes.push((variant === 'footer' ? 'MuiTableCell-footer' : ''));
    temp_classes.push((size === 'small' ? 'MuiTableCell-sizeSmall' : ''));
    temp_classes.push((size === 'medium' ? 'MuiTableCell-sizeMedium' : ''));
    temp_classes.push((padding === 'checkbox' ? 'MuiTableCell-paddingCheckbox' : ''));
    temp_classes.push((padding === 'none' ? 'MuiTableCell-paddingNone' : ''));
    temp_classes.push((align === 'left' ? 'MuiTableCell-alignLeft' : ''));
    temp_classes.push((align === 'center' ? 'MuiTableCell-alignCenter' : ''));
    temp_classes.push((align === 'right' ? 'MuiTableCell-alignRight' : ''));
    temp_classes.push((align === 'justify' ? 'MuiTableCell-alignJustify' : ''));
    return (
        <td scope={scope} className={['MuiTableCell-root',classes, props?.className].join(' ') + ' ' +temp_classes.join(' ')} style={
            {
                ...{
                    border: "solid black 2px",
                    size: size
                }
            }
        }>
            {children}
        </td>
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