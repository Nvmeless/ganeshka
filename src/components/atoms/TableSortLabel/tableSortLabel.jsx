import PropTypes, { bool, func } from 'prop-types';
import './style.css';

export const TableSortLabel = ({active,children,classes,direction,hideSortIcon,IconComponent,sx,...props}) => {
    
    classes    = (classes ? classes: '');
    classes   += (active ? 'Mui-active' : '');
    direction  = (direction !== undefined ? direction : 'asc');
    classes   += (direction === 'desc' ? 'MuiTableSortLabel-iconDirectionDesc' : '');
    classes   += (direction === 'asc' ? 'MuiTableSortLabel-iconDirectionAsc' : '');

    return (
        <div className={['MuiTableCell-root','MuiTableSortLabel-icon',classes, props?.className].join(' ')}  style={
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
    children: PropTypes.string,
    classes: PropTypes.object,
    direction: PropTypes.oneOfType([
        'asc',
        'desc', 
    ]),
    hideSortIcon : Boolean,
    IconComponent : PropTypes.elementType,
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