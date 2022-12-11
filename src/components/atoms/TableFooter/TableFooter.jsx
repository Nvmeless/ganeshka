import PropTypes, { bool, func } from 'prop-types';
import {StyledTableFooter} from './styles.js';

export const TableFooter = ({align,children,classes,sx,...props}) => {
    classes = classes ? classes : '';
    return (
        <StyledTableFooter  {...props} className={['MuiTableFooter-root',classes, props?.className].join(' ')} style={
            {
                ...{
                }
            }
        }>
            {children}
        </StyledTableFooter>
    )
}

TableFooter.propTypes = {
    children:PropTypes.node,
    classes:PropTypes.object,
    component:PropTypes.elementType,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf([
            func,
            Object, 
            bool
        ]), 
        func, 
        Object
    ])
}