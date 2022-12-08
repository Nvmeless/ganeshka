import PropTypes, { bool, func } from 'prop-types';

export const TableSortLabel = ({children,classes,component,sx,...props}) => {
    

    return (
        <div className={['MuiTableCell-root','Mui-active','MuiTableSortLabel-icon','MuiTableSortLabel-iconDirectionDesc','MuiTableSortLabel-iconDirectionAsc',classes, props?.className].join(' ')}  style={
            {
                ...{
                    border: "solid black 2px"
                }
            }
        }>
            {children}
        </div>
    )
}

TableSortLabel.propTypes = {

    active: Boolean,
    children: PropTypes.node,
    classes: PropTypes.object,
    padding: PropTypes.oneOfType([
        'asc',
        'desc', 
    ]),
    hideSortIcon : Boolean,
    IconComponent : PropTypes.elementType,
    component:PropTypes.elementType,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf([
            func,
            Object, 
            bool
        ]), 
        func, 
        Object
    ]),
}